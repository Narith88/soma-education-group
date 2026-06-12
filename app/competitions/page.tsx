const telegramLink = "https://t.me/NewtonLearningCenter";

type Competition = {
  name: string;
  shortName: string;
  image: string;
  logoWidth: string;
  channelLink: string;
  infoHref: string;
  description: string;
  focus: string[];
  badge: string;
  theme: string;
  bestFor: string;
  status: string;
};

const competitions: Competition[] = [
  {
    name: "E-Solver Cambodia",
    shortName: "E-SC",
    image: "/images/e-solver-logo.png",
    logoWidth: "260px",
    channelLink: "https://t.me/esolvercambodianews",
    infoHref: "/competitions/e-solver-cambodia",
    description:
      "E-Solver Cambodia is a student-centered competition project that promotes creative problem-solving, academic teamwork, and real-world thinking.",
    focus: ["Problem Solving", "Teamwork", "Creativity", "STEM Skills"],
    badge: "Creative Competition",
    theme: "from-emerald-900 via-blue-900 to-slate-950",
    bestFor:
      "Students who enjoy solving real-world problems with teamwork and creativity.",
    status: "Active Project",
  },
  {
    name: "Cambodia Mathematics and Physics Olympiad",
    shortName: "CMPO",
    image: "/images/cmpo-logo.png",
    logoWidth: "280px",
    channelLink: "https://t.me/CMPO2026_discussion",
    infoHref: "/competitions/cmpo",
    description:
      "CMPO is a competition platform designed to challenge and inspire Cambodian students in mathematics and physics. It encourages problem-solving, logical thinking, and academic excellence.",
    focus: ["Mathematics", "Physics", "Problem Solving", "Olympiad Thinking"],
    badge: "Math & Physics Olympiad",
    theme: "from-blue-950 via-indigo-900 to-slate-950",
    bestFor:
      "Students who want to challenge themselves in mathematics and physics.",
    status: "Competition Program",
  },
  {
    name: "Mathematics Genius Olympiad",
    shortName: "MGO",
    image: "/images/mgo-logo.png",
    logoWidth: "280px",
    channelLink: "https://t.me/mathgeniusolympiad",
    infoHref: "/competitions/mgo",
    description:
      "MGO focuses on developing students' mathematical thinking, creativity, and confidence through challenging problems and competition-based learning.",
    focus: ["Mathematics", "Critical Thinking", "Competition Practice"],
    badge: "Mathematics Olympiad",
    theme: "from-yellow-700 via-orange-700 to-slate-950",
    bestFor:
      "Students who want to strengthen math thinking through olympiad-style problems.",
    status: "Math Competition",
  },
];

function CompetitionCard({ competition }: { competition: Competition }) {
  return (
    <article className="charity-reveal overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl">
      <div
        className={
          "bg-gradient-to-br " + competition.theme + " px-6 py-6 text-white md:px-8"
        }
      >
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/75">
              {competition.badge}
            </p>

            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              {competition.shortName}
            </h2>
          </div>

          <div className="w-fit rounded-full bg-white/15 px-5 py-3 text-sm font-bold text-white backdrop-blur">
            {competition.status}
          </div>
        </div>
      </div>

      <div className="grid gap-8 p-6 md:grid-cols-[320px_1fr] md:p-8">
        <div className="flex min-h-64 items-center justify-center rounded-[2rem] bg-slate-50 p-6 transition-all duration-500 ease-out group-hover:bg-blue-50">
          <img
            src={competition.image}
            alt={competition.name + " Logo"}
            style={{
              width: competition.logoWidth,
              maxHeight: "260px",
              height: "auto",
              display: "block",
              objectFit: "contain",
            }}
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            {competition.shortName}
          </p>

          <h3 className="mt-2 text-3xl font-bold text-slate-950">
            {competition.name}
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            {competition.description}
          </p>

          <div className="mt-5 rounded-3xl bg-blue-50 p-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              Best For
            </p>

            <p className="mt-2 leading-7 text-slate-700">
              {competition.bestFor}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {competition.focus.map((item) => (
              <span
                key={item}
                className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
    </article>
  );
}

export default function CompetitionsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 px-6 py-14 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#2563eb66,transparent_35%),radial-gradient(circle_at_bottom_right,#f59e0b55,transparent_35%)]" />
        <div className="absolute left-10 top-20 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-20 right-12 h-40 w-40 rounded-full bg-yellow-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <a
            href="/"
            className="mb-8 inline-block rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-white/20"
          >
            ← Back to Home
          </a>

          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-200">
            SOMA Education Group
          </p>

          <h1 className="max-w-4xl text-4xl font-bold md:text-6xl">
            SOMA Competitions
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            SOMA Education Group organizes and supports academic competitions
            that help Cambodian students grow in mathematics, physics,
            problem-solving, teamwork, creativity, and confidence.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="charity-float rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
              <p className="text-3xl font-bold">3</p>
              <p className="mt-1 text-sm text-slate-200">
                Current competition projects
              </p>
            </div>

            <div className="charity-float rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
              <p className="text-3xl font-bold">STEM</p>
              <p className="mt-1 text-sm text-slate-200">
                Math, physics, and problem solving
              </p>
            </div>

            <div className="charity-float rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
              <p className="text-3xl font-bold">Soon</p>
              <p className="mt-1 text-sm text-slate-200">
                More competitions coming soon
              </p>
            </div>
          </div>

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
        <div className="charity-reveal mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Competition Programs
          </p>

          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Our Competitions
          </h2>

          <p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-600">
            Each competition under SOMA has its own purpose, identity, and
            student community. Students can join each competition channel for
            announcements, updates, and future registration information.
          </p>
        </div>

        <div className="space-y-8">
          {competitions.map((competition) => (
            <CompetitionCard
              key={competition.shortName}
              competition={competition}
            />
          ))}

          <div className="charity-reveal rounded-[2rem] border border-dashed border-blue-300 bg-blue-50 p-8 text-center shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              Coming Soon
            </p>

            <h3 className="mt-2 text-3xl font-bold text-slate-950">
              More Competitions Coming Soon
            </h3>

            <p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-600">
              SOMA Education Group plans to continue developing new academic
              competitions for Cambodian students. Future competitions may
              include more subjects, more grade levels, and more opportunities
              for students to challenge themselves.
            </p>

            <a
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-blue-700 px-8 py-3 font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-blue-800 hover:shadow-lg"
            >
              Follow Future Competition Updates
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="charity-reveal rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-950">
            Why SOMA Competitions Matter
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-slate-600">
            SOMA competitions are built to help students go beyond memorization.
            Through challenging problems, collaboration, and competition
            experience, students can improve their thinking skills and prepare
            for future academic opportunities.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-blue-50 p-6 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-lg">
              <h3 className="text-xl font-bold text-blue-900">
                Strong Thinking
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Students practice logic, analysis, problem-solving, and
                creative thinking through competition-style challenges.
              </p>
            </div>

            <div className="rounded-3xl bg-yellow-50 p-6 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-lg">
              <h3 className="text-xl font-bold text-yellow-900">
                Student Confidence
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Competitions help students become more confident, independent,
                and ready to face academic challenges.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-100 p-6 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-lg">
              <h3 className="text-xl font-bold text-slate-950">
                Future Opportunities
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                SOMA will continue creating more competitions and programs to
                support Cambodian students in different academic fields.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-800 px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">
          Interested in Joining a SOMA Competition?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-blue-100">
          Join each competition channel for announcements, registration details,
          competition updates, rules, eligibility, and important dates. More
          competitions will be announced soon.
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