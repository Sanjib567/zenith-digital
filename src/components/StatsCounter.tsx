"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function StatsCounter({
  value,
  suffix = "",
  label,
  className = "text-center",
  numberClass = "text-4xl font-extrabold text-brand-blue md:text-5xl",
  labelClass = "mt-2 text-sm text-brand-navy/70",
}: {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
  numberClass?: string;
  labelClass?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // Re-triggers every time the stat scrolls into view, not only the first time
  const inView = useInView(ref, { amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    setDisplay(0);
    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <div ref={ref} className={className}>
      <p className={`font-[var(--font-heading)] ${numberClass}`}>
        {display}
        {suffix}
      </p>
      <p className={labelClass}>{label}</p>
    </div>
  );
}