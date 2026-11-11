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
  Calendar,
  Server,
  Cloud,
  Brain,
  Terminal,
  Container,
  Boxes,
  BadgeDollarSign,
} from "lucide-react";

// ============================================
// WEBSITE CONFIGURATION
// ============================================

export const siteConfig = {
  name: "Zenith Digital Agency",
  tagline: "AI SEO Marketing Agency",
  email: "zenithdigitalagency@gmail.com",
  phone: "+918480718414",
  whatsapp: "+918480718414",
  location: "India",
  address: "First Floor, Ghitorni, New Delhi, Delhi 110030",
};

export const topBarCountries = [
  "India",
  "USA",
  "UK",
  "Canada",
  "Australia",
  "China",
  "South Africa",
];

// ============================================
// NAVIGATION TYPES
// ============================================

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type MegaSection = {
  title: string;
  items: NavItem[];
};

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

// ============================================
// NAVIGATION MENUS
// ============================================

export const navMenus: MegaMenu[] = [
  {
    label: "AI Solutions",
    href: "/services",
    icon: Bot,
    headerTitle: "AI Solutions & Optimization",
    headerText:
      "Smarter search visibility and automation for growing businesses.",
    sections: [
      {
        title: "AI Search & SEO",
        items: [
          {
            label: "AI Search Optimization",
            href: "/services/seo-services",
            icon: Search,
          },
          {
            label: "AI SEO Services",
            href: "/services/seo-services",
            icon: Search,
          },
          {
            label: "AEO & GEO Optimization",
            href: "/services/seo-services",
            icon: Target,
          },
          {
            label: "LLM SEO",
            href: "/services/seo-services",
            icon: Bot,
          },
          {
            label: "AI Content Strategy",
            href: "/services/seo-services",
            icon: FileText,
          },
        ],
      },
      {
        title: "AI Development",
        items: [
          {
            label: "Custom AI Development",
            href: "/services",
            icon: Cpu,
          },
          {
            label: "AI Chatbot Development",
            href: "/services",
            icon: MessageSquare,
          },
          {
            label: "Generative AI Solutions",
            href: "/services",
            icon: Sparkles,
          },
          {
            label: "AI Integration",
            href: "/services",
            icon: Workflow,
          },
        ],
      },
      {
        title: "AI Automation",
        items: [
          {
            label: "AI WhatsApp Automation",
            href: "/services",
            icon: Send,
          },
          {
            label: "AI Email Automation",
            href: "/services",
            icon: Mail,
          },
          {
            label: "AI CRM Automation",
            href: "/services",
            icon: Database,
          },
          {
            label: "AI Reporting Dashboards",
            href: "/services",
            icon: Gauge,
          },
        ],
      },
      {
        title: "AI by Industry",
        items: [
          {
            label: "AI for Healthcare",
            href: "/services",
            icon: Heart,
          },
          {
            label: "AI for Ecommerce",
            href: "/services",
            icon: ShoppingCart,
          },
          {
            label: "AI for Real Estate",
            href: "/services",
            icon: Building2,
          },
          {
            label: "AI for Local Business",
            href: "/services",
            icon: Store,
          },
        ],
      },
    ],
    panel: {
      title: "Smarter search, smarter operations",
      text:
        "We combine AI SEO with custom AI tools so your business is found and your work runs faster.",
      highlights: [
        "AI Search Optimization",
        "Custom chatbots and automation",
        "Built and supported from India",
      ],
      ctaLabel: "Explore AI Solutions",
      ctaHref: "/ai-solutions",
    },
  },

  {
    label: "Services",
    href: "/services",
    icon: Layers,
    headerTitle: "Our Expertise & Services",
    headerText:
      "Websites, digital marketing and online stores under one roof.",
    sections: [
      {
        title: "Web & Development",
        items: [
          {
            label: "Custom Website Development",
            href: "/services/custom-website-development",
            icon: Globe,
          },
          {
            label: "Landing Page Development",
            href: "/services/custom-website-development",
            icon: LayoutTemplate,
          },
          {
            label: "Website Redesign",
            href: "/services/custom-website-development",
            icon: Layers,
          },
          {
            label: "Website Maintenance",
            href: "/services/custom-website-development",
            icon: Wrench,
          },
        ],
      },
      {
        title: "Digital Marketing",
        items: [
          {
            label: "Digital Marketing Campaigns",
            href: "/services/ppc-management",
            icon: Megaphone,
          },
          {
            label: "SEO Services",
            href: "/services/seo-services",
            icon: Search,
          },
          {
            label: "Local SEO",
            href: "/services/seo-services",
            icon: MapPin,
          },
          {
            label: "Google & Meta Ads",
            href: "/services/ppc-management",
            icon: Share2,
          },
        ],
      },
      {
        title: "Ecommerce",
        items: [
          {
            label: "Shopify Development",
            href: "/services/ecommerce-development",
            icon: ShoppingCart,
          },
          {
            label: "WooCommerce Development",
            href: "/services/ecommerce-development",
            icon: Store,
          },
          {
            label: "Multi-Vendor Marketplace",
            href: "/services/ecommerce-development",
            icon: Users,
          },
        ],
      },
      {
        title: "Industries We Serve",
        items: [
          {
            label: "Healthcare",
            href: "/services",
            icon: Heart,
          },
          {
            label: "Real Estate",
            href: "/services",
            icon: Building2,
          },
          {
            label: "Ecommerce & Retail",
            href: "/services",
            icon: ShoppingCart,
          },
          {
            label: "Local Business",
            href: "/services",
            icon: Store,
          },
        ],
      },
    ],
    panel: {
      title: "Core Offerings",
      text: "Build, get found and sell online with one trusted team.",
      highlights: [
        "Expert Our Expertise layout",
        "Digital Marketing campaigns",
        "High-converting online stores",
      ],
      ctaLabel: "View All Services",
      ctaHref: "/services",
    },
  },

   {
    label: "Technologies",
    href: "/technologies",
    icon: Code2,
    headerTitle: "Tools We Work With",
    headerText:
      "Modern frontend, backend, cloud and AI tools for fast, secure and scalable projects.",
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
      {
        title: "Backend",
        items: [
          { label: "Laravel", href: "/technologies", icon: Boxes },
          { label: "Express.js", href: "/technologies", icon: Terminal },
          { label: "Node.js", href: "/technologies", icon: Server },
          { label: "PHP", href: "/technologies", icon: Code2 },
          { label: "Python", href: "/technologies", icon: Terminal },
          { label: "CodeIgniter", href: "/technologies", icon: Boxes },
        ],
      },
      {
        title: "Cloud",
        items: [
          { label: "AWS", href: "/technologies", icon: Cloud },
          { label: "Google Cloud", href: "/technologies", icon: Cloud },
          { label: "Microsoft Azure", href: "/technologies", icon: Cloud },
          { label: "DigitalOcean", href: "/technologies", icon: Container },
        ],
      },
      {
        title: "AI & Machine Learning",
        items: [
          { label: "OpenAI", href: "/technologies", icon: Sparkles },
          { label: "Claude", href: "/technologies", icon: Bot },
          { label: "Google Gemini", href: "/technologies", icon: Sparkles },
          { label: "LangChain", href: "/technologies", icon: Workflow },
          { label: "Pinecone", href: "/technologies", icon: Database },
        ],
      },
    ],
    panel: {
      title: "Tools We Work With",
      text:
        "We choose the right technology for speed, security, scale and intelligence, from the front end to the cloud.",
      highlights: [
        "Next.js and React for speed",
        "Node.js, Laravel and Python backends",
        "AWS, Google Cloud and Azure hosting",
        "OpenAI, Claude and Gemini integrations",
      ],
      ctaLabel: "See Technologies",
      ctaHref: "/technologies",
    },
  },

  {
    label: "Company",
    href: "/company",
    icon: Building2,
    headerTitle: "About Us & Client Success",
    headerText:
      "Get to know the team, reviews, and insights behind Zenith Digital.",
    sections: [
      {
        title: "About & Why Us",
        items: [
          {
            label: "Our Pricing",
            href: "/company/pricing",
            icon: BadgeDollarSign,
          },
          {
            label: "About Us",
            href: "/company",
            icon: Info,
          },
          {
            label: "Why Choose Us",
            href: "/company",
            icon: Sparkles,
          },
          {
            label: "Trusted by Industry Leaders",
            href: "/company",
            icon: CheckCircle2,
          },
          {
            label: "Flexible Ways to Work",
            href: "/company",
            icon: Clock,
          },
        ],
      },
      {
        title: "Reviews & Insights",
        items: [
          {
            label: "Video Client Reviews",
            href: "/company",
            icon: Video,
          },
          {
            label: "What Our Clients Say",
            href: "/company",
            icon: Star,
          },
          {
            label: "Recent Work / Case Studies",
            href: "/company",
            icon: FolderGit2,
          },
          {
            label: "Blog & Insights",
            href: "/company",
            icon: Newspaper,
          },
        ],
      },
      {
        title: "Support & Legal",
        items: [
                   {
            label: "FAQ",
            href: "/menu/company/faq",
            icon: HelpCircle,
          },
          {
            label: "Contact Us",
            href: "/menu/company/contact-us",
            icon: Mail,
          },
          {
            label: "Privacy Policy",
            href: "/menu/company/privacy-policy",
            icon: Shield,
          },
          {
            label: "Terms & Conditions",
            href: "/menu/company/terms-conditions",
            icon: FileText,
          },
        ],
      },
    ],
    panel: {
      title: "Who we are",
      text:
        "A focused team in India, delivering high-end results worldwide.",
      highlights: [
        "Trusted by Industry Leaders",
        "Video Client Reviews & Feedback",
        "Flexible engagement models",
      ],
      ctaLabel: "Learn About Us",
      ctaHref: "/company",
    },
  },

  {
    label: "Locations",
    href: "/locations",
    icon: MapPin,
    headerTitle: "Global Locations",
    headerText:
      "Head office in India, serving clients worldwide.",
    sections: [
      {
        title: "Head Office",
        items: [
          {
            label: "India",
            href: "/locations",
            icon: MapPin,
          },
        ],
      },
      {
        title: "International Reach",
        items: [
          {
            label: "USA",
            href: "/locations",
            icon: Globe,
          },
          {
            label: "UK",
            href: "/locations",
            icon: Globe,
          },
          {
            label: "Canada",
            href: "/locations",
            icon: Globe,
          },
          {
            label: "Australia",
            href: "/locations",
            icon: Globe,
          },
          {
            label: "China",
            href: "/locations",
            icon: Globe,
          },
          {
            label: "South Africa",
            href: "/locations",
            icon: Globe,
          },
        ],
      },
    ],
    panel: {
      title: "Worldwide reach",
      text:
        "Clear communication across time zones, wherever your customers are.",
      highlights: [
        "Head office in India",
        "Clients in the USA, UK, Canada and Australia",
      ],
      ctaLabel: "View Locations",
      ctaHref: "/locations",
    },
  },

  {
    label: "Contact",
    href: "/contact",
    icon: User,
    headerTitle: "Talk to Zenith",
    headerText: "Get in touch, request a quote or book a meeting with our team in India.",
    sections: [
      {
        title: "Reach the team",
        items: [
          {
            label: "Contact Us",
            href: "/contact",
            icon: Mail,
          },
          {
            label: "Get a Quote",
            href: "/contact/get-quote",
            icon: FileText,
          },
          {
            label: "Schedule a Meeting",
            href: "/contact/schedule-meeting",
            icon: Calendar,
          },
        ],
      },
    ],
    panel: {
      title: "Ready to start?",
      text: "Tell us what you need. We reply within one business day with a clear next step.",
      highlights: [
        "Free consultation",
        "Written quote in 24 hours",
        "Meet on a call that suits you",
      ],
      ctaLabel: "Get A Free Consultation",
      ctaHref: "/contact/get-quote",
    },
  },
];

