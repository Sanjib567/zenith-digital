import { Building2, HeartPulse, ShoppingCart, Store, type LucideIcon } from "lucide-react";
import type { ServiceDetailData } from "@/data/aiSearchSeo";

export const aiIndustryServices: ServiceDetailData[] = [
  {
    slug: "ai-for-healthcare",
    title: "AI for Healthcare",
    tagline: "Smarter patient communication, bookings and records for clinics and hospitals.",
    intro:
      "Healthcare teams spend hours on calls, bookings and reminders. AI for Healthcare automates the routine so staff can focus on patients, while every interaction stays private and compliant.",
    icon: HeartPulse as LucideIcon,
    stats: [
      { end: 40, suffix: "%", label: "Fewer missed appointments" },
      { end: 24, suffix: "/7", label: "Booking availability" },
      { end: 50, suffix: "%", label: "Less front-desk workload" },
    ],
    highlights: [
      { title: "Smart booking", text: "Patients book, reschedule and cancel through chat without waiting on hold." },
      { title: "Reminders", text: "Automatic reminders reduce no-shows and free up appointment slots." },
      { title: "Pre-visit questions", text: "Patients receive clear preparation instructions before their visit." },
      { title: "Privacy first", text: "Data is handled securely, with access limited to authorised staff." },
      { title: "Multilingual replies", text: "Patients are answered in the language they use." },
      { title: "Staff handover", text: "Sensitive questions go to a clinician or receptionist straight away." },
    ],
    useCases: [
      { title: "Clinics", text: "Appointments and reminders run without a busy phone line." },
      { title: "Diagnostic centres", text: "Test bookings and report-ready notifications sent automatically." },
      { title: "Dental practices", text: "Recall reminders keep patients returning on schedule." },
      { title: "Hospitals", text: "Department enquiries routed to the right team quickly." },
    ],
    process: [
      { title: "Workflow review", text: "We map bookings, reminders and common patient questions." },
      { title: "Compliance check", text: "We set privacy, consent and data rules with you first." },
      { title: "Build", text: "We create the assistant and connect it to your booking system." },
      { title: "Monitor", text: "We review performance and patient feedback every month." },
    ],
    deliverables: [
      "Booking and reminder workflow",
      "Patient FAQ assistant",
      "Privacy and consent setup",
      "Staff handover rules",
      "Monthly performance report",
      "Staff training",
    ],
    faqs: [
      { q: "Is patient data kept private?", a: "Yes. We limit access, encrypt data and follow the privacy rules that apply to your practice." },
      { q: "Can it give medical advice?", a: "No. It shares general information and passes clinical questions to your staff." },
    ],
  },
  {
    slug: "ai-for-ecommerce",
    title: "AI for Ecommerce",
    tagline: "Product discovery, support and recovery that help shoppers buy with confidence.",
    intro:
      "Shoppers leave when they cannot find answers fast. AI for Ecommerce improves product search, answers questions instantly and wins back abandoned carts, turning browsing into sales.",
    icon: ShoppingCart as LucideIcon,
    stats: [
      { end: 25, suffix: "%", label: "Higher conversion potential" },
      { end: 60, suffix: "%", label: "Questions answered instantly" },
      { end: 3, suffix: "x", label: "Faster product content" },
    ],
    highlights: [
      { title: "Smart product search", text: "Shoppers find what they mean, even when they type it loosely." },
      { title: "Product recommendations", text: "Suggestions are based on what each shopper views and buys." },
      { title: "Support chat", text: "Order, delivery and return questions answered at any hour." },
      { title: "Cart recovery", text: "Friendly reminders bring back shoppers who left without buying." },
      { title: "Product descriptions", text: "AI drafts listings that your team reviews before publishing." },
      { title: "Sales insight", text: "Dashboards show which products sell and which need attention." },
    ],
    useCases: [
      { title: "Fashion and apparel", text: "Size, fit and style questions answered in seconds." },
      { title: "Electronics", text: "Specifications and comparisons explained clearly." },
      { title: "Food and grocery", text: "Reorders and delivery questions handled automatically." },
      { title: "Handmade and local brands", text: "Stories and product details shared consistently across listings." },
    ],
    process: [
      { title: "Store audit", text: "We review your catalogue, support queries and drop-off points." },
      { title: "Design", text: "We plan search, chat and recovery flows around your customers." },
      { title: "Integrate", text: "We connect your store platform and order system." },
      { title: "Grow", text: "We test, measure and expand what drives sales." },
    ],
    deliverables: [
      "Catalogue search improvement",
      "Product recommendation setup",
      "Support chat for your store",
      "Cart recovery sequences",
      "Product copy drafts",
      "Monthly sales report",
    ],
    faqs: [
      { q: "Which store platform do you support?", a: "We work with common platforms such as Shopify and WooCommerce, and custom stores." },
      { q: "Will the product descriptions be accurate?", a: "Yes. Drafts are built from your product data and checked by your team before publishing." },
    ],
  },
  {
    slug: "ai-for-real-estate",
    title: "AI for Real Estate",
    tagline: "Qualify property leads and book site visits while you focus on closing deals.",
    intro:
      "Property enquiries arrive at all hours, and many go cold before anyone responds. AI for Real Estate qualifies buyers and tenants, answers listing questions and schedules viewings automatically.",
    icon: Building2 as LucideIcon,
    stats: [
      { end: 3, suffix: "x", label: "Faster enquiry response" },
      { end: 50, suffix: "%", label: "More qualified leads" },
      { end: 24, suffix: "/7", label: "Enquiry coverage" },
    ],
    highlights: [
      { title: "Lead qualification", text: "Budget, location and timeline are captured before an agent calls." },
      { title: "Listing questions", text: "Size, price, amenities and availability answered instantly." },
      { title: "Viewing scheduler", text: "Site visits are booked directly into agent calendars." },
      { title: "Follow-up sequences", text: "Leads receive timely updates until they are ready to move." },
      { title: "Portal connection", text: "Enquiries from your listings and ads are gathered in one place." },
      { title: "Agent handover", text: "Warm leads reach the right agent with full context." },
    ],
    useCases: [
      { title: "Residential agencies", text: "Buyers and tenants qualified before the first call." },
      { title: "Commercial property", text: "Office and retail enquiries handled with detailed criteria." },
      { title: "Developers", text: "Project enquiries and site visits managed for launches." },
      { title: "Rentals", text: "Viewings and documents requested automatically." },
    ],
    process: [
      { title: "Lead journey", text: "We map how enquiries come in and where they stall." },
      { title: "Qualify", text: "We design the questions and scoring rules for your listings." },
      { title: "Connect", text: "We link the assistant to your calendar and CRM." },
      { title: "Optimise", text: "We track response times and conversion, then improve." },
    ],
    deliverables: [
      "Lead qualification flow",
      "Listing FAQ assistant",
      "Viewing booking setup",
      "CRM and calendar connection",
      "Lead follow-up sequences",
      "Monthly enquiry report",
    ],
    faqs: [
      { q: "Can it handle many listings?", a: "Yes. It can answer questions across your whole portfolio using your listing data." },
      { q: "Does it replace our agents?", a: "No. It handles the first response and admin, so agents spend time on serious buyers." },
    ],
  },
  {
    slug: "ai-for-local-business",
    title: "AI for Local Business",
    tagline: "Be found, booked and reviewed by customers in your own city.",
    intro:
      "Local customers search on Google and ask AI tools for nearby services. AI for Local Business keeps your listings accurate, answers local questions and turns searches into bookings for shops, salons, repair services and more.",
    icon: Store as LucideIcon,
    stats: [
      { end: 2, suffix: "x", label: "More local enquiries" },
      { end: 100, suffix: "%", label: "Accurate business details" },
      { end: 4, suffix: "", label: "Platforms kept in sync" },
    ],
    highlights: [
      { title: "Local search visibility", text: "Your business appears when customers search near you." },
      { title: "Accurate listings", text: "Hours, address and services are consistent across directories." },
      { title: "Review growth", text: "Happy customers are invited to leave reviews at the right moment." },
      { title: "Booking assistant", text: "Customers book a slot or ask for a quote at any hour." },
      { title: "Local content", text: "Pages and posts that answer questions from your neighbourhood." },
      { title: "Simple reporting", text: "See calls, bookings and map views in a monthly summary." },
    ],
    useCases: [
      { title: "Salons and clinics", text: "Bookings and reminders handled without a phone queue." },
      { title: "Repair services", text: "Quotes and urgent requests answered quickly." },
      { title: "Shops and restaurants", text: "Opening hours, menus and offers always up to date." },
      { title: "Tuition and training", text: "Enquiries and trial bookings captured automatically." },
    ],
    process: [
      { title: "Local audit", text: "We review your listings, reviews and local search position." },
      { title: "Set up", text: "We correct listings and build your booking and review flows." },
      { title: "Connect", text: "We link bookings to your calendar and customer records." },
      { title: "Grow", text: "We publish local content and track results each month." },
    ],
    deliverables: [
      "Local listings audit and fixes",
      "Booking and quote assistant",
      "Review request workflow",
      "Local content plan",
      "Monthly local visibility report",
      "Staff training",
    ],
    faqs: [
      { q: "Do I need a website to start?", a: "Not necessarily. We can start with your listings and booking flow, then add a website later." },
      { q: "How soon will local results improve?", a: "Listing corrections can show quickly. Stronger local rankings usually build over a few months." },
    ],
  },
];

export function getAiIndustryService(slug: string) {
  return aiIndustryServices.find((s) => s.slug === slug);
}