import Link from "next/link";
import type { Metadata } from "next";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "Business Loan 2025 - MSME Rates, Mudra & Apply Online",
  description: "Complete guide to business loans for MSMEs in India. Learn about Mudra Yojana, Stand Up India, CGTMSE scheme, bank rates and how to apply online.",
};

export default function BusinessLoanPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/loans" className="hover:text-blue-700">Loans</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Business Loan</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">Business Loan for MSMEs - 2025 Guide</h1>
        <p className="text-gray-600 text-lg mb-8 max-w-3xl">
          Access working capital, equipment financing, and expansion loans for your business. Explore government-backed schemes and bank rates for MSMEs.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pradhan Mantri Mudra Yojana (PMMY)</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <p className="text-gray-700 mb-4">Collateral-free loans up to Rs 10 lakh for micro and small enterprises. Available at all public sector banks, private banks, and NBFCs.</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-1">Shishu</h3>
                <p className="text-gray-600 text-sm">Loan up to Rs 50,000</p>
                <p className="text-gray-500 text-xs mt-1">For startups and new businesses</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-1">Kishore</h3>
                <p className="text-gray-600 text-sm">Rs 50,001 to Rs 5 Lakh</p>
                <p className="text-gray-500 text-xs mt-1">For growing businesses</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-1">Tarun</h3>
                <p className="text-gray-600 text-sm">Rs 5 Lakh to Rs 10 Lakh</p>
                <p className="text-gray-500 text-xs mt-1">For established enterprises</p>
              </div>
            </div>
          </div>
        </section>

        <AdUnit />

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Stand Up India Scheme</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <p className="text-gray-700 mb-3">Loans between Rs 10 lakh and Rs 1 crore for SC/ST and women entrepreneurs to set up greenfield enterprises.</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>Beneficiary: SC/ST and/or women entrepreneurs (at least 51% shareholding)</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>Purpose: Greenfield enterprise in manufacturing, services, or trading sector</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>Repayment: Up to 7 years with moratorium of 18 months</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>Each bank branch must provide at least 1 SC/ST and 1 woman borrower</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">CGTMSE Scheme</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <p className="text-gray-700 mb-3">Credit Guarantee Fund Trust for Micro and Small Enterprises provides collateral-free loans up to Rs 5 crore:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>Guarantee cover: Up to 85% of loan amount (up to Rs 5 lakh)</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>No collateral or third-party guarantee required</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>Available for both new and existing MSMEs</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>Annual guarantee fee: 1% to 2% of the sanctioned amount</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>Covers term loans and working capital</li>
            </ul>
          </div>
        </section>

        <AdUnit />

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Bank-wise Business Loan Rates</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900 border-b border-gray-200">Bank / NBFC</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900 border-b border-gray-200">Interest Rate</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900 border-b border-gray-200">Max Amount</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900 border-b border-gray-200">Tenure</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 text-gray-900 font-medium">SBI</td>
                  <td className="px-6 py-4 text-green-700 font-semibold">14.0% onwards</td>
                  <td className="px-6 py-4 text-gray-600">Rs 5 Crore</td>
                  <td className="px-6 py-4 text-gray-600">5 years</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 text-gray-900 font-medium">HDFC Bank</td>
                  <td className="px-6 py-4 text-green-700 font-semibold">15.0% onwards</td>
                  <td className="px-6 py-4 text-gray-600">Rs 50 Lakh</td>
                  <td className="px-6 py-4 text-gray-600">4 years</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 text-gray-900 font-medium">ICICI Bank</td>
                  <td className="px-6 py-4 text-green-700 font-semibold">16.0% onwards</td>
                  <td className="px-6 py-4 text-gray-600">Rs 2 Crore</td>
                  <td className="px-6 py-4 text-gray-600">5 years</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 text-gray-900 font-medium">Kotak Mahindra Bank</td>
                  <td className="px-6 py-4 text-green-700 font-semibold">16.0% onwards</td>
                  <td className="px-6 py-4 text-gray-600">Rs 75 Lakh</td>
                  <td className="px-6 py-4 text-gray-600">4 years</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900 font-medium">Lendingkart</td>
                  <td className="px-6 py-4 text-green-700 font-semibold">18.0% onwards</td>
                  <td className="px-6 py-4 text-gray-600">Rs 2 Crore</td>
                  <td className="px-6 py-4 text-gray-600">3 years</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <AdUnit />
      </div>
    </div>
  );
}
