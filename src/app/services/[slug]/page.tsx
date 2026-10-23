import { notFound } from "next/navigation";
import { services } from "@/data/site";

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="font-[var(--font-heading)] text-4xl font-extrabold text-brand-navy">{service.title}</h1>
      <p className="mt-6 text-lg text-brand-navy/70">{service.description}</p>
    </section>
  );
}
