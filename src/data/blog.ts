import { Brain, Globe, Search, Sparkles, type LucideIcon } from "lucide-react";

export type BlogSection = { heading: string; paragraphs: string[] };
export type BlogStat = { end: number; suffix: string; label: string };
export type BlogFaq = { q: string; a: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  icon: LucideIcon;
  iconName: string;
  tone: { from: string; to: string };
  image: string;
  quote: string;
  stats: BlogStat[];
  sections: BlogSection[];
  takeaways: string[];
  faqs: BlogFaq[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-ai-seo",
    title: "What is AI SEO, and why does it matter now?",
    excerpt:
      "Customers now ask AI assistants for recommendations before they search. Here is how to show up in those answers.",
    category: "AI Search",
    date: "2 Nov 2026",
    readTime: "5 min read",
    icon: Search,
    iconName: "search",
    tone: { from: "#2563eb", to: "#7c3aed" },
    image: "/images/blog/what-is-ai-seo.jpg",
    quote:
      "The businesses that win in AI answers are the ones that are easy to understand, easy to verify and easy to recommend.",
    stats: [
      { end: 3, suffix: "", label: "Places your business must be consistent" },
      { end: 2, suffix: "x", label: "Ways customers now search: classic and AI" },
      { end: 1, suffix: " goal", label: "Clear answer on every key page" },
    ],
    sections: [
      {
        heading: "Search is changing shape",
        paragraphs: [
          "AI assistants such as ChatGPT, Gemini and Perplexity increasingly answer questions directly, often without a click. A customer might ask for the best accountant in their city and receive a short list in seconds, with reasons attached.",
          "That means your business now competes in two places at once: the traditional results page and the answer an AI gives. Being clear, consistent and trustworthy matters in both, and the same work improves both.",
        ],
      },
      {
        heading: "What AI SEO actually involves",
        paragraphs: [
          "AI SEO combines strong traditional search work with clear answers to real customer questions, structured business information and consistent details across directories, reviews and your own website. There are no shortcuts, only good foundations applied carefully.",
          "The goal is simple: make your business easy to understand and easy to recommend, both for people and for the systems that summarise the web. When an AI reads your site, it should find a clear description of what you do, who you serve and how to contact you.",
        ],
      },
      {
        heading: "How to start this month",
        paragraphs: [
          "Begin with an honest audit. Search for your own services the way a customer would, in a chat assistant and in a normal search engine, and write down what appears, what is missing and what is wrong. This single exercise usually reveals the fastest wins.",
          "Next, update the pages that matter most: service pages, pricing or process pages and your contact details. Add short, direct answers to the questions customers really ask, and make sure your business profile matches your website word for word.",
        ],
      },
    ],
    takeaways: [
      "Answer real customer questions directly on your key pages.",
      "Keep business name, address and services identical everywhere online.",
      "Earn reviews and mentions from trusted local and industry sources.",
      "Audit how your brand appears in AI answers every quarter.",
    ],
    faqs: [
      {
        q: "Is AI SEO different from regular SEO?",
        a: "It builds on the same foundations. Regular SEO focuses on ranking pages in search results, while AI SEO also makes sure your business is clear enough to be summarised and recommended by AI assistants.",
      },
      {
        q: "How long does it take to see results?",
        a: "Clear corrections to listings and key pages can show within weeks. Stronger, lasting visibility usually builds over a few months as trust signals accumulate.",
      },
      {
        q: "Do I need a new website for AI SEO?",
        a: "Usually not. Most gains come from improving existing pages, fixing business information and adding clear answers. A rebuild is only needed when the current site is slow or cannot be updated.",
      },
    ],
  },
  {
    slug: "choosing-a-website-platform",
    title: "Choosing the right website platform for your business",
    excerpt:
      "Custom build, WordPress or Shopify: how to pick the option that fits your goals, budget and team.",
    category: "Web Development",
    date: "28 Oct 2026",
    readTime: "6 min read",
    icon: Globe,
    iconName: "globe",
    tone: { from: "#db2777", to: "#e11d48" },
    image: "/images/blog/choosing-a-website-platform.jpg",
    quote:
      "The best platform is the one your team can run confidently for the next three years, not the one with the longest feature list.",
    stats: [
      { end: 3, suffix: "", label: "Main routes: custom, WordPress, Shopify" },
      { end: 1, suffix: " team", label: "Owner for content and updates" },
      { end: 100, suffix: "%", label: "Goals written down before choosing" },
    ],
    sections: [
      {
        heading: "Start with what the site must do",
        paragraphs: [
          "The right platform depends on the job. A content-led business benefits from WordPress, a product store often suits Shopify, and a unique product experience may need a custom build with Next.js.",
          "Write down your main goals first: enquiries, sales, bookings or information. The platform should serve those goals, not the other way round. A site built around the wrong goal looks good and performs poorly.",
        ],
      },
      {
        heading: "Compare the three main routes",
        paragraphs: [
          "WordPress offers the widest choice of plugins and a familiar editor, which suits publishing and service businesses. Shopify handles hosting, checkout and security for you, which suits stores that want to sell quickly. A custom build with Next.js gives full control over speed, design and features, which suits businesses with unusual needs.",
          "Each route has a cost in time and money. WordPress needs regular updates and careful plugin choice. Shopify charges monthly and limits deep changes. Custom builds cost more at the start but can be the most efficient over many years when the product is complex.",
        ],
      },
      {
        heading: "Think about who will manage it",
        paragraphs: [
          "Consider who will update the site and how often. A platform your team can manage confidently usually delivers more value than a more powerful one nobody maintains. Test the editor with a real staff member before committing.",
          "Speed and security also matter. Good hosting, regular updates and backups protect your reputation and keep visitors from leaving slow pages. Ask any agency how they handle these things before you sign.",
        ],
      },
    ],
    takeaways: [
      "Match the platform to your goals, not to trends.",
      "Choose something your team can update without a developer.",
      "Compare total cost over three years, not just the launch price.",
      "Plan hosting, backups and updates from day one.",
    ],
    faqs: [
      {
        q: "Which platform is cheapest to start?",
        a: "WordPress with a custom theme is often the lowest starting cost for content websites. Shopify is quick to launch for stores, but monthly fees add up over time.",
      },
      {
        q: "Can I switch platforms later?",
        a: "Yes, but it takes planning. We move content, URLs and search settings carefully so rankings and enquiries are not lost.",
      },
      {
        q: "Will a custom website be too expensive?",
        a: "It depends on scope. Many businesses start with a focused custom site and add features later, which keeps the first investment manageable.",
      },
    ],
  },
  {
    slug: "ai-automation-for-small-business",
    title: "Where small businesses should start with AI automation",
    excerpt:
      "Start with the repetitive tasks that cost time every day: replies, follow-ups and reports.",
    category: "AI Automation",
    date: "20 Oct 2026",
    readTime: "4 min read",
    icon: Sparkles,
    iconName: "sparkles",
    tone: { from: "#16a34a", to: "#0891b2" },
    image: "/images/blog/ai-automation-for-small-business.jpg",
    quote:
      "Automation should give your people their time back, not replace the conversations that build trust with customers.",
    stats: [
      { end: 5, suffix: "", label: "Repeated tasks to list first" },
      { end: 1, suffix: " task", label: "Automate one thing at a time" },
      { end: 30, suffix: " days", label: "Good time to measure the result" },
    ],
    sections: [
      {
        heading: "Find the time you lose every week",
        paragraphs: [
          "Most small businesses lose hours each week to the same questions, reminders and reports. These tasks are repetitive, predictable and easy to automate, which makes them the best starting point.",
          "Ask your team to write down every task they repeat in a normal week, with a rough time for each. Patterns appear quickly, and the largest repeated tasks become your shortlist.",
        ],
      },
      {
        heading: "Pick the first task to automate",
        paragraphs: [
          "The best first automation is usually the one that saves the most time with the least risk. Common examples include answering the same enquiry questions, sending appointment reminders, following up with new leads and building a weekly summary report.",
          "Avoid starting with anything that affects money or legal commitments. Choose a low-risk task, set a clear success measure such as hours saved or response time, and agree who checks the output.",
        ],
      },
      {
        heading: "Automate, then hand over to people",
        paragraphs: [
          "Automate the routine step, then send complex cases to a person with the full conversation attached. Customers get fast replies, and your team focuses on the work that needs judgement and empathy.",
          "Measure the time saved after a month. When the first automation works, expand to the next task on the list. Growth should come from proven results, not from adding many tools at once.",
        ],
      },
    ],
    takeaways: [
      "Automate the most repeated task first.",
      "Always keep a clear handover to a real person.",
      "Set a measure of success before you start.",
      "Expand only after the first automation proves its value.",
    ],
    faqs: [
      {
        q: "Do I need technical skills to start?",
        a: "Not for the first step. Many tools are set up through guided workflows, and we can build and hand over the initial automation for you.",
      },
      {
        q: "Will customers know they are talking to a bot?",
        a: "We keep replies honest and friendly. Customers can always reach a person, and sensitive questions are passed to your team.",
      },
      {
        q: "How much does a first automation cost?",
        a: "A focused first project is usually modest. It is sized to one task, so you see a return before committing to a larger plan.",
      },
    ],
  },
  {
    slug: "technology-stack-for-growth",
    title: "Building a technology stack that grows with you",
    excerpt:
      "Frontend, backend, cloud and AI choices that keep your product fast, secure and easy to extend.",
    category: "Technology",
    date: "12 Oct 2026",
    readTime: "7 min read",
    icon: Brain,
    iconName: "brain",
    tone: { from: "#7c3aed", to: "#db2777" },
    image: "/images/blog/technology-stack-for-growth.jpg",
    quote:
      "A good stack is chosen for the problem it solves, maintained by the team that will live with it, and upgraded in small steps.",
    stats: [
      { end: 4, suffix: "", label: "Layers: frontend, backend, cloud, AI" },
      { end: 2, suffix: "", label: "Environments: testing and live" },
      { end: 1, suffix: "x", label: "Review every year, upgrade in steps" },
    ],
    sections: [
      {
        heading: "Choose for the job, not the trend",
        paragraphs: [
          "A good stack is chosen for the problem it solves. Pick tools your team can maintain, with clear documentation and a strong community behind them. A tool that is fashionable today can be hard to hire for tomorrow.",
          "Each layer has a role: the frontend shapes what visitors see, the backend protects data and logic, the cloud keeps everything online, and AI adds intelligence where it genuinely helps. Keeping these roles separate makes each part easier to change.",
        ],
      },
      {
        heading: "Plan for growth from the start",
        paragraphs: [
          "Separate environments for testing and live use, automated deployments and monitoring prevent expensive rebuilds later. These habits cost little at the beginning and save a great deal over time, because mistakes are caught before customers see them.",
          "Design data and APIs so new features can be added without rewriting the core. Clear naming, tests for important flows and written decisions help future developers move quickly and safely.",
        ],
      },
      {
        heading: "Review and upgrade in small steps",
        paragraphs: [
          "Technology moves quickly, and small upgrades are far cheaper than a full rewrite. Review the stack once a year: check security updates, remove unused services and look for the slowest pages or queries.",
          "Keep a short list of planned improvements and tackle one item at a time. This steady approach keeps the product modern without disrupting the business.",
        ],
      },
    ],
    takeaways: [
      "Pick each layer for a clear purpose.",
      "Separate testing from live systems.",
      "Write down important technical decisions.",
      "Review your stack yearly and upgrade in small steps.",
    ],
    faqs: [
      {
        q: "Should a small business use many technologies?",
        a: "No. Fewer, well-understood tools are easier to maintain. Add a new technology only when it solves a clear problem.",
      },
      {
        q: "How do I know when to rebuild?",
        a: "Rebuild only when the current system blocks important goals, such as scaling, security or essential features. Otherwise, steady improvements are usually better value.",
      },
      {
        q: "Is AI part of every stack now?",
        a: "Not always. Add AI where it saves time or improves answers for a real use case, and keep humans in the loop for important decisions.",
      },
    ],
  },
];

export function findBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}