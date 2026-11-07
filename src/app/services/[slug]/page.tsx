import { notFound } from "next/navigation";
import ServicePage from "@/components/ServicePage";
import { services } from "@/data/site";
import { allPages, findAllSolution } from "@/data/solutionsAll";

export const dynamicParams = false;

export function generateStaticParams() {
  const slugs = new Set([...services.map((s) => s.slug), ...allPages.map((p) => p.slug)]);
  return [...slugs].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = findAllSolution(slug);
  const fallback = services.find((s) => s.slug === slug);
  const title = page?.title ?? fallback?.title;
  return {
    title: title ? `${title} | Zenith Digital Agency` : "Service | Zenith Digital Agency",
    description: page?.intro ?? fallback?.description,
  };
}

export default async function ServiceSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = findAllSolution(slug);
  if (!page) notFound();
  return <ServicePage page={page} />;
}
