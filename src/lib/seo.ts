import type { Metadata } from "next";
import { siteConfig } from "./site";

type SeoArgs = {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
};

/** Truncate to maxLen chars at a word boundary, appending … if cut. */
function trimDesc(text: string, maxLen = 155): string {
  if (text.length <= maxLen) return text;
  return text.slice(0, text.lastIndexOf(" ", maxLen)) + "…";
}

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = "/og-image.svg",
  type = "website",
  publishedTime,
  modifiedTime,
  author,
}: SeoArgs = {}): Metadata {
  // Keyword-first title: "Article Title | India Assist"
  // Rootless home: "India Assist — Free Government Schemes, Eligibility & Finance Tools"
  const fullTitle = title
    ? `${title} | India Assist`
    : "India Assist — Government Schemes, Eligibility & Finance Tools for Indians";

  const rawDesc = description || siteConfig.description;
  const desc = trimDesc(rawDesc);

  const url = `${siteConfig.url}${path === "/" ? "" : path}`;

  const ogExtra =
    type === "article" && publishedTime
      ? {
          type: "article" as const,
          publishedTime,
          ...(modifiedTime ? { modifiedTime } : {}),
          ...(author ? { authors: [author] } : {}),
        }
      : {};

  return {
    title: fullTitle,
    description: desc,
    keywords: [
      "government schemes India",
      "sarkari yojana",
      "eligibility checker",
      "EMI calculator",
      "scholarships India",
      ...keywords,
    ],
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
    },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: "India Assist",
      locale: siteConfig.locale,
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
      ...ogExtra,
    },
    twitter: {
      card: "summary_large_image",
      site: "@indiaassist",
      title: fullTitle,
      description: desc,
      images: [image],
    },
  };
}

/** Builds a rich meta title for scheme detail pages (keyword-first, CTA suffix). */
export function schemeTitle(name: string): string {
  return `${name} — Eligibility, Benefits & How to Apply 2026`;
}

/** Builds a rich meta description for scheme pages (~155 chars). */
export function schemeDesc(name: string, benefit: string, category: string): string {
  const raw = `${benefit}. Full eligibility criteria, required documents & step-by-step application guide for ${name}. Free guide on India Assist.`;
  return trimDesc(raw);
}

/** Builds a rich meta title for document pages. */
export function documentTitle(name: string): string {
  return `How to Apply for ${name} Online 2026 — Step-by-Step Guide`;
}

/** Builds a rich meta description for document pages. */
export function documentDesc(summary: string, name: string): string {
  const raw = `${summary} Detailed documents required, processing time & online application steps for ${name}. India Assist free guide.`;
  return trimDesc(raw);
}

/** Builds a rich meta title for calculator pages. */
export function calculatorTitle(name: string): string {
  return `Free ${name} India 2026 — Instant Results`;
}

/** Builds a rich meta title for state pages. */
export function stateTitle(stateName: string): string {
  return `${stateName} Government Schemes 2026 — Benefits, Eligibility & Services`;
}

/** Builds a rich meta description for state pages. */
export function stateDesc(stateName: string, capital: string): string {
  return trimDesc(
    `Complete guide to government schemes, scholarships, pensions and welfare benefits for residents of ${stateName} (capital: ${capital}). Check eligibility free on India Assist.`,
  );
}
