import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  Network,
  Rocket,
  Route,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";
import { allGroups, allPages } from "@/data/solutionsAll";
import type { SolutionPage } from "@/data/solutions";

type Tone = { from: string; to: string };

const WIDE = "relative w-full px-6 md:px-12 xl:px-20 2xl:px-28";
const BRAND_FLOW: Tone = { from: "#2563eb", to: "#db2777" };
const BRAND_RED: Tone = { from: "#db2777", to: "#e11d48" };

// Long-form content for each group
const GROUP_EXTRA: Record<string, { tone: Tone; paragraphs: string[]; deliverables: string[] }> = {
  web: {
    tone: BRAND_FLOW,
    paragraphs: [
      "A website is often the first thing a customer sees from your business. It has to load quickly, look trustworthy on a phone, explain what you offer in plain language and make the next step obvious. When any one of those things is missing, visitors leave and the money you spend on advertising is wasted.",
      "Our web team works in a clear, collaborative way. We start by understanding your customers, your services and the actions you want people to take. Then we design layouts that guide visitors naturally from curiosity to enquiry, using real content, clear headings and honest proof such as reviews and case studies.",
      "Every project is built on modern technology such as Next.js and React, which gives fast page loads, strong search foundations and room to add features later. We test on real devices, check accessibility and set up analytics from day one.",
      "Once the site is live, we stay with you. We train your team to update content, and offer maintenance plans that keep the site secure, fast and current.",
    ],
    deliverables: [
      "Strategy and sitemap planning",
      "Custom responsive design",
      "Development on modern frameworks",
      "Speed and performance tuning",
      "SEO-ready page structure",
      "Analytics and conversion tracking",
      "Content management training",
      "Post-launch support",
    ],
  },
  marketing: {
    tone: { from: "#db2777", to: "#e11d48" },
    paragraphs: [
      "Marketing works best when it is planned, measured and improved every month. We start with clear goals, such as enquiries, bookings or sales, and build every campaign backwards from those numbers.",
      "We research your audience before spending a single rupee. That includes the searches they make, the platforms they use and the words they use to describe their problem. Those insights shape the messages and channels we recommend.",
      "Every campaign is tracked from the first click to the final enquiry or sale. You receive plain-language reports showing what was spent, what came back and what we recommend next. If a channel is not performing, we move budget to the one that is.",
      "Good marketing builds on itself. The rankings, reviews and audience data we develop today make tomorrow's campaigns cheaper and more effective.",
    ],
    deliverables: [
      "Audience and competitor research",
      "Monthly strategy and budget plan",
      "Campaign setup and management",
      "Creative and copy development",
      "Conversion and call tracking",
      "Weekly performance reviews",
      "Plain-language monthly reports",
      "Ongoing optimisation",
    ],
  },
  ecommerce: {
    tone: { from: "#f97316", to: "#db2777" },
    paragraphs: [
      "Selling online means competing for attention in a crowded space. Shoppers decide within seconds whether to trust a store, so your product pages, checkout and delivery information must be clear, fast and reassuring on every device.",
      "We begin by mapping your catalogue, pricing, shipping rules and the customer journey from first visit to repeat purchase. Then we design a store that makes buying feel easy, with strong product photography, honest reviews and a checkout that removes unnecessary steps.",
      "Behind the scenes we connect payments, delivery partners, stock levels and your accounting tools, so orders flow without manual work. Every flow is tested with real orders before launch, and abandoned carts are followed up automatically.",
      "After launch we track sales, average order value and repeat purchases, then improve the pages and offers that matter most. Your store becomes a reliable sales channel that grows with you.",
    ],
    deliverables: [
      "Store design and build",
      "Product and catalogue setup",
      "Payment and delivery integration",
      "Checkout optimisation",
      "Abandoned cart recovery",
      "Inventory and order workflow",
      "Sales and conversion reporting",
      "Team training and support",
    ],
  },
  industries: {
    tone: { from: "#16a34a", to: "#0891b2" },
    paragraphs: [
      "Every industry has its own customers, rules and pressures. A clinic has privacy obligations, a retailer needs fast product answers, a property firm needs quick responses to enquiries and a local business needs to be found by neighbours. Our solutions are shaped around those realities.",
      "We start by learning your sector: the customer journey, common questions, bottlenecks and the tools already in use. Then we design a website and digital tools that fit naturally into that journey, so customers feel helped and your team feels supported.",
      "Privacy, accuracy and clear human handover are built in from the start. Sensitive questions reach the right person, information stays protected, and every tool is set up around your own services, prices and policies.",
      "The outcome is practical: fewer missed opportunities, quicker responses, happier customers and a team that spends more time on work that truly matters.",
    ],
    deliverables: [
      "Industry journey mapping",
      "Custom website design",
      "Booking, enquiry or quote tools",
      "Privacy and consent setup",
      "Search visibility in your area",
      "Reviews and reputation tools",
      "Monthly performance report",
      "Training and ongoing support",
    ],
  },
};

