const telegramLink = "https://t.me/NewtonLearningCenter";

const sections = [
  {
    title: "About Us",
    href: "/about",
    description:
      "Learn about SOMA Education Group, our mission, vision, story, and organization structure.",
  },
  {
    title: "Newton Learning Center",
    href: "/newton-learning-center",
    description:
      "Academic support for students through courses, free tutoring, resources, books, and registration.",
  },
  {
    title: "Competitions",
    href: "/competitions",
    description:
      "Explore CMPO, Mathematics Genius Olympiad, and E-Solver Cambodia.",
  },
  {
    title: "Opportunities",
    href: "/opportunities",
    description:
      "Join SOMA as a volunteer, team member, partner, or sponsor.",
  },
  {
    title: "Consulting",
    href: "/consulting",
    description:
      "Guidance for major advising, university advising, and career planning.",
  },
  {
    title: "Charity",
    href: "/charity",
    description:
      "Discover SOMA's past charity work and ways to support our community projects.",
  },
  {
    title: "Achievements",
    href: "/achievements",
    description:
      "Celebrate student success stories and SOMA's educational impact.",
  },
  {
    title: "Contact Us",
    href: "/contact",
    description:
      "Contact SOMA directly through Telegram for questions, registration, or collaboration.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-7xl px-6 py-20 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-700">
          Education • Competition • Guidance • Community
        </p>

        <h2 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
          Empowering Cambodian Students Through Education and Opportunity
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
          SOMA Education Group supports students through academic learning, STEM
          competitions, consulting, charity, and student-centered opportunities.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#sections"
            className="rounded-full bg-blue-700 px-8 py-3 font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-blue-800 hover:shadow-lg"
          >
            Explore SOMA
          </a>

          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-blue-700 px-8 py-3 font-semibold text-blue-700 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-blue-50 hover:shadow-md"
          >
            Message Us on Telegram
          </a>
        </div>
      </section>

      <section id="sections" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-10 text-center">
          <h3 className="text-3xl font-bold">Our Main Sections</h3>

          <p className="mt-3 text-slate-600">
            A simple and user-friendly structure for students, parents,
            volunteers, and partners.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {sections.map((section) => (
            <a
              key={section.title}
              href={section.href}
              className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:border-blue-200 hover:shadow-xl"
            >
              <h4 className="text-xl font-bold text-blue-800">
                {section.title}
              </h4>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {section.description}
              </p>

              <p className="mt-5 text-sm font-semibold text-blue-700">
                Learn more →
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-blue-800 px-6 py-16 text-center text-white">
        <h3 className="text-3xl font-bold">Contact SOMA Education Group</h3>

        <p className="mx-auto mt-4 max-w-2xl text-blue-100">
          For registration, consulting, volunteering, partnership, sponsorship,
          or general questions, please contact us directly through Telegram.
        </p>

        <a
          href={telegramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-blue-800 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-blue-50 hover:shadow-lg"
        >
          Open Telegram
        </a>
      </section>

      <footer className="bg-slate-950 px-6 py-8 text-center text-sm text-slate-300">
        © 2026 SOMA Education Group. All rights reserved.
      </footer>
    </main>
  );
}