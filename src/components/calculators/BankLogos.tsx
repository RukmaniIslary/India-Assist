/**
 * Indian bank and financial institution logos.
 * Sources:
 * - SBI, HDFC, ICICI, Axis, Kotak, PNB, Bank of Baroda:
 *   Real SVGs sourced from official bank websites via the
 *   praveenpuglia/indian-banks open-source repository.
 * - India Post, LIC HFL, AMC logos:
 *   Hand-crafted SVGs matching official brand colors.
 */

// ── Type ──────────────────────────────────────────────────────────────────────
type LogoProps = {
  className?: string;
  height?: number; // px — controls rendered height; width scales automatically
};

// ── Real bank logos (official SVG files) ─────────────────────────────────────
export function SBILogo({ height = 36, className = "" }: LogoProps) {
  return (
    <img
      src="/banks/sbin.svg"
      alt="State Bank of India"
      height={height}
      style={{ height, width: "auto", display: "block" }}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}

export function HDFCLogo({ height = 36, className = "" }: LogoProps) {
  return (
    <img
      src="/banks/hdfc.svg"
      alt="HDFC Bank"
      height={height}
      style={{ height, width: "auto", display: "block" }}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}

export function ICICILogo({ height = 36, className = "" }: LogoProps) {
  return (
    <img
      src="/banks/icic.svg"
      alt="ICICI Bank"
      height={height}
      style={{ height, width: "auto", display: "block" }}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}

export function AxisLogo({ height = 36, className = "" }: LogoProps) {
  return (
    <img
      src="/banks/utib.svg"
      alt="Axis Bank"
      height={height}
      style={{ height, width: "auto", display: "block" }}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}

export function KotakLogo({ height = 36, className = "" }: LogoProps) {
  return (
    <img
      src="/banks/kkbk.svg"
      alt="Kotak Mahindra Bank"
      height={height}
      style={{ height, width: "auto", display: "block" }}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}

export function PNBLogo({ height = 36, className = "" }: LogoProps) {
  return (
    <img
      src="/banks/punb.svg"
      alt="Punjab National Bank"
      height={height}
      style={{ height, width: "auto", display: "block" }}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}

export function BoBLogo({ height = 36, className = "" }: LogoProps) {
  return (
    <img
      src="/banks/barb.svg"
      alt="Bank of Baroda"
      height={height}
      style={{ height, width: "auto", display: "block" }}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}

// ── Hand-crafted logos for institutions not in the public repos ───────────────

export function IndiaPostLogo({ height = 36, className = "" }: LogoProps) {
  const w = Math.round(height * (200 / 120));
  return (
    <svg width={w} height={height} viewBox="0 0 200 120" fill="none"
      aria-label="India Post" className={className}>
      <rect width="200" height="120" rx="6" fill="#CE3326" />
      <rect x="14" y="38" width="36" height="26" rx="2" fill="white" opacity="0.9" />
      <path d="M14 38 L32 54 L50 38" stroke="#CE3326" strokeWidth="2" fill="none" />
      <text x="118" y="66" textAnchor="middle" fontFamily="Arial, sans-serif"
        fontWeight="900" fontSize="30" fill="white">INDIA</text>
      <text x="118" y="96" textAnchor="middle" fontFamily="Arial, sans-serif"
        fontWeight="900" fontSize="30" fill="white">POST</text>
    </svg>
  );
}

export function LICHFLLogo({ height = 36, className = "" }: LogoProps) {
  const w = Math.round(height * (200 / 120));
  return (
    <svg width={w} height={height} viewBox="0 0 200 120" fill="none"
      aria-label="LIC Housing Finance" className={className}>
      <rect width="200" height="120" rx="6" fill="#003A72" />
      <rect x="0" y="0" width="200" height="8" rx="2" fill="#F37021" />
      <rect x="0" y="112" width="200" height="8" rx="2" fill="#F37021" />
      <text x="100" y="65" textAnchor="middle" fontFamily="Arial, sans-serif"
        fontWeight="900" fontSize="42" fill="#F37021">LIC</text>
      <text x="100" y="96" textAnchor="middle" fontFamily="Arial, sans-serif"
        fontWeight="700" fontSize="16" fill="white" letterSpacing="1">HOUSING FINANCE</text>
    </svg>
  );
}

// ── AMC logos ─────────────────────────────────────────────────────────────────

export function SBIMFLogo({ height = 36, className = "" }: LogoProps) {
  const w = Math.round(height * (200 / 70));
  return (
    <svg width={w} height={height} viewBox="0 0 200 70" fill="none"
      aria-label="SBI Mutual Fund" className={className}>
      <rect width="200" height="70" rx="6" fill="#22409A" />
      <ellipse cx="24" cy="26" rx="10" ry="10" fill="white" />
      <ellipse cx="24" cy="26" rx="4.5" ry="4.5" fill="#22409A" />
      <path d="M14 33 Q14 44 24 44 Q34 44 34 33" fill="white" />
      <text x="118" y="32" textAnchor="middle" fontFamily="Arial, sans-serif"
        fontWeight="900" fontSize="26" fill="white">SBI MF</text>
      <text x="118" y="56" textAnchor="middle" fontFamily="Arial, sans-serif"
        fontWeight="400" fontSize="14" fill="white" letterSpacing="1">Mutual Fund</text>
    </svg>
  );
}

export function HDFCMFLogo({ height = 36, className = "" }: LogoProps) {
  const w = Math.round(height * (200 / 70));
  return (
    <svg width={w} height={height} viewBox="0 0 200 70" fill="none"
      aria-label="HDFC Mutual Fund" className={className}>
      <rect width="200" height="70" rx="6" fill="#004c8f" />
      <rect x="0" y="0" width="14" height="70" rx="2" fill="#ED232A" />
      <text x="110" y="36" textAnchor="middle" fontFamily="Arial, sans-serif"
        fontWeight="900" fontSize="30" fill="white">HDFC</text>
      <text x="110" y="58" textAnchor="middle" fontFamily="Arial, sans-serif"
        fontWeight="400" fontSize="14" fill="white" letterSpacing="1">Mutual Fund</text>
    </svg>
  );
}

export function ICICIPruLogo({ height = 36, className = "" }: LogoProps) {
  const w = Math.round(height * (200 / 70));
  return (
    <svg width={w} height={height} viewBox="0 0 200 70" fill="none"
      aria-label="ICICI Prudential Mutual Fund" className={className}>
      <rect width="200" height="70" rx="6" fill="#004a7f" />
      <path d="M162 0 L200 0 L200 70 L172 70 Z" fill="#f06321" />
      <text x="92" y="34" textAnchor="middle" fontFamily="Arial, sans-serif"
        fontWeight="900" fontSize="24" fill="white">ICICI Pru</text>
      <text x="92" y="56" textAnchor="middle" fontFamily="Arial, sans-serif"
        fontWeight="400" fontSize="14" fill="white" letterSpacing="1">Mutual Fund</text>
    </svg>
  );
}

export function MiraeAssetLogo({ height = 36, className = "" }: LogoProps) {
  const w = Math.round(height * (200 / 70));
  return (
    <svg width={w} height={height} viewBox="0 0 200 70" fill="none"
      aria-label="Mirae Asset Mutual Fund" className={className}>
      <rect width="200" height="70" rx="6" fill="#00529B" />
      <path d="M8 50 Q16 20 24 36 Q32 52 40 20 Q48 -12 56 24"
        stroke="#00A651" strokeWidth="6" fill="none" strokeLinecap="round" />
      <text x="130" y="32" textAnchor="middle" fontFamily="Arial, sans-serif"
        fontWeight="900" fontSize="20" fill="white">Mirae Asset</text>
      <text x="130" y="56" textAnchor="middle" fontFamily="Arial, sans-serif"
        fontWeight="400" fontSize="14" fill="white" letterSpacing="1">Mutual Fund</text>
    </svg>
  );
}

export function AxisMFLogo({ height = 36, className = "" }: LogoProps) {
  const w = Math.round(height * (200 / 70));
  return (
    <svg width={w} height={height} viewBox="0 0 200 70" fill="none"
      aria-label="Axis Mutual Fund" className={className}>
      <rect width="200" height="70" rx="6" fill="#97144D" />
      <polygon points="8,60 20,10 27,10 15,60" fill="#F26C23" opacity="0.9" />
      <polygon points="14,34 34,34 31,43 11,43" fill="#F26C23" opacity="0.7" />
      <text x="118" y="33" textAnchor="middle" fontFamily="Arial, sans-serif"
        fontWeight="900" fontSize="24" fill="white">Axis MF</text>
      <text x="118" y="56" textAnchor="middle" fontFamily="Arial, sans-serif"
        fontWeight="400" fontSize="14" fill="white" letterSpacing="1">Mutual Fund</text>
    </svg>
  );
}
