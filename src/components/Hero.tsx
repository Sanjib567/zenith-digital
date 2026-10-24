import Link from "next/link";
import HeroVisual from "@/components/HeroVisual";
import StatsCounter from "@/components/StatsCounter";
import { stats } from "@/data/site";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-white via-blue-50 to-rose-50 pb-8 pt-6 lg:pb-14 lg:pt-8">
      <div className="mx-auto grid max-w-7xl items-center gap-4 px-5 sm:px-6 lg:grid-cols-2 lg:gap-10">
        {/* Text, buttons and stats */}
        <div className="text-center lg:text-left">
          <h1 className="font-[var(--font-heading)] text-[22px] font-extrabold leading-[1.2] text-brand-navy sm:text-3xl md:text-4xl lg:text-[40px]">
            Expert <span className="text-brand-gradient">Web Development,</span>
            <br />
            <span className="text-brand-gradient">App Development &amp; AI SEO</span>
            <br />
            Company in Odisha, India
          </h1>

          <div className="mx-auto mt-3 h-1 w-28 rounded-full bg-brand-gradient sm:w-40 lg:mx-0" />

          <p className="mx-auto mt-4 max-w-md text-[13px] leading-relaxed text-slate-600 sm:text-base lg:mx-0 lg:max-w-xl lg:text-lg">
            Full-stack web development, SEO, PPC and AI-powered search visibility (AEO/GEO). Trusted by businesses
            across India and beyond.
          </p>

          <div className="mt-6 flex justify-center gap-3 lg:justify-start">
            <Link
              href="/contact"
              className="rounded-full bg-brand-gradient px-4 py-2.5 text-xs font-semibold text-white shadow-md transition hover:scale-105 sm:px-6 sm:py-3 sm:text-sm"
            >
              Start Your Project →
            </Link>
            <Link
              href="/services"
              className="rounded-full border-2 border-brand-orange px-4 py-2.5 text-xs font-semibold text-brand-navy transition hover:bg-brand-orange/10 sm:px-6 sm:py-3 sm:text-sm"
            >
              Explore Services →
            </Link>
          </div>

          {/* Stats: numbers and labels only, no icons */}
          <div className="mt-6 grid grid-cols-4 gap-2 border-t border-slate-200 pt-5 sm:gap-4 lg:mt-8">
            {stats.map((s) => (
              <StatsCounter
                key={s.label}
                value={s.value}
                suffix={s.suffix}
                label={s.label}
                className="text-center lg:text-left"
                numberClass="font-extrabold text-brand-blue text-base sm:text-2xl md:text-3xl"
                labelClass="mt-1 text-[10px] leading-tight text-slate-600 sm:text-xs md:text-sm"
              />
            ))}
          </div>
        </div>

        {/* Orbit visual. The 540px-tall visual is scaled so its height matches the container.
            It sits directly under the stats on phones. */}
        <div className="relative mx-auto mt-0 h-[300px] w-full max-w-[560px] overflow-hidden sm:h-[425px] lg:mt-0 lg:h-[505px] xl:h-[540px]">
          <div className="absolute left-1/2 top-0 w-[560px] origin-top -translate-x-1/2 scale-[0.56] sm:scale-[0.78] lg:scale-[0.9] xl:scale-100">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}