import { solutionGroups, solutionPages, type SolutionPage } from "@/data/solutions";
import { commerceGroups, commercePages } from "@/data/commerce";

export const allGroups = { ...solutionGroups, ...commerceGroups };

export const allPages: SolutionPage[] = [...solutionPages, ...commercePages];

export function findAllSolution(slug: string) {
  return allPages.find((p) => p.slug === slug);
}