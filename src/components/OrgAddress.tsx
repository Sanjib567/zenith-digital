import { MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function OrgAddress({
  variant = "footer",
  className = "",
}: {
  variant?: "footer" | "contact";
  className?: string;
}) {
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`;

  if (variant === "footer") {
    return (
      <a
        href={mapHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-start gap-3 text-sm text-white/80 transition hover:text-white ${className}`}
      >
        <MapPin size={18} className="mt-0.5 shrink-0" />
        <span>{siteConfig.address}</span>
      </a>
    );
  }

  return (
    <a
      href={mapHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-start gap-4 rounded-3xl bg-white p-6 shadow-md ring-1 ring-slate-200 transition duration-500 hover:-translate-y-1 hover:shadow-xl ${className}`}
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-rose-500 text-white shadow-lg transition duration-500 group-hover:rotate-6 group-hover:scale-110">
        <MapPin size={22} />
      </span>
      <div>
        <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand-blue">Our office</p>
        <p className="mt-2 font-[var(--font-heading)] text-lg font-extrabold text-brand-navy">{siteConfig.address}</p>
        <p className="mt-1 text-sm text-brand-navy/65">Open in Google Maps</p>
      </div>
    </a>
  );
}