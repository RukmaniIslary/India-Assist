import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdUnit from "@/components/AdSense";
import EligibilityWizard from "@/components/EligibilityWizard";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Eligibility Engine — Find Schemes You Qualify For",
  description:
    "Answer a few questions about your age, state, income and occupation to instantly discover government schemes and benefits you may be eligible for.",
  path: "/eligibility",
  keywords: ["scheme eligibility", "am I eligible", "benefit finder", "eligibility checker"],
});

export default function EligibilityPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Eligibility Engine" }]} />
      <PageHeader
        eyebrow="AI-assisted matching"
        title="Eligibility Engine"
        description="Tell us a little about yourself and we will match you with relevant schemes and benefits in seconds."
      />
      <div className="container-page py-10">
        <EligibilityWizard />
        <AdUnit />
      </div>
    </>
  );
}
