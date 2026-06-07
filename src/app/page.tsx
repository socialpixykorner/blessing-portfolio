export default function Home() {
  return (
    <main className="flex min-h-screen items-center bg-neutral-950 px-6 py-16 text-white sm:px-10 lg:px-16">
      <section className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
            Portfolio
          </p>
          <div className="space-y-5">
            <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-balance sm:text-6xl">
              Blessing Katsidzira
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-neutral-300">
              A modern Next.js portfolio starter, ready for projects, case
              studies, writing, and contact details.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex h-12 items-center justify-center rounded-md bg-emerald-300 px-5 text-sm font-semibold text-neutral-950 transition hover:bg-emerald-200"
              href="mailto:hello@example.com"
            >
              Get in touch
            </a>
            <a
              className="inline-flex h-12 items-center justify-center rounded-md border border-white/15 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
              href="#projects"
            >
              View projects
            </a>
          </div>
        </div>

        <div
          id="projects"
          className="grid gap-4 rounded-lg border border-white/10 bg-white/[0.03] p-4"
        >
          {["Featured project", "Case study", "About"].map((item) => (
            <article
              className="rounded-md border border-white/10 bg-neutral-900 p-5"
              key={item}
            >
              <p className="text-sm font-medium text-emerald-300">{item}</p>
              <h2 className="mt-3 text-xl font-semibold">
                Add your next portfolio section
              </h2>
              <p className="mt-2 text-sm leading-6 text-neutral-400">
                Replace this starter content with your work, story, and links.
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
