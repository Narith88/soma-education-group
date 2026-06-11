const telegramLink = "https://t.me/NewtonLearningCenter";

const contactReasons = [
  {
    title: "Newton Learning Center",
    description:
      "Ask about courses, free tutoring, resources, books, or registration.",
  },
  {
    title: "Competitions",
    description:
      "Ask about CMPO, MGO, E-Solver Cambodia, registration, rules, or announcements.",
  },
  {
    title: "Consulting",
    description:
      "Ask about major advising, university advising, career guidance, or booking a session.",
  },
  {
    title: "Opportunities",
    description:
      "Ask about volunteering, joining the team, partnership, or sponsorship.",
  },
  {
    title: "Charity",
    description:
      "Ask about past charity work, future charity plans, or how to support SOMA.",
  },
  {
    title: "Achievements",
    description:
      "Share student success stories, certificates, photos, or SOMA milestones.",
  },
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Newton Learning Center", href: "/newton-learning-center" },
  { label: "Competitions", href: "/competitions" },
  { label: "Opportunities", href: "/opportunities" },
  { label: "Consulting", href: "/consulting" },
  { label: "Charity", href: "/charity" },
  { label: "Achievements", href: "/achievements" },
];

export default function ContactPage() {
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
            Contact Us
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Contact SOMA Education Group directly through Telegram for
            questions about learning programs, competitions, consulting,
            volunteering, partnership, sponsorship, charity, or student success.
          </p>

          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-blue-800 hover:bg-blue-50"
          >
            Message Us on Telegram
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-blue-800">
              Contact Through Telegram
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              For now, SOMA uses Telegram as the main contact method. This
              keeps communication simple and direct for students, parents,
              volunteers, partners, and sponsors.
            </p>

            <div className="mt-8 rounded-2xl bg-slate-50 p-6">
              <p className="font-semibold text-slate-900">
                Telegram Contact:
              </p>

              <p className="mt-2 text-blue-700">
                https://t.me/NewtonLearningCenter
              </p>
            </div>

            <a
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-blue-700 px-8 py-3 font-semibold text-white hover:bg-blue-800"
            >
              Open Telegram
            </a>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-blue-800">
              Telegram QR Code
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Later, you can add a Telegram QR code here so visitors can scan
              it and contact SOMA quickly.
            </p>

            <div className="mt-8 flex h-72 items-center justify-center rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50">
              <div className="text-center">
                <p className="text-lg font-bold text-blue-800">
                  QR Code Space
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Add Telegram QR code later
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold">What Can You Contact Us About?</h2>

          <p className="mt-3 max-w-3xl text-slate-600">
            You can message SOMA for any of the following areas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {contactReasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-blue-800">
                {reason.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-800">
            Quick Links
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Explore the main sections of SOMA Education Group.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full bg-blue-50 px-5 py-3 text-sm font-semibold text-blue-800 hover:bg-blue-100"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-800 px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">
          Ready to Contact SOMA?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-blue-100">
          Message us directly on Telegram and tell us what you are interested
          in. Our team will respond with the next steps.
        </p>

        <a
          href={telegramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-blue-800 hover:bg-blue-50"
        >
          Message Us on Telegram
        </a>
      </section>
    </main>
  );
}