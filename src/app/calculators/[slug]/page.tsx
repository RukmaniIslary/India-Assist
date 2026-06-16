import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdUnit from "@/components/AdSense";
import CalculatorRenderer from "@/components/calculators/CalculatorRenderer";
import { CalculatorCard } from "@/components/cards";
import WhatsAppShare from "@/components/WhatsAppShare";
import { calculators, getCalculatorBySlug } from "@/data/calculators";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return calculators.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const calc = getCalculatorBySlug(params.slug);
  if (!calc) return buildMetadata({ title: "Calculator not found" });
  return buildMetadata({
    title: calc.name,
    description: calc.summary,
    path: `/calculators/${calc.slug}`,
    keywords: calc.keywords,
  });
}

export default function CalculatorDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const calc = getCalculatorBySlug(params.slug);
  if (!calc) notFound();

  const others = calculators.filter((c) => c.slug !== calc.slug).slice(0, 3);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Calculators", href: "/calculators" },
          { label: calc.name },
        ]}
      />
      <div className="container-page py-6">
        <span className="badge">{calc.category}</span>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ink-900">
          {calc.name}
        </h1>
        <p className="mt-2 max-w-2xl text-ink-600">{calc.summary}</p>

        <div className="mt-8">
          <CalculatorRenderer slug={calc.slug} />
        </div>

        <AdUnit />

        <div className="mt-6 rounded-xl border border-ink-200 bg-ink-50 p-5 text-sm text-ink-600">
          <strong className="text-ink-800">Note:</strong> Results are indicative
          and for planning purposes only. Final figures from banks, lenders or
          the Income Tax Department may differ based on their policies and the
          latest rates.
        </div>

        <div className="mt-4 flex items-center gap-3">
          <WhatsAppShare
            url={`${siteConfig.url}/calculators/${calc.slug}`}
            title={`${calc.name} — Free Online Calculator`}
            variant="compact"
          />
          <span className="text-sm text-ink-500">Share this calculator with someone who might find it useful</span>
        </div>
      </div>

      <section className="container-page py-10">
        <h2 className="mb-5 text-xl font-bold text-ink-900">More calculators</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((c) => (
            <CalculatorCard key={c.slug} item={c} />
          ))}
        </div>
        <div className="mt-6">
          <Link href="/loans" className="btn-secondary">
            Compare loan options
          </Link>
        </div>
      </section>
    </>
  );
}
