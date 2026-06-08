export type Project = {
  slug: string;
  title: string;
  type: string;
  year: string;
  summary: string;
  accent: string;
  accentHex: string;
  image: string;
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
    slug: "mineval-wizard",
    title: "Mineval Wizard",
    type: "Enterprise SaaS",
    year: "2026",
    summary:
      "A conceptual enterprise SaaS platform transforming geological and commodity data into investor-ready mining valuations.",
    accent: "bg-[#d9a15f]",
    accentHex: "#d9a15f",
    image: "/images/case-studies/mineval-wizard-full.png",
    scope: [
      "Product strategy",
      "UX architecture",
      "Dashboard UX",
      "Design system",
      "SaaS product thinking",
    ],
    timeline: "Concept case study",
    role: "Lead Product Designer & UX Strategist",
    challenge:
      "Mining valuation workflows are often fragmented, spreadsheet-heavy, and hard for investors and decision-makers to interpret. Existing tools prioritise technical outputs over usability, collaboration, and strategic insight.",
    approach:
      "The platform direction simplified resource modelling into a modern enterprise experience: valuation workflows, comparable databases, scenario planning, reports, settings, mobile access, and a premium interface system.",
    outcome:
      "A clear product vision for a trusted valuation platform that helps mining companies, investors, banks, and government stakeholders move from raw geological data to decision-ready insight.",
    metrics: [
      { label: "Domain", value: "SaaS" },
      { label: "Focus", value: "UX" },
      { label: "Screens", value: "18+" },
    ],
    highlights: [
      "Investor-ready valuation workflows for complex geological and commodity data.",
      "Dashboard, comparable database, scenario, report, and mobile access patterns.",
      "Premium enterprise interface direction for mining and financial stakeholders.",
    ],
  },
  {
    slug: "inafrica-network",
    title: "InAfrica Network",
    type: "Mobile media platform",
    year: "2025",
    summary:
      "A mobile-first African news and social video experience where the continent's stories move markets.",
    accent: "bg-[#d36a38]",
    accentHex: "#d36a38",
    image: "/images/case-studies/inafrica-network-full.jpg",
    scope: [
      "Platform UX",
      "Community workflows",
      "Mobile UI",
      "Design system",
      "Engagement strategy",
    ],
    timeline: "Product concept",
    role: "Lead Product Designer & UX Strategist",
    challenge:
      "The platform needed to combine trusted news, social video, community participation, and market relevance without overwhelming users on mobile.",
    approach:
      "The experience uses a simple mobile information architecture: onboarding, personalised news, topic filters, short-form video, comments, creator actions, and share-first engagement loops.",
    outcome:
      "A focused product direction for an African media network that can support editorial content, social interaction, and audience growth from a single mobile-first system.",
    metrics: [
      { label: "Platform", value: "Mobile" },
      { label: "Focus", value: "Media" },
      { label: "Flows", value: "5" },
    ],
    highlights: [
      "Mobile news, creator, and short-form video journeys for African audiences.",
      "Community and engagement workflows shaped around comments, follows, and sharing.",
      "A brandable interface system for future content and market expansion.",
    ],
  },
  {
    slug: "iatf-2018",
    title: "IATF2018",
    type: "Pan-African trade ecosystem",
    year: "2018",
    summary:
      "A large-scale Pan-African trade fair ecosystem combining branding, event management, digital experiences, exhibition environments, PR, and registration.",
    accent: "bg-[#e3294f]",
    accentHex: "#e3294f",
    image: "/images/case-studies/iatf-2018-full.png",
    scope: [
      "Strategic leadership",
      "Brand development",
      "Creative direction",
      "Event experience",
      "Stakeholder engagement",
    ],
    timeline: "Continental launch",
    role: "CEO of Pixykorner | Lead Strategic & Creative Director",
    challenge:
      "Africa's trade ecosystem was fragmented, with limited platforms capable of connecting businesses, governments, investors, and trade stakeholders at continental scale.",
    approach:
      "Through Pixykorner, Blessing led an integrated event and experience ecosystem spanning brand development, communications, exhibition design, digital engagement, registration, and production oversight.",
    outcome:
      "A world-class trade fair experience that elevated Africa's trade visibility, improved exhibitor and delegate engagement, supported business networking, and helped position Africa as a competitive global trade ecosystem.",
    metrics: [
      { label: "Scale", value: "Pan-African" },
      { label: "Role", value: "Lead" },
      { label: "Year", value: "2018" },
    ],
    highlights: [
      "Large-scale continental initiative for governments, financial institutions, corporates, SMEs, and trade organisations.",
      "Integrated brand, communications, digital, physical, exhibition, and registration systems.",
      "Strategic creative leadership across event planning, stakeholder engagement, and production oversight.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
