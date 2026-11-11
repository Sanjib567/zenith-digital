import type { Metadata } from "next";
import PricingPage from "@/components/PricingPage";

export const metadata: Metadata = {
  title: "Our Pricing | Zenith Digital Agency",
  description: "Transparent pricing for AI, SEO and web development services.",
};

export default function Page() {
  return <PricingPage />;
}