"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  Clock,
  ExternalLink,
  Headphones,
  Play,
  Quote,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { reviews, videoReviews, recentWork, workProcess, aboutGallery, type Tone } from "@/data/showcase";

const BLUE_PINK: Tone = { from: "#2563eb", to: "#db2777" };

const SH_CSS = `
@keyframes sh-flow { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
@keyframes sh-rise { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
@keyframes sh-blob { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-30px) scale(1.12); } }
@keyframes sh-border { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
@keyframes sh-zoom { 0%,100% { transform: scale(1); } 50% { transform: scale(1.06); } }
@keyframes sh-shine { 0% { transform: translateX(-120%); } 100% { transform: translateX(120%); } }
@keyframes sh-bar { from { width: 0; } }
.sh-flow { background: linear-gradient(120deg, #2563eb, #7c3aed, #db2777, #e11d48, #2563eb); background-size: 300% 300%; animation: sh-flow 14s ease-in-out infinite; }
.sh-blob { animation: sh-blob 16s ease-in-out infinite; }
.sh-rise { animation: sh-rise 0.8s cubic-bezier(0.22,1,0.36,1) both; }
.sh-border { background: linear-gradient(90deg, #2563eb, #db2777, #e11d48, #7c3aed, #2563eb); background-size: 200% 200%; animation: sh-border 5s linear infinite; }
.sh-zoom { animation: sh-zoom 14s ease-in-out infinite; }
.sh-card { background: linear-gradient(120deg, #ffffff, #eff6ff, #fdf2f8, #ffffff); background-size: 300% 300%; animation: sh-flow 12s ease-in-out infinite; }
.sh-sheen { position: relative; }
.sh-sheen::after { content: ""; position: absolute; inset: 0; background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%); transform: translateX(-120%); pointer-events: none; }
.sh-sheen:hover::after { animation: sh-shine 1.2s ease-in-out; }
.sh-text { background: linear-gradient(90deg, #2563eb, #7c3aed, #db2777, #e11d48, #2563eb); background-size: 250% 100%; -webkit-background-clip: text; background-clip: text; color: transparent; animation: sh-flow 6s linear infinite; }
.sh-bar-fill { animation: sh-bar 1.2s cubic-bezier(0.22,1,0.36,1) both; }
@media (prefers-reduced-motion: reduce) { .sh-flow, .sh-blob, .sh-rise, .sh-border, .sh-zoom, .sh-card, .sh-text { animation: none !important; } }
`;

function Css() {
  return <style>{SH_CSS}</style>;
}

// Photo with a gradient fallback when the file is missing
function Photo({ src, alt, tone, className = "" }: { src: string; alt: string; tone: Tone; className?: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: `linear-gradient(135deg, ${tone.from}, ${tone.to})` }}>
      {!failed ? (
        <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className="sh-zoom h-full w-full object-cover" />
      ) : (
        <div className="flex h-full w-full items-center justify-center p-6 text-center font-[var(--font-heading)] text-xl font-extrabold text-white">
          {alt}
        </div>
      )}
    </div>
  );
}

// Round client photo with initials fallback
function Avatar({ src, name, tone }: { src: string; name: string; tone: Tone }) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <span
      className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl text-lg font-extrabold text-white shadow-lg ring-4 ring-white"
      style={{ background: `linear-gradient(135deg, ${tone.from}, ${tone.to})` }}
    >
      {!failed ? (
        <img src={src} alt={name} onError={() => setFailed(true)} className="h-full w-full object-cover" />
      ) : (
        initials
      )}
    </span>
  );
}

function Head({ eyebrow, title, accent, lead }: { eyebrow: string; title: string; accent: string; lead?: string }) {
  return (
    <div className="text-center">
      <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-blue-600">{eyebrow}</p>
      <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-extrabold text-slate-900 md:text-5xl">
        {title} <span className="sh-text">{accent}</span>
      </h2>
      {lead && <p className="mx-auto mt-4 max-w-3xl text-base font-bold text-slate-700 md:text-lg">{lead}</p>}
      <span className="mx-auto mt-6 block h-1.5 w-28 rounded-full" style={{ background: `linear-gradient(90deg, ${BLUE_PINK.from}, ${BLUE_PINK.to})` }} />
    </div>
  );
}

