import Reveal from "@/components/Reveal";
import {
  Building2,
  Stethoscope,
  ShoppingBag,
  GraduationCap,
  Plane,
  Utensils,
  Dumbbell,
  Landmark,
  Scale,
  Factory,
  Store,
  Rocket,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const industryList = [
  { name: "Healthcare", icon: Stethoscope, color: "from-blue-500 to-cyan-500", glow: "group-hover:shadow-blue-500/30" },
  { name: "Real Estate", icon: Building2, color: "from-purple-500 to-indigo-500", glow: "group-hover:shadow-purple-500/30" },
  { name: "Ecommerce", icon: ShoppingBag, color: "from-rose-500 to-pink-500", glow: "group-hover:shadow-rose-500/30" },
  { name: "Education", icon: GraduationCap, color: "from-amber-500 to-orange-500", glow: "group-hover:shadow-amber-500/30" },
  { name: "Travel & Tourism", icon: Plane, color: "from-emerald-500 to-teal-500", glow: "group-hover:shadow-emerald-500/30" },
  { name: "Restaurants & Food", icon: Utensils, color: "from-red-500 to-orange-500", glow: "group-hover:shadow-red-500/30" },
  { name: "Fitness & Wellness", icon: Dumbbell, color: "from-green-500 to-emerald-500", glow: "group-hover:shadow-green-500/30" },
  { name: "Finance", icon: Landmark, color: "from-blue-600 to-indigo-600", glow: "group-hover:shadow-indigo-500/30" },
  { name: "Legal Services", icon: Scale, color: "from-slate-700 to-slate-900", glow: "group-hover:shadow-slate-500/30" },
  { name: "Manufacturing", icon: Factory, color: "from-violet-500 to-purple-600", glow: "group-hover:shadow-violet-500/30" },
  { name: "Local Business", icon: Store, color: "from-teal-500 to-cyan-600", glow: "group-hover:shadow-teal-500/30" },
  { name: "Startups", icon: Rocket, color: "from-fuchsia-500 to-pink-600", glow: "group-hover:shadow-fuchsia-500/30" },
];

export default function IndustriesSection() {
  return (
    <section className="relative bg-slate-900 py-24 px-6 overflow-hidden">
      {/* Background Decorative Mesh Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-blue">
              <Sparkles size={14} /> Tailored Domain Expertise
            </span>
            <h2 className="mt-4 font-[var(--font-heading)] text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
              Industries <span className="text-brand-gradient">We Serve</span>
            </h2>
            <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-base">
              Custom digital solutions, AI SEO architectures, and full-funnel strategies built for specific industry verticals.
            </p>
          </div>
        </Reveal>

        {/* Premium Interactive Cards Grid */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {industryList.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.name} delay={i * 0.03}>
                <div className={`group relative flex flex-col items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-white/30 hover:bg-white/10 shadow-lg ${item.glow}`}>
                  
                  {/* Top Arrow Badge */}
                  <div className="absolute top-3 right-3 text-white/30 group-hover:text-amber-300 transition duration-300">
                    <ArrowUpRight size={14} />
                  </div>

                  {/* Icon Container with Gradient Fill */}
                  <div className={`mt-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg transition duration-300 group-hover:scale-110`}>
                    <Icon size={26} />
                  </div>

                  {/* Label */}
                  <h3 className="mt-4 text-xs md:text-sm font-bold text-slate-200 group-hover:text-white transition text-center">
                    {item.name}
                  </h3>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* ⚡ BEAUTIFUL ANIMATED GRADIENT BORDER SEPARATOR ⚡ */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue via-brand-purple to-transparent opacity-80" />
    </section>
  );
}