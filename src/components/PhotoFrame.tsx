"use client";

import { useState } from "react";
import { Users } from "lucide-react";

// Shows a photo, or a premium gradient placeholder if the file is missing.
export default function PhotoFrame({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className="pf-zoom h-full w-full object-cover"
        />
      ) : (
        <div className="pf-fallback flex h-full w-full flex-col items-center justify-center gap-4 text-center text-white">
          <span className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/20 ring-1 ring-white/40 backdrop-blur">
            <Users size={36} />
          </span>
          <p className="px-6 font-[var(--font-heading)] text-xl font-extrabold">Our team photo</p>
          <p className="px-6 text-sm text-white/85">Add a file at public/images/team/group-photo.jpg</p>
        </div>
      )}

      <style>{`
        @keyframes pf-zoom { 0%,100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        @keyframes pf-flow { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        .pf-zoom { animation: pf-zoom 16s ease-in-out infinite; }
        .pf-fallback {
          background: linear-gradient(120deg, #2563eb, #7c3aed, #db2777, #e11d48, #2563eb);
          background-size: 300% 300%;
          animation: pf-flow 12s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) { .pf-zoom, .pf-fallback { animation: none !important; } }
      `}</style>
    </div>
  );
}