import Link from "next/link";
import type { Metadata } from "next";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "Government Schemes 2025 - Central & State Schemes India",
  description: "Complete list of government schemes in India 2025. PM Kisan, Ayushman Bharat, PMAY, Mudra Yojana, Sukanya Samriddhi and more with eligibility and benefits.",
};

const schemes = [
  { title: "PM Kisan Samman Nidhi", benefit: "Rs 6,000 per year", category: "Agriculture", description: "Direct income support of Rs 6,000 per year in 3 installments to small and marginal farmer families.", slug: "pm-kisan" },
  { title: "Ayushman Bharat (PMJAY)", benefit: "Rs 5 Lakh health cover", category: "Health", description: "Free health insurance of Rs 5 lakh per family per year for secondary and tertiary hospitalization.", slug: "ayushman-bharat" },
  { title: "PM Awas Yojana (PMAY)", benefit: "Rs 2.67 Lakh subsidy", category: "Housing", description: "Interest subsidy on home loans for EWS, LIG and MIG categories. Affordable housing for all.", slug: "pmay" },
  { title: "E-Shram Card", benefit: "Rs 2 Lakh accident cover", category: "Labour", description: "Registration for unorganized workers with Rs 2 lakh accidental insurance and access to welfare schemes.", slug: "e-shram" },
  { title: "Atal Pension Yojana", benefit: "Rs 1,000-5,000 pension", category: "Pension", description: "Guaranteed monthly pension of Rs 1,000 to Rs 5,000 after age 60 for unorganized sector workers.", slug: "atal-pension" },
  { title: "PM Mudra Yojana", benefit: "Up to Rs 10 Lakh loan", category: "Business", description: "Collateral-free loans up to Rs 10 lakh for micro and small enterprises under Shishu, Kishore and Tarun categories.", slug: "mudra-yojana" },
  { title: "PM Vishwakarma Yojana", benefit: "Rs 3 Lakh loan at 5%", category: "Artisan", description: "Financial assistance and skill training for traditional artisans and craftspeople. Subsidized loans at 5% interest.", slug: "pm-vishwakarma" },
  { title: "Sukanya Samriddhi Yojana", benefit: "8.2% interest rate", category: "Savings", description: "Government savings scheme for girl child with high interest rate and tax benefits under Section 80C.", slug: "sukanya-samriddhi" },
  { title: "PM Ujjwala Yojana", benefit: "Free LPG connection", category: "Energy", description: "Free LPG connections and subsidized refills for women from BPL households. Over 10 crore beneficiaries.", slug: "pm-ujjwala" },
  { title: "PM Fasal Bima Yojana", benefit: "Crop insurance cover", category: "Agriculture", description: "Comprehensive crop insurance at minimal premium (2% Kharif, 1.5% Rabi) covering natural calamities and pest attacks.", slug: "fasal-bima" },
  { title: "PM Jan Dhan Yojana", benefit: "Zero balance account", category: "Banking", description: "Financial inclusion through zero balance bank accounts with RuPay debit card and Rs 2 lakh accident cover.", slug: "jan-dhan" },
  { title: "National Pension System (NPS)", benefit: "Tax-free retirement corpus", category: "Pension", description: "Voluntary retirement savings scheme with market-linked returns. Additional Rs 50,000 tax deduction under 80CCD(1B).", slug: "nps" },
];

export default function SchemesPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Government Schemes</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">Government Schemes 2025</h1>
        <p className="text-gray-600 text-lg mb-8 max-w-3xl">
          Complete directory of central government schemes with eligibility criteria, benefits, and application process. Updated for 2025.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {schemes.slice(0, 6).map((scheme) => (
            <Link key={scheme.slug} href={`/schemes/${scheme.slug}`} className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-blue-700 bg-blue-50 px-2 py-1 rounded">{scheme.category}</span>
                <span className="text-sm font-semibold text-green-700">{scheme.benefit}</span>
              </div>
              <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">{scheme.title}</h2>
              <p className="text-sm text-gray-600">{scheme.description}</p>
            </Link>
          ))}
        </div>

        <AdUnit />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {schemes.slice(6).map((scheme) => (
            <Link key={scheme.slug} href={`/schemes/${scheme.slug}`} className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-blue-700 bg-blue-50 px-2 py-1 rounded">{scheme.category}</span>
                <span className="text-sm font-semibold text-green-700">{scheme.benefit}</span>
              </div>
              <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">{scheme.title}</h2>
              <p className="text-sm text-gray-600">{scheme.description}</p>
            </Link>
          ))}
        </div>

        <AdUnit />
      </div>
    </div>
  );
}
