import { siteConfig, services, faqs } from "@/data/site";
import { countryPages } from "@/data/locationPages";

export type ChatLink = { label: string; href: string };
export type RuleReply = { text: string; links?: ChatLink[] };

const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}`;
const serviceList = services.map((s) => `• ${s.title}: ${s.description}`).join("\n");
const countryList = countryPages.map((c) => c.name).join(", ");

const faqBy = (needle: string) =>
  faqs.find((f) => f.question.toLowerCase().includes(needle))?.answer ?? "";

export const quickReplies = [
  "Our services",
  "Pricing",
  "How long does a project take?",
  "Where are you based?",
  "Talk to a human",
];

type Rule = { keywords: string[]; reply: () => RuleReply };

const escapeRegex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

function normalise(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s&+.-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Pulls a name out of messages like "my name is Sanjib", "i am sanjib", "this is ravi"
function extractName(raw: string): string | null {
  const m = raw.trim().match(
    /^(?:hi[,!\s]+|hello[,!\s]+|hey[,!\s]+)?(?:my name is|my name's|i am|i'm|im|this is|call me|i m)\s+([a-zA-Z][a-zA-Z.'-]{1,30}(?:\s+[a-zA-Z][a-zA-Z.'-]{1,30})?)[.!]?$/i
  );
  if (!m) return null;
  return m[1]
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

const rules: Rule[] = [
  {
    keywords: [
      "hi", "hii", "hiii", "hy", "hey", "heyy", "hello", "helo", "hlo", "hola",
      "namaste", "good morning", "good afternoon", "good evening", "gm",
    ],
    reply: () => ({
      text:
        "Hello, and welcome to Zenith Digital Agency! I'm your assistant.\n\nI can help you with:\n• Our services (websites, SEO, AI, ecommerce)\n• Pricing and project timelines\n• Our locations and how we work with clients abroad\n• Booking a free consultation\n\nWhat would you like to know?",
    }),
  },
  {
    keywords: ["thanks", "thank you", "thx", "ty", "thanku"],
    reply: () => ({ text: "You're welcome! Is there anything else I can help you with?" }),
  },
  {
    keywords: ["bye", "goodbye", "see you", "later"],
    reply: () => ({
      text: "Thank you for visiting Zenith Digital. Have a great day! You can message us any time on WhatsApp.",
      links: [{ label: "Chat on WhatsApp", href: whatsappUrl }],
    }),
  },
  {
    keywords: ["human", "agent", "real person", "someone", "speak", "talk to", "representative"],
    reply: () => ({
      text: "Of course. Our team replies on WhatsApp during business hours, usually within one business day.",
      links: [{ label: "Chat on WhatsApp", href: whatsappUrl }],
    }),
  },
  {
    keywords: ["service", "services", "what do you do", "offer", "offers", "provide", "do you do", "help"],
    reply: () => ({
      text: `Here is what we offer:\n${serviceList}`,
      links: [{ label: "View all services", href: "/services" }],
    }),
  },
  {
    keywords: ["ai seo", "aeo", "geo", "llm", "chatgpt", "perplexity", "ai search"],
    reply: () => ({
      text: faqBy("ai seo"),
      links: [{ label: "Learn about AI SEO", href: "/services/seo-services" }],
    }),
  },
  {
    keywords: ["price", "pricing", "cost", "how much", "quote", "budget", "charge", "fee", "rate", "rates"],
    reply: () => ({
      text: "Pricing depends on the scope of your project. A free consultation gives you an exact quote tailored to your goals.",
      links: [{ label: "Get A Free Consultation", href: "/contact" }],
    }),
  },
  {
    keywords: ["how long", "timeline", "duration", "deadline", "time to build", "days", "weeks"],
    reply: () => ({
      text: faqBy("how long"),
      links: [{ label: "Start a project", href: "/contact" }],
    }),
  },
  {
    keywords: ["country", "countries", "international", "global", "worldwide", "abroad", "overseas"],
    reply: () => ({
      text: `We serve clients in ${countryList}.`,
      links: [{ label: "See all locations", href: "/locations" }],
    }),
  },
  {
    keywords: ["where", "location", "office", "address", "based", "located"],
    reply: () => ({
      text: `Our head office is in ${siteConfig.location}, and we serve clients across ${countryList}.`,
      links: [{ label: "See all locations", href: "/locations" }],
    }),
  },
  {
    keywords: ["contact", "phone", "email", "call", "number", "mail", "reach"],
    reply: () => ({
      text: `You can reach us here:\nEmail: ${siteConfig.email}\nPhone: ${siteConfig.phone}`,
      links: [{ label: "Contact page", href: "/contact" }],
    }),
  },
  {
    keywords: ["whatsapp", "wa"],
    reply: () => ({
      text: "You can message us on WhatsApp any time, and we will reply as soon as we can.",
      links: [{ label: "Chat on WhatsApp", href: whatsappUrl }],
    }),
  },
  {
    keywords: ["start", "project", "begin", "consultation", "book", "hire", "get started", "website", "shop", "store", "ecommerce"],
    reply: () => ({
      text: "Great! Tell us a little about your business and goals, and we will reply within one business day with a plan.",
      links: [{ label: "Get A Free Consultation", href: "/contact" }],
    }),
  },
];

const fallback: RuleReply = {
  text:
    "I'm not sure I understood that. I can help with:\n• Our services and what we build\n• Pricing and how long a project takes\n• Where we work and how to reach us\n\nTry one of the options below, or ask me in a few different words.",
  links: [
    { label: "Our services", href: "/services" },
    { label: "Chat on WhatsApp", href: whatsappUrl },
  ],
};

// Built-in answers, used when the AI service is not connected
export function getRuleReply(input: string): RuleReply {
  const name = extractName(input);
  if (name) {
    return {
      text: `Nice to meet you, ${name}! How can I help you today? You can ask about our services, pricing, timelines or locations, or book a free consultation.`,
      links: [{ label: "Our services", href: "/services" }, { label: "Get A Free Consultation", href: "/contact" }],
    };
  }

  const text = ` ${normalise(input)} `;
  if (!text.trim()) return fallback;

  const rule = rules.find((r) =>
    r.keywords.some((k) => new RegExp(`(^|\\s)${escapeRegex(k)}(?=\\s|$)`).test(text))
  );
  return rule ? rule.reply() : fallback;
}

// Facts the AI is allowed to use when answering
export function buildSystemPrompt(): string {
  const faqText = faqs.map((f) => `Q: ${f.question}\nA: ${f.answer}`).join("\n");
  return [
    `You are the friendly website assistant for ${siteConfig.name}, an ${siteConfig.tagline.toLowerCase()} based in ${siteConfig.location}.`,
    "Always give a helpful, meaningful answer. If the visitor tells you their name, greet them by name and ask how you can help.",
    "Understand short or misspelled messages, and offer relevant next steps.",
    "Reply in plain, friendly English in 2 to 5 short sentences. Use only the facts below.",
    "Never invent prices, client names, results, guarantees or timelines beyond what is listed.",
    "If someone asks for a price or quote, say that a free consultation gives an exact quote, and point them to the contact page or WhatsApp.",
    "If a question is unrelated to the agency, politely explain what you can help with.",
    "",
    "SERVICES:",
    serviceList,
    "",
    `LOCATIONS: Head office in ${siteConfig.location}. We serve clients in: ${countryList}.`,
    "",
    "CONTACT:",
    `Email: ${siteConfig.email}`,
    `Phone: ${siteConfig.phone}`,
    `WhatsApp: ${whatsappUrl}`,
    "Contact page: /contact",
    "",
    "FAQ:",
    faqText,
  ].join("\n");
}