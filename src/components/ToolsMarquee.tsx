import LogoImage from "@/components/LogoImage";

type Tool = {
  name: string;
  // Logo sources, tried in order: a local file first, then the online logo library
  sources: string[];
  fallback: string;
  from: string;
  to: string;
};

const cdn = (slug: string) => `https://cdn.simpleicons.org/${slug}`;

const tools: Tool[] = [
  {
    name: "ChatGPT",
    sources: ["/logos/chatgpt.png", cdn("openai")],
    fallback: "AI",
    from: "from-emerald-500",
    to: "to-teal-600",
  },
  {
    name: "Google Search Console",
    sources: [cdn("googlesearchconsole")],
    fallback: "GSC",
    from: "from-blue-500",
    to: "to-sky-500",
  },
  {
    name: "Google Analytics",
    sources: [cdn("googleanalytics")],
    fallback: "GA",
    from: "from-orange-500",
    to: "to-amber-400",
  },
  {
    name: "Google Tag Manager",
    sources: [cdn("googletagmanager")],
    fallback: "GTM",
    from: "from-sky-500",
    to: "to-indigo-600",
  },
  {
    name: "Keyword Planner",
    sources: [cdn("google")],
    fallback: "KP",
    from: "from-violet-500",
    to: "to-purple-600",
  },
  {
    name: "Google Ads",
    sources: [cdn("googleads")],
    fallback: "Ads",
    from: "from-yellow-400",
    to: "to-orange-500",
  },
  {
    name: "Ahrefs",
    sources: [cdn("ahrefs")],
    fallback: "Ah",
    from: "from-orange-600",
    to: "to-red-500",
  },
  {
    name: "SEMrush",
    sources: [cdn("semrush")],
    fallback: "SR",
    from: "from-orange-400",
    to: "to-rose-500",
  },
  {
    name: "Surfer SEO",
    sources: [],
    fallback: "SS",
    from: "from-cyan-500",
    to: "to-blue-600",
  },
  {
    name: "Screaming Frog",
    sources: [],
    fallback: "SF",
    from: "from-pink-500",
    to: "to-fuchsia-600",
  },
];

function ToolCard({ tool }: { tool: Tool }) {
  const { name, sources, fallback, from, to } = tool;
  return (
    <div className="group relative flex w-52 shrink-0 items-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10">
      <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-white/20 transition duration-500 group-hover:rotate-6 group-hover:scale-110">
        <LogoImage sources={sources} name={name} fallback={fallback} from={from} to={to} size={32} />
      </span>
      <span className="text-sm font-bold leading-tight text-white">{name}</span>
      <span
        className={`pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-gradient-to-br ${from} ${to} opacity-20 blur-2xl transition duration-500 group-hover:opacity-50`}
      />
    </div>
  );
}

// Two identical copies side by side, so the loop is seamless
function Row({ items, direction }: { items: Tool[]; direction: "left" | "right" }) {
  const copy = (hidden: boolean) => (
    <div className="flex shrink-0 gap-4 pr-4" aria-hidden={hidden}>
      {items.map((t) => (
        <ToolCard key={`${t.name}-${hidden ? "b" : "a"}`} tool={t} />
      ))}
    </div>
  );

  return (
    <div className="fade-edges overflow-hidden py-1">
      <div
        className={`flex w-max ${direction === "left" ? "animate-scroll-left" : "animate-scroll-right"} scroll-pause`}
      >
        {copy(false)}
        {copy(true)}
      </div>
    </div>
  );
}

export default function ToolsMarquee() {
  const half = Math.ceil(tools.length / 2);

  return (
    <section className="relative overflow-hidden bg-brand-navy py-14 text-white">
      {/* Moving colour glows */}
      <div className="animate-blob pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl" />
      <div
        className="animate-blob pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-fuchsia-500/25 blur-3xl"
        style={{ animationDelay: "-5s" }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300 backdrop-blur">
          Tools We Work With
        </span>
        <h2 className="mt-4 font-[var(--font-heading)] text-3xl font-extrabold md:text-4xl">
          <span className="text-brand-gradient">AI &amp; SEO Tools &amp; Platforms</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-white/70">
          The best tools in search, analytics and AI, used to build and grow your online presence.
        </p>
      </div>

      <div className="relative mt-8 space-y-4">
        <Row items={tools.slice(0, half)} direction="left" />
        <Row items={tools.slice(half)} direction="right" />
      </div>
    </section>
  );
}