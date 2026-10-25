import { buildSystemPrompt } from "@/lib/chatKnowledge";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type IncomingMessage = { role: "user" | "bot"; text: string };

const MODEL = "gemini-2.5-flash";

// Simple rate limit: 20 messages per visitor every 10 minutes
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 20;
const hits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || entry.resetAt < now) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

// Visit /api/chat in the browser: it should show { "configured": true }
export async function GET() {
  return Response.json({ configured: Boolean(process.env.GEMINI_API_KEY) });
}

export async function POST(req: Request) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "not_configured" }, { status: 503 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return Response.json({ error: "rate_limited" }, { status: 429 });
  }

  let body: { messages?: IncomingMessage[] };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "bad_request" }, { status: 400 });
  }

  // Keep the last 10 messages, limit each to 1000 characters, map roles for Gemini
  const messages = (body.messages ?? [])
    .filter((m) => m && typeof m.text === "string" && m.text.trim().length > 0)
    .slice(-10)
    .map((m) => ({
      role: m.role === "bot" ? ("model" as const) : ("user" as const),
      text: m.text.slice(0, 1000),
    }));

  // The conversation must start with a user message
  while (messages.length && messages[0].role !== "user") messages.shift();
  if (messages.length === 0) {
    return Response.json({ error: "bad_request" }, { status: 400 });
  }

  const upstream = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:streamGenerateContent?alt=sse`,
    {
      method: "POST",
      headers: {
        "x-goog-api-key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [
            {
              text:
                buildSystemPrompt() +
                "\n\nFormatting: plain text only. No markdown, no bold, no headings, no emojis.",
            },
          ],
        },
        contents: messages.map((m) => ({
          role: m.role,
          parts: [{ text: m.text }],
        })),
        generationConfig: {
          maxOutputTokens: 400,
          temperature: 0.4,
        },
      }),
    }
  );

  if (!upstream.ok || !upstream.body) {
    const detail = await upstream.text().catch(() => "");
    console.error("Gemini error", upstream.status, detail);
    return Response.json({ error: "upstream" }, { status: 502 });
  }

  // Convert Gemini's streaming events into plain text chunks for the browser
  const reader = upstream.body.getReader();
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();
  let buffer = "";

  const stream = new ReadableStream<Uint8Array>({
    async pull(controller) {
      try {
        const { done, value } = await reader.read();
        if (done) {
          controller.close();
          return;
        }
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";

        for (const line of lines) {
          if (!line.startsWith("data:")) continue;
          const payload = line.slice(5).trim();
          if (!payload) continue;
          try {
            const event = JSON.parse(payload);
            if (event.error) {
              controller.error(new Error("upstream_error"));
              return;
            }
            const text = (event.candidates?.[0]?.content?.parts ?? [])
              .map((p: { text?: string }) => p.text ?? "")
              .join("");
            if (text) controller.enqueue(encoder.encode(text));
          } catch {
            // ignore lines that are not JSON
          }
        }
      } catch {
        controller.error(new Error("stream_failed"));
      }
    },
    cancel() {
      reader.cancel();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}