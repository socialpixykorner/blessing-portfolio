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
  gallery?: {
    src: string;
    alt: string;
    caption: string;
    format: "landscape" | "panorama" | "screen" | "laptop" | "desktop" | "mobile";
  }[];
};

export const projects: Project[] = [
  {
    slug: "minvanta",
    title: "Minvanta",
    type: "Brand strategy & creative direction",
    year: "2026",
    summary:
      "A mining engineering brand built around movement, transforming technical capability into a precise identity, conceptual campaign, and responsive digital system.",
    accent: "bg-[#c56b32]",
    accentHex: "#c56b32",
    image: "/images/case-studies/minvanta/cover.png",
    scope: [
      "Brand strategy",
      "Brand identity",
      "Creative direction",
      "Campaign development",
      "Digital design system",
    ],
    timeline: "Brand platform & launch",
    role: "Creative Director, Brand Strategist & Designer",
    challenge:
      "The identity needed to communicate the scale and technical capability expected in mining engineering without relying on the sector's familiar visual clichés. It had to make complex bulk-material handling expertise feel credible, contemporary, and immediately understandable.",
    approach:
      "The brand was organised around one fundamental truth: mining depends on movement. A Swiss-influenced grid, monumental engineering photography, restrained mineral colours, and a continuous copper line translated that idea into a coherent identity. The campaign turned engineering truths into memorable metaphors, while a responsive design system extended the same logic into digital interfaces.",
    outcome:
      "Minvanta emerged as a distinctive industrial brand with one clear proposition: Engineering What Moves Mining. The system connects strategy, identity, advertising, technical information, and digital product design without losing the precision required by a B2B engineering audience.",
    metrics: [
      { label: "Core idea", value: "Movement" },
      { label: "System", value: "360°" },
      { label: "Platforms", value: "Print + Web" },
    ],
    highlights: [
      "A positioning platform rooted in the operational truth that when material stops moving, production stops.",
      "Conceptual campaign executions using the pause symbol, a heartbeat, and system downtime as mining metaphors.",
      "A responsive 12, 8, and 4-column digital system for corporate, editorial, and technical content.",
    ],
    gallery: [
      {
        src: "/images/case-studies/minvanta/campaign-pause.png",
        alt: "Minvanta campaign showing parallel conveyors as a pause symbol with the headline The most expensive button in mining",
        caption: "Campaign 01 — The most expensive button in mining",
        format: "landscape",
      },
      {
        src: "/images/case-studies/minvanta/campaign-stops.png",
        alt: "Minvanta campaign transforming bulk handling infrastructure into a heartbeat line",
        caption: "Campaign 02 — When this stops, everything stops",
        format: "landscape",
      },
      {
        src: "/images/case-studies/minvanta/campaign-missing.png",
        alt: "Minvanta campaign showing a mining conveyor with the headline 1 percent missing, 100 percent stopped",
        caption: "Campaign 03 — 1% missing. 100% stopped.",
        format: "landscape",
      },
      {
        src: "/images/case-studies/minvanta/website-desktop.png",
        alt: "Full desktop homepage design for the Minvanta mining engineering website",
        caption: "Digital system — Desktop experience",
        format: "desktop",
      },
      {
        src: "/images/case-studies/minvanta/website-mobile.png",
        alt: "Full mobile homepage design for the Minvanta mining engineering website",
        caption: "Digital system — Mobile experience",
        format: "mobile",
      },
    ],
  },
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
    gallery: [
      {
        src: "/images/case-studies/mineval/launch-hero.png",
        alt: "Mineval Wizard launch screen presenting geological intelligence and an investor-ready valuation dashboard",
        caption: "Product vision — Geological intelligence, valued",
        format: "panorama",
      },
      {
        src: "/images/case-studies/mineval/platform-overview.png",
        alt: "Mineval platform overview showing asset intelligence, valuation engine, and market comparables",
        caption: "Platform architecture — One operating system for mining valuation",
        format: "laptop",
      },
      {
        src: "/images/case-studies/mineval/valuation-workflow.png",
        alt: "Mineval valuation workflow showing four steps from data ingestion to report publishing",
        caption: "Valuation workflow — From drillhole to decision in four steps",
        format: "screen",
      },
      {
        src: "/images/case-studies/mineval/pricing-browser-dark.png",
        alt: "Mineval pricing interface shown within a dark browser frame",
        caption: "Commercial model — Scalable plans for analysts, investors, and enterprise teams",
        format: "screen",
      },
      {
        src: "/images/case-studies/mineval/pricing-browser-light.png",
        alt: "Mineval pricing interface shown within a light browser frame",
        caption: "Responsive system — Pricing and plan comparison",
        format: "screen",
      },
      {
        src: "/images/case-studies/mineval/case-studies.png",
        alt: "Mineval case studies interface presenting outcomes for investment funds, mining majors, and junior explorers",
        caption: "Evidence layer — Outcome-led customer case studies",
        format: "screen",
      },
      {
        src: "/images/case-studies/mineval/resources-menu.png",
        alt: "Mineval resources navigation menu with blog, guides, webinars, documentation, reports, and frequently asked questions",
        caption: "Information architecture — Resource navigation system",
        format: "screen",
      },
      {
        src: "/images/case-studies/mineval/dashboard-browser.png",
        alt: "Mineval portfolio overview dashboard displayed within a browser frame",
        caption: "Application UI — Portfolio overview and confidence index",
        format: "laptop",
      },
      {
        src: "/images/case-studies/mineval/dashboard.png",
        alt: "Mineval portfolio dashboard with valuation, return, capital, confidence, risk, and activity metrics",
        caption: "Dashboard system — Decision-ready portfolio intelligence",
        format: "laptop",
      },
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
      "Through Pixykorner, Tongwara Blessing Katsidzira led an integrated event and experience ecosystem spanning brand development, communications, exhibition design, digital engagement, registration, and production oversight.",
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
  {
    slug: "people-who-never-were",
    title: "People Who Never Were",
    type: "Constructed photography",
    year: "2026",
    summary:
      "Fictional people. Familiar worlds. A photographic study of imagined lives, shaped through human art direction and constructed image-making.",
    accent: "bg-[#c84b35]",
    accentHex: "#c84b35",
    image: "/images/case-studies/people-who-never-were/01-elder-portrait.png",
    scope: [
      "Creative direction",
      "Prompt direction",
      "Visual storytelling",
      "Image curation",
      "Generative imaging",
    ],
    timeline: "Ongoing visual study",
    role: "Creative Director & Generative Image Maker",
    challenge:
      "AI imagery can become technically impressive yet emotionally anonymous. This study asks whether fictional subjects can still carry a sense of memory, geography, weather, age, and lived experience without pretending to be documentary evidence.",
    approach:
      "Each image begins with a directed idea for character, place, light, lens, texture, and emotional distance. Iterative prompting, selection, and sequencing borrow from portraiture, street photography, cinema, and editorial image-making to create a coherent visual language rather than a collection of isolated outputs.",
    outcome:
      "An evolving portrait of people who do not exist, situated in worlds that feel recognisable. The series treats generative technology as an image-making medium under deliberate human authorship, while remaining transparent that every person and moment shown is fictional.",
    metrics: [
      { label: "Images", value: "10" },
      { label: "Medium", value: "Constructed" },
      { label: "Status", value: "Ongoing" },
    ],
    highlights: [
      "A candid visual language spanning intimate portraiture, street observation, fashion, and cinematic atmosphere.",
      "Consistent direction across black-and-white studies, saturated daylight, rain, grain, and low-light colour.",
      "Transparent authorship: the people are fictional, while the art direction, selection, and visual intent are human-led.",
    ],
    gallery: [
      {
        src: "/images/case-studies/people-who-never-were/01-elder-portrait.png",
        alt: "AI-generated black-and-white close portrait of an elderly South African man",
        caption: "Portrait study 01 — Johannesburg, imagined",
        format: "panorama",
      },
      {
        src: "/images/case-studies/people-who-never-were/02-street-musician.png",
        alt: "AI-generated cinematic street scene with an elderly musician among blurred pedestrians",
        caption: "Street study 01 — A song in passing",
        format: "panorama",
      },
      {
        src: "/images/case-studies/people-who-never-were/03-jamaican-portrait.png",
        alt: "AI-generated black-and-white portrait of a Jamaican man with dreadlocks",
        caption: "Portrait study 02 — Kingston, imagined",
        format: "panorama",
      },
      {
        src: "/images/case-studies/people-who-never-were/04-brazilian-portrait.png",
        alt: "AI-generated black-and-white close portrait of a Brazilian woman in rain",
        caption: "Portrait study 03 — Sao Paulo, imagined",
        format: "panorama",
      },
      {
        src: "/images/case-studies/people-who-never-were/05-new-york-crossing.png",
        alt: "AI-generated cinematic street photograph of a man crossing a rainy New York street",
        caption: "Street study 02 — Downtown in the rain",
        format: "panorama",
      },
      {
        src: "/images/case-studies/people-who-never-were/06-new-york-portrait.png",
        alt: "AI-generated cinematic portrait of a woman on a New York street at night",
        caption: "Street study 03 — Between calls",
        format: "panorama",
      },
      {
        src: "/images/case-studies/people-who-never-were/07-soweto-fashion.png",
        alt: "AI-generated fashion portrait of a woman seated against a red wall in Soweto",
        caption: "Soweto study 01 — Red boots",
        format: "panorama",
      },
      {
        src: "/images/case-studies/people-who-never-were/08-soweto-walker.png",
        alt: "AI-generated street photograph of an older man walking past a brightly painted Soweto home",
        caption: "Soweto study 02 — The long wall",
        format: "panorama",
      },
      {
        src: "/images/case-studies/people-who-never-were/09-soweto-sunset.png",
        alt: "AI-generated photograph of an older man walking through Soweto at sunset",
        caption: "Soweto study 03 — Walking home",
        format: "panorama",
      },
      {
        src: "/images/case-studies/people-who-never-were/10-elder-closeup.png",
        alt: "AI-generated extreme close portrait of an elderly man with blue eyes",
        caption: "Portrait study 04 — The remembered face",
        format: "panorama",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
