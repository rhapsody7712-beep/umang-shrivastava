import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { caseStudies } from "@/content/caseStudies";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/experience", "/case-studies", "/resume", "/contact"].map(
    (path) => ({
      url: `${site.siteUrl}${path}`,
      lastModified: new Date(),
    })
  );

  const caseStudyPages = caseStudies.map((s) => ({
    url: `${site.siteUrl}/case-studies/${s.slug}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...caseStudyPages];
}
