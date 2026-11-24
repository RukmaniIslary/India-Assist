import Link from "next/link";
import type { Metadata } from "next";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "Home Loan Interest Rates 2025 - Compare & Apply Online",
  description: "Compare home loan interest rates from SBI, HDFC, ICICI and Bank of Baroda. Check eligibility, documents, EMI calculator and apply online for lowest rates.",
};

export default function HomeLoanPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/loans" className="hover:text-blue-700">Loans</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Home Loan</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">Home Loan Interest Rates 2025</h1>
        <p className="text-gray-600 text-lg mb-8 max-w-3xl">
          Compare home loan interest rates from leading Indian banks. Find the best rate for property purchase, construction, or renovation with tenure up to 30 years.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Bank-wise Interest Rates</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900 border-b border-gray-200">Bank</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900 border-b border-gray-200">Interest Rate (p.a.)</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900 border-b border-gray-200">Processing Fee</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900 border-b border-gray-200">Max Tenure</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 text-gray-900 font-medium">State Bank of India (SBI)</td>
                  <td className="px-6 py-4 text-green-700 font-semibold">8.50%</td>
                  <td className="px-6 py-4 text-gray-600">0.35% of loan amount</td>
                  <td className="px-6 py-4 text-gray-600">30 years</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 text-gray-900 font-medium">HDFC Bank</td>
                  <td className="px-6 py-4 text-green-700 font-semibold">8.75%</td>
                  <td className="px-6 py-4 text-gray-600">0.50% or Rs 3,000</td>
                  <td className="px-6 py-4 text-gray-600">30 years</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 text-gray-900 font-medium">ICICI Bank</td>
                  <td className="px-6 py-4 text-green-700 font-semibold">8.75%</td>
                  <td className="px-6 py-4 text-gray-600">0.50% of loan amount</td>
                  <td className="px-6 py-4 text-gray-600">30 years</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900 font-medium">Bank of Baroda</td>
                  <td className="px-6 py-4 text-green-700 font-semibold">8.40%</td>
                  <td className="px-6 py-4 text-gray-600">0.25% - 0.50%</td>
                  <td className="px-6 py-4 text-gray-600">30 years</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <AdUnit />

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types of Home Loan Interest Rates</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fixed Rate</h3>
              <p className="text-gray-600">Interest rate remains constant throughout the loan tenure. EMI does not change regardless of market conditions. Typically 0.5% - 1% higher than floating rate. Best suited for those who prefer certainty in monthly outflows.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Floating Rate</h3>
              <p className="text-gray-600">Interest rate varies with the bank&apos;s benchmark lending rate (repo rate linked). EMI may increase or decrease over time. Generally lower starting rate than fixed. Most borrowers in India opt for floating rate home loans.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Eligibility Criteria</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>Age: 21 to 65 years (at loan maturity)</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>Minimum income: Rs 25,000 per month (salaried) or Rs 3 lakh annual profit (self-employed)</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>Employment: Minimum 2 years of work experience (salaried) or 3 years in business (self-employed)</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>CIBIL Score: 700 or above for best rates</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>Property should be approved by the bank or from an approved builder</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>Loan-to-Value (LTV): Up to 90% for loans below Rs 30 lakh, 80% for loans between Rs 30-75 lakh</li>
            </ul>
          </div>
        </section>

        <AdUnit />

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Documents Required</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Identity and Address</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>- PAN Card</li>
                  <li>- Aadhaar Card</li>
                  <li>- Passport / Voter ID / Driving Licence</li>
                  <li>- Current address proof (utility bill / rent agreement)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Income Proof</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>- Salary slips (last 3 months)</li>
                  <li>- Bank statements (last 6 months)</li>
                  <li>- Form 16 / ITR (last 2 years)</li>
                  <li>- Business proof (self-employed): GST registration, ITR, P&L statement</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Property Documents</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>- Sale agreement / allotment letter</li>
                  <li>- Title deed and chain of documents</li>
                  <li>- Approved building plan</li>
                  <li>- No Objection Certificate (NOC) from society</li>
                  <li>- Property tax receipts</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Other</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>- Passport size photographs</li>
                  <li>- Existing loan statements (if any)</li>
                  <li>- Processing fee cheque</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">EMI Example</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <p className="text-gray-700 mb-4">For a home loan of Rs 50 lakh at 8.50% interest for 20 years:</p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-500">Monthly EMI</p>
                <p className="text-2xl font-bold text-gray-900">Rs 43,391</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-500">Total Interest</p>
                <p className="text-2xl font-bold text-gray-900">Rs 54.14 Lakh</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-500">Total Payment</p>
                <p className="text-2xl font-bold text-gray-900">Rs 1.04 Crore</p>
              </div>
            </div>
          </div>
        </section>

        <AdUnit />

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-2">What is the minimum down payment for a home loan?</h3>
              <p className="text-gray-600">For loans up to Rs 30 lakh, you need a minimum 10% down payment. For loans between Rs 30-75 lakh, the minimum is 20%. For loans above Rs 75 lakh, at least 25% down payment is required.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Can I prepay my home loan without penalty?</h3>
              <p className="text-gray-600">As per RBI guidelines, banks cannot charge prepayment or foreclosure penalty on floating rate home loans. Fixed rate loans may have prepayment charges of 2-3% of the outstanding amount.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-2">What tax benefits are available on home loans?</h3>
              <p className="text-gray-600">Under Section 80C, you can claim up to Rs 1.5 lakh deduction on principal repayment. Under Section 24(b), up to Rs 2 lakh deduction is available on interest paid for self-occupied property. First-time buyers get additional Rs 1.5 lakh under Section 80EEA for affordable housing.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-2">How long does home loan approval take?</h3>
              <p className="text-gray-600">Typically 7-15 working days from document submission. This includes credit appraisal, property valuation, legal verification, and final sanction. Some banks offer in-principle approval within 48 hours.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
