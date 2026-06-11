const telegramLink = "https://t.me/NewtonLearningCenter";

const charityProjects = [
  {
    title: "Past Charity Project 1",
    description:
      "This section can describe a charity activity SOMA has completed in the past, such as supporting students, donating materials, or helping a local community.",
    impact: ["Students supported", "Learning materials shared", "Community involvement"],
  },
  {
    title: "Past Charity Project 2",
    description:
      "This section can highlight another charity project, including the purpose, location, people involved, and how the project helped students or communities.",
    impact: ["Educational support", "Volunteer participation", "Positive community impact"],
  },
  {
    title: "Future Charity Plan",
    description:
      "This section can introduce future charity goals, such as free tutoring, book donations, student scholarships, or school support programs.",
    impact: ["Future student support", "Community service", "Educational access"],
  },
];

export default function CharityPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-blue-800 px-6 py-10 text-white">
        <div className="mx-auto max-w-6xl">
          <a
            href="/"
            className="mb-8 inline-block rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white hover:bg-white/20"
          >
            ← Back to Home
          </a>

          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-100">
            SOMA Education Group
          </p>

          <h1 className="max-w-4xl text-4xl font-bold md:text-6xl">
            Charity & Community Support
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            SOMA Education Group believes education should also serve the
            community. Through charity and student-centered support, we aim to
            help Cambodian students access more learning opportunities.
          </p>

          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-blue-800 hover:bg-blue-50"
          >
            Support Us on Telegram
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold">Past Charity Work</h2>

          <p className="mt-3 max-w-3xl text-slate-600">
            This page will show SOMA’s charity activities, community projects,
            and educational support work. Photos, dates, locations, and project
            details can be added later.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {charityProjects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-6 flex h-48 items-center justify-center rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50">
                <div className="text-center">
                  <p className="text-lg font-bold text-blue-800">
                    Charity Photo
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    Add project photo later
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-blue-800">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {project.description}
              </p>

              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                {project.impact.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-800">
            Why Charity Matters to SOMA
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            SOMA’s charity work reflects our belief that education should be
            connected to service. By supporting students and communities, we
            hope to make learning more accessible, meaningful, and inclusive.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-bold text-slate-900">Access</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Helping students access learning resources and academic support.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-bold text-slate-900">Service</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Encouraging students and volunteers to serve their communities.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-bold text-slate-900">Impact</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Creating real educational and social impact for Cambodian students.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-800 px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">Support SOMA Charity Work</h2>

        <p className="mx-auto mt-4 max-w-2xl text-blue-100">
          If you want to support SOMA’s charity projects, student resources, or
          educational community work, contact us directly through Telegram.
        </p>

        <a
          href={telegramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-blue-800 hover:bg-blue-50"
        >
          Contact Us on Telegram
        </a>
      </section>
    </main>
  );
}