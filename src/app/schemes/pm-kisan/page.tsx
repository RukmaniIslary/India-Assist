import Link from "next/link";
import { Metadata } from "next";
import { Sprout, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "PM Kisan Samman Nidhi - Eligibility, Status, Installments",
  description: "Complete guide to PM Kisan Yojana. Check eligibility, beneficiary status, installment dates, required documents, and how to apply for Rs 6,000/year farmer income support.",
  keywords: "PM Kisan, PM Kisan status, farmer scheme, Rs 6000, kisan samman nidhi, agriculture scheme India, PM Kisan beneficiary list",
};

export default function PMKisanPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="text-sm text-gray-500 mb-3">
            <Link href="/" className="hover:text-blue-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/schemes" className="hover:text-blue-700">Schemes</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">PM Kisan</span>
          </nav>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <Sprout className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">PM Kisan Samman Nidhi</h1>
              <p className="text-gray-600 mt-0.5">Rs 6,000/year direct income support for eligible farmer families</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Overview */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">About PM Kisan Yojana</h2>
          <p className="text-gray-700 leading-relaxed mb-4">Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) is a central government scheme launched on 1st February 2019. Under this scheme, income support of Rs 6,000 per year is transferred directly to the bank accounts of eligible land-holding farmer families in three equal installments of Rs 2,000 each.</p>
          <p className="text-gray-700 leading-relaxed">The scheme is fully funded by the Government of India. As of 2025, over 11 crore farmer families have been registered, and more than Rs 2.8 lakh crore has been disbursed since inception.</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-green-700 text-white text-sm font-medium rounded-lg hover:bg-green-800 transition-colors">
              Official Portal <ExternalLink className="w-4 h-4" />
            </a>
            <a href="https://pmkisan.gov.in/BeneficiaryStatus.aspx" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-green-700 text-green-700 text-sm font-medium rounded-lg hover:bg-green-50 transition-colors">
              Check Beneficiary Status <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Installments Table */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Installment Schedule</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Installment</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Period</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Amount</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Release Month</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr><td className="py-3 px-4 text-gray-700">1st Installment</td><td className="py-3 px-4">April - July</td><td className="py-3 px-4 font-medium">Rs 2,000</td><td className="py-3 px-4">April-June</td></tr>
                <tr><td className="py-3 px-4 text-gray-700">2nd Installment</td><td className="py-3 px-4">August - November</td><td className="py-3 px-4 font-medium">Rs 2,000</td><td className="py-3 px-4">August-October</td></tr>
                <tr><td className="py-3 px-4 text-gray-700">3rd Installment</td><td className="py-3 px-4">December - March</td><td className="py-3 px-4 font-medium">Rs 2,000</td><td className="py-3 px-4">December-February</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">Total annual benefit: Rs 6,000 per family. Amount is credited directly to Aadhaar-linked bank account.</p>
        </div>

        {/* Eligibility */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Eligibility Criteria</h2>
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-800">Who is Eligible:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span><span>All land-holding farmer families (husband, wife, and minor children) with cultivable land</span></li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span><span>Small and marginal farmers (land holding up to 2 hectares) were initially eligible; now extended to all farmer families</span></li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span><span>Must have land records in state/UT land records database</span></li>
            </ul>

            <h3 className="font-semibold text-gray-800 mt-6">Who is NOT Eligible:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span><span>Institutional land holders</span></li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span><span>Present or former holders of constitutional posts (Ministers, MLAs, MPs, Mayors)</span></li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span><span>Current or retired government employees (including PSU) drawing pension of Rs 10,000+ per month</span></li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span><span>Income taxpayers in the last assessment year</span></li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span><span>Professionals like doctors, engineers, lawyers, CAs, architects registered with professional bodies</span></li>
            </ul>
          </div>
        </div>

        {/* How to Apply */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">How to Apply for PM Kisan</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0"><span className="text-sm font-bold text-green-700">1</span></div>
              <div><p className="font-medium text-gray-900">Visit the official portal</p><p className="text-sm text-gray-600">Go to pmkisan.gov.in and click on &quot;New Farmer Registration&quot;</p></div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0"><span className="text-sm font-bold text-green-700">2</span></div>
              <div><p className="font-medium text-gray-900">Enter Aadhaar number</p><p className="text-sm text-gray-600">Provide your Aadhaar number and select your state. Complete OTP verification.</p></div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0"><span className="text-sm font-bold text-green-700">3</span></div>
              <div><p className="font-medium text-gray-900">Fill registration form</p><p className="text-sm text-gray-600">Enter personal details, bank account (Aadhaar-linked), and land ownership details.</p></div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0"><span className="text-sm font-bold text-green-700">4</span></div>
              <div><p className="font-medium text-gray-900">Verification by state</p><p className="text-sm text-gray-600">State government verifies land records. Once approved, you start receiving installments.</p></div>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">You can also register offline through the Common Service Centre (CSC) in your village or at the local agriculture office.</p>
        </div>

        {/* Documents */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Required Documents</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span><span>Aadhaar card (mandatory for all new registrations)</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span><span>Aadhaar-linked bank account (for DBT transfer)</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span><span>Land ownership documents (Khasra/Khatauni or equivalent)</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span><span>Mobile number linked to Aadhaar</span></li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div><h3 className="font-medium text-gray-900 mb-1">How to check PM Kisan beneficiary status?</h3><p className="text-sm text-gray-600">Visit pmkisan.gov.in, click on &quot;Beneficiary Status&quot; and enter your Aadhaar number or registered mobile number. The portal shows all installments received and pending.</p></div>
            <div className="border-t border-gray-100 pt-4"><h3 className="font-medium text-gray-900 mb-1">When is the next PM Kisan installment?</h3><p className="text-sm text-gray-600">The 18th installment (Rs 2,000) for the October-January period is expected to be released in late 2025. Exact dates are announced by the Prime Minister. Check the portal for updates.</p></div>
            <div className="border-t border-gray-100 pt-4"><h3 className="font-medium text-gray-900 mb-1">My payment is stuck. What to do?</h3><p className="text-sm text-gray-600">Common reasons: Aadhaar not linked to bank, wrong bank details, failed eKYC, state verification pending. Complete eKYC on the portal and ensure your Aadhaar is linked to your bank account through your bank branch.</p></div>
            <div className="border-t border-gray-100 pt-4"><h3 className="font-medium text-gray-900 mb-1">Can tenant farmers avail PM Kisan?</h3><p className="text-sm text-gray-600">No. Only land-owning farmers are eligible. Tenant farmers and sharecroppers are not covered under this scheme. However, some states have separate schemes for tenant farmers.</p></div>
            <div className="border-t border-gray-100 pt-4"><h3 className="font-medium text-gray-900 mb-1">Is eKYC mandatory for PM Kisan?</h3><p className="text-sm text-gray-600">Yes. Aadhaar-based eKYC is mandatory for all beneficiaries. Without completing eKYC, your installments will be held. You can complete eKYC on the PM Kisan portal using OTP or visit a CSC.</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}
