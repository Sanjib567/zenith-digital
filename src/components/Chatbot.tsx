"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Send, X } from "lucide-react";
import { getRuleReply, quickReplies, type ChatLink } from "@/lib/chatKnowledge";

type Msg = { role: "user" | "bot"; text: string; links?: ChatLink[] };

const GREETING =
  "Hi! I'm Zenith's assistant. Ask me about our services, locations, timelines or pricing.";

const linkClass =
  "rounded-full border border-brand-blue/25 bg-white px-3 py-1 text-xs font-bold text-brand-blue shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-brand-blue/50 hover:shadow-md";

// Types the text out one character at a time
function Typewriter({ text, speed = 20 }: { text: string; speed?: number }) {
  const [shown, setShown] = useState("");
  useEffect(() => {
    setShown("");
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return <>{shown}</>;
}

function TypingDots() {
  return (
    <span className="inline-flex items-center gap-1 py-1">
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.3s]" />
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.15s]" />
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" />
    </span>
  );
}

// Zenith logo, used in the header and beside each bot message
function ZenithAvatar({ size = 40 }: { size?: number }) {
  return (
    <span
      className="flex shrink-0 items-center justify-center rounded-full bg-white p-0.5 shadow-md ring-1 ring-slate-200"
      style={{ width: size, height: size }}
    >
      <img src="/images/zenith-logo.jpeg" alt="Zenith" className="h-full w-full rounded-full object-contain" />
    </span>
  );
}

