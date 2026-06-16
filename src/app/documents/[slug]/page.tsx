import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdUnit from "@/components/AdSense";
import JsonLd from "@/components/JsonLd";
import { documents, getDocumentBySlug } from "@/data/documents";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return documents.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const doc = getDocumentBySlug(params.slug);
  if (!doc) return buildMetadata({ title: "Document not found" });
  return buildMetadata({
    title: `How to Apply for ${doc.name}`,
    description: doc.summary,
    path: `/documents/${doc.slug}`,
    keywords: [doc.name, doc.authority, "how to apply", "documents required"],
  });
}

export default function DocumentDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const doc = getDocumentBySlug(params.slug);
  if (!doc) notFound();

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to apply for ${doc.name}`,
    description: doc.summary,
    step: doc.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      text: s,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: doc.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={howToJsonLd} />
      <JsonLd data={faqJsonLd} />
      <Breadcrumbs
        items={[{ label: "Documents", href: "/documents" }, { label: doc.name }]}
      />

      <article className="container-page grid gap-10 py-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-extrabold tracking-tight text-ink-900">
            How to Apply for {doc.name}
          </h1>
          <p className="mt-2 text-sm text-ink-500">Issued by {doc.authority}</p>
          <p className="mt-4 text-lg leading-relaxed text-ink-700">
            {doc.summary}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-ink-200 bg-white p-4">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                Who needs it
              </h2>
              <p className="mt-1 text-sm text-ink-700">{doc.whoNeeds}</p>
            </div>
            <div className="rounded-xl border border-ink-200 bg-white p-4">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                Processing time
              </h2>
              <p className="mt-1 text-sm text-ink-700">{doc.processingTime}</p>
            </div>
          </div>

          <section className="mt-8">
            <h2 className="mb-3 text-xl font-bold text-ink-900">
              Documents required
            </h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {doc.requiredDocuments.map((d, i) => (
                <li
                  key={i}
                  className="rounded-lg border border-ink-200 bg-white px-3 py-2 text-sm text-ink-700"
                >
                  {d}
                </li>
              ))}
            </ul>
          </section>

          <AdUnit />

          <section className="mt-8">
            <h2 className="mb-3 text-xl font-bold text-ink-900">
              Step-by-step process
            </h2>
            <ol className="space-y-3">
              {doc.steps.map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  <span className="pt-0.5 text-ink-700">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-8">
            <h2 className="mb-3 text-xl font-bold text-ink-900">FAQs</h2>
            <div className="space-y-3">
              {doc.faqs.map((f, i) => (
                <details
                  key={i}
                  className="rounded-lg border border-ink-200 bg-white p-4"
                >
                  <summary className="cursor-pointer list-none font-medium text-ink-900">
                    {f.q}
                  </summary>
                  <p className="mt-2 text-sm text-ink-600">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-20 space-y-5">
            <div className="card">
              <h2 className="text-base font-semibold text-ink-900">
                Official portal
              </h2>
              <p className="mt-1 text-sm text-ink-600">
                Apply only through the official government website.
              </p>
              <a
                href={doc.officialUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="btn-primary mt-4 w-full"
              >
                Visit official site
              </a>
            </div>
            <AdUnit label="Sponsored" />
          </div>
        </aside>
      </article>

      <div className="container-page pb-6 text-xs text-ink-400">
        <p>Reference: {siteConfig.name} document guides.</p>
      </div>
    </>
  );
}