function Badge({ Icon, tone, size = 56, iconSize = 24 }: { Icon: LucideIcon; tone: Tone; size?: number; iconSize?: number }) {
  return (
    <span
      className="sp-pulse relative flex shrink-0 items-center justify-center rounded-2xl text-white shadow-lg transition duration-500 group-hover:rotate-6 group-hover:scale-110"
      style={{ width: size, height: size, background: `linear-gradient(135deg, ${tone.from}, ${tone.to})` }}
    >
      <span className="absolute inset-0 rounded-2xl ring-2 ring-white/50" />
      <Icon size={iconSize} />
    </span>
  );
}

function Head({
  eyebrow,
  title,
  accent,
  lead,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  lead: string;
  dark?: boolean;
}) {
  return (
    <div className="text-center">
      <p className="sp-rise text-xs font-extrabold uppercase tracking-[0.3em]" style={{ color: dark ? "#ffffff" : BRAND_FLOW.from }}>
        {eyebrow}
      </p>
      <h2 className={`sp-rise mt-4 font-[var(--font-heading)] text-3xl font-extrabold md:text-5xl ${dark ? "text-white" : "text-brand-navy"}`} style={{ animationDelay: "100ms" }}>
        {title} <span className="sp-gradient-text">{accent}</span>
      </h2>
      <p className={`sp-rise mx-auto mt-5 max-w-3xl text-lg font-extrabold leading-relaxed md:text-xl ${dark ? "text-white/90" : "text-brand-navy/85"}`} style={{ animationDelay: "200ms" }}>
        {lead}
      </p>
      <span className="sp-bar mx-auto mt-6 block h-1.5 rounded-full" style={{ background: `linear-gradient(90deg, ${BRAND_FLOW.from}, ${BRAND_FLOW.to}, ${BRAND_RED.to})` }} />
    </div>
  );
}

const FLOATERS = [
  { top: "14%", left: "5%", delay: "0s" },
  { top: "30%", left: "90%", delay: "1.5s" },
  { top: "72%", left: "4%", delay: "3s" },
  { top: "80%", left: "92%", delay: "2s" },
];

