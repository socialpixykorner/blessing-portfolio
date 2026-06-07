export type Project = {
  slug: string;
  title: string;
  type: string;
  year: string;
  summary: string;
  accent: string;
  accentHex: string;
  scope: string[];
  timeline: string;
  role: string;
  challenge: string;
  approach: string;
  outcome: string;
  metrics: {
    label: string;
    value: string;
  }[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "pixy-livex",
    title: "Pixy LiveX",
    type: "Streaming product",
    year: "2026",
    summary:
      "A polished live-commerce experience with creator tools, audience flows, and responsive product moments.",
    accent: "bg-lime-300",
    accentHex: "#bef264",
    scope: ["Product strategy", "UX design", "Next.js build"],
    timeline: "4 weeks",
    role: "Product designer and frontend developer",
    challenge:
      "Live shopping experiences can become noisy fast. The dummy brief was to make streaming, chat, products, and creator controls feel focused on one clear conversion path.",
    approach:
      "The system uses a dark studio-style control surface, high-contrast product moments, and simple audience actions that stay visible across desktop and mobile.",
    outcome:
      "A launch-ready product direction with a confident interface, stronger product visibility, and a reusable layout model for future creator campaigns.",
    metrics: [
      { label: "Prototype score", value: "94%" },
      { label: "Core screens", value: "18" },
      { label: "Launch window", value: "4w" },
    ],
    highlights: [
      "Creator dashboard with live status, product pins, and stream controls.",
      "Audience-first shopping flow built around quick product inspection.",
      "Reusable responsive components for future campaign pages.",
    ],
  },
  {
    slug: "social-pixy-korner",
    title: "Social Pixy Korner",
    type: "Brand platform",
    year: "2025",
    summary:
      "A social-first commerce identity and web presence built for clarity, speed, and conversion.",
    accent: "bg-sky-300",
    accentHex: "#7dd3fc",
    scope: ["Brand system", "Landing page", "Content structure"],
    timeline: "3 weeks",
    role: "Visual designer and frontend developer",
    challenge:
      "The dummy brand needed a digital home that could explain its offer quickly while still feeling energetic, social, and commercially sharp.",
    approach:
      "The concept pairs crisp editorial typography with modular content bands for services, social proof, campaign examples, and contact prompts.",
    outcome:
      "A flexible brand platform structure that can support campaign pages, social content, and lightweight ecommerce storytelling.",
    metrics: [
      { label: "Brand modules", value: "12" },
      { label: "Page speed target", value: "90+" },
      { label: "Content lanes", value: "5" },
    ],
    highlights: [
      "Clear hierarchy for offer, services, proof, and conversion.",
      "Reusable campaign blocks for social and commerce promotions.",
      "A bright visual language that stays readable and practical.",
    ],
  },
  {
    slug: "portfolio-system",
    title: "Portfolio System",
    type: "Personal OS",
    year: "2026",
    summary:
      "A flexible digital home for case studies, writing, experiments, and long-term professional growth.",
    accent: "bg-fuchsia-300",
    accentHex: "#f0abfc",
    scope: ["Information architecture", "Design system", "Case studies"],
    timeline: "2 weeks",
    role: "Designer and full-stack portfolio builder",
    challenge:
      "The dummy goal was to turn a simple portfolio into a durable system that can grow with new projects, services, writing, and proof.",
    approach:
      "The structure separates work, process, services, and contact into strong sections while using shared project data for scalable case-study pages.",
    outcome:
      "A portfolio foundation that feels distinctive on day one and can expand into richer case studies without redesigning from scratch.",
    metrics: [
      { label: "Reusable routes", value: "3" },
      { label: "Sections", value: "7" },
      { label: "Content model", value: "1" },
    ],
    highlights: [
      "Shared project data powers homepage cards and individual pages.",
      "Bold first impression inspired by premium independent portfolios.",
      "Room for future writing, testimonials, and deeper project galleries.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
