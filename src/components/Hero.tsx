
import Link from "next/link";
import HeroVisual from "@/components/HeroVisual";
import CountUp from "@/components/CountUp";

const heroStats = [
  { end: 20, suffix: "+", label: "Years of experience" },
  { end: 500, suffix: "+", label: "Projects delivered" },
  { end: 20, suffix: "+", label: "Countries served" },
  { end: 25, suffix: "+", label: "Team members" },
];

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-white via-blue-50 to-rose-50 pb-5 pt-3 lg:flex lg:items-center lg:pb-8 lg:pt-4">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-5 px-5 sm:px-6 lg:grid-cols-2 lg:gap-8">

        <div className="text-center lg:text-left">
          <h1 className="font-[var(--font-heading)] text-[22px] font-extrabold leading-[1.2] text-brand-navy sm:text-[28px] md:text-[33px] lg:text-[35px] xl:text-[40px]">
            Your Trusted Partner for{" "}
            <span className="text-brand-gradient">Web Development,</span>
            <br />
            <span className="text-brand-gradient">
              App Development &amp; AI-Powered SEO
            </span>
            <br />
            in India
          </h1>

          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-brand-gradient sm:w-36 lg:mx-0" />

          <p className="mx-auto mt-3 max-w-md text-[13px] leading-relaxed text-slate-600 sm:text-sm lg:mx-0 lg:max-w-xl lg:text-[15px]">
            We deliver cutting-edge web development, app development, SEO, PPC, and AI-powered search optimization
            (AEO/GEO) to help businesses boost online visibility, attract qualified leads, and grow globally.
          </p>

          <div className="mt-5 flex justify-center gap-3 lg:justify-start">
            <Link
              href="/contact"
              className="rounded-full bg-brand-gradient px-4 py-2 text-xs font-semibold text-white shadow-md transition hover:scale-105 sm:px-5 sm:py-2.5 sm:text-sm"
            >
              Start Your Project →
            </Link>

            <Link
              href="/services"
              className="rounded-full border-2 border-brand-orange px-4 py-2 text-xs font-semibold text-brand-navy transition hover:bg-brand-orange/10 sm:px-5 sm:py-2.5 sm:text-sm"
            >
              Explore Services →
            </Link>
          </div>

   <div className="relative -top-5 mt-5 grid grid-cols-4 gap-2 border-t border-slate-200 pt-3 sm:gap-4 lg:mt-7">
            {heroStats.map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <p className="font-[var(--font-heading)] text-base font-extrabold text-brand-blue sm:text-xl md:text-2xl">
                  <CountUp end={s.end} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-[9px] leading-tight text-slate-600 sm:text-[11px] md:text-xs">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto h-[280px] w-full max-w-[520px] sm:h-[360px] lg:h-[440px] xl:h-[500px]">
          <div className="absolute left-1/2 top-0 w-[540px] origin-top -translate-x-1/2 scale-[0.46] sm:scale-[0.60] lg:scale-[0.74] xl:scale-[0.84]">
            <HeroVisual />
          </div>
        </div>

      </div>
    </section>
  );
}
