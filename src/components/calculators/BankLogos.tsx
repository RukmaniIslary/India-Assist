/**
 * Hand-crafted SVG logos for major Indian banks and financial institutions.
 * Colors and shapes match each brand's actual visual identity.
 * No external image dependencies — fully inline SVG.
 */

// ── SBI ──────────────────────────────────────────────────────────────────────
export function SBILogo({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-label="State Bank of India">
      <rect width="48" height="48" rx="6" fill="#22409A" />
      {/* SBI keyhole symbol */}
      <ellipse cx="24" cy="15" rx="7" ry="7" fill="white" />
      <ellipse cx="24" cy="15" rx="3.5" ry="3.5" fill="#22409A" />
      <path d="M17 22 Q17 34 24 34 Q31 34 31 22" fill="white" />
      <rect x="20" y="26" width="8" height="2.5" rx="1.25" fill="#22409A" />
    </svg>
  );
}

// ── HDFC Bank ────────────────────────────────────────────────────────────────
export function HDFCLogo({ size = 48 }: { size?: number }) {
  const h = Math.round(size * 0.6);
  return (
    <svg width={size} height={h} viewBox="0 60 200 120" fill="none" aria-label="HDFC Bank">
      <rect x="0" y="60" width="200" height="120" rx="6" fill="#C22626" />
      <text x="100" y="138" textAnchor="middle" fontFamily="Arial, sans-serif"
        fontWeight="900" fontSize="52" fill="white" letterSpacing="2">HDFC</text>
      <text x="100" y="164" textAnchor="middle" fontFamily="Arial, sans-serif"
        fontWeight="400" fontSize="22" fill="white" letterSpacing="8">BANK</text>
    </svg>
  );
}

// ── ICICI Bank ───────────────────────────────────────────────────────────────
export function ICICILogo({ size = 48 }: { size?: number }) {
  const h = Math.round(size * 0.6);
  return (
    <svg width={size} height={h} viewBox="0 0 200 120" fill="none" aria-label="ICICI Bank">
      <rect width="200" height="120" rx="6" fill="#AC1C2D" />
      {/* Orange diagonal bar */}
      <path d="M148 0 L200 0 L200 120 L158 120 Z" fill="#F47B20" />
      <text x="95" y="76" textAnchor="middle" fontFamily="Arial, sans-serif"
        fontWeight="900" fontSize="48" fill="white">ICICI</text>
      <text x="95" y="104" textAnchor="middle" fontFamily="Arial, sans-serif"
        fontWeight="400" fontSize="20" fill="white" letterSpacing="6">BANK</text>
    </svg>
  );
}

// ── Axis Bank ────────────────────────────────────────────────────────────────
export function AxisLogo({ size = 48 }: { size?: number }) {
  const h = Math.round(size * 0.6);
  return (
    <svg width={size} height={h} viewBox="0 0 200 120" fill="none" aria-label="Axis Bank">
      <rect width="200" height="120" rx="6" fill="#97144D" />
      {/* Axis stylised A accent */}
      <polygon points="15,95 35,25 45,25 25,95" fill="#F26C23" opacity="0.9" />
      <polygon points="25,60 55,60 50,72 20,72" fill="#F26C23" opacity="0.7" />
      <text x="108" y="76" textAnchor="middle" fontFamily="Arial, sans-serif"
        fontWeight="900" fontSize="44" fill="white">axis</text>
      <text x="108" y="103" textAnchor="middle" fontFamily="Arial, sans-serif"
        fontWeight="400" fontSize="18" fill="white" letterSpacing="6">BANK</text>
    </svg>
  );
}

// ── Kotak Mahindra Bank ──────────────────────────────────────────────────────
export function KotakLogo({ size = 48 }: { size?: number }) {
  const h = Math.round(size * 0.6);
  return (
    <svg width={size} height={h} viewBox="0 0 200 120" fill="none" aria-label="Kotak Mahindra Bank">
      <rect width="200" height="120" rx="6" fill="#ED1B2E" />
      <text x="100" y="72" textAnchor="middle" fontFamily="Arial, sans-serif"
        fontWeight="900" fontSize="44" fill="white">Kotak</text>
      <text x="100" y="100" textAnchor="middle" fontFamily="Arial, sans-serif"
        fontWeight="400" fontSize="17" fill="white" letterSpacing="2">Mahindra Bank</text>
    </svg>
  );
}

