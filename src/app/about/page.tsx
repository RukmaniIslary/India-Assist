import Link from "next/link";
import type { Metadata } from "next";
import { Calculator, TrendingUp, Landmark, FileText, Shield, Users, Target, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | IndiaAssist",
  description: "Learn about IndiaAssist.online — India's trusted platform for free financial calculators, loan comparison, government scheme guides, and document help. Built for every Indian.",
  alternates: { canonical: "https://indiaassist.online/about" },
  openGraph: {
    title: "About IndiaAssist | Free Finance Tools for Every Indian",
    description: "IndiaAssist is built to help every Indian navigate financial decisions, government schemes, and official documentation — simply and for free.",
    url: "https://indiaassist.online/about",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">About Us</span>
        </nav>

        {/* Hero */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About IndiaAssist</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            IndiaAssist.online is a free, independent financial guidance platform built specifically for Indian citizens. We believe that access to accurate financial information, government benefit guidance, and practical tools should not be limited to those who can afford financial advisors. Our mission is to put that knowledge in the hands of every Indian — whether you are a farmer in Punjab, a student in Tamil Nadu, a homebuyer in Maharashtra, or a small business owner in West Bengal.
          </p>
        </div>

        {/* Who We Are */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-blue-700" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Who We Are</h2>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              IndiaAssist was founded by a team of finance professionals, software engineers, and policy researchers who recognised a significant gap in India's digital information landscape. While banking apps and government portals have improved vastly over the past decade, most ordinary citizens still struggle to understand loan eligibility criteria, compare interest rates across banks, or figure out whether they qualify for a government scheme like PM Kisan, Ayushman Bharat, or PM Awas Yojana.
            </p>
            <p>
              We are not a bank, a financial institution, a lender, or a government body. We are an independent editorial platform that aggregates publicly available information, builds easy-to-use calculators, and presents complex financial concepts in plain, simple language. Every tool on our site — from the EMI calculator to the PPF maturity calculator — is built in-house by our engineering team and reviewed for accuracy by our finance editors.
            </p>
            <p>
              Our editorial team includes Chartered Accountants, MBA graduates with banking experience, and individuals who have worked closely with government scheme implementation at the district level. This combination of practical financial knowledge and on-ground policy awareness allows us to produce content that is both technically accurate and genuinely useful for real-world situations.
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section className="mb-10 bg-blue-50 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-blue-700" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our mission is simple: <strong>financial empowerment for every Indian through free, accurate, and easy-to-understand information.</strong>
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            India has one of the most extensive networks of government welfare schemes in the world. From health insurance under Ayushman Bharat to crop support under PM Kisan, from housing subsidies under PM Awas Yojana to education loans under the Central Sector Scheme — the government offers substantial support to citizens across income levels. Yet, research consistently shows that a large percentage of eligible beneficiaries never access these schemes simply because they don't know about them or find the application process confusing.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Similarly, financial decisions like taking a home loan, starting a SIP investment, or opening a PPF account can significantly impact a family's financial future — but without the right tools and information, many Indians make these decisions without understanding the full picture. IndiaAssist exists to change that.
          </p>
        </section>

        {/* What We Offer */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-3">
                <Calculator className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Financial Calculators</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our suite of over 50 free financial calculators covers everything from EMI calculations for home, car, and personal loans to SIP projections, PPF maturity amounts, FD interest calculations, NPS corpus estimates, and income tax calculations. Each calculator is designed with a clean interface and explains the formula being used so users can understand — not just get a number.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mb-3">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Loan Comparison</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Comparing loan offers from different banks can save lakhs of rupees over a loan tenure. Our loan comparison pages aggregate interest rate information from major public sector and private banks — SBI, HDFC Bank, ICICI Bank, Axis Bank, Bank of Baroda, PNB, and more — across home loans, personal loans, education loans, gold loans, car loans, and business loans.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center mb-3">
                <Landmark className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Government Scheme Guides</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We maintain detailed, regularly updated guides for over 200 central and state government schemes. Each guide covers eligibility criteria, benefit amounts, how to apply, required documents, and official portal links. Our eligibility checker tool allows users to input their basic details and instantly see which schemes they may qualify for.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-violet-600 rounded-lg flex items-center justify-center mb-3">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Document Guides</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Navigating India's documentation requirements can be daunting. Our step-by-step document guides cover the complete process for obtaining and updating PAN cards, Aadhaar cards, passports, driving licences, voter IDs, ration cards, and birth certificates — including required documents, fees, processing times, and official application links.
              </p>
            </div>
          </div>
        </section>

        {/* Editorial Commitment */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-green-700" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Our Editorial Commitment</h2>
          </div>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              All content published on IndiaAssist.online goes through a structured editorial process. Our writers research information from official government websites (such as india.gov.in, RBI.org.in, SEBI.gov.in, and respective ministry portals), official bank websites, and authoritative financial publications. This content is then reviewed by subject matter experts before publication.
            </p>
            <p>
              We update our scheme guides, interest rate tables, and calculator parameters regularly — typically within 72 hours of any government announcement or rate revision — to ensure the information you read is as current as possible. Each article carries a "Last Updated" date so you know when the information was last verified.
            </p>
            <p>
              We do not accept payment for editorial content. Banks and financial companies cannot pay to be featured or ranked higher in our loan comparison pages. Our rankings and recommendations, where present, are based purely on publicly available data and our editorial team's assessment.
            </p>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mb-10 bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Important Disclaimer</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            All information on IndiaAssist.online is provided for <strong>educational and informational purposes only</strong>. It does not constitute financial advice, investment advice, legal advice, or any other form of professional advice. The calculators on our site provide estimates based on the inputs you provide and standard formulas; actual loan EMIs, investment returns, or tax liabilities may differ based on your specific circumstances and the terms offered by your bank or financial institution.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Government scheme details, eligibility criteria, and benefit amounts are subject to change. Always verify the latest details on official government portals before making any financial or legal decisions. IndiaAssist.online shall not be held liable for any decisions made based on the information available on this website.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-6 bg-gray-50 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-gray-700" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            We welcome feedback, corrections, and suggestions. If you find any information on our site that is incorrect or outdated, please let us know and we will update it promptly. You can also reach out for content collaboration, corrections, or general inquiries.
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Email:</strong>{" "}
            <a href="mailto:contact@indiaassist.online" className="text-blue-700 hover:underline">
              contact@indiaassist.online
            </a>
          </p>
          <p className="text-gray-700">
            We typically respond to all emails within 2–3 business days.
          </p>
          <div className="mt-4">
            <Link href="/contact" className="inline-flex items-center px-5 py-2.5 bg-blue-700 text-white text-sm font-medium rounded-lg hover:bg-blue-800 transition-colors">
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
