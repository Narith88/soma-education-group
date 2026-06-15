const telegramLink = "https://t.me/NewtonLearningCenter";

const sections = [
  {
    title: "About Us",
    href: "/about",
    label: "Mission & Vision",
    description:
      "Learn about SOMA Education Group, our mission, vision, story, and organization structure.",
  },
  {
    title: "Newton Learning Center",
    href: "/newton-learning-center",
    label: "Learning Center",
    description:
      "Academic support for students through courses, resources, books, and student-centered learning.",
  },
  {
    title: "Competitions",
    href: "/competitions",
    label: "STEM Competitions",
    description:
      "Explore CMPO, Mathematics Genius Olympiad, and E-Solver Cambodia.",
  },
  
  
  {
    title: "Achievements",
    href: "/achievements",
    label: "Student Success",
    description:
      "Celebrate student success stories and SOMA's educational impact.",
  },
  {
  title: "SOMA Student Success Center",
  href: "/student-success-center",
  label: "Student Support",
  description:
    "A support hub for students to ask about courses, advising, achievements, registration, opportunities, and collaboration.",
  },
  {
    title: "Charity",
    href: "/charity",
    label: "Community Support",
    description:
      "Discover SOMA's past charity work and ways to support our community projects.",
  },
  {
    title: "Opportunities",
    href: "/opportunities",
    label: "Join SOMA",
    description:
      "Join SOMA as a volunteer, team member, partner, or sponsor.",
  },
  {
    title: "Consulting",
    href: "/consulting",
    label: "Student Advising",
    description:
      "Guidance for major advising, university advising, and career planning.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 px-6 py-20 text-center text-white md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#2563eb66,transparent_35%),radial-gradient(circle_at_bottom_right,#dc262655,transparent_35%)]" />

        <div className="absolute left-10 top-20 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-20 right-12 h-40 w-40 rounded-full bg-red-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-200">
            Education • Competition • Guidance • Community
          </p>

          <h1 className="mx-auto max-w-5xl text-4xl font-bold tracking-tight md:text-6xl">
            Empowering Cambodian Students Through Education and Opportunity
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            SOMA Education Group supports students through academic learning,
            STEM competitions, consulting, charity, and student-centered
            opportunities.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#sections"
              className="rounded-full bg-white px-8 py-3 text-center font-semibold text-blue-800 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-blue-50 hover:shadow-lg"
            >
              Explore SOMA
            </a>

            <a
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 bg-white/10 px-8 py-3 text-center font-semibold text-white backdrop-blur transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-white/20 hover:shadow-lg"
            >
              Message Us on Telegram
            </a>
          </div>
        </div>
      </section>

      <section id="sections" className="mx-auto max-w-7xl px-6 py-16">
        <div className="charity-reveal mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            SOMA Main Sections
          </p>

          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Explore Our Education Ecosystem
          </h2>

          <p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-600">
            A simple and user-friendly structure for students, parents,
            volunteers, and partners to understand how SOMA Education Group
            supports Cambodian students.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {sections.map((section, index) => (
            <div
              key={section.title}
              className="charity-reveal"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <a
                href={section.href}
                className="charity-shine group block h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:border-blue-200 hover:shadow-2xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-lg font-bold text-blue-800 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-700 group-hover:text-white">
                  {index + 1}
                </div>

                <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                  {section.label}
                </p>

                <h3 className="mt-3 text-xl font-bold text-slate-950 transition-colors duration-300 group-hover:text-blue-800">
                  {section.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {section.description}
                </p>

                <p className="mt-6 text-sm font-semibold text-blue-700 transition-all duration-300 group-hover:translate-x-1">
                  Learn more →
                </p>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="charity-reveal rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl md:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Built for Students
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-950">
            Education, Opportunity, and Service in One Community
          </h2>

          <p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-600">
            SOMA Education Group brings together learning programs,
            competitions, consulting, charity projects, and youth-led
            opportunities to help students grow academically and personally.
          </p>

          <a
            href="/about"
            className="mt-8 inline-block rounded-full bg-blue-700 px-8 py-3 font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-blue-800 hover:shadow-lg"
          >
            Learn About SOMA
          </a>
        </div>
      </section>

      <footer className="bg-slate-950 px-6 py-8 text-center text-sm text-slate-300">
        © 2026 SOMA Education Group. All rights reserved.
      </footer>
    </main>
  );
}