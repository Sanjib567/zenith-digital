"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Globe,
  Layers,
  Rocket,
  Search,
  Sparkles,
} from "lucide-react";
import { projects } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

type Tone = { from: string; to: string };

// Industry groups for the filter bar. Edit any name that doesn't match the business.
const industryOf: Record<string, string> = {
  "L & P Global Security": "Security",
  "Better Filter": "Industrial",
  "Applebee Montessori Academy": "Education",
  "Rcub Eventure": "Events",
  "Orthopaedic Supplies": "Healthcare",
  "See4zee": "Business Services",
  "100 Cotton": "Ecommerce",
  "Houghton Dental": "Healthcare",
  "Piajeh Boutique": "Ecommerce",
  "The Occupation of Motherhood": "Lifestyle",
  "Nurses On the Move": "Healthcare",
  "Kin Therapy & Fitness Ltd": "Healthcare",
  "Shifters Midlands": "Business Services",
  "The Trek Nepal": "Travel",
  "QGPU Chemicals": "Industrial",
  Nomcare: "Healthcare",
  "Heavy Equipments": "Industrial",
};

const items = projects.map((p) => ({
  title: p.name,
  image: p.image,
  url: p.url,
  category: industryOf[p.name] ?? p.service,
}));

const TONES: Tone[] = [
  { from: "#2563eb", to: "#7c3aed" },
  { from: "#db2777", to: "#e11d48" },
  { from: "#16a34a", to: "#0891b2" },
  { from: "#7c3aed", to: "#db2777" },
  { from: "#ea580c", to: "#e11d48" },
  { from: "#0891b2", to: "#2563eb" },
];

const WORK_PROCESS = [
  { title: "Understand the goal", text: "We start with the enquiries, sales or bookings you want, not just how the site looks." },
  { title: "Plan the structure", text: "Pages, messages and calls to action are planned so visitors know what to do next." },
  { title: "Build and test", text: "Every page is built for speed and tested on phones, tablets and desktops." },
  { title: "Measure and improve", text: "We track results and refine the parts that matter most to your business." },
];

function hostOf(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

function Photo({ src, alt, tone, className = "" }: { src: string; alt: string; tone: Tone; className?: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: `linear-gradient(135deg, ${tone.from}, ${tone.to})` }}>
      {src && !failed ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center p-6 text-center font-[var(--font-heading)] text-xl font-extrabold text-white">
          {alt}
        </div>
      )}
    </div>
  );
}

