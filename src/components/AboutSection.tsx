
import Link from "next/link";
import Reveal from "@/components/Reveal";
import {
  CheckCircle2,
  Sparkles,
  Target,
  Zap,
  ShieldCheck,
} from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      title: "AI-Powered Search & Growth",
      desc: "Optimizing for Google, ChatGPT, and AI Search Engines (AEO/GEO).",
    },
    {
      title: "High-Performance Web Development",
      desc: "Building fast, secure, and scalable websites with modern technologies.",
    },
    {
      title: "Full Funnel Digital Growth",
      desc: "From custom web and app development to data-driven marketing and lead generation.",
    },
  ];

  return (
    <section className="relative overflow-hidden px-6 py-20">
      {/* Soft Glow Accents */}
      <div className="pointer-events-none absolute left-0 top-1/2 -z-10 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/2 -z-10 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-purple/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: About Content */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-blue/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-blue">
                <Sparkles size={14} />
                About Zenith Digital
              </div>

              <h2 className="mt-4 font-[var(--font-heading)] text-3xl font-extrabold leading-tight text-brand-navy sm:text-4xl lg:text-5xl">
                Your Partner in
                <br />
                <span className="text-brand-gradient">
                  Web Development, AI SEO & Digital Growth
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-navy/80 md:text-lg">
                Zenith Digital Agency helps businesses worldwide grow with
                high-performance websites, custom app development, AI-powered
                search optimization (AEO/GEO), and data-driven digital
                marketing strategies that boost online visibility, generate
                qualified leads, and drive sustainable business growth.
              </p>
            </Reveal>

            {/* Value Propositions */}
            <div className="mt-8 space-y-4">
              {highlights.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.1}>
                  <div className="flex items-start gap-4 rounded-2xl border border-brand-navy/5 bg-white/60 p-4 shadow-sm backdrop-blur-sm transition hover:bg-white hover:shadow-md">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-md">
                      <CheckCircle2 size={20} />
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-brand-navy">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-sm text-brand-navy/70">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Company Page Link */}
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

          {/* Right Column: Highlight Card */}
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="relative rounded-3xl border border-white/80 bg-white/70 p-8 shadow-2xl ring-1 ring-brand-navy/5 backdrop-blur-xl">
                {/* Floating Badge */}
                <div className="absolute -right-4 -top-4 flex items-center gap-2 rounded-2xl bg-brand-navy px-4 py-2 text-xs font-bold text-white shadow-xl">
                  <ShieldCheck
                    size={16}
                    className="text-brand-orange"
                  />
                  Digital Growth Partner
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                    <Target size={28} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Our Core Focus
                    </p>
                    <p className="font-[var(--font-heading)] text-xl font-extrabold text-brand-navy">
                      Scalable Digital Growth
                    </p>
                  </div>
                </div>

                <hr className="my-6 border-slate-100" />

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
                    <p className="text-2xl font-black text-brand-blue">
                      AEO/GEO
                    </p>
                    <p className="mt-1 text-xs font-medium text-slate-600">
                      AI Search Optimization
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
                    <p className="text-2xl font-black text-brand-purple">
                      Global
                    </p>
                    <p className="mt-1 text-xs font-medium text-slate-600">
                      Business Growth
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3 rounded-2xl bg-brand-gradient p-4 text-white shadow-md">
                  <Zap size={22} className="shrink-0" />
                  <p className="text-xs font-medium leading-snug">
                    Ready to grow your business with high-performance
                    websites, AI SEO, and digital marketing?
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
