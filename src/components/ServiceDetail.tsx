import Link from "next/link";
import {
  ArrowRight,
  Award,
  BarChart3,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronRight,
  Code2,
  Cpu,
  FileCheck,
  Gauge,
  Globe,
  Hammer,
  HelpCircle,
  Layers,
  Link2,
  LineChart,
  Map,
  MapPin,
  Network,
  Rocket,
  Route,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Target,
  Trophy,
  Users,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";
import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";
import type { ServiceDetailData } from "@/data/aiSearchSeo";
import { groupOfAi } from "@/data/aiRegistry";

type Tone = { from: string; to: string };

const WIDE = "relative w-full px-6 md:px-12 xl:px-20 2xl:px-28";

// Site palette: blue, pink and red
const BRAND_FLOW: Tone = { from: "#2563eb", to: "#db2777" };
const BRAND_RED: Tone = { from: "#db2777", to: "#e11d48" };

// Icon sets used for the cards
const HIGHLIGHT_ICONS: LucideIcon[] = [Layers, Network, ShieldCheck, Zap, Award, Gauge];
const USECASE_ICONS: LucideIcon[] = [Building2, ShoppingBag, MapPin, Briefcase];
const PROCESS_ICONS: LucideIcon[] = [Search, Map, Hammer, LineChart];

const WHY_CHOOSE = [
  { Icon: Trophy, title: "Proven method", text: "A repeatable process built on real data, not guesswork." },
  { Icon: Globe, title: "Local and global", text: "Based in Odisha, serving clients across India and abroad." },
  { Icon: Target, title: "Clear goals", text: "Every project starts with the enquiries and sales you want to win." },
  { Icon: Sparkles, title: "AI-assisted speed", text: "Modern tools speed up research while experts check the quality." },
];

// Long-form content for each AI group
const GROUP_EXTRA: Record<
  string,
  { benefits: string[]; paragraphs: string[]; toolkit: { Icon: LucideIcon; name: string }[] }
> = {
  "AI Search & SEO": {
    benefits: ["AI answer visibility", "Google rankings", "Structured data", "Brand authority", "Measurable growth"],
    paragraphs: [
      "Search has changed. Customers now ask ChatGPT, Gemini, Perplexity and Google AI Overviews for recommendations before they ever click a link. A business that is clear, trustworthy and well structured is far more likely to be quoted and recommended, while a vague website gets ignored.",
      "Our AI search work starts with an honest audit of how your brand appears today, both in traditional search results and in AI-generated answers. We then map the real questions your customers ask, and build the content, structure and signals that let both search engines and AI systems understand exactly what you do and who you serve.",
      "Good AI search optimisation is not about tricks. It is about answering questions clearly, showing real expertise, keeping your business details consistent everywhere and proving your credibility with reviews, case studies and expert content. These are the same qualities that make people trust your business, so the work pays off on every channel.",
      "Results compound over time. Each improved page, accurate listing and well-structured answer makes the next one easier to rank and easier to cite. We track progress every month, report in plain language and keep refining the approach as search technology evolves.",
    ],
    toolkit: [
      { Icon: Search, name: "Search Console" },
      { Icon: BarChart3, name: "Analytics" },
      { Icon: Code2, name: "Schema tools" },
      { Icon: Cpu, name: "AI research" },
      { Icon: LineChart, name: "Rank tracking" },
      { Icon: Link2, name: "Link audits" },
    ],
  },
  "AI Development": {
    benefits: ["Custom models", "Secure data", "System integration", "Automation", "Scalable architecture"],
    paragraphs: [
      "Off-the-shelf software rarely fits the way your business really works. Your processes, data and customers are unique, and the tools you use should reflect that. AI development lets you build intelligence around your own information, so your team gets answers and actions that generic products cannot provide.",
      "We begin with discovery. Together we identify the problems worth solving, the data you already hold and the outcomes that would make the biggest difference. Then we build a small working prototype on real data, so you can see results and judge value before committing to a full system.",
      "Every system we build is designed with security, privacy and maintainability in mind. Access is controlled, data stays protected, and the architecture is documented so your team is never locked in. We monitor accuracy over time, retrain where needed and keep the system aligned with your business as it grows.",
      "The result is software that becomes a genuine competitive advantage. It saves time, improves decisions and grows with you, instead of asking your team to adapt to a tool that does not understand your work.",
    ],
    toolkit: [
      { Icon: Cpu, name: "Model design" },
      { Icon: Code2, name: "APIs" },
      { Icon: ShieldCheck, name: "Security" },
      { Icon: Layers, name: "Architecture" },
      { Icon: Gauge, name: "Monitoring" },
      { Icon: Network, name: "Integrations" },
    ],
  },
  "AI Automation": {
    benefits: ["24/7 response", "Fewer manual tasks", "Faster follow-up", "Clean records", "Real-time insight"],
    paragraphs: [
      "Every business repeats the same tasks each day: answering the same questions, following up with leads, updating records and building the same reports. Automation handles that repetition reliably, so your people can spend their time on the conversations and decisions that need a human.",
      "Our automation projects start by mapping the workflows that consume the most time and cause the most delays. We then design the flows, rules and triggers that take over the routine parts, while keeping clear handover points where a real person steps in. Every automation is tested with real scenarios before it goes live.",
      "Good automation feels natural to customers. Replies are timely and polite, reminders arrive when they are useful, and nothing falls through the cracks. Behind the scenes, your CRM, messages and reports stay accurate, so decisions are based on up-to-date information rather than guesswork.",
      "We measure what matters, including response times, conversion rates, hours saved and error reduction. Each month we review the results with you and expand the automation to the next area that will deliver the greatest return.",
    ],
    toolkit: [
      { Icon: Workflow, name: "Workflows" },
      { Icon: Zap, name: "Triggers" },
      { Icon: Network, name: "Connectors" },
      { Icon: BarChart3, name: "Reporting" },
      { Icon: ShieldCheck, name: "Compliance" },
      { Icon: Gauge, name: "Performance" },
    ],
  },
  "AI by Industry": {
    benefits: ["Industry expertise", "Compliant by design", "Tailored workflows", "Local focus", "Clear outcomes"],
    paragraphs: [
      "Every industry has its own rules, customers and pressures. A clinic has privacy obligations, a retailer needs fast product answers, a property agency needs quick responses to enquiries, and a local business needs to be found by neighbours. Our industry solutions are shaped around those realities.",
      "We start by learning how your sector works: the customer journey, the common questions, the bottlenecks and the tools already in use. Then we design AI workflows that fit naturally into that journey, so customers feel helped and your team feels supported rather than replaced.",
      "Privacy, accuracy and clear human handover are built in from the beginning. Sensitive questions go to the right person, information stays protected, and the assistant is trained on your own services, prices and policies so it never makes things up.",
      "The outcome is practical: fewer missed opportunities, quicker responses, happier customers and a team that spends more of its day on work that truly matters. We keep measuring and refining so the solution keeps earning its place in your business.",
    ],
    toolkit: [
      { Icon: Building2, name: "Industry data" },
      { Icon: ShieldCheck, name: "Privacy" },
      { Icon: Users, name: "Customer journeys" },
      { Icon: MapPin, name: "Local reach" },
      { Icon: Gauge, name: "Performance" },
      { Icon: Route, name: "Workflows" },
    ],
  },
};

function Badge({ Icon, tone, size = 56, iconSize = 24 }: { Icon: LucideIcon; tone: Tone; size?: number; iconSize?: number }) {
  return (
    <span
      className="sd-pulse relative flex shrink-0 items-center justify-center rounded-2xl text-white shadow-lg transition duration-500 group-hover:rotate-6 group-hover:scale-110"
      style={{ width: size, height: size, background: `linear-gradient(135deg, ${tone.from}, ${tone.to})` }}
    >
      <span className="absolute inset-0 rounded-2xl ring-2 ring-white/50" />
      <Icon size={iconSize} />
    </span>
  );
}

function Head({
  eyebrow,
  title,
  accent,
  lead,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  lead: string;
  dark?: boolean;
}) {
  return (
    <div className="text-center">
      <p className="sd-rise text-xs font-extrabold uppercase tracking-[0.3em]" style={{ color: dark ? "#ffffff" : BRAND_FLOW.from }}>
        {eyebrow}
      </p>
      <h2
        className={`sd-rise mt-4 font-[var(--font-heading)] text-3xl font-extrabold md:text-5xl ${dark ? "text-white" : "text-brand-navy"}`}
        style={{ animationDelay: "100ms" }}
      >
        {title} <span className="sd-gradient-text">{accent}</span>
      </h2>
      <p
        className={`sd-rise mx-auto mt-5 max-w-3xl text-lg font-extrabold leading-relaxed md:text-xl ${dark ? "text-white/90" : "text-brand-navy/85"}`}
        style={{ animationDelay: "200ms" }}
      >
        {lead}
      </p>
      <span
        className="sd-bar mx-auto mt-6 block h-1.5 rounded-full"
        style={{ background: `linear-gradient(90deg, ${BRAND_FLOW.from}, ${BRAND_FLOW.to}, ${BRAND_RED.to})` }}
      />
    </div>
  );
}

const FLOATERS: { top: string; left: string; delay: string }[] = [
  { top: "14%", left: "5%", delay: "0s" },
  { top: "30%", left: "90%", delay: "1.5s" },
  { top: "72%", left: "4%", delay: "3s" },
  { top: "80%", left: "92%", delay: "2s" },
];

export default function ServiceDetail({ service }: { service: ServiceDetailData }) {
  const group = groupOfAi(service.slug);
  const groupLabel = group?.label ?? "AI Solutions";
  const others = (group?.items ?? []).filter((s) => s.slug !== service.slug);
  const extra = GROUP_EXTRA[groupLabel] ?? GROUP_EXTRA["AI Search & SEO"];
  const PageIcon = service.icon;

  return (
    <main className="relative w-full overflow-hidden bg-gradient-to-br from-blue-50 via-pink-50 to-rose-50">
      {/* HERO */}
      <section className="sd-flow relative w-full overflow-hidden px-6 pb-28 pt-14 text-white md:px-12 xl:px-20 2xl:px-28">
        <div className="sd-grid pointer-events-none absolute inset-0 opacity-25" />
        <div className="sd-blob pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-full bg-white/25 blur-3xl" />
        <div className="sd-blob sd-blob-b pointer-events-none absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-amber-200/30 blur-3xl" />
        {FLOATERS.map((f, i) => {
          const Icon = HIGHLIGHT_ICONS[i % HIGHLIGHT_ICONS.length];
          return (
            <Icon
              key={i}
              size={i % 2 === 0 ? 46 : 32}
              className="sd-float pointer-events-none absolute text-white/30"
              style={{ top: f.top, left: f.left, animationDelay: f.delay }}
            />
          );
        })}

        <div className="relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <nav className="sd-rise flex flex-wrap items-center gap-2 text-xs font-bold text-white/80">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight size={12} />
              <span>AI Solutions</span>
              <ChevronRight size={12} />
              <span className="text-white">{service.title}</span>
            </nav>

            <div className="sd-rise mt-8 flex items-center gap-3" style={{ animationDelay: "80ms" }}>
              <span className="sd-pulse flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-blue shadow-xl">
                <Sparkles size={20} />
              </span>
              <span className="rounded-full bg-white/20 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.25em] ring-1 ring-white/40 backdrop-blur">
                {groupLabel}
              </span>
            </div>

            <h1
              className="sd-rise mt-6 font-[var(--font-heading)] text-4xl font-extrabold leading-tight drop-shadow-lg md:text-6xl"
              style={{ animationDelay: "160ms" }}
            >
              {service.title}
            </h1>
            <p className="sd-rise mt-5 text-xl font-extrabold text-white" style={{ animationDelay: "240ms" }}>
              {service.tagline}
            </p>
            <p className="sd-rise mt-4 max-w-xl text-base text-white/90" style={{ animationDelay: "320ms" }}>
              {service.intro}
            </p>

            <div className="sd-rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "400ms" }}>
              <Link
                href="/contact"
                className="sd-shine group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-7 py-3.5 text-sm font-extrabold text-brand-navy shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl"
              >
                Get a free audit
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </Link>
              <Link
                href="/#faq"
                className="rounded-full border-2 border-white px-7 py-3 text-sm font-extrabold text-white transition hover:bg-white hover:text-brand-navy"
              >
                Read the FAQs
              </Link>
            </div>
          </div>

          <div className="sd-rise relative mx-auto w-full max-w-md" style={{ animationDelay: "200ms" }}>
            <div className="sd-glow-ring absolute -inset-3 rounded-[2.5rem] opacity-70 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/30 bg-white/15 p-8 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-white/90">Key numbers</p>
                <span className="relative flex h-3 w-3">
                  <span className="sd-ping absolute inline-flex h-full w-full rounded-full bg-white" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
                </span>
              </div>
              <div className="mt-6 space-y-6">
                {(service.stats ?? []).map((s, i) => (
                  <div
                    key={s.label}
                    className="sd-stat flex items-center justify-between gap-4 border-b border-white/20 pb-5 last:border-0 last:pb-0"
                    style={{ animationDelay: `${i * 150}ms` }}
                  >
                    <div>
                      <p className="font-[var(--font-heading)] text-4xl font-extrabold">
                        <CountUp end={s.end} suffix={s.suffix} duration={1600 + i * 200} />
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white/85">{s.label}</p>
                    </div>
                    <span className="sd-pulse flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-brand-blue shadow-lg">
                      <PageIcon size={20} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS MARQUEE */}
      <div className="relative -mt-8 overflow-hidden bg-gradient-to-r from-blue-600 via-pink-500 to-rose-500 py-5 shadow-xl">
        <div className="sd-marquee flex w-max gap-12 whitespace-nowrap">
          {[...extra.benefits, ...extra.benefits].map((b, i) => (
            <span key={i} className="flex items-center gap-3 text-sm font-extrabold uppercase tracking-widest text-white">
              <span className="h-2 w-2 rounded-full bg-white" />
              {b}
            </span>
          ))}
        </div>
      </div>

      {/* OVERVIEW */}
      <section className={`${WIDE} py-24`}>
        <Reveal>
          <Head
            eyebrow="The full picture"
            title="Everything you need,"
            accent="explained"
            lead={`A detailed look at how ${service.title} works, what it includes and why it matters for your business.`}
          />
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-3">
            {extra.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-3xl bg-white/80 p-7 shadow-md ring-1 ring-white backdrop-blur transition duration-500 hover:-translate-y-1 hover:shadow-xl">
                  <span
                    className="absolute left-0 top-0 h-full w-1.5"
                    style={{ background: `linear-gradient(180deg, ${BRAND_FLOW.from}, ${BRAND_RED.to})` }}
                  />
                  <p className="pl-4 text-lg leading-relaxed text-brand-navy/85">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="relative h-full overflow-hidden rounded-[2rem] bg-white p-8 shadow-xl ring-1 ring-slate-200 lg:col-span-2">
              <div className="sd-sheen-loop pointer-events-none absolute inset-0" />
              <p className="relative text-xs font-extrabold uppercase tracking-[0.25em] text-brand-blue">What is included</p>
              <ul className="relative mt-6 space-y-3">
                {service.deliverables.map((d, i) => (
                  <li
                    key={d}
                    className="sd-rise flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-50 to-pink-50 px-4 py-3 font-semibold text-brand-navy transition duration-300 hover:translate-x-2 hover:shadow-md"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-blue" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className={`${WIDE} pb-24`}>
        <Reveal>
          <Head
            eyebrow="What you get"
            title="Built for"
            accent="real results"
            lead={`Each part of ${service.title} is designed to produce visible progress, not just a report you file away.`}
          />
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {service.highlights.map((h, i) => {
            const Icon = HIGHLIGHT_ICONS[i % HIGHLIGHT_ICONS.length];
            return (
              <Reveal key={h.title} delay={i * 0.08}>
                <div className={`group relative h-full overflow-hidden rounded-[2rem] p-[1.5px] transition duration-500 hover:-translate-y-2 ${i === 0 || i === 3 ? "lg:col-span-2" : ""}`}>
                  <span className="sd-border absolute inset-0 rounded-[2rem] opacity-70 transition duration-500 group-hover:opacity-100" />
                  <div className="relative h-full overflow-hidden rounded-[calc(2rem-1.5px)] bg-white p-8">
                    <div className="sd-glow pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-0 blur-3xl transition duration-500 group-hover:opacity-40" style={{ background: BRAND_FLOW.to }} />
                    <Badge Icon={Icon} tone={BRAND_FLOW} />
                    <h3 className="mt-6 font-[var(--font-heading)] text-xl font-extrabold text-brand-navy">{h.title}</h3>
                    <p className="mt-3 max-w-xl leading-relaxed text-brand-navy/75">{h.text}</p>
                    <span className="absolute bottom-3 right-6 font-[var(--font-heading)] text-6xl font-extrabold text-brand-blue/10">0{i + 1}</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* USE CASES */}
      <section className={`${WIDE} pb-24`}>
        <Reveal>
          <Head
            eyebrow="Who it is for"
            title="Works for"
            accent="every kind of business"
            lead={`${service.title} adapts to different industries, team sizes and goals, so the approach fits your business exactly.`}
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {service.useCases.map((u, i) => {
            const Icon = USECASE_ICONS[i % USECASE_ICONS.length];
            return (
              <Reveal key={u.title} delay={i * 0.1}>
                <div className="group flex h-full gap-5 rounded-3xl bg-white p-7 shadow-md ring-1 ring-slate-200 transition duration-500 hover:-translate-y-1 hover:shadow-xl">
                  <Badge Icon={Icon} tone={BRAND_FLOW} size={54} iconSize={24} />
                  <div>
                    <h3 className="font-[var(--font-heading)] text-lg font-extrabold text-brand-navy">{u.title}</h3>
                    <p className="mt-2 leading-relaxed text-brand-navy/75">{u.text}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className={`${WIDE} pb-24`}>
        <Reveal>
          <Head
            eyebrow="Why choose us"
            title="Why clients"
            accent="trust Zenith"
            lead="We combine experience, clear communication and honest reporting, so you always know where your investment goes."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.1}>
              <div className="group h-full rounded-3xl bg-gradient-to-br from-white to-pink-50 p-6 shadow-md ring-1 ring-pink-100 transition duration-500 hover:-translate-y-2 hover:shadow-xl">
                <Badge Icon={w.Icon} tone={BRAND_RED} size={50} iconSize={24} />
                <h3 className="mt-4 font-[var(--font-heading)] text-lg font-extrabold text-brand-navy">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-navy/75">{w.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TOOLKIT */}
      <section className={`${WIDE} pb-24`}>
        <Reveal>
          <Head
            eyebrow="Our toolkit"
            title="Tools behind the"
            accent="results"
            lead={`We use professional tools to measure, build and improve every part of your ${service.title} project.`}
          />
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
          {extra.toolkit.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.07}>
              <div className="group flex h-full flex-col items-center gap-3 rounded-2xl bg-white p-5 text-center shadow-md ring-1 ring-slate-200 transition duration-500 hover:-translate-y-2 hover:shadow-xl">
                <Badge Icon={t.Icon} tone={BRAND_FLOW} size={48} iconSize={22} />
                <span className="text-sm font-extrabold text-brand-navy">{t.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="sd-flow relative w-full overflow-hidden px-6 py-24 text-white md:px-12 xl:px-20 2xl:px-28">
        <div className="relative">
          <Reveal>
            <span className="mx-auto flex w-fit items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.3em] backdrop-blur">
              <Route size={14} /> How we work
            </span>
            <div className="mt-6">
              <Head
                eyebrow={groupLabel}
                title="A clear"
                accent="four-step process"
                lead="Transparent steps from the first conversation to results you can measure."
                dark
              />
            </div>
          </Reveal>

          <ol className="relative mt-20 grid gap-10 md:grid-cols-4">
            <span className="sd-draw absolute left-0 right-0 top-7 hidden h-1 rounded-full bg-white/70 md:block" />
            {service.process.map((p, i) => {
              const Icon = PROCESS_ICONS[i % PROCESS_ICONS.length];
              return (
                <Reveal key={p.title} delay={i * 0.15}>
                  <li className="relative list-none rounded-3xl bg-white/15 p-6 backdrop-blur transition duration-500 hover:-translate-y-2 hover:bg-white/25">
                    <span className="sd-pulse relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white text-brand-blue shadow-lg">
                      <Icon size={22} />
                    </span>
                    <h3 className="mt-6 font-[var(--font-heading)] text-lg font-extrabold">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/90">{p.text}</p>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${WIDE} py-24`}>
        <Reveal>
          <Head eyebrow="Questions" title="Common" accent="answers" lead={`What clients usually ask before starting ${service.title}.`} />
        </Reveal>
        <div className="mx-auto mt-14 grid max-w-5xl gap-4">
          {service.faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.08}>
              <details className="group rounded-3xl bg-white p-6 shadow-md ring-1 ring-slate-200 transition duration-300 open:shadow-xl open:ring-pink-200">
                <summary className="flex cursor-pointer list-none items-center justify-between font-[var(--font-heading)] text-lg font-extrabold text-brand-navy">
                  <span className="flex items-center gap-3">
                    <HelpCircle size={20} className="text-brand-blue" />
                    {f.q}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-rose-500 text-white transition duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-brand-navy/75">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      {/* RELATED */}
      <section className={`${WIDE} pb-24`}>
        <Reveal>
          <span className="mx-auto flex w-fit items-center gap-2 text-xs font-extrabold uppercase tracking-[0.3em] text-brand-blue">
            <Network size={14} /> More in {groupLabel}
          </span>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {others.map((o, i) => (
            <Reveal key={o.slug} delay={i * 0.1}>
              <Link
                href={`/ai-solutions/${o.slug}`}
                className="group flex h-full items-center gap-4 rounded-3xl bg-white p-5 shadow-md ring-1 ring-slate-200 transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <Badge Icon={o.icon} tone={BRAND_FLOW} size={46} iconSize={20} />
                <span className="font-[var(--font-heading)] text-sm font-extrabold text-brand-navy">{o.title}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="sd-flow sd-shine relative w-full overflow-hidden px-6 py-24 text-center text-white md:px-12 xl:px-20 2xl:px-28">
        <Reveal>
          <div className="relative mx-auto max-w-3xl">
            <span className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-xs font-extrabold uppercase tracking-widest backdrop-blur">
              <Rocket size={16} /> Start your project
            </span>
            <h2 className="font-[var(--font-heading)] text-3xl font-extrabold md:text-5xl">Ready to grow with {service.title}?</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/90">
              Tell us about your business and get a clear plan and a free quote within one business day.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-white px-9 py-4 font-extrabold text-brand-navy shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl"
            >
              Get A Free Consultation
            </Link>
          </div>
        </Reveal>
      </section>

      <style>{`
        @keyframes sd-flow { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes sd-grid { from { background-position: 0 0; } to { background-position: 40px 40px; } }
        @keyframes sd-float { 0%,100% { transform: translateY(0) rotate(0deg); opacity: 0.4; } 50% { transform: translateY(-18px) rotate(10deg); opacity: 0.9; } }
        @keyframes sd-blob { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-30px) scale(1.15); } }
        @keyframes sd-rise { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes sd-stat { from { opacity: 0; transform: translateX(16px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes sd-draw { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes sd-bar { from { width: 0; } to { width: 120px; } }
        @keyframes sd-ping { 0% { transform: scale(1); opacity: 0.7; } 100% { transform: scale(2.4); opacity: 0; } }
        @keyframes sd-pulse { 0%,100% { box-shadow: 0 0 0 0 rgba(37,99,235,0.35); } 50% { box-shadow: 0 0 0 10px rgba(37,99,235,0); } }
        @keyframes sd-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes sd-border { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
        @keyframes sd-sheen { 0% { transform: translateX(-120%); } 100% { transform: translateX(120%); } }
        @keyframes sd-shine { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        @keyframes sd-glow { 0%,100% { opacity: 0.5; } 50% { opacity: 0.9; } }
        @keyframes sd-gradient-text { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }

        .sd-flow {
          background: linear-gradient(120deg, #2563eb, #7c3aed, #db2777, #e11d48, #2563eb);
          background-size: 300% 300%;
          animation: sd-flow 14s ease-in-out infinite;
        }
        .sd-grid {
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: sd-grid 14s linear infinite;
        }
        .sd-blob { animation: sd-blob 16s ease-in-out infinite; }
        .sd-blob-b { animation-duration: 20s; animation-direction: reverse; }
        .sd-float { animation: sd-float 8s ease-in-out infinite; }
        .sd-rise { animation: sd-rise 0.8s cubic-bezier(0.22,1,0.36,1) both; }
        .sd-stat { animation: sd-stat 0.7s cubic-bezier(0.22,1,0.36,1) both; }
        .sd-draw { transform-origin: left; animation: sd-draw 1.6s cubic-bezier(0.22,1,0.36,1) 0.3s both; }
        .sd-bar { width: 120px; animation: sd-bar 1.1s cubic-bezier(0.22,1,0.36,1) 0.4s both; }
        .sd-ping { animation: sd-ping 1.6s cubic-bezier(0,0,0.2,1) infinite; }
        .sd-pulse { animation: sd-pulse 2.6s ease-out infinite; }
        .sd-marquee { animation: sd-marquee 26s linear infinite; }
        .sd-border {
          background: linear-gradient(90deg, #2563eb, #db2777, #e11d48, #2563eb);
          background-size: 200% 200%;
          animation: sd-border 5s linear infinite;
        }
        .sd-glow-ring {
          background: linear-gradient(135deg, #fde68a, #fb7185, #60a5fa);
          background-size: 200% 200%;
          animation: sd-border 6s linear infinite, sd-glow 4s ease-in-out infinite;
        }
        .sd-sheen-loop {
          background: linear-gradient(110deg, transparent 30%, rgba(219,39,119,0.08) 50%, transparent 70%);
          animation: sd-sheen 7s ease-in-out infinite;
        }
        .sd-shine::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(110deg, transparent 35%, rgba(255,255,255,0.25) 50%, transparent 65%);
          background-size: 200% 100%;
          animation: sd-shine 3.5s linear infinite;
          pointer-events: none;
        }
        .sd-gradient-text {
          background: linear-gradient(90deg, #2563eb, #7c3aed, #db2777, #e11d48, #2563eb);
          background-size: 250% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: sd-gradient-text 6s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .sd-flow, .sd-grid, .sd-blob, .sd-float, .sd-rise, .sd-stat, .sd-draw, .sd-bar,
          .sd-ping, .sd-pulse, .sd-marquee, .sd-border, .sd-glow-ring, .sd-sheen-loop,
          .sd-shine::after, .sd-gradient-text {
            animation: none !important;
          }
        }
      `}</style>
    </main>
  );
}