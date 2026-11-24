import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Check PM Kisan Status 2025: Step-by-Step Guide",
  description: "PM Kisan Samman Nidhi provides Rs 6,000 per year to eligible farmer families. Learn exactly how to check your PM Kisan beneficiary status online and what to do if payment is stuck.",
  alternates: { canonical: "https://indiaassist.online/blog/how-to-check-pm-kisan-status-2025" },
  openGraph: {
    title: "How to Check PM Kisan Status 2025: Step-by-Step Guide",
    description: "Step-by-step guide to check PM Kisan beneficiary status, installment history, and fix payment issues.",
    url: "https://indiaassist.online/blog/how-to-check-pm-kisan-status-2025",
  },
};

export default function PMKisanStatusPost() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-blue-700">Blog</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">PM Kisan Status</span>
        </nav>

        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-blue-700 hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        <div className="mb-4 flex items-center gap-3">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-100 text-green-800">Government Schemes</span>
          <span className="text-xs text-gray-400">Updated November 2026 · 6 min read</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-tight">
          PM Kisan Status Check: Why Your Money Hasn't Come and How to Fix It
        </h1>

        <div className="prose-article">

          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Thousands of registered farmers across India are sitting on pending or rejected PM Kisan payments and have no idea why. The money is supposed to land every four months — Rs 2,000 three times a year — but eKYC failures, bank linking issues, and name mismatches in state land records are blocking a surprisingly large number of transfers. This guide explains what each status actually means and what you need to do about it.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">First, check your status on the portal</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Go to <strong>pmkisan.gov.in</strong> and look for &quot;Beneficiary Status&quot; under the Farmers Corner section. You can search using your Aadhaar number or the mobile number you registered with. The page will show every installment — which ones were credited, which are pending, and which got rejected.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            If you registered after 2022, make sure you have also completed eKYC — without it, the portal will block all future payments regardless of your eligibility. More on that below.
          </p>

          <div className="mb-6">
            <a
              href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-700 text-white text-sm font-medium rounded-lg hover:bg-green-800 transition-colors"
            >
              Check Your PM Kisan Status <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">What the status labels mean</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The portal uses its own terminology which is not always obvious. Here is what each one actually means:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">What you see</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">What it actually means</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr><td className="py-3 px-4 font-medium text-green-700">Credit</td><td className="py-3 px-4 text-gray-700">Money sent to your bank. Check your passbook if it hasn't shown up — it can take 2 to 3 working days.</td></tr>
                <tr><td className="py-3 px-4 font-medium text-yellow-700">Pending for Approval</td><td className="py-3 px-4 text-gray-700">Your state government hasn't verified your land records yet. Nothing you can do except wait — or visit your local agriculture office to follow up.</td></tr>
                <tr><td className="py-3 px-4 font-medium text-red-700">Rejected</td><td className="py-3 px-4 text-gray-700">Bank account issue, Aadhaar mismatch, or failed eKYC. This one needs your action — see below.</td></tr>
                <tr><td className="py-3 px-4 font-medium text-orange-700">FTO is generated</td><td className="py-3 px-4 text-gray-700">Fund Transfer Order has been raised. Your money is on its way — usually arrives within 2 to 5 working days.</td></tr>
                <tr><td className="py-3 px-4 font-medium text-blue-700">Rft Signed</td><td className="py-3 px-4 text-gray-700">Payment is being processed. It should move to FTO generated status shortly.</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">The most common reasons payments get stuck</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If your status shows Rejected or your payment is months overdue, one of these is almost certainly the cause:
          </p>

          <p className="text-gray-700 leading-relaxed mb-2"><strong>eKYC not done.</strong> This is the single biggest reason for blocked payments right now. Aadhaar-based eKYC is mandatory for all beneficiaries. Go to pmkisan.gov.in, click eKYC under Farmers Corner, enter your Aadhaar number, and verify via OTP. If your mobile isn't linked to Aadhaar, you'll need to visit a CSC or agriculture office for biometric verification instead.</p>

          <p className="text-gray-700 leading-relaxed mb-2"><strong>Aadhaar not linked to your bank account.</strong> PM Kisan payments go through Direct Benefit Transfer, which only works if your Aadhaar is seeded to your bank account. Visit your bank branch with your Aadhaar card and ask them to link it — takes about 10 minutes.</p>

          <p className="text-gray-700 leading-relaxed mb-2"><strong>Wrong bank details.</strong> Farmers Corner on the portal has an &quot;Updation of Self Registered Farmers&quot; option where you can correct your IFSC code or account number if they were entered wrong during registration.</p>

          <p className="text-gray-700 leading-relaxed mb-5"><strong>Name mismatch between Aadhaar and land records.</strong> Even a small spelling difference — &quot;Ramesh&quot; vs &quot;Ramesh Kumar&quot; — is enough to trigger a rejection. You need to contact your local patwari or agriculture office to get the land record corrected. This one takes the most time, sometimes several weeks.</p>

          <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-8">
            <p className="text-green-900 font-semibold mb-1">About the 18th installment</p>
            <p className="text-green-800 text-sm">The latest installment release dates are announced on the official portal. If you haven't received money for the current period even though your status shows no issues, give it 2 to 3 weeks from the announced date before calling the helpline.</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Still stuck? Call the helpline</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you have done eKYC, your Aadhaar is linked to your bank, your name matches, and your status is still showing issues after a few weeks — call:
          </p>
          <div className="bg-gray-50 rounded-xl p-5 mb-8 text-sm text-gray-700 space-y-1">
            <p><strong>Toll-free:</strong> 155261 or 1800115526</p>
            <p><strong>Email:</strong> pmkisan-ict@gov.in</p>
            <p><strong>Timing:</strong> Monday to Friday, 6 AM to 10 PM</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Questions people ask most</h2>

          <p className="text-gray-700 leading-relaxed mb-2"><strong>Can I check without Aadhaar?</strong> Yes, the registered mobile number works too on the Beneficiary Status page. But you still need to complete Aadhaar eKYC separately to actually receive payments.</p>

          <p className="text-gray-700 leading-relaxed mb-2"><strong>How long does new registration take?</strong> State verification after submission takes 4 to 8 weeks on average. Gujarat and Maharashtra are generally faster. Some northeastern states take longer.</p>

          <p className="text-gray-700 leading-relaxed mb-2"><strong>Tenant farmers — are they covered?</strong> No. Only land-owning farmers appear in the SECC land records database, which is what PM Kisan runs on. Tenant farmers and sharecroppers aren't eligible under this scheme, though some states have separate schemes for them.</p>

          <p className="text-gray-700 leading-relaxed mb-5"><strong>My account shows Rejected. Will I get the missed installments back?</strong> No. Once you fix the issue, payments resume from the next installment cycle. The ones that were rejected while the problem existed are not paid retroactively.</p>

          <div className="mt-10 pt-8 border-t border-gray-200">
            <p className="text-sm font-semibold text-gray-700 mb-3">Also worth reading</p>
            <div className="space-y-2">
              <Link href="/schemes/pm-kisan" className="block text-blue-700 hover:underline text-sm">PM Kisan Samman Nidhi – full eligibility and installment details</Link>
              <Link href="/eligibility" className="block text-blue-700 hover:underline text-sm">Which government schemes are you eligible for?</Link>
              <Link href="/schemes/ayushman-bharat" className="block text-blue-700 hover:underline text-sm">Ayushman Bharat – free health cover up to Rs 5 lakh</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
