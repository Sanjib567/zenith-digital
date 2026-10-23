import { navMenus, type MegaMenu, type MegaSection, type NavItem } from "@/data/site";

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const isExternalHref = (href: string) => /^(https?:|mailto:|tel:)/.test(href);

export const menuSlug = (menu: MegaMenu) => slugify(menu.label);

export function findMenu(slug: string) {
  return navMenus.find((m) => m.sections && menuSlug(m) === slug);
}

export function findItem(menu: MegaMenu, itemSlug: string): { item: NavItem; section: MegaSection } | null {
  for (const section of menu.sections ?? []) {
    for (const item of section.items) {
      if (slugify(item.label) === itemSlug) return { item, section };
    }
  }
  return null;
}

export function itemHref(menu: MegaMenu, item: NavItem) {
  if (isExternalHref(item.href)) return item.href;
  // Location items open their own country page
  if (menu.label === "Locations") return `/locations/${slugify(item.label)}`;
  return `/menu/${menuSlug(menu)}/${slugify(item.label)}`;
}

// Country flags (ISO country codes) for location items
const FLAG_CODES: Record<string, string> = {
  India: "in",
  USA: "us",
  UK: "gb",
  Canada: "ca",
  Australia: "au",
  China: "cn",
  "South Africa": "za",
  Ireland: "ie",
  UAE: "ae",
};

export function flagUrl(label: string): string | null {
  const code = FLAG_CODES[label];
  return code ? `https://flagcdn.com/w80/${code}.png` : null;
}