// ── Punjab National Bank ─────────────────────────────────────────────────────
export function PNBLogo({ size = 48 }: { size?: number }) {
  const h = Math.round(size * 0.6);
  return (
    <svg width={size} height={h} viewBox="0 0 200 120" fill="none" aria-label="Punjab National Bank">
      <rect width="200" height="120" rx="6" fill="#1A3A6C" />
      {/* Orange accent bar */}
      <rect x="0" y="0" width="10" height="120" rx="2" fill="#F47920" />
      <text x="108" y="72" textAnchor="middle" fontFamily="Arial, sans-serif"
        fontWeight="900" fontSize="54" fill="#F47920">PNB</text>
      <text x="108" y="100" textAnchor="middle" fontFamily="Arial, sans-serif"
        fontWeight="400" fontSize="14" fill="white" letterSpacing="1">Punjab National Bank</text>
    </svg>
  );
}

// ── Bank of Baroda ───────────────────────────────────────────────────────────
export function BoBLogo({ size = 48 }: { size?: number }) {
  const h = Math.round(size * 0.6);
  return (
    <svg width={size} height={h} viewBox="0 0 200 120" fill="none" aria-label="Bank of Baroda">
      <rect width="200" height="120" rx="6" fill="#F37021" />
      {/* Double diamond / sunflower motif simplified */}
      <circle cx="30" cy="60" r="22" fill="white" opacity="0.15" />
      <circle cx="30" cy="60" r="14" fill="white" opacity="0.25" />
      <circle cx="30" cy="60" r="7" fill="white" />
      <text x="118" y="68" textAnchor="middle" fontFamily="Arial, sans-serif"
        fontWeight="900" fontSize="36" fill="white">Bank of</text>
      <text x="118" y="100" textAnchor="middle" fontFamily="Arial, sans-serif"
        fontWeight="900" fontSize="36" fill="white">Baroda</text>
    </svg>
  );
}

// ── India Post (Post Office) ─────────────────────────────────────────────────
export function IndiaPostLogo({ size = 48 }: { size?: number }) {
  const h = Math.round(size * 0.6);
  return (
    <svg width={size} height={h} viewBox="0 0 200 120" fill="none" aria-label="India Post">
      <rect width="200" height="120" rx="6" fill="#CE3326" />
      {/* Envelope motif */}
      <rect x="14" y="38" width="36" height="26" rx="2" fill="white" opacity="0.9" />
      <path d="M14 38 L32 54 L50 38" stroke="#CE3326" strokeWidth="2" fill="none" />
      <text x="118" y="66" textAnchor="middle" fontFamily="Arial, sans-serif"
        fontWeight="900" fontSize="30" fill="white">INDIA</text>
      <text x="118" y="96" textAnchor="middle" fontFamily="Arial, sans-serif"
        fontWeight="900" fontSize="30" fill="white">POST</text>
    </svg>
  );
}

