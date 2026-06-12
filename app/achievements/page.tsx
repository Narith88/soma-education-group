const telegramLink = "https://t.me/NewtonLearningCenter";

const stats = [
  {
    value: "6",
    label: "BacII Grade A students in 2024",
  },
  {
    value: "Top 5",
    label: "National Physics Outstanding Student 2024",
  },
  {
    value: "2024+",
    label: "Student success since Newton Learning Center began",
  },
];

const baciiAchievement = {
  title: "BacII 2024 Grade A Students",
  image: "/images/achievements/bacii-grade-a-2024.png",
  khmer:
    "សូមអបអរសាទរដល់ប្អូនៗទាំង ៦ រូប ប្រចាំ Newton Learning Center ដែលទទួលបាននិទ្ទេស A ក្នុងការប្រឡងសញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិឆ្នាំ ២០២៤។ ហើយក៏សូមជូនពរប្អូនៗទទួលបានជោគជ័យជាបន្តបន្ទាប់ទៀត។",
  english:
    "In 2024, six Newton Learning Center students achieved an overall Grade A in the BacII national secondary school exit examination. This achievement reflects their discipline, preparation, and academic growth.",
};

const latestAchievement = {
  name: "Seng Lysinh",
  title: "Silver Medalist in National Outstanding Student Competition",
  khmerTitle:
    "អបអរសាទរ ប្អូន សេង លីសុីញ ដែលជាជ័យលាភីមេដាយប្រាក់នៃការប្រឡងសិស្សពូកែទូទាំងប្រទេសឆ្នាំ២០២៦",
  year: "2026",
  location: "Phnom Penh",
  grade: "Grade 12",
  subject: "Physics",
  image: "/images/achievements/seng-lysinh-silver-physics-2026.png",
  description:
    "Congratulations to Seng Lysinh, a Grade 12 student from Phnom Penh, for receiving a silver medal in Physics at the 2026 National Outstanding Student Competition.",
};

const outstandingAchievements = [
  {
    name: "Munen Phearin",
    title: "Top 2 Physics Outstanding Competition",
    subject: "Physics",
    rank: "Top 2",
    year: "2026",
    location: "Kampong Cham",
    image: "/images/achievements/phearin-top2-physics-2026.png",
    description:
      "Munen Phearin achieved Top 2 in the Physics Outstanding Competition of Kampong Cham in 2026.",
  },
  {
    name: "Hen Sovisal",
    title: "Top 5 National Physics Outstanding Student",
    subject: "Physics",
    rank: "Top 5",
    year: "2024",
    location: "National Level",
    image: "/images/achievements/sovisal-top5-physics-2024.png",
    description:
      "Hen Sovisal achieved Top 5 in the National Physics Outstanding Student Competition in 2024.",
  },
  {
    name: "Chhoun Mengsal",
    title: "Top 1 Physics Outstanding Student",
    subject: "Physics",
    rank: "Top 1",
    year: "2024",
    location: "Kampong Cham",
    image: "/images/achievements/mengsal-top1-physics-2024.png",
    description:
      "Chhoun Mengsal achieved Top 1 in the Physics Outstanding Student Competition of Kampong Cham in 2024.",
  },
  {
    name: "Thea Chenda",
    title: "Top 2 Physics Outstanding Student",
    subject: "Physics",
    rank: "Top 2",
    year: "2024",
    location: "Kampong Cham",
    image: "/images/achievements/chenda-top2-physics-2024.png",
    description:
      "Thea Chenda achieved Top 2 in the Physics Outstanding Student Competition of Kampong Cham in 2024.",
  },
  {
    name: "Mao Thalen",
    title: "Top 2 Physics Outstanding Student",
    subject: "Physics",
    rank: "Top 2",
    year: "2024",
    location: "Battambang",
    image: "/images/achievements/thalen-top2-physics-2024.png",
    description:
      "Mao Thalen achieved Top 2 in the Physics Outstanding Student Competition of Battambang in 2024.",
  },
  {
    name: "Vy Pitou",
    title: "Top 4 Physics Outstanding Student",
    subject: "Physics",
    rank: "Top 4",
    year: "2024",
    location: "Phnom Penh",
    image: "/images/achievements/pitou-top4-physics-2024.png",
    description:
      "Vy Pitou achieved Top 4 in the Physics Outstanding Student Competition of Phnom Penh in 2024.",
  },
  {
    name: "Eng MeyLang",
    title: "Top 2 Mathematics Outstanding Student",
    subject: "Mathematics",
    rank: "Top 2",
    year: "2024",
    location: "Banteay Meanchey",
    image: "/images/achievements/meylang-top2-math-2024.png",
    description:
      "Eng MeyLang achieved Top 2 in the Mathematics Outstanding Student Competition of Banteay Meanchey in 2024.",
  },
  {
    name: "Chhoun Naicheng",
    title: "Top 2 Mathematics Outstanding Student",
    subject: "Mathematics",
    rank: "Top 2",
    year: "2024",
    location: "Kandal",
    image: "/images/achievements/naicheng-top2-math-2024.png",
    description:
      "Chhoun Naicheng achieved Top 2 in the Mathematics Outstanding Student Competition of Kandal in 2024.",
  },
];

