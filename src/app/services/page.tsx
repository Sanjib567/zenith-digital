import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/site";

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <h1 className="font-[var(--font-heading)] text-4xl font-extrabold text-brand-navy">Our Services</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <ServiceCard key={s.slug} slug={s.slug} title={s.title} description={s.description} icon={s.icon} />
        ))}
      </div>
      <Link href="/contact" className="mt-12 inline-block font-semibold text-brand-blue">
        Talk to us about your project →
      </Link>
    </section>
  );
}
