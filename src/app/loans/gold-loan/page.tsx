import Link from "next/link";
import type { Metadata } from "next";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "Gold Loan Interest Rates 2025 - Compare Muthoot, SBI, HDFC",
  description: "Compare gold loan interest rates from Muthoot Finance, Manappuram, SBI and HDFC. Check LTV ratio, per gram rate, repayment options and apply online.",
};

export default function GoldLoanPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/loans" className="hover:text-blue-700">Loans</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Gold Loan</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">Gold Loan Interest Rates 2025</h1>
        <p className="text-gray-600 text-lg mb-8 max-w-3xl">
          Get instant funds against your gold jewellery. Compare rates from top lenders, understand LTV ratios, and choose the best repayment option for your needs.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Interest Rate Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900 border-b border-gray-200">Lender</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900 border-b border-gray-200">Interest Rate (p.a.)</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900 border-b border-gray-200">LTV Ratio</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900 border-b border-gray-200">Min Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 text-gray-900 font-medium">Muthoot Finance</td>
                  <td className="px-6 py-4 text-green-700 font-semibold">7.0%</td>
                  <td className="px-6 py-4 text-gray-600">75%</td>
                  <td className="px-6 py-4 text-gray-600">Rs 1,500</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 text-gray-900 font-medium">Manappuram Finance</td>
                  <td className="px-6 py-4 text-green-700 font-semibold">7.5%</td>
                  <td className="px-6 py-4 text-gray-600">75%</td>
                  <td className="px-6 py-4 text-gray-600">Rs 1,000</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 text-gray-900 font-medium">SBI</td>
                  <td className="px-6 py-4 text-green-700 font-semibold">7.5%</td>
                  <td className="px-6 py-4 text-gray-600">75%</td>
                  <td className="px-6 py-4 text-gray-600">Rs 20,000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900 font-medium">HDFC Bank</td>
                  <td className="px-6 py-4 text-green-700 font-semibold">8.5%</td>
                  <td className="px-6 py-4 text-gray-600">75%</td>
                  <td className="px-6 py-4 text-gray-600">Rs 25,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <AdUnit />

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">LTV Ratio and Per Gram Rate</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <p className="text-gray-700 mb-4">As per RBI guidelines, the maximum Loan-to-Value (LTV) ratio for gold loans is 75%. This means you can get a loan up to 75% of the gold&apos;s market value.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">How Per Gram Rate Works</h3>
                <p className="text-gray-600 text-sm">Banks assess gold at the current market price per gram of 22-carat gold. The loan amount is calculated as 75% of (weight in grams x per gram rate). Only the gold content is valued - making charges and stone weight are excluded.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Example Calculation</h3>
                <p className="text-gray-600 text-sm">If gold price is Rs 6,000 per gram and you pledge 50 grams of 22-carat gold: Value = 50 x Rs 6,000 = Rs 3,00,000. Maximum loan at 75% LTV = Rs 2,25,000.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Repayment Options</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="space-y-4">
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-semibold text-gray-900 mb-1">Regular EMI</h3>
                <p className="text-gray-600 text-sm">Pay fixed monthly installments covering both principal and interest. Best for salaried individuals with steady income.</p>
              </div>
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-semibold text-gray-900 mb-1">Interest-Only (Monthly)</h3>
                <p className="text-gray-600 text-sm">Pay only interest every month. Repay principal as lump sum at the end of tenure. Lowest monthly outflow option.</p>
              </div>
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-semibold text-gray-900 mb-1">Bullet Repayment</h3>
                <p className="text-gray-600 text-sm">Pay entire principal plus accumulated interest at the end of tenure in a single payment. Suitable for short-term needs (3-6 months).</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Overdraft Facility</h3>
                <p className="text-gray-600 text-sm">Get a credit limit against gold. Pay interest only on the amount utilized. Flexible withdrawals and repayments. Ideal for business working capital.</p>
              </div>
            </div>
          </div>
        </section>

        <AdUnit />

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-1">Instant Disbursement</h3>
              <p className="text-gray-600 text-sm">Loan disbursed within 30 minutes of gold appraisal and documentation.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-1">Minimal Documentation</h3>
              <p className="text-gray-600 text-sm">Only PAN card and Aadhaar required. No income proof needed.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-1">No Credit Score Check</h3>
              <p className="text-gray-600 text-sm">Since the loan is secured by gold, CIBIL score is not a factor in approval.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-1">Short Tenure</h3>
              <p className="text-gray-600 text-sm">Typically 3 months to 3 years. Can be renewed or topped up at maturity.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-1">Safe Custody</h3>
              <p className="text-gray-600 text-sm">Gold stored in insured bank lockers. Returned in same condition upon repayment.</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-1">No Prepayment Penalty</h3>
              <p className="text-gray-600 text-sm">Repay anytime without extra charges. Interest charged only for the period used.</p>
            </div>
          </div>
        </section>

        <AdUnit />
      </div>
    </div>
  );
}
