import Link from "next/link";
import type { Metadata } from "next";
import { ExternalLink, FileText, CheckCircle, AlertCircle, HelpCircle } from "lucide-react";
import AdUnit from "@/components/AdUnit";

export const metadata: Metadata = {
  title: "PAN Card Apply Online 2025 - Application, Correction & Status",
  description: "Complete guide to apply for PAN card online in 2025. New application via NSDL & UTIITSL, correction, duplicate PAN, e-PAN download, status check, fees Rs 107, and FAQs.",
};

export default function PANCardPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="text-sm text-gray-500 mb-3">
            <Link href="/" className="hover:text-blue-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/documents" className="hover:text-blue-700">Documents</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">PAN Card</span>
          </nav>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">PAN Card — Complete Guide 2025</h1>
              <p className="text-gray-600 mt-0.5">New application, correction, duplicate PAN, e-PAN download and status check</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

        {/* What is PAN */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">What is a PAN Card?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A Permanent Account Number (PAN) card is a ten-character alphanumeric identifier issued by the Income Tax Department of India. It is assigned to every taxpayer — individuals, companies, firms, and trusts — and serves as the primary identifier for all financial and tax-related activities in the country. The card is issued as a laminated card and also available as an electronic e-PAN in PDF format.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            PAN is mandatory for filing income tax returns, opening a bank account, making cash deposits above Rs 50,000, purchasing property worth Rs 10 lakh or more, applying for a credit card, and conducting most high-value financial transactions. Without a PAN, a higher TDS (Tax Deducted at Source) rate of 20% is applied on eligible payments.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The PAN number follows a fixed format: the first three characters are alphabetic series (AAA to ZZZ), the fourth character represents the type of taxpayer (P for individual, C for company, H for HUF, etc.), the fifth character is the first letter of the applicant&apos;s surname, the next four characters are sequential numbers, and the last character is an alphabetic check digit.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://onlineservices.nsdl.com/paam/endUserRegisterContact.html" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-700 text-white text-sm font-medium rounded-lg hover:bg-blue-800 transition-colors">
              Apply via NSDL <ExternalLink className="w-4 h-4" />
            </a>
            <a href="https://www.utiitsl.com/UTIITSLPG/pan.html" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-blue-700 text-blue-700 text-sm font-medium rounded-lg hover:bg-blue-50 transition-colors">
              Apply via UTIITSL <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Types of Application */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Types of PAN Card Application</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-xl p-4">
              <h3 className="font-semibold text-blue-900 mb-2">New PAN (Form 49A)</h3>
              <p className="text-sm text-gray-700">For Indian citizens applying for a PAN card for the first time. Also used by companies, firms, HUF, trusts, and other entities incorporated in India.</p>
            </div>
            <div className="bg-indigo-50 rounded-xl p-4">
              <h3 className="font-semibold text-indigo-900 mb-2">Correction / Update (CSF)</h3>
              <p className="text-sm text-gray-700">Use the Change/Correction in PAN Data form to correct mistakes in name, date of birth, address, or to update a photograph, signature, or father&apos;s name.</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-4">
              <h3 className="font-semibold text-purple-900 mb-2">Duplicate / Reprint</h3>
              <p className="text-sm text-gray-700">If your PAN card is lost, damaged, or stolen, apply for a duplicate card using the same CSF form. Your PAN number remains unchanged; only the card is re-issued.</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">Note: Foreign citizens (including NRIs and foreign companies) must use Form 49AA instead of Form 49A.</p>
        </div>

        {/* Step-by-step NSDL */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">How to Apply Online via NSDL (Protean)</h2>
          <p className="text-gray-600 text-sm mb-6">NSDL (now Protean eGov Technologies) is the most widely used portal for PAN applications. Follow these steps:</p>
          <div className="space-y-4">
            {[
              { n: "1", title: "Visit the NSDL PAN portal", desc: "Go to onlineservices.nsdl.com. Click on 'Apply Online' under the PAN section. Select Application Type — '49A' for new PAN or 'Changes or Correction' for updates." },
              { n: "2", title: "Fill the online form", desc: "Enter personal details including full name (as per Aadhaar), date of birth, email ID, and mobile number. Choose the category of applicant (individual, company, HUF, etc.)." },
              { n: "3", title: "Submit and pay the fee", desc: "Review the filled form and submit. Pay the processing fee online via net banking, debit/credit card, or UPI. Fee is Rs 107 for delivery within India and Rs 1,017 for outside India." },
              { n: "4", title: "Get acknowledgement number", desc: "On successful payment, an acknowledgement number (15-digit) will be generated. Save this number — it is used for tracking application status." },
              { n: "5", title: "Submit supporting documents", desc: "You must send a physical copy of the acknowledgement slip along with self-attested copies of required documents to the NSDL office within 15 days of online submission. Alternatively, complete e-KYC using Aadhaar OTP for paperless processing." },
              { n: "6", title: "Receive PAN card", desc: "After verification, the PAN card is dispatched by Speed Post to your registered address within 15–20 working days. You can also download the e-PAN instantly after allotment." },
            ].map((step) => (
              <div key={step.n} className="flex gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-blue-700">{step.n}</span>
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

        {/* Documents Required */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Documents Required</h2>
          <p className="text-gray-600 text-sm mb-4">You need to provide proof of identity, proof of address, and proof of date of birth. Any one document from each category is sufficient.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Document Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Accepted Documents</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr><td className="py-3 px-4 font-medium text-gray-800">Proof of Identity</td><td className="py-3 px-4 text-gray-700">Aadhaar card, Voter ID, Passport, Driving licence, Ration card, Arm&apos;s licence, Photo ID card issued by central/state government</td></tr>
                <tr><td className="py-3 px-4 font-medium text-gray-800">Proof of Address</td><td className="py-3 px-4 text-gray-700">Aadhaar card, Voter ID, Passport, Driving licence, Post office passbook, Bank account statement, Latest electricity/telephone bill (not older than 3 months)</td></tr>
                <tr><td className="py-3 px-4 font-medium text-gray-800">Proof of Date of Birth</td><td className="py-3 px-4 text-gray-700">Birth certificate, Matriculation (10th) certificate, Passport, Aadhaar card, Pension payment order, Marriage certificate issued by Registrar</td></tr>
                <tr><td className="py-3 px-4 font-medium text-gray-800">For Minors (under 18)</td><td className="py-3 px-4 text-gray-700">Parent&apos;s PAN copy as proof; the minor&apos;s Aadhaar or birth certificate for identity and date of birth proof</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Fee and Timeline */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Fee Structure &amp; Processing Time</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Application Fees</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Delivery within India</span>
                  <span className="font-semibold text-gray-900">Rs 107</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Delivery outside India</span>
                  <span className="font-semibold text-gray-900">Rs 1,017</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">e-PAN (soft copy only)</span>
                  <span className="font-semibold text-gray-900">Rs 66</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">Fees include GST. Payment via net banking, debit/credit card, UPI, or demand draft.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Processing Timeline</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Physical PAN card: 15–20 working days after document verification</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">e-PAN (Aadhaar-based instant PAN): within 10 minutes if your mobile is linked to Aadhaar</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Correction/Duplicate: same timeline as new application — 15–20 working days</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Status Check and e-PAN */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Check PAN Status &amp; Download e-PAN</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2"><AlertCircle className="w-4 h-4 text-blue-600" /> Track Application Status</h3>
              <p className="text-sm text-gray-700 mb-3">After submitting your PAN application, you can track its status using your 15-digit acknowledgement number:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span><span>Visit the NSDL PAN status page or UTIITSL portal</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span><span>Enter your 15-digit acknowledgement number</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span><span>Enter date of birth and captcha to view status</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span><span>You can also track using your PAN number once allotted</span></li>
              </ul>
              <a href="https://tin.tin.nsdl.com/pantan/StatusTrack.html" target="_blank" rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm text-blue-700 hover:underline">
                Track on NSDL <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2"><AlertCircle className="w-4 h-4 text-green-600" /> Download e-PAN</h3>
              <p className="text-sm text-gray-700 mb-3">e-PAN is a digitally signed PDF copy of your PAN card, legally valid for all purposes:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span><span>Visit incometax.gov.in and click &apos;Instant e-PAN&apos;</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span><span>Enter your Aadhaar number and complete OTP verification</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span><span>Download the e-PAN PDF — free of charge for the first download</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span><span>Available only if your Aadhaar mobile number is active and linked</span></li>
              </ul>
              <a href="https://www.incometax.gov.in/iec/foportal/help/pre-login/instant-e-pan" target="_blank" rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm text-blue-700 hover:underline">
                Instant e-PAN portal <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        <AdUnit />

        {/* FAQs */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-blue-600" /> Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900 mb-1">Can minors have a PAN card?</h3>
              <p className="text-sm text-gray-600">Yes. There is no minimum age to apply for a PAN card. A minor&apos;s PAN application is submitted by a parent or guardian. The PAN belongs to the minor, not the parent. Once the minor turns 18, they must update their photograph and signature on the card.</p>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <h3 className="font-medium text-gray-900 mb-1">What to do if PAN card is lost?</h3>
              <p className="text-sm text-gray-600">Apply for a duplicate PAN card using the Correction/Reprint form on NSDL or UTIITSL portal. Your PAN number will remain the same. You can also download e-PAN immediately from the Income Tax portal for free while the physical card is being processed.</p>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <h3 className="font-medium text-gray-900 mb-1">How to link PAN to Aadhaar?</h3>
              <p className="text-sm text-gray-600">Go to incometax.gov.in, click on &apos;Link Aadhaar&apos; under Quick Links. Enter your PAN and Aadhaar number. Pay the late fee of Rs 1,000 if not linked before the deadline. Complete OTP verification. Linking is mandatory under Section 139AA of the Income Tax Act. Unlinked PANs become inoperative.</p>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <h3 className="font-medium text-gray-900 mb-1">Can I have two PAN cards?</h3>
              <p className="text-sm text-gray-600">No. Holding more than one PAN is illegal and attracts a penalty of Rs 10,000 under Section 272B of the Income Tax Act. If you inadvertently hold two PANs, surrender the duplicate one immediately on the Income Tax portal.</p>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <h3 className="font-medium text-gray-900 mb-1">How long does it take to get a PAN card?</h3>
              <p className="text-sm text-gray-600">A physical PAN card takes 15–20 working days after successful application and document verification. If you apply using Aadhaar-based e-KYC (paperless), you receive an e-PAN digitally within 48 hours. Instant e-PAN via the Income Tax portal is issued within minutes if your Aadhaar OTP is active.</p>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <h3 className="font-medium text-gray-900 mb-1">Is PAN mandatory for all bank accounts?</h3>
              <p className="text-sm text-gray-600">PAN or Form 60 (declaration for those without PAN) is mandatory for opening a bank account. PAN is also required for cash deposits of Rs 50,000 or more in a single day, and for any fixed deposit exceeding Rs 50,000. Banks deduct TDS at 20% if PAN is not provided.</p>
            </div>
          </div>
        </div>

        {/* Official Links */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Official Resources</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: "NSDL PAN Application Portal", url: "https://onlineservices.nsdl.com/paam/endUserRegisterContact.html" },
              { label: "UTIITSL PAN Online Services", url: "https://www.utiitsl.com/UTIITSLPG/pan.html" },
              { label: "Instant e-PAN — Income Tax", url: "https://www.incometax.gov.in/iec/foportal/help/pre-login/instant-e-pan" },
              { label: "Link PAN with Aadhaar", url: "https://eportal.incometax.gov.in/iec/foservices/#/pre-login/link-aadhaar" },
              { label: "PAN Status Tracking — NSDL", url: "https://tin.tin.nsdl.com/pantan/StatusTrack.html" },
              { label: "Income Tax e-Filing Portal", url: "https://www.incometax.gov.in" },
            ].map((link) => (
              <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-blue-700 hover:text-blue-900 hover:bg-blue-50 px-3 py-2.5 rounded-lg border border-blue-100 transition-colors">
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
