import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, Clock, ArrowLeft, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Ayushman Bharat Card: How to Download, Apply & Use in 2025",
  description: "Complete guide to Ayushman Bharat PMJAY card — check eligibility, download your card, find empanelled hospitals, and use it for cashless treatment up to Rs 5 lakh.",
  alternates: { canonical: "https://indiaassist.online/blog/ayushman-bharat-card-download-guide" },
  openGraph: {
    title: "Ayushman Bharat Card: How to Download, Apply & Use in 2025",
    description: "How to check if you are covered under AB PM-JAY, download your Ayushman card, find empanelled hospitals, and get cashless treatment.",
    url: "https://indiaassist.online/blog/ayushman-bharat-card-download-guide",
  },
};

export default function AyushmanBharatPost() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-blue-700">Blog</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Ayushman Bharat Card Guide</span>
        </nav>
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-blue-700 hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
        <div className="mb-4">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-red-100 text-red-800">Health Schemes</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Ayushman Bharat Card: How to Download, Apply &amp; Use in 2025
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 pb-6 border-b border-gray-200">
          <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 30, 2025</span>
          <span className="flex items-center gap-1"><Clock className="w-4 h-4" />7 min read</span>
        </div>

        <div className="prose-article">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB PM-JAY) is the world's largest government-funded health insurance programme. It provides cashless treatment worth up to Rs 5 lakh per family per year at over 29,000 empanelled hospitals across India — completely free for eligible beneficiaries. If you are eligible and haven't yet got your Ayushman card, this guide explains everything.
          </p>

          <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-8">
            <p className="font-semibold text-red-900 mb-2">Who is covered under AB PM-JAY?</p>
            <p className="text-red-800 text-sm mb-2">Eligibility is based on the Socio-Economic Caste Census (SECC) 2011 data and State Scheme data. Broadly:</p>
            <ul className="text-red-800 text-sm space-y-1">
              <li>• Rural: Deprived households identified under SECC 2011</li>
              <li>• Urban: 11 defined occupational categories (rag pickers, domestic workers, street vendors, etc.)</li>
              <li>• Automatically enrolled families from earlier RSBY scheme</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step 1 – Check Your Eligibility Online</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Before downloading your card, verify that your family is in the beneficiary list:
          </p>
          <div className="space-y-3 mb-6">
            {[
              { n: "1", t: "Visit the official portal", d: "Go to pmjay.gov.in and click 'Am I Eligible?' on the homepage." },
              { n: "2", t: "Enter your mobile number", d: "Enter your mobile number and complete the OTP verification." },
              { n: "3", t: "Search by name, HHD number or ration card", d: "Enter your name and state, or your HHD (Household) number from the SECC list, or your ration card number." },
              { n: "4", t: "Check results", d: "If your family appears, it shows the family details and confirms eligibility. If not found, your family may not be in the SECC list." },
            ].map(({ n, t, d }) => (
              <div key={n} className="flex gap-3">
                <span className="w-7 h-7 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">{n}</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t}</p>
                  <p className="text-gray-600 text-sm">{d}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="https://pmjay.gov.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors mb-8">
            Check Eligibility on pmjay.gov.in <ExternalLink className="w-4 h-4" />
          </a>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step 2 – Download or Apply for Your Ayushman Card</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you are eligible, you can get your Ayushman card in several ways:
          </p>
          <div className="space-y-4 mb-8">
            {[
              { title: "Via the Ayushman App (easiest)", desc: "Download the 'Ayushman' app from Google Play Store or App Store. Log in with your Aadhaar-linked mobile number, verify via OTP, and download your e-card directly from the app." },
              { title: "Via Common Service Centre (CSC)", desc: "Visit the nearest CSC in your village or town. The operator will verify your Aadhaar biometrics and issue your Ayushman card on the spot. Bring your Aadhaar card and ration card." },
              { title: "Via empanelled hospital", desc: "Any AB PM-JAY empanelled hospital has an Aarogya Mitra (help desk staff) who can generate your card at the hospital using your Aadhaar. You don't need the card beforehand — the hospital can verify eligibility directly." },
              { title: "Via setu.pmjay.gov.in", desc: "The Ayushman Bharat Setu portal allows beneficiaries to generate and download the card online using Aadhaar-based OTP authentication." },
            ].map(({ title, desc }) => (
              <div key={title} className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                <p className="font-semibold text-gray-900 mb-1">{title}</p>
                <p className="text-gray-700 text-sm">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Treatments are Covered?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            AB PM-JAY covers 1,949 treatment packages across 27 specialities, including:
          </p>
          <div className="grid grid-cols-2 gap-2 mb-6">
            {[
              "Cardiac surgery", "Knee replacement", "Cancer treatment",
              "Dialysis", "Eye surgery", "Orthopaedic procedures",
              "Delivery and newborn care", "Mental health care",
              "Burns treatment", "Emergency care",
            ].map(item => (
              <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></span>
                {item}
              </div>
            ))}
          </div>
          <p className="text-gray-700 text-sm mb-6">
            The Rs 5 lakh cover resets every year. It covers pre-hospitalisation (up to 3 days) and post-hospitalisation (up to 15 days) expenses, including medicines, diagnostics, and room charges.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Find an Empanelled Hospital</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Over 29,000 public and private hospitals are empanelled under AB PM-JAY across India. To find one:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span><span className="text-gray-700">Visit pmjay.gov.in and use the 'Find Hospital' search tool — search by state, district, and speciality.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span><span className="text-gray-700">Use the Ayushman app's hospital locator feature.</span></li>
            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span><span className="text-gray-700">Call the PM-JAY helpline: 14555 (toll-free, available 24x7).</span></li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Use Your Card at the Hospital</h2>
          <div className="space-y-3 mb-8">
            {[
              "Show your Ayushman card or Aadhaar card to the Aarogya Mitra at the hospital help desk.",
              "The hospital verifies your eligibility against the PM-JAY database in real time.",
              "If the treatment is covered, the hospital creates a pre-authorisation request.",
              "Once approved, treatment begins — you pay nothing. The hospital bills the government directly.",
              "On discharge, you receive a summary. If any amount is demanded beyond what is covered, call 14555.",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-6 h-6 bg-red-100 text-red-800 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                <p className="text-gray-700 text-sm">{step}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {[
              { q: "My family is not in the SECC list. Can I still apply?", a: "If you were left out of SECC 2011 but meet the deprivation criteria, you can approach your state government's nodal agency. Many states have expanded coverage beyond SECC through state schemes integrated with PM-JAY." },
              { q: "Can I use my card outside my home state?", a: "Yes. AB PM-JAY is valid at all empanelled hospitals across India, regardless of which state you are from. This is one of its key benefits — you can use it even if you travel for treatment." },
              { q: "Is there a limit on the number of family members covered?", a: "No. The Rs 5 lakh cover is for the entire family per year, with no cap on family size. All members listed in the household are covered under the same Rs 5 lakh limit." },
              { q: "What if the hospital refuses to treat me under PM-JAY?", a: "Call the toll-free helpline 14555 immediately. It is illegal for an empanelled hospital to refuse eligible beneficiaries or demand out-of-pocket payments for covered procedures." },
            ].map(({ q, a }) => (
              <div key={q}>
                <h3 className="font-semibold text-gray-900 mb-1">{q}</h3>
                <p className="text-sm text-gray-600">{a}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4">Related Guides</h3>
            <div className="space-y-2">
              <Link href="/schemes/ayushman-bharat" className="block text-blue-700 hover:underline text-sm">Ayushman Bharat – Full Scheme Details</Link>
              <Link href="/eligibility" className="block text-blue-700 hover:underline text-sm">Check All Government Schemes You're Eligible For</Link>
              <Link href="/schemes/pm-kisan" className="block text-blue-700 hover:underline text-sm">PM Kisan – Rs 6,000/year for Farmer Families</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
