import Link from "next/link";
import Reveal from "@/components/Reveal";
import { CheckCircle2, Sparkles, Target, Zap, ShieldCheck } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    { title: "AI-Powered Search & Growth", desc: "Optimizing for Google, ChatGPT, and AI Search Engines (AEO/GEO)." },
    { title: "High-Performance Next.js Stack", desc: "Ultra-fast load times, flawless security, and modern UI engineering." },
    { title: "Full Funnel Execution", desc: "From custom Web & App Development to Meta/Google Ads lead generation." },
  ];

  return (
    <section className="relative overflow-hidden py-20 px-6">
      {/* Soft Glow Accents */}
      <div className="pointer-events-none absolute left-0 top-1/2 -z-10 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/2 -z-10 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-purple/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Heading & Feature Points (7 cols) */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-blue/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-blue">
                <Sparkles size={14} />
                About Zenith Digital
              </div>
              
              <h2 className="mt-4 font-[var(--font-heading)] text-3xl font-extrabold text-brand-navy sm:text-4xl lg:text-5xl leading-tight">
                Your Growth Partner in <br />
                <span className="text-brand-gradient">Web, AI & Digital Marketing</span>
              </h2>

              <p className="mt-5 text-base md:text-lg text-brand-navy/80 leading-relaxed max-w-2xl">
                Based in Odisha, India, Zenith Digital Agency crafts high-performance web platforms, AI search optimization (AEO/GEO), and data-driven marketing strategies that turn modern online presence into predictable customer growth.
              </p>
            </Reveal>

            {/* Value Props */}
            <div className="mt-8 space-y-4">
              {highlights.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.1}>
                  <div className="flex items-start gap-4 rounded-2xl bg-white/60 p-4 border border-brand-navy/5 shadow-sm backdrop-blur-sm transition hover:bg-white hover:shadow-md">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-md">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-navy text-base">{item.title}</h3>
                      <p className="mt-0.5 text-sm text-brand-navy/70">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <div className="mt-8 flex items-center gap-6">
                <Link
                  href="/company"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:scale-105"
                >
                  More About Our Agency →
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Visual Glassmorphism Highlight Card (5 cols) */}
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="relative rounded-3xl border border-white/80 bg-white/70 p-8 shadow-2xl backdrop-blur-xl ring-1 ring-brand-navy/5">
                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 flex items-center gap-2 rounded-2xl bg-brand-navy px-4 py-2 text-xs font-bold text-white shadow-xl">
                  <ShieldCheck size={16} className="text-brand-orange" />
                  Verified Agency
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                    <Target size={28} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Our Core Focus</p>
                    <p className="font-[var(--font-heading)] text-xl font-extrabold text-brand-navy">Scalable Results</p>
                  </div>
                </div>

                <hr className="my-6 border-slate-100" />

                {/* Key Metric Blocks */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-slate-50/80 p-4 border border-slate-100">
                    <p className="text-2xl font-black text-brand-blue">99%</p>
                    <p className="mt-1 text-xs font-medium text-slate-600">Client Retention</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50/80 p-4 border border-slate-100">
                    <p className="text-2xl font-black text-brand-purple">100+</p>
                    <p className="mt-1 text-xs font-medium text-slate-600">Successful Launches</p>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3 rounded-2xl bg-brand-gradient p-4 text-white shadow-md">
                  <Zap size={22} className="shrink-0" />
                  <p className="text-xs font-medium leading-snug">
                    Ready to scale your business with Next.js &amp; AI Search Optimization?
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}