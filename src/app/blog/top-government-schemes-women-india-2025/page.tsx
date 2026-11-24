import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, Clock, ArrowLeft, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Top 5 Government Schemes for Women in India 2025",
  description: "Complete guide to the five most impactful government schemes for women in India — Sukanya Samriddhi, PM Ujjwala, Mahila Samman, E-Shram, and Pradhan Mantri Matru Vandana.",
  alternates: { canonical: "https://indiaassist.online/blog/top-government-schemes-women-india-2025" },
  openGraph: {
    title: "Top 5 Government Schemes for Women in India 2025",
    description: "Sukanya Samriddhi, PM Ujjwala, Mahila Samman Savings, Matru Vandana — full eligibility and application details for India's top women welfare schemes.",
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
          <span className="text-gray-900 font-medium">Women Schemes 2025</span>
        </nav>
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-blue-700 hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
        <div className="mb-4">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-100 text-green-800">Government Schemes</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Top 5 Government Schemes for Women in India 2025
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 pb-6 border-b border-gray-200">
          <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 27, 2025</span>
          <span className="flex items-center gap-1"><Clock className="w-4 h-4" />8 min read</span>
        </div>

        <div className="prose-article">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The Indian government runs dozens of schemes specifically designed to empower women financially, support mothers, provide energy access, and secure girls' futures. This guide covers five of the most impactful ones — with full eligibility criteria, benefit amounts, and application steps.
          </p>

          {[
            {
              n: "1",
              title: "Sukanya Samriddhi Yojana (SSY)",
              badge: "For Girl Child",
              badgeColor: "bg-pink-100 text-pink-800",
              interest: "8.2% per annum",
              who: "Parents or legal guardians of a girl child aged 0–10 years",
              benefit: "8.2% interest, EEE tax exemption, Rs 1.5 lakh/year maximum deposit",
              paras: [
                "Sukanya Samriddhi Yojana is India's highest-interest government savings scheme, specifically designed for the girl child. The account earns 8.2% per annum (as of Q1 FY2025–26), is backed by the Government of India, and qualifies for full EEE tax exemption — just like PPF but at a higher rate.",
                "The account matures when the girl turns 21, though partial withdrawals are allowed from age 18 (up to 50% of balance) for higher education. Up to two accounts can be opened — one for each girl child (exceptions for twins).",
                "Minimum deposit: Rs 250/year. Maximum: Rs 1.5 lakh/year. If Rs 1.5 lakh is invested every year from birth to age 15 (you must deposit for 15 years), the corpus at maturity (age 21) is approximately Rs 69 lakh at 8.2% — entirely tax-free.",
              ],
              apply: "Open an SSY account at any post office or authorised bank branch. Required documents: birth certificate of the girl, Aadhaar and PAN of parent/guardian.",
              link: "https://www.indiapost.gov.in/Financial/pages/content/sukanyasamriddhiaccount.aspx",
            },
            {
              n: "2",
              title: "PM Ujjwala Yojana (PMUY)",
              badge: "Free LPG Connection",
              badgeColor: "bg-orange-100 text-orange-800",
              interest: "Free deposit-free LPG connection",
              who: "Women from BPL / SC-ST / PM Awas Yojana / Antyodaya Anna Yojana households",
              benefit: "Free LPG connection, subsidised refills, free gas stove",
              paras: [
                "Pradhan Mantri Ujjwala Yojana was launched in 2016 to replace cooking over biomass fuel — wood, cow dung, crop residue — which causes severe indoor air pollution and significant health problems, particularly for women who do most of the cooking.",
                "Under PMUY Phase 2 (Ujjwala 2.0), eligible women get a free deposit-free LPG connection with a free first refill and a free gas stove. The connection is in the woman's name, which also improves her financial inclusion.",
                "Over 9 crore connections have been issued since 2016. As of 2025, subsidy on refills is deposited directly to the beneficiary's bank account under DBT.",
              ],
              apply: "Visit the nearest LPG distributor with your Aadhaar card and BPL/ration card. Fill Form KYC-5 (available at the distributor). You can also apply online at pmuy.gov.in.",
              link: "https://www.pmuy.gov.in",
            },
            {
              n: "3",
              title: "Pradhan Mantri Matru Vandana Yojana (PMMVY)",
              badge: "Maternity Benefit",
              badgeColor: "bg-blue-100 text-blue-800",
              interest: "Rs 5,000 cash benefit",
              who: "Pregnant and lactating women for first live birth (second child if girl)",
              benefit: "Rs 5,000 in installments for first child; Rs 6,000 for second child if girl",
              paras: [
                "PMMVY is a maternity benefit programme under which eligible women receive Rs 5,000 as a cash incentive for their first living child. For the second child, if it is a girl, the benefit is Rs 6,000 — given in a single installment.",
                "The Rs 5,000 for the first child is paid in three installments: Rs 1,000 on early pregnancy registration, Rs 2,000 after six months, and Rs 2,000 after birth and first round of vaccinations.",
                "The objective is to compensate for wage loss during pregnancy and promote better nutrition and health practices. The benefit is deposited directly to the beneficiary's bank account via DBT.",
              ],
              apply: "Register at the nearest Anganwadi centre or ASHA worker. Required documents: Aadhaar, bank account passbook, MCP card (Mother and Child Protection), and proof of marriage. Applications can also be made via the Poshan Tracker app.",
              link: "https://pmmvy.wcd.gov.in",
            },
            {
              n: "4",
              title: "Mahila Samman Savings Certificate",
              badge: "Savings Scheme",
              badgeColor: "bg-teal-100 text-teal-800",
              interest: "7.5% per annum",
              who: "Any woman or girl (parent/guardian can open for minor girl)",
              benefit: "7.5% guaranteed return, Rs 2 lakh maximum per account",
              paras: [
                "Announced in the Union Budget 2023, the Mahila Samman Savings Certificate is a one-time, two-year savings scheme offering a guaranteed 7.5% per annum return. Available from April 2023 to March 2025, accounts opened before March 2025 earn 7.5% for their full 2-year tenure.",
                "Up to Rs 2 lakh can be deposited per account, with partial withdrawal allowed after one year (up to 40% of the balance). The scheme is available at post offices across India.",
                "At Rs 2 lakh deposited, the maturity value after 2 years is approximately Rs 2 lakh 32 thousand — a guaranteed, risk-free return better than most short-term bank FDs.",
              ],
              apply: "Visit any post office and fill the MSSC application form. Required documents: Aadhaar card and PAN card (for deposits above Rs 50,000). Note: New account openings were available until March 2025.",
              link: "https://www.indiapost.gov.in",
            },
            {
              n: "5",
              title: "E-Shram Card for Women Workers",
              badge: "Unorganised Sector",
              badgeColor: "bg-purple-100 text-purple-800",
              interest: "Rs 2 Lakh accidental insurance",
              who: "Women workers in the unorganised sector (domestic workers, construction, agriculture, home-based work, etc.)",
              benefit: "Rs 2 lakh accidental death/disability insurance, portal for future DBT benefits",
              paras: [
                "The E-Shram portal registers workers in India's unorganised sector and provides them with a Universal Account Number (UAN). Over 29 crore workers are registered, a large proportion of whom are women — particularly domestic workers, home-based workers, street vendors, and agricultural labourers.",
                "Upon registration, workers automatically get Rs 2 lakh insurance under PM Suraksha Bima Yojana for accidental death and permanent disability, and Rs 1 lakh for partial disability — at no cost to the worker.",
                "More importantly, the E-Shram database is being used by the government to target future welfare transfers directly to unorganised workers. Workers registered on E-Shram receive priority access to new schemes announced for this sector.",
              ],
              apply: "Register for free at eshram.gov.in or through the nearest CSC. Required: Aadhaar card, Aadhaar-linked mobile number, bank account details. The entire process takes about 5 minutes online.",
              link: "https://eshram.gov.in",
            },
          ].map(({ n, title, badge, badgeColor, who, benefit, paras, apply, link }) => (
            <div key={n} className="mb-10">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">{n}</span>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${badgeColor}`}>{badge}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500">Who is eligible</p>
                  <p className="text-sm text-gray-900 font-medium mt-1">{who}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500">Key benefit</p>
                  <p className="text-sm text-gray-900 font-medium mt-1">{benefit}</p>
                </div>
              </div>

              {paras.map((p, i) => (
                <p key={i} className="text-gray-700 leading-relaxed mb-3 text-sm">{p}</p>
              ))}

              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-2">
                <p className="font-semibold text-green-900 text-sm mb-1">How to apply</p>
                <p className="text-green-800 text-sm">{apply}</p>
              </div>
              <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-blue-700 hover:underline">
                Official Portal <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
            <p className="font-semibold text-blue-900 mb-2">Not sure which schemes you qualify for?</p>
            <p className="text-blue-800 text-sm mb-3">Use our eligibility checker to find all central and state government schemes available to you based on your profile.</p>
            <Link href="/eligibility" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-700 text-white text-sm font-medium rounded-lg hover:bg-blue-800 transition-colors">
              Check Your Eligibility
            </Link>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4">Related Guides</h3>
            <div className="space-y-2">
              <Link href="/schemes/sukanya-samriddhi" className="block text-blue-700 hover:underline text-sm">Sukanya Samriddhi Yojana – Full Details</Link>
              <Link href="/schemes/e-shram" className="block text-blue-700 hover:underline text-sm">E-Shram Card – Register and Benefits</Link>
              <Link href="/calculators/ppf" className="block text-blue-700 hover:underline text-sm">PPF Calculator – Compare with Sukanya Samriddhi</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
