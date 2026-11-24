import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | IndiaAssist",
  description: "Read the Terms of Service for IndiaAssist.online. Understand the rules governing your use of our financial calculators, scheme guides, and information services.",
  alternates: { canonical: "https://indiaassist.online/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Terms of Service</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-8">Last Updated: June 2025</p>

        <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-8">

          {/* Acceptance */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <p>
              These Terms of Service ("Terms") govern your access to and use of the IndiaAssist.online website, including all pages, tools, calculators, guides, articles, and other content available through the website (collectively, the "Service"). By accessing or using IndiaAssist.online in any way, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, please immediately discontinue your use of the Service.
            </p>
            <p className="mt-3">
              These Terms apply to all visitors, users, and others who access or use the Service, regardless of whether they are registered users or anonymous visitors. IndiaAssist.online is operated as an informational and educational platform for use within the Republic of India and by Indian citizens worldwide.
            </p>
            <p className="mt-3">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the Service after any changes constitutes your acceptance of the revised Terms. We encourage you to review these Terms periodically.
            </p>
          </section>

          {/* Description of Service */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Description of Service</h2>
            <p>
              IndiaAssist.online provides free educational and informational content related to personal finance, government welfare schemes, loan products offered by Indian banks, financial calculators, document application guidance, and related topics. The Service is provided on an "as-is" and "as-available" basis.
            </p>
            <p className="mt-3">
              We make no representations or warranties that the Service will be uninterrupted, error-free, or free of viruses or other harmful components. We reserve the right to modify, suspend, or discontinue the Service (or any part thereof) at any time, with or without notice, and we shall not be liable to you or any third party for any such modification, suspension, or discontinuation.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Intellectual Property Rights</h2>
            <p>
              All content on IndiaAssist.online — including but not limited to text, articles, guides, calculator interfaces, graphics, logos, icons, page layouts, and design elements — is the intellectual property of IndiaAssist.online or its content suppliers and is protected under Indian and international copyright, trademark, and other intellectual property laws.
            </p>
            <p className="mt-3">
              <strong>Permitted Use:</strong> You are granted a limited, non-exclusive, non-transferable, revocable licence to access and use the Service for personal, non-commercial informational purposes only. You may print or download a reasonable amount of content for your personal reference, provided you do not remove any copyright or proprietary notices.
            </p>
            <p className="mt-3">
              <strong>Prohibited Use:</strong> You may not reproduce, republish, distribute, transmit, sell, create derivative works from, or otherwise exploit any content from IndiaAssist.online for commercial purposes without our prior written consent. Scraping or automated extraction of content, data, or calculator results using bots, scripts, or other automated means is strictly prohibited.
            </p>
            <p className="mt-3">
              Government scheme information, interest rate data, and other publicly available facts are not subject to copyright. However, the manner in which we have researched, organised, written, and presented this information is our original work and is protected by copyright.
            </p>
          </section>

          {/* User Conduct */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. User Conduct</h2>
            <p>By using IndiaAssist.online, you agree that you will not:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Use the Service for any unlawful purpose or in violation of any applicable law or regulation in India or your jurisdiction of residence</li>
              <li>Attempt to gain unauthorised access to any part of the Service, our servers, or any network connected to the Service</li>
              <li>Use the Service to transmit any unsolicited commercial communications (spam)</li>
              <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
              <li>Use any automated means to access the Service in a manner that exceeds normal human usage patterns or that could damage, disable, or impair the Service</li>
              <li>Interfere with or disrupt the integrity or performance of the Service or the data contained therein</li>
              <li>Use the Service to collect or harvest any personal data of other users</li>
            </ul>
          </section>

          {/* Disclaimer of Accuracy */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Disclaimer of Accuracy and Completeness</h2>
            <p>
              While we make every reasonable effort to ensure that the information on IndiaAssist.online is accurate, complete, and up to date, we cannot guarantee the accuracy of all content at all times. Financial data such as loan interest rates, government scheme benefit amounts, eligibility criteria, and tax regulations change frequently. Government scheme announcements, RBI policy changes, and bank rate revisions can occur at any time.
            </p>
            <p className="mt-3">
              The financial calculators on IndiaAssist.online produce estimates based on standard mathematical formulas (such as the EMI formula, compound interest formula, etc.) and the values you input. These estimates are indicative only. Actual EMIs, returns, tax liability, or benefits you receive may differ materially from the estimates produced by our calculators due to factors including but not limited to: processing fees, prepayment charges, tax surcharges, scheme-specific rules, bank-specific underwriting criteria, and changes in interest rates during the loan tenure.
            </p>
            <p className="mt-3">
              <strong>We strongly encourage you to verify all critical information directly on official government portals (india.gov.in, myscheme.gov.in, etc.) or with qualified financial, legal, or tax professionals before making any financial or legal decisions.</strong>
            </p>
          </section>

          {/* No Financial Advice */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. No Financial, Legal, or Investment Advice</h2>
            <p>
              <strong>IndiaAssist.online is not a registered investment adviser, broker-dealer, financial planner, chartered accountant, or legal practitioner.</strong> Nothing on this website constitutes or should be construed as financial advice, investment advice, tax advice, legal advice, or any other form of professional advice regulated by SEBI, RBI, IRDAI, ICAI, the Bar Council of India, or any other regulatory body.
            </p>
            <p className="mt-3">
              The information, tools, and content provided on IndiaAssist.online are intended for general educational and informational purposes only. Any financial or legal decision you make based on information from this website is made entirely at your own risk and discretion. You should always consult with a qualified and licensed professional before making significant financial or legal decisions such as taking a loan, purchasing insurance, making an investment, or applying for a government scheme.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, IndiaAssist.online, its owners, editors, employees, contractors, and affiliates shall not be liable for any direct, indirect, incidental, special, consequential, exemplary, or punitive damages arising out of or in connection with:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Your use of or inability to use the Service</li>
              <li>Any financial loss, loan rejection, scheme rejection, or adverse financial outcome arising from reliance on information or calculator results on this website</li>
              <li>Any errors, inaccuracies, or omissions in any content on the website</li>
              <li>Unauthorised access to or alteration of your transmissions or data</li>
              <li>Any third-party content linked to or from this website</li>
              <li>Any interruption, suspension, or termination of the Service</li>
            </ul>
            <p className="mt-3">
              This limitation of liability applies whether the claim is based in contract, tort (including negligence), strict liability, or any other legal or equitable theory, even if we have been advised of the possibility of such damages.
            </p>
          </section>

          {/* Third Party Links */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Third-Party Links and Resources</h2>
            <p>
              IndiaAssist.online contains links to external websites, including official government portals, bank websites, and other authoritative resources. These links are provided for your convenience only. We do not endorse, control, or assume responsibility for the content, privacy policies, or practices of any third-party websites. Visiting a third-party website is at your own risk, and you should review the terms of service and privacy policy of any external site you visit.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Governing Law and Jurisdiction</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of the Republic of India. Any disputes arising out of or in connection with these Terms or your use of IndiaAssist.online shall be subject to the exclusive jurisdiction of the courts of India. If any provision of these Terms is found to be invalid or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Contact Us</h2>
            <p className="mb-3">
              If you have questions about these Terms of Service, or if you believe we have violated any applicable law or regulation, please contact us:
            </p>
            <p><strong>Email:</strong> <a href="mailto:contact@indiaassist.online" className="text-blue-700 hover:underline">contact@indiaassist.online</a></p>
            <p className="mt-1"><strong>Website:</strong> <a href="https://indiaassist.online" className="text-blue-700 hover:underline">https://indiaassist.online</a></p>
            <p className="mt-3 text-sm text-gray-500">
              We aim to respond to all legal and compliance inquiries within 5 business days.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
