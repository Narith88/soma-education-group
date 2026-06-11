const telegramLink = "https://t.me/NewtonLearningCenter";

const opportunities = [
  {
    title: "Volunteer",
    description:
      "Join SOMA as a volunteer to support tutoring, competitions, charity projects, student events, and community activities.",
    details: [
      "Help with events and competitions",
      "Support free tutoring programs",
      "Assist with student communication",
      "Contribute to charity and community work",
    ],
  },
  {
    title: "Team Recruitment",
    description:
      "Become part of the SOMA team and help build educational projects for Cambodian students.",
    details: [
      "Academic team",
      "Marketing and media team",
      "Operations team",
      "External relations team",
    ],
  },
  {
    title: "Partnership",
    description:
      "Partner with SOMA to support schools, student programs, competitions, workshops, and educational activities.",
    details: [
      "School collaboration",
      "Educational organization partnership",
      "Workshop collaboration",
      "Community program support",
    ],
  },
  {
    title: "Sponsorship",
    description:
      "Support SOMA programs by sponsoring competitions, student resources, charity projects, and educational events.",
    details: [
      "Sponsor competitions",
      "Support student awards",
      "Help fund learning materials",
      "Support charity projects",
    ],
  },
];

export default function OpportunitiesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-blue-800 px-6 py-10 text-white">
        <div className="mx-auto max-w-6xl">
          <a
            href="/"
            className="mb-8 inline-block rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-white/20"
          >
            ← Back to Home
          </a>

          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-100">
            SOMA Education Group
          </p>

          <h1 className="max-w-4xl text-4xl font-bold md:text-6xl">
            Opportunities
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            SOMA Education Group welcomes students, volunteers, team members,
            partners, and sponsors who want to support education and student
            development in Cambodia.
          </p>

          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-blue-800 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-blue-50 hover:shadow-lg"
          >
            Contact Us on Telegram
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold">Join or Support SOMA</h2>

          <p className="mt-3 max-w-3xl text-slate-600">
            Choose the opportunity that fits you best. For now, all
            applications and questions are handled directly through Telegram.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {opportunities.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:border-blue-200 hover:shadow-xl"
            >
              <div className="mb-6 flex h-40 items-center justify-center rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50 transition-all duration-300 ease-out group-hover:bg-blue-100">
                <div className="text-center">
                  <p className="text-lg font-bold text-blue-800">
                    Image Space
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    Add photo or icon later
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-blue-800">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {item.description}
              </p>

              <ul className="mt-6 space-y-3 text-slate-600">
                {item.details.map((detail) => (
                  <li key={detail}>• {detail}</li>
                ))}
              </ul>

              <a
                href={telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-full bg-blue-700 px-6 py-3 font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-blue-800 hover:shadow-lg"
              >
                Ask About {item.title}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
          <h2 className="text-2xl font-bold text-blue-800">Who Can Join?</h2>

          <p className="mt-4 leading-7 text-slate-600">
            SOMA welcomes high school students, university students, teachers,
            young professionals, schools, organizations, and sponsors who share
            our goal of supporting Cambodian education.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-blue-50 hover:shadow-md">
              <h3 className="font-bold text-slate-900">Students</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Join as volunteers, learners, competitors, or student leaders.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-blue-50 hover:shadow-md">
              <h3 className="font-bold text-slate-900">Educators</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Support tutoring, resources, academic content, or workshops.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-blue-50 hover:shadow-md">
              <h3 className="font-bold text-slate-900">Partners</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Collaborate with SOMA through schools, sponsorships, and
                educational projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-800 px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">Ready to Join SOMA?</h2>

        <p className="mx-auto mt-4 max-w-2xl text-blue-100">
          Contact us through Telegram and tell us which opportunity you are
          interested in: volunteer, team recruitment, partnership, or
          sponsorship.
        </p>

        <a
          href={telegramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-blue-800 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-blue-50 hover:shadow-lg"
        >
          Message SOMA on Telegram
        </a>
      </section>
    </main>
  );
}