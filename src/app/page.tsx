import Image from "next/image";
import Link from "next/link";
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

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f6f6ef] text-[#111111]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f6f6ef]/90 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
          <a className="text-base font-black tracking-tight" href="#top">
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
            className="inline-flex h-10 shrink-0 items-center rounded-full border border-black/15 bg-white px-4 text-sm font-bold shadow-sm transition hover:bg-lime-300"
            href="mailto:hello@example.com"
          >
            Start a project
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
            <h1 className="max-w-full text-[clamp(3.15rem,10vw,8.2rem)] font-black leading-[0.88] tracking-tight lg:max-w-5xl">
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
                25+ years across print, digital media, UX, communication
                design, art direction, and product design.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                <a
                  className="inline-flex h-12 items-center justify-center rounded-full bg-black px-6 text-sm font-black text-white transition hover:bg-lime-700"
                  href="#work"
                >
                  View work
                </a>
                <a
                  className="inline-flex h-12 items-center justify-center rounded-full border border-black/15 bg-white px-6 text-sm font-black transition hover:bg-lime-300"
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
              <p className="text-sm font-black uppercase tracking-[0.16em] text-lime-300">
                Focus
              </p>
              <p className="mt-10 text-5xl font-black leading-none tracking-tight">
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

      <section
        className="border-y border-black/10 bg-white px-5 py-20 sm:px-8 lg:px-10"
        id="work"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-5xl font-black tracking-tight sm:text-7xl">
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
                  <p className="absolute bottom-5 left-5 right-5 text-sm font-black uppercase tracking-[0.16em]">
                    {project.type}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-sm text-black/50">
                    0{index + 1} / {project.year}
                  </p>
                  <h3 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                    {project.title}
                  </h3>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-black/65">
                    {project.summary}
                  </p>
                </div>
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-black/15 text-xl font-black transition group-hover:bg-black group-hover:text-white">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-24 text-white sm:px-8 lg:px-10" id="services">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-4xl text-5xl font-black tracking-tight sm:text-7xl">
            Services that move from idea to launch.
          </h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 lg:grid-cols-3">
            {services.map((service) => (
              <article className="bg-black p-8" key={service.title}>
                <p className="text-2xl font-black">{service.title}</p>
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
            <h2 className="text-5xl font-black tracking-tight sm:text-7xl">
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
                <span className="font-mono text-3xl font-black text-lime-700">
                  0{index + 1}
                </span>
                <p className="text-2xl font-black leading-snug">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-lime-300 px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <p className="font-mono text-sm font-black uppercase tracking-[0.18em]">
            Client energy
          </p>
          <blockquote className="text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            “Blessing brings calm strategy, sharp visuals, and the kind of build
            quality that makes a launch feel effortless.”
          </blockquote>
        </div>
      </section>

      <section className="bg-white px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <h2 className="text-5xl font-black tracking-tight sm:text-7xl">
            Questions before we start?
          </h2>
          <div className="grid gap-3">
            {faqs.map((faq) => (
              <details
                className="group rounded-lg border border-black/10 bg-[#f6f6ef] p-6"
                key={faq.question}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xl font-black">
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
          <h2 className="max-w-5xl text-[clamp(4rem,10vw,9rem)] font-black leading-[0.88] tracking-tight">
            Have an idea? Let&apos;s talk.
          </h2>
          <div className="mt-12 flex flex-col justify-between gap-8 border-t border-white/10 pt-8 md:flex-row md:items-end">
            <a
              className="inline-flex h-14 w-fit items-center justify-center rounded-full bg-lime-300 px-7 text-sm font-black text-black transition hover:bg-white"
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
