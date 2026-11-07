import { photos } from "@/lib/images";
import type { CSSProperties } from "react";

type OrbitNode = { label: string; angle: number; photo: string };

const nodes: OrbitNode[] = [
  { label: "AI SEO", angle: 0, photo: photos.aiSeo },
  { label: "Web Development", angle: 60, photo: photos.webDevelopment },
  { label: "Digital Marketing", angle: 120, photo: photos.digitalMarketing },
  { label: "AI Solutions", angle: 180, photo: photos.aiSolutions },
  { label: "UI/UX Design", angle: 240, photo: photos.uiUxDesign },
  { label: "Mobile Apps", angle: 300, photo: photos.mobileApps },
];

const sparkles = [
  { top: "4%", left: "10%", delay: "0s" },
  { top: "16%", left: "92%", delay: "0.6s" },
  { top: "50%", left: "2%", delay: "1.2s" },
  { top: "78%", left: "95%", delay: "0.3s" },
  { top: "96%", left: "30%", delay: "1.8s" },
  { top: "2%", left: "60%", delay: "0.9s" },
];

// Orbit radius, slightly larger than before so the visual fills more space
const RADIUS = 215;

const dotPattern: CSSProperties = {
  backgroundImage: "radial-gradient(rgba(124,58,237,0.35) 1px, transparent 1px)",
  backgroundSize: "18px 18px",
};

export default function HeroVisual() {
  return (
    <div className="relative mx-auto h-[600px] w-full max-w-[620px]">
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden rounded-[3rem]">
        <div className="animate-blob absolute -left-10 top-10 h-64 w-64 rounded-full bg-blue-500/25 blur-3xl" />
        <div
          className="animate-blob absolute right-0 top-20 h-72 w-72 rounded-full bg-violet-500/25 blur-3xl"
          style={{ animationDelay: "-4s" }}
        />
        <div
          className="animate-blob absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-rose-500/20 blur-3xl"
          style={{ animationDelay: "-8s" }}
        />
        <div className="absolute inset-0 opacity-45" style={dotPattern} />
      </div>

      {/* Outer Glow Ring */}
      <div className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-200/50 bg-gradient-to-tr from-brand-blue/5 via-transparent to-brand-orange/5 animate-pulse" />

      {/* Dashed orbit ring */}
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-violet-400/80" />

      {/* Rotating orbit with photo tiles */}
      <div className="animate-orbit absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2">
        {nodes.map(({ label, angle, photo }) => (
          <div
            key={label}
            className="absolute left-1/2 top-1/2 h-0 w-0"
            style={{ transform: `rotate(${angle}deg) translateY(-${RADIUS}px) rotate(${-angle}deg)` }}
          >
            <div className="animate-orbit-reverse -translate-x-1/2 -translate-y-1/2">
              <div className="flex cursor-pointer flex-col items-center gap-1.5 group">
                <div className="relative h-28 w-28 overflow-hidden rounded-2xl bg-slate-200 shadow-xl ring-2 ring-white/90 transition duration-300 group-hover:scale-105 group-hover:ring-brand-blue">
                  <img
                    src={photo}
                    alt={label}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
                <span className="whitespace-nowrap rounded-full border border-brand-navy/5 bg-white/90 px-2.5 py-0.5 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur-sm">
                  {label}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sparkles */}
      {sparkles.map((s, i) => (
        <span
          key={i}
          className="animate-twinkle absolute h-2 w-2 rounded-full bg-brand-gradient shadow-md"
          style={{ top: s.top, left: s.left, animationDelay: s.delay }}
        />
      ))}

      {/* Central Badge */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="animate-halo absolute -inset-4 rounded-full bg-[conic-gradient(from_0deg,#2563eb,#7c3aed,#e11d48,#2563eb)] opacity-75 blur-lg" />
        <div className="relative h-60 w-60 overflow-hidden rounded-full bg-slate-900 shadow-2xl ring-4 ring-white/90">
          <img
            src={photos.aiSolutions}
            alt="Your vision, our technology"
            className="absolute inset-0 h-full w-full scale-105 object-cover opacity-60 brightness-90 filter"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#14112b]/85 via-[#2563eb]/75 to-[#7c3aed]/85 p-5 text-center text-white backdrop-blur-[2px]">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-orange drop-shadow-md">
              Zenith Core
            </span>
            <p className="mt-0.5 font-[var(--font-heading)] text-lg font-extrabold tracking-tight text-white drop-shadow-lg">
              Your Vision
            </p>
            <p className="font-[var(--font-heading)] text-lg font-extrabold tracking-tight text-white drop-shadow-lg">
              Our Technology
            </p>
            <div className="mt-1.5 h-0.5 w-12 bg-gradient-to-r from-transparent via-white/80 to-transparent" />
            <p className="mt-1.5 text-[10px] font-extrabold uppercase tracking-widest text-blue-200 drop-shadow">
              Endless Possibilities
            </p>
          </div>
        </div>
      </div>

      {/* Glass chip */}
      <div className="absolute left-2 top-2 rounded-xl border border-brand-navy/10 bg-white/90 px-3.5 py-2 shadow-lg backdrop-blur-md">
        <p className="text-[11px] font-medium text-slate-500">Search visibility</p>
        <p className="font-[var(--font-heading)] text-sm font-extrabold text-brand-gradient">SEO + AEO + GEO</p>
      </div>

      {/* Location card */}
      <div className="absolute bottom-2 right-2 rounded-xl border border-brand-navy/10 bg-white/90 px-3.5 py-2.5 shadow-lg backdrop-blur-md">
        <p className="text-[11px] font-medium text-slate-500">Based in</p>
        <p className="font-[var(--font-heading)] text-sm font-extrabold text-brand-gradient">India</p>
      </div>
    </div>
  );
}