import Link from "next/link";
import JsonLd from "./JsonLd";
import { siteConfig } from "@/lib/site";

export type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ label: "Home", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${siteConfig.url}${c.href === "/" ? "" : c.href}` } : {}),
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="container-page py-4">
      <JsonLd data={jsonLd} />
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink-500">
        {all.map((c, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {c.href && i < all.length - 1 ? (
              <Link href={c.href} className="hover:text-brand-700">
                {c.label}
              </Link>
            ) : (
              <span className="font-medium text-ink-700">{c.label}</span>
            )}
            {i < all.length - 1 && <span className="text-ink-300">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
