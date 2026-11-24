import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | IndiaAssist",
  description: "Read the Privacy Policy for IndiaAssist.online. Learn how we handle your data, how Google AdSense uses cookies, and your rights as a user.",
  alternates: { canonical: "https://indiaassist.online/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Privacy Policy</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last Updated: June 2025</p>

        <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-8">

          {/* Introduction */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
            <p>
              Welcome to IndiaAssist.online ("we", "our", "us"). We are committed to protecting your privacy and being transparent about how our website operates. This Privacy Policy explains what information we collect (and what we do not collect), how we use it, how third-party services such as Google AdSense interact with your data, and what rights you have as a visitor to our website.
            </p>
            <p className="mt-3">
              By using IndiaAssist.online, you agree to the practices described in this Privacy Policy. If you do not agree with any part of this policy, please discontinue use of our website. This policy applies to all pages, tools, calculators, and content available at indiaassist.online and any subdomains thereof.
            </p>
          </section>

          {/* Information We Do Not Collect */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Do Not Collect</h2>
            <p>
              IndiaAssist.online is a free, informational website. We do not require users to register, create an account, or log in to use any feature on our website, including all financial calculators, scheme guides, loan comparison pages, and document guides.
            </p>
            <p className="mt-3">
              As a result, <strong>we do not collect, store, or process the following categories of personal data</strong>:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Your name, email address, phone number, or postal address (unless you voluntarily contact us via the contact form)</li>
              <li>Financial information such as your income, bank account details, loan amounts, or investment data entered into our calculators — these calculations are performed entirely in your browser and no data is transmitted to our servers</li>
              <li>Aadhaar numbers, PAN numbers, or any other government identification numbers</li>
              <li>Health information or any other sensitive personal data</li>
              <li>Precise geolocation data</li>
            </ul>
            <p className="mt-3">
              The calculator inputs you enter on IndiaAssist.online (such as loan amount, interest rate, or tenure) are processed entirely on your device using client-side JavaScript. This data is never sent to our servers, stored in any database, or shared with any third party.
            </p>
          </section>

          {/* Information We May Collect */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Information We May Collect</h2>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">3.1 Contact Form Submissions</h3>
            <p>
              If you use the contact form on our website to send us a message, we collect the information you voluntarily provide: your name, email address, subject, and message. This information is used solely to respond to your inquiry. We do not add you to any mailing list or share your contact details with third parties.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-4">3.2 Server Logs</h3>
            <p>
              Like virtually all websites, our web server automatically records certain technical information when you visit, including your IP address (anonymised), browser type, operating system, referring URL, pages visited, and the date and time of your visit. This data is stored in server logs and is used only for the purposes of security monitoring, diagnosing technical issues, and understanding aggregate traffic patterns. Server log data is not linked to any personal identity and is regularly purged.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-4">3.3 Cookies and Tracking Technologies</h3>
            <p>
              IndiaAssist.online uses cookies — small text files stored on your device — for the purpose of displaying advertisements through Google AdSense. We do not use cookies for user authentication, personalisation, or tracking purposes beyond what is required for our advertising partner. Details of how Google AdSense uses cookies are explained in Section 5 below.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Cookies Policy</h2>
            <p>
              A cookie is a small data file placed on your computer or mobile device when you visit a website. Cookies help websites function correctly and allow website owners and advertisers to understand how visitors use their sites.
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-4">Types of Cookies on IndiaAssist.online</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-gray-900 border-b border-gray-200">Cookie Type</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-900 border-b border-gray-200">Purpose</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-900 border-b border-gray-200">Controlled By</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3">Advertising Cookies</td>
                    <td className="px-4 py-3">Serve relevant ads via Google AdSense</td>
                    <td className="px-4 py-3">Google LLC</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Analytics Cookies</td>
                    <td className="px-4 py-3">Aggregate website traffic analysis</td>
                    <td className="px-4 py-3">Google Analytics</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Functional Cookies</td>
                    <td className="px-4 py-3">Basic website operation</td>
                    <td className="px-4 py-3">IndiaAssist</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              You can control and manage cookies through your browser settings. Most browsers allow you to block or delete cookies. However, blocking all cookies may affect the functionality of some features on our site. For instructions on how to manage cookies in your specific browser, please refer to your browser's help documentation.
            </p>
          </section>

          {/* Google AdSense */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Google AdSense and Advertising</h2>
            <p>
              IndiaAssist.online uses Google AdSense, an advertising service provided by Google LLC ("Google"), to display advertisements on our website. Google AdSense allows us to generate revenue that helps keep IndiaAssist free for all users. No part of our editorial content is influenced by our advertising relationships.
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-4">How Google AdSense Works</h3>
            <p>
              Google AdSense uses cookies and web beacons to serve ads based on your prior visits to our website and other websites on the internet. Google's use of advertising cookies enables it and its partners to serve ads to you based on your browsing history. You may opt out of personalised advertising by visiting Google's <a href="https://www.google.com/settings/ads" className="text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">Ads Settings</a> page.
            </p>
            <p className="mt-3">
              Google's collection and use of information from sites that use its advertising services is governed by <a href="https://policies.google.com/privacy" className="text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a>. IndiaAssist.online does not control how Google uses the data it collects through AdSense cookies. We strongly recommend you read Google's Privacy Policy to understand how Google handles your data.
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-4">Interest-Based Advertising</h3>
            <p>
              Google may use your browsing behaviour across the websites it works with to show you more relevant advertisements. This is called interest-based advertising. To opt out of interest-based advertising from Google across all websites, you can visit the <a href="https://www.aboutads.info" className="text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance's opt-out page</a> or use the <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.
            </p>
          </section>

          {/* Third Party Links */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Third-Party Links</h2>
            <p>
              Our website contains links to external websites including official government portals, bank websites, SEBI and RBI websites, and other authoritative sources. These links are provided for your convenience and reference. Once you leave IndiaAssist.online and visit a third-party website, this Privacy Policy no longer applies. We have no control over and accept no responsibility for the content or privacy practices of any third-party sites. We encourage you to read the privacy policy of any external website you visit.
            </p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Data Security</h2>
            <p>
              Since we do not collect personal financial data (all calculator inputs are processed locally in your browser), there is no user financial data stored on our servers to secure. For any data we do handle — such as contact form submissions — we implement appropriate technical and organisational measures to prevent unauthorised access, disclosure, alteration, or destruction.
            </p>
            <p className="mt-3">
              Our website is served over HTTPS, which encrypts data transmitted between your browser and our servers. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Children */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Children's Privacy</h2>
            <p>
              IndiaAssist.online is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us at <a href="mailto:contact@indiaassist.online" className="text-blue-700 hover:underline">contact@indiaassist.online</a> and we will take steps to delete such information.
            </p>
          </section>

          {/* User Rights */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Your Rights</h2>
            <p>
              As a user of IndiaAssist.online, you have the following rights with respect to any personal data we may hold about you (e.g., from a contact form submission):
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong>Right of Access:</strong> You may request a copy of any personal data we hold about you.</li>
              <li><strong>Right to Rectification:</strong> You may request that we correct any inaccurate information we hold about you.</li>
              <li><strong>Right to Erasure:</strong> You may request that we delete any personal data we hold about you, subject to certain conditions.</li>
              <li><strong>Right to Object:</strong> You may object to the processing of your personal data in certain circumstances.</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us at <a href="mailto:contact@indiaassist.online" className="text-blue-700 hover:underline">contact@indiaassist.online</a>. We will respond to your request within 30 days.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Changes to This Privacy Policy</h2>
            <p>
              We reserve the right to update this Privacy Policy at any time to reflect changes in our practices, technology, legal requirements, or for any other reason. When we make material changes, we will update the "Last Updated" date at the top of this page. We encourage you to review this page periodically to stay informed about how we are protecting your information. Your continued use of IndiaAssist.online after any changes to this Privacy Policy constitutes your acceptance of those changes.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">11. Contact Us</h2>
            <p className="mb-3">
              If you have any questions, concerns, or complaints about this Privacy Policy or our data practices, please contact us:
            </p>
            <p><strong>Email:</strong> <a href="mailto:contact@indiaassist.online" className="text-blue-700 hover:underline">contact@indiaassist.online</a></p>
            <p className="mt-1"><strong>Website:</strong> <a href="https://indiaassist.online" className="text-blue-700 hover:underline">https://indiaassist.online</a></p>
            <p className="mt-3 text-sm text-gray-500">
              We aim to respond to all privacy-related queries within 5 business days.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
