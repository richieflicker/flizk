import type { MetadataRoute } from "next";
import { PAGE_SEO, SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return Object.values(PAGE_SEO).map((page) => ({
    url: page.path === "/" ? SITE_URL : `${SITE_URL}${page.path}`,
    lastModified,
  }));
}
