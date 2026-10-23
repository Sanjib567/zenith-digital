// All website text and dropdown configuration lives here.
import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Search,
  Target,
  FileText,
  BarChart3,
  Cpu,
  MessageSquare,
  Sparkles,
  Workflow,
  Briefcase,
  Send,
  Mail,
  Database,
  Users,
  Gauge,
  Layers,
  Building2,
  BookOpen,
  Store,
  ShoppingCart,
  MapPin,
  Globe,
  LayoutTemplate,
  Wrench,
  Megaphone,
  Share2,
  Code2,
  Info,
  Newspaper,
  Heart,
  User,
  Shield,
  HelpCircle,
  FolderGit2,
  Video,
  Star,
  CheckCircle2,
  Clock,
} from "lucide-react";

export const siteConfig = {
  name: "Zenith Digital Agency",
  tagline: "AI SEO Marketing Agency",
  email: "zenithdigitalagency@gmail.com",
  phone: "+918480718414",
  whatsapp: "+918480718414",
  location: "Odisha, India",
};

export const topBarCountries = ["India", "USA", "UK", "Canada", "Australia", "China", "South Africa"];

export type NavItem = { label: string; href: string; icon: LucideIcon };
export type MegaSection = { title: string; items: NavItem[] };
export type MegaMenu = {
  label: string;
  href: string;
  icon: LucideIcon;
  headerTitle?: string;
  headerText?: string;
  sections?: MegaSection[];
  panel?: {
    title: string;
    text: string;
    highlights: string[];
    ctaLabel: string;
    ctaHref: string;
  };
};

