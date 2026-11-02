export type TechExtra = {
  paragraphs: string[];
  useCases: string[];
};

// Keys match the page slugs, for example /menu/technologies/react-js
export const techExtras: Record<string, TechExtra> = {
  "react-js": {
    paragraphs: [
      "React is the library we reach for when an interface needs to respond to users in real time. Its component model means a button, form or product card is built once and reused across every page, which keeps the design consistent and the code manageable.",
      "We pair React with well-tested libraries for forms, charts and accessibility, so common problems are already solved. Our focus stays on your business logic and the experience your customers see.",
    ],
    useCases: ["Customer dashboards and portals", "Product configurators and filters", "Booking and enquiry flows", "Interactive data visualisation"],
  },
  "next-js": {
    paragraphs: [
      "Next.js is our default for business websites and web applications. It renders pages on the server, so content appears quickly and search engines can read it without waiting for scripts to run.",
      "Routing, image optimisation and metadata are built in, which removes a lot of setup work. The same project can serve marketing pages, a blog and a logged-in dashboard without changing tools.",
    ],
    useCases: ["Company websites and landing pages", "Ecommerce front ends", "Content and blog platforms", "Web apps with user accounts"],
  },
  "vue-js": {
    paragraphs: [
      "Vue.js is approachable and flexible. It can power a small interactive widget on an existing page or a full application, and the learning curve is gentle for teams that are new to modern frameworks.",
      "Its reactive data system keeps forms, filters and dashboards in sync with the underlying information. We use it where clarity and fast iteration matter more than a large ecosystem.",
    ],
    useCases: ["Adding interactivity to existing sites", "Internal admin tools", "Interactive forms and calculators", "Progressive upgrades of older pages"],
  },
  "tailwind-css": {
    paragraphs: [
      "Tailwind CSS keeps spacing, colours and typography in one shared system. Designers and developers work from the same tokens, so pages stay visually consistent as the site grows.",
      "Because only the styles you use are included in the final output, pages stay light. Changing the brand palette or a font becomes a quick, controlled update instead of a risky rewrite.",
    ],
    useCases: ["Brand-consistent design systems", "Responsive layouts for every device", "Fast styling of new pages", "Light, quick-loading stylesheets"],
  },
  wordpress: {
    paragraphs: [
      "WordPress is the most widely used content platform, and it suits businesses that publish often. We set it up with a custom theme, so the site looks like your brand rather than a generic template.",
      "Your team can write, upload and publish without touching code. We add only the plugins that earn their place, and keep updates and backups running so the site stays secure.",
    ],
    useCases: ["Company and service websites", "Blogs and news sites", "Membership and course sites", "Sites managed by non-technical teams"],
  },
  shopify: {
    paragraphs: [
      "Shopify is a complete ecommerce platform with hosting, checkout and security included. It lets a business launch quickly and focus on products, marketing and customers rather than servers.",
      "We customise the theme, connect the apps you need and set up shipping and tax rules. Your team manages orders and stock from one dashboard, and the store is ready for both desktop and mobile shoppers.",
    ],
    useCases: ["New online stores", "Brands selling on social channels", "Stores with large catalogues", "Subscription and bundle products"],
  },
  woocommerce: {
    paragraphs: [
      "WooCommerce adds a full shop to WordPress, so content and commerce live in one place. It gives you complete control over product data, pricing and checkout without monthly platform fees.",
      "We design custom product layouts, set up variations and connect payment and delivery partners. Stores built this way can grow with the catalogue and fit into an existing WordPress website.",
    ],
    useCases: ["Stores attached to a content website", "Product variations and bundles", "Bookings and digital downloads", "Custom checkout flows"],
  },
  laravel: {
    paragraphs: [
      "Laravel gives us a structured foundation for business applications. Authentication, database migrations, queues and scheduled tasks are included, so we spend time on your features instead of plumbing.",
      "The codebase is organised and well tested, which makes it easier for new developers to join a project. We use Laravel for applications that need reliability over many years.",
    ],
    useCases: ["Customer portals and member areas", "Booking and order management", "Internal business tools", "APIs for mobile apps"],
  },
  "express-js": {
    paragraphs: [
      "Express.js is a minimal framework for building Node.js APIs. It gives us precise control over routes and middleware, so services stay lean and easy to reason about.",
      "We use it to build the endpoints that connect your website, mobile app and third-party tools. Services are small, quick to start and easy to scale when traffic grows.",
    ],
    useCases: ["REST and JSON APIs", "Webhooks and integrations", "Lightweight microservices", "Real-time features with sockets"],
  },
  "node-js": {
    paragraphs: [
      "Node.js runs JavaScript on the server, so one language covers the whole product. It handles many simultaneous connections efficiently, which suits live features and high-traffic services.",
      "We use Node.js for chat, notifications, live tracking and background workers. Shared code between front end and back end also speeds up development and reduces errors.",
    ],
    useCases: ["Live chat and notifications", "Real-time order or delivery tracking", "Background jobs and workers", "APIs for web and mobile"],
  },
  php: {
    paragraphs: [
      "PHP powers a large share of the web and runs on almost every hosting plan. That makes it a practical, cost-effective choice for business websites, portals and integrations.",
      "Modern PHP is fast, typed and well supported. We write it with clear structure and automated tests, so it stays reliable long after launch.",
    ],
    useCases: ["Business websites and portals", "Integrations with payment and CRM systems", "Content management tools", "Budget-friendly hosted projects"],
  },
  python: {
    paragraphs: [
      "Python is readable and versatile. It handles web applications, data processing and automation with equal ease, and it connects directly to the machine learning tools behind modern AI.",
      "We use Python to clean data, produce reports and run scheduled tasks. The same skills carry into AI features, so one language can serve many parts of your product.",
    ],
    useCases: ["Data cleaning and reporting", "Scheduled automation scripts", "Machine learning features", "Web APIs with Django or Flask"],
  },
  codeigniter: {
    paragraphs: [
      "CodeIgniter is a small, fast PHP framework. Its low overhead suits focused business applications and hosting plans with modest resources.",
      "Projects start quickly with a clear structure, which keeps delivery time and budget under control. It is a good fit when simplicity matters more than a large feature set.",
    ],
    useCases: ["Small business applications", "Quick internal tools", "Projects on modest hosting", "Simple data entry systems"],
  },
  aws: {
    paragraphs: [
      "Amazon Web Services offers a very large set of cloud services. We use the parts your product needs, such as compute, managed databases, storage and content delivery, and nothing more.",
      "Auto-scaling, backups and monitoring are configured from the start. Costs are tracked against real usage, so the platform grows with your business without surprise bills.",
    ],
    useCases: ["Scalable web and app hosting", "Managed databases and storage", "Global content delivery", "Secure backups and recovery"],
  },
  "google-cloud": {
    paragraphs: [
      "Google Cloud is strong for data-heavy work and analytics. Its managed container platform and fast query engines make it a good fit for reporting and large datasets.",
      "We use it where data and AI services matter most. Ready-made machine learning tools can be connected to your own information without building everything from scratch.",
    ],
    useCases: ["Analytics and reporting platforms", "Containerised applications", "Data pipelines", "AI features on large datasets"],
  },
  "microsoft-azure": {
    paragraphs: [
      "Azure suits organisations that already run Microsoft tools. It connects naturally with Microsoft identity, Office and Teams, so sign-in and access management stay consistent.",
      "Hybrid setups and compliance features support regulated industries. We design environments with clear separation between testing and live systems.",
    ],
    useCases: ["Businesses using Microsoft 365", "Hybrid on-premise and cloud setups", "Enterprise sign-in and access control", "Compliance-driven projects"],
  },
  digitalocean: {
    paragraphs: [
      "DigitalOcean offers straightforward servers and managed databases with predictable pricing. It is ideal when you want control without the complexity of larger cloud platforms.",
      "Setting up a server is quick, and scaling up is simple as traffic grows. We use it for websites, APIs and small applications where clear monthly costs matter.",
    ],
    useCases: ["Websites and APIs", "Staging and test environments", "Small managed databases", "Growing projects with fixed budgets"],
  },
  openai: {
    paragraphs: [
      "OpenAI models understand natural language, so they can answer questions, summarise text and draft content. We connect them to your own information so answers reflect your business.",
      "Tool use lets the model check orders, bookings or stock through safe, limited actions. Every feature is tested against real questions and reviewed before it reaches customers.",
    ],
    useCases: ["Customer support assistants", "Content and email drafting", "Document search and summaries", "Lead qualification chatbots"],
  },
  claude: {
    paragraphs: [
      "Claude is careful and strong at long documents. It can read contracts, reports and manuals in a single pass, and it follows detailed instructions closely.",
      "We use it for analysis and drafting where accuracy and clear writing matter. Outputs are checked by your team, and sensitive work keeps a human in the loop.",
    ],
    useCases: ["Contract and policy review", "Long report summaries", "Support reply drafting", "Structured business writing"],
  },
  "google-gemini": {
    paragraphs: [
      "Gemini works with text, images and structured data in one model. It connects well with Google tools, which helps teams already using Workspace or Google Cloud.",
      "We use Gemini for assistants that need to read mixed inputs and for research features tied to verified sources. Responses are tested before they go live.",
    ],
    useCases: ["Assistants that read images and text", "Research and reporting helpers", "Workspace-connected tools", "Multilingual customer support"],
  },
  langchain: {
    paragraphs: [
      "LangChain gives structure to AI applications. It connects models to your documents, memory and tools, so multi-step tasks run in a predictable order.",
      "Its building blocks let us swap models without rewriting the whole system, which keeps costs and options flexible as the market changes.",
    ],
    useCases: ["Retrieval-based document assistants", "Multi-step automation workflows", "Assistants with memory", "Tool-connected AI features"],
  },
  pinecone: {
    paragraphs: [
      "Pinecone stores content as vectors, so search finds meaning rather than exact words. A customer asking for a 'quiet office' can find listings that describe one, even without that phrase.",
      "It is a managed service, which means no database servers to maintain. New documents become searchable quickly, and filters narrow results by category, date or team.",
    ],
    useCases: ["Semantic product or document search", "Recommendation engines", "Knowledge base retrieval for AI", "Duplicate and similarity detection"],
  },
};