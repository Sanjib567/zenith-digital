import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ChevronRight,
  Route,
  Sparkles,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";
import { companyPages, slugOf, type CompanyPageData } from "@/data/company";

type Tone = { from: string; to: string };
const WIDE = "relative w-full px-6 md:px-12 xl:px-20 2xl:px-28";
const BRAND_FLOW: Tone = { from: "#2563eb", to: "#db2777" };
const BRAND_RED: Tone = { from: "#db2777", to: "#e11d48" };

function Badge({ Icon, tone, size = 56, iconSize = 24 }: { Icon: LucideIcon; tone: Tone; size?: number; iconSize?: number }) {
  return (
    <span
      className="cp-pulse relative flex shrink-0 items-center justify-center rounded-2xl text-white shadow-lg transition duration-500 group-hover:rotate-6 group-hover:scale-110"
      style={{ width: size, height: size, background: `linear-gradient(135deg, ${tone.from}, ${tone.to})` }}
    >
      <span className="absolute inset-0 rounded-2xl ring-2 ring-white/50" />
      <Icon size={iconSize} />
    </span>
  );
}

function Head({ eyebrow, title, accent, lead }: { eyebrow: string; title: string; accent: string; lead: string }) {
  return (
    <div className="text-center">
      <p className="cp-rise text-xs font-extrabold uppercase tracking-[0.3em]" style={{ color: BRAND_FLOW.from }}>
        {eyebrow}
      </p>
      <h2 className="cp-rise mt-3 font-[var(--font-heading)] text-3xl font-extrabold text-brand-navy md:text-4xl" style={{ animationDelay: "100ms" }}>
        {title} <span className="cp-gradient-text">{accent}</span>
      </h2>
      <p className="cp-rise mx-auto mt-4 max-w-3xl text-base font-extrabold leading-relaxed text-brand-navy/85 md:text-lg" style={{ animationDelay: "200ms" }}>
        {lead}
      </p>
      <span className="cp-bar mx-auto mt-5 block h-1.5 rounded-full" style={{ background: `linear-gradient(90deg, ${BRAND_FLOW.from}, ${BRAND_FLOW.to}, ${BRAND_RED.to})` }} />
    </div>
  );
}

const FLOATERS = [
  { top: "14%", left: "5%", delay: "0s" },
  { top: "30%", left: "90%", delay: "1.5s" },
  { top: "72%", left: "4%", delay: "3s" },
  { top: "80%", left: "92%", delay: "2s" },
];

