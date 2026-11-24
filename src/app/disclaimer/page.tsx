import Link from "next/link";
import type { Metadata } from "next";
import { AlertTriangle, Info, Calculator, Landmark, FileText, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Disclaimer | IndiaAssist",
  description: "Important disclaimer for IndiaAssist.online. All information is for educational purposes only. Calculator results are estimates. Always verify with official sources.",
  alternates: { canonical: "https://indiaassist.online/disclaimer" },
  robots: { index: true, follow: true },
};

export default function DisclaimerPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Disclaimer</span>
        </nav>

        {/* Header */}
        <div className="flex items-start gap-4 mb-8">
          <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
            <AlertTriangle className="w-6 h-6 text-amber-600" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Disclaimer</h1>
            <p className="text-sm text-gray-500">Last Updated: June 2025</p>
          </div>
        </div>

        {/* Top-level notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
          <p className="text-gray-800 font-medium leading-relaxed">
            All information, tools, calculators, and content on IndiaAssist.online are provided for <strong>general educational and informational purposes only</strong>. Nothing on this website constitutes professional financial advice, investment advice, legal advice, tax advice, or any other regulated professional service. Always verify important information through official sources and consult qualified professionals before making significant financial or legal decisions.
          </p>
        </div>

        <div className="space-y-8">

          {/* General Disclaimer */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Info className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">General Information Disclaimer</h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                IndiaAssist.online is an independent, privately operated informational website. We are not affiliated with, endorsed by, or a representative of the Government of India, the Reserve Bank of India (RBI), the Securities and Exchange Board of India (SEBI), the Insurance Regulatory and Development Authority of India (IRDAI), or any bank, financial institution, or government ministry.
              </p>
              <p>
                While our editorial team makes diligent efforts to ensure that the information published on this website is accurate and current at the time of publication, we cannot guarantee the absolute accuracy, completeness, or timeliness of any content. Financial laws, tax regulations, government scheme rules, and interest rates in India are subject to frequent revision by the relevant authorities. Information that was accurate on the date of publication may become outdated within days or weeks of a new government notification, RBI circular, or budget announcement.
              </p>
              <p>
                IndiaAssist.online expressly disclaims any liability for losses, damages, or adverse outcomes — financial or otherwise — that may arise, directly or indirectly, from reliance on any information, tool, or calculator result available on this website.
              </p>
            </div>
          </section>

          {/* Calculator Disclaimer */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Calculator className="w-5 h-5 text-green-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Calculator Results are Estimates Only</h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                The financial calculators on IndiaAssist.online — including but not limited to the EMI Calculator, SIP Calculator, PPF Calculator, FD Calculator, Home Loan EMI Calculator, Loan Eligibility Calculator, NPS Calculator, Income Tax Calculator, and Gratuity Calculator — are designed to provide <strong>indicative estimates</strong> to help you understand and plan your finances. They are not official calculation tools and their results should not be treated as binding or definitive.
              </p>
              <p>
                Calculator results are based on standard mathematical formulas and the specific input values you provide. In reality, the actual EMI, interest earned, tax liability, or maturity amount you experience will depend on a wide range of additional factors, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Loan processing fees and charges</strong> levied by your specific bank or NBFC, which our calculators do not factor in by default</li>
                <li><strong>Prepayment and foreclosure charges</strong> that can alter the effective cost of a loan</li>
                <li><strong>Floating vs. fixed interest rates</strong> — for loans with floating rates, the actual EMI may change if the benchmark rate (MCLR, repo rate) changes during the tenure</li>
                <li><strong>Tax surcharges and cess</strong> applicable to your income slab that may affect actual tax liability</li>
                <li><strong>Actual market returns</strong> for investment calculators — SIP and mutual fund projections assume a constant rate of return, which is never guaranteed in equity markets</li>
                <li><strong>Bank-specific calculation conventions</strong> — different banks may calculate interest on different reducing balance schedules</li>
              </ul>
              <p>
                Always request a detailed loan amortisation schedule or official illustration from your bank, financial institution, or insurance company before signing any financial agreement.
              </p>
            </div>
          </section>

          {/* Scheme Information Disclaimer */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-violet-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Landmark className="w-5 h-5 text-violet-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Government Scheme Information</h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                IndiaAssist.online maintains guides for a large number of central and state government schemes, including PM Kisan Samman Nidhi, Ayushman Bharat Pradhan Mantri Jan Arogya Yojana, PM Awas Yojana, E-Shram Card, PM Mudra Yojana, Sukanya Samriddhi Yojana, and many others. These guides are based on information published on official government websites and press releases at the time of writing.
              </p>
              <p>
                <strong>Government schemes are subject to frequent changes.</strong> Eligibility criteria, benefit amounts, application processes, required documents, official portals, and even scheme names may change due to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Union Budget announcements and Finance Ministry circulars</li>
                <li>State government modifications to centrally sponsored schemes</li>
                <li>Administrative changes to implementing agencies or verification processes</li>
                <li>New scheme launches that replace or merge existing schemes</li>
                <li>Court orders or policy reviews affecting eligibility</li>
              </ul>
              <p>
                The eligibility checker tools and scheme guides on IndiaAssist.online are meant to help you understand whether you <em>may</em> be broadly eligible for a scheme based on general criteria. A positive result from our eligibility checker does not guarantee that you will be approved or enrolled. Final eligibility determination is made solely by the implementing government authority.
              </p>
              <p>
                <strong>Before applying for any government scheme, always verify the latest eligibility criteria, required documents, and application process directly on the official scheme portal.</strong>
              </p>
            </div>
          </section>

          {/* Document Guides */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-teal-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Document and Process Guides</h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                The document application guides on IndiaAssist.online (covering PAN card, Aadhaar, passport, driving licence, voter ID, ration card, and other official documents) are provided for general informational purposes. Application procedures, fee structures, required documents, and processing times for government-issued documents are set by the respective issuing authorities — UIDAI, Income Tax Department, Ministry of External Affairs, Regional Transport Office, and Election Commission of India — and are subject to change without notice.
              </p>
              <p>
                Our guides are intended to give you a general overview of the typical process. The exact requirements for your specific application may differ depending on your state, the type of update or correction required, your citizenship status, and the current policy of the issuing authority. Always check the official portal of the relevant government department for the most current and legally binding information before submitting an application.
              </p>
            </div>
          </section>

          {/* Official Sources */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <ExternalLink className="w-5 h-5 text-red-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Always Verify with Official Sources</h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                For any financial or government-related decision, we strongly recommend verifying information directly on the relevant official portal. Key official sources for India include:
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mt-4">
                {[
                  { name: "National Portal of India", url: "https://india.gov.in" },
                  { name: "MyScheme Portal", url: "https://myscheme.gov.in" },
                  { name: "Reserve Bank of India", url: "https://rbi.org.in" },
                  { name: "SEBI – Securities Regulator", url: "https://sebi.gov.in" },
                  { name: "Income Tax Department", url: "https://incometax.gov.in" },
                  { name: "UIDAI – Aadhaar Authority", url: "https://uidai.gov.in" },
                ].map((source) => (
                  <a
                    key={source.url}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors text-sm text-blue-700 font-medium"
                  >
                    <ExternalLink className="w-4 h-4 flex-shrink-0" />
                    {source.name}
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* No Liability */}
          <section className="bg-red-50 border border-red-200 rounded-xl p-5">
            <h2 className="text-xl font-bold text-gray-900 mb-3">No Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              By using IndiaAssist.online, you acknowledge and agree that IndiaAssist.online, its owners, editors, authors, and contributors shall not be held liable for any financial loss, missed scheme benefits, loan rejection, tax penalty, document rejection, or any other adverse outcome that arises from reliance on information, calculator results, eligibility assessments, or guides available on this website. Use of this website is entirely at your own risk.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
