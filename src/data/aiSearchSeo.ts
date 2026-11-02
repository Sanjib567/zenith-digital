import { Bot, FileText, Search, Sparkles, Target, type LucideIcon } from "lucide-react";

export type ServiceDetailData = {
  slug: string;
  title: string;
  tagline: string;
  intro: string;
  icon: LucideIcon;
  stats: { end: number; suffix: string; label: string }[];
  highlights: { title: string; text: string }[];
  useCases: { title: string; text: string }[];
  process: { title: string; text: string }[];
  deliverables: string[];
  faqs: { q: string; a: string }[];
};

export const aiSearchSeoServices: ServiceDetailData[] = [
  {
    slug: "ai-search-optimization",
    title: "AI Search Optimization",
    tagline: "Get your business recommended inside AI-powered search answers.",
    intro:
      "Customers now ask ChatGPT, Gemini, Perplexity and Google AI Overviews for recommendations before they click a single link. AI Search Optimization makes your website clear, trustworthy and easy for these systems to understand, quote and recommend.",
    icon: Search,
    stats: [
      { end: 3, suffix: "x", label: "More AI answer mentions" },
      { end: 40, suffix: "%", label: "Faster brand recognition" },
      { end: 6, suffix: "", label: "Weeks to first results" },
    ],
    highlights: [
      { title: "Citable content", text: "Pages are structured with direct answers, definitions and facts that AI systems can quote with confidence." },
      { title: "Entity and brand signals", text: "We strengthen how search engines and AI models recognise your business, services, team and location." },
      { title: "Structured data", text: "Schema markup tells machines exactly what your pages offer, including services, reviews, FAQs and products." },
      { title: "Answer-first layouts", text: "Key questions are answered in the first lines of each section, so both people and machines get the point fast." },
      { title: "Trust and authority", text: "Case studies, expert bios and consistent business details signal credibility to every system that reads your site." },
      { title: "Ongoing monitoring", text: "We test how your brand appears in AI answers each month and adjust content based on what we find." },
    ],
    useCases: [
      { title: "Service businesses", text: "Clinics, consultants and agencies get recommended when customers ask AI for a provider nearby." },
      { title: "E-commerce stores", text: "Product pages are structured so AI shopping answers can describe features, prices and availability." },
      { title: "Local businesses", text: "Your city, service area and opening details are presented clearly for location-based AI questions." },
      { title: "B2B companies", text: "Thought leadership and comparison pages help AI tools recommend your solution to buyers." },
    ],
    process: [
      { title: "Audit", text: "We review how your site and brand appear in traditional and AI-powered search today." },
      { title: "Strategy", text: "We pick the questions your customers ask and plan the content and signals needed to answer them." },
      { title: "Build", text: "We update pages, add structured data and write clear, helpful answer content." },
      { title: "Measure", text: "We track visibility across AI tools and refine the approach every month." },
    ],
    deliverables: [
      "AI search visibility audit",
      "Question and answer content map",
      "Schema markup for key pages",
      "Improved entity and brand signals",
      "Answer-ready content blocks",
      "Monthly AI visibility report",
    ],
    faqs: [
      { q: "How is this different from normal SEO?", a: "Normal SEO focuses on ranking in the list of links. AI Search Optimization also focuses on being understood and quoted inside AI-generated answers." },
      { q: "Can you guarantee I will appear in ChatGPT or Gemini?", a: "No honest agency can guarantee that. We improve the signals that make your business more likely to be found and recommended, and we show you the results." },
      { q: "How soon will I see changes?", a: "Technical and content changes go live quickly. Measurable movement in AI answers usually appears within two to three months." },
      { q: "Do I need to change my whole website?", a: "Usually not. Most improvements are made to key pages, structure and data, so you keep the design you already have." },
    ],
  },
  {
    slug: "ai-seo-services",
    title: "AI SEO Services",
    tagline: "Search engine optimisation powered by AI research and modern content.",
    intro:
      "AI SEO Services combine proven technical and on-page SEO with AI-assisted keyword research and content planning. The result is faster research, sharper targeting and pages that rank for the searches that bring real customers.",
    icon: Bot,
    stats: [
      { end: 2, suffix: "x", label: "Faster keyword research" },
      { end: 90, suffix: "+", label: "Technical checks per audit" },
      { end: 12, suffix: "", label: "Months of growth tracking" },
    ],
    highlights: [
      { title: "AI-assisted keyword research", text: "We find high-intent search terms across your services, locations and competitors in a fraction of the usual time." },
      { title: "Technical SEO", text: "Speed, crawlability, mobile layout and indexing are fixed so search engines can read your site fully." },
      { title: "On-page optimisation", text: "Titles, headings, internal links and copy are aligned with what searchers actually want." },
      { title: "Local and regional reach", text: "We target the cities and countries where your customers search, including Odisha and India." },
      { title: "Content gap analysis", text: "We find the topics your competitors rank for that you are missing, and plan pages to win them." },
      { title: "Clear reporting", text: "Rankings, traffic and enquiries are reported in plain language every month, with next steps." },
    ],
    useCases: [
      { title: "New websites", text: "Build the site with SEO structure from day one, so it ranks faster after launch." },
      { title: "Existing websites", text: "Recover lost rankings and fix the issues quietly holding back a site that already has traffic." },
      { title: "Multi-location brands", text: "Local pages for each city or branch, each targeting its own search demand." },
      { title: "Competitive markets", text: "Win searches where bigger brands dominate, by focusing on specific, high-value queries." },
    ],
    process: [
      { title: "Discover", text: "We analyse your current rankings, competitors and technical health." },
      { title: "Plan", text: "We map keywords to pages and set realistic priorities for the next quarter." },
      { title: "Optimise", text: "We fix technical issues and improve content, titles and internal links." },
      { title: "Grow", text: "We publish, measure and expand into new search opportunities." },
    ],
    deliverables: [
      "Full technical SEO audit",
      "Keyword map for every key page",
      "Optimised titles, meta descriptions and headings",
      "Internal linking plan",
      "Local SEO setup for your area",
      "Monthly ranking and traffic report",
    ],
    faqs: [
      { q: "How long does SEO take to show results?", a: "Most sites see meaningful movement within three to six months, depending on competition and the starting point of the website." },
      { q: "Do you work with existing websites?", a: "Yes. We can optimise an existing site or plan a rebuild if the current structure holds it back." },
      { q: "Will you show me the keywords you target?", a: "Yes. You receive the full keyword map and can see exactly which pages target which searches." },
      { q: "Is local SEO included?", a: "Yes, where it fits your business. We set up local signals and location pages for the areas you serve." },
    ],
  },
  {
        slug: "aeo-and-geo-optimization",
    title: "AEO & GEO Optimization",
    tagline: "Answer Engine and Generative Engine Optimisation for the next era of search.",
    intro:
      "Answer Engine Optimisation (AEO) prepares your content to be the direct answer in search results. Generative Engine Optimisation (GEO) makes your brand a trusted source inside generative AI responses. We handle both together, so you are found in both places.",
    icon: Target,
    stats: [
      { end: 5, suffix: "x", label: "More answer-box opportunities" },
      { end: 150, suffix: "+", label: "Questions mapped per project" },
      { end: 4, suffix: "", label: "Platforms tracked each month" },
    ],
    highlights: [
      { title: "Direct answer formatting", text: "We write concise, accurate answers at the top of key sections so engines can lift them cleanly." },
      { title: "Authority and trust", text: "We build proof through case studies, expert content and consistent business information." },
      { title: "Question-led content", text: "Pages are built around the exact questions your customers type or speak aloud." },
      { title: "Cross-platform presence", text: "We keep your business details consistent across directories, listings and profiles." },
      { title: "FAQ and how-to structure", text: "Common questions and step-by-step guides are formatted so they can be read and reused by answer engines." },
      { title: "Quarterly review", text: "We check where your answers appear and improve the weakest ones every quarter." },
    ],
    useCases: [
      { title: "Healthcare and clinics", text: "Patients ask symptoms, costs and procedures. Clear answers bring them to your practice." },
      { title: "Education and training", text: "Course questions are answered directly, so prospective students find you first." },
      { title: "Professional services", text: "Legal, financial and consulting firms earn trust by answering questions precisely." },
      { title: "Local services", text: "Plumbers, salons and repair shops appear for ''near me'' and ''how much'' questions." },
    ],
    process: [
      { title: "Question research", text: "We collect the real questions people ask about your services." },
      { title: "Answer design", text: "We craft short answers, supporting detail and clear structure for each question." },
      { title: "Trust building", text: "We add proof, expert signals and consistent brand information." },
      { title: "Review", text: "We check where your answers appear and improve the weakest ones." },
    ],
    deliverables: [
      "Question research report",
      "Answer-ready content for priority pages",
      "FAQ and how-to structure",
      "Business information consistency check",
      "Authority and proof content plan",
      "Quarterly AEO and GEO review",
    ],
    faqs: [
      { q: "What is the difference between AEO and GEO?", a: "AEO targets direct answer features in search. GEO targets how generative AI systems describe and recommend your brand. Both depend on clear, trustworthy content." },
      { q: "Will this replace my current SEO?", a: "No. AEO and GEO build on good SEO. We treat them as an extension of your search strategy." },
      { q: "Which platforms do you track?", a: "We track traditional search results and major AI answer engines, and report which of your pages are being used." },
      { q: "How do you prove the results?", a: "We record a fixed set of questions every month and show how often your brand is mentioned, cited or recommended." },
    ],
  },
  {
    slug: "llm-seo",
    title: "LLM SEO",
    tagline: "Make large language models understand, trust and recommend your brand.",
    intro:
      "Large language models such as GPT, Gemini and Claude learn from the public web and answer questions from what they know. LLM SEO shapes your online footprint so these models describe your business accurately and recommend it when it is relevant.",
    icon: Sparkles,
    stats: [
      { end: 100, suffix: "%", label: "Accuracy focus on brand facts" },
      { end: 25, suffix: "+", label: "Authority sources targeted" },
      { end: 4, suffix: "", label: "Retests per year" },
    ],
    highlights: [
      { title: "Accurate brand description", text: "We make sure the web describes who you are and what you do in one clear, consistent way." },
      { title: "Authoritative sources", text: "We earn mentions and citations on credible sites, directories and industry publications." },
      { title: "Clean, factual content", text: "We remove vague claims and publish specific, verifiable information that models can rely on." },
      { title: "Entity consistency", text: "Your name, address, services and team are presented the same way across every platform." },
      { title: "Reputation signals", text: "Reviews and testimonials are organised and published so they add credible evidence about your work." },
      { title: "Retesting", text: "We ask the same questions to major AI tools over time and record every change." },
    ],
    useCases: [
      { title: "Brands with confusing names", text: "Make sure AI tools describe your business correctly and do not mix it up with others." },
      { title: "Growing companies", text: "Establish a clear public identity before competitors shape the narrative for you." },
      { title: "Regional businesses", text: "Be recognised as the trusted provider in your city or state when AI tools answer local questions." },
      { title: "Corrections", text: "Fix outdated or wrong information that AI tools repeat about your business." },
    ],
    process: [
      { title: "Brand check", text: "We test how major AI tools currently describe your business." },
      { title: "Source audit", text: "We identify the sites that shape those descriptions and where you are missing." },
      { title: "Authority building", text: "We create content and earn mentions on credible sources." },
      { title: "Retest", text: "We run the same checks again and track changes over time." },
    ],
    deliverables: [
      "AI brand description audit",
      "Source and mention opportunity list",
      "Corrected business information across listings",
      "Factual content for key pages",
      "Review and reputation plan",
      "Quarterly LLM visibility test",
    ],
    faqs: [
      { q: "Can I control what ChatGPT says about my business?", a: "Not directly. You can influence it by making accurate, consistent and authoritative information available on the web, which is what we do." },
      { q: "How do you measure LLM SEO?", a: "We test a set of relevant questions across AI tools over time and record how often and how accurately your brand appears." },
      { q: "How long before AI tools change their answers?", a: "It depends on how often those tools update their sources. Most businesses see clear shifts within several months." },
      { q: "Is this suitable for a small business?", a: "Yes. Small businesses often benefit most, because clear local information is easy for AI tools to pick up." },
    ],
  },
  {
    slug: "ai-content-strategy",
    title: "AI Content Strategy",
    tagline: "A content plan that uses AI for speed and people for quality.",
    intro:
      "We build a content strategy that answers what your customers need at every stage of their decision. AI helps us research and draft faster, while our editors make sure every piece is accurate, useful and on brand.",
    icon: FileText,
    stats: [
      { end: 3, suffix: "x", label: "Faster content production" },
      { end: 12, suffix: "", label: "Months of content planned" },
      { end: 100, suffix: "%", label: "Human-edited for accuracy" },
    ],
    highlights: [
      { title: "Audience-led planning", text: "Topics come from real customer questions, sales conversations and search data." },
      { title: "AI-assisted production", text: "Research and outlines are accelerated with AI, then checked and refined by people." },
      { title: "Quality and accuracy", text: "Every article is reviewed for facts, tone and usefulness before it goes live." },
      { title: "Performance tracking", text: "We measure which content brings visits, enquiries and rankings, and do more of it." },
      { title: "Brand voice", text: "A clear style guide keeps every article sounding like your business, whoever writes it." },
      { title: "Content refresh", text: "Older articles are updated regularly so they stay accurate and keep ranking." },
    ],
    useCases: [
      { title: "Blog and resource hubs", text: "Consistent articles that build topical authority and bring steady search traffic." },
      { title: "Product and service guides", text: "Clear explanations that help buyers choose and reduce support questions." },
      { title: "Email and social", text: "Content repurposed into newsletters and posts that keep your audience engaged." },
      { title: "AI search readiness", text: "Answer blocks written so both search engines and AI tools can use them." },
    ],
    process: [
      { title: "Research", text: "We study your audience, competitors and search demand." },
      { title: "Calendar", text: "We plan topics, formats and publishing schedule for the next quarter." },
      { title: "Create", text: "We produce and edit content using AI-assisted workflows." },
      { title: "Optimise", text: "We update top performers and expand the topics that convert." },
    ],
    deliverables: [
      "Content audit and gap analysis",
      "Quarterly content calendar",
      "Blog, guide and landing page content",
      "AI search ready answer blocks",
      "Brand voice style guide",
      "Monthly content performance report",
    ],
    faqs: [
      { q: "Is AI-written content good for SEO?", a: "Search engines reward helpful, accurate content regardless of how it is drafted. We use AI for speed and our editors ensure quality and originality." },
      { q: "How many articles will you publish?", a: "We agree on a volume that fits your goals and budget, usually a steady cadence each month." },
      { q: "Will the content sound like my business?", a: "Yes. We build a brand voice guide first and check every piece against it before publishing." },
      { q: "Who approves the content?", a: "You review the plan and any piece you want to see. Nothing goes live without your approval." },
    ],
  },
];

export function getService(slug: string) {
  return aiSearchSeoServices.find((s) => s.slug === slug);
}