export function RecentWorkPage() {
  const [active, setActive] = useState("All");

  const categories = useMemo(() => ["All", ...Array.from(new Set(items.map((i) => i.category)))], []);
  const filtered = useMemo(() => (active === "All" ? items : items.filter((i) => i.category === active)), [active]);
  const liveCount = items.filter((i) => i.url).length;

  return (
    <main className="rw-root relative w-full overflow-hidden bg-gradient-to-br from-blue-50 via-pink-50 to-rose-50">
      {/* HERO */}
      <section className="rw-flow relative w-full overflow-hidden px-6 pb-28 pt-12 text-white md:px-12 xl:px-20 2xl:px-28">
        <div className="rw-blob pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-full bg-white/25 blur-3xl" />
        <div className="rw-blob rw-blob-b pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="rw-grid pointer-events-none absolute inset-0 opacity-20" />

        <div className="relative mx-auto max-w-6xl">
          <nav className="rw-rise flex flex-wrap items-center gap-2 text-xs font-bold text-white/85">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight size={12} />
            <span>Company</span>
            <ChevronRight size={12} />
            <span className="text-white">Recent Work / Case Studies</span>
          </nav>

          <p className="rw-rise mt-8 text-xs font-extrabold uppercase tracking-[0.3em] text-white/85">Our portfolio</p>
          <h1 className="rw-rise mt-3 font-[var(--font-heading)] text-4xl font-extrabold leading-tight drop-shadow-lg md:text-6xl">
            Recent work and case studies
          </h1>
          <p className="rw-rise mt-5 max-w-2xl text-lg font-semibold text-white/90">
            Real websites we have designed and built for businesses in different industries, with the goal and approach behind each one.
          </p>

          <div className="rw-rise mt-10 grid max-w-2xl grid-cols-3 gap-3">
            {[
              { v: String(items.length), l: "Projects" },
              { v: String(liveCount), l: "Live websites" },
              { v: String(categories.length - 1), l: "Industries" },
            ].map((s, i) => (
              <div key={s.l} className="rw-stat rounded-2xl bg-white/15 px-4 py-4 text-center ring-1 ring-white/30 backdrop-blur" style={{ animationDelay: `${i * 120}ms` }}>
                <p className="font-[var(--font-heading)] text-3xl font-extrabold">{s.v}</p>
                <p className="mt-1 text-xs font-bold text-white/85">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTERS + GRID */}
      <section className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-blue-600">Projects</p>
          <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-extrabold text-slate-900 md:text-5xl">
            Selected <span className="rw-text">websites and campaigns</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base font-bold text-slate-700 md:text-lg">
            Filter by industry to see the projects most like yours.
          </p>
          <span className="mx-auto mt-6 block h-1.5 w-28 rounded-full bg-gradient-to-r from-blue-600 via-pink-500 to-rose-500" />
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={`rounded-full px-5 py-2.5 text-sm font-extrabold transition duration-300 ${
                active === c
                  ? "bg-gradient-to-r from-blue-600 to-rose-500 text-white shadow-lg"
                  : "bg-white text-slate-700 ring-1 ring-slate-200 hover:-translate-y-0.5 hover:shadow-md"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((p, i) => {
            const tone = TONES[i % TONES.length];
            const host = hostOf(p.url);
            return (
              <article
                key={`${p.title}-${i}`}
                className="rw-card group relative flex h-full flex-col overflow-hidden rounded-[2rem] shadow-md ring-1 ring-slate-200 transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Photo src={p.image} alt={p.title} tone={tone} className="h-full w-full" />
                  <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 font-[var(--font-heading)] text-sm font-extrabold text-slate-900 shadow-lg">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center bg-slate-900/0 opacity-0 transition duration-500 group-hover:bg-slate-900/50 group-hover:opacity-100"
                      aria-label={`Visit ${p.title}`}
                    >
                      <span className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-extrabold text-slate-900 shadow-xl">
                        View website <ExternalLink size={15} />
                      </span>
                    </a>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <span
                    className="w-fit rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-white"
                    style={{ background: `linear-gradient(135deg, ${tone.from}, ${tone.to})` }}
                  >
                    {p.category}
                  </span>
                  <h3 className="mt-4 font-[var(--font-heading)] text-2xl font-extrabold text-slate-900">{p.title}</h3>
                  {host && (
                    <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-slate-500">
                      <Globe size={14} /> {host}
                    </p>
                  )}

                  <ul className="mt-5 space-y-2">
                    {["Designed around the goal", "Built to load quickly", "Clear calls to action"].map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                        <CheckCircle2 size={15} className="shrink-0 text-blue-600" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6">
                    {p.url ? (
                      <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-extrabold text-blue-700 transition group-hover:translate-x-1">
                        Visit website <ArrowRight size={16} />
                      </a>
                    ) : (
                      <span className="text-sm font-bold text-slate-500">Case study available on request</span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="mt-14 text-center text-base font-bold text-slate-700">No projects in this industry yet.</p>
        )}

        <div className="mt-14 text-center">
          <Link href="/portfolio" className="inline-flex items-center gap-2 rounded-full border-2 border-blue-600 px-7 py-3 text-sm font-extrabold text-blue-700 transition hover:bg-blue-600 hover:text-white">
            Open the full portfolio <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* LIVE WEBSITE DIRECTORY */}
      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-blue-600">Live websites</p>
            <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-extrabold text-slate-900 md:text-5xl">
              All <span className="rw-text">{projects.length} projects</span> at a glance
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base font-bold text-slate-700 md:text-lg">
              Every live website we have built, in one list. Select any name to open the site.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={`dir-${p.name}-${i}`} delay={(i % 6) * 0.04}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rw-card group flex items-center gap-4 rounded-2xl p-4 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-extrabold text-white shadow-md"
                  style={{ background: `linear-gradient(135deg, ${TONES[i % TONES.length].from}, ${TONES[i % TONES.length].to})` }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-[var(--font-heading)] text-base font-extrabold text-slate-900">{p.name}</p>
                  <p className="truncate text-xs font-semibold text-slate-500">{hostOf(p.url) || p.url}</p>
                </div>
                <ExternalLink size={16} className="shrink-0 text-blue-600 transition group-hover:translate-x-1" />
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* HOW WE DELIVER */}
      <section className="rw-flow relative w-full overflow-hidden px-6 py-24 text-white md:px-12 xl:px-20 2xl:px-28">
        <Reveal>
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-white/85">How we deliver</p>
              <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-extrabold md:text-5xl">Every project follows four steps</h2>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {WORK_PROCESS.map((p, i) => (
                <div key={p.title} className="group rounded-[1.75rem] bg-white/15 p-6 ring-1 ring-white/25 backdrop-blur transition duration-500 hover:-translate-y-2 hover:bg-white/25">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white font-extrabold text-blue-700 shadow-lg transition duration-500 group-hover:rotate-6">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 font-[var(--font-heading)] text-lg font-extrabold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/90">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* WHAT YOU GET */}
      <section className="relative mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-blue-600">What you get</p>
            <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-extrabold text-slate-900 md:text-5xl">
              Built to <span className="rw-text">perform</span>
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            { icon: Layers, title: "Structured pages", text: "Each page has a clear job, so visitors and search engines understand the business quickly." },
            { icon: Search, title: "Found by search", text: "Titles, headings and local details are set up so the right people can find the business." },
            { icon: Sparkles, title: "Modern design", text: "Clean layouts, fast loading and smooth movement that works on every device." },
          ].map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal key={b.title} delay={i * 0.1}>
                <div className="rw-card group h-full rounded-[1.75rem] p-7 shadow-md ring-1 ring-slate-200 transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-rose-500 text-white shadow-lg transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 font-[var(--font-heading)] text-xl font-extrabold text-slate-900">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">{b.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="rw-flow relative w-full overflow-hidden px-6 py-24 text-center text-white md:px-12 xl:px-20 2xl:px-28">
        <Reveal>
          <div className="relative mx-auto max-w-3xl">
            <span className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-xs font-extrabold uppercase tracking-widest backdrop-blur">
              <Rocket size={14} /> Start your project
            </span>
            <h2 className="font-[var(--font-heading)] text-3xl font-extrabold md:text-5xl">Want results like these?</h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/90">
              Tell us about your business and we will suggest the right project and a clear plan within one business day.
            </p>
            <Link href="/contact" className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 font-extrabold text-slate-900 shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl">
              Get A Free Consultation
            </Link>
          </div>
        </Reveal>
      </section>

      <style>{`
        @keyframes rw-flow { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes rw-rise { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes rw-blob { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-30px) scale(1.12); } }
        @keyframes rw-grid { from { background-position: 0 0; } to { background-position: 40px 40px; } }
        @keyframes rw-stat { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        .rw-flow { background: linear-gradient(120deg, #2563eb, #7c3aed, #db2777, #e11d48, #2563eb); background-size: 300% 300%; animation: rw-flow 14s ease-in-out infinite; }
        .rw-blob { animation: rw-blob 16s ease-in-out infinite; }
        .rw-blob-b { animation-duration: 20s; animation-direction: reverse; }
        .rw-grid { background-image: linear-gradient(to right, rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.14) 1px, transparent 1px); background-size: 40px 40px; animation: rw-grid 14s linear infinite; }
        .rw-rise { animation: rw-rise 0.8s cubic-bezier(0.22,1,0.36,1) both; }
        .rw-stat { animation: rw-stat 0.7s cubic-bezier(0.22,1,0.36,1) both; }
        .rw-text { background: linear-gradient(90deg, #2563eb, #7c3aed, #db2777, #e11d48, #2563eb); background-size: 250% 100%; -webkit-background-clip: text; background-clip: text; color: transparent; animation: rw-flow 6s linear infinite; }
        .rw-card { background: linear-gradient(120deg, #ffffff, #eff6ff, #fdf2f8, #ffffff); background-size: 300% 300%; animation: rw-flow 12s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .rw-flow, .rw-blob, .rw-grid, .rw-rise, .rw-stat, .rw-text, .rw-card { animation: none !important; }
        }
      `}</style>
    </main>
  );
}