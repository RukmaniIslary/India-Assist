import Link from "next/link";
import Logo from "./Logo";
import { footerNav, siteConfig } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-ink-200 bg-ink-50">
      <div className="container-page py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-600">
              {siteConfig.description}
            </p>
            <p className="mt-4 text-sm text-ink-600">
              Write to us:{" "}
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
              <h3 className="text-sm font-semibold text-ink-900">{group}</h3>
              <ul className="mt-3 space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-600 transition hover:text-brand-700"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-ink-200 bg-white p-4 text-xs leading-relaxed text-ink-500">
          <strong className="text-ink-700">Disclaimer:</strong> India Assist is
          an independent information portal and is not affiliated with any
          government body. Scheme details, eligibility and calculators are
          indicative. Always verify the latest rules on official government
          portals before applying.
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-ink-200 pt-6 sm:flex-row">
          <p className="text-sm text-ink-500">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-ink-500">
            <Link href="/privacy" className="hover:text-brand-700">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-brand-700">
              Terms
            </Link>
            <Link href="/disclaimer" className="hover:text-brand-700">
              Disclaimer
            </Link>
            <Link href="/sitemap.xml" className="hover:text-brand-700">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
