import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";
import BlogImage from "@/components/BlogImage";
import { blogPosts } from "@/data/blog";

export default function BlogSection() {
  return (
    <section className="relative w-full overflow-hidden px-6 py-20 md:px-12 xl:px-20 2xl:px-28">
      <div className="bs-bg pointer-events-none absolute inset-0" />
      <div className="bs-blob pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl" />
      <div className="bs-blob bs-blob-b pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-pink-300/30 blur-3xl" />

      <div className="relative">
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-brand-blue">Insights</p>
            <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-extrabold text-brand-navy md:text-5xl">
              From our <span className="bs-gradient-text">blog</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base font-bold text-brand-navy/80 md:text-lg">
              Practical guides on AI search, websites, automation and technology, written by the Zenith team.
            </p>
            <span className="bs-bar mx-auto mt-6 block h-1.5 rounded-full bg-gradient-to-r from-blue-600 via-pink-500 to-rose-500" />
          </div>
        </Reveal>

        <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-4">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.1}>
              <Link
                href={`/blog/${post.slug}`}
                className="bs-card group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-slate-200 transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <BlogImage
                  src={post.image}
                  alt={post.title}
                  iconName={post.iconName}
                  tone={post.tone}
                  className="aspect-[16/10] w-full"
                  iconSize={48}
                />

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-extrabold uppercase tracking-widest" style={{ color: post.tone.from }}>
                    {post.category}
                  </p>
                  <h3 className="mt-2 font-[var(--font-heading)] text-lg font-extrabold leading-snug text-brand-navy">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-navy/70">{post.excerpt}</p>

                  <div className="mt-5 flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} /> {post.readTime}
                    </span>
                    <span className="flex items-center gap-1 font-extrabold text-brand-blue">
                      Read <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="bs-band relative mt-16 overflow-hidden rounded-[2rem] px-8 py-10 text-white shadow-2xl md:px-14">
            <div className="bs-shine pointer-events-none absolute inset-0" />
            <div className="relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-white/85">Stay ahead</p>
                <p className="mt-2 font-[var(--font-heading)] text-2xl font-extrabold md:text-3xl">
                  Get practical digital growth ideas every month
                </p>
                <p className="mt-2 max-w-xl text-sm text-white/90">
                  Short, useful guides on AI search, websites and automation, with no jargon.
                </p>
              </div>
              <Link
                href="/contact"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-extrabold text-brand-navy shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl"
              >
                Talk to our team
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        @keyframes bs-bg { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes bs-blob { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-30px) scale(1.12); } }
        @keyframes bs-flow { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes bs-sheen { 0% { transform: translateX(-120%); } 100% { transform: translateX(120%); } }
        @keyframes bs-bar { from { width: 0; } to { width: 120px; } }
        @keyframes bs-gradient-text { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
        .bs-bg { background: linear-gradient(120deg, #eff6ff, #fdf2f8, #fff1f2, #eff6ff); background-size: 300% 300%; animation: bs-bg 16s ease-in-out infinite; }
        .bs-blob { animation: bs-blob 16s ease-in-out infinite; }
        .bs-blob-b { animation-duration: 20s; animation-direction: reverse; }
        .bs-bar { width: 120px; animation: bs-bar 1.1s cubic-bezier(0.22,1,0.36,1) 0.3s both; }
        .bs-gradient-text { background: linear-gradient(90deg, #2563eb, #7c3aed, #db2777, #e11d48, #2563eb); background-size: 250% 100%; -webkit-background-clip: text; background-clip: text; color: transparent; animation: bs-gradient-text 6s linear infinite; }
        .bs-band { background: linear-gradient(120deg, #2563eb, #7c3aed, #db2777, #e11d48, #2563eb); background-size: 300% 300%; animation: bs-flow 14s ease-in-out infinite; }
        .bs-shine { background: linear-gradient(110deg, transparent 35%, rgba(255,255,255,0.22) 50%, transparent 65%); transform: translateX(-120%); animation: bs-sheen 5s ease-in-out infinite; }
        .bs-card:hover { box-shadow: 0 25px 50px -12px rgba(37,99,235,0.25); }
        @media (prefers-reduced-motion: reduce) {
          .bs-bg, .bs-blob, .bs-bar, .bs-gradient-text, .bs-band, .bs-shine { animation: none !important; }
        }
      `}</style>
    </section>
  );
}