import Link from "next/link";
import { ArrowRight, Check, Clock, Compass, Hammer, Rocket, Search, Target, Users, type LucideIcon } from "lucide-react";

type Model = {
  title: string;
  tag: string;
  desc: string;
  Icon: LucideIcon;
  accent: string;
  features: string[];
  best: string;
  timeline: string;
};

const models: Model[] = [
  {
    title: "Project-Based",
    tag: "Most Popular",
    desc: "A fixed scope, clear milestones and a set delivery date for websites, online stores and custom builds.",
    Icon: Rocket,
    accent: "from-blue-500 to-violet-600",
    features: [
      "Discovery and planning workshop",
      "Fixed deliverables and milestones",
      "Launch support and handover",
      "Revisions included within scope",
    ],
    best: "New websites, redesigns and online stores",
    timeline: "2 to 8 weeks",
  },
  {
    title: "Dedicated Retainer",
    tag: "Ongoing Growth",
    desc: "A dedicated monthly team that keeps your search rankings, campaigns and website growing.",
    Icon: Users,
    accent: "from-fuchsia-500 to-rose-600",
    features: [
      "Monthly SEO and AI search reporting",
      "Content and campaign management",
      "Priority support on WhatsApp",
      "Security updates and site maintenance",
    ],
    best: "Businesses that want steady, long-term growth",
    timeline: "Flexible monthly plan",
  },
  {
    title: "Consulting & Audit",
    tag: "Expert Advice",
    desc: "Deep technical reviews and a clear action plan before you commit to a build or a strategy.",
    Icon: Search,
    accent: "from-cyan-400 to-blue-600",
    features: [
      "Technical SEO and AEO/GEO audit",
      "Website architecture and speed review",
      "AI readiness assessment",
      "Written action plan you can keep",
    ],
    best: "Teams planning a rebuild or an AI search strategy",
    timeline: "1 to 2 weeks",
  },
];

const steps = [
  { Icon: Compass, title: "Discover", text: "We learn your goals, audience and competitors." },
  { Icon: Target, title: "Design", text: "We plan the strategy, the look and the roadmap." },
  { Icon: Hammer, title: "Build", text: "We develop, test and refine every detail." },
  { Icon: Rocket, title: "Grow", text: "We launch, measure results and keep improving." },
];

export default function EngagementModels() {
  return (
    <section className="relative overflow-hidden bg-brand-navy px-4 py-14 text-white sm:px-6 md:py-24">
      {/* Moving colour glows (smaller on mobile) */}
      <div className="animate-blob pointer-events-none absolute -left-16 top-10 h-64 w-64 rounded-full bg-blue-500/30 blur-3xl sm:-left-24 sm:h-96 sm:w-96" />
      <div
        className="animate-blob pointer-events-none absolute -right-16 top-1/3 h-64 w-64 rounded-full bg-violet-500/30 blur-3xl sm:-right-24 sm:h-96 sm:w-96"
        style={{ animationDelay: "-4s" }}
      />
      <div
        className="animate-blob pointer-events-none absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-rose-500/20 blur-3xl sm:h-80 sm:w-80"
        style={{ animationDelay: "-8s" }}
      />
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-300 backdrop-blur sm:px-4 sm:text-xs sm:tracking-[0.25em]">
            <Clock size={14} /> Work With Us
          </span>
          <h2 className="mt-4 font-[var(--font-heading)] text-3xl font-extrabold leading-tight sm:mt-5 sm:text-4xl md:text-5xl">
            <span className="text-brand-gradient">Flexible Ways to Engage</span>
          </h2>
          <p className="mt-3 text-sm text-white/70 sm:mt-4 sm:text-lg">
            Choose the model that fits your business today. You can change it as your goals grow.
          </p>
        </div>

        {/* Model cards: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-16 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {models.map((m) => (
            <div key={m.title} className="group relative h-full min-w-0 md:last:col-span-2 lg:last:col-span-1">
              {/* Gradient border that glows on hover */}
              <div
                className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${m.accent} opacity-0 blur-sm transition duration-500 group-hover:opacity-100`}
              />

              <div className="relative flex h-full flex-col rounded-3xl bg-brand-navy/95 p-5 ring-1 ring-white/10 backdrop-blur transition duration-300 group-hover:-translate-y-2 sm:p-8">
                {/* Top row: icon tile and tag */}
                <div className="flex items-start justify-between gap-3">
                  <span
                    className={`relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br sm:h-16 sm:w-16 ${m.accent} shadow-lg transition duration-500 group-hover:rotate-6 group-hover:scale-110`}
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition duration-700 group-hover:translate-x-full" />
                    <m.Icon size={26} className="relative" />
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold text-white/80 sm:text-xs">
                    {m.tag}
                  </span>
                </div>

                <h3 className="mt-5 font-[var(--font-heading)] text-xl font-extrabold sm:mt-6 sm:text-2xl">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70 sm:mt-3">{m.desc}</p>

                {/* Feature checklist */}
                <ul className="mt-5 space-y-2.5 sm:mt-6 sm:space-y-3">
                  {m.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[13px] text-white/85 sm:text-sm">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${m.accent}`}
                      >
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span className="min-w-0">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Best for and timeline */}
                <div className="mt-auto pt-6 sm:pt-8">
                  <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-5 text-xs sm:pt-6">
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-white/50 sm:text-xs">Best for</p>
                      <p className="mt-1 text-white/85">{m.best}</p>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-white/50 sm:text-xs">Timeline</p>
                      <p className="mt-1 text-white/85">{m.timeline}</p>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className={`mt-5 flex items-center justify-between rounded-full bg-gradient-to-r sm:mt-6 ${m.accent} px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:scale-[1.02]`}
                  >
                    Discuss this model
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How we work together */}
        <div className="mt-16 sm:mt-24 md:mt-28">
          <div className="text-center">
            <h3 className="font-[var(--font-heading)] text-2xl font-extrabold sm:text-3xl md:text-4xl">
              How We Work Together
            </h3>
            <p className="mt-2 text-sm text-white/70 sm:mt-3 sm:text-base">
              A simple four-step path from first call to steady growth.
            </p>
          </div>

          {/* 2x2 grid on mobile, 4 across on desktop */}
          <div className="relative mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:mt-16 sm:gap-x-6 md:grid-cols-4 md:gap-10">
            {/* Connecting line behind the steps */}
            <div className="absolute left-[12%] right-[12%] top-8 hidden h-0.5 bg-gradient-to-r from-blue-500 via-fuchsia-500 to-rose-500 md:block" />

            {steps.map((s, i) => (
              <div key={s.title} className="relative min-w-0 text-center">
                <div className="relative mx-auto flex h-14 w-14 items-center justify-center sm:h-16 sm:w-16">
                  <span
                    className="absolute inset-0 animate-ping rounded-full bg-white/20"
                    style={{ animationDelay: `${i * 0.4}s` }}
                  />
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-brand-gradient text-white shadow-2xl ring-4 ring-brand-navy sm:h-16 sm:w-16">
                    <s.Icon size={22} />
                  </span>
                </div>
                <p className="mt-2 text-xs font-bold tracking-widest text-white/40">0{i + 1}</p>
                <h4 className="mt-1 text-base font-bold sm:text-lg">{s.title}</h4>
                <p className="mx-auto mt-1.5 max-w-[220px] text-xs text-white/65 sm:mt-2 sm:text-sm">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}