export default function ServicePage({ page }: { page: SolutionPage }) {
  const group = allGroups[page.group];
  const extra = GROUP_EXTRA[page.group] ?? GROUP_EXTRA.web;
  const related = allPages.filter((p) => p.group === page.group && p.slug !== page.slug);
  const PageIcon = page.icon;

  return (
    <main className="relative w-full overflow-hidden bg-gradient-to-br from-blue-50 via-pink-50 to-rose-50">
      {/* HERO */}
      <section className="sp-flow relative w-full overflow-hidden px-6 pb-28 pt-14 text-white md:px-12 xl:px-20 2xl:px-28">
        <div className="sp-grid pointer-events-none absolute inset-0 opacity-25" />
        <div className="sp-blob pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-full bg-white/25 blur-3xl" />
        <div className="sp-blob sp-blob-b pointer-events-none absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-amber-200/30 blur-3xl" />
        {FLOATERS.map((f, i) => {
          const Icon = page.features[i % page.features.length].icon;
          return (
            <Icon key={i} size={i % 2 === 0 ? 46 : 32} className="sp-float pointer-events-none absolute text-white/30" style={{ top: f.top, left: f.left, animationDelay: f.delay }} />
          );
        })}

        <div className="relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <nav className="sp-rise flex flex-wrap items-center gap-2 text-xs font-bold text-white/80">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight size={12} />
              <span>Services</span>
              <ChevronRight size={12} />
              <span className="text-white">{page.title}</span>
            </nav>

            <div className="sp-rise mt-8 flex items-center gap-3" style={{ animationDelay: "80ms" }}>
              <span className="sp-pulse flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-blue shadow-xl">
                <Sparkles size={20} />
              </span>
              <span className="rounded-full bg-white/20 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.25em] ring-1 ring-white/40 backdrop-blur">
                {group.label}
              </span>
            </div>

            <h1 className="sp-rise mt-6 font-[var(--font-heading)] text-4xl font-extrabold leading-tight drop-shadow-lg md:text-6xl" style={{ animationDelay: "160ms" }}>
              {page.title}
            </h1>
            <p className="sp-rise mt-5 text-xl font-extrabold text-white" style={{ animationDelay: "240ms" }}>{page.tagline}</p>
            <p className="sp-rise mt-4 max-w-xl text-base text-white/90" style={{ animationDelay: "320ms" }}>{page.intro}</p>

            <div className="sp-rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "400ms" }}>
              <Link href="/contact" className="sp-shine group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-7 py-3.5 text-sm font-extrabold text-brand-navy shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl">
                Get a free quote
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </Link>
              <Link href="/#faq" className="rounded-full border-2 border-white px-7 py-3 text-sm font-extrabold text-white transition hover:bg-white hover:text-brand-navy">
                Read the FAQs
              </Link>
            </div>
          </div>

          <div className="sp-rise relative mx-auto w-full max-w-md" style={{ animationDelay: "200ms" }}>
            <div className="sp-glow-ring absolute -inset-3 rounded-[2.5rem] opacity-70 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/30 bg-white/15 p-8 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-white/90">Key numbers</p>
                <span className="relative flex h-3 w-3">
                  <span className="sp-ping absolute inline-flex h-full w-full rounded-full bg-white" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
                </span>
              </div>
              <div className="mt-6 space-y-6">
                {page.stats.map((s, i) => (
                  <div key={s.label} className="sp-stat flex items-center justify-between gap-4 border-b border-white/20 pb-5 last:border-0 last:pb-0" style={{ animationDelay: `${i * 150}ms` }}>
                    <div>
                      <p className="font-[var(--font-heading)] text-4xl font-extrabold">
                        <CountUp end={s.end} suffix={s.suffix} duration={1600 + i * 200} />
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white/85">{s.label}</p>
                    </div>
                    <span className="sp-pulse flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-brand-blue shadow-lg">
                      <PageIcon size={20} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS MARQUEE */}
      <div className="relative -mt-8 overflow-hidden bg-gradient-to-r from-blue-600 via-pink-500 to-rose-500 py-5 shadow-xl">
        <div className="sp-marquee flex w-max gap-12 whitespace-nowrap">
          {[...group.benefits, ...group.benefits].map((b, i) => (
            <span key={i} className="flex items-center gap-3 text-sm font-extrabold uppercase tracking-widest text-white">
              <span className="h-2 w-2 rounded-full bg-white" />
              {b}
            </span>
          ))}
        </div>
      </div>

      {/* OVERVIEW */}
      <section className={`${WIDE} py-24`}>
        <Reveal>
          <Head eyebrow="The full picture" title="Everything you need," accent="explained" lead={`A detailed look at how ${page.title} works, what it includes and why it matters for your business.`} />
        </Reveal>
        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-3">
            {extra.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-3xl bg-white/80 p-7 shadow-md ring-1 ring-white backdrop-blur transition duration-500 hover:-translate-y-1 hover:shadow-xl">
                  <span className="absolute left-0 top-0 h-full w-1.5" style={{ background: `linear-gradient(180deg, ${extra.tone.from}, ${BRAND_RED.to})` }} />
                  <p className="pl-4 text-lg leading-relaxed text-brand-navy/85">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="relative h-full overflow-hidden rounded-[2rem] bg-white p-8 shadow-xl ring-1 ring-slate-200 lg:col-span-2">
              <div className="sp-sheen-loop pointer-events-none absolute inset-0" />
              <p className="relative text-xs font-extrabold uppercase tracking-[0.25em] text-brand-blue">What is included</p>
              <ul className="relative mt-6 space-y-3">
                {extra.deliverables.map((d, i) => (
                  <li key={d} className="sp-rise flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-50 to-pink-50 px-4 py-3 font-semibold text-brand-navy transition duration-300 hover:translate-x-2 hover:shadow-md" style={{ animationDelay: `${i * 80}ms` }}>
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-blue" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURES */}
      <section className={`${WIDE} pb-24`}>
        <Reveal>
          <Head eyebrow="What you get" title="Built for" accent="real results" lead={`Each part of ${page.title} is designed to produce visible progress, not just a report you file away.`} />
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {page.features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div className={`group relative h-full overflow-hidden rounded-[2rem] p-[1.5px] transition duration-500 hover:-translate-y-2 ${i === 0 || i === 3 ? "lg:col-span-2" : ""}`}>
                <span className="sp-border absolute inset-0 rounded-[2rem] opacity-70 transition duration-500 group-hover:opacity-100" />
                <div className="relative h-full overflow-hidden rounded-[calc(2rem-1.5px)] bg-white p-8">
                  <div className="sp-glow pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-0 blur-3xl transition duration-500 group-hover:opacity-40" style={{ background: BRAND_FLOW.to }} />
                  <Badge Icon={f.icon} tone={BRAND_FLOW} />
                  <h3 className="mt-6 font-[var(--font-heading)] text-xl font-extrabold text-brand-navy">{f.title}</h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-brand-navy/75">{f.text}</p>
                  <span className="absolute bottom-3 right-6 font-[var(--font-heading)] text-6xl font-extrabold text-brand-blue/10">0{i + 1}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="sp-flow relative w-full overflow-hidden px-6 py-24 text-white md:px-12 xl:px-20 2xl:px-28">
        <div className="relative">
          <Reveal>
            <span className="mx-auto flex w-fit items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.3em] backdrop-blur">
              <Route size={14} /> How we work
            </span>
            <div className="mt-6">
              <Head eyebrow={group.label} title="A clear" accent="four-step process" lead="Transparent steps from the first conversation to results you can measure." dark />
            </div>
          </Reveal>
          <ol className="relative mt-20 grid gap-10 md:grid-cols-4">
            <span className="sp-draw absolute left-0 right-0 top-7 hidden h-1 rounded-full bg-white/70 md:block" />
            {group.process.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.15}>
                <li className="relative list-none rounded-3xl bg-white/15 p-6 backdrop-blur transition duration-500 hover:-translate-y-2 hover:bg-white/25">
                  <span className="sp-pulse relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white font-extrabold text-brand-blue shadow-lg">{i + 1}</span>
                  <h3 className="mt-6 font-[var(--font-heading)] text-lg font-extrabold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/90">{p.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${WIDE} py-24`}>
        <Reveal>
          <Head eyebrow="Questions" title="Common" accent="answers" lead={`What clients usually ask before starting ${page.title}.`} />
        </Reveal>
        <div className="mx-auto mt-14 grid max-w-5xl gap-4">
          {group.faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.08}>
              <details className="group rounded-3xl bg-white p-6 shadow-md ring-1 ring-slate-200 transition duration-300 open:shadow-xl open:ring-pink-200">
                <summary className="flex cursor-pointer list-none items-center justify-between font-[var(--font-heading)] text-lg font-extrabold text-brand-navy">
                  <span className="flex items-center gap-3">
                    <HelpCircle size={20} className="text-brand-blue" />
                    {f.q}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-rose-500 text-white transition duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 leading-relaxed text-brand-navy/75">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      {/* RELATED */}
      <section className={`${WIDE} pb-24`}>
        <Reveal>
          <span className="mx-auto flex w-fit items-center gap-2 text-xs font-extrabold uppercase tracking-[0.3em] text-brand-blue">
            <Network size={14} /> More in {group.label}
          </span>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {related.map((r, i) => (
            <Reveal key={r.slug} delay={i * 0.1}>
              <Link href={`/menu/services/${r.slug}`} className="group flex h-full items-center gap-5 rounded-3xl bg-white p-6 shadow-md ring-1 ring-slate-200 transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <Badge Icon={r.icon} tone={BRAND_FLOW} size={60} iconSize={26} />
                <div className="min-w-0 flex-1">
                  <p className="font-[var(--font-heading)] text-lg font-extrabold text-brand-navy">{r.title}</p>
                  <p className="mt-1 line-clamp-2 text-sm text-brand-navy/65">{r.tagline}</p>
                </div>
                <ArrowRight size={18} className="shrink-0 text-brand-blue transition duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="sp-flow sp-shine relative w-full overflow-hidden px-6 py-24 text-center text-white md:px-12 xl:px-20 2xl:px-28">
        <Reveal>
          <div className="relative mx-auto max-w-3xl">
            <span className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-xs font-extrabold uppercase tracking-widest backdrop-blur">
              <Rocket size={16} /> Start your project
            </span>
            <h2 className="font-[var(--font-heading)] text-3xl font-extrabold md:text-5xl">Ready to grow with {page.title}?</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/90">
              Tell us about your business and get a clear plan and a free quote within one business day.
            </p>
            <Link href="/contact" className="mt-8 inline-block rounded-full bg-white px-9 py-4 font-extrabold text-brand-navy shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl">
              Get A Free Consultation
            </Link>
          </div>
        </Reveal>
      </section>

      <style>{`
        @keyframes sp-flow { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes sp-grid { from { background-position: 0 0; } to { background-position: 40px 40px; } }
        @keyframes sp-float { 0%,100% { transform: translateY(0) rotate(0deg); opacity: 0.4; } 50% { transform: translateY(-18px) rotate(10deg); opacity: 0.9; } }
        @keyframes sp-blob { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-30px) scale(1.15); } }
        @keyframes sp-rise { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes sp-stat { from { opacity: 0; transform: translateX(16px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes sp-draw { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes sp-bar { from { width: 0; } to { width: 120px; } }
        @keyframes sp-ping { 0% { transform: scale(1); opacity: 0.7; } 100% { transform: scale(2.4); opacity: 0; } }
        @keyframes sp-pulse { 0%,100% { box-shadow: 0 0 0 0 rgba(37,99,235,0.35); } 50% { box-shadow: 0 0 0 10px rgba(37,99,235,0); } }
        @keyframes sp-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes sp-border { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
        @keyframes sp-sheen { 0% { transform: translateX(-120%); } 100% { transform: translateX(120%); } }
        @keyframes sp-shine { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        @keyframes sp-glow { 0%,100% { opacity: 0.5; } 50% { opacity: 0.9; } }
        @keyframes sp-gradient-text { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
        .sp-flow { background: linear-gradient(120deg, #2563eb, #7c3aed, #db2777, #e11d48, #2563eb); background-size: 300% 300%; animation: sp-flow 14s ease-in-out infinite; }
        .sp-grid { background-image: linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px); background-size: 40px 40px; animation: sp-grid 14s linear infinite; }
        .sp-blob { animation: sp-blob 16s ease-in-out infinite; }
        .sp-blob-b { animation-duration: 20s; animation-direction: reverse; }
        .sp-float { animation: sp-float 8s ease-in-out infinite; }
        .sp-rise { animation: sp-rise 0.8s cubic-bezier(0.22,1,0.36,1) both; }
        .sp-stat { animation: sp-stat 0.7s cubic-bezier(0.22,1,0.36,1) both; }
        .sp-draw { transform-origin: left; animation: sp-draw 1.6s cubic-bezier(0.22,1,0.36,1) 0.3s both; }
        .sp-bar { width: 120px; animation: sp-bar 1.1s cubic-bezier(0.22,1,0.36,1) 0.4s both; }
        .sp-ping { animation: sp-ping 1.6s cubic-bezier(0,0,0.2,1) infinite; }
        .sp-pulse { animation: sp-pulse 2.6s ease-out infinite; }
        .sp-marquee { animation: sp-marquee 26s linear infinite; }
        .sp-border { background: linear-gradient(90deg, #2563eb, #db2777, #e11d48, #2563eb); background-size: 200% 200%; animation: sp-border 5s linear infinite; }
        .sp-glow-ring { background: linear-gradient(135deg, #fde68a, #fb7185, #60a5fa); background-size: 200% 200%; animation: sp-border 6s linear infinite, sp-glow 4s ease-in-out infinite; }
        .sp-sheen-loop { background: linear-gradient(110deg, transparent 30%, rgba(219,39,119,0.08) 50%, transparent 70%); animation: sp-sheen 7s ease-in-out infinite; }
        .sp-shine::after { content: ""; position: absolute; inset: 0; background: linear-gradient(110deg, transparent 35%, rgba(255,255,255,0.25) 50%, transparent 65%); background-size: 200% 100%; animation: sp-shine 3.5s linear infinite; pointer-events: none; }
        .sp-gradient-text { background: linear-gradient(90deg, #2563eb, #7c3aed, #db2777, #e11d48, #2563eb); background-size: 250% 100%; -webkit-background-clip: text; background-clip: text; color: transparent; animation: sp-gradient-text 6s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .sp-flow, .sp-grid, .sp-blob, .sp-float, .sp-rise, .sp-stat, .sp-draw, .sp-bar, .sp-ping, .sp-pulse,
          .sp-marquee, .sp-border, .sp-glow-ring, .sp-sheen-loop, .sp-shine::after, .sp-gradient-text { animation: none !important; }
        }
      `}</style>
    </main>
  );
}