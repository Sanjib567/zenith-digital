import Link from "next/link";
import { ArrowRight, Globe, Megaphone, Search, ShoppingCart, type LucideIcon } from "lucide-react";
import { servicePhotos } from "@/lib/images";

const icons: Record<"globe" | "search" | "cart" | "megaphone", LucideIcon> = {
  globe: Globe,
  search: Search,
  cart: ShoppingCart,
  megaphone: Megaphone,
};

export default function ServiceCard({
  slug,
  title,
  description,
  icon,
}: {
  slug: string;
  title: string;
  description: string;
  icon: keyof typeof icons;
}) {
  const Icon = icons[icon];
  const photo = servicePhotos[slug];

  return (
    <Link
      href={`/services/${slug}`}
      className="group block h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-40 overflow-hidden bg-slate-100">
        {photo && (
          <img
            src={photo}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        )}
        <span className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-gradient text-white shadow-lg ring-2 ring-white">
          <Icon size={18} />
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-sm text-slate-600">{description}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue">
          Explore Service <ArrowRight size={14} className="transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
