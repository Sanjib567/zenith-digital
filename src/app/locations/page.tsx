import Link from "next/link";
import { notFound } from "next/navigation";
import { stats } from "@/data/site";
import StatsCounter from "@/components/StatsCounter";
import { ArrowRight } from "lucide-react";

const countryData: Record<
  string,
  { name: string; code: string; flag: string; highlight: string }
> = {
  india: { name: "India", code: "IN", flag: "🇮🇳", highlight: "Indian businesses" },
  usa: { name: "USA", code: "US", flag: "🇺🇸", highlight: "American businesses and startups" },
  uk: { name: "UK", code: "GB", flag: "🇬🇧", highlight: "UK enterprises and brands" },
  canada: { name: "Canada", code: "CA", flag: "🇨🇦", highlight: "Canadian companies" },
  australia: { name: "Australia", code: "AU", flag: "🇦🇺", highlight: "Australian businesses" },
  china: { name: "China", code: "CN", flag: "🇨🇳", highlight: "Asian-Pacific enterprises" },
  "south-africa": { name: "South Africa", code: "ZA", flag: "🇿🇦", highlight: "African digital ventures" },
};

export default async function CountryPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const resolvedParams = await params;
  if (!resolvedParams?.country) return notFound();

  const key = resolvedParams.country.toLowerCase();
  const info = countryData[key];

  if (!info) return notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/50 to-rose-50/50">
      {/* Dynamic Location Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-rose-600 py-24 text-center text-white shadow-xl">
        
        {/* Large Circular Emblem Watermark */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
          <div className="relative flex h-[380px] w-[380px] sm:h-[450px] sm:w-[450px] items-center justify-center rounded-full border-[10px] border-white/60 bg-white/5">
            <span className="text-7xl sm:text-8xl">{info.flag}</span>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg mb-6">
            <span className="text-3xl">{info.flag}</span>
          </div>

          <h1 className="font-[var(--font-heading)] text-4xl font-extrabold sm:text-5xl lg:text-6xl drop-shadow-md">
            {info.name} Digital Services
          </h1>

          <p className="mt-4 text-xl font-medium text-amber-200">
            Expert digital services for {info.highlight}
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-white/90 leading-relaxed">
            Zenith Digital serves businesses across {info.name} with SEO, web development, app development, AI solutions, and digital marketing.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-bold text-brand-navy shadow-lg transition hover:bg-brand-navy hover:text-white"
            >
              Get Free Consultation <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="bg-white py-6 border-b border-slate-200 shadow-sm">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <StatsCounter
              key={s.label}
              value={s.value}
              suffix={s.suffix}
              label={s.label}
              className="text-center"
              numberClass="font-extrabold text-brand-blue text-2xl md:text-3xl"
              labelClass="mt-1 text-xs text-slate-600 md:text-sm"
            />
          ))}
        </div>
      </section>

      {/* Main Content Area */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <h2 className="font-[var(--font-heading)] text-3xl font-extrabold text-brand-navy md:text-4xl">
            Digital Services Company in <span className="text-brand-gradient">{info.name}</span> — Zenith Digital
          </h2>
          <p className="mt-6 text-base md:text-lg text-slate-700 leading-relaxed">
            Zenith Digital Agency is a full-service digital marketing agency headquartered in India, delivering high-performance SEO, AI Search Optimization (AEO/GEO), web development, and mobile app solutions directly to growth-focused businesses in {info.name}.
          </p>
        </div>
      </section>
    </div>
  );
}