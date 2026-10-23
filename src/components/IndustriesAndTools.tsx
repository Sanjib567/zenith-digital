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
  dark = false,
}: {
  label: string;
  Icon: LucideIcon;
  grad: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`group flex items-center gap-3 rounded-2xl border p-3 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
        dark
          ? "border-white/10 bg-white/5 hover:bg-white/10"
          : "border-slate-200 bg-white shadow-sm"
      }`}
    >
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${grad} text-white shadow-md transition duration-300 group-hover:rotate-6 group-hover:scale-110`}
      >
        <Icon size={20} />
      </span>
      <span className={`text-sm font-semibold ${dark ? "text-white" : "text-slate-800"}`}>{label}</span>
    </div>
  );
}

export default function IndustriesAndTools() {
  return (
    <section className="relative overflow-hidden bg-slate-50 px-6 py-20">
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-rose-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand-blue">Who we serve</p>
          <h2 className="mt-2 font-[var(--font-heading)] text-3xl font-extrabold text-slate-900 md:text-4xl">
            Industries &amp; Tools
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Tailored digital solutions for your sector, built with modern technology.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Industries card */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-lg">
                <Building2 size={26} />
              </span>
              <div>
                <h3 className="font-[var(--font-heading)] text-xl font-extrabold text-slate-900">Industries We Serve</h3>
                <p className="text-sm text-slate-500">{industries.length} sectors</p>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {industries.map((name, i) => (
                <Tile
                  key={name}
                  label={name}
                  Icon={industryIcons[name] ?? Sparkles}
                  grad={gradients[i % gradients.length]}
                />
              ))}
            </div>
          </div>

          {/* Tools card */}
          <div className="relative overflow-hidden rounded-3xl bg-brand-navy p-8 text-white shadow-xl">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
            <div className="relative flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-lg">
                <Code2 size={26} />
              </span>
              <div>
                <h3 className="font-[var(--font-heading)] text-xl font-extrabold">Tools We Work With</h3>
                <p className="text-sm text-white/60">{technologies.length} technologies</p>
              </div>
            </div>
            <div className="relative mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {technologies.map((name, i) => (
                <Tile
                  key={name}
                  label={name}
                  Icon={toolIcons[name] ?? Sparkles}
                  grad={gradients[(i + 2) % gradients.length]}
                  dark
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}