const telegramLink = "https://t.me/NewtonLearningCenter";

const consultingServices = [
  {
    title: "Major Advising",
    description:
      "We help students think carefully about their interests, strengths, academic background, and future goals before choosing a major.",
    details: [
      "Understand different major options",
      "Connect interests with possible fields",
      "Compare STEM, business, health, and social science paths",
      "Avoid choosing a major only because of pressure",
    ],
  },
  {
    title: "University Advising",
    description:
      "We guide students in exploring universities, programs, admission requirements, and learning environments that fit their goals.",
    details: [
      "Compare university options",
      "Understand program differences",
      "Think about cost, location, and academic quality",
      "Plan questions before applying or enrolling",
    ],
  },
  {
    title: "Career Guidance",
    description:
      "We help students connect their education choices with future career possibilities and long-term personal development.",
    details: [
      "Explore possible career paths",
      "Understand skills needed for different fields",
      "Plan academic and extracurricular growth",
      "Build confidence for future decisions",
    ],
  },
  {
    title: "Book a Session",
    description:
      "Students can contact SOMA directly through Telegram to ask questions and arrange a consultation session.",
    details: [
      "Message us on Telegram",
      "Tell us your grade level and concern",
      "Choose the type of advising you need",
      "Schedule a session with our team",
    ],
  },
];

export default function ConsultingPage() {
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
            Consulting & Student Advising
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            SOMA Consulting helps Cambodian students make thoughtful decisions
            about majors, universities, careers, and future study pathways.
          </p>

          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-blue-800 hover:bg-blue-50"
          >
            Book Through Telegram
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold">Our Consulting Services</h2>

          <p className="mt-3 max-w-3xl text-slate-600">
            This service is designed especially for students who need guidance
            after BacII or before choosing a university, major, or career path.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {consultingServices.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="mb-6 flex h-40 items-center justify-center rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50">
                <div className="text-center">
                  <p className="text-lg font-bold text-blue-800">
                    Image / Icon Space
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    Add consulting photo or icon later
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-blue-800">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {service.description}
              </p>

              <ul className="mt-6 space-y-3 text-slate-600">
                {service.details.map((detail) => (
                  <li key={detail}>• {detail}</li>
                ))}
              </ul>

              <a
                href={telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-full bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
              >
                Ask About {service.title}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-blue-800">
            How Booking Works
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-semibold text-blue-700">Step 1</p>
              <h3 className="mt-2 font-bold text-slate-900">
                Contact Us
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Message SOMA directly through Telegram.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-semibold text-blue-700">Step 2</p>
              <h3 className="mt-2 font-bold text-slate-900">
                Tell Us Your Need
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Share your grade level, school, interests, and questions.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-semibold text-blue-700">Step 3</p>
              <h3 className="mt-2 font-bold text-slate-900">
                Choose a Service
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Select major advising, university advising, or career guidance.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-semibold text-blue-700">Step 4</p>
              <h3 className="mt-2 font-bold text-slate-900">
                Book a Session
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Our team will help arrange the next step with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-800 px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">
          Need Help Choosing Your Future Path?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-blue-100">
          Contact SOMA Consulting through Telegram for major advising,
          university advising, career guidance, or general study pathway
          questions.
        </p>

        <a
          href={telegramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-blue-800 hover:bg-blue-50"
        >
          Book a Session on Telegram
        </a>
      </section>
    </main>
  );
}