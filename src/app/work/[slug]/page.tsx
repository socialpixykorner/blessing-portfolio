import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { getProject, projects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project not found | Tongwara Blessing Katsidzira",
    };
  }

  return {
    title: `${project.title} | Tongwara Blessing Katsidzira`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className={`case-site case-site--${project.slug} min-h-screen overflow-x-clip`}>
      <header className="case-header sticky top-0 z-50">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
          <Link className="wordmark" href="/#top" aria-label="Tongwara Blessing Katsidzira, back to homepage">
            TBK<span className="accent">.</span>
          </Link>
          <Link
            className="case-back"
            href="/#archive"
          >
            ← Back to work
          </Link>
        </nav>
      </header>

      <section className="case-hero mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
        <div className="flex min-h-[560px] flex-col justify-between">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-bold">
              {project.type}
            </span>
            <span className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-bold">
              {project.year}
            </span>
          </div>

          <div className="space-y-8">
            <h1 className="text-[clamp(4rem,12vw,10rem)] font-bold leading-[0.86] tracking-tight">
              {project.title}
            </h1>
            <p className="max-w-2xl border-t border-black/15 pt-7 text-2xl font-semibold leading-9 text-black/68">
              {project.summary}
            </p>
          </div>
        </div>

        <div
          className="case-visual"
          style={{ "--project-accent": project.accentHex } as CSSProperties}
        >
          <div className="case-visual-bar">
            <span><i aria-hidden="true" />Selected project visual</span>
            <span>{project.timeline}</span>
          </div>
          <div className="case-visual-media">
            <Image
              alt={`${project.title} portfolio case study visual`}
              className="case-visual-image"
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              src={project.image}
            />
            <span className="case-visual-index">01 / Project frame</span>
            <div className="case-metrics">
              {project.metrics.map((metric, index) => (
                <div key={metric.label}>
                  <span>0{index + 1}</span>
                  <p>{metric.label}</p>
                  <p>{metric.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="case-facts border-y border-black/10 bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <InfoCard label="Role" value={project.role} />
          <InfoCard label="Timeline" value={project.timeline} />
          <InfoCard label="Scope" value={project.scope.join(", ")} />
        </div>
      </section>

      <section className="case-story px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <h2 className="text-5xl font-bold tracking-tight sm:text-7xl">
            What the project needed.
          </h2>
          <div className="grid gap-4">
            <StoryBlock title="Challenge" body={project.challenge} />
            <StoryBlock title="Approach" body={project.approach} />
            <StoryBlock title="Outcome" body={project.outcome} />
          </div>
        </div>
      </section>

      {project.gallery ? (
        <section className="case-gallery" aria-labelledby="gallery-title">
          <div className="case-gallery-heading mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <p>Selected applications / {project.year}</p>
            <h2 id="gallery-title">The system in motion<span className="accent">.</span></h2>
          </div>
          <div className="case-gallery-grid">
            {project.gallery.map((visual) => (
              <figure className={`case-gallery-item case-gallery-item--${visual.format}`} key={visual.src}>
                <div className="case-gallery-frame">
                  <div className="case-gallery-image">
                    <Image
                      alt={visual.alt}
                      fill
                      sizes={visual.format === "mobile" ? "(min-width: 900px) 28vw, 70vw" : "100vw"}
                      src={visual.src}
                    />
                  </div>
                </div>
                <figcaption>{visual.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      <section className="case-highlights bg-black px-5 py-24 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
            Highlights from the work.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 lg:grid-cols-3">
            {project.highlights.map((highlight, index) => (
              <article className="bg-black p-8" key={highlight}>
                <p className="text-sm font-bold text-lime-300">0{index + 1}</p>
                <p className="mt-6 text-2xl font-bold leading-snug">
                  {highlight}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-cta px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 rounded-lg bg-lime-300 p-8 md:flex-row md:items-center">
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            Like this direction? Let&apos;s shape the next project.
          </h2>
          <a
            className="inline-flex h-14 w-fit items-center justify-center rounded-full bg-black px-7 text-sm font-bold text-white transition hover:bg-white hover:text-black"
            href="mailto:hello@example.com"
          >
            Start a project
          </a>
        </div>
      </section>
    </main>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <article className="rounded-lg border border-black/10 bg-[#f6f6ef] p-6">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">
        {label}
      </p>
      <p className="mt-6 text-2xl font-bold leading-tight">{value}</p>
    </article>
  );
}

function StoryBlock({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-lg border border-black/10 bg-white p-7">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-lime-700">
        {title}
      </p>
      <p className="mt-5 text-xl font-normal leading-8 text-black/65 sm:text-2xl sm:leading-9">
        {body}
      </p>
    </article>
  );
}
