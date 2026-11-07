export type Tone = { from: string; to: string };

// REAL testimonials, taken from your original ClientTestimonials component.
export type Review = {
  name: string;
  role: string;
  company: string;
  rating: number;
  quote: string;
  image: string;
  tone: Tone;
};

export const reviews: Review[] = [
  {
    name: "Sylvia Larrass",
    role: "Director",
    company: "Voice and Presentation Excellence, Canada",
    rating: 5,
    quote:
      "It was a pleasure working with Zenith, as they treat the customer as a person, not as a number like so many other agencies. Their manner of communication is not only professional and timely, but also respectful and kind, which is of great importance to me. I recommend Zenith to anyone who wants the job done in a personal and customized fashion.",
    image: "/images/testimonials/firstClient.jpg",
    tone: { from: "#2563eb", to: "#7c3aed" },
  },
  {
    name: "Maria",
    role: "Director",
    company: "Nueve Sterling, Canada",
    rating: 5,
    quote:
      "Zenith has done a great job by making my website rank on the first page of Google for some keywords. It has been a process that took some months to happen, but now the results are there. Thanks for the hard work!",
    image: "/images/testimonials/secondClient.jpg",
    tone: { from: "#db2777", to: "#e11d48" },
  },
  {
    name: "Freedom",
    role: "Director",
    company: "Better Filter, China",
    rating: 5,
    quote:
      "It was a pleasure working with Zenith Digital Agency. Your service is really great, good at listening to customers' ideas, strong execution, and you are doing very well. I can highly advise them to anyone looking to hire a trustworthy company for your business.",
    image: "/images/testimonials/ThiredClient.jpg",
    tone: { from: "#16a34a", to: "#0891b2" },
  },
  {
    name: "Eran Eisen",
    role: "Director",
    company: "Gaia Retreat House, Germany",
    rating: 5,
    quote:
      "I have starting to work with Zenith about 9 month ago, feeling in the dark in all issues concerning SEO. I was asking them to achieve several goals for me: Fixing my website errors, website speed, and keyword research. Today, my business is first in organic search for 15 keywords! I highly recommend this company as your SEO provider.",
    image: "/images/testimonials/fourthClient.jpg",
    tone: { from: "#ea580c", to: "#e11d48" },
  },
];

// Video reviews: YouTube IDs from your original VideoTestimonials component.
// Summaries are neutral. Replace them with what each client says in the video.
export const videoReviews = [
  {
    youtubeId: "r9H4gbEdmfs",
    name: "Victor De Clermont",
    role: "Client video review",
    title: "Victor De Clermont on working with Zenith",
    summary: [
      "This video review features Victor De Clermont sharing his experience working with Zenith Digital Agency, in his own words.",
      "Watch the full video to hear about the project, the communication and the results from the client's point of view.",
    ],
    points: ["The client's own words", "Their goals and experience", "The results they describe", "The working relationship"],
  },
  {
    youtubeId: "Aieu9-zq4Ao",
    name: "Rob Kastking",
    role: "Client video review",
    title: "Rob Kastking on working with Zenith",
    summary: [
      "This video review features Rob Kastking sharing his experience working with Zenith Digital Agency, in his own words.",
      "Watch the full video to hear about the project, the communication and the results from the client's point of view.",
    ],
    points: ["The client's own words", "Their goals and experience", "The results they describe", "The working relationship"],
  },
];

export type WorkItem = {
  title: string;
  category: string;
  image: string;
  url: string;
  summary: string;
  highlights: string[];
  tags: string[];
  tone: Tone;
};

// REAL portfolio projects, taken from the portfolio page.
// Confirm the image file names and URLs against src/data/portfolio.ts.
export const recentWork: WorkItem[] = [
  {
    title: "L & P Global Security",
    category: "Security Services Website",
    image: "/images/portfolio/lp-global-security.jpg",
    url: "https://lpglobalsecurity.com",
    summary:
      "A security company website that puts the call to action front and centre, with a free site assessment offer, an emergency action plan page and a clear route to the service information visitors need.",
    highlights: ["Free site assessment call to action", "Emergency action plan and fire safety pages", "Service pages organised by need"],
    tags: ["Security", "Lead generation", "Service business"],
    tone: { from: "#2563eb", to: "#7c3aed" },
  },
  {
    title: "Better Filter",
    category: "Industrial Filtration Website",
    image: "/images/portfolio/better-filter.jpg",
    url: "",
    summary:
      "A product website for industrial filtration, showing the feature products clearly, with category navigation that helps buyers find the right filter bag, housing or cartridge quickly.",
    highlights: ["Feature products shown up front", "Clear product categories", "Simple enquiry and contact routes"],
    tags: ["Industrial", "Product catalogue", "B2B"],
    tone: { from: "#db2777", to: "#e11d48" },
  },
  {
    title: "Applebee Montessori Academy",
    category: "Education Website",
    image: "/images/portfolio/applebee-montessori-academy.jpg",
    url: "https://applebeemontessori.com",
    summary:
      "A school website for a Montessori academy, with its curriculum and programmes laid out clearly for parents, a gallery and events section, and a prominent Schedule a Tour button.",
    highlights: ["Curriculum and programme pages", "Admissions and events information", "Schedule a Tour call to action"],
    tags: ["Education", "Admissions", "Parents"],
    tone: { from: "#16a34a", to: "#0891b2" },
  },
];

// Steps shown at the bottom of the Recent Work page.
export const workProcess = [
  { title: "Understand the goal", text: "We start with the enquiries, sales or bookings you want, not just how the site looks." },
  { title: "Plan the structure", text: "Pages, messages and calls to action are planned so visitors know what to do next." },
  { title: "Build and test", text: "Every page is built for speed and tested on phones, tablets and desktops." },
  { title: "Measure and improve", text: "We track results and keep refining the parts that matter most to your business." },
];

// Random placeholder photos for the About Us gallery. Replace with your own photos.
export const aboutGallery = [
  { src: "https://picsum.photos/seed/zenith-gallery-1/800/1000", caption: "Strategy sessions", tone: { from: "#2563eb", to: "#7c3aed" } },
  { src: "https://picsum.photos/seed/zenith-gallery-2/800/1000", caption: "Design reviews", tone: { from: "#db2777", to: "#e11d48" } },
  { src: "https://picsum.photos/seed/zenith-gallery-3/800/1000", caption: "Development sprints", tone: { from: "#16a34a", to: "#0891b2" } },
  { src: "https://picsum.photos/seed/zenith-gallery-4/800/1000", caption: "Client reporting", tone: { from: "#7c3aed", to: "#db2777" } },
];