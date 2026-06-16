import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with the India Assist team for feedback, corrections, partnerships or support.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <PageHeader
        title="Contact Us"
        description="We would love to hear your feedback, corrections and partnership ideas."
      />
      <div className="container-page grid gap-8 py-10 lg:grid-cols-2">
        <ContactForm />
        <div className="space-y-4">
          <div className="card">
            <h2 className="font-semibold text-ink-900">Email</h2>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-1 inline-block text-brand-700 hover:underline"
            >
              {siteConfig.email}
            </a>
          </div>
          <div className="card">
            <h2 className="font-semibold text-ink-900">Editorial corrections</h2>
            <p className="mt-1 text-sm text-ink-600">
              Found outdated scheme details or a broken official link? Let us
              know and we will review it promptly.
            </p>
          </div>
          <div className="card">
            <h2 className="font-semibold text-ink-900">Partnerships</h2>
            <p className="mt-1 text-sm text-ink-600">
              For sponsored listings, finance affiliates and advertising,
              include your company details in your message.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
