import Image from "next/image";
import Link from "next/link";
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
import { projects } from "@/lib/projects";

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

const projectTickerCards = [
  {
    title: "Solar Commerce",
    category: "Web platform",
    year: "2024",
    descriptor: "Product pages, quoting flows, and responsive storefront UX.",
    visual: "from-[#d9a15f] via-[#f6f6ef] to-[#53613a]",
  },
  {
    title: "EventFlow",
    category: "Registration",
    year: "2023",
    descriptor: "Ticketing journeys, attendee capture, and event dashboards.",
    visual: "from-[#f6f6ef] via-[#d7e7dd] to-[#2f6f67]",
  },
  {
    title: "Market Pulse",
    category: "Analytics",
    year: "2022",
    descriptor: "Executive reporting views for campaign and media performance.",
    visual: "from-[#101010] via-[#2c2c2c] to-[#bef264]",
  },
  {
    title: "Foodline Africa",
    category: "Ecommerce",
    year: "2021",
    descriptor: "Category landing pages, product cards, and checkout moments.",
    visual: "from-[#e8b142] via-[#f6f6ef] to-[#cc3a2f]",
  },
  {
    title: "Five-A-Side",
    category: "Sports media",
    year: "2020",
    descriptor: "Campaign visuals, event pages, and fan engagement screens.",
    visual: "from-[#101010] via-[#25331f] to-[#9ee633]",
  },
  {
    title: "Civic Connect",
    category: "Public sector",
    year: "2019",
    descriptor: "Service information architecture and stakeholder portals.",
    visual: "from-[#f6f6ef] via-[#d8d9d2] to-[#55616d]",
  },
  {
    title: "Trade Summit",
    category: "Brand system",
    year: "2018",
    descriptor: "Identity, signage, communications, and digital touchpoints.",
    visual: "from-[#e3294f] via-[#f6f6ef] to-[#101010]",
  },
  {
    title: "Creator Desk",
    category: "SaaS concept",
    year: "2017",
    descriptor: "Creator workflows, content planning, and dashboard patterns.",
    visual: "from-[#111111] via-[#302620] to-[#d9a15f]",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f6f6ef] text-[#111111]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f6f6ef]/90 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
          <a className="text-base font-bold tracking-tight" href="#top">
            Blessing
          </a>
          <div className="hidden items-center gap-7 text-sm font-semibold md:flex">
            {["Work", "Services", "Process", "Contact"].map((item) => (
              <a
                className="transition hover:text-lime-700"
                href={`#${item.toLowerCase()}`}
                key={item}
              >
                {item}
              </a>
            ))}
          </div>
          <a
            className="inline-flex h-10 shrink-0 items-center rounded-full border border-black/15 bg-white px-3 text-xs font-bold shadow-sm transition hover:bg-lime-300 sm:px-4 sm:text-sm"
            href="mailto:hello@example.com"
          >
            <span className="sm:hidden">Start</span>
            <span className="hidden sm:inline">Start a project</span>
          </a>
        </nav>
      </header>

      <section
        className="mx-auto grid w-full max-w-7xl min-w-0 gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-10"
        id="top"
      >
        <div className="flex min-h-[620px] min-w-0 flex-col justify-between">
          <div className="flex w-fit items-center gap-3 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-bold shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-lime-400" />
            Available for select projects
          </div>

          <div className="space-y-8">
            <h1 className="max-w-full text-[clamp(3.15rem,10vw,8.2rem)] font-bold leading-[0.88] tracking-tight lg:max-w-5xl">
              {["Creative", "director", "and", "product", "developer."].map(
                (word) => (
                  <span className="block lg:inline" key={word}>
                    {word}{" "}
                  </span>
                ),
              )}
            </h1>
            <div className="grid gap-7 border-t border-black/15 pt-7 md:grid-cols-[0.85fr_1fr]">
              <p className="max-w-full text-xl font-semibold leading-8 text-black/70">
                25+ years across print, digital media, UX, communication design,
                art direction, and product design.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                <a
                  className="inline-flex h-12 items-center justify-center rounded-full bg-black px-6 text-sm font-bold text-white transition hover:bg-lime-700"
                  href="#work"
                >
                  View work
                </a>
                <a
                  className="inline-flex h-12 items-center justify-center rounded-full border border-black/15 bg-white px-6 text-sm font-bold transition hover:bg-lime-300"
                  href="#contact"
                >
                  Start a project
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex min-h-[620px] min-w-0 flex-col overflow-hidden rounded-lg bg-[#101010] p-5 text-white shadow-2xl shadow-black/20">
          <Image
            alt="Blessing Katsidzira portrait behind dark vertical panels"
            className="absolute inset-0 h-full w-full object-cover object-center"
            fill
            priority
            sizes="(min-width: 1024px) 46vw, 100vw"
            src="/images/bk-back.png"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/5 to-black/78" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-black/20" />

          <div className="relative flex items-center justify-between border-b border-white/10 pb-4 text-xs font-bold uppercase tracking-[0.18em] text-white/65">
            <span>Portrait system</span>
            <span>BK</span>
          </div>
          <div className="relative grid flex-1 content-between gap-5 pt-8">
            <div className="max-w-xs rounded-md border border-white/10 bg-black/50 p-5 backdrop-blur">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-lime-300">
                Focus
              </p>
              <p className="mt-10 text-5xl font-bold leading-none tracking-tight">
                Design. Build. Launch.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {["Product design", "Web builds", "Brand systems"].map(
                (item, index) => (
                  <div
                    className="rounded-md border border-white/10 bg-black/55 px-4 py-4 backdrop-blur"
                    key={item}
                  >
                    <p className="text-sm font-semibold text-white">{item}</p>
                    <p className="mt-8 text-sm text-lime-300">0{index + 1}</p>
                  </div>
                ),
              )}
            </div>
          </div>
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

      <section aria-label="Project archive ticker" className="bg-[#101010] py-8">
        <div className="mx-auto flex max-w-7xl min-w-0 flex-col gap-5 overflow-hidden px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">
              Project archive
            </p>
            <p className="max-w-md text-sm font-medium leading-6 text-white/50">
              A rolling snapshot of dummy project formats shaped over the
              years.
            </p>
          </div>

          <div className="project-card-marquee min-w-0 overflow-hidden">
            <div className="project-marquee__track flex w-max gap-5">
              {[...projectTickerCards, ...projectTickerCards].map(
                (project, index) => (
                  <article
                    className="group w-[18.5rem] overflow-hidden rounded-lg border border-white/10 bg-[#f6f6ef] p-2 text-black shadow-2xl shadow-black/25 sm:w-[25rem]"
                    key={`${project.title}-${index}`}
                  >
                    <div
                      className={`relative h-28 overflow-hidden rounded-md bg-gradient-to-br ${project.visual} sm:h-36`}
                    >
                      <div className="absolute inset-x-4 top-4 h-3 rounded-full bg-white/70" />
                      <div className="absolute bottom-4 left-4 right-4 grid grid-cols-[1.2fr_0.8fr] gap-3">
                        <div className="space-y-2 rounded-md bg-white/75 p-3 shadow-sm">
                          <div className="h-2 w-16 rounded-full bg-black/70" />
                          <div className="h-2 w-24 rounded-full bg-black/20" />
                          <div className="h-2 w-14 rounded-full bg-lime-500" />
                        </div>
                        <div className="grid gap-2">
                          <span className="rounded-md bg-black/80" />
                          <span className="rounded-md bg-white/55" />
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4 px-2 py-4 sm:grid-cols-[1fr_auto] sm:items-end">
                      <div>
                        <div className="flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-black/45">
                          <span>{project.category}</span>
                          <span className="h-1.5 w-1.5 rounded-full bg-lime-500" />
                          <span>{project.year}</span>
                        </div>
                        <h3 className="mt-2 text-2xl font-bold tracking-tight">
                          {project.title}
                        </h3>
                        <p className="mt-2 max-w-sm text-sm font-medium leading-6 text-black/55">
                          {project.descriptor}
                        </p>
                      </div>
                      <span className="hidden h-10 w-10 items-center justify-center rounded-full border border-black/15 text-lg font-bold transition group-hover:bg-black group-hover:text-white sm:flex">
                        ↗
                      </span>
                    </div>
                  </article>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-y border-black/10 bg-white px-5 py-20 sm:px-8 lg:px-10"
        id="work"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-5xl font-bold tracking-tight sm:text-7xl">
              Selected case studies.
            </h2>
            <p className="max-w-sm text-base font-semibold leading-7 text-black/60">
              Real portfolio work spanning enterprise SaaS, mobile media, and
              Pan-African event ecosystems.
            </p>
          </div>
          <div className="grid gap-5">
            {projects.map((project, index) => (
              <Link
                href={`/work/${project.slug}`}
                className="group grid gap-6 rounded-lg border border-black/10 bg-[#f6f6ef] p-4 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 md:grid-cols-[0.85fr_1fr_0.2fr] md:items-center"
                key={project.title}
              >
                <div className="relative min-h-64 overflow-hidden rounded-md bg-black text-white">
                  <Image
                    alt={`${project.title} case study preview`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    fill
                    sizes="(min-width: 768px) 32vw, 100vw"
                    src={project.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/10" />
                  <p className="absolute bottom-5 left-5 right-5 text-sm font-bold uppercase tracking-[0.16em]">
                    {project.type}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-black/50">
                    0{index + 1} / {project.year}
                  </p>
                  <h3 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                    {project.title}
                  </h3>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-black/65">
                    {project.summary}
                  </p>
                </div>
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-black/15 text-xl font-bold transition group-hover:bg-black group-hover:text-white">
                  ↗
                </span>
              </Link>
            ))}
          </div>
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

      <section className="border-y border-black/10 bg-lime-300 px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em]">
            Client energy
          </p>
          <blockquote className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            “Blessing brings calm strategy, sharp visuals, and the kind of build
            quality that makes a launch feel effortless.”
          </blockquote>
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
