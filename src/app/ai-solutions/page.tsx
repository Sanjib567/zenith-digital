import Link from "next/link";
import { ArrowRight, Sparkles, Search, Layers, Network, Zap, Bot, type LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import { aiGroups } from "@/data/aiRegistry";

export const metadata = {
  title: "AI Solutions | Zenith Digital Agency",
  description: "AI search, development, automation and industry solutions from Zenith Digital Agency.",
};

type Tone = { from: string; to: string };

// One colour pair per group, so each section has its own identity
const GROUP_TONE: Tone[] = [
  { from: "#2563eb", to: "#7c3aed" }, // AI Search & SEO
  { from: "#7c3aed", to: "#db2777" }, // AI Development
  { from: "#16a34a", to: "#0891b2" }, // AI Automation
  { from: "#ea580c", to: "#e11d48" }, // AI by Industry
];

// Cards cycle through these colours within each group
const CARD_TONES: Tone[] = [
  { from: "#2563eb", to: "#7c3aed" },
  { from: "#0891b2", to: "#2563eb" },
  { from: "#7c3aed", to: "#db2777" },
  { from: "#16a34a", to: "#0891b2" },
  { from: "#ea580c", to: "#e11d48" },
  { from: "#4f46e5", to: "#0ea5e9" },
];

const FLOATERS: { Icon: LucideIcon; top: string; left: string; delay: string; color: string }[] = [
  { Icon: Search, top: "10%", left: "5%", delay: "0s", color: "text-brand-blue/30" },
  { Icon: Layers, top: "26%", left: "90%", delay: "1.5s", color: "text-brand-purple/30" },
  { Icon: Network, top: "52%", left: "3%", delay: "3s", color: "text-brand-orange/30" },
  { Icon: Zap, top: "68%", left: "93%", delay: "2s", color: "text-brand-blue/30" },
  { Icon: Bot, top: "84%", left: "8%", delay: "4s", color: "text-brand-purple/30" },
  { Icon: Sparkles, top: "92%", left: "82%", delay: "2.5s", color: "text-brand-orange/30" },
];

const WIDE = "relative w-full px-6 md:px-12 xl:px-20 2xl:px-28";

export default function AiSolutionsOverview() {
  return (
    <main className="relative w-full overflow-hidden bg-gradient-to-br from-white via-blue-50/70 to-rose-50/60">
      {/* FULL-PAGE ANIMATED BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="ov-wash absolute -inset-[20%]" />
        <div className="ov-blob ov-blob-a absolute -left-32 top-16 h-[30rem] w-[30rem] rounded-full bg-brand-blue/20 blur-3xl" />
        <div className="ov-blob ov-blob-b absolute -right-32 top-1/3 h-[32rem] w-[32rem] rounded-full bg-brand-purple/20 blur-3xl" />
        <div className="ov-blob ov-blob-c absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-brand-orange/15 blur-3xl" />
        <div className="ov-grid absolute inset-0 opacity-50" />
        {FLOATERS.map(({ Icon, top, left, delay, color }, i) => (
          <Icon
            key={i}
            size={i % 2 === 0 ? 46 : 34}
            className={`ov-drift absolute ${color}`}
            style={{ top, left, animationDelay: delay }}
          />
        ))}
      </div>

      {/* HEADER */}
      <section className={`${WIDE} pb-14 pt-16 text-center`}>
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.3em] text-brand-blue shadow-md ring-1 ring-brand-blue/15">
            <Sparkles size={14} /> AI Solutions
          </span>
          <h1 className="mt-6 font-[var(--font-heading)] text-4xl font-extrabold text-brand-navy md:text-6xl">
            Every AI service, <span className="ov-gradient-text">in one place</span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg font-extrabold text-brand-navy/80 md:text-xl">
            Choose the area you need, from search visibility to automation and industry-specific solutions.
          </p>
          <span className="ov-bar mx-auto mt-6 block h-1 rounded-full bg-gradient-to-r from-brand-blue via-brand-purple to-brand-orange" />
        </Reveal>
      </section>

      {/* GROUPS */}
      <section className={`${WIDE} space-y-20 pb-24`}>
        {aiGroups.map((group, gi) => {
          const gTone = GROUP_TONE[gi % GROUP_TONE.length];
          return (
            <div key={group.label}>
              <Reveal>
                <div className="flex items-center gap-4">
                  <span
                    className="ov-badge flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg"
                    style={{ background: `linear-gradient(135deg, ${gTone.from}, ${gTone.to})` }}
                  >
                    <Layers size={22} />
                  </span>
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.3em]" style={{ color: gTone.from }}>
                      Group {String(gi + 1).padStart(2, "0")}
                    </p>
                    <h2 className="font-[var(--font-heading)] text-2xl font-extrabold uppercase tracking-wide text-brand-navy md:text-3xl">
                      {group.label}
                    </h2>
                  </div>
                </div>
              </Reveal>

              <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {group.items.map((s, i) => {
                  const Icon = s.icon;
                  const tone = CARD_TONES[i % CARD_TONES.length];
                  return (
                    <Reveal key={s.slug} delay={i * 0.08}>
                      <Link
                        href={`/ai-solutions/${s.slug}`}
                        className="ov-card group relative flex h-full flex-col overflow-hidden rounded-3xl p-[1.5px] transition duration-500 hover:-translate-y-2"
                      >
                        {/* Moving gradient border */}
                        <span
                          className="ov-border absolute inset-0 rounded-3xl opacity-60 transition duration-500 group-hover:opacity-100"
                          style={{ background: `linear-gradient(90deg, ${tone.from}, ${tone.to}, ${tone.from})` }}
                        />
                        <div className="relative flex h-full flex-col rounded-[calc(1.5rem-1.5px)] bg-white p-6">
                          {/* Light sweep on hover */}
                          <span className="ov-sheen pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100" />

                          <span
                            className="ov-badge relative flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-md transition duration-500 group-hover:rotate-6 group-hover:scale-110"
                            style={{ background: `linear-gradient(135deg, ${tone.from}, ${tone.to})` }}
                          >
                            <Icon size={26} />
                          </span>
                          <h3 className="mt-5 font-[var(--font-heading)] text-lg font-extrabold text-brand-navy">
                            {s.title}
                          </h3>
                          <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-navy/70">{s.tagline}</p>
                          <span
                            className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold"
                            style={{ color: tone.from }}
                          >
                            Explore{" "}
                            <ArrowRight size={16} className="transition duration-300 group-hover:translate-x-1" />
                          </span>
                        </div>
                      </Link>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>

      <style>{`
        @keyframes ov-wash { 0%,100% { transform: translate3d(-3%,-2%,0) scale(1); } 50% { transform: translate3d(3%,3%,0) scale(1.06); } }
        @keyframes ov-blob { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(50px,30px) scale(1.15); } }
        @keyframes ov-blob-b { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-40px,-30px) scale(1.12); } }
        @keyframes ov-blob-c { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(30px,-40px) scale(1.1); } }
        @keyframes ov-grid { from { background-position: 0 0; } to { background-position: 36px 36px; } }
        @keyframes ov-drift { 0%,100% { transform: translate(0,0) rotate(0deg); opacity: 0.5; } 50% { transform: translate(18px,-24px) rotate(12deg); opacity: 1; } }
        @keyframes ov-sheen { 0% { transform: translateX(-120%); } 100% { transform: translateX(120%); } }
        @keyframes ov-border { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
        @keyframes ov-badge-pulse { 0%,100% { box-shadow: 0 0 0 0 rgba(124,58,237,0.3); } 50% { box-shadow: 0 0 0 8px rgba(124,58,237,0); } }
        @keyframes ov-glow { 0%,100% { filter: drop-shadow(0 0 0 rgba(37,99,235,0)); } 50% { filter: drop-shadow(0 0 10px rgba(124,58,237,0.35)); } }
        @keyframes ov-bar { from { width: 0; opacity: 0; } to { width: 120px; opacity: 1; } }
        .ov-wash {
          background:
            radial-gradient(circle at 20% 30%, rgba(37,99,235,0.14), transparent 45%),
            radial-gradient(circle at 80% 20%, rgba(124,58,237,0.12), transparent 45%),
            radial-gradient(circle at 60% 85%, rgba(234,88,12,0.08), transparent 50%);
          animation: ov-wash 22s ease-in-out infinite;
        }
        .ov-blob-a { animation: ov-blob 16s ease-in-out infinite; }
        .ov-blob-b { animation: ov-blob-b 19s ease-in-out infinite; }
        .ov-blob-c { animation: ov-blob-c 21s ease-in-out infinite; }
        .ov-grid {
          background-image:
            linear-gradient(to right, rgba(124,58,237,0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(124,58,237,0.07) 1px, transparent 1px);
          background-size: 36px 36px;
          animation: ov-grid 14s linear infinite;
        }
        .ov-drift { animation: ov-drift 9s ease-in-out infinite; }
        .ov-gradient-text {
          background: linear-gradient(90deg, #2563eb, #7c3aed, #db2777);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          background-size: 200% 100%;
          animation: ov-border 6s linear infinite alternate;
        }
        .ov-border { background-size: 200% 100%; animation: ov-border 4s linear infinite; }
        .ov-sheen {
          background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.6) 50%, transparent 70%);
          animation: ov-sheen 1.4s ease-in-out;
        }
        .ov-badge { animation: ov-badge-pulse 2.6s ease-out infinite; }
        .ov-card { animation: ov-glow 5s ease-in-out infinite; }
        .ov-bar { width: 120px; animation: ov-bar 1.1s cubic-bezier(0.22,1,0.36,1) 0.4s both; }
        @media (prefers-reduced-motion: reduce) {
          .ov-wash, .ov-blob-a, .ov-blob-b, .ov-blob-c, .ov-grid, .ov-drift, .ov-gradient-text,
          .ov-border, .ov-sheen, .ov-badge, .ov-card, .ov-bar {
            animation: none !important;
          }
        }
      `}</style>
    </main>
  );
}