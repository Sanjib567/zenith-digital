"use client";

import Reveal from "@/components/Reveal";
import {
  BookOpen,
  Building2,
  Code2,
  Dumbbell,
  Factory,
  Globe,
  Heart,
  Landmark,
  Layers,
  LayoutTemplate,
  Plane,
  Rocket,
  Scale,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Store,
  UtensilsCrossed,
  Wind,
  type LucideIcon,
} from "lucide-react";
import { industries, technologies } from "@/data/site";

const industryIcons: Record<string, LucideIcon> = {
  Healthcare: Heart,
  "Real Estate": Building2,
  Ecommerce: ShoppingCart,
  Education: BookOpen,
  "Travel & Tourism": Plane,
  "Restaurants & Food": UtensilsCrossed,
  "Fitness & Wellness": Dumbbell,
  Finance: Landmark,
  "Legal Services": Scale,
  Manufacturing: Factory,
  "Local Business": Store,
  Startups: Rocket,
};

const toolIcons: Record<string, LucideIcon> = {
  "React.js": Code2,
  "Next.js": Globe,
  "Vue.js": Layers,
  "Tailwind CSS": Wind,
  WordPress: LayoutTemplate,
  Shopify: ShoppingBag,
  WooCommerce: Store,
};

const gradients = [
  "from-blue-600 to-violet-600",
  "from-violet-600 to-fuchsia-600",
  "from-cyan-500 to-blue-600",
  "from-orange-500 to-rose-600",
  "from-emerald-500 to-cyan-600",
  "from-rose-500 to-violet-600",
];

function Tile({
  label,
  Icon,
  grad,
}: {
  label: string;
  Icon: LucideIcon;
  grad: string;
}) {
  return (
    <div className="group flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white p-2 shadow-xs transition duration-300 hover:-translate-y-0.5 hover:shadow-sm">
      <span
        className={`flex h-6 w-6 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${grad} text-white shadow-xs transition duration-300 group-hover:scale-105`}
      >
        <Icon size={14} />
      </span>
      <span className="text-[11px] sm:text-xs font-bold text-slate-800 truncate">{label}</span>
    </div>
  );
}

export default function IndustriesAndTools() {
  const marqueeIndustries = [...industries, ...industries];
  const marqueeTechnologies = [...technologies, ...technologies];

  const coreSectors = [
    { name: "Healthcare", icon: Heart },
    { name: "Real Estate", icon: Building2 },
    { name: "Ecommerce Stacks", icon: ShoppingCart },
    { name: "FinTech Solutions", icon: Landmark },
    { name: "SaaS Enterprises", icon: Code2 },
  ];

  return (
    <section className="relative overflow-hidden py-14 px-4 sm:px-6 lg:px-8 bg-slate-900">
      {/* Background Video fully bright and responsive */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover object-center opacity-90 filter brightness-125 contrast-110"
        >
          <source src="/videos/myvdo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full">
        <Reveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/30 bg-blue-500/20 px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-blue-300 backdrop-blur-md shadow-xs">
              <Sparkles size={12} /> Who We Serve
            </span>
            <h2 className="mt-3 font-[var(--font-heading)] text-2xl sm:text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Industries <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-red-400 to-pink-400">&amp; Tools</span>
            </h2>
            <p className="mt-2 text-slate-200 max-w-xl mx-auto text-xs sm:text-base font-medium px-2">
              Tailored digital solutions for your sector, built with modern technology and proven execution.
            </p>
          </div>
        </Reveal>

        {/* Core Sectors Grid Bar */}
        <div className="mt-8 sm:mt-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {coreSectors.map((sector, index) => {
              const IconComp = sector.icon;
              return (
                <div
                  key={index}
                  className="group relative flex items-center gap-2.5 rounded-2xl border border-white/20 bg-white/10 p-3.5 backdrop-blur-md shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/50 hover:bg-white/20 cursor-pointer"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-red-500 to-pink-500 text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                    <IconComp size={18} />
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-red-400 group-hover:to-pink-400 transition-all duration-300 leading-tight">
                    {sector.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Compact Dual Bottom Boxes */}
        <div className="mt-8 sm:mt-10 grid gap-6 lg:grid-cols-2 w-full">
          {/* Industries Card */}
          <div className="relative rounded-2xl sm:rounded-3xl border border-white/20 bg-white/95 p-4 sm:p-6 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-sm">
                <Building2 size={20} />
              </span>
              <div>
                <h3 className="font-[var(--font-heading)] text-sm sm:text-base font-extrabold text-slate-900">Industries We Serve</h3>
                <p className="text-[10px] sm:text-xs text-slate-500">{industries.length} sectors</p>
              </div>
            </div>

            {/* 2-Column Grid to keep it compact */}
            <div className="mt-4 grid grid-cols-2 gap-2">
              {industries.map((name, i) => (
                <Tile
                  key={name}
                  label={name}
                  Icon={industryIcons[name] ?? Sparkles}
                  grad={gradients[i % gradients.length]}
                />
              ))}
            </div>

            <div className="mt-4 pt-2.5 border-t border-slate-200 overflow-hidden relative">
              <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1 text-center">Active Ecosystems</p>
              <div className="flex w-max animate-marquee gap-2">
                {marqueeIndustries.map((name, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-slate-100 px-2 py-0.5 text-[9px] font-semibold text-slate-700 whitespace-nowrap"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tools Card */}
          <div className="relative rounded-2xl sm:rounded-3xl border border-white/20 bg-white/95 p-4 sm:p-6 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-fuchsia-600 text-white shadow-sm">
                <Code2 size={20} />
              </span>
              <div>
                <h3 className="font-[var(--font-heading)] text-sm sm:text-base font-extrabold text-slate-900">Tools We Work With</h3>
                <p className="text-[10px] sm:text-xs text-slate-500">{technologies.length} technologies</p>
              </div>
            </div>

            {/* 2-Column Grid to keep it compact */}
            <div className="mt-4 grid grid-cols-2 gap-2">
              {technologies.map((name, i) => (
                <Tile
                  key={name}
                  label={name}
                  Icon={toolIcons[name] ?? Sparkles}
                  grad={gradients[(i + 2) % gradients.length]}
                />
              ))}
            </div>

            <div className="mt-4 pt-2.5 border-t border-slate-200 overflow-hidden relative">
              <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1 text-center">Core Stacks</p>
              <div className="flex w-max animate-marquee gap-2">
                {marqueeTechnologies.map((name, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-slate-100 px-2 py-0.5 text-[9px] font-semibold text-slate-700 whitespace-nowrap"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}