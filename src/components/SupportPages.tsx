import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock,
  Cookie,
  Database,
  Eye,
  FileText,
  Gavel,
  HelpCircle,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Rocket,
  Scale,
  Share2,
  Shield,
  ShieldCheck,
  Sparkles,
  Trash2,
  UserCheck,
  type LucideIcon,
} from "lucide-react";
import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/data/site";

type Tone = { from: string; to: string };
const BLUE_PINK: Tone = { from: "#2563eb", to: "#db2777" };
const PINK_RED: Tone = { from: "#db2777", to: "#e11d48" };
const LAST_UPDATED = "November 2026";

const SL_CSS = `
@keyframes sl-flow { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
@keyframes sl-rise { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
@keyframes sl-blob { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-30px) scale(1.12); } }
@keyframes sl-grid { from { background-position: 0 0; } to { background-position: 40px 40px; } }
@keyframes sl-bar { from { width: 0; } to { width: 110px; } }
@keyframes sl-border { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
@keyframes sl-pulse { 0%,100% { box-shadow: 0 0 0 0 rgba(37,99,235,0.35); } 50% { box-shadow: 0 0 0 10px rgba(37,99,235,0); } }
@keyframes sl-ping { 0% { transform: scale(1); opacity: 0.7; } 100% { transform: scale(2.4); opacity: 0; } }
@keyframes sl-shimmer { 0% { transform: translateX(-120%); } 100% { transform: translateX(120%); } }
@keyframes sl-line { from { transform: scaleY(0); } to { transform: scaleY(1); } }
.sl-flow { background: linear-gradient(120deg, #2563eb, #7c3aed, #db2777, #e11d48, #2563eb); background-size: 300% 300%; animation: sl-flow 14s ease-in-out infinite; }
.sl-blob { animation: sl-blob 16s ease-in-out infinite; }
.sl-blob-b { animation-duration: 20s; animation-direction: reverse; }
.sl-grid { background-image: linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px); background-size: 40px 40px; animation: sl-grid 14s linear infinite; }
.sl-rise { animation: sl-rise 0.8s cubic-bezier(0.22,1,0.36,1) both; }
.sl-bar { width: 110px; animation: sl-bar 1s cubic-bezier(0.22,1,0.36,1) 0.3s both; }
.sl-border { background: linear-gradient(90deg, #2563eb, #db2777, #e11d48, #7c3aed, #2563eb); background-size: 200% 200%; animation: sl-border 5s linear infinite; }
.sl-pulse { animation: sl-pulse 2.6s ease-out infinite; }
.sl-ping { animation: sl-ping 1.6s cubic-bezier(0,0,0.2,1) infinite; }
.sl-shimmer { background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%); transform: translateX(-120%); animation: sl-shimmer 6s ease-in-out infinite; }
.sl-line { transform-origin: top; animation: sl-line 1.2s cubic-bezier(0.22,1,0.36,1) 0.4s both; }
.sl-card { background: linear-gradient(120deg, #ffffff, #eff6ff, #fdf2f8, #ffffff); background-size: 300% 300%; animation: sl-flow 12s ease-in-out infinite; }
.sl-text { background: linear-gradient(90deg, #2563eb, #7c3aed, #db2777, #e11d48, #2563eb); background-size: 250% 100%; -webkit-background-clip: text; background-clip: text; color: transparent; animation: sl-flow 6s linear infinite; }
.sl-summary::-webkit-details-marker { display: none; }
@media (prefers-reduced-motion: reduce) {
  .sl-flow, .sl-blob, .sl-grid, .sl-rise, .sl-bar, .sl-border, .sl-pulse, .sl-ping, .sl-shimmer, .sl-line, .sl-card, .sl-text { animation: none !important; }
}
`;

function Css() {
  return <style>{SL_CSS}</style>;
}

function Head({ eyebrow, title, accent, lead }: { eyebrow: string; title: string; accent: string; lead?: string }) {
  return (
    <div className="text-center">
      <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-blue-600">{eyebrow}</p>
      <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-extrabold text-slate-900 md:text-5xl">
        {title} <span className="sl-text">{accent}</span>
      </h2>
      {lead && <p className="mx-auto mt-4 max-w-3xl text-base font-bold text-slate-700 md:text-lg">{lead}</p>}
      <span
        className="sl-bar mx-auto mt-6 block h-1.5 rounded-full"
        style={{ background: `linear-gradient(90deg, ${BLUE_PINK.from}, ${BLUE_PINK.to}, ${PINK_RED.to})` }}
      />
    </div>
  );
}

