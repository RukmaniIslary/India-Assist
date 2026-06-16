import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdUnit from "@/components/AdSense";
import JsonLd from "@/components/JsonLd";
import { SchemeCard } from "@/components/cards";
import { schemes, getSchemeBySlug } from "@/data/schemes";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return schemes.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const scheme = getSchemeBySlug(params.slug);
  if (!scheme) return buildMetadata({ title: "Scheme not found" });
  return buildMetadata({
    title: scheme.name,
    description: scheme.summary,
    path: `/schemes/${scheme.slug}`,
    keywords: [scheme.name, scheme.shortName ?? "", scheme.category, "eligibility"],
  });
}

export default function SchemeDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const scheme = getSchemeBySlug(params.slug);
  if (!scheme) notFound();

  const related = schemes
    .filter((s) => s.category === scheme.category && s.slug !== scheme.slug)
    .slice(0, 3);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: scheme.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: scheme.name,
    description: scheme.summary,
    publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: `${siteConfig.url}/schemes/${scheme.slug}`,
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />
      <JsonLd data={articleJsonLd} />
      <Breadcrumbs
        items={[{ label: "Schemes", href: "/schemes" }, { label: scheme.shortName ?? scheme.name }]}
      />

      <article className="container-page grid gap-10 py-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <span className="badge">{scheme.category}</span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ink-900">
            {scheme.name}
          </h1>
          <p className="mt-2 text-sm text-ink-500">
            {scheme.ministry} · Launched {scheme.launched}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink-700">
            {scheme.summary}
          </p>

          <div className="mt-6 rounded-xl border border-brand-200 bg-brand-50 p-5">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-700">
              Key benefit
            </h2>
            <p className="mt-1 text-ink-800">{scheme.benefit}</p>
          </div>

          <Section title="Eligibility criteria">
            <ul className="list-disc space-y-2 pl-5 text-ink-700">
              {scheme.eligibility.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </Section>

          <AdUnit />

          <Section title="Documents required">
            <ul className="grid gap-2 sm:grid-cols-2">
              {scheme.documents.map((d, i) => (
                <li
                  key={i}
                  className="rounded-lg border border-ink-200 bg-white px-3 py-2 text-sm text-ink-700"
                >
                  {d}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="How to apply">
            <ol className="space-y-3">
              {scheme.howToApply.map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  <span className="pt-0.5 text-ink-700">{step}</span>
                </li>
              ))}
            </ol>
          </Section>

          <Section title="Frequently asked questions">
            <div className="space-y-3">
              {scheme.faqs.map((f, i) => (
                <details
                  key={i}
                  className="group rounded-lg border border-ink-200 bg-white p-4"
                >
                  <summary className="cursor-pointer list-none font-medium text-ink-900">
                    {f.q}
                  </summary>
                  <p className="mt-2 text-sm text-ink-600">{f.a}</p>
                </details>
              ))}
            </div>
          </Section>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-20 space-y-5">
            <div className="card">
              <h2 className="text-base font-semibold text-ink-900">
                Apply on the official portal
              </h2>
              <p className="mt-1 text-sm text-ink-600">
                Always submit applications through the official government
                website.
              </p>
              <a
                href={scheme.officialUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="btn-primary mt-4 w-full"
              >
                Visit official site
              </a>
              <Link href="/eligibility" className="btn-secondary mt-2 w-full">
                Check eligibility
              </Link>
            </div>
            <AdUnit label="Sponsored" />
          </div>
        </aside>
      </article>

      {related.length > 0 && (
        <section className="container-page py-10">
          <h2 className="mb-5 text-xl font-bold text-ink-900">
            Related schemes
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <SchemeCard key={s.slug} scheme={s} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8">
      <h2 className="mb-3 text-xl font-bold text-ink-900">{title}</h2>
      {children}
    </section>
  );
}