function Hero({ crumb, eyebrow, title, lead, children }: { crumb: string; eyebrow: string; title: string; lead: string; children?: ReactNode }) {
  return (
    <section className="sh-flow relative w-full overflow-hidden px-6 pb-28 pt-12 text-white md:px-12 xl:px-20 2xl:px-28">
      <div className="sh-blob pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-full bg-white/25 blur-3xl" />
      <div className="sh-blob pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-amber-200/30 blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <nav className="sh-rise flex flex-wrap items-center gap-2 text-xs font-bold text-white/85">
          <Link href="/" className="hover:text-white">Home</Link>
          <ChevronRight size={12} />
          <span>Company</span>
          <ChevronRight size={12} />
          <span className="text-white">{crumb}</span>
        </nav>
        <p className="sh-rise mt-8 text-xs font-extrabold uppercase tracking-[0.3em] text-white/85">{eyebrow}</p>
        <h1 className="sh-rise mt-3 font-[var(--font-heading)] text-4xl font-extrabold leading-tight drop-shadow-lg md:text-6xl">{title}</h1>
        <p className="sh-rise mt-5 max-w-2xl text-lg font-semibold text-white/90">{lead}</p>
        {children && <div className="sh-rise mt-8">{children}</div>}
      </div>
    </section>
  );
}

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} className={i < n ? "fill-amber-400 text-amber-400" : "text-slate-300"} />
      ))}
    </div>
  );
}

