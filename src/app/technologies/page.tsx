import { technologies } from "@/data/site";

export default function TechnologiesPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="font-[var(--font-heading)] text-4xl font-extrabold text-brand-navy">Technologies</h1>
      <div className="mt-10 flex flex-wrap gap-3">
        {technologies.map((t) => (
          <span key={t} className="rounded-full bg-brand-navy/5 px-4 py-2 text-sm font-medium">
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