function PosterCard({
  image,
  title,
  subtitle,
}: {
  image: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="charity-shine group overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-sm transition-shadow duration-500 ease-out hover:border-yellow-200 hover:shadow-2xl">
      <div
        className="overflow-hidden bg-gradient-to-br from-blue-50 via-slate-100 to-yellow-50"
        style={{ aspectRatio: "1280 / 908" }}
      >
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      <div className="bg-gradient-to-br from-white via-blue-50/40 to-yellow-50/50 p-5">
        <h3 className="text-xl font-bold text-slate-950 transition-colors duration-300 group-hover:text-blue-800">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-600">{subtitle}</p>
      </div>
    </div>
  );
}

export default function AchievementsPage() {
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
            Student Achievements
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            Newton Learning Center and SOMA Education Group celebrate students
            who achieved academic excellence, outstanding competition results,
            and meaningful learning growth since 2024.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className="charity-float rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur"
              >
                <p className="text-3xl font-bold">{item.value}</p>
                <p className="mt-1 text-sm text-slate-200">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-yellow-50 px-6 py-16">
        <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-yellow-300/30 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="charity-reveal mb-10 text-center">
            <p className="inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-blue-700">
              BacII Success
            </p>

            <h2 className="mt-4 bg-gradient-to-r from-blue-800 via-slate-900 to-yellow-700 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
              Grade A Students in 2024
            </h2>

            <p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-600">
              This section highlights Newton Learning Center students who
              achieved an overall Grade A in the 2024 BacII national
              examination.
            </p>
          </div>

          <div className="charity-reveal grid gap-8 rounded-[2rem] border border-blue-100 bg-white p-6 shadow-xl shadow-blue-100/60 transition-shadow duration-500 ease-out hover:border-yellow-200 hover:shadow-2xl md:grid-cols-[1.1fr_0.9fr] md:p-8">
            <PosterCard
              image={baciiAchievement.image}
              title={baciiAchievement.title}
              subtitle="Newton Learning Center BacII Grade A students in 2024"
            />

            <div className="flex flex-col justify-center rounded-[2rem] bg-gradient-to-br from-white via-blue-50 to-yellow-50 p-6">
              <p className="w-fit rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-yellow-800">
                Congratulations
              </p>

              <h3 className="mt-4 text-3xl font-bold text-slate-950">
                6 Students Achieved Overall Grade A
              </h3>

              <p className="mt-5 leading-8 text-slate-700">
                {baciiAchievement.khmer}
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                {baciiAchievement.english}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-blue-50 px-6 py-16">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-yellow-300/25 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-300/25 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#f59e0b20,transparent_35%),radial-gradient(circle_at_bottom_left,#2563eb20,transparent_35%)]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="charity-reveal mb-10 text-center">
            <p className="inline-block rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-yellow-800">
              Latest Achievement
            </p>

            <h2 className="mt-4 bg-gradient-to-r from-yellow-700 via-slate-900 to-blue-800 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
              Continuing Student Success
            </h2>

            <p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-600">
              Newton Learning Center will continue updating this page as more
              students achieve strong results in BacII and outstanding student
              competitions.
            </p>
          </div>

          <div className="charity-reveal grid gap-8 rounded-[2rem] border border-yellow-200 bg-white p-6 shadow-xl shadow-yellow-100/70 transition-shadow duration-500 ease-out hover:border-blue-200 hover:shadow-2xl md:grid-cols-[0.9fr_1.1fr] md:p-8">
            <div className="rounded-[2rem] bg-gradient-to-br from-yellow-100 via-white to-blue-100 p-4">
              <PosterCard
                image={latestAchievement.image}
                title={latestAchievement.name}
                subtitle={
                  latestAchievement.title +
                  " • " +
                  latestAchievement.location +
                  " • " +
                  latestAchievement.year
                }
              />
            </div>

            <div className="flex flex-col justify-center rounded-[2rem] bg-gradient-to-br from-white via-yellow-50 to-blue-50 p-6">
              <p className="w-fit rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-yellow-800">
                New Highlight
              </p>

              <h3 className="mt-4 text-3xl font-bold text-slate-950">
                {latestAchievement.name}
              </h3>

              <p className="mt-3 text-xl font-semibold text-blue-800">
                {latestAchievement.title}
              </p>

              <p className="mt-5 leading-8 text-slate-700">
                {latestAchievement.khmerTitle}
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                {latestAchievement.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800">
                  {latestAchievement.location}
                </span>

                <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-800">
                  {latestAchievement.year}
                </span>

                <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-800">
                  {latestAchievement.grade}
                </span>

                <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
                  {latestAchievement.subject}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-yellow-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-blue-700">
              Outstanding Student Competition
            </p>

            <h2 className="mt-4 bg-gradient-to-r from-blue-800 via-slate-900 to-yellow-700 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
              Gallery since 2024
            </h2>

            <p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-600">
              This section highlights Newton Learning Center students who
              achieved strong results in provincial and national outstanding
              student competitions since 2024.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {outstandingAchievements.map((student, index) => (
              <div
                key={student.name}
                className="overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-lg shadow-blue-100/50 transition-shadow duration-500 ease-out hover:border-yellow-200 hover:shadow-2xl"
                style={{ animationDelay: String(index * 0.08) + "s" }}
              >
                <PosterCard
                  image={student.image}
                  title={student.name}
                  subtitle={
                    student.rank +
                    " • " +
                    student.subject +
                    " • " +
                    student.location +
                    " • " +
                    student.year
                  }
                />

                <div className="bg-gradient-to-br from-white via-blue-50/50 to-yellow-50/60 p-6">
                  <div className="flex flex-wrap gap-3">
                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800">
                      {student.rank}
                    </span>

                    <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-800">
                      {student.subject}
                    </span>

                    <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-800">
                      {student.location}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-bold text-slate-950">
                    {student.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {student.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-slate-950 to-slate-950 px-6 pb-16 pt-16">
        <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute right-10 top-20 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-b from-transparent to-slate-950" />

        <div className="relative mx-auto max-w-6xl">
          <div className="charity-reveal rounded-[2rem] border border-white/10 bg-white/10 p-8 text-center text-white shadow-2xl backdrop-blur transition-colors duration-500 ease-out hover:bg-white/15 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-200">
              Share Your Story
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Are You a Newton Learning Center Student?
            </h2>

            <p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-200">
              If you are a student, parent, teacher, volunteer, or partner
              connected with SOMA Education Group or Newton Learning Center,
              contact us to share your achievement story.
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
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950 px-6 py-6 text-center text-sm text-slate-300">
        © 2026 SOMA Education Group. All rights reserved.
      </footer>
    </main>
  );
}