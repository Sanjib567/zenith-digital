import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Calendar,
  Quote,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import BlogImage from "@/components/BlogImage";
import { blogPosts, findBlogPost } from "@/data/blog";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = findBlogPost(slug);
  return { title: post ? `${post.title} | Zenith Digital Agency` : "Blog | Zenith Digital Agency" };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = findBlogPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const heroGradient = `linear-gradient(120deg, ${post.tone.from}, #7c3aed, #db2777, ${post.tone.to})`;

  return (
    <main className="bp-page relative w-full overflow-hidden">
      {/* HERO */}
      <section className="relative w-full overflow-hidden px-6 pb-32 pt-12 text-white md:px-12 xl:px-20 2xl:px-28">
        <div className="bp-flow absolute inset-0" style={{ background: heroGradient, backgroundSize: "300% 300%" }} />
        <div className="bp-grid pointer-events-none absolute inset-0 opacity-25" />
        <div className="bp-blob pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-full bg-white/20 blur-3xl" />
        <div className="bp-blob bp-blob-b pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-amber-200/25 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <nav className="bp-rise flex flex-wrap items-center gap-3 text-sm font-bold text-white/85">
            <Link href="/" className="inline-flex items-center gap-2 hover:text-white">
              <ArrowLeft size={16} /> Back to home
            </Link>
            <span>/</span>
            <span className="text-white">Blog</span>
          </nav>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="bp-rise flex items-center gap-3" style={{ animationDelay: "80ms" }}>
                <span className="bp-pulse flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-blue shadow-xl">
                  <Sparkles size={20} />
                </span>
                <span className="rounded-full bg-white/20 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.25em] ring-1 ring-white/40 backdrop-blur">
                  {post.category}
                </span>
              </div>

              <h1
                className="bp-rise mt-6 font-[var(--font-heading)] text-4xl font-extrabold leading-tight drop-shadow-lg md:text-5xl"
                style={{ animationDelay: "160ms" }}
              >
                {post.title}
              </h1>

              <p className="bp-rise mt-5 text-lg font-semibold text-white/95" style={{ animationDelay: "240ms" }}>
                {post.excerpt}
              </p>

              <div className="bp-rise mt-7 flex flex-wrap items-center gap-3" style={{ animationDelay: "320ms" }}>
                <span className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">
                  <Calendar size={14} /> {post.date}
                </span>
                <span className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">
                  <Clock size={14} /> {post.readTime}
                </span>
                <span className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">
                  <CheckCircle2 size={14} /> Written by the Zenith team
                </span>
              </div>
            </div>

            <div className="bp-float relative">
              <div className="bp-glow absolute -inset-4 rounded-[2.75rem] blur-2xl" />
              <BlogImage
                src={post.image}
                alt={post.title}
                iconName={post.iconName}
                tone={post.tone}
                className="relative aspect-[4/3] w-full rounded-[2.25rem] shadow-2xl ring-4 ring-white/30"
                iconSize={72}
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP (overlaps hero) */}
      <section className="relative z-10 -mt-16 px-6 md:px-12 xl:px-20 2xl:px-28">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {post.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="bp-card group relative overflow-hidden rounded-3xl p-6 text-center shadow-xl ring-1 ring-white transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <p className="font-[var(--font-heading)] text-4xl font-extrabold text-brand-gradient">
                  <CountUp end={s.end} suffix={s.suffix} duration={1600 + i * 200} />
                </p>
                <p className="mt-2 text-sm font-bold text-brand-navy/75">{s.label}</p>
                <span
                  className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition duration-500 group-hover:scale-x-100"
                  style={{ background: `linear-gradient(90deg, ${post.tone.from}, ${post.tone.to})` }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TABLE OF CONTENTS */}
      <section className="relative mx-auto max-w-4xl px-6 pb-4 pt-16">
        <Reveal>
          <div className="bp-card rounded-3xl p-6 shadow-md ring-1 ring-slate-200 md:p-8">
            <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-brand-blue">In this article</p>
            <ol className="mt-5 grid gap-3 md:grid-cols-3">
              {post.sections.map((s, i) => (
                <li key={s.heading}>
                  <a
                    href={`#section-${i + 1}`}
                    className="group flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-3 text-sm font-bold text-brand-navy shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-extrabold text-white"
                      style={{ background: `linear-gradient(135deg, ${post.tone.from}, ${post.tone.to})` }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </section>

      {/* PULL QUOTE */}
      <section className="relative mx-auto max-w-4xl px-6 py-12">
        <Reveal>
          <div className="bp-border-wrap relative overflow-hidden rounded-[2rem] p-[1.5px] shadow-2xl">
            <div className="bp-border absolute inset-0" />
            <div className="relative rounded-[calc(2rem-1.5px)] bg-white p-8 md:p-12">
              <Quote className="absolute right-8 top-8 h-14 w-14 text-brand-blue/15" />
              <p className="relative font-[var(--font-heading)] text-2xl font-extrabold leading-snug text-brand-navy md:text-3xl">
                &ldquo;{post.quote}&rdquo;
              </p>
              <span
                className="mt-6 block h-1.5 w-24 rounded-full"
                style={{ background: `linear-gradient(90deg, ${post.tone.from}, ${post.tone.to})` }}
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ARTICLE SECTIONS */}
      <section className="relative mx-auto max-w-4xl space-y-12 px-6 py-12">
        {post.sections.map((section, si) => (
          <Reveal key={section.heading} delay={si * 0.05}>
            <article
              id={`section-${si + 1}`}
              className="bp-card group relative scroll-mt-28 overflow-hidden rounded-[2.25rem] p-8 shadow-xl ring-1 ring-white transition duration-500 hover:shadow-2xl md:p-12"
            >
              <span
                className="absolute left-0 top-0 h-full w-2 transition duration-500 group-hover:w-3"
                style={{ background: `linear-gradient(180deg, ${post.tone.from}, ${post.tone.to})` }}
              />
              <span className="bp-number pointer-events-none absolute -right-4 -top-8 select-none font-[var(--font-heading)] text-[9rem] font-extrabold leading-none text-brand-blue/[0.06]">
                {String(si + 1).padStart(2, "0")}
              </span>

              <p className="text-xs font-extrabold uppercase tracking-[0.3em]" style={{ color: post.tone.from }}>
                Section {String(si + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-3 font-[var(--font-heading)] text-2xl font-extrabold text-brand-navy md:text-4xl">
                {section.heading}
              </h2>
              <span
                className="bp-draw mt-5 block h-1 rounded-full"
                style={{ background: `linear-gradient(90deg, ${post.tone.from}, ${post.tone.to})` }}
              />

              <div className="mt-8 space-y-6">
                {section.paragraphs.map((p, pi) => (
                  <p key={pi} className="text-lg leading-relaxed text-brand-navy/85">
                    {p}
                  </p>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      {/* TAKEAWAYS */}
      <section className="relative mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <div className="bp-takeaways relative overflow-hidden rounded-[2.5rem] p-8 text-white shadow-2xl md:p-12">
            <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-white/85">Key takeaways</p>
            <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-extrabold md:text-4xl">
              What to remember
            </h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {post.takeaways.map((t, i) => (
                <li
                  key={t}
                  className="bp-rise flex items-start gap-3 rounded-2xl bg-white/15 px-5 py-4 text-base font-semibold backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/25"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-brand-blue">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="relative mx-auto max-w-4xl px-6 py-16">
        <Reveal>
          <p className="text-center text-xs font-extrabold uppercase tracking-[0.3em] text-brand-blue">Questions</p>
          <h2 className="mt-3 text-center font-[var(--font-heading)] text-3xl font-extrabold text-brand-navy md:text-4xl">
            Common questions about this topic
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4">
          {post.faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.08}>
              <details className="bp-card group rounded-3xl p-6 shadow-md ring-1 ring-slate-200 transition duration-300 open:shadow-xl">
                <summary className="flex cursor-pointer list-none items-center justify-between font-[var(--font-heading)] text-lg font-extrabold text-brand-navy">
                  <span className="flex items-center gap-3">
                    <HelpCircle size={20} className="text-brand-blue" />
                    {f.q}
                  </span>
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white transition duration-300 group-open:rotate-45"
                    style={{ background: `linear-gradient(135deg, ${post.tone.from}, ${post.tone.to})` }}
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-brand-navy/80">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      {/* RELATED */}
      <section className="relative mx-auto max-w-6xl px-6 pb-20 pt-8">
        <Reveal>
          <p className="text-center text-xs font-extrabold uppercase tracking-[0.3em] text-brand-blue">Keep reading</p>
          <h2 className="mt-3 text-center font-[var(--font-heading)] text-3xl font-extrabold text-brand-navy md:text-4xl">
            More from our blog
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {related.map((r, i) => (
            <Reveal key={r.slug} delay={i * 0.1}>
              <Link
                href={`/blog/${r.slug}`}
                className="bp-card group flex h-full flex-col overflow-hidden rounded-3xl shadow-md ring-1 ring-slate-200 transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <BlogImage
                  src={r.image}
                  alt={r.title}
                  iconName={r.iconName}
                  tone={r.tone}
                  className="aspect-[16/10] w-full"
                  iconSize={40}
                />
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-extrabold uppercase tracking-widest" style={{ color: r.tone.from }}>
                    {r.category}
                  </p>
                  <p className="mt-2 font-[var(--font-heading)] text-lg font-extrabold leading-snug text-brand-navy">
                    {r.title}
                  </p>
                  <span className="mt-auto flex items-center gap-1 pt-4 text-sm font-extrabold text-brand-blue">
                    Read article <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full overflow-hidden px-6 py-24 text-center text-white md:px-12">
        <div className="bp-band absolute inset-0" />
        <div className="bp-blob pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
        <Reveal>
          <div className="relative mx-auto max-w-3xl">
            <span className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-xs font-extrabold uppercase tracking-widest backdrop-blur">
              Start your project
            </span>
            <h2 className="font-[var(--font-heading)] text-3xl font-extrabold md:text-5xl">
              Want help applying this to your business?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
              Tell us your goals and get a clear plan and a free quote within one business day.
            </p>
            <Link
              href="/contact"
              className="bp-shine-btn mt-8 inline-flex items-center gap-2 rounded-full bg-white px-9 py-4 font-extrabold text-brand-navy shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
            >
              Get A Free Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>

      <style>{`
        @keyframes bp-rise { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes bp-flow { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes bp-blob { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-30px) scale(1.12); } }
        @keyframes bp-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes bp-glow { 0%,100% { opacity: 0.45; } 50% { opacity: 0.9; } }
        @keyframes bp-grid { from { background-position: 0 0; } to { background-position: 40px 40px; } }
        @keyframes bp-pulse { 0%,100% { box-shadow: 0 0 0 0 rgba(37,99,235,0.35); } 50% { box-shadow: 0 0 0 10px rgba(37,99,235,0); } }
        @keyframes bp-draw { from { width: 0; } to { width: 120px; } }
        @keyframes bp-card { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes bp-spin { to { transform: rotate(360deg); } }
        @keyframes bp-shine-btn { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        .bp-page { background: linear-gradient(135deg, #eff6ff, #fdf2f8, #fff1f2); }
        .bp-flow { background-size: 300% 300%; animation: bp-flow 14s ease-in-out infinite; }
        .bp-grid { background-image: linear-gradient(to right, rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.14) 1px, transparent 1px); background-size: 40px 40px; animation: bp-grid 14s linear infinite; }
        .bp-blob { animation: bp-blob 16s ease-in-out infinite; }
        .bp-blob-b { animation-duration: 20s; animation-direction: reverse; }
        .bp-float { animation: bp-float 6s ease-in-out infinite; }
        .bp-glow { background: linear-gradient(135deg, #fde68a, #fb7185, #60a5fa); animation: bp-glow 4s ease-in-out infinite; }
        .bp-pulse { animation: bp-pulse 2.6s ease-out infinite; }
        .bp-rise { animation: bp-rise 0.8s cubic-bezier(0.22,1,0.36,1) both; }
        .bp-draw { animation: bp-draw 1.2s cubic-bezier(0.22,1,0.36,1) 0.2s both; }
        .bp-card { background: linear-gradient(120deg, #ffffff, #eff6ff, #fdf2f8, #ffffff); background-size: 300% 300%; animation: bp-card 12s ease-in-out infinite; }
        .bp-border { background: linear-gradient(90deg, #2563eb, #db2777, #e11d48, #7c3aed, #2563eb); background-size: 300% 100%; animation: bp-flow 8s linear infinite; }
        .bp-takeaways { background: linear-gradient(120deg, #2563eb, #7c3aed, #db2777, #e11d48, #2563eb); background-size: 300% 300%; animation: bp-flow 14s ease-in-out infinite; }
        .bp-band { background: linear-gradient(120deg, #2563eb, #7c3aed, #db2777, #e11d48, #2563eb); background-size: 300% 300%; animation: bp-flow 14s ease-in-out infinite; }
        .bp-shine-btn { background-image: linear-gradient(110deg, #ffffff 40%, #fde68a 50%, #ffffff 60%); background-size: 200% 100%; animation: bp-shine-btn 4s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .bp-flow, .bp-grid, .bp-blob, .bp-float, .bp-glow, .bp-pulse, .bp-rise, .bp-draw, .bp-card, .bp-border, .bp-takeaways, .bp-band, .bp-shine-btn { animation: none !important; }
        }
      `}</style>
    </main>
  );
}