// ============================================
// OUR EXPERTISE / SERVICES
// ============================================

export const services = [
  {
    slug: "custom-website-development",
    title: "Custom Website Development",
    description:
      "We build fast, responsive, and SEO-friendly websites using modern technologies like Next.js and React, tailored to your business goals to deliver exceptional user experiences and drive conversions.",
    icon: "globe" as const,
  },
  {
    slug: "seo-services",
    title: "SEO & AI Search Optimization",
    description:
      "Boost your online visibility with strategic SEO, content optimization, and AI search optimization (AEO/GEO) to help your business rank higher on Google, appear in AI-powered search results, and attract qualified traffic that converts into customers.",
    icon: "search" as const,
  },
  {
    slug: "ecommerce-development",
    title: "Ecommerce Development",
    description:
      "Launch and grow your online store with tailored Shopify, WooCommerce, and custom ecommerce solutions featuring secure payment integration, seamless shopping experiences, and easy product management to maximize sales and business growth.",
    icon: "cart" as const,
  },
  {
    slug: "ppc-management",
    title: "PPC & Social Media Advertising",
    description:
      "Drive targeted traffic and generate qualified leads with performance-focused Google Ads and Meta Ads campaigns designed to maximize conversions, optimize ad spend, and deliver measurable business growth.",
    icon: "megaphone" as const,
  },
];