// Professional background: a slow colour wash, a faint dot grid and a light sweep
function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50/60">
      <div className="chat-mesh absolute -inset-[30%]" />
      <div className="chat-dots absolute inset-0" />
      <div className="chat-sweep absolute inset-y-0 -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-white/80 to-transparent" />
    </div>
  );
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([{ role: "bot", text: GREETING }]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [streamText, setStreamText] = useState<string | null>(null);
  const [newIndex, setNewIndex] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [bounceKey, setBounceKey] = useState(0);
  const aiAvailable = useRef(true);
  const endRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, streamText, open]);

  // The launcher bounces in again each time the visitor scrolls past the hero
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (scrolled) setBounceKey((k) => k + 1);
  }, [scrolled]);

  const openChat = useCallback(() => {
    setClosing(false);
    setOpen(true);
  }, []);

  const closeChat = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 220);
  }, []);

  // While the chat is open, a tap or click anywhere outside it closes it. Escape also closes it.
  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: PointerEvent) => {
      if (closing) return;
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        closeChat();
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !closing) closeChat();
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, closing, closeChat]);

  async function streamAI(history: Msg[], onChunk: (text: string) => void): Promise<boolean> {
    if (!aiAvailable.current) return false;
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history.map((m) => ({ role: m.role, text: m.text })) }),
      });
      if (res.status === 503) {
        aiAvailable.current = false;
        return false;
      }
      if (!res.ok || !res.body) return false;

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let received = false;
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        if (chunk) {
          received = true;
          onChunk(chunk);
        }
      }
      return received;
    } catch {
      return false;
    }
  }

  async function send(raw: string) {
    const text = raw.trim();
    if (!text || busy) return;

    const history: Msg[] = [...messages, { role: "user", text }];
    setMessages(history);
    setInput("");
    setBusy(true);
    setStreamText("");

    let full = "";
    const ok = await streamAI(history, (chunk) => {
      full += chunk;
      setStreamText(full);
    });

    setStreamText(null);

    const reply: Msg =
      ok && full.trim()
        ? { role: "bot", text: full.trim() }
        : (() => {
            const rule = getRuleReply(text);
            return { role: "bot", text: rule.text, links: rule.links };
          })();

    setNewIndex(history.length);
    setMessages((prev) => [...prev, reply]);
    setBusy(false);
  }

  const lastIsBot = messages[messages.length - 1]?.role === "bot";

  return (
    <>
      <style>{`
        @keyframes chat-in {
          from { opacity: 0; transform: translateY(20px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes chat-out {
          from { opacity: 1; transform: translateY(0) scale(1); }
          to   { opacity: 0; transform: translateY(16px) scale(0.97); }
        }
        @keyframes msg-in {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes chip-in {
          from { opacity: 0; transform: translateY(6px) scale(0.92); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes mesh-drift {
          0%   { transform: translate3d(-4%, -3%, 0) scale(1); }
          50%  { transform: translate3d(3%, 2%, 0) scale(1.08); }
          100% { transform: translate3d(-2%, 4%, 0) scale(1.03); }
        }
        @keyframes sweep {
          0%       { transform: translateX(0) skewX(-14deg); opacity: 0; }
          12%      { opacity: 0.9; }
          45%      { opacity: 0.9; }
          60%, 100% { transform: translateX(420%) skewX(-14deg); opacity: 0; }
        }
        @keyframes pill-bounce {
          0%   { opacity: 0; transform: translateY(40px) scale(0.6); }
          55%  { opacity: 1; transform: translateY(-12px) scale(1.04); }
          75%  { transform: translateY(3px) scale(0.99); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes pill-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.3); }
          50%      { box-shadow: 0 0 0 8px rgba(37, 99, 235, 0); }
        }
        @keyframes pill-bob {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-3px); }
        }
        @keyframes sticker-bob {
          0%, 100% { transform: translateY(0) rotate(-6deg); }
          50%      { transform: translateY(-8px) rotate(-3deg); }
        }

        .chat-panel-in  { animation: chat-in 0.4s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .chat-panel-out { animation: chat-out 0.22s ease-in both; }
        .msg-in  { animation: msg-in 0.35s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .chip-in { animation: chip-in 0.3s cubic-bezier(0.34, 1.4, 0.64, 1) both; }
        .shimmer-text {
          background: linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,0.55) 50%, #ffffff 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shimmer 3s linear infinite;
        }
        .chat-mesh {
          background:
            radial-gradient(circle at 22% 28%, rgba(37, 99, 235, 0.16), transparent 42%),
            radial-gradient(circle at 80% 22%, rgba(124, 58, 237, 0.13), transparent 44%),
            radial-gradient(circle at 62% 86%, rgba(225, 29, 72, 0.08), transparent 48%);
          animation: mesh-drift 20s ease-in-out infinite;
        }
        .chat-dots {
          background-image: radial-gradient(rgba(124, 58, 237, 0.16) 1px, transparent 1px);
          background-size: 18px 18px;
          opacity: 0.6;
        }
        .chat-sweep { animation: sweep 8s ease-in-out infinite; }
        .pill-bounce { animation: pill-bounce 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .pill-bob    { animation: pill-bob 2.6s ease-in-out infinite; }
        .pill-glow   { animation: pill-glow 2.4s ease-out infinite; }
        .sticker-bob { animation: sticker-bob 1.8s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .chat-panel-in, .chat-panel-out, .msg-in, .chip-in, .shimmer-text,
          .chat-mesh, .chat-sweep, .pill-bounce, .pill-bob, .pill-glow, .sticker-bob {
            animation: none !important;
          }
        }
      `}</style>

      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Zenith chat assistant"
          className={`fixed bottom-20 right-3 z-50 flex h-[500px] max-h-[72vh] w-[calc(100vw-1.5rem)] max-w-sm flex-col overflow-hidden rounded-3xl bg-white font-bold shadow-2xl ring-1 ring-slate-900/10 sm:bottom-24 sm:right-6 ${
            closing ? "chat-panel-out" : "chat-panel-in"
          }`}
        >
          {/* Header */}
          <div className="relative flex items-center justify-between overflow-hidden bg-gradient-to-r from-brand-navy via-brand-blue to-brand-purple px-4 py-3 text-white">
            <div className="flex items-center gap-3">
              <ZenithAvatar size={40} />
              <div>
                <p className="shimmer-text text-sm font-extrabold">Zenith Assistant</p>
                <p className="flex items-center gap-1.5 text-[11px] font-bold text-white/85">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  Online now
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={closeChat}
              aria-label="Close chat"
              className="rounded-full p-1.5 transition duration-200 hover:rotate-90 hover:bg-white/15"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="relative flex-1 overflow-y-auto p-4">
            <AnimatedBackground />

            <div className="relative space-y-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex flex-col ${m.role === "user" ? "items-end" : "items-start"} ${
                    i === newIndex ? "msg-in" : ""
                  }`}
                >
                  <div className={`flex items-end gap-2 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
                    {m.role === "bot" && <ZenithAvatar size={26} />}
                    <div
                      className={`max-w-[80%] whitespace-pre-line rounded-2xl px-3.5 py-2 text-sm font-bold leading-relaxed shadow-sm ${
                        m.role === "user"
                          ? "rounded-br-sm bg-gradient-to-r from-brand-blue to-brand-purple text-white"
                          : "rounded-bl-sm bg-white text-slate-800 ring-1 ring-slate-200"
                      }`}
                    >
                      {m.role === "bot" && i === 0 ? <Typewriter text={m.text} /> : m.text}
                    </div>
                  </div>

                  {m.links && m.links.length > 0 && (
                    <div className="ml-9 mt-2 flex flex-wrap gap-2">
                      {m.links.map((l, idx) => {
                        const style = { animationDelay: `${idx * 90}ms` };
                        return l.href.startsWith("http") ? (
                          <a
                            key={l.href}
                            href={l.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${linkClass} chip-in`}
                            style={style}
                          >
                            {l.label}
                          </a>
                        ) : (
                          <Link key={l.href} href={l.href} className={`${linkClass} chip-in`} style={style}>
                            {l.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}

              {/* Live AI reply */}
              {streamText !== null && (
                <div className="msg-in flex items-end gap-2">
                  <ZenithAvatar size={26} />
                  <div className="max-w-[80%] whitespace-pre-line rounded-2xl rounded-bl-sm bg-white px-3.5 py-2 text-sm font-bold leading-relaxed text-slate-800 shadow-sm ring-1 ring-slate-200">
                    {streamText || <TypingDots />}
                  </div>
                </div>
              )}

              <div ref={endRef} />
            </div>
          </div>

          {/* Quick replies */}
          {!busy && lastIsBot && (
            <div className="flex flex-wrap gap-2 border-t border-slate-100 bg-white px-4 py-2.5">
              {quickReplies.map((q, idx) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => send(q)}
                  style={{ animationDelay: `${idx * 60}ms` }}
                  className="chip-in rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-brand-navy transition duration-200 hover:-translate-y-0.5 hover:bg-brand-blue hover:text-white hover:shadow-md"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-slate-100 bg-white p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              maxLength={500}
              className="flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-bold outline-none transition focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-brand-blue/10"
            />
            <button
              type="submit"
              disabled={!input.trim() || busy}
              aria-label="Send message"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-md transition duration-200 hover:scale-105 hover:shadow-lg disabled:opacity-40 disabled:hover:scale-100"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      {/* Launcher: pill with logo and label, with a large centred "We are here!" sticker above it */}
      {!open && (
        <button
          key={bounceKey}
          type="button"
          onClick={openChat}
          aria-label="Open chat with Zenith"
          className="pill-bounce group fixed bottom-4 right-4 z-50 flex h-12 items-center gap-2 rounded-full bg-white pl-1 pr-3 shadow-xl ring-1 ring-slate-200 transition duration-300 hover:shadow-2xl sm:bottom-6 sm:right-6 sm:h-16 sm:gap-2.5 sm:pr-4"
        >
          {/* Sticker: large, centred above the chat pill, bobbing up and down */}
          <span className="pointer-events-none absolute bottom-full left-1/2 mb-1 -translate-x-1/2">
            <span
              className="sticker-bob block whitespace-nowrap text-center text-3xl font-black italic leading-[1] text-brand-blue sm:text-4xl"
              style={{
                fontFamily: "'Brush Script MT', 'Segoe Script', 'Comic Sans MS', cursive",
                textShadow:
                  "4px 0 #fff, -4px 0 #fff, 0 4px #fff, 0 -4px #fff, 3px 3px #fff, -3px -3px #fff, 3px -3px #fff, -3px 3px #fff",
              }}
            >
              We are
              <br />
              here!
            </span>
          </span>

          <span className="pill-bob flex items-center">
            <span className="pill-glow relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white ring-2 ring-brand-blue/20 sm:h-12 sm:w-12">
              <img src="/images/zenith-logo.jpeg" alt="" className="h-8 w-8 rounded-full object-contain sm:h-10 sm:w-10" />
              <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-white bg-emerald-400" />
            </span>
          </span>
          <span className="flex flex-col items-start leading-tight">
            <span className="text-xs font-extrabold text-brand-navy transition group-hover:text-brand-blue sm:text-sm">
              Chat with us
            </span>
            <span className="hidden text-[11px] font-bold text-slate-500 sm:block">We reply instantly</span>
          </span>
        </button>
      )}
    </>
  );
}