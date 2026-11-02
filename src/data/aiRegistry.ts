import { aiSearchSeoServices, type ServiceDetailData } from "@/data/aiSearchSeo";
import { aiDevelopmentServices } from "@/data/aiDevelopment";
import { aiAutomationServices } from "@/data/aiAutomation";
import { aiIndustryServices } from "@/data/aiIndustry";

export const aiGroups: { label: string; items: ServiceDetailData[] }[] = [
  { label: "AI Search & SEO", items: aiSearchSeoServices },
  { label: "AI Development", items: aiDevelopmentServices },
  { label: "AI Automation", items: aiAutomationServices },
  { label: "AI by Industry", items: aiIndustryServices },
];

export const allAiServices: ServiceDetailData[] = aiGroups.flatMap((g) => g.items);

export function findAiService(slug: string) {
  return allAiServices.find((s) => s.slug === slug);
}

export function groupOfAi(slug: string) {
  return aiGroups.find((g) => g.items.some((s) => s.slug === slug));
}