import Reveal from "@/components/Reveal";
import { Code2, Sparkles, Cpu, Globe, Layers, Zap } from "lucide-react";

const techList = [
  { name: "React.js", category: "Frontend Framework", level: "Expert", icon: Code2 },
  { name: "Next.js 15", category: "Full-Stack App", level: "Core Stack", icon: Zap },
  { name: "Vue.js", category: "UI Engine", level: "Expert", icon: Layers },
  { name: "Tailwind CSS", category: "Styling System", level: "Core Stack", icon: Sparkles },
  { name: "TypeScript", category: "Type Safety", level: "Core Stack", icon: Code2 },
  { name: "Node.js", category: "Backend Runtime", level: "Advanced", icon: Cpu },
  { name: "WordPress", category: "CMS Architecture", level: "Expert", icon: Globe },
  { name: "Shopify", category: "E-Commerce", level: "Partner", icon: Zap },
  { name: "WooCommerce", category: "E-Commerce", level: "Advanced", icon: Layers },
  { name: "Python / AI", category: "Machine Learning", level: "AEO / GEO", icon: Cpu },
  { name: "PostgreSQL", category: "Database Stack", level: "Advanced", icon: Code2 },
  { name: "GraphQL", category: "API Layer", level: "Core Stack", icon: Sparkles },
];

export default function TechStackSection() {
  return (
    <section className="relative bg-slate-950 py-24 px-6 overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.15),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-orange">
              <Sparkles size={14} /> Cutting-Edge Tech Stack
            </span>
            <h2 className="mt-4 font-[var(--font-heading)] text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
              Tools &amp; Technologies <span className="text-brand-gradient">We Work With</span>
            </h2>
            <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-base">
              Engineered with modern frameworks, high-speed rendering engines, and AI-optimized data layers.
            </p>
          </div>
        </Reveal>

        {/* Premium Interactive Grid Cards with Glow */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {techList.map((t, i) => {
            const Icon = t.icon;
            return (
              <Reveal key={t.name} delay={i * 0.03}>
                <div className="group relative flex items-center justify-between rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/50 hover:bg-white/10 hover:shadow-xl hover:shadow-brand-orange/10">
                  
                  <div className="flex items-center gap-3.5">
                    {/* Glowing Animated Icon Badge */}
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-brand-orange transition duration-300 group-hover:bg-brand-orange group-hover:text-white group-hover:scale-110 shadow-md">
                      <Icon size={20} />
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-amber-200 transition">
                        {t.name}
                      </h3>
                      <p className="text-xs font-medium text-slate-400">{t.category}</p>
                    </div>
                  </div>

                  {/* Level Pill */}
                  <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-extrabold text-amber-300 group-hover:bg-amber-300 group-hover:text-slate-900 transition">
                    {t.level}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}