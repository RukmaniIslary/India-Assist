import { schemes } from "@/data/schemes";
import { scholarships } from "@/data/scholarships";
import { documents } from "@/data/documents";
import { states } from "@/data/states";
import { calculators } from "@/data/calculators";
import { blogPosts } from "@/data/blog";

export type SearchItem = {
  title: string;
  href: string;
  type: "Scheme" | "Scholarship" | "Document" | "State" | "Calculator" | "Article";
  description: string;
  keywords: string;
};

export const searchIndex: SearchItem[] = [
  ...schemes.map((s) => ({
    title: s.name,
    href: `/schemes/${s.slug}`,
    type: "Scheme" as const,
    description: s.summary,
    keywords: `${s.name} ${s.shortName ?? ""} ${s.category} ${s.ministry}`.toLowerCase(),
  })),
  ...scholarships.map((s) => ({
    title: s.name,
    href: `/scholarships/${s.slug}`,
    type: "Scholarship" as const,
    description: s.summary,
    keywords: `${s.name} ${s.provider} ${s.level} scholarship`.toLowerCase(),
  })),
  ...documents.map((d) => ({
    title: d.name,
    href: `/documents/${d.slug}`,
    type: "Document" as const,
    description: d.summary,
    keywords: `${d.name} ${d.authority} document apply`.toLowerCase(),
  })),
  ...states.map((s) => ({
    title: `${s.name} Schemes & Benefits`,
    href: `/states/${s.slug}`,
    type: "State" as const,
    description: `Welfare schemes, scholarships and services for residents of ${s.name}.`,
    keywords: `${s.name} ${s.capital} ${s.region} state schemes`.toLowerCase(),
  })),
  ...calculators.map((c) => ({
    title: c.name,
    href: `/calculators/${c.slug}`,
    type: "Calculator" as const,
    description: c.summary,
    keywords: `${c.name} ${c.keywords.join(" ")} ${c.category}`.toLowerCase(),
  })),
  ...blogPosts.map((b) => ({
    title: b.title,
    href: `/blog/${b.slug}`,
    type: "Article" as const,
    description: b.excerpt,
    keywords: `${b.title} ${b.category} guide`.toLowerCase(),
  })),
];

export function searchAll(query: string): SearchItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const terms = q.split(/\s+/);
  return searchIndex
    .map((item) => {
      const haystack = `${item.title.toLowerCase()} ${item.keywords} ${item.description.toLowerCase()}`;
      const score = terms.reduce(
        (acc, t) => acc + (haystack.includes(t) ? 1 : 0),
        0,
      );
      return { item, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.item);
}
