import EmiCalculator from "./EmiCalculator";
import SipCalculator from "./SipCalculator";
import LoanEligibilityCalculator from "./LoanEligibilityCalculator";
import FdCalculator from "./FdCalculator";
import PpfCalculator from "./PpfCalculator";
import IncomeTaxCalculator from "./IncomeTaxCalculator";

export default function CalculatorRenderer({ slug }: { slug: string }) {
  switch (slug) {
    case "emi":
      return <EmiCalculator />;
    case "sip":
      return <SipCalculator />;
    case "loan-eligibility":
      return <LoanEligibilityCalculator />;
    case "fd":
      return <FdCalculator />;
    case "ppf":
      return <PpfCalculator />;
    case "income-tax":
      return <IncomeTaxCalculator />;
    default:
      return (
        <p className="rounded-lg border border-dashed border-ink-200 p-8 text-center text-ink-500">
          This calculator is coming soon.
        </p>
      );
  }
}
