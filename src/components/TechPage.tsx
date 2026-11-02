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
import TechLogo from "@/components/TechLogo";
import TechDeepDive from "@/components/TechDeepDive";
import { techGroups, techs, techSlug, type Tech } from "@/data/technologies";

type Tone = { from: string; to: string };
const WIDE = "relative w-full px-6 md:px-12 xl:px-20 2xl:px-28";
const BRAND_FLOW: Tone = { from: "#2563eb", to: "#db2777" };
const BRAND_RED: Tone = { from: "#db2777", to: "#e11d48" };

function Badge({ Icon, tone, size = 48, iconSize = 22 }: { Icon: LucideIcon; tone: Tone; size?: number; iconSize?: number }) {
  return (
    <span
      className="tp-pulse relative flex shrink-0 items-center justify-center rounded-2xl text-white shadow-lg transition duration-500 group-hover:rotate-6 group-hover:scale-110"
      style={{ width: size, height: size, background: `linear-gradient(135deg, ${tone.from}, ${tone.to})` }}
    >
      <span className="absolute inset-0 rounded-2xl ring-2 ring-white/50" />
      <Icon size={iconSize} />
    </span>
  );
}

function Head({ eyebrow, title, accent, lead, dark = false }: { eyebrow: string; title: string; accent: string; lead: string; dark?: boolean }) {
  return (
    <div className="text-center">
      <p className="tp-rise text-xs font-extrabold uppercase tracking-[0.3em]" style={{ color: dark ? "#ffffff" : BRAND_FLOW.from }}>
        {eyebrow}
      </p>
      <h2
        className={`tp-rise mt-3 font-[var(--font-heading)] text-3xl font-extrabold md:text-4xl ${dark ? "text-white" : "text-brand-navy"}`}
        style={{ animationDelay: "100ms" }}
      >
        {title} <span className="tp-gradient-text">{accent}</span>
      </h2>
      <p
        className={`tp-rise mx-auto mt-4 max-w-3xl text-base font-extrabold leading-relaxed md:text-lg ${dark ? "text-white/90" : "text-brand-navy/85"}`}
        style={{ animationDelay: "200ms" }}
      >
        {lead}
      </p>
      <span
        className="tp-bar mx-auto mt-5 block h-1.5 rounded-full"
        style={{ background: `linear-gradient(90deg, ${BRAND_FLOW.from}, ${BRAND_FLOW.to}, ${BRAND_RED.to})` }}
      />
    </div>
  );
}

const FLOATERS = [
  { top: "14%", left: "5%", delay: "0s" },
  { top: "30%", left: "90%", delay: "1.5s" },
  { top: "72%", left: "4%", delay: "3s" },
  { top: "80%", left: "92%", delay: "2s" },
];

