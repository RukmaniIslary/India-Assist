import type { Metadata } from "next";
import { siteConfig } from "./site";

type SeoArgs = {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  image?: string;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = "/og-image.svg",
}: SeoArgs = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.tagline}`;
  const desc = description || siteConfig.description;
  const url = `${siteConfig.url}${path === "/" ? "" : path}`;

  return {
    title: fullTitle,
    description: desc,
    keywords: [
      "government schemes",
      "scholarships",
      "EMI calculator",
      "SIP calculator",
      "eligibility",
      "India",
      ...keywords,
    ],
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [image],
    },
  };
}