export const navMenus: MegaMenu[] = [
  {
    label: "AI Solutions",
    href: "/services",
    icon: Bot,
    headerTitle: "AI Solutions & Optimization",
    headerText: "Smarter search visibility and automation for growing businesses.",
    sections: [
      {
        title: "AI Search & SEO",
        items: [
          { label: "AI Search Optimization", href: "/services/seo-services", icon: Search },
          { label: "AI SEO Services", href: "/services/seo-services", icon: Search },
          { label: "AEO & GEO Optimization", href: "/services/seo-services", icon: Target },
          { label: "LLM SEO", href: "/services/seo-services", icon: Bot },
          { label: "AI Content Strategy", href: "/services/seo-services", icon: FileText },
        ],
      },
      {
        title: "AI Development",
        items: [
          { label: "Custom AI Development", href: "/services", icon: Cpu },
          { label: "AI Chatbot Development", href: "/services", icon: MessageSquare },
          { label: "Generative AI Solutions", href: "/services", icon: Sparkles },
          { label: "AI Integration", href: "/services", icon: Workflow },
        ],
      },
      {
        title: "AI Automation",
        items: [
          { label: "AI WhatsApp Automation", href: "/services", icon: Send },
          { label: "AI Email Automation", href: "/services", icon: Mail },
          { label: "AI CRM Automation", href: "/services", icon: Database },
          { label: "AI Reporting Dashboards", href: "/services", icon: Gauge },
        ],
      },
      {
        title: "AI by Industry",
        items: [
          { label: "AI for Healthcare", href: "/services", icon: Heart },
          { label: "AI for Ecommerce", href: "/services", icon: ShoppingCart },
          { label: "AI for Real Estate", href: "/services", icon: Building2 },
          { label: "AI for Local Business", href: "/services", icon: Store },
        ],
      },
    ],
    panel: {
      title: "Smarter search, smarter operations",
      text: "We combine AI SEO with custom AI tools so your business is found and your work runs faster.",
      highlights: ["AI Search Optimization", "Custom chatbots and automation", "Built and supported from India"],
      ctaLabel: "Explore AI Solutions",
      ctaHref: "/services/seo-services",
    },
  },
  {
    label: "Services",
    href: "/services",
    icon: Layers,
    headerTitle: "Our Expertise & Services",
    headerText: "Websites, digital marketing and online stores under one roof.",
    sections: [
      {
        title: "Web & Development",
        items: [
          { label: "Custom Website Development", href: "/services/custom-website-development", icon: Globe },
          { label: "Landing Page Development", href: "/services/custom-website-development", icon: LayoutTemplate },
          { label: "Website Redesign", href: "/services/custom-website-development", icon: Layers },
          { label: "Website Maintenance", href: "/services/custom-website-development", icon: Wrench },
        ],
      },
      {
        title: "Digital Marketing",
        items: [
          { label: "Digital Marketing Campaigns", href: "/services/ppc-management", icon: Megaphone },
          { label: "SEO Services", href: "/services/seo-services", icon: Search },
          { label: "Local SEO", href: "/services/seo-services", icon: MapPin },
          { label: "Google & Meta Ads", href: "/services/ppc-management", icon: Share2 },
        ],
      },
      {
        title: "Ecommerce",
        items: [
          { label: "Shopify Development", href: "/services/ecommerce-development", icon: ShoppingCart },
          { label: "WooCommerce Development", href: "/services/ecommerce-development", icon: Store },
          { label: "Multi-Vendor Marketplace", href: "/services/ecommerce-development", icon: Users },
        ],
      },
      {
        title: "Industries We Serve",
        items: [
          { label: "Healthcare", href: "/services", icon: Heart },
          { label: "Real Estate", href: "/services", icon: Building2 },
          { label: "Ecommerce & Retail", href: "/services", icon: ShoppingCart },
          { label: "Local Business", href: "/services", icon: Store },
        ],
      },
    ],
    panel: {
      title: "Core Offerings",
      text: "Build, get found and sell online with one trusted team.",
      highlights: ["Expert Our Expertise layout", "Digital Marketing campaigns", "High-converting online stores"],
      ctaLabel: "View All Services",
      ctaHref: "/services",
    },
  },
  {
    label: "Technologies",
    href: "/technologies",
    icon: Code2,
    headerTitle: "Tools We Work With",
    headerText: "Modern tools for fast, secure and scalable projects.",
    sections: [
      {
        title: "Frontend & Frameworks",
        items: [
          { label: "React.js", href: "/technologies", icon: Code2 },
          { label: "Next.js", href: "/technologies", icon: Globe },
          { label: "Vue.js", href: "/technologies", icon: Layers },
          { label: "Tailwind CSS", href: "/technologies", icon: Sparkles },
        ],
      },
      {
        title: "CMS & Ecommerce Stacks",
        items: [
          { label: "WordPress", href: "/technologies", icon: LayoutTemplate },
          { label: "Shopify", href: "/technologies", icon: ShoppingCart },
          { label: "WooCommerce", href: "/technologies", icon: Store },
        ],
      },
    ],
    panel: {
      title: "Tools We Work With",
      text: "We choose the right technology stack for speed, security and easy updates.",
      highlights: ["Next.js and React for speed", "WordPress and Shopify ecosystems", "Analytics and tracking tools"],
      ctaLabel: "See Technologies",
      ctaHref: "/technologies",
    },
  },
  {
    label: "Company",
    href: "/company",
    icon: Building2,
    headerTitle: "About Us & Client Success",
    headerText: "Get to know the team, reviews, and insights behind Zenith Digital.",
    sections: [
      {
        title: "About & Why Us",
        items: [
          { label: "About Us", href: "/company", icon: Info },
          { label: "Why Choose Us", href: "/company", icon: Sparkles },
          { label: "Trusted by Industry Leaders", href: "/company", icon: CheckCircle2 },
          { label: "Flexible Ways to Work", href: "/company", icon: Clock },
        ],
      },
      {
        title: "Reviews & Insights",
        items: [
          { label: "Video Client Reviews", href: "/company", icon: Video },
          { label: "What Our Clients Say", href: "/company", icon: Star },
          { label: "Recent Work / Case Studies", href: "/company", icon: FolderGit2 },
          { label: "Blog & Insights", href: "/company", icon: Newspaper },
        ],
      },
      {
        title: "Support & Legal",
        items: [
          { label: "FAQ", href: "/#faq", icon: HelpCircle },
          { label: "Contact Us", href: "/contact", icon: Mail },
          { label: "Privacy Policy", href: "/company", icon: Shield },
          { label: "Terms & Conditions", href: "/company", icon: FileText },
        ],
      },
    ],
    panel: {
      title: "Who we are",
      text: "A focused team in Odisha, India, delivering high-end results worldwide.",
      highlights: ["Trusted by Industry Leaders", "Video Client Reviews & Feedback", "Flexible engagement models"],
      ctaLabel: "Learn About Us",
      ctaHref: "/company",
    },
  },
  {
    label: "Locations",
    href: "/locations",
    icon: MapPin,
    headerTitle: "Global Locations",
    headerText: "Head office in India, serving clients worldwide.",
    sections: [
      {
        title: "Head Office",
        items: [{ label: "Odisha, India", href: "/locations", icon: MapPin }],
      },
      {
        title: "International Reach",
        items: [
          { label: "USA", href: "/locations", icon: Globe },
          { label: "UK", href: "/locations", icon: Globe },
          { label: "Canada", href: "/locations", icon: Globe },
          { label: "Australia", href: "/locations", icon: Globe },
          { label: "China", href: "/locations", icon: Globe },
          { label: "South Africa", href: "/locations", icon: Globe },
        ],
      },
    ],
    panel: {
      title: "Worldwide reach",
      text: "Clear communication across time zones, wherever your customers are.",
      highlights: ["Head office in Odisha, India", "Clients in the USA, UK, Canada and Australia"],
      ctaLabel: "View Locations",
      ctaHref: "/locations",
    },
  },
  { label: "Contact", href: "/contact", icon: User },
];

