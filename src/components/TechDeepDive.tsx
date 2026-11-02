import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import { techExtras } from "@/data/techExtras";

export default function TechDeepDive({ slug, name }: { slug: string; name: string }) {
  const extra = techExtras[slug];
  if (!extra) return null;

  return (
    <section className="relative w-full px-6 pb-16 md:px-12 xl:px-20 2xl:px-28">
      <Reveal>
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-brand-blue">In depth</p>
          <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-extrabold text-brand-navy md:text-4xl">
            Working with <span className="tp-gradient-text">{name}</span>
          </h2>
        </div>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-2">
        <div className="space-y-5">
          {extra.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="tp-card-bg group relative overflow-hidden rounded-3xl p-6 shadow-md ring-1 ring-white transition duration-500 hover:-translate-y-1 hover:shadow-xl">
                <p className="text-base leading-relaxed text-brand-navy/85">{p}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="tp-card-bg relative h-full overflow-hidden rounded-[2rem] p-7 shadow-xl ring-1 ring-slate-200">
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand-blue">Best used for</p>
            <ul className="mt-5 space-y-3">
              {extra.useCases.map((u, i) => (
                <li
                  key={u}
                  className="tp-rise flex items-start gap-3 rounded-2xl bg-white/80 px-4 py-3 font-semibold text-brand-navy shadow-sm transition duration-300 hover:translate-x-2 hover:shadow-md"
                  style={{ animationDelay: `${i * 90}ms` }}
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                  {u}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}