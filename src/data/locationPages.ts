export type ServiceKey =
  | "search"
  | "target"
  | "monitor"
  | "palette"
  | "smartphone"
  | "bot"
  | "cog"
  | "atom"
  | "zap"
  | "code2"
  | "code"
  | "terminal";

export type DigitalService = { title: string; desc: string; icon: ServiceKey; href: string };

export const digitalServices: DigitalService[] = [
  { title: "SEO", desc: "Technical SEO, local SEO and AI search optimization.", icon: "search", href: "/services/seo-services" },
  { title: "Digital Marketing", desc: "Google Ads, Meta Ads and social media campaigns.", icon: "target", href: "/services/ppc-management" },
  { title: "Web Development", desc: "Fast websites built with Next.js and React.", icon: "monitor", href: "/services/custom-website-development" },
  { title: "Web Design", desc: "UI/UX design and responsive websites for every screen.", icon: "palette", href: "/services/custom-website-development" },
  { title: "App Development", desc: "iOS, Android and cross-platform mobile apps.", icon: "smartphone", href: "/technologies" },
  { title: "AI Development", desc: "Chatbots, automation and AI integration for your business.", icon: "bot", href: "/services" },
  { title: "Software Development", desc: "Custom software and SaaS platforms.", icon: "cog", href: "/services" },
  { title: "React Native", desc: "Cross-platform iOS and Android apps from one codebase.", icon: "atom", href: "/technologies" },
  { title: "Next.js Development", desc: "Fast, SEO-friendly web applications.", icon: "zap", href: "/technologies" },
  { title: "Laravel Development", desc: "Secure PHP applications and APIs.", icon: "code2", href: "/technologies" },
  { title: "PHP Development", desc: "Custom PHP and WordPress solutions.", icon: "code", href: "/technologies" },
  { title: "Python Development", desc: "Automation tools, data systems and AI backends.", icon: "terminal", href: "/technologies" },
];

export type CountryPage = {
  slug: string;
  code: string;
  name: string;
  heroTitle: string;
  subtitle: string;
  heroText: string;
  introTitle: string;
  introParas: string[];
  reach: string;
};

// Placeholder wording. Your brother should confirm the details for each country.
export const countryPages: CountryPage[] = [
  {
    slug: "india",
    code: "IN",
    name: "India",
    heroTitle: "India Digital Services",
    subtitle: "Expert digital services for Indian businesses",
    heroText:
      "Zenith Digital serves businesses across India with SEO, web development, app development, AI solutions and digital marketing.",
    introTitle: "Digital Services Company in India — Zenith Digital",
    introParas: [
      "Zenith Digital Agency is headquartered in Odisha, India. We deliver SEO, AI search visibility, web and ecommerce development and paid advertising for businesses of every size.",
      "We combine local market knowledge with modern technology, so Indian businesses can grow online with a clear plan and measurable results.",
    ],
    reach: "Bhubaneswar, Cuttack, Delhi, Mumbai, Bangalore, Kolkata, Hyderabad, Pune and Chennai",
  },
  {
    slug: "usa",
    code: "US",
    name: "USA",
    heroTitle: "USA Digital Services",
    subtitle: "Expert digital services for American businesses",
    heroText:
      "Zenith Digital helps US businesses grow online with SEO, AI search visibility, websites and paid campaigns.",
    introTitle: "Digital Services Company for the USA — Zenith Digital",
    introParas: [
      "We help businesses across the United States get found on Google and in AI search answers, with websites and campaigns built for measurable results.",
      "Our team keeps communication clear across US time zones, with regular reports explained in plain language.",
    ],
    reach: "New York, Los Angeles, Chicago, Houston, Dallas, Miami and Seattle",
  },
  {
    slug: "uk",
    code: "GB",
    name: "UK",
    heroTitle: "UK Digital Services",
    subtitle: "Expert digital services for UK businesses",
    heroText:
      "Zenith Digital supports UK businesses with search visibility, modern websites, online stores and paid advertising.",
    introTitle: "Digital Services Company for the UK — Zenith Digital",
    introParas: [
      "We help UK businesses rank in traditional search and in AI-powered answers, with websites and stores that convert visitors into customers.",
      "We work with UK clients through clear timelines, regular updates and honest reporting.",
    ],
    reach: "London, Manchester, Birmingham, Leeds, Glasgow and Edinburgh",
  },
  {
    slug: "canada",
    code: "CA",
    name: "Canada",
    heroTitle: "Canada Digital Services",
    subtitle: "Expert digital services for Canadian businesses",
    heroText:
      "Zenith Digital helps Canadian businesses grow with SEO, websites, ecommerce and digital marketing.",
    introTitle: "Digital Services Company for Canada — Zenith Digital",
    introParas: [
      "We help Canadian businesses increase visibility on Google and AI search, with websites and campaigns built around their goals.",
      "Our team works with Canadian clients across time zones, with clear communication from start to launch.",
    ],
    reach: "Toronto, Vancouver, Montreal, Calgary and Ottawa",
  },
  {
    slug: "australia",
    code: "AU",
    name: "Australia",
    heroTitle: "Australia Digital Services",
    subtitle: "Expert digital services for Australian businesses",
    heroText:
      "Zenith Digital delivers SEO, websites, online stores and paid campaigns for businesses across Australia.",
    introTitle: "Digital Services Company for Australia — Zenith Digital",
    introParas: [
      "We help Australian businesses get found in search and AI answers, with websites and stores that are fast, secure and easy to manage.",
      "We keep in touch with Australian clients across time zones, so projects keep moving.",
    ],
    reach: "Sydney, Melbourne, Brisbane, Perth and Adelaide",
  },
  {
    slug: "china",
    code: "CN",
    name: "China",
    heroTitle: "China Digital Services",
    subtitle: "Digital services for businesses working with China",
    heroText:
      "We help businesses operating in and with China with websites, SEO and digital marketing strategy.",
    introTitle: "Digital Services for Businesses Working with China — Zenith Digital",
    introParas: [
      "We help businesses that serve or work with the Chinese market plan their websites, search strategy and digital marketing.",
      "Each project starts with a clear review of your goals, audience and the platforms that matter for your market.",
    ],
    reach: "Shanghai, Beijing, Shenzhen, Guangzhou and Hong Kong",
  },
  {
    slug: "south-africa",
    code: "ZA",
    name: "South Africa",
    heroTitle: "South Africa Digital Services",
    subtitle: "Expert digital services for South African businesses",
    heroText:
      "Zenith Digital helps South African businesses grow online with SEO, websites, ecommerce and paid advertising.",
    introTitle: "Digital Services Company for South Africa — Zenith Digital",
    introParas: [
      "We help South African businesses get found on Google and in AI search, with websites and stores built for real customers.",
      "We keep communication clear and reports simple, so you always know what is working.",
    ],
    reach: "Johannesburg, Cape Town, Durban, Pretoria and Gqeberha",
  },
];

export const getCountry = (slug: string) => countryPages.find((c) => c.slug === slug);