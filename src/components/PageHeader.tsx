"use client";

import { useT } from "@/lib/i18n";

export default function PageHeader({
  title,
  description,
  eyebrow,
}: {
  title: string;
  description?: string;
  eyebrow?: string;
}) {
  const t = useT();
  return (
    <div className="border-b border-ink-200 bg-gradient-to-b from-brand-50 to-white">
      <div className="container-page py-10">
        {eyebrow && (
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-600">
            {t(eyebrow)}
          </p>
        )}
        <h1 className="text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
          {t(title)}
        </h1>
        {description && (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-600">
            {t(description)}
          </p>
        )}
      </div>
    </div>
  );
}
