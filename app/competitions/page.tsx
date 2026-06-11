const telegramLink = "https://t.me/NewtonLearningCenter";

const competitions = [
  {
    name: "E-Solver Cambodia",
    shortName: "E-SC",
    image: "/images/e-solver-logo.png",
    logoWidth: "5000px",
    channelLink: "https://t.me/esolvercambodianews",
    infoHref: "/competitions/e-solver-cambodia",
    description:
      "E-Solver Cambodia is a student-centered competition project that promotes creative problem-solving, academic teamwork, and real-world thinking.",
    focus: ["Problem Solving", "Teamwork", "Creativity", "STEM Skills"],
  },
  {
    name: "Cambodia Mathematics and Physics Olympiad",
    shortName: "CMPO",
    image: "/images/cmpo-logo.png",
    logoWidth: "350px",
    channelLink: "https://t.me/CMPO2026_discussion",
    infoHref: "/competitions/cmpo",
    description:
      "CMPO is a competition platform designed to challenge and inspire Cambodian students in mathematics and physics. It encourages problem-solving, logical thinking, and academic excellence.",
    focus: ["Mathematics", "Physics", "Problem Solving", "Olympiad Thinking"],
  },
  {
    name: "Mathematics Genius Olympiad",
    shortName: "MGO",
    image: "/images/mgo-logo.png",
    logoWidth: "350px",
    channelLink: "https://t.me/mathgeniusolympiad",
    infoHref: "/competitions/mgo",
    description:
      "MGO focuses on developing students' mathematical thinking, creativity, and confidence through challenging problems and competition-based learning.",
    focus: ["Mathematics", "Critical Thinking", "Competition Practice"],
  },
];

export default function CompetitionsPage() {
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
            SOMA Competitions
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            SOMA Education Group organizes and supports academic competitions
            that help Cambodian students grow in mathematics, physics,
            problem-solving, teamwork, and confidence.
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
          <h2 className="text-3xl font-bold">Our Competitions</h2>

          <p className="mt-3 max-w-3xl text-slate-600">
            Each competition under SOMA has its own purpose, identity, and
            student community. Students can join each competition channel for
            announcements, updates, and future registration information.
          </p>
        </div>

        <div className="space-y-8">
          {competitions.map((competition) => (
            <div
              key={competition.shortName}
              className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:border-blue-200 hover:shadow-xl md:grid-cols-[300px_1fr]"
            >
              <div className="flex min-h-48 items-center justify-center rounded-2xl bg-blue-50 p-6">
                <img
                  src={competition.image}
                  alt={`${competition.name} Logo`}
                  style={{
                    width: competition.logoWidth,
                    maxHeight: "350px",
                    height: "auto",
                    display: "block",
                    objectFit: "contain",
                  }}
                />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                  {competition.shortName}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-950">
                  {competition.name}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {competition.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {competition.focus.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-800"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={competition.channelLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full bg-blue-700 px-6 py-3 text-center font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-blue-800 hover:shadow-lg"
                  >
                    Join {competition.shortName} Channel
                  </a>

                  <a
                    href={competition.infoHref}
                    className="inline-block rounded-full border border-blue-700 px-6 py-3 text-center font-semibold text-blue-700 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-blue-50 hover:shadow-md"
                  >
                    View More About {competition.shortName}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-800 px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">
          Interested in Joining a SOMA Competition?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-blue-100">
          Join each competition channel for announcements, registration details,
          competition updates, rules, eligibility, and important dates.
        </p>

        <a
          href={telegramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-blue-800 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-blue-50 hover:shadow-lg"
        >
          Message Us on Telegram
        </a>
      </section>
    </main>
  );
}