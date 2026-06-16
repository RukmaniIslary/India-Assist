"use client";

import Link from "next/link";
import type { Scheme } from "@/data/schemes";
import type { Scholarship } from "@/data/scholarships";
import type { DocumentGuide } from "@/data/documents";
import type { CalculatorMeta } from "@/data/calculators";
import { useLanguage, useT } from "@/lib/i18n";
import { schemeHindi } from "@/data/schemes.hi";

export function SchemeCard({ scheme }: { scheme: Scheme }) {
  const { lang } = useLanguage();
  const t = useT();
  const hi = schemeHindi[scheme.slug];
  const name = lang === "hi" && hi ? hi.name : scheme.name;
  const summary = lang === "hi" && hi ? hi.summary : scheme.summary;
  return (
    <Link href={`/schemes/${scheme.slug}`} className="card group flex flex-col">
      <span className="badge mb-3 w-fit">{t(scheme.category)}</span>
      <h3 className="text-base font-semibold text-ink-900 group-hover:text-brand-700">
        {name}
      </h3>
      <p className="mt-2 line-clamp-3 text-sm text-ink-600">{summary}</p>
      <p className="mt-3 text-sm font-medium text-brand-700">{scheme.benefit}</p>
    </Link>
  );
}

export function ScholarshipCard({ item }: { item: Scholarship }) {
  return (
    <Link
      href={`/scholarships/${item.slug}`}
      className="card group flex flex-col"
    >
      <span className="badge mb-3 w-fit">{item.level}</span>
      <h3 className="text-base font-semibold text-ink-900 group-hover:text-brand-700">
        {item.name}
      </h3>
      <p className="mt-2 line-clamp-3 text-sm text-ink-600">{item.summary}</p>
      <p className="mt-3 text-xs text-ink-500">{item.provider}</p>
    </Link>
  );
}

export function DocumentCard({ item }: { item: DocumentGuide }) {
  return (
    <Link href={`/documents/${item.slug}`} className="card group flex flex-col">
      <h3 className="text-base font-semibold text-ink-900 group-hover:text-brand-700">
        {item.name}
      </h3>
      <p className="mt-2 line-clamp-3 text-sm text-ink-600">{item.summary}</p>
      <p className="mt-3 text-xs text-ink-500">{item.authority}</p>
    </Link>
  );
}

export function CalculatorCard({ item }: { item: CalculatorMeta }) {
  const t = useT();
  return (
    <Link
      href={`/calculators/${item.slug}`}
      className="card group flex flex-col"
    >
      <span className="badge mb-3 w-fit">{t(item.category)}</span>
      <h3 className="text-base font-semibold text-ink-900 group-hover:text-brand-700">
        {item.name}
      </h3>
      <p className="mt-2 line-clamp-3 text-sm text-ink-600">{item.summary}</p>
    </Link>
  );
}
