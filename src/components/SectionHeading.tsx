"use client";

import Link from "next/link";
import { useT } from "@/lib/i18n";

export default function SectionHeading({
  title,
  subtitle,
  href,
  linkLabel = "View all",
}: {
  title: string;
  subtitle?: string;
  href?: string;
  linkLabel?: string;
}) {
  const t = useT();
  return (
    <div className="mb-6 flex items-end justify-between gap-4">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-ink-900">
          {t(title)}
        </h2>
        {subtitle && <p className="mt-1 text-sm text-ink-600">{t(subtitle)}</p>}
      </div>
      {href && (
        <Link
          href={href}
          className="shrink-0 text-sm font-semibold text-brand-700 hover:underline"
        >
          {t(linkLabel)} →
        </Link>
      )}
    </div>
  );
}
