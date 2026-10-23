import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ArrowUpRight, TrendingUp, Sparkles, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Luxury Apparel Store",
    category: "Shopify & Next.js",
    metric: "+240% Sales Growth",
    description: "Built a headless store with instant page transitions and automated AI product search.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    tags: ["Next.js", "Tailwind CSS", "Shopify API"],
    slug: "luxury-apparel",
  },
  {
    title: "SaaS Analytics & AI Dashboard",
    category: "Full-Stack Web App",
    metric: "3.2x Lead Conversions",
    description: "Custom admin platform engineered for real-time traffic tracking and AI insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "TypeScript", "Node.js"],
    slug: "saas-dashboard",
  },
  {
    title: "Healthcare Practice Portal & Local SEO",
    category: "SEO & Web Development",
    metric: "#1 Local Rank in 45 Days",
    description: "Complete digital overhaul and AEO/GEO optimization for multi-clinic dental network.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
    tags: ["AI SEO", "Schema Markup", "Next.js"],
    slug: "healthcare-seo",
  },
];

export default function RecentWork() {
  return (
    <section className="bg-gradient-to-b from-slate-50 via-blue-50/20 to-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-blue/20 bg-brand-blue/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-blue">
                <Sparkles size={14} /> Proven Results
              </span>
              <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-extrabold text-brand-navy md:text-4xl lg:text-5xl">
                Featured <span className="text-brand-gradient">Case Studies</span>
              </h2>
              <p className="mt-2 text-brand-navy/70 text-base max-w-xl">
                Explore real projects where high-performance web engineering and AI SEO drove measurable business growth.
              </p>
            </div>

            <Link
              href="/company"
              className="inline-flex items-center gap-2 rounded-full border border-brand-navy/20 bg-white px-6 py-3 text-sm font-bold text-brand-navy shadow-sm transition hover:bg-brand-navy hover:text-white"
            >
              View All Work <ExternalLink size={16} />
            </Link>
          </div>
        </Reveal>

        {/* Project Showcase Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.1}>
              <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-navy/10 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-brand-blue/30">
                
                {/* Image & Overlay Metric Badge */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 rounded-full bg-slate-900/80 backdrop-blur-md px-3 py-1 text-xs font-bold text-white shadow-md">
                    {project.category}
                  </div>

                  {/* ROI Metric Badge */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-xl bg-emerald-500/90 backdrop-blur-md px-3.5 py-1.5 text-xs font-extrabold text-white shadow-xl">
                    <TrendingUp size={14} />
                    <span>{project.metric}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-extrabold text-brand-navy group-hover:text-brand-blue transition">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm text-brand-navy/70 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* CTA Link */}
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue group-hover:text-brand-purple transition">
                      Explore Case Study <ArrowUpRight size={18} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}