const telegramLink = "https://t.me/NewtonLearningCenter";
const telegramLink2 = "https://t.me/somaedugroup";
type CharityPhoto = {
  src: string;
  alt: string;
  caption: string;
  aspectRatio: string;
};

type CharityProject = {
  title: string;
  date: string;
  badge: string;
  gradient: string;
  summary: string;
  images: CharityPhoto[];
  khmerParagraphs: string[];
  englishParagraphs: string[];
  impact: string[];
};

const charityProjects: CharityProject[] = [
  {
    title: "Book Donation for Evacuated Children",
    date: "February 9, 2026",
    badge: "Books Donation",
    gradient: "from-blue-900 via-sky-800 to-indigo-900",
    summary:
      "E-Solver Cambodia supported children affected by evacuation by donating primary-level English study books and promoting access to learning resources.",
    images: [
      {
        src: "/images/charity/book-donation-poster.png",
        alt: "Book donation campaign poster",
        caption: "Open Donation campaign poster",
        aspectRatio: "1280 / 1073",
      },
      {
        src: "/images/charity/book-donation-handoff.png",
        alt: "Book donation handoff photo",
        caption: "Book donation supported by MoEYS",
        aspectRatio: "1280 / 686",
      },
      {
        src: "/images/charity/book-donation-group.png",
        alt: "Book donation group photo",
        caption: "Book donation handoff with community members",
        aspectRatio: "1280 / 960",
      },
    ],
    khmerParagraphs: [
      "ការបរិច្ចាគសៀវភៅសិក្សាជាភាសាអង់គ្លេស កម្រិតបឋមសិក្សា ជូនប្អូនៗសិស្សានុសិស្សភៀសសឹក និងប្អូនៗសិក្សាតាមបណ្តាខេត្ត ដែលមានតម្រូវការចាំបាច់",
      "នាថ្ងៃទី៩ ខែកុម្ភៈ ឆ្នាំ២០២៦ លោក ទីវ ឡេងហុង តំណាងក្រុមនិស្សិត E-Solver Cambodia បាននាំយកសៀវភៅសិក្សាជាភាសាអង់គ្លេស កម្រិតបឋមសិក្សា ចំនួន ១១៧០ ក្បាល បរិច្ចាគជូនប្អូនៗសិស្សានុសិស្សភៀសសឹក និងប្អូនៗសិក្សាតាមបណ្តាខេត្ត ដែលមានតម្រូវការចាំបាច់ តាមរយៈ ឯកឧត្តម អ៊ុង ជិនណា អគ្គនាយក នៃអគ្គនាយកដ្ឋានអប់រំ នៃក្រសួងអប់រំ យុវជន និងកីឡា",
      "សៀវភៅបរិច្ចាគទាំងនេះទទួលបានការឧបត្ថម្ភពីក្រុមនិស្សិត ដែលមានបំណងចូលរួមផ្តល់ឱកាសដល់កុមារកម្ពុជា ដើម្បីទទួលបានការសិក្សាបំប៉នបន្ថែមលើកម្រិតភាសាអង់គ្លេស",
    ],
    englishParagraphs: [
      "E-Solver Cambodia donated primary-level English study books to evacuated students and students in provinces who needed essential learning materials.",
      "On February 9, 2026, Lenghong Tiv, representing the E-Solver Cambodia student team, delivered 1,170 English study books through the General Directorate of Education of the Ministry of Education, Youth and Sport.",
      "This donation was supported by students who wanted to create more educational opportunities for Cambodian children and help them continue learning during difficult times.",
    ],
    impact: [
      "1,170 English study books donated",
      "Support for evacuated children and students in need",
      "Student-led charity collaboration",
      "Educational opportunity through book access",
    ],
  },
  {
    title: "Donation Support for Frontline Heroes",
    date: "December 10, 2025",
    badge: "Community Support",
    gradient: "from-red-900 via-blue-900 to-slate-950",
    summary:
      "E-Solver Cambodia organized a donation campaign to support Cambodian frontline heroes and people affected by the Cambodia-Thailand border crisis.",
    images: [
      {
        src: "/images/charity/frontline-donation-poster.png",
        alt: "E-Solver Cambodia donation poster",
        caption: "Donation campaign announcement",
        aspectRatio: "1080 / 1080",
      },
      {
        src: "/images/charity/frontline-donation-event.png",
        alt: "E-Solver Cambodia community event collage",
        caption: "E-Solver Cambodia community involvement",
        aspectRatio: "1080 / 1080",
      },
    ],
    khmerParagraphs: [
      "ក្នុងស្ថានភាពដ៏លំបាកមួយនេះ E-Solver Cambodia បានធ្វើការបរិច្ចាគទឹកប្រាក់មួយចំនួនទៅកាន់វីរៈកងទ័ពជួរមុខកម្ពុជា តាមរយៈរដ្ឋបាលរាជធានី ហើយក៏បានបើកទទួលការចូលរួមបរិច្ចាគពីអ្នកទាំងអស់គ្នាផងដែរ",
      "ការចូលរួមនេះបង្ហាញពីស្មារតីសាមគ្គីភាពរបស់យុវជន និងកម្លាំងជួរក្រោយ ក្នុងការគាំទ្រវីរៈកងទ័ពជួរមុខដ៏អង់អាចរបស់កម្ពុជា",
      "E-Solver Cambodia សូមថ្លែងអំណរគុណដល់អ្នកចូលរួមទាំងអស់ ដែលបានចែករំលែកទឹកចិត្ត សេចក្តីស្រឡាញ់ និងការគាំទ្រដល់សង្គមជាតិ",
    ],
    englishParagraphs: [
      "During a difficult period, E-Solver Cambodia organized a donation campaign to support Cambodian frontline heroes through the Phnom Penh Capital Administration.",
      "This campaign reflected the unity of young people and the community as a strong support force behind those protecting the country.",
      "E-Solver Cambodia deeply appreciates everyone who contributed, shared kindness, and supported this meaningful community effort.",
    ],
    impact: [
      "Donation campaign for Cambodian frontline heroes",
      "Community participation and solidarity",
      "Youth-led national support effort",
      "Support through official local administration",
    ],
  },
];

