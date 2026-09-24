import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "./mobile-menu";
import {
  siFigma,
  siGmail,
  siGoogleanalytics,
  siGooglemarketingplatform,
  siNextdotjs,
  siNotion,
  siVercel,
  siWebflow,
  siWordpress,
  type SimpleIcon,
} from "simple-icons/icons";

const services = [
  {
    title: "Product Design",
    description:
      "Interfaces, user journeys, design systems, and prototypes shaped around real product outcomes.",
  },
  {
    title: "Web Development",
    description:
      "Fast Next.js builds with responsive layouts, thoughtful motion, and clean handoff-ready code.",
  },
  {
    title: "Brand Systems",
    description:
      "Practical identity foundations, visual direction, and reusable rules for consistent launches.",
  },
];

const process = [
  "Map the problem, audience, constraints, and the smallest useful launch.",
  "Shape the interface direction with a strong visual system and clear flows.",
  "Build, test, refine, and prepare the work for real users.",
];

const faqs = [
  {
    question: "What kind of projects does Blessing take on?",
    answer:
      "Portfolio sites, landing pages, SaaS interfaces, product refreshes, and brand-led web experiences.",
  },
  {
    question: "Can the site grow into case studies and a blog?",
    answer:
      "Yes. This structure is ready for richer project pages, writing, testimonials, and contact flows.",
  },
  {
    question: "Is this ready to customize?",
    answer:
      "Yes. The layout, sections, and copy are in place so the next step is swapping in real work and details.",
  },
];

const tools: {
  name: string;
  icon?: SimpleIcon;
  mark?: string;
}[] = [
  { name: "Figma", icon: siFigma },
  { name: "Adobe Creative Cloud", mark: "CC" },
  { name: "Webflow", icon: siWebflow },
  { name: "WordPress", icon: siWordpress },
  { name: "ChatGPT", mark: "GPT" },
  { name: "Codex", mark: "CX" },
  { name: "GA4", icon: siGoogleanalytics },
  { name: "DV360", icon: siGooglemarketingplatform },
  { name: "Notion", icon: siNotion },
  { name: "Gmail", icon: siGmail },
  { name: "Microsoft Teams", mark: "T" },
  { name: "Vercel", icon: siVercel },
  { name: "Next.js", icon: siNextdotjs },
];

const archiveTiles = [
  {
    title: "Minvanta",
    category: "Brand & campaign",
    year: "2026",
    image: "/images/case-studies/minvanta/cover.png",
    href: "/work/minvanta",
    layout: "archive-tile--wide",
    position: "center center",
  },
  {
    title: "Mineval Wizard",
    category: "Enterprise SaaS",
    year: "2026",
    image: "/images/case-studies/mineval-cover-thumbnail.png",
    href: "/work/mineval-wizard",
    layout: "archive-tile--wide",
    position: "center center",
  },
  {
    title: "InAfrica Network",
    category: "Mobile media",
    year: "2025",
    image: "/images/case-studies/inafrica-network-full.jpg",
    href: "/work/inafrica-network",
    layout: "archive-tile--wide",
    position: "center 38%",
  },
  {
    title: "Strategy into systems",
    category: "Creative direction",
    year: "1999—26",
    href: "/work/publication-systems",
    layout: "archive-tile--statement archive-tile--red",
  },
  {
    title: "IATF2018",
    category: "Trade ecosystem",
    year: "2018",
    image: "/images/case-studies/iatf-2018-thumbnail.jpg",
    href: "/work/iatf-2018",
    layout: "archive-tile--standard",
    position: "center 56%",
  },
  {
    title: "Product thinking",
    category: "UX / UI",
    year: "2026",
    href: "/work/mineval-wizard",
    layout: "archive-tile--standard archive-tile--dark",
  },
  {
    title: "People Who Never Were",
    category: "Constructed photography",
    year: "2026",
    image: "/images/case-studies/people-who-never-were/01-elder-portrait.png",
    href: "/work/people-who-never-were",
    layout: "archive-tile--standard",
    position: "center 42%",
  },
  {
    title: "Stories that move markets",
    category: "Editorial product",
    year: "2025",
    image: "/images/case-studies/inafrica-network.webp",
    href: "/work/inafrica-network",
    layout: "archive-tile--wide",
    position: "center center",
  },
  {
    title: "Across disciplines",
    category: "Brand / Digital / Space",
    year: "25+ yrs",
    href: "#services",
    layout: "archive-tile--statement archive-tile--light",
  },
  {
    title: "Publication Systems",
    category: "Editorial & print",
    year: "1999—26",
    image: "/images/case-studies/publications/aprm-yearbook.jpg",
    href: "/work/publication-systems",
    layout: "archive-tile--feature",
    position: "center center",
  },
];

