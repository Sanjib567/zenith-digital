"use client";

import { useState } from "react";
import { Brain, Globe, Search, Sparkles, type LucideIcon } from "lucide-react";

type Tone = { from: string; to: string };

// Maps a string key to the icon, so no component function crosses the server/client boundary
const ICONS: Record<string, LucideIcon> = {
  search: Search,
  globe: Globe,
  sparkles: Sparkles,
  brain: Brain,
};

// Shows the article photo with the Zenith logo on top.
// If the photo is missing, it shows a colour gradient with an icon, so the layout never breaks.
export default function BlogImage({
  src,
  alt,
  iconName,
  tone,
  className = "",
  iconSize = 56,
}: {
  src: string;
  alt: string;
  iconName: string;
  tone: Tone;
  className?: string;
  iconSize?: number;
}) {
  const [failed, setFailed] = useState(false);
  const Icon = ICONS[iconName] ?? Sparkles;

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: `linear-gradient(135deg, ${tone.from}, ${tone.to})` }}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className="bi-zoom h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-white/90">
          <Icon size={iconSize} className="bi-float" />
        </div>
      )}

      {/* Zenith logo badge */}
      <div className="absolute left-3 top-3 flex items-center rounded-xl bg-white/95 px-2 py-1.5 shadow-lg ring-1 ring-white/60">
        <img src="/images/zenith-logo.jpeg" alt="Zenith Digital Agency" className="h-7 w-auto object-contain md:h-8" />
      </div>

      <style>{`
        @keyframes bi-zoom { 0%,100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        @keyframes bi-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        .bi-zoom { animation: bi-zoom 14s ease-in-out infinite; }
        .bi-float { animation: bi-float 4s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .bi-zoom, .bi-float { animation: none !important; } }
      `}</style>
    </div>
  );
}