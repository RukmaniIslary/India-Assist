"use client";

import { useEffect, useRef } from "react";

interface AdUnitProps {
  slot?: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  className?: string;
}

export default function AdUnit({ slot = "auto", format = "auto", className = "" }: AdUnitProps) {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      if (typeof window !== "undefined" && adRef.current) {
        // @ts-expect-error adsbygoogle is loaded via script
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch {
      // AdSense not loaded
    }
  }, []);

  return (
    <div ref={adRef} className={`ad-container my-6 ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-8685123310989975"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}

export function InArticleAd() {
  return <AdUnit format="auto" className="my-8" />;
}

export function SidebarAd() {
  return <AdUnit format="rectangle" className="sticky top-20" />;
}
