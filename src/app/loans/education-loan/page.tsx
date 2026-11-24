import Link from "next/link";
import type { Metadata } from "next";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "Education Loan 2025 - Rates, Banks & Application Guide",
  description: "Complete guide to education loans in India. Compare SBI Scholar Loan, BOB education loan rates. Learn about collateral rules, moratorium period, and Vidyalakshmi portal.",
};

export default function EducationLoanPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/loans" className="hover:text-blue-700">Loans</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Education Loan</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">Education Loan Guide 2025</h1>
        <p className="text-gray-600 text-lg mb-8 max-w-3xl">
          Finance your higher education in India or abroad. Compare bank rates, understand collateral requirements, moratorium periods, and government interest subsidies.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Education Loan for Study in India</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>Loan amount: Up to Rs 10 lakh (without collateral for most banks)</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>Interest rate: 8.15% to 11.5% per annum</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>Covers: Tuition fees, hostel, books, lab fees, examination fees</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>Eligible courses: Engineering, Medical, MBA, Law, and other professional degrees from recognized institutions</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>Repayment: Starts after course completion + 6-12 months moratorium</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Education Loan for Study Abroad</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>Loan amount: Up to Rs 1.5 Crore (varies by bank and country)</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>Interest rate: 9.5% to 13.5% per annum</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>Covers: Tuition, living expenses, travel, health insurance, caution deposit</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>Collateral required for loans above Rs 7.5 lakh (property, FD, insurance policy)</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>Co-applicant (parent/guardian) mandatory</li>
            </ul>
          </div>
        </section>

        <AdUnit />

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Bank-wise Education Loan Schemes</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">SBI Scholar Loan</h3>
              <p className="text-gray-600 mb-2">For premier institutions (IIT, IIM, NIT, AIIMS). Up to Rs 40 lakh without collateral. Interest rate from 8.15%. No processing fee. Concession of 0.50% for girl students.</p>
              <p className="text-sm text-gray-500">Eligible institutions: IITs, IIMs, NITs, AIIMS, IISc, BITS Pilani, and other Tier-1 colleges</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Bank of Baroda Education Loan</h3>
              <p className="text-gray-600 mb-2">Baroda Scholar scheme for studies in India (up to Rs 10 lakh) and abroad (up to Rs 60 lakh). Interest from 8.40%. Processing fee: Rs 1,000 to Rs 10,000.</p>
              <p className="text-sm text-gray-500">0.50% concession for girl students. Flexible repayment up to 15 years after moratorium.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">HDFC Credila</h3>
              <p className="text-gray-600 mb-2">Specialized education loan NBFC. Loans up to Rs 45 lakh for India and unlimited for abroad. Interest from 9.5%. Covers 100% of expenses including GRE/GMAT coaching.</p>
              <p className="text-sm text-gray-500">Quick processing in 4-7 days. Covers 950+ universities across 35+ countries.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Collateral Requirements</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Below Rs 7.5 Lakh</h3>
                <p className="text-gray-600">No collateral or third-party guarantee required. Only co-applicant (parent/guardian) needed. Available at all nationalized banks.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Above Rs 7.5 Lakh</h3>
                <p className="text-gray-600">Collateral security required. Acceptable collateral includes residential property, fixed deposits, LIC policies, gold, or government securities. Collateral value should be equal to or greater than the loan amount.</p>
              </div>
            </div>
          </div>
        </section>

        <AdUnit />

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Moratorium Period</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <p className="text-gray-700 mb-3">The moratorium period is the time during which no repayment is required. It includes:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>Course duration (typically 2-5 years)</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>Plus 6 to 12 months after course completion or 6 months after getting a job (whichever is earlier)</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>Interest accrues during moratorium (simple interest during study period at most banks)</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>Paying interest during moratorium significantly reduces total repayment burden</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Interest Subsidy - Vidyalakshmi Portal</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <p className="text-gray-700 mb-3">The Central Government provides interest subsidy for economically weaker sections under the Central Sector Interest Subsidy Scheme (CSIS):</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>Full interest subsidy during moratorium period for families with annual income below Rs 4.5 lakh</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>Apply through Vidyalakshmi portal (www.vidyalakshmi.co.in)</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>Available for technical and professional courses from recognized institutions</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>Subsidy available only once per student for a single course</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>The portal also allows comparing and applying to multiple banks through a single form</li>
            </ul>
          </div>
        </section>

        <AdUnit />
      </div>
    </div>
  );
}
