import {
  Info, Sparkles, BadgeCheck, Compass, Users, Target, Heart, Award, Globe, Handshake,
  Rocket, Shield, Eye, Lightbulb, Clock, Calendar, Video, Star, MessageSquare, FolderGit2,
  Newspaper, BookOpen, Lock, FileText, Scale, CheckCircle2, Briefcase, Zap, Layers, type LucideIcon,
} from "lucide-react";
import { slugify } from "@/lib/menu";

export type CompanyBox = { title: string; text: string; icon: LucideIcon };
export type CompanyStat = { end: number; suffix: string; label: string };

export type CompanyPageData = {
  label: string;
  tagline: string;
  intro: string;
  icon: LucideIcon;
  stats: CompanyStat[];
  story: string[];
  highlightTitle: string;
  highlights: string[];
  boxes: CompanyBox[];
};

export const companyPages: CompanyPageData[] = [
  {
    label: "About Us",
    tagline: "A focused team in India, delivering world-class digital results.",
    intro:
      "Zenith Digital Agency is a web development, AI SEO and digital marketing team based in New Delhi. We help businesses get found, trusted and chosen, with clear communication at every step.",
    icon: Info,
    stats: [
      { end: 5, suffix: "+", label: "Years of experience" },
      { end: 100, suffix: "+", label: "Projects delivered" },
      { end: 20, suffix: "+", label: "Countries served" },
    ],
    story: [
      "We started with a simple belief: businesses deserve a digital partner who explains things clearly, delivers on time and measures results honestly. That belief still shapes how we plan every project, from the first conversation to the monthly report.",
      "Our team combines developers, designers, SEO specialists and marketers. Because they work together on the same goals, a website is built with search and conversions in mind, and campaigns are designed around the pages they will send visitors to.",
      "Today we serve clients across India and abroad, from clinics and retailers to property firms and local services. Each client gets a dedicated lead, a written plan and a team that treats their budget as carefully as their own.",
    ],
    highlightTitle: "What makes us who we are",
    highlights: [
      "Clear plans, written scope and honest timelines",
      "Developers, designers and marketers working as one team",
      "Plain-language reports that explain what to do next",
      "Based in India, serving clients worldwide",
    ],
    boxes: [
      { title: "Our mission", text: "Make professional digital growth achievable for businesses of every size.", icon: Target },
      { title: "Our vision", text: "Become the most trusted digital and AI partner for growing businesses in India and abroad.", icon: Eye },
      { title: "Our values", text: "Honesty, clarity, ownership of results and respect for every client's budget.", icon: Heart },
      { title: "Our team", text: "A mix of engineers, designers and marketers who enjoy solving practical problems.", icon: Users },
    ],
  },
  {
    label: "Why Choose Us",
    tagline: "Four reasons clients stay with us for the long term.",
    intro:
      "Many agencies promise results. We show how we get them, with a process you can follow, a team you can reach and reporting you can understand.",
    icon: Sparkles,
    stats: [
      { end: 4, suffix: "", label: "Core strengths" },
      { end: 100, suffix: "%", label: "Transparent reporting" },
      { end: 24, suffix: "/7", label: "Support mindset" },
    ],
    story: [
      "The first reason is clarity. Every project starts with goals written down in plain language, so everyone knows what success looks like. That makes decisions faster and stops surprises later in the project.",
      "The second reason is experience across the whole digital picture. We are not only a web studio or only an ads team. Because we see the website, the search strategy and the campaigns together, we avoid the common gaps that waste budget.",
      "The third reason is accountability. We measure what matters, report it monthly and adjust quickly when something is not working. Clients always know where their investment is going and what it is returning.",
    ],
    highlightTitle: "Why teams choose Zenith",
    highlights: [
      "Clear goals agreed before work begins",
      "One team across web, search, AI and marketing",
      "Monthly reports in plain language",
      "Fast, friendly support on WhatsApp and email",
    ],
    boxes: [
      { title: "Clarity first", text: "You see the scope, timeline and cost in writing before we start.", icon: BadgeCheck },
      { title: "Full-stack thinking", text: "Website, search, ads and AI are planned together, not in separate silos.", icon: Layers },
      { title: "Measured results", text: "Every project has agreed measures, reviewed each month with you.", icon: Award },
      { title: "Responsive team", text: "A named lead answers quickly, so problems are solved before they grow.", icon: MessageSquare },
    ],
  },
  {
    label: "Trusted by Industry Leaders",
    tagline: "Experience across sectors where trust and performance matter most.",
    intro:
      "Clients in healthcare, property, retail and professional services rely on us for websites, search visibility and automation that match how their industry actually works.",
    icon: Handshake,
    stats: [
      { end: 20, suffix: "+", label: "Countries reached" },
      { end: 6, suffix: "", label: "Industry focus areas" },
      { end: 100, suffix: "%", label: "Client-led planning" },
    ],
    story: [
      "Industry leaders expect more than a pretty website. They need accurate information, secure forms, reliable hosting and search results that bring the right customers. We plan every project around those needs from day one.",
      "Our work spans clinics and hospitals, property agencies, ecommerce brands, education providers and local service firms. Each sector brings its own rules and customer journeys, and we adapt the approach rather than forcing a template.",
      "Trust is earned over time. Many of our clients return for new projects because the first one was delivered with care, documented well and measured honestly. That repeat relationship is one of the proudest parts of our work.",
    ],
    highlightTitle: "Sectors we serve with confidence",
    highlights: [
      "Healthcare: booking, privacy-aware websites and local visibility",
      "Real estate: property search and lead routing",
      "Ecommerce: fast stores, checkout and recovery flows",
      "Professional services: credibility-led websites and content",
    ],
    boxes: [
      { title: "Industry knowledge", text: "We learn the customer journey of your sector before designing anything.", icon: Briefcase },
      { title: "Privacy by design", text: "Sensitive information is handled with access control and secure forms.", icon: Lock },
      { title: "Proven delivery", text: "Clients return because projects are documented, tested and measured.", icon: Award },
      { title: "Global reach", text: "We work with clients in India, the USA, UK, Canada, Australia and beyond.", icon: Globe },
    ],
  },
  {
    label: "Flexible Ways to Work",
    tagline: "Engagement models that fit your budget, team and pace.",
    intro:
      "Not every business needs the same arrangement. We offer project-based builds, monthly retainers and dedicated teams, and we help you choose the one that makes sense today.",
    icon: Compass,
    stats: [
      { end: 3, suffix: "", label: "Engagement models" },
      { end: 24, suffix: "h", label: "Typical first response" },
      { end: 100, suffix: "%", label: "Remote-friendly delivery" },
    ],
    story: [
      "A project-based engagement suits a defined goal, such as a new website or a campaign launch. You agree the scope and price up front, and we deliver against it with regular reviews along the way.",
      "A monthly retainer suits businesses that need ongoing search, content, ads or maintenance. The work continues each month, with a plan, progress review and report, and the scope can grow or shrink as priorities change.",
      "A dedicated team suits larger projects that need a steady group of specialists. They work as an extension of your business, with a clear lead, shared tools and a predictable monthly cost.",
    ],
    highlightTitle: "Choose the model that fits",
    highlights: [
      "Project-based: fixed scope for a defined launch",
      "Monthly retainer: ongoing growth and maintenance",
      "Dedicated team: steady capacity for larger work",
      "Remote or on-site collaboration, depending on need",
    ],
    boxes: [
      { title: "Fixed scope", text: "Project pricing with a clear list of what is included.", icon: FileText },
      { title: "Ongoing growth", text: "Retainers keep search, content and ads moving every month.", icon: Rocket },
      { title: "Steady capacity", text: "Dedicated teams give you specialists without hiring full time.", icon: Users },
      { title: "Easy to change", text: "Review your model every quarter and switch as your needs change.", icon: Clock },
    ],
  },
  {
    label: "Video Client Reviews",
    tagline: "Hear directly from the clients we have worked with.",
    intro:
      "Written reviews tell part of the story. Video reviews show the people behind the projects, explaining the challenge, the work we did and the results they saw.",
    icon: Video,
    stats: [
      { end: 2, suffix: "", label: "Featured video reviews" },
      { end: 100, suffix: "%", label: "Unedited feedback focus" },
      { end: 1, suffix: "", label: "Clear story per client" },
    ],
    story: [
      "Each video review starts with the client's own problem. They describe what was not working before, what they hoped for and what worried them about working with an agency. Those details matter to prospective clients who face similar questions.",
      "We ask clients to speak about the process, the communication and the results they have seen. We do not script the answers. Honest feedback, including areas where things could have gone better, makes the reviews more useful and more believable.",
      "If you would like to see more examples, or speak with a past client about their experience, let us know during your consultation. We are happy to arrange a conversation where it is appropriate.",
    ],
    highlightTitle: "What you will learn from our reviews",
    highlights: [
      "The real challenge each client faced",
      "How the project was planned and delivered",
      "What changed in traffic, enquiries or sales",
      "Whether the team communicated well throughout",
    ],
    boxes: [
      { title: "Real voices", text: "Clients speak in their own words about working with Zenith.", icon: Video },
      { title: "Specific results", text: "Reviews focus on what changed, not vague praise.", icon: Target },
      { title: "Honest feedback", text: "We share useful criticism too, because it helps buyers decide.", icon: Shield },
      { title: "Talk to a client", text: "Ask us about a reference call during your consultation.", icon: MessageSquare },
    ],
  },
  {
    label: "What Our Clients Say",
    tagline: "Written feedback from businesses that trusted us with their growth.",
    intro:
      "Every testimonial reflects a working relationship. Here is what clients say about our communication, quality of work and the results they saw over time.",
    icon: Star,
    stats: [
      { end: 4, suffix: "", label: "Featured testimonials" },
      { end: 100, suffix: "%", label: "Feedback reviewed monthly" },
      { end: 1, suffix: "", label: "Named lead per client" },
    ],
    story: [
      "Clients often mention three things: they felt listened to, the plan was clear and the team kept its promises. Those points are the foundation of every project we run, and they are what we work hardest to maintain.",
      "Feedback also shapes how we work. When a client points out something that could be better, we review it with the team and change our process, so the next client benefits from the lesson.",
      "We publish testimonials with permission and keep them accurate. If you would like to speak with a client about their experience, we can arrange that during your free consultation.",
    ],
    highlightTitle: "What clients consistently tell us",
    highlights: [
      "Clear communication from start to finish",
      "Work delivered on the agreed timeline",
      "Reports that explain what happened and why",
      "A team that feels like an extension of their own",
    ],
    boxes: [
      { title: "Listened to", text: "Clients feel their goals shape the plan, not a template.", icon: MessageSquare },
      { title: "Plan kept", text: "Timelines and scope are agreed and then honoured.", icon: CheckCircle2 },
      { title: "Lessons applied", text: "Feedback changes how we work for the next project.", icon: Lightbulb },
      { title: "Long relationships", text: "Many clients come back for new projects and new goals.", icon: Heart },
    ],
  },
  {
    label: "Recent Work / Case Studies",
    tagline: "Projects that show how we plan, build and measure.",
    intro:
      "Our case studies cover websites, stores, local SEO and campaigns. Each one explains the goal, the approach and the measurable result, so you can judge whether our work fits your needs.",
    icon: FolderGit2,
    stats: [
      { end: 17, suffix: "", label: "Portfolio projects" },
      { end: 3, suffix: "x", label: "Results focus across projects" },
      { end: 100, suffix: "%", label: "Measured outcomes" },
    ],
    story: [
      "A good case study begins with the business problem: a site that did not convert, a store with poor checkout, or a local business invisible on maps. We describe that starting point honestly before showing what we changed.",
      "Next comes the approach. We explain the decisions behind the work, such as the page structure, the search strategy, the messages used in ads or the automation that removed a bottleneck. These details help you understand how we think.",
      "Finally we share the results we measured, including traffic, enquiries, bookings or sales. Where results take time to build, we say so, because lasting growth is usually the honest answer.",
    ],
    highlightTitle: "What every case study covers",
    highlights: [
      "The starting problem and the goal",
      "The approach and key decisions",
      "The tools and channels used",
      "The measured result and what came next",
    ],
    boxes: [
      { title: "Websites", text: "Custom sites, landing pages and redesigns built for conversions.", icon: Globe },
      { title: "Local search", text: "Google Business Profile and local SEO work that brings nearby customers.", icon: Compass },
      { title: "Ecommerce", text: "Stores with clearer product pages, smoother checkout and recovery flows.", icon: Briefcase },
      { title: "Campaigns", text: "Search and social campaigns tied to measured enquiries and sales.", icon: Zap },
    ],
  },
  {
    label: "Blog & Insights",
    tagline: "Practical guides on AI search, websites, automation and technology.",
    intro:
      "Our blog shares what we learn from real projects. The articles are written to be useful even if you never hire us, with clear steps you can apply to your own business this month.",
    icon: Newspaper,
    stats: [
      { end: 4, suffix: "", label: "Featured articles" },
      { end: 6, suffix: "", label: "Topic areas covered" },
      { end: 1, suffix: "", label: "New guides each month" },
    ],
    story: [
      "We write about the questions clients ask most often: how AI assistants are changing search, how to choose a website platform, where to start with automation and how to build a technology stack that will last.",
      "Each article includes practical sections, key takeaways and common questions. We keep the language plain, avoid jargon where possible and explain terms the first time they appear.",
      "If you have a topic you would like us to cover, tell us during your consultation. Our best articles often come from real questions that clients brought to us.",
    ],
    highlightTitle: "Topics you can explore",
    highlights: [
      "AI search and how to appear in AI answers",
      "Choosing the right website platform",
      "Starting with AI automation for small teams",
      "Building a technology stack that grows",
    ],
    boxes: [
      { title: "Practical guides", text: "Step-by-step articles you can act on the same week.", icon: BookOpen },
      { title: "Plain language", text: "Clear explanations, with technical terms defined simply.", icon: Lightbulb },
      { title: "Takeaways", text: "Every article ends with a short list of what to remember.", icon: CheckCircle2 },
      { title: "Your questions", text: "Topics often come from real client conversations.", icon: MessageSquare },
    ],
  },
  {
    label: "Privacy Policy",
    tagline: "How we collect, use and protect the information you share with us.",
    intro:
      "We respect your privacy. This page explains in plain language what information we collect through our website and enquiries, why we need it and how we keep it secure. Please have this reviewed by a legal adviser before publishing.",
    icon: Shield,
    stats: [
      { end: 100, suffix: "%", label: "Enquiries handled securely" },
      { end: 3, suffix: "", label: "Core principles" },
      { end: 48, suffix: "h", label: "Privacy request response target" },
    ],
    story: [
      "When you contact us, we collect the details you give us, such as your name, email, phone number and business information. We use these details to respond to your enquiry, prepare a proposal and manage the project if you become a client.",
      "We do not sell personal information. We share it only with service providers who help us run the business, such as hosting, email and analytics tools, and only to the extent needed for them to do their job.",
      "You can ask us to see, correct or delete the personal information we hold about you. Contact us using the details on this website and we will respond within the timeframe stated above.",
    ],
    highlightTitle: "Our privacy principles",
    highlights: [
      "Collect only what we need to help you",
      "Never sell personal information",
      "Keep data secure with access controls",
      "Respect your choice to see, change or delete it",
    ],
    boxes: [
      { title: "What we collect", text: "Enquiry details you choose to share, plus basic website analytics.", icon: FileText },
      { title: "How we use it", text: "To respond to you, deliver services and improve our website.", icon: Target },
      { title: "How we protect it", text: "Secure hosting, limited access and careful handling of data.", icon: Lock },
      { title: "Your rights", text: "Request access, correction or deletion by contacting us.", icon: Shield },
    ],
  },
  {
    label: "Terms & Conditions",
    tagline: "The terms that apply when you use our website and work with us.",
    intro:
      "These terms set out how our website may be used and how our services are agreed, delivered and paid for. They should be reviewed by a legal adviser before publishing, and adapted to your final business arrangements.",
    icon: Scale,
    stats: [
      { end: 100, suffix: "%", label: "Written scope before work" },
      { end: 2, suffix: "", label: "Parties in each agreement" },
      { end: 1, suffix: "", label: "Written agreement per project" },
    ],
    story: [
      "Our services are agreed in writing. The proposal describes the scope, deliverables, timeline, fees and payment schedule. Work begins once the proposal is accepted and the first payment, where agreed, is received.",
      "Changes to scope are handled through a written change request, which explains the impact on time and cost. Clients approve changes before they are carried out, so both sides know what is being delivered.",
      "Content and materials supplied by the client remain the client's responsibility, including accuracy and rights to use them. Website use is subject to the policies published on this site, and we aim to keep our website available, though we cannot guarantee uninterrupted access.",
    ],
    highlightTitle: "Key points to note",
    highlights: [
      "Scope, fees and timeline agreed in writing",
      "Changes handled through written change requests",
      "Client supplies accurate content and permissions",
      "Website use follows the policies published here",
    ],
    boxes: [
      { title: "Agreement", text: "A written proposal forms the basis of every project.", icon: FileText },
      { title: "Payments", text: "Payment schedules are set out in advance in the proposal.", icon: Briefcase },
      { title: "Changes", text: "Scope changes are approved in writing before work begins.", icon: Clock },
      { title: "Responsibilities", text: "Each party's responsibilities are listed so expectations are clear.", icon: Handshake },
    ],
  },
];

export const slugOf = (p: CompanyPageData) => slugify(p.label);

export function findCompany(slug: string) {
  return companyPages.find((p) => slugOf(p) === slug);
}