export const services = [
  {
    slug: "custom-website-development",
    title: "Custom Website Development",
    description: "Fast, responsive websites built with Next.js and React, designed around your business goals.",
    icon: "globe" as const,
  },
  {
    slug: "seo-services",
    title: "SEO & AI SEO",
    description: "Technical SEO, content strategy and AEO/GEO optimization so you show up in Google and AI search.",
    icon: "search" as const,
  },
  {
    slug: "ecommerce-development",
    title: "Ecommerce Development",
    description: "Shopify, WooCommerce and custom online stores with secure payments and easy product management.",
    icon: "cart" as const,
  },
  {
    slug: "ppc-management",
    title: "PPC & Social Ads",
    description: "Google Ads and Meta Ads campaigns managed for qualified leads and a strong return on spend.",
    icon: "megaphone" as const,
  },
];

export const whyUs = [
  { title: "AI-Powered Strategy", text: "We combine classic SEO with AI search optimization so your brand is found on Google and in ChatGPT-style answers." },
  { title: "Secure, Fast Builds", text: "Clean, modern code with fast load times, secure forms and reliable hosting that helps both users and search engines." },
  { title: "Clear Timelines", text: "Agile delivery with regular updates, so you always know what is being built and when it goes live." },
  { title: "Dedicated Team", text: "A small team of developers, designers and marketers who work on your project from start to finish." },
  { title: "Measurable Results", text: "Monthly reports on traffic, rankings, leads and sales, explained in plain language." },
  { title: "Work Anywhere", text: "We serve clients across India, the USA, the UK, Australia and beyond, with clear communication in every time zone." },
];

export const industries = [
  "Healthcare", "Real Estate", "Ecommerce", "Education", "Travel & Tourism", "Restaurants & Food",
  "Fitness & Wellness", "Finance", "Legal Services", "Manufacturing", "Local Business", "Startups",
];

export const caseStudies = [
  { title: "Online Store Redesign", category: "Ecommerce", seed: "zenith-case-1" },
  { title: "Local Business SEO", category: "SEO", seed: "zenith-case-2" },
  { title: "Service Website Launch", category: "Web Development", seed: "zenith-case-3" },
];

export const technologies = ["React.js", "Next.js", "Vue.js", "Tailwind CSS", "WordPress", "Shopify", "WooCommerce"];

export const locations = ["USA", "UK", "Canada", "Australia", "China", "South Africa", "India"];

export const stats = [
  { value: 5, suffix: "+", label: "Years of experience" },
  { value: 100, suffix: "+", label: "Projects delivered" },
  { value: 20, suffix: "+", label: "Countries served" },
  { value: 25, suffix: "+", label: "Team members" },
];

export const faqs = [
  {
    question: "What services does Zenith Digital Agency provide?",
    answer: "We build websites, online stores, and run SEO, AI SEO, and paid ad campaigns for growing businesses.",
  },
  {
    question: "What is AI SEO?",
    answer: "AI SEO helps your business appear in AI search answers, such as ChatGPT, Perplexity and Google AI Overviews, alongside regular search results.",
  },
  {
    question: "Where is Zenith based?",
    answer: "Our head office is in Odisha, India, and we serve clients in several countries.",
  },
  {
    question: "How long does a website project take?",
    answer: "Most business websites take 2 to 4 weeks. Larger ecommerce or custom projects are scoped and scheduled individually.",
  },
  {
    question: "How do I start a project?",
    answer: "Click Get A Free Consultation, send us your details, and we will reply with a plan and a quote.",
  },
];