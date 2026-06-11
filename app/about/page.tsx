const telegramLink = "https://t.me/NewtonLearningCenter";

const values = [
  {
    title: "Education First",
    description:
      "We believe education should help students understand deeply, think independently, and grow with confidence.",
  },
  {
    title: "Opportunity for Students",
    description:
      "SOMA creates opportunities for students through learning programs, competitions, consulting, and community projects.",
  },
  {
    title: "Community Impact",
    description:
      "We aim to support Cambodian students not only academically, but also through charity, mentorship, and student-centered service.",
  },
];

const structure = [
  {
    role: "Board of Directors",
    description:
      "Provides long-term vision, guidance, and strategic direction for SOMA Education Group.",
  },
  {
    role: "Executive Team",
    description:
      "Manages daily operations, planning, communication, and coordination across SOMA projects.",
  },
  {
    role: "Academic Team",
    description:
      "Supports Newton Learning Center, academic resources, tutoring, courses, books, and educational content.",
  },
  {
    role: "Competition Team",
    description:
      "Organizes CMPO, MGO, E-Solver Cambodia, competition materials, registration, and event execution.",
  },
  {
    role: "External & Partnership Team",
    description:
      "Handles school outreach, partnerships, sponsorships, public relations, and collaboration opportunities.",
  },
  {
    role: "Marketing & Media Team",
    description:
      "Creates posters, videos, social media content, announcements, and brand communication for SOMA.",
  },
];

export default function AboutPage() {
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
            About Us
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            SOMA Education Group is an educational organization created to
            support Cambodian students through academic learning, STEM
            competitions, consulting, charity, and student opportunities.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-blue-800">Our Mission</h2>

            <p className="mt-4 leading-7 text-slate-600">
              Our mission is to empower Cambodian students by providing access
              to academic support, meaningful competitions, educational
              resources, consulting, and community-based opportunities.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-blue-800">Our Vision</h2>

            <p className="mt-4 leading-7 text-slate-600">
              Our vision is to become a trusted educational group that helps
              Cambodian students build strong academic foundations, discover
              their potential, and prepare for future success.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">Our Story</h2>

          <p className="mt-5 leading-8 text-slate-600">
            SOMA Education Group was created with the belief that students need
            more than exam preparation. They need guidance, confidence,
            opportunities, and a supportive community. Through Newton Learning
            Center, academic competitions, consulting, charity, and student
            development programs, SOMA aims to build a stronger educational
            pathway for Cambodian students.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            As SOMA grows, our goal is to connect students with learning
            resources, mentors, competitions, leadership opportunities, and
            practical guidance for their academic and career futures.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold">Our Core Values</h2>

          <p className="mt-3 max-w-3xl text-slate-600">
            These values guide how SOMA designs programs, supports students,
            and works with communities.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-blue-800">
                {value.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold">Organization Structure</h2>

          <p className="mt-3 max-w-3xl text-slate-600">
            SOMA is structured to support academic programs, competitions,
            consulting, charity, partnerships, and student opportunities.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {structure.map((item) => (
            <div
              key={item.role}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-blue-800">
                {item.role}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-800 px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">Connect with SOMA</h2>

        <p className="mx-auto mt-4 max-w-2xl text-blue-100">
          Contact us through Telegram to learn more about our programs,
          competitions, consulting, charity work, or partnership opportunities.
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