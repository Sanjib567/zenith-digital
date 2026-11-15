import Reveal from "@/components/Reveal";

const toolsList = [
  { name: "ChatGPT", category: "AI & LLM" },
  { name: "Google Search Console", category: "SEO" },
  { name: "Google Analytics 4", category: "Data" },
  { name: "Semrush", category: "Keyword Strategy" },
  { name: "Ahrefs", category: "Backlink Audit" },
  { name: "Google Ads", category: "PPC" },
  { name: "Meta Ads Manager", category: "Social Marketing" },
  { name: "Screaming Frog", category: "Technical SEO" },
  { name: "Perplexity AI", category: "AEO / GEO" },
  { name: "Claude AI", category: "AI Optimization" },
];

export default function ToolsPlatforms() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16">
      <Reveal>
        <div className="text-center">
          <span className="inline-block rounded-full border border-brand-purple/20 bg-brand-purple/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-brand-purple sm:text-xs">
            Tools We Use
          </span>
          <h2 className="mt-3 font-[var(--font-heading)] text-2xl font-extrabold leading-tight text-brand-navy sm:text-3xl md:text-4xl">
            AI &amp; SEO{" "}
            <span className="text-brand-gradient">Tools &amp; Platforms</span>
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-[13px] text-brand-navy/70 sm:text-sm md:text-base">
            Driven by modern AI frameworks, analytics platforms, and search
            engine optimization stacks.
          </p>
        </div>
      </Reveal>

      {/* Mobile: clean 2-column grid. sm and up: centered wrapping pills */}
      <div className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-10 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-3 md:gap-4">
        {toolsList.map((tool, i) => (
          <Reveal key={tool.name} delay={i * 0.05}>
            <div className="group flex h-full w-full items-center gap-2.5 rounded-xl border border-brand-navy/10 bg-white px-3 py-2.5 shadow-sm transition duration-300 hover:border-brand-blue hover:bg-brand-blue/5 hover:shadow-md sm:w-auto sm:gap-2 sm:rounded-2xl sm:px-5 sm:py-3">
              <span className="h-2 w-2 shrink-0 rounded-full bg-brand-gradient transition group-hover:scale-125" />

              <div className="flex min-w-0 flex-col sm:flex-row sm:items-center sm:gap-2">
                <span className="text-[13px] font-bold leading-tight text-brand-navy sm:text-sm">
                  {tool.name}
                </span>

                {/* Mobile: category on its own line, no brackets */}
                <span className="mt-0.5 text-[10px] font-semibold leading-tight text-slate-400 transition group-hover:text-brand-blue sm:hidden">
                  {tool.category}
                </span>

                {/* Desktop: original "(category)" inline style */}
                <span className="hidden text-[10px] font-semibold text-slate-400 transition group-hover:text-brand-blue sm:inline">
                  ({tool.category})
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}