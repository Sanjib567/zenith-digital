import {
  Building2,
  CreditCard,
  FileCheck,
  Gauge,
  HeartPulse,
  Lock,
  MapPin,
  Package,
  Palette,
  Repeat,
  Search,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Star,
  Store,
  Target,
  Truck,
  Users,
  Zap,
  TrendingUp,
  Handshake,
} from "lucide-react";
import type { SolutionGroup, SolutionPage } from "@/data/solutions";

export const commerceGroups: Record<"ecommerce" | "industries", SolutionGroup> = {
  ecommerce: {
    label: "Ecommerce",
    tone: { from: "#f97316", to: "#db2777" },
    benefits: ["Higher conversion", "Secure payments", "Easy product management", "Mobile checkout", "Sales growth"],
    process: [
      { title: "Store plan", text: "We map your catalogue, shipping rules, payment methods and the shopping journey." },
      { title: "Design", text: "Product pages, cart and checkout are designed to build trust and remove friction." },
      { title: "Build", text: "We set up the store, connect payments and delivery tools, and test real orders." },
      { title: "Grow", text: "We track sales, recover abandoned carts and improve the best-selling pages." },
    ],
    faqs: [
      { q: "Which ecommerce platform is best for me?", a: "It depends on catalogue size, budget and features. We recommend Shopify, WooCommerce or a custom build after a short discovery call." },
      { q: "Can you connect my payment gateway and courier?", a: "Yes. We connect popular payment gateways and delivery partners, and test every order flow before launch." },
      { q: "Will I be able to update products myself?", a: "Yes. We set up a simple product manager and train your team to add stock, prices and offers." },
    ],
  },
  industries: {
    label: "Industries We Serve",
    tone: { from: "#16a34a", to: "#0891b2" },
    benefits: ["Industry expertise", "Privacy aware", "Local and global", "Clear outcomes", "Long-term support"],
    process: [
      { title: "Industry review", text: "We learn how your sector works, what customers expect and where time is lost." },
      { title: "Solution design", text: "We shape the website, bookings and messages around your industry's real journey." },
      { title: "Build and test", text: "We create the solution and test it with realistic customer scenarios." },
      { title: "Support", text: "We measure results and keep improving with you every month." },
    ],
    faqs: [
      { q: "Do you have experience in my industry?", a: "We work across several sectors. In your first call we will explain how we have helped similar businesses." },
      { q: "Is customer data handled securely?", a: "Yes. We limit access, encrypt connections and follow the privacy rules that apply to your sector." },
      { q: "Can you serve clients outside India?", a: "Yes. We work with clients in the USA, UK, Canada, Australia and beyond." },
    ],
  },
};