export default function TechPage({ tech }: { tech: Tech }) {
  const group = techGroups[tech.group];
  const slug = techSlug(tech);
  const related = techs.filter((t) => t.group === tech.group && t !== tech);
  const TechIcon = tech.icon;
  const paragraphs = group.paragraphs.map((p) => p.replace("{name}", tech.name));

  return (
    <main className="relative w-full overflow-hidden bg-gradient-to-br from-blue-50 via-pink-50 to-rose-50">
      {/* HERO */}
      <section className="tp-flow relative w-full overflow-hidden px-6 pb-20 pt-10 text-white md:px-12 md:pt-14 xl:px-20 2xl:px-28">
        <div className="tp-grid pointer-events-none absolute inset-0 opacity-25" />
        <div className="tp-blob pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-white/25 blur-3xl" />
        <div className="tp-blob tp-blob-b pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-amber-200/30 blur-3xl" />
        {FLOATERS.map((f, i) => {
          const FloatIcon = tech.strengths[i % tech.strengths.length].icon;
          return (
            <FloatIcon
              key={i}
              size={i % 2 === 0 ? 40 : 28}
              className="tp-float pointer-events-none absolute text-white/30"
              style={{ top: f.top, left: f.left, animationDelay: f.delay }}
            />
          );
        })}

        <div className="relative grid items-center gap-10 lg:grid-cols-2">
          <div>
            <nav className="tp-rise flex flex-wrap items-center gap-2 text-xs font-bold text-white/80">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight size={12} />
              <span>Technologies</span>
              <ChevronRight size={12} />
              <span className="text-white">{tech.name}</span>
            </nav>

            <div className="tp-rise mt-6 flex items-center gap-3" style={{ animationDelay: "80ms" }}>
              <span className="tp-pulse flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-brand-blue shadow-xl">
                <Sparkles size={18} />
              </span>
              <span className="rounded-full bg-white/20 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.25em] ring-1 ring-white/40 backdrop-blur">
                {group.label}
              </span>
            </div>

            <h1
              className="tp-rise mt-5 font-[var(--font-heading)] text-4xl font-extrabold leading-tight drop-shadow-lg md:text-5xl"
              style={{ animationDelay: "160ms" }}
            >
              {tech.name}
            </h1>
            <p className="tp-rise mt-4 text-lg font-extrabold text-white" style={{ animationDelay: "240ms" }}>
              {tech.tagline}
            </p>
            <p className="tp-rise mt-3 max-w-xl text-base text-white/90" style={{ animationDelay: "320ms" }}>
              {tech.intro}
            </p>

            <div className="tp-rise mt-7 flex flex-wrap gap-3" style={{ animationDelay: "400ms" }}>
              <Link
                href="/contact"
                className="tp-shine group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3 text-sm font-extrabold text-brand-navy shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl"
              >
                Discuss this technology
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </Link>
              <Link
                href="/#faq"
                className="rounded-full border-2 border-white px-6 py-2.5 text-sm font-extrabold text-white transition hover:bg-white hover:text-brand-navy"
              >
                Read the FAQs
              </Link>
            </div>
          </div>

          {/* Compact logo panel with stats */}
          <div className="tp-rise relative mx-auto w-full max-w-sm" style={{ animationDelay: "200ms" }}>
            <div className="tp-glow-ring absolute -inset-2 rounded-[2rem] opacity-70 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/30 bg-white/15 shadow-2xl backdrop-blur-xl">
              <TechLogo slug={slug} name={tech.name} className="h-40 w-full" logoClassName="h-20 w-20" />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-white/90">Key numbers</p>
                  <span className="relative flex h-3 w-3">
                    <span className="tp-ping absolute inline-flex h-full w-full rounded-full bg-white" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
                  </span>
                </div>
                <div className="mt-5 space-y-4">
                  {tech.stats.map((s, i) => (
                    <div
                      key={s.label}
                      className="tp-stat flex items-center justify-between gap-4 border-b border-white/20 pb-4 last:border-0 last:pb-0"
                      style={{ animationDelay: `${i * 150}ms` }}
                    >
                      <div>
                        <p className="font-[var(--font-heading)] text-3xl font-extrabold">
                          <CountUp end={s.end} suffix={s.suffix} duration={1600 + i * 200} />
                        </p>
                        <p className="mt-1 text-sm font-semibold text-white/85">{s.label}</p>
                      </div>
                      <span className="tp-pulse flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand-blue shadow-lg">
                        <TechIcon size={18} />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS MARQUEE */}
      <div className="relative -mt-6 overflow-hidden bg-gradient-to-r from-blue-600 via-pink-500 to-rose-500 py-4 shadow-xl">
        <div className="tp-marquee flex w-max gap-12 whitespace-nowrap">
          {[...group.benefits, ...group.benefits].map((b, i) => (
            <span key={i} className="flex items-center gap-3 text-sm font-extrabold uppercase tracking-widest text-white">
              <span className="h-2 w-2 rounded-full bg-white" />
              {b}
            </span>
          ))}
        </div>
      </div>

      {/* OVERVIEW */}
      <section className={`${WIDE} py-16`}>
        <Reveal>
          <Head
            eyebrow="The full picture"
            title="Why we use"
            accent={tech.name}
            lead={`A closer look at ${tech.name}, where it fits best and what it means for your project.`}
          />
        </Reveal>

        {/* Compact logo spotlight */}
        <Reveal delay={0.1}>
          <div
            className="relative mt-12 flex h-52 w-full items-center justify-center overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-white md:h-60"
            style={{ background: `linear-gradient(135deg, ${group.tone.from}, ${group.tone.to})` }}
          >
            <div className="tp-grid absolute inset-0 opacity-30" />
            <TechLogo
              slug={slug}
              name={tech.name}
              className="relative h-32 w-32 rounded-3xl shadow-2xl md:h-36 md:w-36"
              logoClassName="h-3/5 w-3/5"
            />
            <div className="absolute bottom-4 left-5 right-5 flex flex-wrap items-end justify-between gap-3">
              <p className="max-w-lg font-[var(--font-heading)] text-xl font-extrabold text-white drop-shadow-lg md:text-2xl">
                {tech.tagline}
              </p>
              <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-extrabold uppercase tracking-widest text-brand-navy shadow-lg">
                {tech.name}
              </span>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-3">
            {paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="tp-card-bg group relative overflow-hidden rounded-3xl p-6 shadow-md ring-1 ring-white transition duration-500 hover:-translate-y-1 hover:shadow-xl">
                  <span
                    className="absolute left-0 top-0 h-full w-1.5"
                    style={{ background: `linear-gradient(180deg, ${group.tone.from}, ${BRAND_RED.to})` }}
                  />
                  <p className="pl-4 text-base leading-relaxed text-brand-navy/85">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="tp-card-bg relative h-full overflow-hidden rounded-[2rem] p-7 shadow-xl ring-1 ring-slate-200 lg:col-span-2">
              <p className="relative text-xs font-extrabold uppercase tracking-[0.25em] text-brand-blue">What you get</p>
              <ul className="relative mt-5 space-y-3">
                {group.deliverables.map((d, i) => (
                  <li
                    key={d}
                    className="tp-rise flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-3 font-semibold text-brand-navy shadow-sm transition duration-300 hover:translate-x-2 hover:shadow-md"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-blue" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <TechDeepDive slug={slug} name={tech.name} />

      {/* STRENGTHS */}
      <section className={`${WIDE} pb-16`}>
        <Reveal>
          <Head eyebrow="Strengths" title="Why it" accent="stands out" lead={`What ${tech.name} brings to your product, explained in plain language.`} />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {tech.strengths.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-[1.75rem] p-[1.5px] transition duration-500 hover:-translate-y-2">
                <span className="tp-border absolute inset-0 rounded-[1.75rem] opacity-70 transition duration-500 group-hover:opacity-100" />
                <div className="tp-card-bg relative h-full overflow-hidden rounded-[calc(1.75rem-1.5px)] p-6">
                  <Badge Icon={s.icon} tone={BRAND_FLOW} />
                  <h3 className="mt-5 font-[var(--font-heading)] text-lg font-extrabold text-brand-navy">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-navy/75">{s.text}</p>
                  <span className="absolute bottom-2 right-5 font-[var(--font-heading)] text-5xl font-extrabold text-brand-blue/10">
                    0{i + 1}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="tp-flow relative w-full overflow-hidden px-6 py-16 text-white md:px-12 xl:px-20 2xl:px-28">
        <div className="relative">
          <Reveal>
            <span className="mx-auto flex w-fit items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.3em] backdrop-blur">
              <Route size={14} /> How we work
            </span>
            <div className="mt-5">
              <Head
                eyebrow={group.label}
                title="A clear"
                accent="four-step process"
                lead="Transparent steps from the first conversation to a working, supported system."
                dark
              />
            </div>
          </Reveal>
          <ol className="relative mt-14 grid gap-6 md:grid-cols-4">
            <span className="tp-draw absolute left-0 right-0 top-7 hidden h-1 rounded-full bg-white/70 md:block" />
            {group.process.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.15}>
                <li className="tp-card-dark relative list-none rounded-3xl p-5 backdrop-blur transition duration-500 hover:-translate-y-2">
                  <span className="tp-pulse relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white font-extrabold text-brand-blue shadow-lg">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 font-[var(--font-heading)] text-lg font-extrabold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/90">{p.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${WIDE} py-16`}>
        <Reveal>
          <Head eyebrow="Questions" title="Common" accent="answers" lead={`What clients usually ask about ${tech.name}.`} />
        </Reveal>
        <div className="mx-auto mt-10 grid max-w-4xl gap-4">
          {group.faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.08}>
              <details className="tp-card-bg group relative overflow-hidden rounded-3xl p-5 shadow-md ring-1 ring-slate-200 transition duration-300 open:shadow-xl open:ring-pink-200">
                <summary className="flex cursor-pointer list-none items-center justify-between font-[var(--font-heading)] text-base font-extrabold text-brand-navy">
                  <span className="flex items-center gap-3">
                    <HelpCircle size={18} className="text-brand-blue" />
                    {f.q}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-rose-500 text-white transition duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-brand-navy/75">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      {/* RELATED */}
      <section className={`${WIDE} pb-16`}>
        <Reveal>
          <span className="mx-auto flex w-fit items-center gap-2 text-xs font-extrabold uppercase tracking-[0.3em] text-brand-blue">
            <Network size={14} /> More in {group.label}
          </span>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {related.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.1}>
              <Link
                href={`/menu/technologies/${techSlug(r)}`}
                className="tp-card-bg group flex h-full items-center gap-4 overflow-hidden rounded-3xl p-5 shadow-md ring-1 ring-slate-200 transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <TechLogo
                  slug={techSlug(r)}
                  name={r.name}
                  className="h-16 w-16 shrink-0 rounded-2xl shadow-lg ring-1 ring-slate-200"
                  logoClassName="h-10 w-10"
                  compact
                />
                <div className="min-w-0 flex-1">
                  <p className="font-[var(--font-heading)] text-base font-extrabold text-brand-navy">{r.name}</p>
                  <p className="mt-1 line-clamp-2 text-sm text-brand-navy/65">{r.tagline}</p>
                </div>
                <ArrowRight size={18} className="shrink-0 text-brand-blue transition duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="tp-flow tp-shine relative w-full overflow-hidden px-6 py-16 text-center text-white md:px-12 xl:px-20 2xl:px-28">
        <Reveal>
          <div className="relative mx-auto max-w-3xl">
            <span className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-xs font-extrabold uppercase tracking-widest backdrop-blur">
              <Rocket size={14} /> Start your project
            </span>
            <h2 className="font-[var(--font-heading)] text-3xl font-extrabold md:text-4xl">
              Ready to build with {tech.name}?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/90">
              Tell us about your project and get a clear plan and a free quote within one business day.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-block rounded-full bg-white px-8 py-3.5 font-extrabold text-brand-navy shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl"
            >
              Get A Free Consultation
            </Link>
          </div>
        </Reveal>
      </section>

      <style>{`
        @keyframes tp-flow { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes tp-grid { from { background-position: 0 0; } to { background-position: 40px 40px; } }
        @keyframes tp-float { 0%,100% { transform: translateY(0) rotate(0deg); opacity: 0.4; } 50% { transform: translateY(-14px) rotate(10deg); opacity: 0.9; } }
        @keyframes tp-blob { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-30px) scale(1.15); } }
        @keyframes tp-rise { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes tp-stat { from { opacity: 0; transform: translateX(16px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes tp-draw { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes tp-bar { from { width: 0; } to { width: 110px; } }
        @keyframes tp-ping { 0% { transform: scale(1); opacity: 0.7; } 100% { transform: scale(2.4); opacity: 0; } }
        @keyframes tp-pulse { 0%,100% { box-shadow: 0 0 0 0 rgba(37,99,235,0.35); } 50% { box-shadow: 0 0 0 10px rgba(37,99,235,0); } }
        @keyframes tp-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes tp-border { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
        @keyframes tp-shine { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        @keyframes tp-glow { 0%,100% { opacity: 0.5; } 50% { opacity: 0.9; } }
        @keyframes tp-gradient-text { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
        @keyframes tp-card-shift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes tp-sheen-sweep { 0% { transform: translateX(-120%); } 100% { transform: translateX(120%); } }
        .tp-flow { background: linear-gradient(120deg, #2563eb, #7c3aed, #db2777, #e11d48, #2563eb); background-size: 300% 300%; animation: tp-flow 14s ease-in-out infinite; }
        .tp-grid { background-image: linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px); background-size: 40px 40px; animation: tp-grid 14s linear infinite; }
        .tp-blob { animation: tp-blob 16s ease-in-out infinite; }
        .tp-blob-b { animation-duration: 20s; animation-direction: reverse; }
        .tp-float { animation: tp-float 8s ease-in-out infinite; }
        .tp-rise { animation: tp-rise 0.7s cubic-bezier(0.22,1,0.36,1) both; }
        .tp-stat { animation: tp-stat 0.6s cubic-bezier(0.22,1,0.36,1) both; }
        .tp-draw { transform-origin: left; animation: tp-draw 1.4s cubic-bezier(0.22,1,0.36,1) 0.3s both; }
        .tp-bar { width: 110px; animation: tp-bar 1s cubic-bezier(0.22,1,0.36,1) 0.4s both; }
        .tp-ping { animation: tp-ping 1.6s cubic-bezier(0,0,0.2,1) infinite; }
        .tp-pulse { animation: tp-pulse 2.6s ease-out infinite; }
        .tp-marquee { animation: tp-marquee 26s linear infinite; }
        .tp-border { background: linear-gradient(90deg, #2563eb, #db2777, #e11d48, #2563eb); background-size: 200% 200%; animation: tp-border 5s linear infinite; }
        .tp-glow-ring { background: linear-gradient(135deg, #fde68a, #fb7185, #60a5fa); background-size: 200% 200%; animation: tp-border 6s linear infinite, tp-glow 4s ease-in-out infinite; }
        .tp-shine::after { content: ""; position: absolute; inset: 0; background: linear-gradient(110deg, transparent 35%, rgba(255,255,255,0.25) 50%, transparent 65%); background-size: 200% 100%; animation: tp-shine 3.5s linear infinite; pointer-events: none; }
        .tp-gradient-text { background: linear-gradient(90deg, #2563eb, #7c3aed, #db2777, #e11d48, #2563eb); background-size: 250% 100%; -webkit-background-clip: text; background-clip: text; color: transparent; animation: tp-gradient-text 6s linear infinite; }
        .tp-card-bg { background: linear-gradient(120deg, #ffffff, #eff6ff, #fdf2f8, #fff1f2, #ffffff); background-size: 300% 300%; animation: tp-card-shift 12s ease-in-out infinite; }
        .tp-card-dark { background: linear-gradient(120deg, rgba(255,255,255,0.16), rgba(255,255,255,0.06), rgba(255,255,255,0.16)); background-size: 300% 300%; animation: tp-card-shift 10s ease-in-out infinite; }
        .tp-card-bg::after { content: ""; position: absolute; inset: 0; background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%); transform: translateX(-120%); pointer-events: none; }
        .tp-card-bg:hover::after { animation: tp-sheen-sweep 1.2s ease-in-out; }
        @media (prefers-reduced-motion: reduce) {
          .tp-flow, .tp-grid, .tp-blob, .tp-float, .tp-rise, .tp-stat, .tp-draw, .tp-bar, .tp-ping, .tp-pulse,
          .tp-marquee, .tp-border, .tp-glow-ring, .tp-shine::after, .tp-gradient-text, .tp-card-bg, .tp-card-dark { animation: none !important; }
        }
      `}</style>
    </main>
  );
}