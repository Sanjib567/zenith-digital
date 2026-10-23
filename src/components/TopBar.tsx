import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Phone, Mail } from "lucide-react";
import { MessageCircle } from "lucide-react"; // Or use SVG for WhatsApp

const countries = [
  { name: "India", code: "IN", slug: "india" },
  { name: "USA", code: "US", slug: "usa" },
  { name: "UK", code: "GB", slug: "uk" },
  { name: "Canada", code: "CA", slug: "canada" },
  { name: "Australia", code: "AU", slug: "australia" },
  { name: "China", code: "CN", slug: "china" },
  { name: "South Africa", code: "ZA", slug: "south-africa" },
];

export default function TopBar() {
  // Format phone number for WhatsApp link (removes + and spaces)
  const whatsappNumber = siteConfig.phone.replace(/[^0-9]/g, "");

  return (
    <div className="bg-brand-gradient text-white py-2 px-6 text-xs font-bold">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4">
        
        {/* Country Badges */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {countries.map((c) => (
            <Link
              key={c.slug}
              href={`/locations/${c.slug}`}
              className="group flex items-center gap-1.5 rounded-md px-1.5 py-0.5 transition hover:bg-white/20"
            >
              <span className="rounded bg-white/20 px-1.5 py-0.5 text-[10px] font-black uppercase text-amber-200 group-hover:bg-amber-300 group-hover:text-brand-navy">
                {c.code}
              </span>
              <span className="font-semibold tracking-wide text-white group-hover:text-amber-200">
                {c.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Contact Information & WhatsApp Button */}
        <div className="flex items-center gap-4 text-xs">
          
          {/* Green WhatsApp Action Button */}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex items-center justify-center rounded-full bg-emerald-500 p-1.5 text-white shadow-md transition hover:bg-emerald-400 hover:scale-110"
            title="Chat on WhatsApp"
          >
            <svg
              className="h-3.5 w-3.5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </a>

          {/* Phone Link */}
          <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-1.5 transition hover:text-amber-200">
            <Phone size={13} />
            <span className="hidden sm:inline">{siteConfig.phone}</span>
          </a>

          {/* Email Link */}
          <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-1.5 transition hover:text-amber-200">
            <Mail size={13} />
            <span className="hidden md:inline">{siteConfig.email}</span>
          </a>

        </div>

      </div>
    </div>
  );
}