export const commercePages: SolutionPage[] = [
  {
    slug: "shopify-development",
    title: "Shopify Development",
    group: "ecommerce",
    icon: ShoppingCart,
    tagline: "Shopify stores designed to sell more, and easy for you to run.",
    intro:
      "We build and customise Shopify stores with clean themes, fast product pages, secure checkout and the apps your business needs, so your team can manage orders and stock with ease.",
    stats: [
      { end: 1, suffix: "-click", label: "Simple checkout target" },
      { end: 100, suffix: "%", label: "Mobile-responsive themes" },
      { end: 3, suffix: " wks", label: "Typical store launch" },
    ],
    features: [
      { title: "Custom theme design", text: "A store that matches your brand, with product pages that explain and persuade.", icon: Palette },
      { title: "Secure checkout", text: "Trusted payment options with a smooth, short checkout that reduces drop-offs.", icon: CreditCard },
      { title: "Inventory and orders", text: "Stock, orders and shipping are organised so your team stays on top of sales.", icon: Package },
      { title: "Apps and integrations", text: "Connect email, reviews, CRM and accounting tools that save time every week.", icon: Zap },
    ],
  },
  {
    slug: "woocommerce-development",
    title: "WooCommerce Development",
    group: "ecommerce",
    icon: Store,
    tagline: "Flexible WordPress stores that grow with your catalogue.",
    intro:
      "WooCommerce turns WordPress into a full online shop. We build tailored WooCommerce stores with custom product layouts, bookings, subscriptions and reliable payment integrations.",
    stats: [
      { end: 100, suffix: "%", label: "Custom product layouts" },
      { end: 24, suffix: "/7", label: "Store availability" },
      { end: 2, suffix: "x", label: "Faster product publishing" },
    ],
    features: [
      { title: "Tailored product pages", text: "Variations, bundles and custom fields presented clearly for every product.", icon: Store },
      { title: "Payments and shipping", text: "Local and international gateways plus delivery rules set up correctly.", icon: Truck },
      { title: "Speed and security", text: "Optimised hosting, caching and backups keep the store fast and protected.", icon: ShieldCheck },
      { title: "Easy management", text: "A dashboard your team can use to update products, offers and orders confidently.", icon: Gauge },
    ],
  },
  {
    slug: "multi-vendor-marketplace",
    title: "Multi-Vendor Marketplace",
    group: "ecommerce",
    icon: Users,
    tagline: "Launch a marketplace where many sellers grow one platform.",
    intro:
      "We build multi-vendor marketplaces where sellers list products, customers buy from many shops, and you earn commission on every sale, with clear dashboards for each side.",
    stats: [
      { end: 3, suffix: "", label: "User roles built in" },
      { end: 100, suffix: "%", label: "Commission tracking" },
      { end: 6, suffix: " wks", label: "Typical MVP timeline" },
    ],
    features: [
      { title: "Seller onboarding", text: "Vendors register, upload products and manage their own shop pages.", icon: Handshake },
      { title: "Commission engine", text: "Automatic commission and payout calculations for every order.", icon: TrendingUp },
      { title: "Admin control", text: "Approve sellers, manage disputes and see the whole marketplace at a glance.", icon: ShieldCheck },
      { title: "Buyer experience", text: "Search, filters and checkout that work across all vendors.", icon: Search },
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare Solutions",
    group: "industries",
    icon: HeartPulse,
    tagline: "Websites and digital tools for clinics, hospitals and wellness practices.",
    intro:
      "Patients search online before they book. We create clear, trustworthy websites and booking tools for healthcare providers, with privacy and accessibility built in from the start.",
    stats: [
      { end: 40, suffix: "%", label: "Fewer missed appointments" },
      { end: 24, suffix: "/7", label: "Online booking" },
      { end: 100, suffix: "%", label: "Privacy-first design" },
    ],
    features: [
      { title: "Patient-friendly website", text: "Clear service pages, doctor profiles and easy contact options.", icon: Smartphone },
      { title: "Online appointments", text: "Patients book slots at any hour, with reminders that reduce no-shows.", icon: Repeat },
      { title: "Local search visibility", text: "Be found by patients searching for your specialty in your city.", icon: MapPin },
      { title: "Privacy and trust", text: "Secure forms, consent handling and reviews that build confidence.", icon: Lock },
    ],
  },
  {
    slug: "real-estate",
    title: "Real Estate Solutions",
    group: "industries",
    icon: Building2,
    tagline: "Property websites and lead tools that turn enquiries into viewings.",
    intro:
      "We build property websites with powerful search, listing pages and enquiry tools that help buyers and tenants find what they want and make agents' lives easier.",
    stats: [
      { end: 3, suffix: "x", label: "Faster enquiry response" },
      { end: 50, suffix: "%", label: "More qualified leads" },
      { end: 24, suffix: "/7", label: "Enquiry coverage" },
    ],
    features: [
      { title: "Property search", text: "Filters for location, price, size and type so visitors find matches quickly.", icon: Search },
      { title: "Listing pages", text: "Photos, maps and key details presented to make every property stand out.", icon: Building2 },
      { title: "Lead capture", text: "Enquiries are gathered and routed to the right agent immediately.", icon: Target },
      { title: "Viewing bookings", text: "Visitors book site visits directly into agent calendars.", icon: FileCheck },
    ],
  },
  {
    slug: "ecommerce-and-retail",
    title: "Ecommerce & Retail Solutions",
    group: "industries",
    icon: Package,
    tagline: "Online and in-store retail tools that bring customers back.",
    intro:
      "We help retailers sell online, manage stock across channels and keep customers coming back with offers, loyalty tools and smart follow-up messages.",
    stats: [
      { end: 25, suffix: "%", label: "Higher repeat purchases" },
      { end: 60, suffix: "%", label: "Questions answered instantly" },
      { end: 3, suffix: "x", label: "Faster product updates" },
    ],
    features: [
      { title: "Online store", text: "A fast, beautiful shop that makes buying simple on any device.", icon: ShoppingCart },
      { title: "Stock across channels", text: "Inventory that stays accurate between online and in-store sales.", icon: Package },
      { title: "Loyalty and offers", text: "Rewards and campaigns that encourage customers to buy again.", icon: Star },
      { title: "Customer follow-up", text: "Order updates, reviews and reminders sent automatically.", icon: Repeat },
    ],
  },
  {
    slug: "local-business",
    title: "Local Business Solutions",
    group: "industries",
    icon: Store,
    tagline: "Be found, booked and reviewed by customers in your own area.",
    intro:
      "Shops, salons, repair services and local firms win customers nearby. We keep your listings accurate, build simple booking and quote tools and help you collect genuine reviews.",
    stats: [
      { end: 2, suffix: "x", label: "More local enquiries" },
      { end: 100, suffix: "%", label: "Accurate business details" },
      { end: 4, suffix: "+", label: "Directories kept in sync" },
    ],
    features: [
      { title: "Google Business Profile", text: "Optimised listing with hours, services, photos and posts.", icon: MapPin },
      { title: "Quote and booking", text: "Customers request a quote or book a slot at any hour.", icon: Repeat },
      { title: "Review growth", text: "A simple process to earn genuine reviews from happy customers.", icon: Star },
      { title: "Local website", text: "A clear site that answers the questions nearby customers ask most.", icon: Smartphone },
    ],
  },
];