function Cta({ title, text }: { title: string; text: string }) {
  return (
    <section className="sh-flow relative w-full overflow-hidden px-6 py-24 text-center text-white md:px-12 xl:px-20 2xl:px-28">
      <Reveal>
        <div className="relative mx-auto max-w-3xl">
          <span className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-xs font-extrabold uppercase tracking-widest backdrop-blur">
            <Rocket size={14} /> Start your project
          </span>
          <h2 className="font-[var(--font-heading)] text-3xl font-extrabold md:text-5xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/90">{text}</p>
          <Link href="/contact" className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 font-extrabold text-slate-900 shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl">
            Get A Free Consultation
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

function Boxes({ items }: { items: { icon: LucideIcon; title: string; text: string; tone: Tone }[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {items.map((b, i) => {
        const Icon = b.icon;
        return (
          <Reveal key={b.title} delay={i * 0.08}>
            <div className="sh-card sh-sheen group relative h-full overflow-hidden rounded-[1.75rem] p-6 shadow-md ring-1 ring-slate-200 transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <span
                className="flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg transition duration-500 group-hover:rotate-6 group-hover:scale-110"
                style={{ background: `linear-gradient(135deg, ${b.tone.from}, ${b.tone.to})` }}
              >
                <Icon size={22} />
              </span>
              <h3 className="mt-5 font-[var(--font-heading)] text-lg font-extrabold text-slate-900">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{b.text}</p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

const VIDEO_BOXES = [
  { icon: Play, title: "Real voices", text: "Clients speak in their own words about working with Zenith.", tone: { from: "#2563eb", to: "#7c3aed" } },
  { icon: TrendingUp, title: "Specific results", text: "Reviews focus on what changed, not vague praise.", tone: { from: "#db2777", to: "#e11d48" } },
  { icon: ShieldCheck, title: "Honest feedback", text: "Reviews are shared as the client gave them, so they help buyers decide.", tone: { from: "#16a34a", to: "#0891b2" } },
  { icon: Headphones, title: "Talk to a client", text: "Ask us about a reference call during your consultation.", tone: { from: "#7c3aed", to: "#db2777" } },
];

const CLIENT_BOXES = [
  { icon: CheckCircle2, title: "Listened to", text: "Clients feel their goals shape the plan, not a template.", tone: { from: "#2563eb", to: "#7c3aed" } },
  { icon: Clock, title: "Plan kept", text: "Timelines and scope are agreed and then honoured.", tone: { from: "#db2777", to: "#e11d48" } },
  { icon: BarChart3, title: "Reports that explain", text: "Reports show what happened and what to do next.", tone: { from: "#16a34a", to: "#0891b2" } },
  { icon: Sparkles, title: "Lasting relationships", text: "Many clients return for new projects and new goals.", tone: { from: "#ea580c", to: "#e11d48" } },
];

// ---------- Home page and client section ----------
export function ClientReviews({ limit }: { limit?: number }) {
  const list = limit ? reviews.slice(0, limit) : reviews;
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-blue-50 via-pink-50 to-rose-50 px-6 py-24 md:px-12 xl:px-20 2xl:px-28">
      <Css />
      <div className="sh-blob pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <Head
            eyebrow="What our clients say"
            title="Trusted by"
            accent="real businesses"
            lead="Honest feedback from the business owners and directors we have worked with."
          />
        </Reveal>

        {/* Summary strip */}
        <Reveal delay={0.1}>
          <div className="mt-12 grid gap-4 rounded-[2rem] bg-white/80 p-6 shadow-lg ring-1 ring-slate-200 backdrop-blur sm:grid-cols-3">
            {[
              { label: "Average rating", value: "5.0" },
              { label: "Featured reviews", value: String(reviews.length) },
              { label: "Countries represented", value: "4" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-[var(--font-heading)] text-3xl font-extrabold sh-text">{s.value}</p>
                <p className="mt-1 text-xs font-extrabold uppercase tracking-widest text-slate-600">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {list.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <div className="sh-card sh-sheen group relative flex h-full flex-col overflow-hidden rounded-[2rem] p-7 shadow-md ring-1 ring-slate-200 transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <Quote className="absolute right-6 top-6 h-12 w-12 text-blue-600/10" />
                <Stars n={r.rating} />
                <p className="mt-5 flex-1 text-base leading-relaxed text-slate-700">&ldquo;{r.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-4 border-t border-slate-200 pt-5">
                  <Avatar src={r.image} name={r.name} tone={r.tone} />
                  <div>
                    <p className="font-extrabold text-slate-900">{r.name}</p>
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-700">{r.role}</p>
                    <p className="text-xs font-semibold text-slate-500">{r.company}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center">
            {limit && (
              <Link
                href="/menu/company/what-our-clients-say"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-rose-500 px-6 py-3 text-sm font-extrabold text-white shadow-lg transition hover:-translate-y-0.5"
              >
                Read all client reviews <ArrowRight size={16} />
              </Link>
            )}
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-blue-600 px-6 py-2.5 text-sm font-extrabold text-blue-700 transition hover:bg-blue-600 hover:text-white"
            >
              View all Google reviews <ExternalLink size={14} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- Video Client Reviews page ----------
export function VideoReviewsPage() {
  return (
    <main className="relative w-full overflow-hidden bg-gradient-to-br from-blue-50 via-pink-50 to-rose-50">
      <Css />
      <Hero
        crumb="Video Client Reviews"
        eyebrow="Video client reviews"
        title="Hear it from our clients"
        lead="Watch real clients share their experience of working with Zenith, in their own words."
      />

      <section className="relative mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <Head eyebrow="Watch" title="Two client" accent="video reviews" lead="Each video is followed by a short summary, so you know what to look for before you press play." />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {videoReviews.map((v, i) => (
            <Reveal key={v.youtubeId} delay={i * 0.1}>
              <article className="sh-card sh-sheen group relative flex h-full flex-col overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-slate-200 transition duration-500 hover:-translate-y-1">
                <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-gradient-to-r from-blue-600 to-rose-500 px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-white">
                      {v.role}
                    </span>
                    <Play size={18} className="text-pink-600" />
                  </div>
                  <h3 className="mt-4 font-[var(--font-heading)] text-2xl font-extrabold text-slate-900">{v.title}</h3>
                  <p className="mt-1 text-sm font-bold text-blue-700">{v.name}</p>
                  {v.summary.map((p) => (
                    <p key={p} className="mt-4 text-base leading-relaxed text-slate-700">
                      {p}
                    </p>
                  ))}
                  <ul className="mt-6 space-y-3">
                    {v.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 rounded-2xl bg-white/85 px-4 py-3 font-semibold text-slate-800 shadow-sm transition duration-300 hover:translate-x-2 hover:shadow-md">
                        <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-blue-600" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 pb-24">
        <Reveal>
          <Head eyebrow="What to look for" title="Why these" accent="reviews matter" />
        </Reveal>
        <div className="mt-14">
          <Boxes items={VIDEO_BOXES} />
        </div>
      </section>

      <ClientReviews limit={3} />
      <Cta title="Want a reference call with a past client?" text="Tell us your goals and we will arrange the right conversation during your free consultation." />
    </main>
  );
}

// ---------- What Our Clients Say page ----------
export function ClientsPage() {
  return (
    <main className="relative w-full overflow-hidden bg-gradient-to-br from-blue-50 via-pink-50 to-rose-50">
      <Css />
      <Hero
        crumb="What Our Clients Say"
        eyebrow="Client feedback"
        title="What our clients say"
        lead="Written feedback from businesses that trusted us with their growth, in their own words."
      />
      <ClientReviews />
      <section className="relative mx-auto max-w-6xl px-6 pb-24">
        <Reveal>
          <Head eyebrow="Why clients stay" title="What they tell us" accent="again and again" />
        </Reveal>
        <div className="mt-14">
          <Boxes items={CLIENT_BOXES} />
        </div>
      </section>
      <Cta title="Ready to be our next success story?" text="Share your goals and get a clear plan and a free quote within one business day." />
    </main>
  );
}

// ---------- Recent Work / Case Studies page ----------
export function RecentWorkPage() {
  const [featured, ...others] = recentWork;

  return (
    <main className="relative w-full overflow-hidden bg-gradient-to-br from-blue-50 via-pink-50 to-rose-50">
      <Css />
      <Hero
        crumb="Recent Work / Case Studies"
        eyebrow="Our portfolio"
        title="Recent work and case studies"
        lead="Real websites we have designed and built, with the goal and approach behind each one."
      >
        <div className="grid max-w-2xl grid-cols-3 gap-3">
          {[
            { v: String(recentWork.length), l: "Featured projects" },
            { v: "Web", l: "Design and build" },
            { v: "SEO", l: "Built to be found" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl bg-white/15 px-4 py-3 text-center ring-1 ring-white/30 backdrop-blur">
              <p className="font-[var(--font-heading)] text-2xl font-extrabold">{s.v}</p>
              <p className="text-xs font-bold text-white/85">{s.l}</p>
            </div>
          ))}
        </div>
      </Hero>

      {/* Featured project */}
      {featured && (
        <section className="relative mx-auto max-w-6xl px-6 py-20">
          <Reveal>
            <Head eyebrow="Featured project" title="A closer look at" accent={featured.title} lead={featured.summary} />
          </Reveal>
          <Reveal delay={0.1}>
            <article className="sh-card mt-14 grid overflow-hidden rounded-[2.25rem] shadow-2xl ring-1 ring-slate-200 lg:grid-cols-5">
              <Photo src={featured.image} alt={featured.title} tone={featured.tone} className="aspect-[4/3] w-full lg:col-span-3 lg:aspect-auto lg:min-h-[420px]" />
              <div className="flex flex-col p-8 lg:col-span-2 md:p-10">
                <span
                  className="w-fit rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-white"
                  style={{ background: `linear-gradient(135deg, ${featured.tone.from}, ${featured.tone.to})` }}
                >
                  {featured.category}
                </span>
                <h3 className="mt-5 font-[var(--font-heading)] text-3xl font-extrabold text-slate-900">{featured.title}</h3>
                <ul className="mt-6 space-y-3">
                  {featured.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 rounded-2xl bg-white/85 px-4 py-3 font-semibold text-slate-800 shadow-sm">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-blue-600" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {featured.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-700 ring-1 ring-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
                {featured.url && (
                  <a
                    href={featured.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-rose-500 px-6 py-3 text-sm font-extrabold text-white shadow-lg transition hover:-translate-y-0.5"
                  >
                    Visit website <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        </section>
      )}

      {/* Other projects */}
      {others.length > 0 && (
        <section className="relative mx-auto max-w-7xl px-6 pb-20">
          <Reveal>
            <Head eyebrow="More projects" title="Other" accent="recent work" lead="Each project shows the starting point, the approach we took and the tools behind it." />
          </Reveal>
          <div className="mt-14 grid gap-7 md:grid-cols-2">
            {others.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.08}>
                <article className="sh-card sh-sheen group relative flex h-full flex-col overflow-hidden rounded-[2rem] shadow-md ring-1 ring-slate-200 transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <Photo src={w.image} alt={w.title} tone={w.tone} className="aspect-[16/10] w-full" />
                  <div className="flex flex-1 flex-col p-7">
                    <span
                      className="w-fit rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-white"
                      style={{ background: `linear-gradient(135deg, ${w.tone.from}, ${w.tone.to})` }}
                    >
                      {w.category}
                    </span>
                    <h3 className="mt-4 font-[var(--font-heading)] text-2xl font-extrabold text-slate-900">{w.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-700">{w.summary}</p>
                    <ul className="mt-5 space-y-2">
                      {w.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                          <CheckCircle2 size={15} className="shrink-0 text-blue-600" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {w.tags.map((t) => (
                        <span key={t} className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-700 ring-1 ring-slate-200">
                          {t}
                        </span>
                      ))}
                    </div>
                    {w.url && (
                      <a href={w.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-extrabold text-blue-700 transition group-hover:translate-x-1">
                        Visit website <ArrowRight size={16} />
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* How we deliver */}
      <section className="sh-flow relative w-full overflow-hidden px-6 py-24 text-white md:px-12 xl:px-20 2xl:px-28">
        <Reveal>
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-white/85">How we deliver</p>
              <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-extrabold md:text-5xl">Every project follows four steps</h2>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {workProcess.map((p, i) => (
                <div key={p.title} className="group rounded-[1.75rem] bg-white/15 p-6 ring-1 ring-white/25 backdrop-blur transition duration-500 hover:-translate-y-2 hover:bg-white/25">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white font-extrabold text-blue-700 shadow-lg">{i + 1}</span>
                  <h3 className="mt-5 font-[var(--font-heading)] text-lg font-extrabold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/90">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <Cta title="Want results like these?" text="Tell us about your business and we will suggest the right project and a clear plan within one business day." />
    </main>
  );
}

// ---------- About Us additions ----------
export function AboutWelcome() {
  return (
    <section className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
      <Css />
      <Reveal>
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-blue-600">Welcome</p>
          <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-extrabold text-slate-900 md:text-5xl">
            Welcome to the Best <span className="sh-text">360 Degree Digital Marketing Company</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-700">
            Zenith Digital Agency, accessible at zenithdigitalagency.com, is a comprehensive digital marketing firm established in 2005. With over 15 years of experience, the agency offers a wide array of services aimed at enhancing clients&apos; online presence and business growth.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">
            We emphasise a client-centric approach, offering 24/7 customer support and personalised strategies tailored to each business objective. Our commitment to transparency is shown through regular reporting and open communication channels.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["24/7 support", "Personalised strategy", "Regular reporting", "Open communication"].map((c) => (
              <span key={c} className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-800 shadow-sm ring-1 ring-slate-200">
                <CheckCircle2 size={16} className="text-blue-600" /> {c}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.15}>
        <div className="sh-card relative overflow-hidden rounded-[2.25rem] p-3 shadow-2xl ring-1 ring-slate-200">
          <Photo src="https://picsum.photos/seed/zenith-welcome/900/1100" alt="Zenith team at work" tone={BLUE_PINK} className="aspect-[4/5] w-full rounded-[1.75rem]" />
        </div>
      </Reveal>
    </section>
  );
}

export function AboutGallery() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-24">
      <Css />
      <Reveal>
        <Head eyebrow="Life at Zenith" title="Our" accent="people and work" lead="A glimpse of the team and the spaces where our ideas take shape." />
      </Reveal>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {aboutGallery.map((g, i) => (
          <Reveal key={g.src} delay={i * 0.08}>
            <figure className={`sh-card group relative overflow-hidden rounded-[1.75rem] shadow-lg ring-1 ring-white transition duration-500 hover:-translate-y-2 hover:shadow-2xl ${i % 2 ? "lg:mt-10" : ""}`}>
              <Photo src={g.src} alt={g.caption} tone={g.tone} className="aspect-[4/5] w-full" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/85 to-transparent p-5 text-sm font-extrabold text-white">
                {g.caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}