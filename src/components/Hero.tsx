import Link from "next/link";
import HeroVisual from "@/components/HeroVisual";
import StatsCounter from "@/components/StatsCounter";
import { stats } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-rose-50 pt-6 pb-10 lg:pt-8 lg:pb-14">
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-rose-200/40 blur-3xl" />

      {/* items-start aligns text nicely to the top next to the visual */}
      <div className="relative mx-auto grid max-w-7xl items-start gap-8 px-6 lg:grid-cols-2">
        <div className="pt-2">
          <h1 className="font-[var(--font-heading)] text-3xl font-extrabold leading-[1.15] text-brand-navy md:text-4xl lg:text-[40px]">
            Expert <span className="text-brand-gradient">Web Development,</span>
            <br />
            <span className="text-brand-gradient">App Development &amp; AI SEO</span>
            <br />
            Company in Odisha, India
          </h1>
          <div className="mt-3 h-1 w-44 rounded-full bg-brand-gradient" />
          <p className="mt-4 max-w-xl text-base text-slate-600 md:text-lg">
            Full-stack web development, SEO, PPC and AI-powered search visibility (AEO/GEO). Trusted by businesses
            across India and beyond.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-brand-gradient px-6 py-3 font-semibold text-white shadow-md transition hover:scale-105"
            >
              Start Your Project →
            </Link>
            <Link
              href="/services"
              className="rounded-full border-2 border-brand-orange px-6 py-3 font-semibold text-brand-navy transition hover:bg-brand-orange/10"
            >
              Explore Services →
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-200 pt-5 sm:grid-cols-4">
            {stats.map((s) => (
              <StatsCounter
                key={s.label}
                value={s.value}
                suffix={s.suffix}
                label={s.label}
                className="text-left"
                numberClass="font-extrabold text-brand-blue text-2xl md:text-3xl"
                labelClass="mt-1 text-xs text-slate-600 md:text-sm"
              />
            ))}
          </div>
        </div>

        {/* Scaled and well-aligned HeroVisual */}
        <div className="w-full">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}