"use client";

import { useState } from "react";

const PALETTES: [string, string][] = [
  ["#2563eb", "#7c3aed"],
  ["#db2777", "#f97316"],
  ["#16a34a", "#0891b2"],
  ["#0ea5e9", "#4f46e5"],
  ["#ea580c", "#e11d48"],
  ["#7c3aed", "#db2777"],
];

// Picks a stable colour pair for each technology name
function paletteFor(name: string): [string, string] {
  let h = 0;
  for (const c of name) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return PALETTES[h % PALETTES.length];
}

function Illustration({ name }: { name: string }) {
  const [a, b] = paletteFor(name);
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden" style={{ background: `linear-gradient(135deg, ${a}, ${b})` }}>
      <div className="ti-grid absolute inset-0 opacity-30" />
      <span className="ti-ring absolute h-64 w-64 rounded-full border-2 border-white/30" />
      <span className="ti-ring ti-ring-b absolute h-40 w-40 rounded-full border-2 border-white/40" />
      <span className="ti-ring ti-ring-c absolute h-24 w-24 rounded-full bg-white/15" />
      <div className="relative px-6 text-center">
        <p className="font-[var(--font-heading)] text-3xl font-extrabold text-white drop-shadow-lg md:text-4xl">{name}</p>
        <p className="mt-2 text-[10px] font-extrabold uppercase tracking-[0.35em] text-white/80">Technology</p>
      </div>
      <style>{`
        @keyframes ti-spin { to { transform: rotate(360deg); } }
        @keyframes ti-breathe { 0%,100% { transform: scale(1); opacity: 0.6; } 50% { transform: scale(1.08); opacity: 1; } }
        @keyframes ti-grid { from { background-position: 0 0; } to { background-position: 32px 32px; } }
        .ti-ring { animation: ti-spin 18s linear infinite; }
        .ti-ring-b { animation-duration: 12s; animation-direction: reverse; }
        .ti-ring-c { animation: ti-breathe 4s ease-in-out infinite; }
        .ti-grid {
          background-image: linear-gradient(to right, rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.18) 1px, transparent 1px);
          background-size: 32px 32px;
          animation: ti-grid 10s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) { .ti-ring, .ti-ring-b, .ti-ring-c, .ti-grid { animation: none !important; } }
      `}</style>
    </div>
  );
}

export default function TechImage({ src, name, className = "" }: { src: string; name: string; className?: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!failed ? (
        <img
          src={src}
          alt={name}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <Illustration name={name} />
      )}
    </div>
  );
}