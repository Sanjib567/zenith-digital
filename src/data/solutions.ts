import {
  BarChart3,
  Code2,
  Eye,
  FileCheck,
  Gauge,
  Globe,
  Handshake,
  LayoutTemplate,
  Lock,
  Map,
  MapPin,
  Megaphone,
  MousePointerClick,
  Palette,
  Repeat,
  RefreshCw,
  Search,
  Share2,
  ShieldCheck,
  Smartphone,
  Star,
  Target,
  TrendingUp,
  Users,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { slugify } from "@/lib/menu";

export type ServiceGroupKey = "web" | "marketing" | "ecommerce" | "industries";

export type SolutionFeature = { title: string; text: string; icon: LucideIcon };

export type SolutionPage = {
  slug: string;
  title: string;
  group: ServiceGroupKey;
  tagline: string;
  intro: string;
  icon: LucideIcon;
  stats: { end: number; suffix: string; label: string }[];
  features: SolutionFeature[];
};

export type SolutionGroup = {
  label: string;
  tone: { from: string; to: string };
  benefits: string[];
  process: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
};

// Only the Web and Digital Marketing groups live in this file.
// Ecommerce and Industries are defined in commerce.ts.
export const solutionGroups: Record<"web" | "marketing", SolutionGroup> = {
  web: {
    label: "Web & Development",
    tone: { from: "#2563eb", to: "#0891b2" },
    benefits: ["Fast loading", "Mobile first", "SEO ready", "Secure hosting", "Easy to update"],
    process: [
      { title: "Discovery", text: "We learn your goals, audience and what success looks like for your business." },
      { title: "Design", text: "Layouts and visuals are shaped around your brand and the actions your customers take." },
      { title: "Build", text: "We develop, test and optimise on real phones, tablets and desktops." },
      { title: "Launch and support", text: "We go live, monitor performance and stay with you after launch." },
    ],
    faqs: [
      { q: "How long does a website take?", a: "Most business websites take two to four weeks, depending on size and content." },
      { q: "Can I update the website myself?", a: "Yes. We set up an easy content system and train your team to use it." },
      { q: "Do you work with existing websites?", a: "Yes. We can redesign, rebuild or maintain what you already have." },
    ],
  },
  marketing: {
    label: "Digital Marketing",
    tone: { from: "#ea580c", to: "#db2777" },
    benefits: ["Qualified leads", "Measurable results", "Local and global reach", "Transparent reporting", "Monthly optimisation"],
    process: [
      { title: "Research", text: "We study your customers, competitors and the searches and channels that matter most." },
      { title: "Strategy", text: "We plan the campaigns, budgets and messages that fit your goals." },
      { title: "Execute", text: "We launch campaigns and content across the right platforms." },
      { title: "Optimise", text: "We measure results every month and move budget to what works." },
    ],
    faqs: [
      { q: "How soon will I see results?", a: "Paid campaigns can bring enquiries within days. Organic search growth usually builds over three to six months." },
      { q: "Do I need a long contract?", a: "No. We recommend a plan that fits your goals, with clear monthly reporting." },
      { q: "How do you report performance?", a: "You receive a plain-language report with leads, costs and recommended next steps." },
    ],
  },
};

const raw: Omit<SolutionPage, "slug">[] = [
  {
    title: "Custom Website Development",
    group: "web",
    icon: Globe,
    tagline: "Fast, custom websites built to turn visitors into customers.",
    intro:
      "We design and build websites from scratch with Next.js and React, shaped around your brand, your customers and the actions you want them to take.",
    stats: [
      { end: 3, suffix: "x", label: "Faster loading target" },
      { end: 100, suffix: "%", label: "Mobile-responsive layouts" },
      { end: 4, suffix: " wks", label: "Typical launch time" },
    ],
    features: [
      { title: "Next.js performance", text: "Pages load quickly, which keeps visitors engaged and helps search rankings.", icon: Zap },
      { title: "Responsive design", text: "Every layout is tested on phones, tablets and desktops before launch.", icon: Smartphone },
      { title: "SEO-ready structure", text: "Clean code and proper headings give search engines what they need.", icon: Search },
      { title: "Secure and scalable", text: "Built on modern foundations that grow with your traffic and features.", icon: ShieldCheck },
    ],
  },
  {
    title: "Landing Page Development",
    group: "web",
    icon: LayoutTemplate,
    tagline: "High-converting landing pages built around one clear goal.",
    intro:
      "A landing page does one job well. We design focused pages for campaigns, offers and lead capture, with every section pushing towards a single action.",
    stats: [
      { end: 1, suffix: " goal", label: "Focus per page" },
      { end: 24, suffix: " hrs", label: "Typical first draft" },
      { end: 100, suffix: "%", label: "Mobile-first design" },
    ],
    features: [
      { title: "Conversion layout", text: "Headlines, proof and forms are arranged to guide visitors to act.", icon: MousePointerClick },
      { title: "Clear call to action", text: "One primary button, repeated at the right moments on the page.", icon: Target },
      { title: "Testing and iteration", text: "We compare versions and keep the design that gets more enquiries.", icon: Repeat },
      { title: "Fast by default", text: "Lightweight pages load quickly, even on slower mobile connections.", icon: Zap },
    ],
  },
  {
    title: "Website Redesign",
    group: "web",
    icon: RefreshCw,
    tagline: "Give your outdated website a modern look that performs.",
    intro:
      "We rebuild tired websites with a fresh design, clearer navigation and better speed, while protecting the search rankings and content you have already earned.",
    stats: [
      { end: 2, suffix: "x", label: "Faster experience target" },
      { end: 100, suffix: "%", label: "Content migration checks" },
      { end: 0, suffix: " lost", label: "Planned ranking loss" },
    ],
    features: [
      { title: "Modern design", text: "A fresh visual identity that matches how your business looks today.", icon: Palette },
      { title: "Protected SEO", text: "Redirects and structure are planned so existing rankings are kept.", icon: Search },
      { title: "Clear navigation", text: "Visitors find what they need in fewer clicks.", icon: Eye },
      { title: "Speed upgrade", text: "Heavy elements are rebuilt so pages feel quick on every device.", icon: Gauge },
    ],
  },
  {
    title: "Website Maintenance",
    group: "web",
    icon: Wrench,
    tagline: "Keep your website fast, secure and up to date every month.",
    intro:
      "Websites need care. Our maintenance plans cover updates, backups, security and small content changes, so your site keeps working without you worrying about it.",
    stats: [
      { end: 24, suffix: "/7", label: "Uptime monitoring" },
      { end: 12, suffix: "", label: "Months of care plans" },
      { end: 99, suffix: "%", label: "Uptime target" },
    ],
    features: [
      { title: "Security updates", text: "Plugins, frameworks and servers are kept patched and protected.", icon: Lock },
      { title: "Regular backups", text: "Your content and data are backed up so nothing is lost.", icon: ShieldCheck },
      { title: "Content changes", text: "Send us the updates and we publish them quickly.", icon: FileCheck },
      { title: "Monthly reports", text: "A clear summary of uptime, speed and work completed.", icon: BarChart3 },
    ],
  },
  {
    title: "Digital Marketing Campaigns",
    group: "marketing",
    icon: Megaphone,
    tagline: "Integrated campaigns that reach the right people at the right time.",
    intro:
      "We plan and run campaigns across search, social and content, so your message reaches the audience most likely to buy and every rupee is tracked.",
    stats: [
      { end: 3, suffix: "+", label: "Channels in each plan" },
      { end: 100, suffix: "%", label: "Campaigns tracked" },
      { end: 30, suffix: " days", label: "Typical planning cycle" },
    ],
    features: [
      { title: "Audience research", text: "We find who your best customers are and what they are searching for.", icon: Users },
      { title: "Multi-channel reach", text: "Search, social and email work together instead of in isolation.", icon: Share2 },
      { title: "Content strategy", text: "Clear messages and creative that fit each platform.", icon: FileCheck },
      { title: "Performance tracking", text: "Every campaign is measured against enquiries and sales.", icon: TrendingUp },
    ],
  },
  {
    title: "SEO & AI Search Optimization",
    group: "marketing",
    icon: Search,
    tagline: "Rank higher on Google and appear in AI-powered search answers.",
    intro:
      "Our SEO and AI search work combines technical fixes, content optimisation and AEO/GEO so your business ranks on Google, shows up in AI answers and attracts traffic that converts into customers.",
    stats: [
      { end: 90, suffix: "+", label: "Technical checks per audit" },
      { end: 6, suffix: " mo", label: "Typical growth horizon" },
      { end: 100, suffix: "%", label: "Monthly reporting" },
    ],
    features: [
      { title: "Keyword research", text: "We target searches with real buying intent, not vanity traffic.", icon: Search },
      { title: "Technical SEO", text: "Speed, indexing and crawlability are fixed so Google reads your site fully.", icon: Code2 },
      { title: "On-page optimisation", text: "Titles, headings and copy are aligned with what searchers want.", icon: FileCheck },
      { title: "Link building", text: "Trusted mentions and partnerships that strengthen your authority.", icon: Handshake },
    ],
  },
  {
    title: "Local SEO",
    group: "marketing",
    icon: MapPin,
    tagline: "Be the first business customers see in your city.",
    intro:
      "When someone searches for a service near them, Local SEO puts you on the map and in the results that matter, with accurate listings and strong reviews.",
    stats: [
      { end: 2, suffix: "x", label: "More local enquiries target" },
      { end: 100, suffix: "%", label: "Accurate listing details" },
      { end: 4, suffix: "+", label: "Directories kept in sync" },
    ],
    features: [
      { title: "Google Business Profile", text: "Optimised listing with correct hours, services and photos.", icon: MapPin },
      { title: "Local citations", text: "Your details are consistent across directories and maps.", icon: Globe },
      { title: "Review growth", text: "A simple process to earn genuine reviews from happy customers.", icon: Star },
      { title: "Location pages", text: "Dedicated pages for each area you serve, built to rank locally.", icon: Map },
    ],
  },
  {
    title: "Google & Meta Ads",
    group: "marketing",
    icon: Share2,
    tagline: "Paid campaigns on Google and Meta built around your budget.",
    intro:
      "We set up, manage and optimise paid campaigns on Google Search, YouTube and Meta, with clear budgets, audience targeting and weekly performance reviews.",
    stats: [
      { end: 2, suffix: "", label: "Major ad platforms" },
      { end: 100, suffix: "%", label: "Budget transparency" },
      { end: 7, suffix: " days", label: "Review cycle" },
    ],
    features: [
      { title: "Google Search Ads", text: "Appear when customers search for exactly what you offer.", icon: Search },
      { title: "Meta Ads", text: "Reach people on Facebook and Instagram by interest and location.", icon: Share2 },
      { title: "Retargeting", text: "Bring back visitors who showed interest but did not enquire.", icon: Repeat },
      { title: "Budget control", text: "Spend is capped and moved to the campaigns that perform best.", icon: Gauge },
    ],
  },
];

const ppcManagementPage: SolutionPage = {
  slug: "ppc-management",
  title: "PPC & Social Media Advertising",
  group: "marketing",
  icon: Megaphone,
  tagline: "Google Ads and Meta campaigns that turn spend into leads and sales.",
  intro:
    "We plan, launch and optimise performance-focused Google Ads and Meta Ads campaigns designed to reach the right audience, control ad spend and deliver measurable enquiries, bookings and sales.",
  stats: [
    { end: 2, suffix: "", label: "Core ad platforms" },
    { end: 100, suffix: "%", label: "Budget transparency" },
    { end: 7, suffix: " days", label: "Performance review cycle" },
  ],
  features: [
    { title: "Google Ads", text: "Search, Display and YouTube ads that appear when people look for what you sell.", icon: Search },
    { title: "Meta Ads", text: "Facebook and Instagram campaigns targeted by location, interest and behaviour.", icon: Share2 },
    { title: "Conversion tracking", text: "Calls, forms and purchases are tracked so you see which ads actually pay back.", icon: BarChart3 },
    { title: "Spend optimisation", text: "Budget is moved to the ads, audiences and keywords that produce the best results.", icon: Gauge },
  ],
};

export const solutionPages: SolutionPage[] = [
  ...raw.map((p) => ({
    ...p,
    slug: p.title === "SEO & AI Search Optimization" ? "seo-services" : slugify(p.title),
  })),
  ppcManagementPage,
];

export function findSolution(slug: string) {
  return solutionPages.find((p) => p.slug === slug);
}