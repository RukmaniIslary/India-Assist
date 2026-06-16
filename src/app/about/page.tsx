import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "About India Assist",
  description:
    "India Assist is an independent assistance engine helping every Indian discover schemes, scholarships, documents and finance tools in one place.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About" }]} />
      <PageHeader
        title="About India Assist"
        description="Our mission is to help every Indian discover benefits, subsidies, scholarships and financial opportunities in one place."
      />
      <div className="container-page prose-content max-w-3xl py-10">
        <p>
          {siteConfig.name} is an independent information portal built to
          simplify how Indians find and access government schemes, scholarships,
          essential documents and personal finance tools. We bring scattered
          information together into a single, search-first experience.
        </p>
        <h2>What we do</h2>
        <p>
          We organise welfare schemes, scholarship directories and document
          procedures into clear, structured guides. Our calculators and
          eligibility engine help you make confident financial and benefit
          decisions in minutes.
        </p>
        <h2>Who we serve</h2>
        <p>
          Students, job seekers, farmers, senior citizens, low-income families,
          salaried employees and MSME owners across every Indian state and union
          territory.
        </p>
        <h2>Our commitment</h2>
        <p>
          We are not affiliated with any government body. We always link to
          official portals for final verification and applications, and we work
          to keep our content accurate and useful.
        </p>
        <p>
          Have feedback or a correction? Reach us on our{" "}
          <Link href="/contact" className="text-brand-700 underline">
            contact page
          </Link>
          .
        </p>
      </div>
    </>
  );
}
