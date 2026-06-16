import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { schemes } from "@/data/schemes";
import { scholarships } from "@/data/scholarships";
import { documents } from "@/data/documents";
import { states } from "@/data/states";
import { calculators } from "@/data/calculators";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes = [
    "",
    "/schemes",
    "/scholarships",
    "/documents",
    "/calculators",
    "/loans",
    "/states",
    "/blog",
    "/eligibility",
    "/search",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/disclaimer",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const schemeRoutes = schemes.map((s) => ({
    url: `${base}/schemes/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const scholarshipRoutes = scholarships.map((s) => ({
    url: `${base}/scholarships/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const documentRoutes = documents.map((d) => ({
    url: `${base}/documents/${d.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const stateRoutes = states.map((s) => ({
    url: `${base}/states/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const calculatorRoutes = calculators.map((c) => ({
    url: `${base}/calculators/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...schemeRoutes,
    ...scholarshipRoutes,
    ...documentRoutes,
    ...stateRoutes,
    ...calculatorRoutes,
    ...blogRoutes,
  ];
}
