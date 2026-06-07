import Link from "next/link";
import { notFound } from "next/navigation";
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
      title: "Project not found | Blessing Katsidzira",
    };
  }

  return {
    title: `${project.title} | Blessing Katsidzira`,
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
    <main className="min-h-screen overflow-x-hidden bg-[#f6f6ef] text-[#111111]">
      <header className="border-b border-black/10 bg-[#f6f6ef]">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
          <Link className="text-base font-black tracking-tight" href="/#top">
            Blessing
          </Link>
          <Link
            className="inline-flex h-10 items-center rounded-full border border-black/15 bg-white px-4 text-sm font-bold shadow-sm transition hover:bg-lime-300"
            href="/#work"
          >
            Back to work
          </Link>
        </nav>
      </header>

      <section className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
        <div className="flex min-h-[560px] flex-col justify-between">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-black">
              {project.type}
            </span>
            <span className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-black">
              {project.year}
            </span>
          </div>

          <div className="space-y-8">
            <h1 className="text-[clamp(4rem,12vw,10rem)] font-black leading-[0.86] tracking-tight">
              {project.title}
            </h1>
            <p className="max-w-2xl border-t border-black/15 pt-7 text-2xl font-semibold leading-9 text-black/68">
              {project.summary}
            </p>
          </div>
        </div>

        <div
          className="overflow-hidden rounded-lg border border-black/10 p-5 shadow-2xl shadow-black/10"
          style={{ backgroundColor: project.accentHex }}
        >
          <div className="flex items-center justify-between text-xs font-black uppercase tracking-[0.18em]">
            <span>Case study preview</span>
            <span>{project.timeline}</span>
          </div>
          <div className="mt-24 rounded-lg bg-[#101010] p-5 text-white">
            <div className="grid gap-4 sm:grid-cols-3">
              {project.metrics.map((metric) => (
                <div
                  className="rounded-md border border-white/10 bg-white/[0.08] p-4"
                  key={metric.label}
                >
                  <p className="text-sm text-white/55">{metric.label}</p>
                  <p className="mt-8 text-4xl font-black">{metric.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 h-44 rounded-md border border-white/10 bg-white/[0.08] p-4">
              <div className="h-14 rounded bg-white/15" />
              <div className="mt-4 grid grid-cols-3 gap-3">
                <span className="h-12 rounded bg-white/10" />
                <span className="h-12 rounded bg-white/10" />
                <span className="h-12 rounded bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <InfoCard label="Role" value={project.role} />
          <InfoCard label="Timeline" value={project.timeline} />
          <InfoCard label="Scope" value={project.scope.join(", ")} />
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <h2 className="text-5xl font-black tracking-tight sm:text-7xl">
            What the project needed.
          </h2>
          <div className="grid gap-4">
            <StoryBlock title="Challenge" body={project.challenge} />
            <StoryBlock title="Approach" body={project.approach} />
            <StoryBlock title="Outcome" body={project.outcome} />
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-24 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-4xl text-5xl font-black tracking-tight sm:text-7xl">
            Highlights from the dummy build.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 lg:grid-cols-3">
            {project.highlights.map((highlight, index) => (
              <article className="bg-black p-8" key={highlight}>
                <p className="font-mono text-sm font-black text-lime-300">
                  0{index + 1}
                </p>
                <p className="mt-6 text-2xl font-black leading-snug">
                  {highlight}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 rounded-lg bg-lime-300 p-8 md:flex-row md:items-center">
          <h2 className="max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">
            Like this direction? Let&apos;s shape the next project.
          </h2>
          <a
            className="inline-flex h-14 w-fit items-center justify-center rounded-full bg-black px-7 text-sm font-black text-white transition hover:bg-white hover:text-black"
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
      <p className="font-mono text-sm font-black uppercase tracking-[0.18em] text-black/45">
        {label}
      </p>
      <p className="mt-6 text-2xl font-black leading-tight">{value}</p>
    </article>
  );
}

function StoryBlock({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-lg border border-black/10 bg-white p-7">
      <p className="font-mono text-sm font-black uppercase tracking-[0.18em] text-lime-700">
        {title}
      </p>
      <p className="mt-5 text-2xl font-black leading-snug text-black/85">
        {body}
      </p>
    </article>
  );
}
