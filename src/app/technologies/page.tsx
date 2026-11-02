import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import TechLogo from "@/components/TechLogo";
import { techGroups, techs, techSlug } from "@/data/technologies";

export const metadata = {
  title: "Technologies | Zenith Digital Agency",
  description: "Frontend, CMS, backend, cloud and AI technologies used by Zenith Digital Agency.",
};

const WIDE = "relative w-full px-6 md:px-12 xl:px-20 2xl:px-28";
const ORDER = ["frontend", "cms", "backend", "cloud", "ai"] as const;

export default function TechnologiesOverview() {
  return (
    <main className="relative w-full overflow-hidden bg-gradient-to-br from-blue-50 via-pink-50 to-rose-50">
      <section className={`${WIDE} pb-10 pt-16 text-center`}>
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.3em] text-brand-blue shadow-md ring-1 ring-brand-blue/15">
          <Sparkles size={14} /> Technologies
        </span>
        <h1 className="mt-5 font-[var(--font-heading)] text-4xl font-extrabold text-brand-navy md:text-5xl">
          Tools we work <span className="text-brand-gradient">with every day</span>
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base font-extrabold text-brand-navy/80 md:text-lg">
          From the front end to the cloud and AI, we choose the right technology for speed, security and scale.
        </p>
      </section>

      <section className={`${WIDE} space-y-14 pb-20`}>
        {ORDER.map((key) => {
          const group = techGroups[key];
          const items = techs.filter((t) => t.group === key);
          return (
            <div key={key}>
              <div className="flex items-center gap-4">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-2xl text-white shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${group.tone.from}, ${group.tone.to})` }}
                >
                  <Sparkles size={18} />
                </span>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-brand-blue">
                    {items.length} technologies
                  </p>
                  <h2 className="font-[var(--font-heading)] text-2xl font-extrabold uppercase tracking-wide text-brand-navy md:text-3xl">
                    {group.label}
                  </h2>
                </div>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {items.map((t) => (
                  <Link
                    key={t.name}
                    href={`/menu/technologies/${techSlug(t)}`}
                    className="group flex h-full items-center gap-4 rounded-3xl bg-white p-5 shadow-md ring-1 ring-slate-200 transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <TechLogo
                      slug={techSlug(t)}
                      name={t.name}
                      className="h-16 w-16 shrink-0 rounded-2xl shadow-lg ring-1 ring-slate-200"
                      logoClassName="h-10 w-10"
                      compact
                    />
                    <div className="min-w-0 flex-1">
                      <p className="font-[var(--font-heading)] text-base font-extrabold text-brand-navy">{t.name}</p>
                      <p className="mt-1 line-clamp-2 text-sm text-brand-navy/65">{t.tagline}</p>
                    </div>
                    <ArrowRight size={18} className="shrink-0 text-brand-blue transition duration-300 group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}