"use client";

export type DonutSegment = {
  label: string;
  value: number;
  color: string;
};

/**
 * Animated SVG donut chart. Segments animate smoothly because the
 * stroke-dasharray/offset values transition via CSS whenever they change.
 */
export default function DonutChart({
  segments,
  size = 200,
  thickness = 26,
  centerLabel,
  centerValue,
}: {
  segments: DonutSegment[];
  size?: number;
  thickness?: number;
  centerLabel?: string;
  centerValue?: string;
}) {
  const total = segments.reduce((sum, s) => sum + (s.value > 0 ? s.value : 0), 0);
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;

  let cumulative = 0;
  const arcs = segments.map((seg) => {
    const fraction = total > 0 ? Math.max(seg.value, 0) / total : 0;
    const dash = fraction * circumference;
    const arc = {
      ...seg,
      dash,
      gap: circumference - dash,
      offset: -cumulative,
      fraction,
    };
    cumulative += dash;
    return arc;
  });

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          role="img"
          aria-label="Breakdown chart"
          className="-rotate-90"
        >
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="#f1f5f9"
            strokeWidth={thickness}
          />
          {arcs.map((arc, i) => (
            <circle
              key={i}
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke={arc.color}
              strokeWidth={thickness}
              strokeLinecap="butt"
              strokeDasharray={`${arc.dash} ${arc.gap}`}
              strokeDashoffset={arc.offset}
              style={{
                transition:
                  "stroke-dasharray 0.5s ease, stroke-dashoffset 0.5s ease",
              }}
            />
          ))}
        </svg>
        {(centerLabel || centerValue) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            {centerValue && (
              <span className="text-lg font-bold text-ink-900">
                {centerValue}
              </span>
            )}
            {centerLabel && (
              <span className="mt-0.5 text-xs text-ink-500">{centerLabel}</span>
            )}
          </div>
        )}
      </div>

      <ul className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2">
        {segments.map((seg, i) => (
          <li key={i} className="flex items-center gap-2 text-sm">
            <span
              className="h-3 w-3 shrink-0 rounded-sm"
              style={{ backgroundColor: seg.color }}
              aria-hidden="true"
            />
            <span className="text-ink-600">{seg.label}</span>
            {total > 0 && (
              <span className="font-medium text-ink-900">
                {Math.round((Math.max(seg.value, 0) / total) * 100)}%
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
