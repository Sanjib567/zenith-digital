import { siteConfig } from "@/data/site";

export default function CompanyPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="font-[var(--font-heading)] text-4xl font-extrabold text-brand-navy">About {siteConfig.name}</h1>
      <p className="mt-6 text-lg text-brand-navy/70">Placeholder: company story from your brother.</p>
    </section>
  );
}
