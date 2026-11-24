import Link from "next/link";
import type { Metadata } from "next";
import { ExternalLink, BookOpen, CheckCircle, AlertCircle, HelpCircle, Clock } from "lucide-react";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "Passport Apply Online India 2025 - Fresh, Renewal & Tatkal",
  description: "Complete guide to apply for Indian passport online in 2025. Fresh passport, renewal, Tatkal, reissue process via Passport Seva portal. Fees, documents, appointment booking, police verification explained.",
};

export default function PassportPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="text-sm text-gray-500 mb-3">
            <Link href="/" className="hover:text-blue-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/documents" className="hover:text-blue-700">Documents</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Passport</span>
          </nav>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Passport — Complete Guide 2025</h1>
              <p className="text-gray-600 mt-0.5">Fresh application, renewal, Tatkal, reissue and status tracking</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

        {/* Overview */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">About Indian Passport</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            An Indian passport is a travel document issued by the Ministry of External Affairs (MEA) through the Passport Seva Programme. It certifies the citizenship of the holder and requests foreign governments to allow the bearer safe passage. India issues three types of passports: Navy Blue (ordinary), White (official/government use), and Maroon/Burgundy (diplomatic).
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ordinary passports come in two variants: 36-page booklets for most travellers and 60-page booklets for frequent travellers. Passports are valid for 10 years for adults (18 years and above) and 5 years for minors (under 18). All applications are processed through the Passport Seva portal and Passport Seva Kendras (PSK) / Post Office Passport Seva Kendras (POPSK) located across India.
          </p>
          <p className="text-gray-700 leading-relaxed">
            As of 2025, India has over 550 Passport Seva Kendras and POPSK locations, making passport services accessible even in smaller towns. The entire process — from application to appointment booking — is online, though a physical visit to the PSK is mandatory for biometric collection and document verification.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://passportindia.gov.in" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-lg hover:bg-orange-700 transition-colors">
              Passport Seva Portal <ExternalLink className="w-4 h-4" />
            </a>
            <a href="https://www.passportindia.gov.in/AppOnlineProject/statusTracker/trackStatusInpNew" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-orange-600 text-orange-600 text-sm font-medium rounded-lg hover:bg-orange-50 transition-colors">
              Track Passport Status <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Types */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Types of Passport Applications</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-orange-50 rounded-xl p-4">
              <h3 className="font-semibold text-orange-900 mb-2">Fresh Passport</h3>
              <p className="text-sm text-gray-700">For first-time applicants who have never held an Indian passport. A fresh 36-page or 60-page booklet is issued after police verification and document check.</p>
            </div>
            <div className="bg-amber-50 rounded-xl p-4">
              <h3 className="font-semibold text-amber-900 mb-2">Renewal / Reissue</h3>
              <p className="text-sm text-gray-700">For renewing an expired or about-to-expire passport, or for updating personal details such as name change after marriage, address, or adding a spouse name.</p>
            </div>
            <div className="bg-red-50 rounded-xl p-4">
              <h3 className="font-semibold text-red-900 mb-2">Tatkal (Urgent)</h3>
              <p className="text-sm text-gray-700">For applicants needing a passport urgently due to travel within 7–14 days. Available for both fresh and reissue. Additional Tatkal surcharge applies. Requires annexures and verification at PSK.</p>
            </div>
            <div className="bg-rose-50 rounded-xl p-4">
              <h3 className="font-semibold text-rose-900 mb-2">Lost / Damaged Reissue</h3>
              <p className="text-sm text-gray-700">If your passport is lost, damaged, or stolen, apply for reissue. An FIR copy is required for lost passports. Police verification is mandatory in most cases.</p>
            </div>
          </div>
        </div>

        {/* Application Steps */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Step-by-Step Application via Passport Seva Portal</h2>
          <p className="text-gray-600 text-sm mb-6">The entire process is online, but you must visit a PSK or POPSK for document verification and biometrics.</p>
          <div className="space-y-4">
            {[
              { n: "1", title: "Register on Passport Seva portal", desc: "Visit passportindia.gov.in and click 'New User Registration'. Create an account with a valid email and mobile number. Login with your credentials." },
              { n: "2", title: "Fill the online application form", desc: "Select 'Apply for Fresh Passport / Reissue of Passport'. Choose 36 or 60 pages. Fill in all personal details, address, family details, and emergency contact. Upload your photo (white background, 2×2 inch)." },
              { n: "3", title: "Submit form and book appointment", desc: "After saving the form, pay the fee online and schedule an appointment at the nearest PSK or POPSK. Appointment availability varies by city — metro cities usually have slots within 1–2 weeks." },
              { n: "4", title: "Visit PSK on the appointment date", desc: "Carry original documents and photocopies. Arrive 15–20 minutes before your slot. Your documents will be verified, photograph taken, and biometrics (fingerprints) captured at the PSK." },
              { n: "5", title: "Police verification", desc: "For fresh passports and select reissue cases, local police conducts address verification. A police officer visits your residence. Ensure you are available and all documents are ready." },
              { n: "6", title: "Passport dispatched", desc: "After police verification and clearance, the passport is printed and dispatched via Speed Post. You receive an SMS update at every stage. Track using the Application Reference Number (ARN)." },
            ].map((step) => (
              <div key={step.n} className="flex gap-4">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-orange-700">{step.n}</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{step.title}</p>
                  <p className="text-sm text-gray-600 mt-0.5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <AdUnit />

        {/* Fees Table */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Fee Structure</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Pages</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Normal Fee</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Tatkal Surcharge</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Total (Tatkal)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr><td className="py-3 px-4 text-gray-700">Fresh / Reissue (Adult)</td><td className="py-3 px-4">36 pages</td><td className="py-3 px-4 font-medium">Rs 1,500</td><td className="py-3 px-4">Rs 2,000</td><td className="py-3 px-4 font-medium">Rs 3,500</td></tr>
                <tr><td className="py-3 px-4 text-gray-700">Fresh / Reissue (Adult)</td><td className="py-3 px-4">60 pages</td><td className="py-3 px-4 font-medium">Rs 2,000</td><td className="py-3 px-4">Rs 2,000</td><td className="py-3 px-4 font-medium">Rs 4,000</td></tr>
                <tr><td className="py-3 px-4 text-gray-700">Minor (under 18)</td><td className="py-3 px-4">36 pages</td><td className="py-3 px-4 font-medium">Rs 1,000</td><td className="py-3 px-4">Rs 2,000</td><td className="py-3 px-4 font-medium">Rs 3,000</td></tr>
                <tr><td className="py-3 px-4 text-gray-700">Duplicate (lost passport)</td><td className="py-3 px-4">36 pages</td><td className="py-3 px-4 font-medium">Rs 3,000</td><td className="py-3 px-4">Rs 2,000</td><td className="py-3 px-4 font-medium">Rs 5,000</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">All fees are in Indian Rupees. Payment is accepted online at the time of appointment booking. No cash payments at PSK. Fees are non-refundable once appointment is booked.</p>
          <div className="grid sm:grid-cols-2 gap-4 mt-5">
            <div className="bg-blue-50 rounded-xl p-4 flex items-start gap-3">
              <Clock className="w-4 h-4 text-blue-700 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-blue-900 text-sm">Normal Processing</p>
                <p className="text-xs text-blue-700 mt-1">30–45 working days from PSK visit, including police verification. Can vary by state and district.</p>
              </div>
            </div>
            <div className="bg-orange-50 rounded-xl p-4 flex items-start gap-3">
              <Clock className="w-4 h-4 text-orange-700 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-orange-900 text-sm">Tatkal Processing</p>
                <p className="text-xs text-orange-700 mt-1">7–14 working days from PSK visit. Priority processing but police verification still applies in most cases.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Documents Required */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Documents Required</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Fresh Passport</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span><span>Aadhaar card (proof of identity + address)</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span><span>Birth certificate or 10th marksheet (proof of date of birth)</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span><span>Proof of address: Aadhaar, voter ID, bank passbook, or utility bill</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span><span>Recent passport-size photographs (white background)</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span><span>Self-declaration for non-ECR category if applicable</span></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-600" /> Renewal / Reissue</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span><span>Original old passport (mandatory)</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span><span>Self-attested photocopy of first and last two pages of old passport</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span><span>Proof of current address if different from old passport</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span><span>Name change: gazette notification or marriage certificate</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span><span>For Tatkal: Annexure F (verification by gazetted officer) and additional documents</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Police Verification */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-amber-600" /> Police Verification Explained
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Police verification is a background check conducted by the local police station at your residential address to confirm your identity, address, and absence of criminal record. It is a mandatory step for most fresh passport and reissue applications.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="border border-amber-200 bg-amber-50 rounded-xl p-4">
              <h3 className="font-semibold text-amber-900 mb-2">Pre-Police Verification</h3>
              <p className="text-sm text-gray-700">Police verification is completed before the passport is issued. This applies to most first-time applicants and certain reissue cases. Timeline is longer but ensures fewer post-issuance complications.</p>
            </div>
            <div className="border border-green-200 bg-green-50 rounded-xl p-4">
              <h3 className="font-semibold text-green-900 mb-2">Post-Police Verification</h3>
              <p className="text-sm text-gray-700">Passport is issued first and police verification happens after. Applies to government employees (with NOC), renewals with no change in address, and senior citizens above 60. Your passport can be cancelled if verification fails.</p>
            </div>
          </div>
          <div className="mt-4 p-4 bg-gray-50 rounded-xl">
            <p className="text-sm text-gray-700"><span className="font-medium">Tatkal note:</span> Under Tatkal scheme, pre-police verification is done at the PSK itself. The PSK officer conducts verification on the spot using your original documents. This is why Tatkal requires additional annexures from gazetted officers or government employees as character witnesses.</p>
          </div>
        </div>

        <AdUnit />

        {/* FAQs */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-orange-600" /> Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900 mb-1">How to apply for a minor&apos;s (child&apos;s) passport?</h3>
              <p className="text-sm text-gray-600">A minor passport is valid for 5 years or until the child turns 18, whichever is earlier. Apply on the Passport Seva portal by selecting the minor category. Both parents&apos; passports or Aadhaar details are required. If parents are divorced or one is abroad, additional affidavits and documents are needed. The minor must be physically present at the PSK.</p>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <h3 className="font-medium text-gray-900 mb-1">What documents are required for Tatkal passport?</h3>
              <p className="text-sm text-gray-600">In addition to standard documents, Tatkal requires Annexure F — a certificate from a gazetted officer or any one of: government employee ID with attestation, income tax return, elected representative&apos;s letter, bank manager&apos;s letter, or discharge book for armed forces personnel.</p>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <h3 className="font-medium text-gray-900 mb-1">What to do if passport is lost abroad?</h3>
              <p className="text-sm text-gray-600">Immediately report to the local police and obtain an FIR. Then contact the nearest Indian Embassy or Consulate. They can issue an Emergency Certificate (EC) for one-way travel back to India. After returning, apply for a reissue of the lost passport with the FIR and embassy records.</p>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <h3 className="font-medium text-gray-900 mb-1">Can I change my address on the passport?</h3>
              <p className="text-sm text-gray-600">An address change requires reissuance of the passport. Apply for reissue on the Passport Seva portal with new address proof. The old passport is cancelled and a new one is issued with the updated address. Police verification at the new address is required.</p>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <h3 className="font-medium text-gray-900 mb-1">How to track passport application status?</h3>
              <p className="text-sm text-gray-600">Visit passportindia.gov.in and click on &apos;Track Application Status&apos;. Enter your Application Reference Number (ARN) — found on your appointment receipt — along with your date of birth. You will see real-time updates including PSK verification, police clearance, printing, and dispatch status.</p>
            </div>
          </div>
        </div>

        {/* Official Links */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Official Resources</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: "Passport Seva Portal — Apply Online", url: "https://passportindia.gov.in" },
              { label: "Track Passport Application Status", url: "https://www.passportindia.gov.in/AppOnlineProject/statusTracker/trackStatusInpNew" },
              { label: "Locate Nearest PSK / POPSK", url: "https://www.passportindia.gov.in/AppOnlineProject/online/findPSKList" },
              { label: "Ministry of External Affairs", url: "https://www.mea.gov.in" },
              { label: "Passport Helpline: 1800-258-1800", url: "https://passportindia.gov.in" },
              { label: "Passport Seva — FAQs", url: "https://www.passportindia.gov.in/AppOnlineProject/online/faqPassport" },
            ].map((link) => (
              <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-orange-700 hover:text-orange-900 hover:bg-orange-50 px-3 py-2.5 rounded-lg border border-orange-100 transition-colors">
                <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                {link.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
