import { MessageSquare, Plug, Sparkles, Cpu } from "lucide-react";
import type { ServiceDetailData } from "@/data/aiSearchSeo";

export const aiDevelopmentServices: ServiceDetailData[] = [
  {
    slug: "custom-ai-development",
    title: "Custom AI Development",
    tagline: "AI software built around your business, data and workflows.",
    intro:
      "Off-the-shelf AI rarely fits how your business really works. Custom AI Development designs and builds models, automations and intelligent tools around your own data, so your team gets answers and actions that generic software cannot provide.",
    icon: Cpu,
    stats: [
      { end: 60, suffix: "%", label: "Less manual data work" },
      { end: 3, suffix: "x", label: "Faster decision making" },
      { end: 8, suffix: "", label: "Weeks to a working prototype" },
    ],
    highlights: [
      { title: "Tailored models", text: "We build AI around your own data, rules and terminology, not a generic template." },
      { title: "Secure data handling", text: "Your information stays protected, with access control and clear data ownership." },
      { title: "Smart automation", text: "Repetitive tasks such as sorting, checking and reporting run automatically." },
      { title: "Prediction and insight", text: "Forecasts and alerts help you act before problems or opportunities pass you by." },
      { title: "Easy integration", text: "The AI connects to the tools you already use, such as CRM, ERP and spreadsheets." },
      { title: "Continuous improvement", text: "We monitor accuracy and retrain the system as your business and data change." },
    ],
    useCases: [
      { title: "Operations teams", text: "Automate document processing, approvals and routine checks." },
      { title: "Sales and marketing", text: "Score leads and personalise outreach using your customer history." },
      { title: "Finance", text: "Detect unusual transactions and forecast cash flow more accurately." },
      { title: "Customer support", text: "Route and summarise tickets so your team answers faster." },
    ],
    process: [
      { title: "Discovery", text: "We map the problem, the data you have and the result you want." },
      { title: "Prototype", text: "We build a working version on a small, real slice of your data." },
      { title: "Build", text: "We develop, test and integrate the solution into your systems." },
      { title: "Launch and tune", text: "We deploy, measure accuracy and improve the system over time." },
    ],
    deliverables: [
      "AI opportunity assessment",
      "Working prototype",
      "Production-ready AI system",
      "System integration with your tools",
      "Accuracy and performance dashboard",
      "Training for your team",
    ],
    faqs: [
      { q: "Do I need my own data to start?", a: "Not always. We can start with the data you have and plan how to collect better data over time." },
      { q: "Is my business data safe?", a: "Yes. We limit access, use secure infrastructure and never use your data to train public models without permission." },
      { q: "How much does custom AI cost?", a: "It depends on scope. A free consultation gives you a clear, fixed quote after the discovery stage." },
      { q: "Will my team need technical skills?", a: "No. We design simple interfaces and train your team to use the system confidently." },
    ],
  },
  {
    slug: "ai-chatbot-development",
    title: "AI Chatbot Development",
    tagline: "Chatbots that answer customers instantly, around the clock.",
    intro:
      "Customers expect fast answers at any hour. AI Chatbot Development builds assistants for your website, WhatsApp and apps that answer questions, take bookings and hand over to your team when a human is needed.",
    icon: MessageSquare,
    stats: [
      { end: 24, suffix: "/7", label: "Always-on availability" },
      { end: 70, suffix: "%", label: "Common questions answered" },
      { end: 2, suffix: "x", label: "Faster response times" },
    ],
    highlights: [
      { title: "Website chat", text: "A friendly assistant on your site that answers questions and captures enquiries." },
      { title: "WhatsApp automation", text: "Customers get replies, bookings and reminders on the app they already use." },
      { title: "Knowledge-based answers", text: "The bot answers from your own services, prices and FAQs, not guesses." },
      { title: "Lead capture", text: "Visitor details are collected and sent straight to your team." },
      { title: "Smooth human handover", text: "Complex questions pass to a real person with the full conversation attached." },
      { title: "Multilingual support", text: "Replies in English, Hindi and Odia, based on how the customer writes." },
    ],
    useCases: [
      { title: "Clinics and hospitals", text: "Appointment booking, timings and pre-visit questions handled automatically." },
      { title: "E-commerce stores", text: "Product questions, order status and returns answered instantly." },
      { title: "Real estate", text: "Property enquiries qualified and scheduled for site visits." },
      { title: "Education", text: "Course details, admissions and fee questions answered at any hour." },
    ],
    process: [
      { title: "Conversation design", text: "We map the questions customers ask and the answers they need." },
      { title: "Build", text: "We create the assistant and connect it to your knowledge and tools." },
      { title: "Test", text: "We test real conversations and fix gaps before going live." },
      { title: "Improve", text: "We review chat logs each month and expand what the bot can handle." },
    ],
    deliverables: [
      "Conversation flow design",
      "Chatbot for website and WhatsApp",
      "Lead capture and CRM connection",
      "Human handover setup",
      "Monthly chat performance report",
      "Staff training",
    ],
    faqs: [
      { q: "Will the chatbot sound robotic?", a: "No. We write the tone to match your brand and keep replies short and natural." },
      { q: "Can it handle questions it does not know?", a: "Yes. It says so honestly and passes the conversation to your team." },
      { q: "Does it work on WhatsApp?", a: "Yes. We build WhatsApp assistants alongside the website version." },
      { q: "How long does it take to launch?", a: "A focused chatbot can usually launch within a few weeks of agreeing the content." },
    ],
  },
  {
    slug: "generative-ai-solutions",
    title: "Generative AI Solutions",
    tagline: "Create content, summaries and drafts with AI that your team can trust.",
    intro:
      "Generative AI can write, summarise and design at high speed. We build generative solutions that draw on your own information, follow your brand rules and keep a human in control of what goes out.",
    icon: Sparkles,
    stats: [
      { end: 5, suffix: "x", label: "Faster first drafts" },
      { end: 40, suffix: "%", label: "Time saved on reports" },
      { end: 100, suffix: "%", label: "Human review before publishing" },
    ],
    highlights: [
      { title: "Content generation", text: "Product descriptions, emails and social posts drafted in your brand voice." },
      { title: "Document summaries", text: "Long reports, contracts and meeting notes condensed into clear key points." },
      { title: "Grounded answers", text: "Responses are based on your own documents, reducing made-up information." },
      { title: "Brand guardrails", text: "Tone, banned claims and approved facts are built into every output." },
      { title: "Internal assistants", text: "Staff can search and ask questions across company knowledge safely." },
      { title: "Quality checks", text: "Outputs are scored and flagged for review before anything is published." },
    ],
    useCases: [
      { title: "Marketing teams", text: "Produce more campaign variations in less time, all checked for brand fit." },
      { title: "Support teams", text: "Draft accurate replies that agents review and send." },
      { title: "Legal and admin", text: "Summarise long documents and flag key clauses for review." },
      { title: "E-commerce", text: "Generate consistent product copy across hundreds of listings." },
    ],
    process: [
      { title: "Use-case selection", text: "We pick the tasks where generative AI saves the most time safely." },
      { title: "Knowledge setup", text: "We connect your documents and define the rules for accuracy." },
      { title: "Build and review", text: "We create the workflow with human approval built in." },
      { title: "Measure", text: "We track time saved, quality scores and user feedback." },
    ],
    deliverables: [
      "Use-case priority plan",
      "Generative AI workflow",
      "Brand voice and guardrail rules",
      "Internal knowledge assistant",
      "Quality review process",
      "Usage and time-saved report",
    ],
    faqs: [
      { q: "Is AI-generated content safe to publish?", a: "Only after review. We keep a human approval step so nothing goes live unchecked." },
      { q: "Will it use my confidential documents?", a: "Your documents are used only for your own assistant, with access control and secure hosting." },
      { q: "Can it match our brand voice?", a: "Yes. We build a voice guide and test outputs against it before rollout." },
      { q: "Which tools do you use?", a: "We choose the model that fits your accuracy, cost and privacy needs for each use case." },
    ],
  },
  {
    slug: "ai-integration",
    title: "AI Integration",
    tagline: "Add AI to the software and tools your business already uses.",
    intro:
      "You do not need to replace your systems to benefit from AI. AI Integration connects intelligent features to your existing website, CRM, ERP and apps, so the tools you trust become smarter.",
    icon: Plug,
    stats: [
      { end: 15, suffix: "+", label: "Tools we connect" },
      { end: 50, suffix: "%", label: "Fewer manual handoffs" },
      { end: 4, suffix: "", label: "Weeks for a typical integration" },
    ],
    highlights: [
      { title: "Existing system upgrades", text: "AI features are added to what you already run, without a full rebuild." },
      { title: "API connections", text: "Secure links between your AI services and your business software." },
      { title: "Workflow automation", text: "Data moves between tools automatically, with AI handling the decisions." },
      { title: "Data syncing", text: "Records stay consistent across your website, CRM and reporting tools." },
      { title: "Security first", text: "Permissions, encryption and audit logs protect every connection." },
      { title: "Scalable setup", text: "The integration grows as your volume and team grow." },
    ],
    useCases: [
      { title: "CRM teams", text: "Lead scoring and follow-up suggestions inside the CRM you already use." },
      { title: "Finance and ERP", text: "Invoice reading, data entry and reconciliation handled with AI." },
      { title: "Websites", text: "Search, recommendations and smart forms added to your current site." },
      { title: "Mobile apps", text: "Personalised features added to an app without rewriting it." },
    ],
    process: [
      { title: "Systems audit", text: "We review your current tools, data flows and integration points." },
      { title: "Design", text: "We plan which AI features go where, and how data is protected." },
      { title: "Integrate", text: "We build and test the connections in a safe staging environment." },
      { title: "Launch and support", text: "We go live, monitor performance and support your team." },
    ],
    deliverables: [
      "Systems and data flow audit",
      "Integration architecture plan",
      "Working AI connections",
      "Security and access setup",
      "Monitoring dashboard",
      "Documentation and training",
    ],
    faqs: [
      { q: "Do I need to replace my current software?", a: "Usually not. We extend the tools you already use." },
      { q: "Is my data secure during integration?", a: "Yes. Connections use encryption, permissions and audit logs." },
      { q: "What if one of my tools has no API?", a: "We look at alternatives, such as secure file exchange or a connector, and advise you honestly." },
      { q: "Who maintains the integration?", a: "We can maintain it under a support plan, or hand over full documentation to your team." },
    ],
  },
];

export function getAiDevService(slug: string) {
  return aiDevelopmentServices.find((s) => s.slug === slug);
}