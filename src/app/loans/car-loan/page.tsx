import Link from "next/link";
import type { Metadata } from "next";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "Car Loan 2025 - Interest Rates & EMI Calculator",
  description: "Compare car loan interest rates from SBI, HDFC and ICICI. Check new vs used car rates, eligibility, LTV ratio and calculate your monthly EMI.",
};

export default function CarLoanPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/loans" className="hover:text-blue-700">Loans</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Car Loan</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">Car Loan Interest Rates 2025</h1>
        <p className="text-gray-600 text-lg mb-8 max-w-3xl">
          Finance your new or used car at competitive interest rates. Compare EMIs across banks, understand LTV ratios, and get pre-approved in minutes.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Interest Rate Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900 border-b border-gray-200">Bank</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900 border-b border-gray-200">New Car Rate</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900 border-b border-gray-200">Used Car Rate</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900 border-b border-gray-200">Max Tenure</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 text-gray-900 font-medium">SBI</td>
                  <td className="px-6 py-4 text-green-700 font-semibold">8.70%</td>
                  <td className="px-6 py-4 text-gray-600">9.50%</td>
                  <td className="px-6 py-4 text-gray-600">7 years</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 text-gray-900 font-medium">HDFC Bank</td>
                  <td className="px-6 py-4 text-green-700 font-semibold">8.75%</td>
                  <td className="px-6 py-4 text-gray-600">10.50%</td>
                  <td className="px-6 py-4 text-gray-600">7 years</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 text-gray-900 font-medium">ICICI Bank</td>
                  <td className="px-6 py-4 text-green-700 font-semibold">8.80%</td>
                  <td className="px-6 py-4 text-gray-600">10.75%</td>
                  <td className="px-6 py-4 text-gray-600">7 years</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900 font-medium">Axis Bank</td>
                  <td className="px-6 py-4 text-green-700 font-semibold">8.90%</td>
                  <td className="px-6 py-4 text-gray-600">11.00%</td>
                  <td className="px-6 py-4 text-gray-600">5 years</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <AdUnit />

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">New Car vs Used Car Loan</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">New Car Loan</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>- Interest rate: 8.70% to 12% p.a.</li>
                <li>- LTV ratio: Up to 100% of ex-showroom price</li>
                <li>- Tenure: Up to 7 years</li>
                <li>- Processing fee: 0.5% to 1% of loan amount</li>
                <li>- Includes on-road price funding (insurance, registration, accessories)</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Used Car Loan</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>- Interest rate: 9.5% to 16% p.a.</li>
                <li>- LTV ratio: Up to 80% of car&apos;s current valuation</li>
                <li>- Tenure: Up to 5 years (car age + tenure should not exceed 10 years)</li>
                <li>- Car should not be older than 5-7 years at time of purchase</li>
                <li>- Vehicle valuation done by bank-appointed surveyor</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Eligibility Criteria</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>Age: 21 to 65 years</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>Minimum income: Rs 20,000 per month (salaried) or Rs 3 lakh annual (self-employed)</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>Employment: Minimum 1 year in current job or 2 years in business</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>CIBIL Score: 700+ preferred for competitive rates</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>Existing EMI obligations should not exceed 50-60% of income</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>Vehicle should be purchased from an authorized dealer (new car) or verified source (used car)</li>
            </ul>
          </div>
        </section>

        <AdUnit />

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">LTV Ratio Explained</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <p className="text-gray-700 mb-3">Loan-to-Value (LTV) ratio determines the maximum percentage of the car&apos;s value that a bank will finance:</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse mt-3">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left px-4 py-3 text-sm font-semibold text-gray-900 border-b border-gray-200">Category</th>
                    <th className="text-left px-4 py-3 text-sm font-semibold text-gray-900 border-b border-gray-200">LTV</th>
                    <th className="text-left px-4 py-3 text-sm font-semibold text-gray-900 border-b border-gray-200">Down Payment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 text-gray-900">New car (up to Rs 10 lakh)</td>
                    <td className="px-4 py-3 text-gray-600">Up to 100%</td>
                    <td className="px-4 py-3 text-gray-600">0%</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 text-gray-900">New car (above Rs 10 lakh)</td>
                    <td className="px-4 py-3 text-gray-600">Up to 90%</td>
                    <td className="px-4 py-3 text-gray-600">10%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-900">Used car</td>
                    <td className="px-4 py-3 text-gray-600">Up to 80%</td>
                    <td className="px-4 py-3 text-gray-600">20%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <AdUnit />
      </div>
    </div>
  );
}
