const telegramLink = "https://t.me/CMPO2026_discussion";

export default function CMPOPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 px-6 py-14 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#2563eb66,transparent_35%),radial-gradient(circle_at_bottom_right,#dc262655,transparent_35%)]" />

        <div className="relative mx-auto max-w-6xl">
          <a
            href="/competitions"
            className="mb-8 inline-block rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-white/20"
          >
            ← Back to Competitions
          </a>

          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-200">
            SOMA Education Group
          </p>

          <h1 className="max-w-4xl text-4xl font-bold md:text-6xl">
            Cambodia Mathematics and Physics Olympiad
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            CMPO is a competition platform designed to challenge and inspire
            Cambodian students in mathematics and physics. It encourages
            problem-solving, logical thinking, and academic excellence.
          </p>

          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-blue-800 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-blue-50 hover:shadow-lg"
          >
            Join CMPO Channel
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="charity-reveal rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl md:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            About CMPO
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-950">
            Building Strong Problem Solvers
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-slate-600">
            The Cambodia Mathematics and Physics Olympiad helps students
            practice advanced thinking, prepare for academic competitions, and
            build confidence in STEM subjects.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-blue-50 p-6">
              <h3 className="text-xl font-bold text-blue-900">Mathematics</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Strengthen logical reasoning and mathematical problem-solving.
              </p>
            </div>

            <div className="rounded-3xl bg-blue-50 p-6">
              <h3 className="text-xl font-bold text-blue-900">Physics</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Improve conceptual understanding and physics application skills.
              </p>
            </div>

            <div className="rounded-3xl bg-blue-50 p-6">
              <h3 className="text-xl font-bold text-blue-900">Olympiad Thinking</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Prepare students for challenging competition-style questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 px-6 py-6 text-center text-sm text-slate-300">
        © 2026 SOMA Education Group. All rights reserved.
      </footer>
    </main>
  );
}