// ============================================
// WHY CHOOSE ZENITH DIGITAL AGENCY
// ============================================

export const whyUsIntro = {
  title: "Why Choose Zenith Digital Agency?",
  description:
    "We combine technology, creativity, and data-driven strategies to help businesses strengthen their digital presence, attract the right audience, and achieve sustainable growth.",
  closing:
    "Zenith Digital Agency — Combining Technology, AI, and Marketing to Turn Your Digital Vision into Measurable Growth.",
  industriesTitle: "Trusted by Industry Leaders",
  industriesDescription:
    "We deliver tailored digital solutions for businesses across diverse industries.",
};

export const whyUs = [
  {
    title: "AI-Powered Digital Strategy",
    text:
      "We combine proven SEO techniques with AI-powered search optimization (AEO/GEO) to improve your brand's visibility across Google and emerging AI-powered search platforms.",
  },
  {
    title: "High-Performance & Secure Solutions",
    text:
      "We build fast, responsive, and secure websites and applications designed to deliver seamless user experiences, improve search performance, and support business growth.",
  },
  {
    title: "Transparent Process & Timely Delivery",
    text:
      "Our structured, agile approach keeps projects on track with clear timelines, regular progress updates, and transparent communication from start to launch.",
  },
  {
    title: "Dedicated Expert Team",
    text:
      "Our developers, designers, and digital marketing specialists work together to deliver tailored solutions aligned with your business goals and long-term vision.",
  },
  {
    title: "Data-Driven, Measurable Growth",
    text:
      "We track meaningful performance metrics, including website traffic, search visibility, leads, and conversions, giving you clear insights into your digital marketing performance.",
  },
  {
    title: "Global Reach, Personalized Support",
    text:
      "From India to the USA, UK, Australia, and beyond, we partner with businesses worldwide, providing flexible collaboration, responsive communication, and solutions tailored to each market.",
  },
];

