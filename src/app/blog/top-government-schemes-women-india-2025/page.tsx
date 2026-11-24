import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "5 Government Schemes for Women in India That Are Actually Worth Knowing",
  description: "Sukanya Samriddhi, PM Ujjwala, Mahila Samman, E-Shram, Matru Vandana — what each scheme gives you, who qualifies, and how to apply.",
  alternates: { canonical: "https://indiaassist.online/blog/top-government-schemes-women-india-2025" },
  openGraph: {
    title: "5 Government Schemes for Women in India That Are Actually Worth Knowing",
    description: "Practical guide to India's most useful women's welfare schemes — eligibility, benefit amounts, and application steps.",
    url: "https://indiaassist.online/blog/top-government-schemes-women-india-2025",
  },
};

export default function WomenSchemesPost() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-blue-700">Blog</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Women's Schemes</span>
        </nav>
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-blue-700 hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
        <div className="mb-4 flex items-center gap-3">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-100 text-green-800">Government Schemes</span>
          <span className="text-xs text-gray-400">Updated November 2026 · 8 min read</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-tight">
          5 Government Schemes for Women in India That Are Actually Worth Knowing
        </h1>

        <div className="prose-article">
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            There are dozens of central and state schemes with &quot;women&quot; in the name. Most of them are either very narrow in scope or only relevant in specific states. These five are the ones with the widest reach, the most meaningful benefits, and the least awareness among the families that actually qualify.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">1. Sukanya Samriddhi Yojana — for a daughter aged 10 or under</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            SSY is a savings account that earns 8.2% per annum, backed by the government, fully tax-free. You open it in your daughter's name before she turns 10, deposit between Rs 250 and Rs 1.5 lakh per year for 15 years, and the account matures when she turns 21.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            If you deposit Rs 1.5 lakh every year from birth, the corpus at age 21 is roughly Rs 69 lakh — entirely tax-free. The interest rate is higher than PPF (8.2% vs 7.1%), deposits qualify for Section 80C deduction, and the payout is completely exempt from tax.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            From age 18, the girl can withdraw up to 50% of the balance for higher education. The account matures at 21, or upon marriage after 18.
          </p>
          <p className="text-gray-700 text-sm text-gray-600 mb-5">
            <strong>How to open:</strong> Any post office or authorised bank branch. You need the girl's birth certificate and your Aadhaar and PAN. Online opening available through net banking at most banks.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">2. PM Ujjwala Yojana — free LPG connection for BPL households</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Before Ujjwala, over 10 crore households in India cooked on firewood, cow dung, or crop residue. The smoke from these is a serious health hazard, particularly for women who spend the most time cooking. Ujjwala launched in 2016 to change that.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Eligible women from BPL, SC/ST, PM Awas Yojana, or Antyodaya Anna Yojana households get a free LPG connection — no deposit, no connection fee — plus a free first refill and in many cases a free gas stove. The connection is in the woman's name, which also gives her a formal financial identity linked to a government record.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Subsidy on refills is deposited directly to the beneficiary's bank account under DBT. Over 9 crore connections have been issued since 2016.
          </p>
          <p className="text-gray-700 text-sm mb-5">
            <strong>How to apply:</strong> Visit the nearest LPG distributor with Aadhaar and BPL/ration card. Fill Form KYC-5. You can also apply at{" "}
            <a href="https://www.pmuy.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline inline-flex items-center gap-1">pmuy.gov.in <ExternalLink className="w-3 h-3" /></a>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">3. Pradhan Mantri Matru Vandana Yojana — Rs 5,000 for first-time mothers</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            PMMVY gives pregnant women Rs 5,000 for their first living child, paid in three installments tied to pregnancy registration, the 6-month mark, and the child's first round of vaccinations. For the second child, if it is a girl, the benefit is Rs 6,000 as a single payment.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            The idea is to compensate for income lost during pregnancy and to encourage better nutrition and health checkups. The money goes directly to the beneficiary's bank account.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            It is not a large amount, but it is free money that many eligible women don't collect simply because they don't know about it or don't complete the registration process in time.
          </p>
          <p className="text-gray-700 text-sm mb-5">
            <strong>How to register:</strong> Through the nearest Anganwadi worker, ASHA worker, or online via the Poshan Tracker app. Required documents: Aadhaar, bank account passbook, MCP card, marriage proof.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">4. E-Shram registration — Rs 2 lakh free insurance for unorganised workers</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            E-Shram is a national registry for workers in India's unorganised sector. Domestic workers, construction labourers, home-based workers, street vendors, agricultural workers — if you are not covered by ESIC or EPFO, this is for you. Women make up a large share of this workforce and many are unaware of the registration.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Registering takes about 5 minutes at eshram.gov.in or any CSC. You get a Universal Account Number (UAN) and automatic Rs 2 lakh accidental death and permanent disability insurance and Rs 1 lakh for partial disability — all completely free.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            The more important long-term benefit is that the E-Shram database is being used to identify workers for future DBT welfare transfers. Workers registered here will be first in line when new schemes for the unorganised sector are rolled out.
          </p>
          <p className="text-gray-700 text-sm mb-5">
            <strong>How to register:</strong> Online at eshram.gov.in or at any CSC. You need Aadhaar, Aadhaar-linked mobile number, and bank account details.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">5. Mahila Samman Savings Certificate — 7.5% guaranteed return</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            This is a 2-year savings scheme introduced in Budget 2023, available at post offices. It pays 7.5% per annum, which is better than most short-term bank FDs. Maximum deposit is Rs 2 lakh per account, and partial withdrawal of up to 40% is allowed after one year.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Any woman or girl (with a parent or guardian operating the account for a minor) can open one. New accounts were available to open until March 2025, but accounts opened before that date earn 7.5% for their full 2-year tenure.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            If you already have one, the maturity amount plus interest is paid at the end of 2 years — no TDS if the total interest is under the threshold, though it is taxable as income. At Rs 2 lakh deposited, you receive approximately Rs 2.32 lakh at maturity.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-8">
            <p className="text-green-900 font-semibold mb-2">Not sure which schemes you qualify for?</p>
            <p className="text-green-800 text-sm mb-3">Use the eligibility checker — answer 5 questions about your age, income, and occupation, and it shows you all the central schemes you likely qualify for.</p>
            <Link href="/eligibility" className="inline-flex items-center gap-2 px-4 py-2 bg-green-700 text-white text-sm font-medium rounded-lg hover:bg-green-800 transition-colors">
              Check eligibility
            </Link>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-200">
            <p className="text-sm font-semibold text-gray-700 mb-3">Related</p>
            <div className="space-y-2">
              <Link href="/schemes/sukanya-samriddhi" className="block text-blue-700 hover:underline text-sm">Sukanya Samriddhi Yojana — full scheme details</Link>
              <Link href="/schemes/e-shram" className="block text-blue-700 hover:underline text-sm">E-Shram card — how to register</Link>
              <Link href="/calculators/ppf" className="block text-blue-700 hover:underline text-sm">PPF vs Sukanya Samriddhi — returns calculator</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