export default function CompanyPage({ page }: { page: CompanyPageData }) {
  const PageIcon = page.icon;
  const others = companyPages.filter((p) => p.label !== page.label);

  return (
    <main className="relative w-full overflow-hidden bg-gradient-to-br from-blue-50 via-pink-50 to-rose-50">
      {/* HERO: brand flow gradient, same as the other site pages */}
      <section className="cp-flow relative w-full overflow-hidden px-6 pb-28 pt-12 text-white md:px-12 md:pt-14 xl:px-20 2xl:px-28">
        <div className="cp-grid pointer-events-none absolute inset-0 opacity-25" />
        <div className="cp-blob pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-full bg-white/25 blur-3xl" />
        <div className="cp-blob cp-blob-b pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-amber-200/30 blur-3xl" />
        {FLOATERS.map((f, i) => {
          const FloatIcon = page.boxes[i % page.boxes.length].icon;
          return (
            <FloatIcon
              key={i}
              size={i % 2 === 0 ? 40 : 28}
              className="cp-float pointer-events-none absolute text-white/30"
              style={{ top: f.top, left: f.left, animationDelay: f.delay }}
            />
          );
        })}

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <nav className="cp-rise flex flex-wrap items-center gap-2 text-xs font-bold text-white/85">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight size={12} />
              <span>Company</span>
              <ChevronRight size={12} />
              <span className="text-white">{page.label}</span>
            </nav>

            <div className="cp-rise mt-7 flex items-center gap-3" style={{ animationDelay: "80ms" }}>
              <span className="cp-pulse flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-brand-blue shadow-xl">
                <Building2 size={18} />
              </span>
              <span className="rounded-full bg-white/20 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.25em] ring-1 ring-white/40 backdrop-blur">
                Zenith Digital Agency
              </span>
            </div>

            <h1 className="cp-rise mt-5 font-[var(--font-heading)] text-4xl font-extrabold leading-tight drop-shadow-lg md:text-5xl" style={{ animationDelay: "160ms" }}>
              {page.label}
            </h1>
            <p className="cp-rise mt-4 text-lg font-extrabold text-white" style={{ animationDelay: "240ms" }}>
              {page.tagline}
            </p>
            <p className="cp-rise mt-3 max-w-xl text-base text-white/90" style={{ animationDelay: "320ms" }}>
              {page.intro}
            </p>

            <div className="cp-rise mt-7 flex flex-wrap gap-3" style={{ animationDelay: "400ms" }}>
              <Link
                href="/contact"
                className="cp-shine group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3 text-sm font-extrabold text-brand-navy shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl"
              >
                Talk to our team
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </Link>
              <Link href="/#faq" className="rounded-full border-2 border-white px-6 py-2.5 text-sm font-extrabold text-white transition hover:bg-white hover:text-brand-navy">
                Read the FAQs
              </Link>
            </div>
          </div>

          {/* Stats card: layered glass panel with animated bars */}
          <div className="cp-rise relative mx-auto w-full max-w-md" style={{ animationDelay: "200ms" }}>
            <div className="cp-ring absolute -inset-2 rounded-[2rem] opacity-80 blur-xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/40 bg-white/15 p-7 shadow-2xl backdrop-blur-xl">
              <div className="cp-sheen pointer-events-none absolute inset-0" />
              <div className="relative flex items-center justify-between">
                <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-white/90">Key numbers</p>
                <span className="relative flex h-3 w-3">
                  <span className="cp-ping absolute inline-flex h-full w-full rounded-full bg-white" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
                </span>
              </div>

              <div className="relative mt-6 space-y-4">
                {page.stats.map((s, i) => (
                  <div
                    key={s.label}
                    className="cp-stat group rounded-2xl bg-white p-4 shadow-lg transition duration-500 hover:-translate-y-1 hover:shadow-xl"
                    style={{ animationDelay: `${i * 150}ms` }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span
                          className="flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-md"
                          style={{ background: `linear-gradient(135deg, ${i % 2 ? BRAND_RED.from : BRAND_FLOW.from}, ${i % 2 ? BRAND_RED.to : BRAND_FLOW.to})` }}
                        >
                          <PageIcon size={18} />
                        </span>
                        <p className="text-sm font-bold text-brand-navy/80">{s.label}</p>
                      </div>
                      <p className="font-[var(--font-heading)] text-3xl font-extrabold text-brand-gradient">
                        <CountUp end={s.end} suffix={s.suffix} duration={1600 + i * 200} />
                      </p>
                    </div>
                    <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                      <span
                        className="cp-bar-fill block h-full rounded-full"
                        style={{
                          width: `${Math.min(100, 30 + s.end)}%`,
                          background: `linear-gradient(90deg, ${BRAND_FLOW.from}, ${BRAND_FLOW.to}, ${BRAND_RED.to})`,
                          animationDelay: `${300 + i * 150}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS MARQUEE */}
      <div className="relative -mt-6 overflow-hidden bg-gradient-to-r from-blue-600 via-pink-500 to-rose-500 py-4 shadow-xl">
        <div className="cp-marquee flex w-max gap-12 whitespace-nowrap">
          {[...page.highlights, ...page.highlights].map((h, i) => (
            <span key={i} className="flex items-center gap-3 text-sm font-extrabold uppercase tracking-widest text-white">
              <span className="h-2 w-2 rounded-full bg-white" />
              {h}
            </span>
          ))}
        </div>
      </div>

      {/* STORY + HIGHLIGHTS */}
      <section className={`${WIDE} py-20`}>
        <Reveal>
          <Head eyebrow="The full story" title="Understanding" accent={page.label} lead={page.tagline} />
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-3">
            {page.story.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="cp-card group relative overflow-hidden rounded-3xl p-6 shadow-md ring-1 ring-white transition duration-500 hover:-translate-y-1 hover:shadow-xl">
                  <span className="absolute left-0 top-0 h-full w-1.5" style={{ background: `linear-gradient(180deg, ${BRAND_FLOW.from}, ${BRAND_RED.to})` }} />
                  <p className="pl-4 text-base leading-relaxed text-brand-navy/85">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <aside className="cp-panel relative h-full overflow-hidden rounded-[2rem] p-8 text-white shadow-2xl lg:col-span-2">
              <div className="cp-sheen pointer-events-none absolute inset-0" />
              <p className="relative text-xs font-extrabold uppercase tracking-[0.25em] text-white/85">Highlights</p>
              <h3 className="relative mt-3 font-[var(--font-heading)] text-2xl font-extrabold">{page.highlightTitle}</h3>
              <ul className="relative mt-6 space-y-3">
                {page.highlights.map((h, i) => (
                  <li
                    key={h}
                    className="cp-rise flex items-start gap-3 rounded-2xl bg-white/15 px-4 py-3 text-sm font-semibold backdrop-blur transition duration-300 hover:translate-x-2 hover:bg-white/25"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <BadgeCheck size={18} className="mt-0.5 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>
      </section>

      {/* CONTENT BOXES */}
      <section className={`${WIDE} pb-20`}>
        <Reveal>
          <Head eyebrow="Key points" title="What you can" accent="count on" lead={`The principles behind ${page.label}, explained in plain language.`} />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {page.boxes.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-[1.75rem] p-[1.5px] transition duration-500 hover:-translate-y-2">
                <span className="cp-border absolute inset-0 rounded-[1.75rem] opacity-70 transition duration-500 group-hover:opacity-100" />
                <div className="cp-card relative h-full overflow-hidden rounded-[calc(1.75rem-1.5px)] p-6">
                  <Badge Icon={b.icon} tone={BRAND_FLOW} />
                  <h3 className="mt-5 font-[var(--font-heading)] text-lg font-extrabold text-brand-navy">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-navy/75">{b.text}</p>
                  <span className="absolute bottom-2 right-5 font-[var(--font-heading)] text-5xl font-extrabold text-brand-blue/10">0{i + 1}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS BAND (brand gradient, same as other pages) */}
      <section className="cp-flow relative w-full overflow-hidden px-6 py-20 text-white md:px-12 xl:px-20 2xl:px-28">
        <div className="relative">
          <Reveal>
            <span className="mx-auto flex w-fit items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.3em] backdrop-blur">
              <Route size={14} /> Our approach
            </span>
            <div className="mt-6 text-center">
              <h2 className="font-[var(--font-heading)] text-3xl font-extrabold md:text-4xl">Built on clear steps</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base font-bold text-white/90">
                Every page of this section reflects how we plan, deliver and measure work for clients.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {others.slice(0, 3).map((o, i) => {
              const OIcon = o.icon;
              return (
                <Reveal key={o.label} delay={i * 0.12}>
                  <Link
                    href={`/menu/company/${slugOf(o)}`}
                    className="cp-card-dark group flex h-full items-center gap-4 rounded-3xl p-5 backdrop-blur transition duration-500 hover:-translate-y-2 hover:bg-white/25"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-blue shadow-lg transition duration-500 group-hover:rotate-6">
                      <OIcon size={20} />
                    </span>
                    <span className="flex-1 font-[var(--font-heading)] text-base font-extrabold">{o.label}</span>
                    <ArrowRight size={18} className="shrink-0 transition group-hover:translate-x-1" />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* MORE */}
      <section className={`${WIDE} py-20`}>
        <Reveal>
          <Head eyebrow="Explore more" title="More about" accent="Zenith" lead="Learn how we work, who we serve and what our clients say." />
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((o, i) => {
            const OIcon = o.icon;
            return (
              <Reveal key={o.label} delay={i * 0.05}>
                <Link
                  href={`/menu/company/${slugOf(o)}`}
                  className="cp-card group flex items-center gap-4 rounded-3xl p-5 shadow-md ring-1 ring-slate-200 transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <Badge Icon={OIcon} tone={BRAND_RED} size={48} iconSize={20} />
                  <span className="flex-1 font-[var(--font-heading)] text-base font-extrabold text-brand-navy">{o.label}</span>
                  <ArrowRight size={18} className="shrink-0 text-brand-blue transition duration-300 group-hover:translate-x-1" />
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="cp-flow cp-shine relative w-full overflow-hidden px-6 py-20 text-center text-white md:px-12 xl:px-20 2xl:px-28">
        <Reveal>
          <div className="relative mx-auto max-w-3xl">
            <span className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-xs font-extrabold uppercase tracking-widest backdrop-blur">
              <Rocket size={14} /> Start a conversation
            </span>
            <h2 className="font-[var(--font-heading)] text-3xl font-extrabold md:text-4xl">Ready to work with Zenith?</h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/90">
              Tell us about your business and we will reply with a clear plan within one business day.
            </p>
            <Link href="/contact" className="mt-7 inline-block rounded-full bg-white px-8 py-3.5 font-extrabold text-brand-navy shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl">
              Get A Free Consultation
            </Link>
          </div>
        </Reveal>
      </section>

      <style>{`
        @keyframes cp-flow { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes cp-grid { from { background-position: 0 0; } to { background-position: 40px 40px; } }
        @keyframes cp-float { 0%,100% { transform: translateY(0) rotate(0deg); opacity: 0.4; } 50% { transform: translateY(-14px) rotate(10deg); opacity: 0.9; } }
        @keyframes cp-blob { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-30px) scale(1.15); } }
        @keyframes cp-rise { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes cp-stat { from { opacity: 0; transform: translateX(16px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes cp-bar { from { width: 0; } }
        @keyframes cp-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes cp-border { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
        @keyframes cp-ring { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
        @keyframes cp-ping { 0% { transform: scale(1); opacity: 0.7; } 100% { transform: scale(2.4); opacity: 0; } }
        @keyframes cp-pulse { 0%,100% { box-shadow: 0 0 0 0 rgba(37,99,235,0.35); } 50% { box-shadow: 0 0 0 10px rgba(37,99,235,0); } }
        @keyframes cp-sheen { 0% { transform: translateX(-120%); } 100% { transform: translateX(120%); } }
        @keyframes cp-shine { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        @keyframes cp-card-shift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes cp-gradient-text { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
        .cp-flow { background: linear-gradient(120deg, #2563eb, #7c3aed, #db2777, #e11d48, #2563eb); background-size: 300% 300%; animation: cp-flow 14s ease-in-out infinite; }
        .cp-grid { background-image: linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px); background-size: 40px 40px; animation: cp-grid 14s linear infinite; }
        .cp-blob { animation: cp-blob 16s ease-in-out infinite; }
        .cp-blob-b { animation-duration: 20s; animation-direction: reverse; }
        .cp-float { animation: cp-float 8s ease-in-out infinite; }
        .cp-rise { animation: cp-rise 0.8s cubic-bezier(0.22,1,0.36,1) both; }
        .cp-stat { animation: cp-stat 0.7s cubic-bezier(0.22,1,0.36,1) both; }
        .cp-bar-fill { animation: cp-bar 1.4s cubic-bezier(0.22,1,0.36,1) both; }
        .cp-bar { width: 110px; animation: cp-bar 1s cubic-bezier(0.22,1,0.36,1) 0.4s both; }
        .cp-marquee { animation: cp-marquee 26s linear infinite; }
        .cp-ring { background: linear-gradient(135deg, #2563eb, #db2777, #e11d48, #7c3aed, #2563eb); background-size: 250% 250%; animation: cp-ring 6s linear infinite; }
        .cp-ping { animation: cp-ping 1.6s cubic-bezier(0,0,0.2,1) infinite; }
        .cp-pulse { animation: cp-pulse 2.6s ease-out infinite; }
        .cp-sheen { background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.22) 50%, transparent 70%); transform: translateX(-120%); animation: cp-sheen 5s ease-in-out infinite; }
        .cp-border { background: linear-gradient(90deg, #2563eb, #db2777, #e11d48, #2563eb); background-size: 200% 200%; animation: cp-border 5s linear infinite; }
        .cp-panel { background: linear-gradient(135deg, #2563eb, #7c3aed, #db2777); background-size: 200% 200%; animation: cp-flow 10s ease-in-out infinite; }
        .cp-card { background: linear-gradient(120deg, #ffffff, #eff6ff, #fdf2f8, #ffffff); background-size: 300% 300%; animation: cp-card-shift 12s ease-in-out infinite; }
        .cp-card-dark { background: linear-gradient(120deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08), rgba(255,255,255,0.18)); background-size: 300% 300%; animation: cp-card-shift 10s ease-in-out infinite; }
        .cp-gradient-text { background: linear-gradient(90deg, #2563eb, #7c3aed, #db2777, #e11d48, #2563eb); background-size: 250% 100%; -webkit-background-clip: text; background-clip: text; color: transparent; animation: cp-gradient-text 6s linear infinite; }
        .cp-shine::after { content: ""; position: absolute; inset: 0; background: linear-gradient(110deg, transparent 35%, rgba(255,255,255,0.25) 50%, transparent 65%); background-size: 200% 100%; animation: cp-shine 3.5s linear infinite; pointer-events: none; }
        @media (prefers-reduced-motion: reduce) {
          .cp-flow, .cp-grid, .cp-blob, .cp-float, .cp-rise, .cp-stat, .cp-bar-fill, .cp-bar, .cp-marquee, .cp-ring,
          .cp-ping, .cp-pulse, .cp-sheen, .cp-border, .cp-panel, .cp-card, .cp-card-dark, .cp-gradient-text, .cp-shine::after { animation: none !important; }
        }
      `}</style>
    </main>
  );
}