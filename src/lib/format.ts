export function formatINR(value: number, fractionDigits = 0): string {
  if (!isFinite(value)) return "—";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: fractionDigits,
    minimumFractionDigits: 0,
  }).format(Math.round(value * 100) / 100);
}

export function formatNumber(value: number): string {
  if (!isFinite(value)) return "—";
  return new Intl.NumberFormat("en-IN").format(Math.round(value));
}
