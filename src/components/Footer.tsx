"use client";

import Link from "next/link";
import Logo from "./Logo";
import { footerNav, siteConfig } from "@/lib/site";
import { useT, T } from "@/lib/i18n";

export default function Footer() {
  const year = new Date().getFullYear();
  const t = useT();
  return (
    <footer className="mt-16 border-t border-ink-200 bg-ink-50">
      <div className="container-page py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-600">
              <T
                en={siteConfig.description}
                hi="इंडिया असिस्ट हर भारतीय को सरकारी योजनाएं, छात्रवृत्ति, दस्तावेज़ प्रक्रियाएं, वित्त कैलकुलेटर और पात्रता एक ही जगह खोजने में मदद करता है।"
              />
            </p>
            <p className="mt-4 text-sm text-ink-600">
              <T en="Write to us:" hi="हमें लिखें:" />{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-medium text-brand-700 hover:underline"
              >
                {siteConfig.email}
              </a>
            </p>
          </div>

          {Object.entries(footerNav).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-sm font-semibold text-ink-900">{t(group)}</h3>
              <ul className="mt-3 space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-600 transition hover:text-brand-700"
                    >
                      {t(link.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-ink-200 bg-white p-4 text-xs leading-relaxed text-ink-500">
          <strong className="text-ink-700">
            <T en="Disclaimer:" hi="अस्वीकरण:" />
          </strong>{" "}
          <T
            en="India Assist is an independent information portal and is not affiliated with any government body. Scheme details, eligibility and calculators are indicative. Always verify the latest rules on official government portals before applying."
            hi="इंडिया असिस्ट एक स्वतंत्र सूचना पोर्टल है और किसी सरकारी निकाय से संबद्ध नहीं है। योजना विवरण, पात्रता और कैलकुलेटर सांकेतिक हैं। आवेदन से पहले हमेशा आधिकारिक सरकारी पोर्टल पर नवीनतम नियम सत्यापित करें।"
          />
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-ink-200 pt-6 sm:flex-row">
          <p className="text-sm text-ink-500">
            © {year} {siteConfig.name}.{" "}
            <T en="All rights reserved." hi="सर्वाधिकार सुरक्षित।" />
          </p>
          <div className="flex items-center gap-4 text-sm text-ink-500">
            <Link href="/privacy" className="hover:text-brand-700">
              {t("Privacy")}
            </Link>
            <Link href="/terms" className="hover:text-brand-700">
              {t("Terms")}
            </Link>
            <Link href="/disclaimer" className="hover:text-brand-700">
              {t("Disclaimer")}
            </Link>
            <Link href="/sitemap.xml" className="hover:text-brand-700">
              {t("Sitemap")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