// ── LIC Housing Finance ──────────────────────────────────────────────────────
export function LICHFLLogo({ size = 48 }: { size?: number }) {
  const h = Math.round(size * 0.6);
  return (
    <svg width={size} height={h} viewBox="0 0 200 120" fill="none" aria-label="LIC Housing Finance">
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

// ── SBI Mutual Fund ──────────────────────────────────────────────────────────
export function SBIMFLogo({ size = 48 }: { size?: number }) {
  const h = Math.round(size * 0.6);
  return (
    <svg width={size} height={h} viewBox="0 0 200 120" fill="none" aria-label="SBI Mutual Fund">
      <rect width="200" height="120" rx="6" fill="#22409A" />
      <ellipse cx="26" cy="42" rx="12" ry="12" fill="white" />
      <ellipse cx="26" cy="42" rx="5.5" ry="5.5" fill="#22409A" />
      <path d="M14 52 Q14 65 26 65 Q38 65 38 52" fill="white" />
      <text x="120" y="56" textAnchor="middle" fontFamily="Arial, sans-serif"
        fontWeight="900" fontSize="34" fill="white">SBI MF</text>
      <text x="120" y="90" textAnchor="middle" fontFamily="Arial, sans-serif"
        fontWeight="400" fontSize="16" fill="white" letterSpacing="1">Mutual Fund</text>
    </svg>
  );
}

// ── HDFC Mutual Fund ─────────────────────────────────────────────────────────
export function HDFCMFLogo({ size = 48 }: { size?: number }) {
  const h = Math.round(size * 0.6);
  return (
    <svg width={size} height={h} viewBox="0 0 200 120" fill="none" aria-label="HDFC Mutual Fund">
      <rect width="200" height="120" rx="6" fill="#C22626" />
      <text x="100" y="62" textAnchor="middle" fontFamily="Arial, sans-serif"
        fontWeight="900" fontSize="42" fill="white">HDFC</text>
      <text x="100" y="96" textAnchor="middle" fontFamily="Arial, sans-serif"
        fontWeight="400" fontSize="18" fill="white" letterSpacing="1">Mutual Fund</text>
    </svg>
  );
}

// ── ICICI Prudential MF ──────────────────────────────────────────────────────
export function ICICIPruLogo({ size = 48 }: { size?: number }) {
  const h = Math.round(size * 0.6);
  return (
    <svg width={size} height={h} viewBox="0 0 200 120" fill="none" aria-label="ICICI Prudential Mutual Fund">
      <rect width="200" height="120" rx="6" fill="#AC1C2D" />
      <path d="M162 0 L200 0 L200 120 L172 120 Z" fill="#F47B20" />
      <text x="96" y="58" textAnchor="middle" fontFamily="Arial, sans-serif"
        fontWeight="900" fontSize="34" fill="white">ICICI Pru</text>
      <text x="96" y="90" textAnchor="middle" fontFamily="Arial, sans-serif"
        fontWeight="400" fontSize="16" fill="white" letterSpacing="1">Mutual Fund</text>
    </svg>
  );
}

// ── Mirae Asset ──────────────────────────────────────────────────────────────
export function MiraeAssetLogo({ size = 48 }: { size?: number }) {
  const h = Math.round(size * 0.6);
  return (
    <svg width={size} height={h} viewBox="0 0 200 120" fill="none" aria-label="Mirae Asset Mutual Fund">
      <rect width="200" height="120" rx="6" fill="#00529B" />
      {/* Stylised "M" wave motif */}
      <path d="M10 85 Q20 45 32 65 Q44 85 56 45 Q68 5 80 45" stroke="#00A651" strokeWidth="8"
        fill="none" strokeLinecap="round" />
      <text x="138" y="58" textAnchor="middle" fontFamily="Arial, sans-serif"
        fontWeight="900" fontSize="26" fill="white">Mirae</text>
      <text x="138" y="84" textAnchor="middle" fontFamily="Arial, sans-serif"
        fontWeight="700" fontSize="20" fill="#00A651">Asset</text>
      <text x="138" y="106" textAnchor="middle" fontFamily="Arial, sans-serif"
        fontWeight="400" fontSize="14" fill="white">Mutual Fund</text>
    </svg>
  );
}

// ── Axis Mutual Fund ─────────────────────────────────────────────────────────
export function AxisMFLogo({ size = 48 }: { size?: number }) {
  const h = Math.round(size * 0.6);
  return (
    <svg width={size} height={h} viewBox="0 0 200 120" fill="none" aria-label="Axis Mutual Fund">
      <rect width="200" height="120" rx="6" fill="#97144D" />
      <polygon points="10,95 28,20 38,20 20,95" fill="#F26C23" opacity="0.9" />
      <polygon points="20,57 46,57 42,70 16,70" fill="#F26C23" opacity="0.7" />
      <text x="118" y="60" textAnchor="middle" fontFamily="Arial, sans-serif"
        fontWeight="900" fontSize="34" fill="white">Axis MF</text>
      <text x="118" y="92" textAnchor="middle" fontFamily="Arial, sans-serif"
        fontWeight="400" fontSize="16" fill="white" letterSpacing="1">Mutual Fund</text>
    </svg>
  );
}

// ── Paytm Payments Bank ──────────────────────────────────────────────────────
export function PaytmLogo({ size = 48 }: { size?: number }) {
  const h = Math.round(size * 0.6);
  return (
    <svg width={size} height={h} viewBox="0 0 200 120" fill="none" aria-label="Paytm Payments Bank">
      <rect width="200" height="120" rx="6" fill="#00B9F1" />
      <text x="100" y="75" textAnchor="middle" fontFamily="Arial, sans-serif"
        fontWeight="900" fontSize="48" fill="white">paytm</text>
    </svg>
  );
}
