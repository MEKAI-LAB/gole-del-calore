import type { MetadataRoute } from "next";
import { pages, siteConfig } from "@/data/site";
import { guidePages } from "@/data/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = pages.map((page) => ({
    url: `${siteConfig.url}${page.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: page.priority,
  }));

  const guides = guidePages.map((guide) => ({
    url: `${siteConfig.url}/guide/${guide.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticPages, ...guides];
}
