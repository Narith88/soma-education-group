"use client";

import { useEffect } from "react";

/*
  Soma Student Success Center page

  Image folder:
  public/images/podcast/

  Podcast thumbnail filenames to save:
  public/images/podcast/nlc-podcast-main.jpg
  public/images/podcast/nlc-podcast-1.jpg
  public/images/podcast/nlc-podcast-2.jpg
  public/images/podcast/nlc-podcast-3.jpg
  public/images/podcast/nlc-podcast-4.jpg

  Recommended thumbnail size:
  1280 x 720 px
  16:9 ratio

  Form/contact links:
  Update the links below when needed.
*/

const cvFormLink = "https://forms.gle/gZy6oWAz9DsKRQSC7";
const advisingFormLink = "https://forms.gle/R9nc5DfXtdeNEVtJ7";
const telegramLink = "https://t.me/somaeducationgroup";
const facebookLink = "https://www.facebook.com/somaeducationgroup/";

type Tone = "blue" | "gold" | "green";

const navigationButtons = [
  {
    label: "About the Center",
    href: "#about",
  },
  {
    label: "NLC Podcast",
    href: "#podcast",
  },
  {
    label: "Current Services",
    href: "#current-services",
  },
  {
    label: "CV Clinic",
    href: "#cv-clinic",
  },
  {
    label: "Student Advising",
    href: "#advising",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const podcastVideos = [
  {
    title: "គន្លឹះក្នុងការយកនិទ្ទេសល្អ",
    guest: "ង៉ោ ថាវនី",
    description:
      "ជាមួយប្អូន ង៉ោ ថាវនី អតីតសិស្សនិទ្ទេស A បាក់ឌុប 2024 ដែលទទួលបានលំដាប់ពិន្ទុ 99.999។ ពួកយើងសង្ឃឹមថា NLC Podcast នេះ នឹងជួយលើកទឹកចិត្ត និងផ្តល់ជាអត្ថប្រយោជន៍ដល់អ្នកសិក្សាទាំងអស់។",
    href: "https://fb.watch/HJV2xuU_Dm/",
    image: "/images/podcast/nlc-podcast-1.jpg",
  },
  {
    title: "ជ័យលាភីសិស្សពូកែគណិតវិទ្យា",
    guest: "ចម្រើន ហុងឡេង",
    description:
      "ជាមួយប្អូនប្រុស ចម្រើន ហុងឡេង ដែលជាជ័យលាភីសិស្សពូកែគណិតវិទ្យាទូទាំងប្រទេស ចំណាត់ថ្នាក់លេខ២ ប្រចាំឆ្នាំ ២០២៥។",
    href: "https://fb.watch/HJVnoolGPz/",
    image: "/images/podcast/nlc-podcast-2.jpg",
  },
  {
    title: "ជ័យលាភីសិស្សពូកែរូបវិទ្យា",
    guest: "លឹម វឌ្ឍនៈ",
    description:
      "ជាមួយប្អូនប្រុស លឹម វឌ្ឍនៈ ដែលជាជ័យលាភីសិស្សពូកែរូបវិទ្យាទូទាំងប្រទេស ចំណាត់ថ្នាក់លេខ២ ប្រចាំឆ្នាំ ២០២៥។",
    href: "https://youtu.be/EIu920mFOmE",
    image: "/images/podcast/nlc-podcast-3.jpg",
  },
  {
    title: "រៀនរូបវិទ្យាឱ្យជោគជ័យ",
    guest: "ចាន់ ណារិទ្ធ",
    description:
      "Workshop ជាមួយលោក ចាន់ ណារិទ្ធ ប្រធាននៃ SOMA Education Group និងអតីតជ័យលាភីសិស្សពូកែរូបវិទ្យាទូទាំងប្រទេស ចំណាត់ថ្នាក់លេខ២ ប្រចាំឆ្នាំ ២០២៣។",
    href: "https://youtu.be/EOLLo548ARk?si=_FjUmtcVXxjQy0I8",
    image: "/images/podcast/nlc-podcast-4.jpg",
  },
];

const centerHighlights = [
  {
    number: "1",
    title: "Guidance After Grade 12",
    text: "We help students understand possible next steps after BacII, university planning, scholarships, skills, and career preparation.",
  },
  {
    number: "2",
    title: "Human-Based Advising",
    text: "Our support is reviewed and guided by people who understand Cambodian students, parents, education paths, and local opportunities.",
  },
  {
    number: "3",
    title: "Student Development",
    text: "The center helps students become more confident, prepared, and ready for university, internships, scholarships, and future opportunities.",
  },
];

const currentServices = [
  {
    title: "Soma CV Clinic",
    text: "Support for students who need help creating, improving, or finalizing a professional CV or resume for scholarships, internships, volunteer programs, part-time jobs, university applications, and future opportunities.",
    button: "Request CV Support",
    href: cvFormLink,
  },
  {
    title: "Soma Student Advising",
    text: "Guidance for students and families who need help thinking through major selection, university choice, scholarship planning, career direction, study abroad options, and future preparation.",
    button: "Book Student Advising",
    href: advisingFormLink,
  },
];

const futureServices = [
  {
    title: "Skills Academy",
    text: "Future courses in communication, public speaking, business foundations, coding, professional skills, and career readiness.",
  },
  {
    title: "Scholarship Preparation",
    text: "Future support for scholarship planning, personal statements, application documents, interview preparation, and application strategy.",
  },
  {
    title: "Career Readiness Programs",
    text: "Future workshops and bootcamps to help students prepare for internships, projects, workplace skills, and long-term career goals.",
  },
];

const cvServices: {
  title: string;
  price: string;
  tone: Tone;
  description: string;
  includes: string[];
}[] = [
  {
    title: "Create a CV/Resume from Zero",
    price: "$2.99",
    tone: "blue",
    description:
      "Best for students who do not have a CV yet and need help creating one from the beginning.",
    includes: [
      "Collecting your education background, achievements, activities, skills, and goals",
      "Creating one professional CV/resume draft",
      "Basic editing and formatting",
      "One finalized CV/resume",
      "20-minute appointment to clarify your information",
      "One round of basic revision",
    ],
  },
  {
    title: "CV/Resume Review and Improvement",
    price: "$1.99",
    tone: "blue",
    description:
      "Best for students who already have a CV but want to make it stronger and more professional.",
    includes: [
      "Reviewing your current CV/resume",
      "Improving grammar, wording, structure, and formatting",
      "Suggesting missing information",
      "Making your experience and skills sound clearer",
      "One improved CV/resume version",
    ],
  },
  {
    title: "CV/Resume + Cover Letter",
    price: "$4.99",
    tone: "gold",
    description:
      "Best for students applying for scholarships, internships, volunteer programs, part-time jobs, university opportunities, or special programs.",
    includes: [
      "CV/resume creation or improvement",
      "One cover letter based on your goal",
      "Connecting your background, strengths, and motivation to the opportunity",
      "Final CV/resume and cover letter files",
    ],
  },
  {
    title: "CV/Resume + Interview Preparation",
    price: "$4.99",
    tone: "green",
    description:
      "Best for students who need to prepare for an interview after submitting their CV.",
    includes: [
      "CV/resume creation or improvement",
      "Common interview questions based on your background",
      "Self-introduction preparation",
      "Help explaining your experience, strengths, goals, and motivation",
      "Basic interview tips and practice guidance",
    ],
  },
  {
    title: "Full Career Starter Pack",
    price: "$7.99",
    tone: "gold",
    description:
      "Best for students who want complete support for scholarship, internship, volunteer, university, or career preparation.",
    includes: [
      "CV/resume support",
      "One cover letter",
      "Interview preparation",
      "Basic career profile advice",
      "Suggestions on what skills to build next",
      "Final documents and preparation notes",
    ],
  },
];

const advisingServices = [
  {
    title: "Major Selection Advising",
    text: "Help students compare possible majors based on strengths, interests, academic background, family situation, job opportunities, and future goals.",
  },
  {
    title: "University or School Selection Advising",
    text: "Help students compare public universities, private universities, technical schools, international programs, online programs, or study abroad options.",
  },
  {
    title: "Career Direction Advising",
    text: "Help students understand possible career paths connected to their major, skills, personality, and long-term goals.",
  },
  {
    title: "Scholarship and Application Guidance",
    text: "Help students understand scholarship preparation, application documents, personal statements, CVs, and interview preparation.",
  },
  {
    title: "Career Roadmap Session",
    text: "Help students create a clear 3-month, 6-month, or 1-year plan for skills, study, internships, projects, competitions, and future preparation.",
  },
  {
    title: "Parent-Student Consultation",
    text: "Support students and families in discussing education choices, concerns, budget, school options, and future planning.",
  },
];

const processSteps = [
  {
    title: "Submit the Form",
    text: "Students choose CV Clinic or Student Advising and submit their information through the online form.",
  },
  {
    title: "Soma Reviews Your Information",
    text: "Our team reviews your background, goals, needs, deadline, and current situation.",
  },
  {
    title: "Confirmation and Appointment",
    text: "Soma contacts you through Telegram or phone to confirm your service, appointment time, and next steps.",
  },
  {
    title: "Human Consultation",
    text: "A Soma team member reviews your information and provides guidance based on your background and goals.",
  },
  {
    title: "Final Support and Delivery",
    text: "Students receive their finalized document, advising summary, career roadmap, or next-step recommendation.",
  },
];

const faqs = [
  {
    question: "Who can use Soma CV Clinic?",
    answer:
      "Grade 12 students, Grade 12 graduates, university students, and young people preparing for scholarships, internships, volunteer programs, part-time jobs, or university opportunities.",
  },
  {
    question: "What if I have no work experience?",
    answer:
      "That is okay. We can help you present your education, school activities, volunteer work, competitions, skills, achievements, and personal strengths professionally.",
  },
  {
    question: "Can Soma choose my major for me?",
    answer:
      "Soma can guide you with information, comparison, and recommendations, but the final decision should be made by you and your family.",
  },
  {
    question: "Are CV Clinic and Student Advising the only services?",
    answer:
      "They are the two current services we are starting with. More student development services, workshops, and skill-building programs will be added in the future.",
  },
  {
    question: "How will Soma contact me?",
    answer:
      "Soma will contact you through Telegram or phone after you submit the form.",
  },
];

function priceHeaderClass(tone: Tone) {
  if (tone === "gold") {
    return "flex min-h-[230px] flex-col justify-between bg-gradient-to-br from-yellow-700 to-yellow-950 p-7 text-white";
  }

  if (tone === "green") {
    return "flex min-h-[230px] flex-col justify-between bg-gradient-to-br from-emerald-700 to-slate-950 p-7 text-white";
  }

  return "flex min-h-[230px] flex-col justify-between bg-gradient-to-br from-blue-700 to-blue-950 p-7 text-white";
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-bold uppercase tracking-wide text-blue-700">
      {children}
    </p>
  );
}

export default function StudentSuccessCenterPage() {
  useEffect(() => {
    const revealItems = document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <style>
        {`
          [data-reveal] {
            opacity: 0;
            transform: translateY(24px);
            transition: opacity 700ms ease, transform 700ms ease;
          }

          [data-reveal].is-visible {
            opacity: 1;
            transform: translateY(0);
          }

          @media (prefers-reduced-motion: reduce) {
            [data-reveal] {
              opacity: 1;
              transform: none;
              transition: none;
            }
          }
        `}
      </style>

      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 px-6 py-20 text-white"
      >
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <a
            href="/"
            className="mb-8 inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-white/20"
          >
            ← Back to Home
          </a>

          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div data-reveal>
              <p className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-bold uppercase tracking-wide text-blue-100">
                Powered by Soma Education Group
              </p>

              <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.98] tracking-tight md:text-7xl">
                Build Your Future with Soma Student Success Center
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-9 text-blue-100">
                Soma Student Success Center helps Cambodian students prepare for
                life after Grade 12 and university through student development,
                human guidance, practical preparation, and future-ready
                opportunities.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {navigationButtons.map((button) => (
                  <a
                    key={button.href}
                    href={button.href}
                    className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-center text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-white hover:text-blue-800"
                  >
                    {button.label}
                  </a>
                ))}
              </div>

              <p className="mt-6 text-sm font-bold uppercase tracking-wide text-blue-200">
                For Grade 12 students, graduates, university students, and parents
              </p>
            </div>

            <aside
              data-reveal
              className="rounded-[2rem] border border-white/15 bg-white/10 p-7 shadow-2xl backdrop-blur"
            >
              <div className="rounded-[1.5rem] bg-white p-6 text-slate-950">
                <h2 className="text-2xl font-black">
                  A student development center under SOMA
                </h2>
                <p className="mt-3 leading-7 text-slate-600">
                  We help students understand their next steps, learn from real
                  student experiences, prepare important documents, and make
                  clearer academic and career decisions.
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  {[
                    "After Grade 12",
                    "University Planning",
                    "Scholarships",
                    "Career Readiness",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-blue-50 p-4 text-sm font-bold text-blue-900"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 rounded-[1.5rem] bg-white p-6 text-slate-950">
                <h2 className="text-2xl font-black">Current starting point</h2>
                <p className="mt-3 leading-7 text-slate-600">
                  We are starting with two support services: CV Clinic and
                  Student Advising. More student development programs will be
                  added in the future.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="bg-gradient-to-br from-blue-50 via-white to-yellow-50 px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mx-auto mb-12 max-w-4xl text-center">
            <SectionLabel>About the Center</SectionLabel>

            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
              What is Soma Student Success Center?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Soma Student Success Center is a student development service under
              Soma Education Group. We help students make better academic and
              career decisions through human-based guidance, practical document
              support, and future skill-building programs. Our goal is to help
              students feel more confident, prepared, and ready for their next
              opportunity after Grade 12 and beyond.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {centerHighlights.map((item, index) => (
              <div
                key={item.title}
                data-reveal
                style={{ transitionDelay: String(index * 90) + "ms" }}
                className="rounded-[2rem] border border-blue-100 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-xl font-black text-blue-700">
                  {item.number}
                </div>
                <h3 className="mt-6 text-2xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="podcast"
        className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-slate-950 to-slate-950 px-6 py-20 text-white"
      >
        <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div data-reveal className="mx-auto mb-12 max-w-4xl text-center">
            <p className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-bold uppercase tracking-wide text-blue-100">
              NLC Podcast
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
              Learn from Top Students and Guest Speakers
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Before students choose a service, we want them to understand our
              education culture. NLC Podcast is a video series by Newton
              Learning Center under Soma Education Group. We invite top students
              and guest speakers to share real study experience, motivation,
              exam preparation strategies, and lessons for the next generation.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div
              data-reveal
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 shadow-2xl"
            >
              <div
                className="relative aspect-video bg-cover bg-center"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgba(23,70,214,0.45), rgba(15,23,42,0.75)), url('/images/podcast/nlc-podcast-main.jpg')",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                  <div>
                    <p className="text-sm font-black uppercase tracking-wide text-blue-100">
                      NLC Podcast
                    </p>
                    <h3 className="mt-3 text-3xl font-black">
                      Student Stories, Study Experience, and Motivation
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-black">About NLC Podcast</h3>

                <p className="mt-4 leading-8 text-slate-300">
                  SOMA Education Group មានកិត្តិយសណាស់ក្នុងការរៀបចំ Podcast
                  ដែលរៀបចំទ្បើងដោយ Newton Learning Center។ សូមថ្លែងអំណរគុណយ៉ាងក្រៃលែងដល់
                  សាលាភាសាបរទេស ខេម អាស៊ាន CAM-ASEAN ដែលបានជួយឧបត្ថម្ភទីតាំង
                  និងផ្តល់នូវជំនួយការបច្ចេកទេសដើម្បីសម្រួលដល់ការផលិតមាតិកាមួយនេះ។ សូមអរគុណដល់សាលា CAM-ASEAN ដែលបានគាំទ្រដល់យើងដើម្បីលើកកម្ពស់ធនធានមនុស្ស
                  និងទំពាំងស្នងឬស្សីជំនាន់ក្រោយ
                </p>

                <p className="mt-4 leading-8 text-slate-300">
                  SOMA Education Group is honored to organize this podcast, produced by Newton Learning Center. We would like to express our deepest gratitude to CAM-ASEAN International School for generously supporting us with the venue and technical assistance needed to make this content production possible. We sincerely thank CAM-ASEAN for supporting our mission to promote human resource development and empower the next generation of young Cambodian learners.
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {podcastVideos.map((video, index) => (
                <a
                  key={video.title}
                  href={video.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-reveal
                  style={{ transitionDelay: String(index * 80) + "ms" }}
                  className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 transition hover:-translate-y-2 hover:bg-white/15 hover:shadow-2xl"
                >
                  <div
                    className="relative aspect-video bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, rgba(23,70,214,0.22), rgba(15,23,42,0.35)), url(" +
                        video.image +
                        ")",
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-lg font-black text-blue-700 shadow-xl transition group-hover:scale-110">
                        ▶
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="text-xs font-black uppercase tracking-wide text-yellow-200">
                      Guest: {video.guest}
                    </p>
                    <h3 className="mt-2 text-lg font-black">{video.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {video.description}
                    </p>
                    <p className="mt-4 font-black text-yellow-200">
                      Watch video →
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="current-services" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mx-auto mb-12 max-w-4xl text-center">
            <SectionLabel>Current Services</SectionLabel>

            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
              Two Services Available Now
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Soma Student Success Center will grow into a broader student
              development platform. For now, we are beginning with two practical
              support services that many students need most: CV Clinic and
              Student Advising.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {currentServices.map((service, index) => (
              <div
                key={service.title}
                data-reveal
                style={{ transitionDelay: String(index * 90) + "ms" }}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <p className="text-sm font-black uppercase tracking-wide text-blue-700">
                  Current Service
                </p>
                <h3 className="mt-3 text-3xl font-black">{service.title}</h3>
                <p className="mt-4 leading-8 text-slate-600">{service.text}</p>
                <a
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex rounded-full bg-blue-700 px-7 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-blue-800"
                >
                  {service.button}
                </a>
              </div>
            ))}
          </div>

          <div
            data-reveal
            className="mt-8 rounded-[2rem] border border-yellow-200 bg-yellow-50 p-7"
          >
            <p className="text-sm font-black uppercase tracking-wide text-yellow-800">
              Coming Soon
            </p>
            <h3 className="mt-2 text-2xl font-black">
              More services will be added in the future
            </h3>
            <p className="mt-3 leading-8 text-yellow-900">
              Soma Student Success Center is planned to expand into more student
              development services, workshops, skill-building courses,
              scholarship preparation support, and career readiness programs.
            </p>
          </div>
        </div>
      </section>

      <section
        id="future-services"
        className="bg-gradient-to-br from-blue-50 via-white to-yellow-50 px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-12 max-w-4xl">
            <SectionLabel>Future Direction</SectionLabel>
            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
              Future Student Development Programs
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              These programs are part of the long-term direction of the center.
              They are not all open yet, but they show how Soma Student Success
              Center will continue growing.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {futureServices.map((service, index) => (
              <div
                key={service.title}
                data-reveal
                style={{ transitionDelay: String(index * 90) + "ms" }}
                className="rounded-[2rem] border border-blue-100 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="text-2xl font-black">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
                <p className="mt-5 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700">
                  Coming soon
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cv-clinic" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mx-auto mb-12 max-w-4xl text-center">
            <SectionLabel>Document Support</SectionLabel>
            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
              Soma CV Clinic
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Soma CV Clinic helps students create, improve, and finalize
              professional CVs and resumes. This service is designed for
              students who may not have work experience yet but want to present
              their education, skills, activities, achievements, and goals
              clearly.
            </p>
          </div>

          <div className="grid items-stretch gap-7 md:grid-cols-2 lg:grid-cols-3">
            {cvServices.map((service, index) => (
              <div
                key={service.title}
                data-reveal
                style={{ transitionDelay: String(index * 70) + "ms" }}
                className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className={priceHeaderClass(service.tone)}>
                  <h3 className="text-2xl font-black leading-snug">
                    {service.title}
                  </h3>
                  <span className="w-fit rounded-full bg-white/15 px-5 py-3 text-3xl font-black">
                    {service.price}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <p className="leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <ul className="mt-5 grid gap-3">
                    {service.includes.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-6 text-slate-700"
                      >
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-black text-blue-700">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={cvFormLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex justify-center rounded-full bg-blue-700 px-6 py-3 text-center font-bold text-white transition hover:-translate-y-1 hover:bg-blue-800"
                  >
                    Choose this service
                  </a>
                </div>
              </div>
            ))}

            <div
              data-reveal
              className="rounded-[2rem] border border-yellow-200 bg-white p-7 shadow-sm"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100 text-sm font-black text-yellow-800">
                Note
              </div>
              <h3 className="mt-6 text-2xl font-black">Launch Price</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Prices are launch prices and may change in the future as
                services expand.
              </p>
              <div className="mt-6 rounded-2xl bg-yellow-100 p-5 font-bold leading-7 text-yellow-900">
                Start early. A clear CV can help you prepare for scholarships,
                internships, volunteer opportunities, and university programs
                before deadlines arrive.
              </div>
              <a
                href={cvFormLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-full bg-blue-700 px-6 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-blue-800"
              >
                Request CV Support
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="advising"
        className="bg-gradient-to-br from-blue-50 via-white to-yellow-50 px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mx-auto mb-12 max-w-4xl text-center">
            <SectionLabel>Student Advising</SectionLabel>
            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
              Soma Student Advising
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our advising service helps students who feel unsure about their
              next step after Grade 12 or during university. We guide students
              in choosing majors, schools, scholarships, career directions, and
              personal skill-building plans.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {advisingServices.map((service, index) => (
              <a
                key={service.title}
                href={advisingFormLink}
                target="_blank"
                rel="noopener noreferrer"
                data-reveal
                style={{ transitionDelay: String(index * 70) + "ms" }}
                className="flex min-h-full flex-col rounded-[1.75rem] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                <h3 className="text-xl font-black">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
                <p className="mt-auto pt-5 font-black text-blue-700">
                  Book advising →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mx-auto mb-12 max-w-4xl text-center">
            <SectionLabel>Process</SectionLabel>
            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
              How Our Process Works
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              We keep the process simple, clear, and student-friendly from form
              submission to final support.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                data-reveal
                style={{ transitionDelay: String(index * 70) + "ms" }}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 font-black text-white">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-lg font-black">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="start"
        className="bg-gradient-to-br from-blue-50 via-white to-yellow-50 px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div
            data-reveal
            className="rounded-[2rem] border border-blue-100 bg-white p-8 text-center shadow-xl md:p-12"
          >
            <SectionLabel>Ready to Start?</SectionLabel>
            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
              Choose the support you need
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Soma will contact you to confirm your request and guide you
              through the next step.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={cvFormLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-blue-700 px-8 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-blue-800"
              >
                Request CV Support
              </a>
              <a
                href={advisingFormLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-blue-700 px-8 py-3 font-bold text-blue-700 transition hover:-translate-y-1 hover:bg-blue-50"
              >
                Book Student Advising
              </a>
              <a
                href={telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-blue-700 px-8 py-3 font-bold text-blue-700 transition hover:-translate-y-1 hover:bg-blue-50"
              >
                Contact Soma
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div data-reveal className="mb-10 text-center">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                data-reveal
                style={{ transitionDelay: String(index * 70) + "ms" }}
                className="group rounded-[1.5rem] border border-slate-200 bg-white p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-black">
                  <span>{faq.question}</span>
                  <span className="text-2xl text-blue-700 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-8 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="bg-gradient-to-br from-blue-50 via-white to-yellow-50 px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-10 max-w-4xl">
            <SectionLabel>Contact</SectionLabel>
            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
              Contact Soma Student Success Center
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Reach out to Soma Education Group for CV Clinic, student advising,
              partnership, sponsorship, or student development services.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div
              data-reveal
              className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="grid gap-4">
                <a
                  href={telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-blue-100 bg-blue-50 p-5 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <strong>Telegram</strong>
                  <span className="font-black text-blue-700">Message us →</span>
                </a>

                <a
                  href={facebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-blue-100 bg-blue-50 p-5 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <strong>Facebook</strong>
                  <span className="font-black text-blue-700">Visit page →</span>
                </a>

                <a
                  href="https://www.google.com/maps/search/Phnom+Penh+Cambodia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-blue-100 bg-blue-50 p-5 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <strong>Location</strong>
                  <span className="font-black text-blue-700">
                    Phnom Penh, Cambodia →
                  </span>
                </a>

                <a
                  href="#home"
                  className="flex items-center justify-between rounded-2xl border border-blue-100 bg-blue-50 p-5 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <strong>Organization</strong>
                  <span className="font-black text-blue-700">
                    Soma Education Group →
                  </span>
                </a>
              </div>
            </div>

            <div
              data-reveal
              className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-3xl font-black">
                Need help choosing a service?
              </h3>
              <p className="mt-4 leading-8 text-slate-600">
                If you are not sure whether you need CV support or student
                advising, contact Soma and tell us your current situation. We
                will guide you to the right next step.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-blue-700 px-7 py-3 text-center font-bold text-white transition hover:-translate-y-1 hover:bg-blue-800"
                >
                  Message Soma
                </a>
                <a
                  href="#current-services"
                  className="rounded-full border border-blue-700 px-7 py-3 text-center font-bold text-blue-700 transition hover:-translate-y-1 hover:bg-blue-50"
                >
                  View Current Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 px-6 py-8 text-center text-sm text-slate-300">
        <strong className="block text-lg text-white">
          Soma Student Success Center
        </strong>
        <p className="mt-1">A student development service by Soma Education Group</p>
        <p className="mt-3">© 2026 Soma Education Group. All rights reserved.</p>
      </footer>
    </main>
  );
}