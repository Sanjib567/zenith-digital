import { notFound } from "next/navigation";
import ServiceDetail from "@/components/ServiceDetail";
import { allAiServices, findAiService } from "@/data/aiRegistry";

export const dynamicParams = false;

export function generateStaticParams() {
  return allAiServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = findAiService(slug);
  return {
    title: service ? `${service.title} | Zenith Digital Agency` : "Service | Zenith Digital Agency",
  };
}

export default async function AiSolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = findAiService(slug);
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}