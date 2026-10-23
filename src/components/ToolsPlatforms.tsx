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
    <section className="mx-auto max-w-7xl px-6 py-16">
      <Reveal>
        <div className="text-center">
          <span className="inline-block rounded-full border border-brand-purple/20 bg-brand-purple/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-purple">
            Tools We Use
          </span>
          <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-extrabold text-brand-navy md:text-4xl">
            AI &amp; SEO <span className="text-brand-gradient">Tools &amp; Platforms</span>
          </h2>
          <p className="mt-2 text-brand-navy/70 text-sm md:text-base">
            Driven by modern AI frameworks, analytics platforms, and search engine optimization stacks.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3 md:gap-4">
        {toolsList.map((tool, i) => (
          <Reveal key={tool.name} delay={i * 0.05}>
            <div className="group flex items-center gap-2 rounded-2xl border border-brand-navy/10 bg-white px-5 py-3 shadow-sm transition duration-300 hover:border-brand-blue hover:bg-brand-blue/5 hover:shadow-md">
              <span className="h-2 w-2 rounded-full bg-brand-gradient group-hover:scale-125 transition" />
              <span className="text-sm font-bold text-brand-navy">{tool.name}</span>
              <span className="text-[10px] font-semibold text-slate-400 group-hover:text-brand-blue">
                ({tool.category})
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}