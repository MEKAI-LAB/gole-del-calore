import type { MetadataRoute } from "next";
import { pages, siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${siteConfig.url}${page.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: page.priority,
  }));
}
