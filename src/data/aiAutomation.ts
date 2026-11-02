import { Database, Gauge, Mail, Send, type LucideIcon } from "lucide-react";
import type { ServiceDetailData } from "@/data/aiSearchSeo";

export const aiAutomationServices: ServiceDetailData[] = [
  {
    slug: "ai-whatsapp-automation",
    title: "AI WhatsApp Automation",
    tagline: "Reply, book and follow up with customers on WhatsApp, automatically.",
    intro:
      "Most of your customers already live on WhatsApp. AI WhatsApp Automation answers common questions, takes bookings, sends reminders and hands over to your team when a real conversation is needed.",
    icon: Send as LucideIcon,
    stats: [
      { end: 24, suffix: "/7", label: "Instant replies" },
      { end: 60, suffix: "%", label: "Fewer repeat questions" },
      { end: 3, suffix: "x", label: "Faster lead follow-up" },
    ],
    highlights: [
      { title: "Instant replies", text: "Customers get an answer within seconds, at any hour of the day." },
      { title: "Booking and reminders", text: "Appointments are booked and confirmed with automatic reminders." },
      { title: "Broadcast offers", text: "Send updates and offers to opted-in customers in a single campaign." },
      { title: "Human handover", text: "Complex chats move to a real agent with the full history attached." },
      { title: "CRM sync", text: "Every conversation and lead is saved to your customer records." },
      { title: "Compliance ready", text: "Opt-in, opt-out and message templates follow WhatsApp Business rules." },
    ],
    useCases: [
      { title: "Clinics", text: "Appointment booking and reminders without phone queues." },
      { title: "Retail", text: "Order status, returns and product questions answered in chat." },
      { title: "Services", text: "Quotes, enquiries and follow-ups handled automatically." },
      { title: "Education", text: "Admissions questions and fee reminders sent on schedule." },
    ],
    process: [
      { title: "Flow design", text: "We map the conversations your customers have most often." },
      { title: "Build", text: "We connect the WhatsApp Business account to your tools and content." },
      { title: "Test", text: "We run real test chats and fix any gaps before launch." },
      { title: "Improve", text: "We review chats monthly and expand what the assistant handles." },
    ],
    deliverables: [
      "WhatsApp conversation flows",
      "Booking and reminder setup",
      "CRM and lead sync",
      "Human handover rules",
      "Monthly message performance report",
      "Staff training",
    ],
    faqs: [
      { q: "Do I need a WhatsApp Business account?", a: "Yes. We help you set it up or connect your existing account." },
      { q: "Will customers know it is automated?", a: "Yes, and we keep the tone friendly and honest. Customers can always reach a person." },
    ],
  },
  {
    slug: "ai-email-automation",
    title: "AI Email Automation",
    tagline: "Personalised email sequences that write, send and follow up for you.",
    intro:
      "Email still returns strong results when it is timely and relevant. AI Email Automation builds sequences that greet new leads, nurture interest and re-engage customers, with each message tailored to what they actually did.",
    icon: Mail,
    stats: [
      { end: 35, suffix: "%", label: "More opened emails" },
      { end: 5, suffix: "x", label: "Faster campaign setup" },
      { end: 100, suffix: "%", label: "Human-approved templates" },
    ],
    highlights: [
      { title: "Personalised sequences", text: "Each email reflects the customer's stage, interests and history." },
      { title: "Smart timing", text: "Messages are sent when recipients are most likely to read them." },
      { title: "Segmentation", text: "Audiences are grouped automatically by behaviour and value." },
      { title: "Performance tracking", text: "Opens, clicks and replies are reported in plain language." },
      { title: "Brand voice", text: "Every draft follows your style guide before it goes out." },
      { title: "Compliance", text: "Unsubscribe handling and consent records are built in." },
    ],
    useCases: [
      { title: "Lead nurturing", text: "New enquiries receive a helpful series until they are ready to talk." },
      { title: "Re-engagement", text: "Quiet customers are invited back with relevant offers." },
      { title: "Onboarding", text: "New clients get guided emails that show them how to get value fast." },
      { title: "Events and launches", text: "Announcements are sent to the right audience at the right time." },
    ],
    process: [
      { title: "Audience map", text: "We define segments and the goal of each sequence." },
      { title: "Write", text: "We draft emails in your brand voice and check them with you." },
      { title: "Automate", text: "We set triggers, timing and exit rules." },
      { title: "Refine", text: "We test subject lines and improve results every month." },
    ],
    deliverables: [
      "Audience segmentation plan",
      "Email sequence copy",
      "Automation triggers and timing",
      "CRM connection",
      "Monthly performance report",
      "Compliance and unsubscribe setup",
    ],
    faqs: [
      { q: "Will the emails sound generic?", a: "No. We personalise using real customer data and approve every template with you." },
      { q: "Which email tool do you support?", a: "We work with the common email platforms and CRMs, and recommend one that fits your volume." },
    ],
  },
  {
    slug: "ai-crm-automation",
    title: "AI CRM Automation",
    tagline: "Keep your customer records clean, scored and always up to date.",
    intro:
      "A CRM is only useful when the data in it is accurate and acted on. AI CRM Automation logs activity, scores leads, updates records and reminds your team about the follow-ups that matter most.",
    icon: Database,
    stats: [
      { end: 70, suffix: "%", label: "Less manual data entry" },
      { end: 40, suffix: "%", label: "Faster lead response" },
      { end: 2, suffix: "x", label: "Cleaner customer records" },
    ],
    highlights: [
      { title: "Automatic logging", text: "Calls, emails and chats are recorded against the right contact." },
      { title: "Lead scoring", text: "Leads are ranked so your team calls the most promising first." },
      { title: "Follow-up reminders", text: "Tasks are created and assigned when a deal needs attention." },
      { title: "Data cleaning", text: "Duplicates and missing fields are found and corrected." },
      { title: "Pipeline insight", text: "Simple dashboards show where deals slow down." },
      { title: "Secure access", text: "Permissions keep each team member to their own data." },
    ],
    useCases: [
      { title: "Sales teams", text: "Focus on the best leads with automatic scoring and reminders." },
      { title: "Account managers", text: "Never miss a renewal or check-in again." },
      { title: "Marketing", text: "Track which campaigns create real customers, not just clicks." },
      { title: "Support", text: "Link tickets to customer history for faster answers." },
    ],
    process: [
      { title: "Data audit", text: "We review how your CRM is used and where data goes missing." },
      { title: "Rules design", text: "We define scoring, tasks and automation rules together." },
      { title: "Build", text: "We set up the automations and connect your other tools." },
      { title: "Train and measure", text: "We train your team and track time saved and conversions." },
    ],
    deliverables: [
      "CRM data audit",
      "Lead scoring model",
      "Automated task and reminder rules",
      "Data cleaning report",
      "Pipeline dashboard",
      "Team training",
    ],
    faqs: [
      { q: "Which CRM do you work with?", a: "Common CRMs including HubSpot, Zoho and Salesforce. We advise on the best fit for you." },
      { q: "Will my team need to change how they work?", a: "Very little. The automation handles the repetitive parts and your team focuses on selling." },
    ],
  },
  {
    slug: "ai-reporting-dashboards",
    title: "AI Reporting Dashboards",
    tagline: "Clear, live dashboards with AI insights that tell you what to do next.",
    intro:
      "Reports often arrive too late to act on. AI Reporting Dashboards pull your key numbers into one live view, highlight unusual changes and explain in plain language what is driving them.",
    icon: Gauge,
    stats: [
      { end: 90, suffix: "%", label: "Less time building reports" },
      { end: 1, suffix: "", label: "Live view of your key numbers" },
      { end: 5, suffix: "x", label: "Faster decisions" },
    ],
    highlights: [
      { title: "Live dashboards", text: "Sales, traffic and operations numbers update automatically." },
      { title: "Anomaly alerts", text: "Unusual drops or spikes are flagged before they become problems." },
      { title: "Plain-language insights", text: "AI explains what changed and why, in simple sentences." },
      { title: "Multi-source data", text: "Combine your website, CRM, ads and accounting in one view." },
      { title: "Scheduled reports", text: "Summaries are sent to your inbox or WhatsApp each week." },
      { title: "Role-based views", text: "Each team member sees only the numbers that matter to them." },
    ],
    useCases: [
      { title: "Owners and managers", text: "A single view of the business, updated every morning." },
      { title: "Sales leaders", text: "Pipeline health and forecast in one place." },
      { title: "Marketing teams", text: "Campaign returns compared clearly across channels." },
      { title: "Finance", text: "Cash flow and spend tracked without manual spreadsheets." },
    ],
    process: [
      { title: "KPI workshop", text: "We agree which numbers matter most and why." },
      { title: "Connect", text: "We link your data sources securely." },
      { title: "Design", text: "We build clear dashboards and alert rules." },
      { title: "Review", text: "We refine the views with your team every month." },
    ],
    deliverables: [
      "KPI definition document",
      "Live dashboards",
      "Alert rules",
      "Scheduled summary reports",
      "Data source connections",
      "User training",
    ],
    faqs: [
      { q: "Can it connect to my existing tools?", a: "Yes. We connect common website, ads, CRM and accounting tools." },
      { q: "Is my financial data safe?", a: "Yes. Access is restricted and connections are encrypted." },
    ],
  },
];

export function getAiAutomationService(slug: string) {
  return aiAutomationServices.find((s) => s.slug === slug);
}