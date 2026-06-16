import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdUnit from "@/components/AdSense";
import { scholarships, getScholarshipBySlug } from "@/data/scholarships";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return scholarships.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const item = getScholarshipBySlug(params.slug);
  if (!item) return buildMetadata({ title: "Scholarship not found" });
  return buildMetadata({
    title: item.name,
    description: item.summary,
    path: `/scholarships/${item.slug}`,
    keywords: [item.name, item.provider, item.level, "scholarship"],
  });
}

export default function ScholarshipDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const item = getScholarshipBySlug(params.slug);
  if (!item) notFound();

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Scholarships", href: "/scholarships" },
          { label: item.name },
        ]}
      />
      <article className="container-page grid gap-10 py-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <span className="badge">{item.level}</span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ink-900">
            {item.name}
          </h1>
          <p className="mt-2 text-sm text-ink-500">{item.provider}</p>
          <p className="mt-4 text-lg leading-relaxed text-ink-700">
            {item.summary}
          </p>

          <div className="mt-6 rounded-xl border border-brand-200 bg-brand-50 p-5">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-700">
              Benefit
            </h2>
            <p className="mt-1 text-ink-800">{item.amount}</p>
          </div>

          <section className="mt-8">
            <h2 className="mb-3 text-xl font-bold text-ink-900">Eligibility</h2>
            <ul className="list-disc space-y-2 pl-5 text-ink-700">
              {item.eligibility.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </section>

          <AdUnit />

          <section className="mt-8">
            <h2 className="mb-3 text-xl font-bold text-ink-900">
              Documents required
            </h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {item.documents.map((d, i) => (
                <li
                  key={i}
                  className="rounded-lg border border-ink-200 bg-white px-3 py-2 text-sm text-ink-700"
                >
                  {d}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="mb-3 text-xl font-bold text-ink-900">Deadlines</h2>
            <p className="text-ink-700">{item.deadlineNote}</p>
          </section>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-20 space-y-5">
            <div className="card">
              <h2 className="text-base font-semibold text-ink-900">
                Apply on the portal
              </h2>
              <p className="mt-1 text-sm text-ink-600">
                Submit your application on the official scholarship portal.
              </p>
              <a
                href={item.officialUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="btn-primary mt-4 w-full"
              >
                Visit official portal
              </a>
            </div>
            <AdUnit label="Sponsored" />
          </div>
        </aside>
      </article>
    </>
  );
}
