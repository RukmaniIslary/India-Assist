import Link from "next/link";
import type { Metadata } from "next";
import SearchBox from "@/components/SearchBox";
import SectionHeading from "@/components/SectionHeading";
import Newsletter from "@/components/Newsletter";
import AdUnit from "@/components/AdSense";
import { CalculatorCard, DocumentCard } from "@/components/cards";
import FeaturedSchemes from "@/components/FeaturedSchemes";
import { calculators } from "@/data/calculators";
import { documents } from "@/data/documents";
import { states } from "@/data/states";
import { buildMetadata } from "@/lib/seo";
import { T } from "@/lib/i18n";

export const metadata: Metadata = buildMetadata({
  title: "Government Schemes, Scholarships & Finance Tools",
  description:
    "India Assist helps you discover government schemes, scholarships, document procedures, EMI and SIP calculators, and check your eligibility in one place.",
});

const categories = [
  { label: "Schemes", href: "/schemes", desc: "Welfare & subsidy schemes", icon: "scheme" },
  { label: "Scholarships", href: "/scholarships", desc: "Student funding directory", icon: "scholarship" },
  { label: "Documents", href: "/documents", desc: "PAN, Passport & more", icon: "document" },
  { label: "Calculators", href: "/calculators", desc: "EMI, SIP, tax & loans", icon: "calculator" },
  { label: "Loans", href: "/loans", desc: "Compare loan options", icon: "loan" },
  { label: "State Guides", href: "/states", desc: "Benefits by state", icon: "state" },
] as const;

