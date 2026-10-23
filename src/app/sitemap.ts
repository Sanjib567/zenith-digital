import type { MetadataRoute } from "next";
import { services } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.your-domain.com"; // replace with the real domain
  const staticPages = ["", "/services", "/technologies", "/company", "/locations", "/contact"];
  return [
    ...staticPages.map((p) => ({ url: base + p })),
    ...services.map((s) => ({ url: `${base}/services/${s.slug}` })),
  ];
}
