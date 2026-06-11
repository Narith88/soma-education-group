const telegramLink = "https://t.me/NewtonLearningCenter";

const studentSuccess = [
  {
    name: "Student Success Story 1",
    achievement: "Academic improvement and exam preparation",
    description:
      "This section can highlight students who improved through SOMA programs, Newton Learning Center support, competitions, or mentoring.",
  },
  {
    name: "Student Success Story 2",
    achievement: "Competition participation and growth",
    description:
      "This section can show students who joined SOMA competitions such as CMPO, MGO, or E-Solver Cambodia and developed stronger problem-solving skills.",
  },
  {
    name: "Student Success Story 3",
    achievement: "Leadership, volunteering, or community impact",
    description:
      "This section can recognize students who contributed to SOMA through volunteering, tutoring, organizing, or charity work.",
  },
];

export default function AchievementsPage() {
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
            Achievements
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            SOMA Education Group celebrates student success, academic growth,
            competition participation, leadership, and community impact.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold">Student Success</h2>

          <p className="mt-3 max-w-3xl text-slate-600">
            This page will showcase students, teams, and milestones connected
            to SOMA Education Group. Photos, certificates, competition results,
            and testimonials can be added later.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {studentSuccess.map((student) => (
            <div
              key={student.name}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-6 flex h-48 items-center justify-center rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50">
                <div className="text-center">
                  <p className="text-lg font-bold text-blue-800">
                    Photo Space
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    Student photo or certificate
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-blue-800">
                {student.name}
              </h3>

              <p className="mt-2 font-semibold text-slate-800">
                {student.achievement}
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                {student.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-800">
            Future Achievement Categories
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-bold text-slate-900">Competition Winners</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Add CMPO, MGO, and E-Solver Cambodia winners, finalists, and
                honorable mentions.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-bold text-slate-900">Student Testimonials</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Add quotes from students who benefited from SOMA programs,
                tutoring, consulting, or competitions.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-bold text-slate-900">SOMA Milestones</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Add important events, charity projects, workshops, and program
                launches.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-bold text-slate-900">Community Impact</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Add numbers such as students supported, volunteers involved,
                resources shared, or charity projects completed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-800 px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">
          Share a SOMA Success Story
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-blue-100">
          If you are a student, volunteer, teacher, or partner connected with
          SOMA, contact us through Telegram to share your story.
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