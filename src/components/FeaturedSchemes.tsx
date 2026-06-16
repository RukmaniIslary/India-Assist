import Link from "next/link";
import { schemes } from "@/data/schemes";

/**
 * Hand-designed, deliberately varied cards for the homepage.
 * Each scheme gets its own layout treatment so the section reads
 * like a designer composed every card individually.
 */

function href(slug: string) {
  return `/schemes/${slug}`;
}

function bySlug(slug: string) {
  const s = schemes.find((x) => x.slug === slug);
  if (!s) throw new Error(`Missing scheme: ${slug}`);
  return s;
}

export default function FeaturedSchemes() {
  return (
    <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <IconLeftCard />
      <BigStatCard />
      <AccentBarCard />
      <GradientHeaderCard />
      <MinimalHeroNumberCard />
      <DarkFeatureCard />
    </div>
  );
}

/* ----------------------------------------------------------------------------
 * Variant 1 — Icon on the left, text on the right (PMAY / Housing)
 * -------------------------------------------------------------------------- */
function IconLeftCard() {
  const s = bySlug("pradhan-mantri-awas-yojana");
  return (
    <Link
      href={href(s.slug)}
      className="group flex items-start gap-4 rounded-xl border border-ink-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
    >
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 11l9-7 9 7M5 10v10h14V10M9 20v-6h6v6" />
        </svg>
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
          {s.category}
        </p>
        <h3 className="mt-0.5 font-bold text-ink-900 group-hover:text-brand-700">
          {s.shortName ?? s.name}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm text-ink-600">{s.summary}</p>
        <p className="mt-2 text-sm font-medium text-brand-700">
          Subsidy up to Rs. 2.67 lakh
        </p>
      </div>
    </Link>
  );
}

/* ----------------------------------------------------------------------------
 * Variant 2 — Oversized highlight stat (Ayushman Bharat / Health)
 * -------------------------------------------------------------------------- */
function BigStatCard() {
  const s = bySlug("ayushman-bharat-pmjay");
  return (
    <Link
      href={href(s.slug)}
      className="group flex flex-col justify-between rounded-xl border border-emerald-100 bg-emerald-50/70 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div>
        <span className="inline-flex items-center rounded-full bg-emerald-600/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
          {s.category}
        </span>
        <p className="mt-4 text-4xl font-extrabold leading-none tracking-tight text-emerald-700">
          Rs. 5 lakh
        </p>
        <p className="mt-1 text-sm font-medium text-emerald-800/80">
          health cover per family, every year
        </p>
      </div>
      <div className="mt-5">
        <h3 className="font-bold text-ink-900 group-hover:text-emerald-700">
          {s.shortName ?? s.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-ink-600">{s.summary}</p>
      </div>
    </Link>
  );
}

/* ----------------------------------------------------------------------------
 * Variant 3 — Vertical colored accent bar (PM-KISAN / Agriculture)
 * -------------------------------------------------------------------------- */
function AccentBarCard() {
  const s = bySlug("pm-kisan-samman-nidhi");
  return (
    <Link
      href={href(s.slug)}
      className="group relative overflow-hidden rounded-xl border border-ink-200 bg-white p-5 pl-7 shadow-sm transition hover:-translate-y-0.5 hover:border-india-green/40 hover:shadow-md"
    >
      <span className="absolute left-0 top-0 h-full w-2 bg-india-green" aria-hidden="true" />
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-extrabold text-india-green">Rs. 6,000</span>
        <span className="text-sm text-ink-500">/ year</span>
      </div>
      <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-ink-400">
        direct to your bank account
      </p>
      <h3 className="mt-3 font-bold text-ink-900 group-hover:text-india-green">
        {s.shortName ?? s.name}
      </h3>
      <p className="mt-1 line-clamp-2 text-sm text-ink-600">{s.summary}</p>
    </Link>
  );
}

/* ----------------------------------------------------------------------------
 * Variant 4 — Gradient header band with icon (e-Shram / Employment)
 * -------------------------------------------------------------------------- */
function GradientHeaderCard() {
  const s = bySlug("e-shram-card");
  return (
    <Link
      href={href(s.slug)}
      className="group flex flex-col overflow-hidden rounded-xl border border-ink-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-4 text-white">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="8" r="3.2" />
          <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
        </svg>
        <span className="text-sm font-semibold uppercase tracking-wide">
          Social Security
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-bold text-ink-900 group-hover:text-blue-700">
          {s.shortName ?? s.name}
        </h3>
        <p className="mt-1 line-clamp-2 flex-1 text-sm text-ink-600">
          {s.summary}
        </p>
        <span className="mt-3 inline-flex w-fit items-center rounded-md bg-blue-50 px-2.5 py-1 text-sm font-semibold text-blue-700">
          Rs. 2 lakh accident cover
        </span>
      </div>
    </Link>
  );
}

/* ----------------------------------------------------------------------------
 * Variant 5 — Minimal, hero number led (Atal Pension Yojana / Pension)
 * -------------------------------------------------------------------------- */
function MinimalHeroNumberCard() {
  const s = bySlug("atal-pension-yojana");
  return (
    <Link
      href={href(s.slug)}
      className="group flex flex-col rounded-xl border border-dashed border-amber-300 bg-white p-6 transition hover:border-solid hover:border-amber-400 hover:shadow-md"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
        Guaranteed pension
      </p>
      <p className="mt-3 text-5xl font-black leading-none tracking-tighter text-ink-900">
        Rs. 5,000
      </p>
      <p className="mt-2 text-sm text-ink-500">
        maximum monthly pension after the age of 60
      </p>
      <div className="mt-auto pt-5">
        <h3 className="font-semibold text-ink-700 group-hover:text-amber-700">
          {s.shortName ?? s.name} &rarr;
        </h3>
      </div>
    </Link>
  );
}

/* ----------------------------------------------------------------------------
 * Variant 6 — Dark feature card (Sukanya Samriddhi Yojana / Women & Child)
 * -------------------------------------------------------------------------- */
function DarkFeatureCard() {
  const s = bySlug("sukanya-samriddhi-yojana");
  return (
    <Link
      href={href(s.slug)}
      className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-ink-900 p-5 text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <span
        className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand-500/20 blur-2xl"
        aria-hidden="true"
      />
      <div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-semibold text-brand-200">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 21s-7-4.35-9.33-9C1.4 9.07 2.7 6 6 6c1.96 0 3.2 1.06 4 2 0.8-.94 2.04-2 4-2 3.3 0 4.6 3.07 3.33 6C19 16.65 12 21 12 21z" />
          </svg>
          {s.category}
        </span>
        <h3 className="mt-4 text-lg font-bold group-hover:text-brand-200">
          {s.shortName ?? s.name}
        </h3>
        <p className="mt-1.5 line-clamp-3 text-sm text-ink-300">{s.summary}</p>
      </div>
      <p className="mt-4 text-sm font-semibold text-brand-300">
        Tax-free returns · 21-year maturity
      </p>
    </Link>
  );
}
