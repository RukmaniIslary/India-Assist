import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, Clock, ArrowLeft, ExternalLink } from "lucide-react";

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
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-blue-700">Blog</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">PM Kisan Status 2025</span>
        </nav>

        {/* Back link */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-blue-700 hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        {/* Category + Meta */}
        <div className="mb-4">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-100 text-green-800">Government Schemes</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          How to Check PM Kisan Status 2025: Step-by-Step Guide
        </h1>

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 pb-6 border-b border-gray-200">
          <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />June 10, 2025</span>
          <span className="flex items-center gap-1"><Clock className="w-4 h-4" />6 min read</span>
        </div>

        {/* Article body */}
        <div className="prose-article">

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            PM Kisan Samman Nidhi (PM-KISAN) provides Rs 6,000 per year to eligible land-owning farmer families across India, paid in three installments of Rs 2,000 each. If you are registered but haven't received your installment — or simply want to confirm your status — this guide walks you through every step.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What is PM Kisan Samman Nidhi?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Launched on February 1, 2019, PM-KISAN is a 100% central government-funded scheme. As of 2025, over 11 crore farmer families have been registered, and more than Rs 2.8 lakh crore has been disbursed directly to farmers' Aadhaar-linked bank accounts.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Rs 2,000 installments are credited three times a year: April–June, August–October, and December–February. Exact release dates are announced by the Prime Minister's Office.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-8">
            <p className="text-green-900 font-semibold mb-1">Quick fact</p>
            <p className="text-green-800 text-sm">The 18th installment for 2025 is expected to be released in October–November 2025. Check the official portal for the exact date once announced.</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Check PM Kisan Beneficiary Status Online</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The official PM Kisan portal (<strong>pmkisan.gov.in</strong>) lets you check your status using either your Aadhaar number or the mobile number registered at the time of enrolment.
          </p>

          <div className="space-y-4 mb-8">
            {[
              { step: "1", title: "Open the official portal", desc: 'Go to pmkisan.gov.in. On the home page, look for the "Farmers Corner" section in the top navigation.' },
              { step: "2", title: "Click Beneficiary Status", desc: 'Under Farmers Corner, click "Beneficiary Status". You will be redirected to a status check page.' },
              { step: "3", title: "Enter your Aadhaar or mobile number", desc: "Select whether you want to check via Aadhaar Number or Registered Mobile Number. Enter the number and click Get Data." },
              { step: "4", title: "Review your payment history", desc: "The page will display all installments: dates, amounts credited, and the bank account the payment was sent to. It will also show if any payment is pending or rejected." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">{step}</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{title}</p>
                  <p className="text-sm text-gray-600 mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <a
              href="https://pmkisan.gov.in/BeneficiaryStatus.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-700 text-white text-sm font-medium rounded-lg hover:bg-green-800 transition-colors"
            >
              Check Your PM Kisan Status Now <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Understanding Your Status Page</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The status page shows each installment with one of the following labels:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Status Label</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">What It Means</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr><td className="py-3 px-4 font-medium text-green-700">Credit</td><td className="py-3 px-4 text-gray-700">Payment successfully sent to your bank account</td></tr>
                <tr><td className="py-3 px-4 font-medium text-yellow-700">Pending for Approval</td><td className="py-3 px-4 text-gray-700">State government verification is in progress</td></tr>
                <tr><td className="py-3 px-4 font-medium text-red-700">Rejected</td><td className="py-3 px-4 text-gray-700">Payment rejected due to bank/Aadhaar mismatch or failed eKYC</td></tr>
                <tr><td className="py-3 px-4 font-medium text-orange-700">FTO is generated</td><td className="py-3 px-4 text-gray-700">Fund Transfer Order issued; will reach your account in 2–5 working days</td></tr>
                <tr><td className="py-3 px-4 font-medium text-blue-700">Rft Signed</td><td className="py-3 px-4 text-gray-700">Payment request signed and processing is underway</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Is My PM Kisan Payment Stuck?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If your status shows "Rejected" or the payment hasn't arrived even after the installment release date, the most common reasons are:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              { title: "eKYC not completed", desc: "Aadhaar-based eKYC is mandatory. Without it, all future payments are held. Complete eKYC on pmkisan.gov.in using OTP or visit a Common Service Centre (CSC)." },
              { title: "Aadhaar not linked to bank account", desc: "The payment is sent via DBT (Direct Benefit Transfer) to the Aadhaar-seeded bank account. If your Aadhaar is not linked, visit your bank branch to link it." },
              { title: "Wrong IFSC or account number", desc: "If bank details were entered incorrectly during registration, go to pmkisan.gov.in > Farmers Corner > Updation of Self Registered Farmers to correct them." },
              { title: "State verification pending", desc: "If you registered recently, the state government may still be verifying your land records. This can take several weeks in some states." },
              { title: "Name mismatch between Aadhaar and land records", desc: "Even minor spelling differences between your name in land records and Aadhaar can cause rejection. Contact your local agriculture office to correct this." },
            ].map(({ title, desc }) => (
              <li key={title} className="flex items-start gap-3">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <span className="font-semibold text-gray-900">{title}:</span>{" "}
                  <span className="text-gray-700">{desc}</span>
                </div>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Complete PM Kisan eKYC</h2>
          <div className="space-y-3 mb-8">
            {[
              "Visit pmkisan.gov.in and click eKYC under Farmers Corner.",
              "Enter your Aadhaar number and click Search.",
              "An OTP will be sent to your Aadhaar-linked mobile number. Enter the OTP to verify.",
              "If your mobile is not linked to Aadhaar, visit the nearest CSC or agriculture office for biometric eKYC.",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                <p className="text-gray-700 text-sm">{step}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">PM Kisan Helpline</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you've completed eKYC, your Aadhaar is bank-linked, and your status still shows issues after 2–3 weeks, contact the PM Kisan helpline:
          </p>
          <div className="bg-gray-50 rounded-xl p-5 mb-8">
            <p className="text-gray-900 font-semibold mb-2">PM Kisan Helpline</p>
            <p className="text-gray-700 text-sm mb-1"><strong>Phone:</strong> 155261 / 1800115526 (Toll-Free)</p>
            <p className="text-gray-700 text-sm mb-1"><strong>Email:</strong> pmkisan-ict@gov.in</p>
            <p className="text-gray-700 text-sm"><strong>Timings:</strong> Monday to Friday, 6 AM to 10 PM</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {[
              { q: "Can I check PM Kisan status without Aadhaar?", a: "Yes, you can check using your registered mobile number on the Beneficiary Status page. However, completing Aadhaar-based eKYC is mandatory for receiving payments." },
              { q: "How long does it take for a new registration to be approved?", a: "After submitting your registration, state verification typically takes 4–8 weeks depending on the state. Faster in digitised states like Gujarat and Maharashtra, slower in some others." },
              { q: "Can a tenant farmer apply for PM Kisan?", a: "No. PM Kisan is for land-owning farmers only. Tenant farmers and sharecroppers are not eligible. Some states have separate schemes for tenant farmers." },
              { q: "My account shows 'Rejected'. Can I reapply?", a: "Yes. After correcting the reason for rejection (bank linking, eKYC, name mismatch), the system will process your payment in the next installment cycle. You will not receive missed installments from before the correction." },
            ].map(({ q, a }) => (
              <div key={q}>
                <h3 className="font-semibold text-gray-900 mb-1">{q}</h3>
                <p className="text-sm text-gray-600">{a}</p>
              </div>
            ))}
          </div>

          {/* Related links */}
          <div className="mt-10 pt-8 border-t border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4">Related Guides</h3>
            <div className="space-y-2">
              <Link href="/schemes/pm-kisan" className="block text-blue-700 hover:underline text-sm">PM Kisan Samman Nidhi – Complete Scheme Guide</Link>
              <Link href="/eligibility" className="block text-blue-700 hover:underline text-sm">Check Which Government Schemes You're Eligible For</Link>
              <Link href="/schemes/ayushman-bharat" className="block text-blue-700 hover:underline text-sm">Ayushman Bharat – Free Health Cover up to Rs 5 Lakh</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