export default function Home() {
  return (
    <main className="swiss-site min-h-screen overflow-x-clip" id="top">
      <header className="site-header sticky top-0 z-50">
        <nav className="site-nav mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
          <a className="wordmark" href="#top" aria-label="Tongwara Blessing Katsidzira, back to top">
            TBK<span className="accent">.</span>
          </a>
          <span className="nav-descriptor">Tongwara Blessing Katsidzira<br />Creative Director / UX &amp; Digital Product Lead</span>
          <div className="nav-links items-center gap-7 text-sm font-semibold">
            {["Work", "Bio", "Services", "Process", "Contact"].map((item) => (
              <a
                className="transition hover:text-red-700"
                href={item === "Work" ? "#archive" : `#${item.toLowerCase()}`}
                key={item}
              >
                {item}
              </a>
            ))}
          </div>
          <MobileMenu />
          <a
            className="nav-contact"
            href="mailto:hello@example.com"
          >
            <span>Let&apos;s talk</span><span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="swiss-hero mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="hero-meta"><span>Portfolio / 2026</span><span>Creative direction · Product · Digital</span><span>01 — Introduction</span></div>
        <div className="hero-center"><div className="hero-intro-line"><p className="hero-name">Tongwara Blessing Katsidzira</p><p className="hero-status"><span />Available for select projects</p></div><h1>Creative direction<br /><span>&amp; product</span><br />development<span className="accent">.</span></h1></div>
        <div className="hero-base"><div className="hero-description"><span>01 / 05</span><p>Designing thoughtful digital products and identities with clarity, purpose, and a point of view.</p></div><div className="hero-links"><a href="#archive">Explore selected work ↘</a><a href="#contact">Start a conversation ↗</a></div></div>
      </section>

      <section className="portrait-band" id="bio">
        <div className="portrait-inner mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="portrait-text">
            <span>The person behind the work</span>
            <p className="portrait-statement">25+ years across print, digital media, UX, communication design, art direction, and product design.</p>
            <p className="portrait-bio"><strong>Tongwara Blessing Katsidzira</strong> is a Creative Director, Product Developer and UX Designer with over 25 years of experience across advertising, branding, communication design and digital product development. As Creative Director at Pixykorner, he leads multidisciplinary projects spanning brand strategy, integrated campaigns, UX/UI and digital platforms. He holds an MA in User Experience Design from Falmouth University and combines a strong foundation in traditional design with human-centred design and emerging digital technologies.</p>
            <span>TBK — Johannesburg, South Africa</span>
          </div>
          <div className="portrait-photo"><Image alt="Portrait of Tongwara Blessing Katsidzira" className="object-cover object-center grayscale" fill priority sizes="(min-width: 768px) 60vw, 100vw" src="/images/bk-back.png" /></div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f6f6ef] py-10">
        <div className="mx-auto flex max-w-7xl min-w-0 flex-col gap-6 overflow-hidden px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Tools I use.
            </h2>
            <p className="max-w-[22rem] text-sm font-medium leading-6 text-black/55 sm:max-w-lg">
              A practical stack for design systems, product interfaces,
              analytics, collaboration, and deployment.
            </p>
          </div>

          <div className="tools-marquee min-w-0 overflow-hidden border-y border-black/10 py-5">
            <div className="tools-marquee__track flex w-max gap-4">
              {[...tools, ...tools].map((tool, index) => (
                <div
                  className="flex h-14 min-w-48 items-center gap-3 rounded-full border border-black/10 bg-white/70 px-5 text-neutral-500 grayscale transition hover:bg-white hover:text-neutral-900"
                  key={`${tool.name}-${index}`}
                >
                  <LogoMark tool={tool} />
                  <span className="whitespace-nowrap text-sm font-semibold">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="archive-section" id="archive" aria-labelledby="archive-title">
        <div className="archive-heading mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <p className="archive-kicker">Selected archive / 1999—2026</p>
          <h2 id="archive-title">A life in the work<span className="accent">.</span></h2>
          <p className="archive-intro">
            Brand systems, products, platforms, campaigns, and experiences
            shaped across industries and over time.
          </p>
        </div>

        <div className="archive-mosaic">
          {archiveTiles.map((tile) => (
            <Link
              className={`archive-tile ${tile.layout}`}
              href={tile.href}
              key={tile.title}
            >
              {tile.image ? (
                <Image
                  alt=""
                  aria-hidden="true"
                  className="archive-image"
                  fill
                  sizes="(min-width: 900px) 34vw, (min-width: 600px) 50vw, 100vw"
                  src={tile.image}
                  style={{ objectPosition: tile.position }}
                />
              ) : null}
              <span className="archive-shade" />
              <span className="archive-meta">
                <span>{tile.category}</span>
                <span>{tile.year}</span>
              </span>
              <span className="archive-name">{tile.title}</span>
              <span className="archive-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section
        className="bg-black px-5 py-24 text-white sm:px-8 lg:px-10"
        id="services"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
            Services that move from idea to launch.
          </h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 lg:grid-cols-3">
            {services.map((service) => (
              <article className="bg-black p-8" key={service.title}>
                <p className="text-2xl font-bold">{service.title}</p>
                <p className="mt-6 text-base leading-7 text-white/62">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-10" id="process">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-5xl font-bold tracking-tight sm:text-7xl">
              A clear path from brief to shipped.
            </h2>
            <p className="mt-7 text-lg font-semibold leading-8 text-black/60">
              Structured enough to keep momentum, flexible enough to protect the
              craft.
            </p>
          </div>
          <div className="grid gap-4">
            {process.map((step, index) => (
              <article
                className="grid gap-6 rounded-lg border border-black/10 bg-white p-6 md:grid-cols-[4rem_1fr]"
                key={step}
              >
                <span className="text-3xl font-bold text-lime-700">
                  0{index + 1}
                </span>
                <p className="text-2xl font-bold leading-snug">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="client-energy">
        <div className="client-energy-inner mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="client-energy-meta">
            <p>Client energy</p>
            <span>03 / Proof</span>
          </div>
          <div className="client-energy-content">
            <blockquote>
              Blessing brings calm strategy, sharp visuals, and the kind of
              build quality that makes a launch feel <span>effortless.</span>”
            </blockquote>
            <div className="client-energy-signature">
              <span>Client feedback</span>
              <span>Strategy · Design · Delivery</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <h2 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Questions before we start?
          </h2>
          <div className="grid gap-3">
            {faqs.map((faq) => (
              <details
                className="group rounded-lg border border-black/10 bg-[#f6f6ef] p-6"
                key={faq.question}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xl font-bold">
                  {faq.question}
                  <span className="text-3xl leading-none transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-5 max-w-2xl text-base leading-7 text-black/60">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer
        className="bg-[#101010] px-5 py-20 text-white sm:px-8 lg:px-10"
        id="contact"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-5xl text-[clamp(4rem,10vw,9rem)] font-bold leading-[0.88] tracking-tight">
            Have an idea? Let&apos;s talk.
          </h2>
          <div className="mt-12 flex flex-col justify-between gap-8 border-t border-white/10 pt-8 md:flex-row md:items-end">
            <a
              className="inline-flex h-14 w-fit items-center justify-center rounded-full bg-lime-300 px-7 text-sm font-bold text-black transition hover:bg-white"
              href="mailto:hello@example.com"
            >
              hello@example.com
            </a>
            <p className="max-w-md text-sm font-semibold leading-6 text-white/50">
              Replace the email, project details, and case studies with
              Blessing&apos;s real information when ready.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function LogoMark({ tool }: { tool: (typeof tools)[number] }) {
  if (tool.icon) {
    return (
      <svg
        aria-hidden="true"
        className="h-6 w-6 shrink-0"
        role="img"
        viewBox="0 0 24 24"
      >
        <path d={tool.icon.path} fill="currentColor" />
      </svg>
    );
  }

  return (
    <span
      aria-hidden="true"
      className="flex h-7 min-w-7 shrink-0 items-center justify-center rounded-md border border-current px-1 text-[0.65rem] font-bold leading-none tracking-tight"
    >
      {tool.mark}
    </span>
  );
}