const stats = [
  { value: "36+", label: "Flagship schemes" },
  { value: "6", label: "Finance calculators" },
  { value: "33", label: "States & UTs covered" },
  { value: "1", label: "Eligibility engine" },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-ink-200 bg-gradient-to-b from-brand-50 via-white to-white">
        <div className="container-page py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge mb-4">
              <T en="No jargon, no runaround" />
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
              <T
                en="Figuring out government schemes shouldn't feel like a "
                hi="सरकारी योजनाएं समझना किसी "
              />
              <span className="text-brand-600">
                <T en="full-time job" hi="पूरे समय की नौकरी जैसा नहीं होना चाहिए" />
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-ink-600">
              <T
                en="So we put everything in one place. Search for a scheme, find out what you actually qualify for, work out your EMI or SIP, or finally sort out that document you've been putting off. Have a look around — it's all free."
                hi="इसलिए हमने सब कुछ एक जगह रख दिया है। कोई योजना खोजें, जानें कि आप वास्तव में किसके लिए पात्र हैं, अपनी ईएमआई या एसआईपी निकालें, या वह दस्तावेज़ बनवाएं जिसे आप टालते आ रहे हैं। देखिए — यह सब निःशुल्क है।"
              />
            </p>
            <div className="mx-auto mt-8 max-w-2xl">
              <SearchBox />
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm text-ink-500">
              <span><T en="Popular:" hi="लोकप्रिय:" /></span>
              <Link href="/schemes/pm-kisan-samman-nidhi" className="rounded-full bg-white px-3 py-1 ring-1 ring-ink-200 hover:ring-brand-300">PM-KISAN</Link>
              <Link href="/calculators/emi" className="rounded-full bg-white px-3 py-1 ring-1 ring-ink-200 hover:ring-brand-300">EMI Calculator</Link>
              <Link href="/schemes/ayushman-bharat-pmjay" className="rounded-full bg-white px-3 py-1 ring-1 ring-ink-200 hover:ring-brand-300">Ayushman Bharat</Link>
              <Link href="/documents/pan-card" className="rounded-full bg-white px-3 py-1 ring-1 ring-ink-200 hover:ring-brand-300">PAN Card</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group flex flex-col items-center rounded-xl border border-ink-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
            >
              <CategoryIcon name={c.icon} />
              <span className="mt-3 text-sm font-semibold text-ink-900 group-hover:text-brand-700">
                <T en={c.label} />
              </span>
              <span className="mt-0.5 text-xs text-ink-500"><T en={c.desc} /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-ink-200 bg-ink-50">
        <div className="container-page grid grid-cols-2 gap-6 py-10 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-extrabold text-brand-600">{s.value}</p>
              <p className="mt-1 text-sm text-ink-600"><T en={s.label} /></p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-14">
        <div className="rounded-2xl bg-gradient-to-r from-brand-600 to-brand-700 p-8 text-white sm:p-10">
          <div className="grid items-center gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold sm:text-3xl">
                <T
                  en="Honestly, who can keep track of every scheme?"
                  hi="सच कहें तो, हर योजना का हिसाब कौन रख सकता है?"
                />
              </h2>
              <p className="mt-2 max-w-xl text-brand-50">
                <T
                  en="You don't have to. Tell us your age, state, income and what you do — takes about a minute — and we'll show you the benefits worth your time. No sign-up needed."
                  hi="आपको रखने की ज़रूरत नहीं। हमें अपनी उम्र, राज्य, आय और काम बताएं — लगभग एक मिनट लगता है — और हम आपको काम के लाभ दिखाएंगे। कोई साइन-अप नहीं।"
                />
              </p>
            </div>
            <div className="lg:text-right">
              <Link
                href="/eligibility"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
              >
                <T en="Check my eligibility" hi="मेरी पात्रता जांचें" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page">
        <SectionHeading
          title="Popular government schemes"
          subtitle="The big central schemes people ask about most — housing, health, farming and pensions."
          href="/schemes"
        />
        <FeaturedSchemes />
      </section>

      <div className="container-page">
        <AdUnit />
      </div>

      <section className="container-page py-6">
        <SectionHeading
          title="Finance calculators"
          subtitle="Run the numbers before you commit — loans, investments and taxes, no spreadsheet needed."
          href="/calculators"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {calculators.map((c) => (
            <CalculatorCard key={c.slug} item={c} />
          ))}
        </div>
      </section>

      <section className="container-page py-10">
        <SectionHeading
          title="Document application guides"
          subtitle="That PAN or passport you keep meaning to sort out? Here's exactly how, step by step."
          href="/documents"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {documents.slice(0, 6).map((d) => (
            <DocumentCard key={d.slug} item={d} />
          ))}
        </div>
      </section>

      <section className="container-page py-6">
        <SectionHeading
          title="Explore benefits by state"
          subtitle="Every state and UT has its own schemes too — find yours below."
          href="/states"
        />
        <div className="flex flex-wrap gap-2">
          {states.map((s) => (
            <Link
              key={s.slug}
              href={`/states/${s.slug}`}
              className="rounded-full border border-ink-200 bg-white px-3.5 py-1.5 text-sm text-ink-700 transition hover:border-brand-300 hover:text-brand-700"
            >
              {s.name}
            </Link>
          ))}
        </div>
      </section>

      <div className="py-10" />
      <Newsletter />
    </>
  );
}

function CategoryIcon({ name }: { name: string }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "text-brand-600",
    "aria-hidden": true,
  };
  switch (name) {
    case "scheme":
      return (
        <svg {...common}>
          <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" />
        </svg>
      );
    case "scholarship":
      return (
        <svg {...common}>
          <path d="M22 10L12 5 2 10l10 5 10-5zM6 12v5c0 1 3 2 6 2s6-1 6-2v-5" />
        </svg>
      );
    case "document":
      return (
        <svg {...common}>
          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5zM14 3v5h5M9 13h6M9 17h6" />
        </svg>
      );
    case "calculator":
      return (
        <svg {...common}>
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M8 7h8M8 11h2M8 15h2M14 11h2M14 15h2M12 11h0M12 15h0" />
        </svg>
      );
    case "loan":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M14.5 9.5c-.5-1-1.5-1.5-2.5-1.5-1.4 0-2.5.9-2.5 2s1.1 2 2.5 2 2.5.9 2.5 2-1.1 2-2.5 2c-1 0-2-.5-2.5-1.5M12 6v1.5M12 16.5V18" />
        </svg>
      );
    case "state":
      return (
        <svg {...common}>
          <path d="M12 21s7-5.5 7-11a7 7 0 0 0-14 0c0 5.5 7 11 7 11z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    default:
      return null;
  }
}