// ============================================
// INDUSTRIES WE SERVE
// ============================================

export const industries = [
  "Healthcare",
  "Real Estate",
  "E-commerce",
  "Home Services",
  "Dental Clinics & Private Practices",
  "Professional Services & Consulting",
];

// ============================================
// CASE STUDIES
// ============================================

export const caseStudies = [
  {
    title: "Online Store Redesign",
    category: "Ecommerce",
    seed: "zenith-case-1",
  },
  {
    title: "Local Business SEO",
    category: "SEO",
    seed: "zenith-case-2",
  },
  {
    title: "Service Website Launch",
    category: "Web Development",
    seed: "zenith-case-3",
  },
];

// ============================================
// TECHNOLOGIES
// ============================================

export const technologies = [
  "React.js",
  "Next.js",
  "Vue.js",
  "Tailwind CSS",
  "WordPress",
  "Shopify",
  "WooCommerce",
];

// ============================================
// GLOBAL LOCATIONS
// ============================================

export const locations = [
  "USA",
  "UK",
  "Canada",
  "Australia",
  "China",
  "South Africa",
  "India",
];

// ============================================
// COMPANY STATISTICS
// ============================================

export const stats = [
  { value: 5, suffix: "+", label: "Years of experience" },
  { value: 100, suffix: "+", label: "Projects delivered" },
  { value: 20, suffix: "+", label: "Countries served" },
  { value: 25, suffix: "+", label: "Team members" },
];

// ============================================
// FREQUENTLY ASKED QUESTIONS
// ============================================

export const faqs = [
  {
    question: "What services does Zenith Digital Agency provide?",
    answer:
      "We build websites, online stores, and run SEO, AI SEO, and paid ad campaigns for growing businesses.",
  },
  {
    question: "What is AI SEO?",
    answer:
      "AI SEO helps your business appear in AI search answers, such as ChatGPT, Perplexity and Google AI Overviews, alongside regular search results.",
  },
  {
    question: "Where is Zenith based?",
    answer:
      "Our head office is in  India, and we serve clients in several countries.",
  },
  {
    question: "How long does a website project take?",
    answer:
      "Most business websites take 2 to 4 weeks. Larger ecommerce or custom projects are scoped and scheduled individually.",
  },
  {
    question: "How do I start a project?",
    answer:
      "Click Get A Free Consultation, send us your details, and we will reply with a plan and a quote.",
  },
];