function PhotoCard({ photo }: { photo: CharityPhoto }) {
  return (
    <div className="charity-shine group overflow-hidden rounded-3xl border border-white/20 bg-white shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl">
      <div
        className="overflow-hidden bg-slate-100"
        style={{ aspectRatio: photo.aspectRatio }}
      >
        <img
          src={photo.src}
          alt={photo.alt}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      <p className="px-5 py-4 text-sm font-semibold text-slate-700">
        {photo.caption}
      </p>
    </div>
  );
}

function CharityProjectCard({ project }: { project: CharityProject }) {
  return (
    <article className="charity-reveal overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl">
      <div className={`bg-gradient-to-br ${project.gradient} px-6 py-8 text-white md:px-8`}>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
              {project.badge}
            </p>

            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              {project.title}
            </h2>

            <p className="mt-3 text-white/80">{project.date}</p>
          </div>

          <div className="charity-glow rounded-full bg-white/15 px-5 py-3 text-sm font-bold text-white backdrop-blur">
            Completed Project
          </div>
        </div>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-white/90">
          {project.summary}
        </p>
      </div>

      <div className="grid gap-8 p-6 md:grid-cols-[1.05fr_0.95fr] md:p-8">
        <div className="space-y-5">
          {project.images.map((photo) => (
            <PhotoCard key={photo.src} photo={photo} />
          ))}
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl bg-slate-50 p-6">
            <h3 className="text-xl font-bold text-blue-800">
              Project Story in Khmer
            </h3>

            <div className="mt-4 space-y-4 text-sm leading-8 text-slate-700 md:text-base">
              {project.khmerParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6">
            <h3 className="text-xl font-bold text-blue-900">
              English Summary
            </h3>

            <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700 md:text-base">
              {project.englishParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-950">
              Project Impact
            </h3>

            <div className="mt-4 grid gap-3">
              {project.impact.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-sm font-medium text-slate-700"
                >
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-700" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function CharityPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 px-6 py-14 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#2563eb55,transparent_35%),radial-gradient(circle_at_bottom_right,#dc262655,transparent_35%)]" />

        <div className="relative mx-auto max-w-6xl">
          <a
            href="/"
            className="mb-8 inline-block rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/20"
          >
            ← Back to Home
          </a>

          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-200">
            SOMA Education Group
          </p>

          <h1 className="max-w-4xl text-4xl font-bold md:text-6xl">
            Charity & Community Support
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            SOMA Education Group and its student-led initiatives believe that
            education should serve the community. Our charity work supports
            students, families, and Cambodian communities during important
            moments of need.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="charity-float rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
              <p className="text-3xl font-bold">2</p>
              <p className="mt-1 text-sm text-slate-200">
                Completed charity actions
              </p>
            </div>

            <div className="charity-float rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
              <p className="text-3xl font-bold">1,170</p>
              <p className="mt-1 text-sm text-slate-200">
                Books donated to children
              </p>
            </div>

            <div className="charity-float rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
              <p className="text-3xl font-bold">E-Solver Cambodia</p>
              <p className="mt-1 text-sm text-slate-200">
                Youth-led community impact
              </p>
            </div>
          </div>

          <a
            href={telegramLink2}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-blue-800 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-blue-50 hover:shadow-lg"
          >
            Join Our Telegram Channel
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Past Charity Work
          </p>

          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Community Projects We Have Completed
          </h2>

          <p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-600">
            These projects show our commitment to education, youth leadership,
            and social responsibility. Each project includes Khmer and English
            descriptions so more people can understand the impact.
          </p>
        </div>

        <div className="space-y-12">
          {charityProjects.map((project) => (
            <CharityProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="charity-reveal rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-950">
            Why Charity Matters to SOMA
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-slate-600">
            SOMA’s charity work reflects our belief that education should be
            connected to service. By supporting students, children, and
            communities, we hope to make learning more accessible, meaningful,
            and compassionate.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-blue-50 p-6 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-lg">
              <h3 className="text-xl font-bold text-blue-900">Access</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Helping students receive books, learning resources, and support
                during difficult situations.
              </p>
            </div>

            <div className="rounded-3xl bg-red-50 p-6 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-lg">
              <h3 className="text-xl font-bold text-red-900">Service</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Encouraging young people to serve their communities with
                kindness, responsibility, and leadership.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-100 p-6 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-lg">
              <h3 className="text-xl font-bold text-slate-950">Impact</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Creating real educational and social impact for Cambodian
                students and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-800 px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">Support SOMA Charity Work</h2>

        <p className="mx-auto mt-4 max-w-2xl text-blue-100">
          To support future charity projects, student resources, book donations,
          or educational community work, contact us directly through Telegram.
        </p>

        <a
          href={telegramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-blue-800 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-blue-50 hover:shadow-lg"
        >
          Contact Us on Telegram
        </a>
      </section>
      
      <footer className="bg-slate-950 px-6 py-8 text-center text-sm text-slate-300">
      © 2026 SOMA Education Group. All rights reserved.
      </footer>
    </main>
  );
}