function Hero({ title, eyebrow, lead, crumb, icon: Icon }: { title: string; eyebrow: string; lead: string; crumb: string; icon: LucideIcon }) {
  const stats = [
    { end: 1, suffix: " day", label: "First reply" },
    { end: 100, suffix: "%", label: "Secure handling" },
    { end: 24, suffix: "/7", label: "Support" },
  ];

  const steps = [
    { title: "Enquiry received", text: "Your message reaches a named lead." },
    { title: "Plan shared", text: "A clear scope and quote within one business day." },
    { title: "Project starts", text: "Work begins once you approve the plan." },
  ];

  return (
    <section className="sl-flow relative w-full overflow-hidden px-6 pb-20 pt-10 text-white md:px-12 xl:px-20 2xl:px-28">
      <div className="sl-grid pointer-events-none absolute inset-0 opacity-20" />
      <div className="sl-blob pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-full bg-white/25 blur-3xl" />
      <div className="sl-blob sl-blob-b pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-amber-200/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div>
          <nav className="sl-rise flex flex-wrap items-center gap-2 text-xs font-bold text-white/85">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight size={12} />
            <span>Support &amp; Legal</span>
            <ChevronRight size={12} />
            <span className="text-white">{crumb}</span>
          </nav>
          <p className="sl-rise mt-6 text-xs font-extrabold uppercase tracking-[0.3em] text-white/85">{eyebrow}</p>
          <h1 className="sl-rise mt-3 font-[var(--font-heading)] text-4xl font-extrabold leading-tight drop-shadow-lg md:text-5xl">
            {title}
          </h1>
          <p className="sl-rise mt-4 max-w-xl text-base font-semibold text-white/90 md:text-lg">{lead}</p>
        </div>

        <div className="sl-rise relative mx-auto w-full max-w-md">
          <div className="sl-border absolute -inset-[1.5px] rounded-[1.9rem] opacity-90" />
          <div className="relative overflow-hidden rounded-[1.8rem] bg-slate-950/90 p-5 text-white shadow-2xl backdrop-blur-xl">
            <div className="sl-shimmer pointer-events-none absolute inset-0" />

            <div className="relative flex items-center gap-3">
              <span
                className="sl-pulse flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-lg"
                style={{ background: "linear-gradient(135deg, #2563eb, #db2777)" }}
              >
                <Icon size={20} />
              </span>
              <div className="min-w-0">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-white/60">{eyebrow}</p>
                <p className="font-[var(--font-heading)] text-base font-extrabold">Zenith Digital Agency</p>
              </div>
              <span className="ml-auto flex shrink-0 items-center gap-2 rounded-full bg-emerald-400/15 px-2.5 py-1 text-[11px] font-extrabold text-emerald-300 ring-1 ring-emerald-400/30">
                <span className="relative flex h-2 w-2">
                  <span className="sl-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
                </span>
                Online
              </span>
            </div>

            <div className="relative mt-5 grid grid-cols-3 gap-2">
              {stats.map((s, i) => (
                <div key={s.label} className="rounded-xl bg-white/5 px-2 py-3 text-center ring-1 ring-white/10">
                  <p className="font-[var(--font-heading)] text-xl font-extrabold">
                    <span className="sl-text">
                      <CountUp end={s.end} suffix={s.suffix} duration={1400 + i * 200} />
                    </span>
                  </p>
                  <p className="mt-0.5 text-[10px] font-bold text-white/65">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="relative mt-5 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-white/60">How it works</p>
              <div className="relative mt-3 space-y-3 pl-7">
                <span
                  className="sl-line absolute left-[9px] top-1.5 h-[calc(100%-1rem)] w-0.5 rounded-full"
                  style={{ background: "linear-gradient(180deg, #60a5fa, #f472b6, #fb7185)" }}
                />
                {steps.map((st, i) => (
                  <div key={st.title} className="relative">
                    <span
                      className="absolute -left-7 top-0 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-extrabold text-white shadow-lg"
                      style={{ background: "linear-gradient(135deg, #2563eb, #db2777)" }}
                    >
                      {i + 1}
                    </span>
                    <p className="text-sm font-extrabold leading-tight">{st.title}</p>
                    <p className="text-xs font-semibold text-white/65">{st.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-4 flex items-center justify-between gap-3">
              <span className="flex items-center gap-2 pl-1 text-xs font-bold text-white/75">
                <MapPin size={13} className="text-pink-300" /> Based in India
              </span>
              <Link
                href="/menu/company/contact-us"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-extrabold text-slate-900 shadow-lg transition hover:-translate-y-0.5"
              >
                Contact us
                <ArrowRight size={14} className="transition group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Cta({ title, text }: { title: string; text: string }) {
  return (
    <section className="sl-flow relative w-full overflow-hidden px-6 py-16 text-center text-white md:px-12 xl:px-20 2xl:px-28">
      <Reveal>
        <div className="relative mx-auto max-w-3xl">
          <span className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-xs font-extrabold uppercase tracking-widest backdrop-blur">
            <Rocket size={14} /> Start your project
          </span>
          <h2 className="font-[var(--font-heading)] text-3xl font-extrabold md:text-4xl">{title}</h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-white/90">{text}</p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-white px-7 py-3 font-extrabold text-slate-900 shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl"
          >
            Get A Free Consultation
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

// ---------- FAQ ----------
const FAQ_GROUPS: { title: string; icon: LucideIcon; items: { q: string; a: string }[] }[] = [
  {
    title: "About our services",
    icon: Sparkles,
    items: [
      { q: "What services does Zenith Digital Agency offer?", a: "We build websites, online stores and web applications, and run SEO, AI search optimisation, local SEO, PPC and social media campaigns. We also offer AI chatbots, automation and integrations." },
      { q: "Which platforms do you build on?", a: "We work with WordPress, Shopify, WooCommerce, PHP, .NET, Magento, PrestaShop and Joomla, as well as Next.js and React. We recommend the platform that fits your goals, budget and team." },
      { q: "Do you work with businesses outside India?", a: "Yes. We work with clients in the USA, UK, Canada, Australia and other countries, with clear communication across time zones." },
    ],
  },
  {
    title: "Timelines and pricing",
    icon: Clock,
    items: [
      { q: "How long does a website project take?", a: "Most business websites take two to four weeks, depending on size and content. Larger ecommerce or custom projects are scoped and scheduled individually." },
      { q: "How soon will I see results from SEO?", a: "Paid campaigns can bring enquiries within days. Organic search growth usually builds over three to six months." },
      { q: "How is pricing decided?", a: "Pricing depends on scope. After your free consultation we send a written proposal with the scope, deliverables, timeline and payment schedule." },
    ],
  },
  {
    title: "Working with us",
    icon: UserCheck,
    items: [
      { q: "Will I have one point of contact?", a: "Yes. Each project has a named lead and a dedicated project manager who keeps you updated throughout." },
      { q: "Do you provide reports?", a: "Yes. You receive regular, plain-language reports that explain what was done, what changed and what we recommend next." },
      { q: "Is support available after launch?", a: "Yes. We offer maintenance and support plans, and our team is available 24/7 for urgent issues." },
    ],
  },
];

export function FaqPage() {
  const total = FAQ_GROUPS.reduce((n, g) => n + g.items.length, 0);
  return (
    <main className="relative w-full overflow-hidden bg-gradient-to-br from-blue-50 via-pink-50 to-rose-50">
      <Css />
      <Hero
        title="Frequently asked questions"
        eyebrow="FAQ"
        crumb="FAQ"
        icon={HelpCircle}
        lead="Quick answers about our services, timelines, pricing and how we work with clients."
      />

      <section className="relative mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <Head eyebrow="Answers" title="Common" accent="questions" lead={`${total} questions our clients ask most often. Select any question to open the answer.`} />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {FAQ_GROUPS.map((g, gi) => {
            const Icon = g.icon;
            return (
              <Reveal key={g.title} delay={gi * 0.1}>
                <div className="sl-card relative h-full rounded-[2rem] p-6 shadow-xl ring-1 ring-slate-200">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg" style={{ background: `linear-gradient(135deg, ${BLUE_PINK.from}, ${BLUE_PINK.to})` }}>
                      <Icon size={22} />
                    </span>
                    <h3 className="font-[var(--font-heading)] text-lg font-extrabold text-slate-900">{g.title}</h3>
                  </div>
                  <div className="mt-6 space-y-3">
                    {g.items.map((f) => (
                      <details key={f.q} className="group rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 transition duration-300 open:shadow-lg open:ring-pink-200">
                        <summary className="sl-summary flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-extrabold text-slate-900">
                          {f.q}
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-rose-500 text-white transition duration-300 group-open:rotate-45">+</span>
                        </summary>
                        <p className="mt-3 text-sm leading-relaxed text-slate-700">{f.a}</p>
                      </details>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 pb-24">
        <Reveal>
          <div className="sl-card flex flex-col items-center justify-between gap-6 rounded-[2rem] p-8 shadow-xl ring-1 ring-slate-200 md:flex-row md:p-10">
            <div>
              <p className="font-[var(--font-heading)] text-2xl font-extrabold text-slate-900">Did not find your answer?</p>
              <p className="mt-2 text-sm font-semibold text-slate-700">Send us your question and we will reply within one business day.</p>
            </div>
            <Link href="/menu/company/contact-us" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-rose-500 px-6 py-3 text-sm font-extrabold text-white shadow-lg transition hover:-translate-y-0.5">
              Contact us <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>

      <Cta title="Still have a question?" text="Tell us about your project and we will answer everything in your free consultation." />
    </main>
  );
}

// ---------- Contact Us ----------
const CHANNELS = [
  { icon: Mail, title: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, text: "Send us your brief and we will reply within one business day.", external: false },
  { icon: Phone, title: "Call", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}`, text: "Speak with our team during working hours.", external: false },
  { icon: MessageCircle, title: "WhatsApp", value: "Chat with our team", href: `https://wa.me/${siteConfig.whatsapp}`, text: "Quick questions answered in chat.", external: true },
  { icon: MapPin, title: "Office", value: siteConfig.address, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`, text: "Find our office on Google Maps.", external: true },
];

const CONTACT_STEPS = [
  { title: "Tell us your goals", text: "Share your business, what you want to achieve and any deadlines." },
  { title: "Get a clear plan", text: "We reply with a plan, scope and a free quote, usually within one business day." },
  { title: "Start the project", text: "Once you agree, a named lead and project manager begin the work." },
];

export function ContactUsPage() {
  return (
    <main className="relative w-full overflow-hidden bg-gradient-to-br from-blue-50 via-pink-50 to-rose-50">
      <Css />
      <Hero
        title="Contact our team"
        eyebrow="Contact us"
        crumb="Contact Us"
        icon={Mail}
        lead="Reach us by email, phone or WhatsApp, or send an enquiry and we will reply with a clear next step."
      />

      <section className="relative mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <Head eyebrow="Get in touch" title="Choose the way" accent="that suits you" lead="Every channel reaches the same team, and every enquiry gets a personal reply." />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CHANNELS.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={i * 0.08}>
                <a
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className="sl-card group flex h-full flex-col rounded-[1.75rem] p-6 shadow-md ring-1 ring-slate-200 transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg transition duration-500 group-hover:rotate-6 group-hover:scale-110" style={{ background: `linear-gradient(135deg, ${BLUE_PINK.from}, ${BLUE_PINK.to})` }}>
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 font-[var(--font-heading)] text-lg font-extrabold text-slate-900">{c.title}</h3>
                  <p className="mt-2 break-words text-sm font-bold text-blue-700">{c.value}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-700">{c.text}</p>
                </a>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 pb-20">
        <Reveal>
          <Head eyebrow="What happens next" title="Three simple" accent="steps" />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {CONTACT_STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="sl-card group h-full rounded-[1.75rem] p-7 shadow-md ring-1 ring-slate-200 transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <span className="flex h-12 w-12 items-center justify-center rounded-full text-lg font-extrabold text-white shadow-lg" style={{ background: `linear-gradient(135deg, ${BLUE_PINK.from}, ${BLUE_PINK.to})` }}>
                  {i + 1}
                </span>
                <h3 className="mt-5 font-[var(--font-heading)] text-xl font-extrabold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-4xl px-6 pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.25rem] p-[1.5px] shadow-2xl">
            <span className="sl-border absolute inset-0" />
            <div className="relative flex flex-col items-center gap-6 rounded-[calc(2.25rem-1.5px)] bg-white p-10 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg" style={{ background: `linear-gradient(135deg, ${BLUE_PINK.from}, ${BLUE_PINK.to})` }}>
                <Clock size={24} />
              </span>
              <p className="font-[var(--font-heading)] text-2xl font-extrabold text-slate-900">Prefer a form?</p>
              <p className="max-w-xl text-sm leading-relaxed text-slate-700">Open our enquiry form to describe your project, and we will send a clear plan and free quote within one business day.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-rose-500 px-7 py-3.5 text-sm font-extrabold text-white shadow-lg transition hover:-translate-y-0.5">
                Open the enquiry form <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <Cta title="Ready when you are" text="Tell us about your business and we will reply with a clear plan within one business day." />
    </main>
  );
}

// ---------- Legal pages (shared layout) ----------
type LegalSection = { heading: string; icon: LucideIcon; paragraphs: string[] };

function LegalPage({
  title,
  eyebrow,
  lead,
  icon,
  sections,
}: {
  title: string;
  eyebrow: string;
  lead: string;
  icon: LucideIcon;
  sections: LegalSection[];
}) {
  return (
    <main className="relative w-full overflow-hidden bg-gradient-to-br from-blue-50 via-pink-50 to-rose-50">
      <Css />
      <Hero title={title} eyebrow={eyebrow} crumb={title} icon={icon} lead={lead} />

      <section className="relative mx-auto grid max-w-6xl items-start gap-10 px-6 py-16 lg:grid-cols-[260px_1fr]">
        <aside className="self-start lg:sticky lg:top-28">
          <div className="sl-card rounded-[1.75rem] p-6 shadow-md ring-1 ring-slate-200">
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-blue-600">On this page</p>
            <ol className="mt-4 space-y-2">
              {sections.map((s, i) => (
                <li key={s.heading}>
                  <a href={`#sec-${i + 1}`} className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-bold text-slate-800 transition hover:bg-white hover:text-blue-700">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-[10px] font-extrabold text-white" style={{ background: `linear-gradient(135deg, ${BLUE_PINK.from}, ${BLUE_PINK.to})` }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.heading}
                  </a>
                </li>
              ))}
            </ol>
            <p className="mt-6 border-t border-slate-200 pt-4 text-xs font-semibold text-slate-500">Last updated: {LAST_UPDATED}</p>
          </div>
        </aside>

        <div className="min-w-0 space-y-5">
          {sections.map((s, i) => {
            const Icon = s.icon;
            return (
              <article key={s.heading} id={`sec-${i + 1}`} className="sl-card group relative scroll-mt-28 overflow-hidden rounded-[1.75rem] p-6 shadow-md ring-1 ring-slate-200 transition duration-500 hover:shadow-xl md:p-8">
                <span className="absolute left-0 top-0 h-full w-1.5" style={{ background: `linear-gradient(180deg, ${BLUE_PINK.from}, ${PINK_RED.to})` }} />
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white shadow-md transition duration-500 group-hover:rotate-6" style={{ background: `linear-gradient(135deg, ${BLUE_PINK.from}, ${BLUE_PINK.to})` }}>
                    <Icon size={18} />
                  </span>
                  <h2 className="font-[var(--font-heading)] text-lg font-extrabold text-slate-900 md:text-xl">{s.heading}</h2>
                </div>
                <div className="mt-4 space-y-3 pl-1">
                  {s.paragraphs.map((p, pi) => (
                    <p key={pi} className="text-base leading-relaxed text-slate-700">{p}</p>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <Cta title="Questions about this page?" text="Contact our team and we will explain anything in plain language." />
    </main>
  );
}

const PRIVACY_SECTIONS: LegalSection[] = [
  {
    heading: "Information we collect",
    icon: Database,
    paragraphs: [
      "When you contact us, we collect the details you choose to share, such as your name, email address, phone number, business name and the message you write.",
      "Our website also collects basic, anonymous analytics, such as the pages visited and the country or region of the visitor, so we can improve the site.",
    ],
  },
  {
    heading: "How we use your information",
    icon: UserCheck,
    paragraphs: [
      "We use your information to reply to your enquiry, prepare a proposal, deliver the services you agree to, and keep you informed about your project.",
      "We do not sell personal information. We only use it for the purposes described on this page.",
    ],
  },
  {
    heading: "Cookies and analytics",
    icon: Cookie,
    paragraphs: [
      "Cookies help the website work properly and let us understand how it is used. You can control cookies through your browser settings, although some parts of the site may not work as expected if you turn them off.",
    ],
  },
  {
    heading: "Who we share information with",
    icon: Share2,
    paragraphs: [
      "We share information only with trusted service providers who help us run the business, such as hosting, email and analytics tools. They may only use it to provide those services to us.",
      "We may also share information when the law requires it.",
    ],
  },
  {
    heading: "How we keep information safe",
    icon: Lock,
    paragraphs: [
      "We use secure hosting, limit access to personal information to people who need it, and take care when handling client files and project materials.",
      "No online system is completely secure, so please tell us promptly if you think your information has been exposed.",
    ],
  },
  {
    heading: "How long we keep information",
    icon: Clock,
    paragraphs: [
      "We keep enquiry and project information for as long as it is needed for the purposes described above, and for any period required by law. When it is no longer needed, we delete or anonymise it.",
    ],
  },
  {
    heading: "Your rights",
    icon: Eye,
    paragraphs: [
      "You can ask us to see, correct or delete the personal information we hold about you. Contact us using the details on this website and we will respond within a reasonable time.",
    ],
  },
  {
    heading: "Deleting your information",
    icon: Trash2,
    paragraphs: [
      "If you would like us to delete your details, send us a request from your email address. We will confirm once the request is complete, except where we must keep certain records by law.",
    ],
  },
  {
    heading: "Changes to this policy",
    icon: Shield,
    paragraphs: [
      "We may update this Privacy Policy from time to time. The date at the top of this page shows when it was last changed, so please check back occasionally.",
    ],
  },
];

const TERMS_SECTIONS: LegalSection[] = [
  {
    heading: "Acceptance of these terms",
    icon: FileText,
    paragraphs: [
      "By using this website or working with Zenith Digital Agency, you agree to these terms. If you do not agree, please do not use the website or our services.",
    ],
  },
  {
    heading: "Our services and proposals",
    icon: Sparkles,
    paragraphs: [
      "Our services are agreed in writing. The proposal describes the scope, deliverables, timeline, fees and payment schedule. Work begins once the proposal is accepted and any agreed first payment is received.",
    ],
  },
  {
    heading: "Changes to scope",
    icon: Scale,
    paragraphs: [
      "Changes to the agreed scope are handled through a written change request, which explains the impact on time and cost. Changes are carried out only after the client approves them.",
    ],
  },
  {
    heading: "Payments",
    icon: CheckCircle2,
    paragraphs: [
      "Payments are made according to the schedule in the proposal. Late payments may delay work and deadlines, and we will tell you before this happens.",
    ],
  },
  {
    heading: "Client responsibilities",
    icon: UserCheck,
    paragraphs: [
      "You are responsible for providing accurate content, images, product details and any licences needed to use them. You must also respond to reasonable requests for approval within the agreed timeframe.",
    ],
  },
  {
    heading: "Intellectual property",
    icon: ShieldCheck,
    paragraphs: [
      "Ownership of the final deliverables, and any third-party tools or licences used, is set out in each proposal. Our own internal tools, methods and templates remain ours.",
    ],
  },
  {
    heading: "Use of this website",
    icon: Gavel,
    paragraphs: [
      "You agree to use this website lawfully and not to attempt to disrupt it, gain unauthorised access or copy its content for unlawful purposes. Information on the site is provided for general guidance.",
    ],
  },
  {
    heading: "Limitation of liability",
    icon: Scale,
    paragraphs: [
      "To the extent permitted by law, our liability for any claim is limited to the fees paid for the service concerned. We are not liable for indirect or consequential losses, such as lost profits.",
    ],
  },
  {
    heading: "Governing law",
    icon: Gavel,
    paragraphs: [
      "These terms are governed by the laws of India. Any disputes will be handled in the courts of New Delhi, unless both parties agree otherwise in writing.",
    ],
  },
  {
    heading: "Contact us",
    icon: Mail,
    paragraphs: [
      `If you have questions about these terms, contact us at ${siteConfig.email} or call ${siteConfig.phone}.`,
    ],
  },
];

export function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      eyebrow="Your privacy"
      icon={Shield}
      lead="How we collect, use, protect and share the information you give us, explained in plain language."
      sections={PRIVACY_SECTIONS}
    />
  );
}

export function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      eyebrow="Terms of use"
      icon={FileText}
      lead="The terms that apply when you use our website and work with Zenith Digital Agency."
      sections={TERMS_SECTIONS}
    />
  );
}