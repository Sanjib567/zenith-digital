import {
  Boxes,
  Brain,
  Cloud,
  Code2,
  Container,
  Database,
  Globe,
  LayoutTemplate,
  Layers,
  Network,
  Server,
  ShoppingCart,
  Sparkles,
  Store,
  Terminal,
  Workflow,
  Bot,
  Cpu,
  Zap,
  ShieldCheck,
  Gauge,
  Lock,
  Smartphone,
  Search,
  type LucideIcon,
} from "lucide-react";
import { slugify } from "@/lib/menu";

export type TechGroupKey = "frontend" | "cms" | "backend" | "cloud" | "ai";

export type TechGroup = {
  label: string;
  tone: { from: string; to: string };
  benefits: string[];
  paragraphs: string[]; // {name} is replaced with the technology name
  process: { title: string; text: string }[];
  deliverables: string[];
  faqs: { q: string; a: string }[];
};

export type Tech = {
  name: string;
  group: TechGroupKey;
  icon: LucideIcon;
  image: string;
  tagline: string;
  intro: string;
  stats: { end: number; suffix: string; label: string }[];
  strengths: { title: string; text: string; icon: LucideIcon }[];
};

export const techGroups: Record<TechGroupKey, TechGroup> = {
  frontend: {
    label: "Frontend & Frameworks",
    tone: { from: "#2563eb", to: "#7c3aed" },
    benefits: ["Fast interfaces", "Responsive design", "SEO friendly", "Reusable components", "Easy maintenance"],
    paragraphs: [
      "The front end is what your customers see and touch. It decides whether a visit feels fast, trustworthy and easy, and whether the person stays long enough to enquire or buy. Choosing the right framework for the front end affects every page you publish.",
      "We use {name} because it gives us speed, structure and flexibility. Pages are built from reusable components, which keeps the design consistent and makes future changes faster and less risky for your team.",
      "Every interface is tested on phones, tablets and desktops, and checked for accessibility and performance. Clean code and proper page structure also help search engines understand your content.",
    ],
    process: [
      { title: "Design review", text: "We agree the layout, colours and interactions before any code is written." },
      { title: "Component build", text: "Reusable pieces are built and tested in isolation for consistency." },
      { title: "Performance tuning", text: "Images, scripts and fonts are optimised so pages load quickly." },
      { title: "Launch and handover", text: "We deploy, document the code and train your team." },
    ],
    deliverables: ["Responsive interface build", "Reusable component library", "Performance optimisation", "Accessibility checks", "Clean documented code", "Post-launch support"],
    faqs: [
      { q: "Is this technology suitable for a small business?", a: "Yes. It scales down well and gives a small business the same quality of experience as a large one." },
      { q: "Will my site be fast on mobile?", a: "Yes. We test on real phones and optimise images and scripts so pages load quickly on slower connections." },
    ],
  },
  cms: {
    label: "CMS & Ecommerce Stacks",
    tone: { from: "#f97316", to: "#db2777" },
    benefits: ["Easy content editing", "Store ready", "Plugin ecosystem", "Secure updates", "Team friendly"],
    paragraphs: [
      "A content or commerce platform decides how easily your team can update pages, publish products and manage orders. The right platform saves hours every week and keeps your business running smoothly as it grows.",
      "We build with {name} because it fits how your business works. We set it up with clean themes, the plugins you genuinely need, and a dashboard your team can use confidently without a developer.",
      "Security and performance are handled from day one, with updates, backups and speed tuning. The result is a platform that is easy to run and reliable to sell or publish from.",
    ],
    process: [
      { title: "Platform plan", text: "We map pages, products, roles and the integrations you need." },
      { title: "Setup and theme", text: "We configure the platform and build a theme that matches your brand." },
      { title: "Integrations", text: "Payments, delivery, email and analytics are connected and tested." },
      { title: "Train and support", text: "Your team learns to run the platform, and we keep it secure and updated." },
    ],
    deliverables: ["Platform setup and configuration", "Custom theme", "Essential plugin selection", "Payment and analytics setup", "Team training", "Security and update management"],
    faqs: [
      { q: "Can my team update content without help?", a: "Yes. We set up a simple editor and train your team to publish and edit confidently." },
      { q: "Is the platform secure?", a: "Yes. We keep it updated, limit admin access and set up regular backups." },
    ],
  },
  backend: {
    label: "Backend & Server",
    tone: { from: "#16a34a", to: "#0891b2" },
    benefits: ["Reliable APIs", "Secure data", "Scalable architecture", "Fast responses", "Clear documentation"],
    paragraphs: [
      "The backend is the engine behind every feature: logins, orders, bookings, dashboards and data. When it is well built, the whole product feels fast and dependable. When it is weak, users notice slow pages, errors and lost data.",
      "We build backends with {name} because it suits the job. Our code is organised into clear layers, so new features can be added without breaking existing ones, and every endpoint is tested before release.",
      "We pay close attention to security, data protection and performance under load. Access is controlled, sensitive data is encrypted, and the system is monitored so problems are found early.",
    ],
    process: [
      { title: "Requirements", text: "We define the data, features and users the backend must support." },
      { title: "Architecture", text: "We design the structure, database and API before building." },
      { title: "Build and test", text: "Features are built with automated tests to keep quality high." },
      { title: "Deploy and monitor", text: "We release safely and watch performance, errors and usage." },
    ],
    deliverables: ["API design and documentation", "Database structure", "Authentication and roles", "Automated tests", "Deployment setup", "Monitoring and support"],
    faqs: [
      { q: "Can the backend connect to my website or app?", a: "Yes. We build clean APIs that any website, mobile app or dashboard can use." },
      { q: "How do you handle security?", a: "We use secure authentication, encrypted data and strict access rules, and review the code for common weaknesses." },
    ],
  },
  cloud: {
    label: "Cloud & Hosting",
    tone: { from: "#0ea5e9", to: "#4f46e5" },
    benefits: ["High uptime", "Pay as you grow", "Global reach", "Automatic backups", "Strong security"],
    paragraphs: [
      "Where your website and applications run matters. Cloud hosting gives you speed, reliability and the ability to grow without rebuilding, while keeping your data protected and backed up.",
      "We set up {name} with a clear structure: separate environments for testing and live use, automated deployments and monitoring that alerts us before customers notice a problem.",
      "Costs are kept under control by sizing resources to real demand, and we show you what you are spending each month so there are no surprises on the bill.",
    ],
    process: [
      { title: "Infrastructure plan", text: "We size the servers, storage and network around your real traffic." },
      { title: "Setup", text: "Environments, security rules and backups are configured carefully." },
      { title: "Deploy", text: "Automated deployments put new releases live safely and repeatably." },
      { title: "Monitor", text: "We track uptime, speed and spending, and optimise over time." },
    ],
    deliverables: ["Cloud architecture plan", "Environment setup", "Automated deployments", "Backup and recovery plan", "Security configuration", "Monthly cost and uptime report"],
    faqs: [
      { q: "Will my website go down during a traffic spike?", a: "Cloud setups can scale automatically, and we size resources for your expected peaks." },
      { q: "Can you move my site from another host?", a: "Yes. We plan the move so downtime is minimal and nothing is lost." },
    ],
  },
  ai: {
    label: "AI & Machine Learning",
    tone: { from: "#7c3aed", to: "#db2777" },
    benefits: ["Smarter answers", "Grounded on your data", "Safe by design", "Automation ready", "Measurable value"],
    paragraphs: [
      "AI tools can answer questions, write drafts, search documents and spot patterns, but only when they are connected properly to your business. The difference between a useful AI product and a disappointing one is the data, the rules and the testing behind it.",
      "We use {name} where it fits best. Its strengths are matched to real tasks in your business, and we test its answers against your own information so the output is accurate and on brand.",
      "Privacy and safety are part of the design. Access is limited, sensitive data is protected, and a human can review anything important before it reaches a customer.",
    ],
    process: [
      { title: "Use-case selection", text: "We pick the tasks where this technology saves the most time or earns the most value." },
      { title: "Data preparation", text: "We organise and connect the information the AI needs to answer well." },
      { title: "Build and test", text: "We create the solution and test it against real questions and edge cases." },
      { title: "Monitor and improve", text: "We track accuracy and cost, and refine prompts, rules and data over time." },
    ],
    deliverables: ["Use-case assessment", "Working AI prototype", "Data connection and retrieval setup", "Accuracy testing report", "Safety and privacy controls", "Usage and cost dashboard"],
    faqs: [
      { q: "Will the AI make things up?", a: "We reduce this by grounding answers in your own documents and testing outputs, and a human reviews important responses." },
      { q: "Is my data used to train public models?", a: "We set up providers and settings so your business data is not used for public model training." },
    ],
  },
};

