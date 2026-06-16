import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdUnit from "@/components/AdSense";
import WhatsAppShare from "@/components/WhatsAppShare";
import { SchemeCard } from "@/components/cards";
import { states, getStateBySlug } from "@/data/states";
import { schemes } from "@/data/schemes";
import { buildMetadata, stateTitle, stateDesc } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return states.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const state = getStateBySlug(params.slug);
  if (!state) return buildMetadata({ title: "State not found" });
  return buildMetadata({
    title: stateTitle(state.name),
    description: stateDesc(state.name, state.capital),
    path: `/states/${state.slug}`,
    keywords: [`${state.name} schemes`, `${state.name} government benefits`, "sarkari yojana 2026", state.capital],
  });
}

export default function StateDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const state = getStateBySlug(params.slug);
  if (!state) notFound();

  // Central schemes apply across all states.
  const centralSchemes = schemes.slice(0, 6);

  return (
    <>
      <Breadcrumbs
        items={[{ label: "States", href: "/states" }, { label: state.name }]}
      />
      <article className="container-page py-6">
        <span className="badge">{state.region}</span>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ink-900">
          {state.name} Government Schemes &amp; Benefits
        </h1>
        <p className="mt-2 text-ink-600">Capital: {state.capital}</p>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-700">
          Residents of {state.name} can access both central government schemes
          and state-specific welfare programmes. Below are key highlights and
          the central benefits available to you.
        </p>

        <section className="mt-8">
          <h2 className="mb-3 text-xl font-bold text-ink-900">
            State highlights
          </h2>
          <ul className="grid gap-2 sm:grid-cols-3">
            {state.highlights.map((h, i) => (
              <li
                key={i}
                className="rounded-lg border border-ink-200 bg-white px-3 py-2 text-sm text-ink-700"
              >
                {h}
              </li>
            ))}
          </ul>
          <a
            href={state.portal}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-secondary mt-4"
          >
            Visit {state.name} official portal
          </a>
        </section>

        <AdUnit />

        <section className="mt-6">
          <h2 className="mb-5 text-xl font-bold text-ink-900">
            Central schemes available in {state.name}
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {centralSchemes.map((s) => (
              <SchemeCard key={s.slug} scheme={s} />
            ))}
          </div>
        </section>

        <div className="mt-8 rounded-xl bg-brand-50 p-6">
          <h2 className="text-lg font-bold text-ink-900">
            Not sure what you qualify for in {state.name}?
          </h2>
          <p className="mt-1 text-sm text-ink-600">
            Use our eligibility engine to match your profile with relevant
            benefits.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/eligibility" className="btn-primary">
              Check eligibility
            </Link>
            <WhatsAppShare
              url={`${siteConfig.url}/states/${state.slug}`}
              title={`${state.name} Government Schemes & Benefits — India Assist`}
              variant="compact"
            />
          </div>
        </div>
      </article>
    </>
  );
}
