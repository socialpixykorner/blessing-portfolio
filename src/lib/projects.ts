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
  process?: { title: string; body: string }[];
  achievement?: {
    statistic: string;
    unit: string;
    descriptor: string;
    performance: string;
    heading: string;
    paragraphs: string[];
    sources: { label: string; href: string }[];
  };
  galleryKicker?: string;
  galleryTitle?: string;
  gallery?: {
    src: string;
    alt: string;
    caption: string;
    media?: "image" | "video";
    format: "landscape" | "panorama" | "portrait-board" | "screen" | "publication" | "publication-wide" | "publication-mockup" | "report-page" | "laptop" | "desktop" | "mobile";
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
    slug: "eventintel",
    title: "Eventintel",
    type: "Product thinking & SaaS UX",
    year: "2026",
    summary:
      "A product strategy and interface concept for turning live event activity into attendance forecasts, lead intelligence, and executive decisions.",
    accent: "bg-[#0b45ff]",
    accentHex: "#0b45ff",
    image: "/images/case-studies/eventintel/dashboard-command-center.png",
    scope: [
      "Product strategy",
      "UX architecture",
      "Dashboard design",
      "AI feature framing",
      "Conversion journey",
    ],
    timeline: "Product thinking case study",
    role: "Product Designer, UX Strategist & Interface Designer",
    challenge:
      "Large events create thousands of signals across registration, check-in, sessions, surveys, and lead capture, but organisers often see those signals too late. The product problem was to frame an event platform that moves beyond administration and helps teams understand what is happening, what is likely to happen next, and where to act.",
    approach:
      "The thinking started with the decision moments: who needs the signal, when the signal becomes useful, and what action should follow. The experience was shaped around three layers: an executive command center for live event health, an intelligence layer that translates activity into recommendations, and a market-facing journey that explains the platform without burying the product in feature noise.",
    outcome:
      "Eventintel became a clear product narrative for an enterprise event intelligence platform. The concept connects operational workflows, AI summaries, audience forecasting, lead scoring, and buyer education into one coherent system, showing how event data can become practical product value instead of a passive reporting layer.",
    metrics: [
      { label: "Focus", value: "Product" },
      { label: "Signals", value: "Live data" },
      { label: "Mode", value: "B2B SaaS" },
    ],
    highlights: [
      "Reframed event software from task management into decision support for organisers, sponsors, and sales teams.",
      "Defined an intelligence layer around forecasting, routing, sentiment, matchmaking, and executive summaries.",
      "Connected dashboard utility with a public-facing product story, pricing path, resources, and conversion moments.",
    ],
    galleryKicker: "Product thinking / 2026",
    galleryTitle: "From event activity to decisions",
    gallery: [
      {
        src: "/images/case-studies/eventintel/dashboard-command-center.png",
        alt: "Eventintel dashboard command center with registrations, check-ins, leads captured, sessions live, engagement chart, and AI insights",
        caption: "Dashboard thinking — Live health, engagement, and next-best actions",
        format: "screen",
      },
      {
        src: "/images/case-studies/eventintel/intelligence-layer.png",
        alt: "Eventintel intelligence layer section explaining attendance forecasting, lead scoring, sentiment feedback, and smart matchmaking",
        caption: "AI layer — Turning raw activity into forecasts and recommendations",
        format: "screen",
      },
      {
        src: "/images/case-studies/eventintel/solutions-grid.png",
        alt: "Eventintel solutions grid for government, international organisations, conferences, and banking and finance",
        caption: "Segmentation — Matching the product story to demanding organisations",
        format: "screen",
      },
      {
        src: "/images/case-studies/eventintel/resources-architecture.png",
        alt: "Eventintel resources page showing blog, guides, templates, case studies, documentation, and webinars",
        caption: "Information architecture — Resources that support buyer education",
        format: "screen",
      },
      {
        src: "/images/case-studies/eventintel/about-narrative.png",
        alt: "Eventintel about page with the headline Where events become intelligence",
        caption: "Narrative system — A mission that keeps the product promise simple",
        format: "screen",
      },
      {
        src: "/images/case-studies/eventintel/about-system.png",
        alt: "Eventintel about page showing the mission and vision beneath the product narrative",
        caption: "Product belief — Mission and vision translated into a platform promise",
        format: "screen",
      },
      {
        src: "/images/case-studies/eventintel/conversion-cta-footer.png",
        alt: "Eventintel blue call-to-action section asking if the user is ready to make the next event measurable",
        caption: "Conversion path — Clear next steps for demo and trial intent",
        format: "screen",
      },
    ],
  },
  {
    slug: "pixylivex",
    title: "PixyliveX",
    type: "Product leadership & procurement platform",
    year: "2026",
    summary:
      "An exhibition stand procurement platform shaped through design thinking, translating insights into a coherent marketplace experience and design system.",
    accent: "bg-[#d64532]",
    accentHex: "#d64532",
    image: "/images/case-studies/pixylivex/workspace-cover.png",
    scope: [
      "Product development leadership",
      "Design thinking",
      "Information architecture",
      "Marketplace UX",
      "Design system",
      "Visual communication",
    ],
    timeline: "Insight gathering to product development",
    role: "Product Development Lead & Design System Lead",
    challenge:
      "Exhibition stand procurement brings together design selection, supplier comparison, pricing and delivery deadlines. When these decisions sit across separate conversations and materials, buyers can struggle to understand their options and assess delivery confidence. The product challenge was to bring discovery, comparison and procurement into a clear experience for exhibition project teams.",
    approach:
      "I led product development using a design-thinking approach to gather insights before mapping the artefact. Those insights informed the product structure, user journeys and priorities for the interface. I translated that direction into a design system and coordinated its application across the public website, marketplace and workspace entry, connecting product strategy with consistent creative execution.",
    outcome:
      "The resulting product brings exhibition stand discovery, category and size filtering, supplier information, quote requests and delivery-guarantee communication into one recognisable experience. The design system provides a shared visual language across browsing, procurement information and account access, demonstrating how insight-led product direction can become a coordinated digital experience.",
    metrics: [
      { label: "Platform", value: "Web" },
      { label: "Focus", value: "Stands" },
      { label: "Role", value: "Product lead" },
    ],
    process: [
      {
        title: "Gather insights",
        body: "I began with design thinking to understand the procurement problem before committing to an interface. Insight gathering established the context for decisions around stand selection, comparison and delivery confidence.",
      },
      {
        title: "Map the artefact",
        body: "I used the insights to map the product's information architecture and user journeys: discovering stand options, narrowing a selection, understanding procurement information and entering the workspace. This gave the interface a structure grounded in the problem it needed to address.",
      },
      {
        title: "Develop the design system",
        body: "The design system followed the insight and mapping work. Typography, colour, spacing, navigation, buttons, form fields and listing patterns established a consistent language across the marketplace and supporting pages, connecting the brand with practical product decisions.",
      },
      {
        title: "Coordinate product execution",
        body: "I led the translation of the mapped artefact and design system into the product experience. The execution connected marketplace filters and stand listings with procurement messaging, delivery-guarantee information and account access, keeping the different touchpoints visually and functionally coherent.",
      },
    ],
    highlights: [
      "Led product development from insight gathering and artefact mapping to coordinated interface execution.",
      "Developed the design system after design thinking, giving product decisions a shared foundation across pages and workflows.",
      "Connected exhibition stand discovery with supplier, pricing and delivery information in a coherent procurement experience.",
    ],
    galleryKicker: "Selected product screens / 2026",
    galleryTitle: "From insights to product experience",
    gallery: [
      {
        src: "/images/case-studies/pixylivex/marketplace-updated.png",
        alt: "PixyliveX marketplace with exhibition stand categories, size filtering, sorting and stand listings",
        caption: "Marketplace / Discovery, filtering and stand selection",
        format: "screen",
      },
      {
        src: "/images/case-studies/pixylivex/product-overview.png",
        alt: "PixyliveX public website showing exhibition design imagery and procurement navigation",
        caption: "Product introduction / Connecting stand design with procurement",
        format: "screen",
      },
      {
        src: "/images/case-studies/pixylivex/delivery-guarantee.png",
        alt: "PixyliveX delivery-guarantee information with supplier accreditation and buyer protection messaging",
        caption: "Procurement confidence / Delivery-guarantee information",
        format: "screen",
      },
      {
        src: "/images/case-studies/pixylivex/workspace-sign-in.png",
        alt: "PixyliveX workspace sign-in page with labelled email and password fields",
        caption: "Workspace entry / Applying the design system to account access",
        format: "screen",
      },
      {
        src: "/images/case-studies/pixylivex/brand-communication.png",
        alt: "PixyliveX public-facing customer-feedback layout and newsletter subscription section",
        caption: "Brand communication / Customer-feedback presentation and subscription layout",
        format: "screen",
      },
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
    galleryKicker: "Selected applications / 2018",
    galleryTitle: "A continental experience",
    gallery: [
      {
        src: "/images/case-studies/iatf-2018/event-launch.jpg",
        alt: "Press cameras surrounding delegates during the official IATF2018 event launch",
        caption: "Event experience — Continental launch and media engagement",
        format: "panorama",
      },
      {
        src: "/images/case-studies/iatf-2018/social-campaign-grid.jpg",
        alt: "Grid of IATF2018 Instagram posts promoting country days, speakers, sectors, and event registration",
        caption: "Digital communications — Social campaign system",
        format: "portrait-board",
      },
      {
        src: "/images/case-studies/iatf-2018/mobile-experience.png",
        alt: "IATF2018 mobile welcome experience displayed across a collection of smartphones",
        caption: "Digital experience — Mobile event platform",
        format: "landscape",
      },
      {
        src: "/images/case-studies/iatf-2018/exhibition-brand-environment.png",
        alt: "IATF2018 pink and yellow brand pattern draped across an exhibition structure",
        caption: "Exhibition environment — Brand system in space",
        format: "panorama",
      },
      {
        src: "/images/case-studies/iatf-2018/social-mobile-mockup.png",
        alt: "IATF2018 Nigeria Country Day social media post displayed on a mobile phone mockup",
        caption: "Campaign application — Social content in context",
        format: "portrait-board",
      },
    ],
  },
  {
    slug: "strategy-into-systems",
    title: "Strategy into systems",
    type: "Integrated strategy & delivery system",
    year: "2018",
    summary:
      "An integrated IATF strategy case study showing how brand, stakeholder engagement, marketing, media, registration, ambassadors, and reporting became one delivery system.",
    accent: "bg-[#e3294f]",
    accentHex: "#e3294f",
    image: "/images/case-studies/strategy-into-systems/final-report-cover.jpg",
    scope: [
      "Integrated strategy",
      "Brand communication",
      "Stakeholder engagement",
      "Marketing systems",
      "Media and PR",
      "Reporting framework",
    ],
    timeline: "IATF integrated strategy",
    role: "Strategic Lead, Creative Director & Delivery Partner",
    achievement: {
      statistic: "US$32.6",
      unit: "Billion",
      descriptor:
        "Cross-border trade deals recorded at the inaugural Intra-African Trade Fair (IATF2018).",
      performance: "30.4% above the US$25 billion target.",
      heading: "From Creative Strategy to Continental Trade Impact",
      paragraphs: [
        "As Founder and Creative Director of Pixykorner Studio, I led the creative team contributing to the inaugural Intra-African Trade Fair (IATF2018), held in Cairo, Egypt.",
        "The event recorded US$32.6 billion in cross-border trade deals, exceeding its US$25 billion target by 30.4%.",
        "My role focused on creative direction, strategic visual communication and coordinating the Pixykorner team's creative contributions to the event.",
      ],
      sources: [
        { label: "IATF: event results", href: "https://www.iatf.africa/" },
        {
          label: "Afreximbank: US$25 billion target",
          href: "https://www.afreximbank.com/first-intra-african-trade-fair-opens-with-call-for-initiatives-that-drive-afcfta/",
        },
      ],
    },
    challenge:
      "The inaugural Intra-African Trade Fair needed to bring governments, sponsors, exhibitors, media, ambassadors, delegates, and trade audiences into one coherent event ecosystem. The strategic challenge was not only to communicate the fair, but to build the systems that could move a continental idea into participation, visibility, registration, and operational delivery.",
    approach:
      "The work connected brand strategy to practical implementation. The report frames the event concept, country participation, sponsorship onboarding, registration, marketing, media and PR, social channels, ambassador coordination, and post-event recommendations as linked parts of one operating system. Each touchpoint had a role: create awareness, build credibility, convert participation, coordinate stakeholders, and preserve learning for future editions.",
    outcome:
      "The strategy helped structure a first-of-its-kind continental trade platform around a repeatable delivery model. IATF 2018 surpassed the reduced country-participation threshold, brought together 44 countries overall, supported more than 1,000 exhibitors, and produced a documented framework that could inform future IATF editions.",
    metrics: [
      { label: "Countries", value: "44" },
      { label: "Exhibitors", value: "1,086" },
      { label: "System", value: "360°" },
    ],
    highlights: [
      "Turned the event concept into a joined-up delivery system across brand, sponsorship, country participation, registration, marketing, media, PR, and ambassadors.",
      "Used the brand strategy as the reference point for campaign messaging, stakeholder engagement, collateral, venue branding, airport branding, and promotional videos.",
      "Documented challenges, mitigations, and recommendations so the inaugural event could become a repeatable framework for future editions.",
    ],
    galleryKicker: "IATF integrated strategy / 2018",
    galleryTitle: "From continental ambition to operating system",
    gallery: [
      {
        src: "/images/case-studies/strategy-into-systems/final-report-cover.jpg",
        alt: "IATF 2018 final report cover with event branding and handshake image",
        caption: "Final report — Strategy, delivery, and post-event learning",
        format: "report-page",
      },
      {
        src: "/images/case-studies/strategy-into-systems/executive-summary.jpg",
        alt: "IATF 2018 final report executive summary page",
        caption: "Strategic frame — Transforming Africa through trade, information, and market access",
        format: "report-page",
      },
      {
        src: "/images/case-studies/strategy-into-systems/event-concept.jpg",
        alt: "IATF 2018 final report event concept page",
        caption: "Event concept — Conference, exhibition, country pavilions, and B2B engagement",
        format: "report-page",
      },
      {
        src: "/images/case-studies/strategy-into-systems/marketing-strategy.jpg",
        alt: "IATF 2018 final report marketing the IATF page",
        caption: "Marketing system — Brand strategy as the campaign reference point",
        format: "report-page",
      },
      {
        src: "/images/case-studies/strategy-into-systems/media-pr-phases.jpg",
        alt: "IATF 2018 final report media and PR phases page",
        caption: "Media and PR — Pre-event, during-event, and post-event communication phases",
        format: "report-page",
      },
      {
        src: "/images/case-studies/strategy-into-systems/social-media-process.jpg",
        alt: "IATF 2018 final report social media process page",
        caption: "Social process — Awareness, positioning, engagement, and conversation",
        format: "report-page",
      },
      {
        src: "/images/case-studies/strategy-into-systems/ambassadors-programme.jpg",
        alt: "IATF 2018 final report brand ambassadors programme page",
        caption: "Ambassador programme — Coordination, induction, content, reporting, and stakeholder support",
        format: "report-page",
      },
      {
        src: "/images/case-studies/strategy-into-systems/recommendations.jpg",
        alt: "IATF 2018 final report event summary and recommendations page",
        caption: "System learning — Recommendations for governance, task teams, timing, and future delivery",
        format: "report-page",
      },
    ],
  },
  {
    slug: "stories-that-move-markets",
    title: "Stories that move markets",
    type: "Motion storytelling & campaign content",
    year: "2018—2020",
    summary:
      "A motion-led storytelling archive turning continental trade, cultural memory, and public-impact reporting into clear audience-ready films.",
    accent: "bg-[#d64532]",
    accentHex: "#d64532",
    image: "/images/case-studies/stories-that-move-markets/saftas-in-memoriam-thumbnail.png",
    scope: [
      "Motion storytelling",
      "Narrative editing",
      "Institutional communication",
      "Event content",
      "Public-impact reporting",
    ],
    timeline: "Selected video archive",
    role: "Creative Director, Story Lead & Motion Producer",
    challenge:
      "Institutional stories often carry important meaning but arrive as speeches, reports, event footage, or fragmented campaign material. The challenge was to turn that material into films that could hold attention, carry emotion, and make complex initiatives feel immediate to public, cultural, and stakeholder audiences.",
    approach:
      "The work treats editing as strategic communication. Each film begins by identifying the human signal inside the brief: gratitude and momentum for a continental trade platform, dignity and remembrance for a cultural broadcast, and clarity for a public-impact report. Rhythm, sequencing, titles, image selection, and sound are used to move the audience from information to understanding.",
    outcome:
      "The films show how moving-image storytelling can give institutions a stronger public voice. Across trade, culture, and development communication, the work transforms source material into narratives designed for recall, trust, emotion, and momentum.",
    metrics: [
      { label: "Medium", value: "Video" },
      { label: "Stories", value: "3" },
      { label: "Use", value: "Public" },
    ],
    highlights: [
      "Translated a continental trade event into a thank-you film that extends stakeholder momentum beyond the venue.",
      "Shaped a memorial sequence with restraint, pacing, and emotional dignity for a broadcast audience.",
      "Turned development reporting into accessible motion communication during a high-stakes public-health moment.",
    ],
    galleryKicker: "Motion archive / 2018—2020",
    galleryTitle: "Institutional stories with public energy",
    gallery: [
      {
        src: "/videos/case-studies/stories-that-move-markets/iatf-2018-thank-you.mp4",
        alt: "IATF 2018 thank-you motion story video",
        caption: "IATF 2018 — Thank-you film for a continental trade platform",
        media: "video",
        format: "screen",
      },
      {
        src: "/videos/case-studies/stories-that-move-markets/saftas14-in-memoriam.mp4",
        alt: "SAFTAs 14 In Memoriam broadcast motion sequence",
        caption: "SAFTAs 14 — In Memoriam sequence shaped for dignity and remembrance",
        media: "video",
        format: "screen",
      },
      {
        src: "/videos/case-studies/stories-that-move-markets/undp-covid-19-report.mp4",
        alt: "UNDP COVID-19 report motion communication video",
        caption: "UNDP COVID-19 report — Public-impact information translated into motion",
        media: "video",
        format: "screen",
      },
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
  {
    slug: "publication-systems",
    title: "Publication Systems",
    type: "Editorial & print design",
    year: "1999—2026",
    summary:
      "Books, annual reports, identity manuals, and institutional publications designed as coherent systems of information, image, and brand.",
    accent: "bg-[#3c356f]",
    accentHex: "#3c356f",
    image: "/images/case-studies/publications/aprm-yearbook.jpg",
    scope: [
      "Publication design",
      "Editorial systems",
      "Art direction",
      "Information hierarchy",
      "Production design",
    ],
    timeline: "Selected publishing archive",
    role: "Creative Director & Publication Designer",
    challenge:
      "Every publication begins with a different communication problem: complex institutional content, multiple contributors, distinct audiences, and demanding production requirements. The shared challenge is to turn that material into a coherent reading experience that feels accessible, credible, and unmistakably connected to the organisation behind it.",
    approach:
      "The process starts by understanding the content, audience, purpose, and practical life of each publication. From there, a tailored editorial system brings together grid, hierarchy, typography, colour, imagery, navigation, and production rules. The visual language changes from project to project, while the underlying discipline keeps long-form information clear and consistent from cover to final page.",
    outcome:
      "The result is a varied body of books, annual reports, guides, and identity manuals that balance expression with utility. Each system gives its content a clear structure, strengthens the organisation's voice, and remains practical for readers, contributors, and production teams across print and digital use.",
    metrics: [
      { label: "Formats", value: "Books" },
      { label: "Focus", value: "Systems" },
      { label: "Archive", value: "25+ yrs" },
    ],
    highlights: [
      "An 84-page dietary guide translating scientific evidence into practical, culturally relevant public-health communication.",
      "A visual food system connecting five food groups with local produce, sustainable diets, meal ideas, and life-stage guidance.",
      "Editorial frameworks spanning health guides, annual reports, yearbooks, identity manuals, and institutional books.",
    ],
    galleryKicker: "Selected publications / 1999—2026",
    galleryTitle: "Books, brands, and systems",
    gallery: [
      {
        src: "/images/case-studies/publications/aprm-yearbook.jpg",
        alt: "Front and back cover design for the APRM Annual Yearbook 2017",
        caption: "APRM Yearbook — Cover system",
        format: "screen",
      },
      {
        src: "/images/case-studies/publications/iatf2018-participant-guide-mockup.png",
        alt: "Cover and selected editorial spreads from the IATF2018 Participant Book and Exhibitor Guide",
        caption: "IATF2018 — Participant Book and Exhibitor Guide",
        format: "publication-mockup",
      },
      {
        src: "/images/case-studies/publications/labat-brand-manual-v2.png",
        alt: "Overview of selected pages from the LABAT Africa corporate brand guidelines",
        caption: "LABAT Africa — Corporate brand guidelines system",
        format: "publication",
      },
      {
        src: "/images/case-studies/publications/fao-seychelles-dietary-guidelines-2020.jpg",
        alt: "Mockup of the Seychelles Food-Based Dietary Guidelines 2020 showing the cover and an open interior spread",
        caption: "FAO & Seychelles Ministry of Health — Food-Based Dietary Guidelines 2020",
        format: "publication-mockup",
      },
      {
        src: "/images/case-studies/publications/nhc-annual-report-2015-16.png",
        alt: "Mockup of the National Heritage Council of South Africa Annual Report 2015–16 showing the cover and interior spreads",
        caption: "National Heritage Council of South Africa — Annual Report 2015–16",
        format: "publication-mockup",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
