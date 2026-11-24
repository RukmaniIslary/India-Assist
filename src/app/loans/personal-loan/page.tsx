import Link from "next/link";
import type { Metadata } from "next";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "Personal Loan 2025 - Interest Rates, Eligibility & Apply",
  description: "Compare personal loan interest rates from HDFC, ICICI, Axis and Kotak. Check eligibility, CIBIL score requirements, documents needed and EMI calculator.",
};

export default function PersonalLoanPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/loans" className="hover:text-blue-700">Loans</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Personal Loan</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">Personal Loan Interest Rates 2025</h1>
        <p className="text-gray-600 text-lg mb-8 max-w-3xl">
          Compare personal loan rates from top banks. Unsecured loans with no collateral, quick disbursement in 24-48 hours, and flexible tenure options.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Interest Rate Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900 border-b border-gray-200">Bank</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900 border-b border-gray-200">Interest Rate (p.a.)</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900 border-b border-gray-200">Max Amount</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900 border-b border-gray-200">Max Tenure</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 text-gray-900 font-medium">HDFC Bank</td>
                  <td className="px-6 py-4 text-green-700 font-semibold">10.50%</td>
                  <td className="px-6 py-4 text-gray-600">Rs 40 Lakh</td>
                  <td className="px-6 py-4 text-gray-600">5 years</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 text-gray-900 font-medium">ICICI Bank</td>
                  <td className="px-6 py-4 text-green-700 font-semibold">10.75%</td>
                  <td className="px-6 py-4 text-gray-600">Rs 50 Lakh</td>
                  <td className="px-6 py-4 text-gray-600">5 years</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 text-gray-900 font-medium">Axis Bank</td>
                  <td className="px-6 py-4 text-green-700 font-semibold">10.49%</td>
                  <td className="px-6 py-4 text-gray-600">Rs 40 Lakh</td>
                  <td className="px-6 py-4 text-gray-600">5 years</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900 font-medium">Kotak Mahindra Bank</td>
                  <td className="px-6 py-4 text-green-700 font-semibold">10.99%</td>
                  <td className="px-6 py-4 text-gray-600">Rs 40 Lakh</td>
                  <td className="px-6 py-4 text-gray-600">5 years</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <AdUnit />

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Eligibility Criteria</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>Age: 21 to 60 years</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>Minimum monthly income: Rs 25,000 (metro cities) or Rs 20,000 (non-metro)</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>CIBIL Score: 750+ recommended for best rates (minimum 700 for approval)</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>Employment: Minimum 1 year in current company, 2 years total experience</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>Self-employed: Minimum 3 years in business with stable income</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>Existing EMI obligations should not exceed 50% of monthly income (FOIR)</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Documents Required</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Salaried Individuals</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>- PAN Card and Aadhaar Card</li>
                  <li>- Salary slips (last 3 months)</li>
                  <li>- Bank statements (last 6 months)</li>
                  <li>- Form 16 or ITR</li>
                  <li>- Employment ID or offer letter</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Self-Employed</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>- PAN Card and Aadhaar Card</li>
                  <li>- ITR (last 2 years)</li>
                  <li>- Bank statements (last 12 months)</li>
                  <li>- Business registration / GST certificate</li>
                  <li>- Profit and Loss statement, Balance Sheet</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <AdUnit />

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">EMI Table</h2>
          <p className="text-gray-600 mb-4">Monthly EMI for different loan amounts at 10.5% interest rate:</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900 border-b border-gray-200">Loan Amount</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900 border-b border-gray-200">2 Years</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900 border-b border-gray-200">3 Years</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900 border-b border-gray-200">5 Years</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 text-gray-900 font-medium">Rs 1 Lakh</td>
                  <td className="px-6 py-4 text-gray-600">Rs 4,641</td>
                  <td className="px-6 py-4 text-gray-600">Rs 3,252</td>
                  <td className="px-6 py-4 text-gray-600">Rs 2,149</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 text-gray-900 font-medium">Rs 3 Lakh</td>
                  <td className="px-6 py-4 text-gray-600">Rs 13,923</td>
                  <td className="px-6 py-4 text-gray-600">Rs 9,756</td>
                  <td className="px-6 py-4 text-gray-600">Rs 6,447</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 text-gray-900 font-medium">Rs 5 Lakh</td>
                  <td className="px-6 py-4 text-gray-600">Rs 23,205</td>
                  <td className="px-6 py-4 text-gray-600">Rs 16,260</td>
                  <td className="px-6 py-4 text-gray-600">Rs 10,745</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 text-gray-900 font-medium">Rs 10 Lakh</td>
                  <td className="px-6 py-4 text-gray-600">Rs 46,410</td>
                  <td className="px-6 py-4 text-gray-600">Rs 32,520</td>
                  <td className="px-6 py-4 text-gray-600">Rs 21,490</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900 font-medium">Rs 20 Lakh</td>
                  <td className="px-6 py-4 text-gray-600">Rs 92,820</td>
                  <td className="px-6 py-4 text-gray-600">Rs 65,040</td>
                  <td className="px-6 py-4 text-gray-600">Rs 42,980</td>
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