const sharedStrengths = {
  quality: { title: "Built for quality", text: "Clean, tested code that is easy to maintain and extend." },
  speed: { title: "Speed by default", text: "Optimised delivery so pages and features respond quickly." },
  secure: { title: "Security first", text: "Access controls, encryption and regular updates protect your data." },
  scale: { title: "Grows with you", text: "Architecture that handles more users, pages and features over time." },
};

export const techs: Tech[] = [
  {
    name: "React.js",
    group: "frontend",
    icon: Code2,
    image: "/images/technologies/react.jpg",
    tagline: "Interactive interfaces built from reusable components.",
    intro: "React lets us build dashboards, product pages and web apps that feel instant. Components keep every screen consistent and make new features quicker to add.",
    stats: [
      { end: 60, suffix: "%", label: "Faster feature builds" },
      { end: 100, suffix: "%", label: "Component reuse" },
      { end: 3, suffix: "x", label: "Quicker UI updates" },
    ],
    strengths: [
      { title: "Component reuse", text: "Buttons, cards and forms are built once and used everywhere.", icon: Layers },
      { title: "Interactive UI", text: "Screens update instantly as users type, click and filter.", icon: Zap },
      { title: "Huge ecosystem", text: "Mature libraries and tools speed up every project.", icon: Boxes },
      { title: sharedStrengths.quality.title, text: sharedStrengths.quality.text, icon: ShieldCheck },
    ],
  },
  {
    name: "Next.js",
    group: "frontend",
    icon: Globe,
    image: "/images/technologies/nextjs.jpg",
    tagline: "Fast, SEO-ready websites with server rendering built in.",
    intro: "Next.js powers our websites and web apps. It combines fast page loads, search-friendly pages and a clean structure that grows with your business.",
    stats: [
      { end: 3, suffix: "x", label: "Faster page loads" },
      { end: 100, suffix: "%", label: "SEO-ready structure" },
      { end: 1, suffix: " stack", label: "Front and back together" },
    ],
    strengths: [
      { title: "Server rendering", text: "Pages arrive ready to read, which helps speed and search rankings.", icon: Zap },
      { title: "SEO-ready routing", text: "Clean URLs and metadata give search engines clear signals.", icon: Search },
      { title: "Image optimisation", text: "Images are resized and delivered efficiently for every device.", icon: Gauge },
      { title: sharedStrengths.secure.title, text: sharedStrengths.secure.text, icon: ShieldCheck },
    ],
  },
  {
    name: "Vue.js",
    group: "frontend",
    icon: Layers,
    image: "/images/technologies/vuejs.jpg",
    tagline: "Approachable, progressive interfaces that are easy to learn.",
    intro: "Vue.js gives us a gentle learning curve and a flexible approach, ideal for interfaces that grow step by step inside existing products.",
    stats: [
      { end: 2, suffix: "x", label: "Faster onboarding" },
      { end: 100, suffix: "%", label: "Incremental adoption" },
      { end: 5, suffix: " kB", label: "Light core size" },
    ],
    strengths: [
      { title: "Progressive adoption", text: "Add Vue to an existing page without rebuilding the whole site.", icon: Layers },
      { title: "Clear structure", text: "Single-file components keep templates, logic and styles together.", icon: Boxes },
      { title: "Lightweight", text: "A small core keeps pages light and quick to load.", icon: Gauge },
      { title: sharedStrengths.quality.title, text: sharedStrengths.quality.text, icon: ShieldCheck },
    ],
  },
  {
    name: "Tailwind CSS",
    group: "frontend",
    icon: Sparkles,
    image: "/images/technologies/tailwind.jpg",
    tagline: "Utility-first styling for consistent, fast-to-build designs.",
    intro: "Tailwind CSS lets us design directly in the markup with a shared system of spacing, colour and type, so every page matches your brand exactly.",
    stats: [
      { end: 70, suffix: "%", label: "Faster styling" },
      { end: 100, suffix: "%", label: "Design consistency" },
      { end: 10, suffix: " kB", label: "Small final CSS" },
    ],
    strengths: [
      { title: "Consistent design", text: "One shared set of colours, spacing and fonts across every page.", icon: Sparkles },
      { title: "Small CSS output", text: "Unused styles are removed, so pages stay light.", icon: Gauge },
      { title: "Responsive by default", text: "Layouts adapt cleanly from phones to large screens.", icon: Smartphone },
      { title: sharedStrengths.speed.title, text: sharedStrengths.speed.text, icon: Zap },
    ],
  },
  {
    name: "WordPress",
    group: "cms",
    icon: LayoutTemplate,
    image: "/images/technologies/wordpress.jpg",
    tagline: "Flexible content management that your team can run easily.",
    intro: "WordPress is one of the most widely used platforms for publishing and business websites. We set it up cleanly, with a custom theme and only the plugins you need.",
    stats: [
      { end: 40, suffix: "%", label: "Of the web uses WordPress" },
      { end: 100, suffix: "%", label: "Custom theme builds" },
      { end: 24, suffix: "/7", label: "Easy publishing" },
    ],
    strengths: [
      { title: "Easy editing", text: "Your team updates pages and posts without touching code.", icon: LayoutTemplate },
      { title: "Plugin ecosystem", text: "Proven tools for SEO, forms, bookings and more.", icon: Boxes },
      { title: "Custom theme", text: "A theme built for your brand, not a generic template.", icon: Sparkles },
      { title: sharedStrengths.secure.title, text: sharedStrengths.secure.text, icon: ShieldCheck },
    ],
  },
  {
    name: "Shopify",
    group: "cms",
    icon: ShoppingCart,
    image: "/images/technologies/shopify.jpg",
    tagline: "Hosted ecommerce that is fast to launch and easy to run.",
    intro: "Shopify handles hosting, payments and security, so you can focus on products and customers. We build custom themes and connect the tools your store needs.",
    stats: [
      { end: 3, suffix: " wks", label: "Typical store launch" },
      { end: 100, suffix: "%", label: "Hosted and secure" },
      { end: 1, suffix: "-click", label: "Simple checkout" },
    ],
    strengths: [
      { title: "Hosted and secure", text: "Hosting, SSL and payment security are handled for you.", icon: ShieldCheck },
      { title: "Custom themes", text: "Store designs built around your brand and products.", icon: Sparkles },
      { title: "App ecosystem", text: "Reviews, email, shipping and accounting tools that connect easily.", icon: Boxes },
      { title: sharedStrengths.scale.title, text: sharedStrengths.scale.text, icon: Gauge },
    ],
  },
  {
    name: "WooCommerce",
    group: "cms",
    icon: Store,
    image: "/images/technologies/woocommerce.jpg",
    tagline: "A flexible WordPress store with full control of your code.",
    intro: "WooCommerce turns WordPress into a complete online shop. It gives you full control over products, pricing and checkout, with the freedom to customise every detail.",
    stats: [
      { end: 100, suffix: "%", label: "Custom product layouts" },
      { end: 24, suffix: "/7", label: "Store availability" },
      { end: 2, suffix: "x", label: "Faster product publishing" },
    ],
    strengths: [
      { title: "Full control", text: "Customise products, pricing and checkout without platform limits.", icon: Store },
      { title: "Flexible products", text: "Variations, bundles and bookings handled cleanly.", icon: Boxes },
      { title: "Payment options", text: "Local and international gateways set up and tested.", icon: Lock },
      { title: sharedStrengths.speed.title, text: sharedStrengths.speed.text, icon: Zap },
    ],
  },
  {
    name: "Laravel",
    group: "backend",
    icon: Boxes,
    image: "/images/technologies/laravel.jpg",
    tagline: "An elegant PHP framework for secure, feature-rich applications.",
    intro: "Laravel gives us a structured, well-tested foundation for business applications, with built-in tools for authentication, queues, databases and APIs.",
    stats: [
      { end: 50, suffix: "%", label: "Faster backend builds" },
      { end: 100, suffix: "%", label: "Tested core features" },
      { end: 1, suffix: " framework", label: "Batteries included" },
    ],
    strengths: [
      { title: "Built-in security", text: "Authentication, validation and protection against common attacks.", icon: Lock },
      { title: "Clean architecture", text: "Clear structure that new developers can understand quickly.", icon: Layers },
      { title: "Queues and jobs", text: "Background tasks such as emails and reports run reliably.", icon: Workflow },
      { title: sharedStrengths.quality.title, text: sharedStrengths.quality.text, icon: ShieldCheck },
    ],
  },
  {
    name: "Express.js",
    group: "backend",
    icon: Terminal,
    image: "/images/technologies/express.jpg",
    tagline: "Minimal, fast APIs for web and mobile products.",
    intro: "Express.js is a lightweight Node framework for building APIs and server logic. It keeps things simple, fast and easy to extend.",
    stats: [
      { end: 2, suffix: "x", label: "Quicker API delivery" },
      { end: 100, suffix: "%", label: "Typed and tested routes" },
      { end: 1, suffix: " API", label: "Shared by web and app" },
    ],
    strengths: [
      { title: "Lightweight", text: "Only what you need, so responses stay fast.", icon: Zap },
      { title: "Flexible routing", text: "Clean endpoints for every feature in your product.", icon: Network },
      { title: "Huge middleware library", text: "Ready-made tools for auth, logging and validation.", icon: Boxes },
      { title: sharedStrengths.secure.title, text: sharedStrengths.secure.text, icon: ShieldCheck },
    ],
  },
  {
    name: "Node.js",
    group: "backend",
    icon: Server,
    image: "/images/technologies/nodejs.jpg",
    tagline: "JavaScript on the server for fast, real-time applications.",
    intro: "Node.js lets us use one language across the whole product. It is excellent for real-time features such as chat, live dashboards and order updates.",
    stats: [
      { end: 1, suffix: " language", label: "From front end to back end" },
      { end: 100, suffix: "%", label: "Real-time capable" },
      { end: 3, suffix: "x", label: "Faster team hand-offs" },
    ],
    strengths: [
      { title: "Real-time features", text: "Live chat, notifications and dashboards update instantly.", icon: Zap },
      { title: "One language", text: "Front and back end share skills, code and tools.", icon: Code2 },
      { title: "Scales well", text: "Handles many simultaneous connections efficiently.", icon: Gauge },
      { title: sharedStrengths.scale.title, text: sharedStrengths.scale.text, icon: Network },
    ],
  },
  {
    name: "PHP",
    group: "backend",
    icon: Code2,
    image: "/images/technologies/php.jpg",
    tagline: "Proven server-side language that powers much of the web.",
    intro: "PHP is mature, widely supported and cost-effective. We use it for business websites, portals and integrations where reliability matters most.",
    stats: [
      { end: 75, suffix: "%", label: "Of sites with known server language" },
      { end: 100, suffix: "%", label: "Hosting compatibility" },
      { end: 24, suffix: "/7", label: "Stable production use" },
    ],
    strengths: [
      { title: "Wide hosting support", text: "Runs on almost every shared and cloud host.", icon: Server },
      { title: "Mature ecosystem", text: "Decades of tools, libraries and community knowledge.", icon: Boxes },
      { title: "Cost effective", text: "Efficient to build and host for small and medium businesses.", icon: Gauge },
      { title: sharedStrengths.secure.title, text: sharedStrengths.secure.text, icon: ShieldCheck },
    ],
  },
  {
    name: "Python",
    group: "backend",
    icon: Terminal,
    image: "/images/technologies/python.jpg",
    tagline: "Clear, powerful code for data, automation and AI.",
    intro: "Python is readable and versatile. It powers our data pipelines, automation scripts and AI features, and works well alongside web backends.",
    stats: [
      { end: 2, suffix: "x", label: "Faster data processing builds" },
      { end: 100, suffix: "%", label: "Automation ready" },
      { end: 1, suffix: " language", label: "For data and AI" },
    ],
    strengths: [
      { title: "Data and automation", text: "Scripts clean, analyse and move data reliably.", icon: Workflow },
      { title: "AI-ready", text: "The main language for machine learning and AI tools.", icon: Brain },
      { title: "Readable code", text: "Clear syntax makes maintenance easier.", icon: Layers },
      { title: sharedStrengths.quality.title, text: sharedStrengths.quality.text, icon: ShieldCheck },
    ],
  },
  {
    name: "CodeIgniter",
    group: "backend",
    icon: Boxes,
    image: "/images/technologies/codeigniter.jpg",
    tagline: "A light PHP framework for quick, dependable web applications.",
    intro: "CodeIgniter is small, fast and easy to host. It suits focused business applications that need to be delivered quickly and run reliably.",
    stats: [
      { end: 2, suffix: "x", label: "Quicker delivery" },
      { end: 100, suffix: "%", label: "Low server requirements" },
      { end: 1, suffix: " core", label: "Simple structure" },
    ],
    strengths: [
      { title: "Lightweight", text: "Small footprint and fast response times.", icon: Zap },
      { title: "Easy to learn", text: "A short learning curve for new developers.", icon: Layers },
      { title: "Simple hosting", text: "Runs on modest servers without extra setup.", icon: Server },
      { title: sharedStrengths.secure.title, text: sharedStrengths.secure.text, icon: ShieldCheck },
    ],
  },
  {
    name: "AWS",
    group: "cloud",
    icon: Cloud,
    image: "/images/technologies/aws.jpg",
    tagline: "The most complete cloud platform for growing businesses.",
    intro: "Amazon Web Services gives us servers, storage, databases and security tools that scale with your business, with a global network for fast delivery.",
    stats: [
      { end: 99, suffix: "%", label: "Target uptime design" },
      { end: 100, suffix: "%", label: "Pay-as-you-grow" },
      { end: 24, suffix: "/7", label: "Monitoring available" },
    ],
    strengths: [
      { title: "Global reach", text: "Servers close to your customers for faster delivery.", icon: Globe },
      { title: "Scalable", text: "Capacity grows automatically with demand.", icon: Gauge },
      { title: "Managed services", text: "Databases, queues and storage without manual upkeep.", icon: Boxes },
      { title: sharedStrengths.secure.title, text: sharedStrengths.secure.text, icon: ShieldCheck },
    ],
  },
  {
    name: "Google Cloud",
    group: "cloud",
    icon: Cloud,
    image: "/images/technologies/google-cloud.jpg",
    tagline: "Data-driven cloud infrastructure with strong AI integration.",
    intro: "Google Cloud is excellent for data analytics, AI workloads and globally distributed applications, with a clear pricing model and strong developer tools.",
    stats: [
      { end: 99, suffix: "%", label: "Target uptime design" },
      { end: 100, suffix: "%", label: "AI-ready infrastructure" },
      { end: 3, suffix: "x", label: "Faster data insights" },
    ],
    strengths: [
      { title: "Data analytics", text: "Large datasets are stored and queried quickly.", icon: Database },
      { title: "AI integration", text: "Easy access to machine learning services.", icon: Brain },
      { title: "Global network", text: "Fast delivery across regions and countries.", icon: Globe },
      { title: sharedStrengths.secure.title, text: sharedStrengths.secure.text, icon: ShieldCheck },
    ],
  },
  {
    name: "Microsoft Azure",
    group: "cloud",
    icon: Cloud,
    image: "/images/technologies/azure.jpg",
    tagline: "Enterprise cloud that works well with Microsoft tools.",
    intro: "Azure suits businesses that already use Microsoft products. It offers hosting, identity, databases and AI services with strong compliance support.",
    stats: [
      { end: 99, suffix: "%", label: "Target uptime design" },
      { end: 100, suffix: "%", label: "Microsoft tool integration" },
      { end: 60, suffix: "+", label: "Regions worldwide" },
    ],
    strengths: [
      { title: "Microsoft integration", text: "Works smoothly with Office, Teams and Active Directory.", icon: Network },
      { title: "Identity and access", text: "Enterprise sign-in and role management built in.", icon: Lock },
      { title: "Compliance support", text: "Tools to meet many industry and regional standards.", icon: ShieldCheck },
      { title: sharedStrengths.scale.title, text: sharedStrengths.scale.text, icon: Gauge },
    ],
  },
  {
    name: "DigitalOcean",
    group: "cloud",
    icon: Container,
    image: "/images/technologies/digitalocean.jpg",
    tagline: "Simple, predictable cloud servers for focused projects.",
    intro: "DigitalOcean is simple and affordable. It is ideal for websites, APIs and small applications that need clear pricing and easy management.",
    stats: [
      { end: 1, suffix: "-click", label: "Simple server setup" },
      { end: 100, suffix: "%", label: "Predictable pricing" },
      { end: 99, suffix: "%", label: "Target uptime design" },
    ],
    strengths: [
      { title: "Simple to manage", text: "Clean dashboard and quick server setup.", icon: Container },
      { title: "Predictable cost", text: "Clear monthly pricing with no surprises.", icon: Gauge },
      { title: "Developer friendly", text: "Good docs, APIs and container support.", icon: Code2 },
      { title: sharedStrengths.secure.title, text: sharedStrengths.secure.text, icon: ShieldCheck },
    ],
  },
  {
    name: "OpenAI",
    group: "ai",
    icon: Sparkles,
    image: "/images/technologies/openai.jpg",
    tagline: "Advanced language models for answers, writing and automation.",
    intro: "OpenAI models power our chatbots, content assistants and document tools. We connect them to your own information so answers are accurate and on brand.",
    stats: [
      { end: 24, suffix: "/7", label: "Always-on assistant" },
      { end: 5, suffix: "x", label: "Faster first drafts" },
      { end: 100, suffix: "%", label: "Human review option" },
    ],
    strengths: [
      { title: "Natural language", text: "Understands questions and replies in clear, human language.", icon: Brain },
      { title: "Grounded answers", text: "Responses based on your documents, reducing made-up information.", icon: Search },
      { title: "Content generation", text: "Drafts for emails, products and posts, checked by your team.", icon: Sparkles },
      { title: sharedStrengths.secure.title, text: sharedStrengths.secure.text, icon: ShieldCheck },
    ],
  },
  {
    name: "Claude",
    group: "ai",
    icon: Bot,
    image: "/images/technologies/claude.jpg",
    tagline: "Careful, capable AI for long documents and thoughtful answers.",
    intro: "Claude is strong at reading long documents, following detailed instructions and producing careful, well-structured responses for business use.",
    stats: [
      { end: 1, suffix: " long doc", label: "Read in one pass" },
      { end: 24, suffix: "/7", label: "Always-on assistant" },
      { end: 100, suffix: "%", label: "Privacy-aware setup" },
    ],
    strengths: [
      { title: "Long documents", text: "Summarise contracts, reports and manuals in one pass.", icon: Search },
      { title: "Detailed instructions", text: "Follows your brand rules and formats closely.", icon: Layers },
      { title: "Careful answers", text: "Measured, well-structured replies suited to business tasks.", icon: Brain },
      { title: sharedStrengths.secure.title, text: sharedStrengths.secure.text, icon: ShieldCheck },
    ],
  },
  {
    name: "Google Gemini",
    group: "ai",
    icon: Sparkles,
    image: "/images/technologies/gemini.jpg",
    tagline: "Multimodal AI that understands text, images and more.",
    intro: "Gemini works across text, images and structured data. We use it for assistants, content tools and search features connected to Google's ecosystem.",
    stats: [
      { end: 3, suffix: "+", label: "Input types supported" },
      { end: 24, suffix: "/7", label: "Always-on assistant" },
      { end: 100, suffix: "%", label: "Google ecosystem fit" },
    ],
    strengths: [
      { title: "Multimodal", text: "Handles text, images and documents in one workflow.", icon: Network },
      { title: "Google integration", text: "Connects smoothly with Google tools and data.", icon: Globe },
      { title: "Grounded search", text: "Answers based on verified sources and your data.", icon: Search },
      { title: sharedStrengths.scale.title, text: sharedStrengths.scale.text, icon: Gauge },
    ],
  },
  {
    name: "LangChain",
    group: "ai",
    icon: Workflow,
    image: "/images/technologies/langchain.jpg",
    tagline: "The framework that connects AI models to your data and tools.",
    intro: "LangChain helps us build AI workflows: retrieving your documents, calling tools, keeping conversation memory and chaining steps reliably.",
    stats: [
      { end: 3, suffix: "x", label: "Faster AI workflow builds" },
      { end: 100, suffix: "%", label: "Tool-connected workflows" },
      { end: 1, suffix: " framework", label: "Model-agnostic" },
    ],
    strengths: [
      { title: "Document retrieval", text: "Finds the right information before the AI answers.", icon: Search },
      { title: "Tool calling", text: "Lets the AI check orders, bookings or stock safely.", icon: Workflow },
      { title: "Memory", text: "Keeps context across a conversation for better replies.", icon: Brain },
      { title: sharedStrengths.quality.title, text: sharedStrengths.quality.text, icon: ShieldCheck },
    ],
  },
  {
    name: "Pinecone",
    group: "ai",
    icon: Database,
    image: "/images/technologies/pinecone.jpg",
    tagline: "A fast vector database for AI search and recommendations.",
    intro: "Pinecone stores your content as vectors so AI can find the most relevant information in milliseconds, powering smart search and assistants.",
    stats: [
      { end: 1, suffix: " ms", label: "Typical search speed" },
      { end: 100, suffix: "%", label: "Managed service" },
      { end: 3, suffix: "x", label: "Better search relevance" },
    ],
    strengths: [
      { title: "Semantic search", text: "Finds meaning, not just matching keywords.", icon: Search },
      { title: "Fast at scale", text: "Millions of records searched in milliseconds.", icon: Zap },
      { title: "Managed hosting", text: "No database servers for you to maintain.", icon: Cloud },
      { title: sharedStrengths.secure.title, text: sharedStrengths.secure.text, icon: ShieldCheck },
    ],
  },
];

export function techSlug(t: Tech) {
  return slugify(t.name);
}

export function findTech(slug: string) {
  return techs.find((t) => techSlug(t) === slug);
}