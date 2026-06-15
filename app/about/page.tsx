"use client";

import { useEffect } from "react";

const telegramLink = "https://t.me/somaeducationgroup";
const storyImage = "/images/about/soma-story.jpg";

/*
  About page image and file paths

  Story image beside the section "Built from a belief in student potential":
  public/images/about/soma-story.jpg

  Team portraits:
  public/images/team/chan-narith.jpg
  public/images/team/doran-beatrice.jpg
  public/images/team/lim-souhoang.jpg
  public/images/team/vp-academic.jpg
  public/images/team/vp-marketing.jpg
  public/images/team/vp-external.jpg
  public/images/team/vp-operations.jpg

  CV files:
  public/files/narith-chan-cv.pdf
  public/files/beatrice-doran-cv.pdf

  Recommended image sizes:
  Story image: 1200 x 900 px, ratio 4:3
  Team portraits: 900 x 1200 px, ratio 3:4

  In code, image paths must start with /images/ or /files/
  Do not write public/images/ or public/files/ inside href or image paths.
*/

type Entity = {
  name: string;
  label: string;
  href: string;
  description: string;
};

type Value = {
  title: string;
  description: string;
};

type TeamMember = {
  name: string;
  role: string;
  status?: string;
  image: string;
  description: string;
  cvHref?: string;
};

const entities: Entity[] = [
  {
    name: "Newton Learning Center",
    label: "Academic Preparation",
    href: "/newton-learning-center",
    description:
      "Newton Learning Center supports Cambodian students through BacII preparation, outstanding student exam preparation, STEM foundations, books, free learning resources, and online study communities.",
  },
  {
    name: "SOMA Competitions",
    label: "Academic Competitions",
    href: "/competitions",
    description:
      "SOMA Competitions includes E-Solver Cambodia, Cambodia Mathematics and Physics Olympiad, and Math Genius Olympiad, giving students opportunities to challenge themselves in STEM and problem-solving.",
  },
  {
    name: "Soma Student Success Center",
    label: "Student Development",
    href: "/student-success-center",
    description:
      "Soma Student Success Center helps students prepare for life after Grade 12 and university through CV support, student advising, career guidance, major planning, and future learning opportunities.",
  },
];

const values: Value[] = [
  {
    title: "Academic Foundation",
    description:
      "We help students strengthen the knowledge and discipline they need for exams, competitions, and long-term academic success.",
  },
  {
    title: "Problem-Solving Skills",
    description:
      "We encourage students to think critically, solve challenging problems, and approach learning with curiosity and confidence.",
  },
  {
    title: "Student Opportunity",
    description:
      "We create pathways for students to learn, compete, connect, and access meaningful opportunities beyond the classroom.",
  },
];

const founders: TeamMember[] = [
  {
    name: "Narith Chan",
    role: "Co-Founder / Co-President",
    image: "/images/team/chan-narith.jpg",
    cvHref: "/files/narith-chan-cv.pdf",
    description:
      "A physics student in the USA, Narith ranked Top 2 in Cambodia’s National Outstanding Student Exam in Physics in 2023 and achieved Grade A in the Cambodian Baccalaureate Examination. Through SOMA, he supports Cambodian students in STEM learning, competitions, and academic growth.",
  },
  {
    name: "Beatrice Doran",
    role: "Co-Founder / Co-President",
    image: "/images/team/doran-beatrice.jpg",
    cvHref: "/files/beatrice-doran-cv.pdf",
    description:
      "Beatrice interests in finance and real estate in Canada, with experience in investment and education initiatives. Her background includes National Outstanding Student Exam participation in Grade 9 and Grade 12, as well as achieving Grade A in the Cambodian Baccalaureate Examination.",
  },
];


const executiveTeam: TeamMember[] = [
  {
    name: "Lim Souhoang",
    role: "First Vice President",
    status: "Executive Leadership",
    image: "/images/team/lim-souhoang.jpg",
    description:
      "Add short professional background, education, achievements, leadership experience, and responsibilities here.",
  },
  {
    name: "VP Academic",
    role: "Vacant / Recruiting Soon",
    status: "Academic Department",
    image: "/images/team/vp-academic.jpg",
    description:
      "Responsible for academic quality, exam content, tutoring curriculum, subject team coordination, resources, and educational standards.",
  },
  {
    name: "VP Marketing",
    role: "Vacant / Recruiting Soon",
    status: "Marketing Department",
    image: "/images/team/vp-marketing.jpg",
    description:
      "Responsible for social media strategy, posters, videos, registration campaigns, brand awareness, and public communication.",
  },
  {
    name: "VP External / Public Relations",
    role: "Vacant / Recruiting Soon",
    status: "External Department",
    image: "/images/team/vp-external.jpg",
    description:
      "Responsible for sponsorships, partnerships, school outreach, public representation, and collaboration opportunities.",
  },
  {
    name: "VP Operations & Supply Chain",
    role: "Vacant / Recruiting Soon",
    status: "Operations Department",
    image: "/images/team/vp-operations.jpg",
    description:
      "Responsible for timelines, documents, certificates, logistics, procurement, materials, and event execution.",
  },
];

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-bold uppercase tracking-wide text-blue-700">
      {children}
    </p>
  );
}

function TeamCard({
  name,
  role,
  status,
  image,
  description,
  cvHref,
  index,
}: TeamMember & { index: number }) {
  return (
    <article
      data-reveal
      style={{ transitionDelay: String(index * 80) + "ms" }}
      className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="grid md:grid-cols-[0.48fr_1fr]">
        <div className="flex min-h-[360px] items-center justify-center bg-gradient-to-br from-blue-50 via-white to-yellow-50 p-5">
          <div
            className="aspect-[3/4] w-full max-w-[260px] rounded-[1.5rem] bg-gradient-to-br from-blue-100 via-white to-yellow-100 bg-cover bg-center shadow-md transition duration-700 group-hover:scale-[1.03]"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(15,23,42,0.02), rgba(15,23,42,0.18)), url(" +
                image +
                ")",
            }}
          />
        </div>

        <div className="flex flex-col justify-center p-7">
          {/* Optional label. Remove this status block or leave status empty if you want more space for a longer personal summary. */}
          {status ? (
            <p className="text-sm font-black uppercase tracking-wide text-blue-700">
              {status}
            </p>
          ) : null}

          <h3 className="mt-3 text-3xl font-black leading-tight text-slate-950">
            {name}
          </h3>

          <p className="mt-2 font-bold text-yellow-700">{role}</p>

          <p className="mt-5 leading-8 text-slate-600">{description}</p>

          {cvHref ? (
            <a
              href={cvHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit rounded-full bg-blue-700 px-6 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-blue-800 hover:shadow-lg"
            >
              View My CV
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function AboutPage() {
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
    <main className="min-h-screen bg-slate-50 text-slate-900">
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

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 px-6 py-16 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#2563eb66,transparent_35%),radial-gradient(circle_at_bottom_right,#f59e0b55,transparent_35%)]" />
        <div className="absolute left-10 top-20 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-20 right-12 h-48 w-48 rounded-full bg-yellow-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <a
            href="/"
            className="mb-8 inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-white/20"
          >
            ← Back to Home
          </a>

          <div data-reveal className="max-w-5xl">
            <p className="mb-4 inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-bold uppercase tracking-wide text-blue-100">
              SOMA Education Group
            </p>

            <h1 className="text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
              About Us
            </h1>

            <p className="mt-6 max-w-4xl text-lg leading-9 text-slate-200">
              SOMA Education Group is a student-led education organization built
              to support Cambodian students in STEM, academic competitions, exam
              preparation, and future learning opportunities.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <div
              data-reveal
              className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
            >
              <p className="text-3xl font-black">STEM</p>
              <p className="mt-2 text-sm font-semibold text-slate-200">
                Academic learning and competition preparation
              </p>
            </div>

            <div
              data-reveal
              style={{ transitionDelay: "80ms" }}
              className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
            >
              <p className="text-3xl font-black">Cambodia</p>
              <p className="mt-2 text-sm font-semibold text-slate-200">
                Built for Cambodian high school students
              </p>
            </div>

            <div
              data-reveal
              style={{ transitionDelay: "160ms" }}
              className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
            >
              <p className="text-3xl font-black">Future</p>
              <p className="mt-2 text-sm font-semibold text-slate-200">
                Preparing students for future opportunities
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div data-reveal>
            <SectionLabel>Our Story</SectionLabel>

            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
              Built from a belief in student potential
            </h2>

            <div className="mt-7 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="leading-9 text-slate-600">
                SOMA Education Group began with a simple belief: Cambodian
                students have strong academic potential, but many still lack
                access to structured guidance, high-quality learning resources,
                and meaningful opportunities beyond the classroom.
              </p>

              <p className="mt-5 leading-9 text-slate-600">
                What started from tutoring, academic support, and competition
                preparation has grown into a broader education movement. SOMA
                was created to bring together different academic initiatives
                under one organized structure, allowing students to learn,
                compete, grow, and connect with a community of motivated
                learners and young leaders.
              </p>

              <p className="mt-5 leading-9 text-slate-600">
                We believe education should not only help students pass exams.
                It should also help them think critically, challenge
                themselves, build discipline, and become part of Cambodia's next
                generation of STEM leaders.
              </p>
            </div>
          </div>

          <div
            data-reveal
            style={{ transitionDelay: "120ms" }}
            className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-xl"
          >
            <div
              className="aspect-[4/3] rounded-[1.5rem] bg-gradient-to-br from-blue-100 via-white to-yellow-100 bg-cover bg-center transition duration-700 hover:scale-[1.02]"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgba(23,70,214,0.10), rgba(15,23,42,0.16)), url(" +
                  storyImage +
                  ")",
              }}
            />

            <div className="p-5">
              <p className="text-sm font-black uppercase tracking-wide text-blue-700">
                Remote Student-Led Organization
              </p>

              <h3 className="mt-2 text-2xl font-black text-slate-950">
                Built by students, for students
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 via-white to-yellow-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mx-auto mb-12 max-w-4xl text-center">
            <SectionLabel>Our Ecosystem</SectionLabel>

            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
              Three Main Areas of SOMA
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              SOMA brings learning, competitions, and student development
              together so students can access clearer pathways for growth.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {entities.map((item, index) => (
              <article
                key={item.name}
                data-reveal
                style={{ transitionDelay: String(index * 80) + "ms" }}
                className="flex min-h-full flex-col rounded-[2rem] border border-blue-100 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <p className="text-sm font-black uppercase tracking-wide text-blue-700">
                  {item.label}
                </p>

                <h3 className="mt-3 text-2xl font-black text-slate-950">
                  {item.name}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {item.description}
                </p>

                <a
                  href={item.href}
                  className="mt-auto inline-flex w-fit rounded-full bg-blue-700 px-6 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-blue-800 hover:shadow-lg"
                >
                  Visit Page
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-12 max-w-4xl">
            <SectionLabel>Mission and Values</SectionLabel>

            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
              What guides our work
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              These values guide how SOMA designs programs, supports students,
              organizes competitions, and works with communities.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <div
                key={value.title}
                data-reveal
                style={{ transitionDelay: String(index * 80) + "ms" }}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-2 hover:bg-blue-50 hover:shadow-xl"
              >
                <h3 className="text-2xl font-black text-blue-800">
                  {value.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-12 max-w-4xl">
            <p className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-bold uppercase tracking-wide text-blue-100">
              Leadership
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
              Founders
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              The founders provide long-term direction, strategy, and advising
              support for SOMA Education Group while building student-centered
              academic opportunities.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            {founders.map((person, index) => (
              <TeamCard
                key={person.name}
                name={person.name}
                role={person.role}
                status={person.status}
                image={person.image}
                description={person.description}
                cvHref={person.cvHref}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 via-white to-yellow-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-12 max-w-4xl">
            <SectionLabel>Executive Team</SectionLabel>

            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
              Leadership and Department Roles
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The Executive Team manages planning, communication, daily
              operations, and coordination across SOMA projects.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            {executiveTeam.map((person, index) => (
              <TeamCard
                key={person.name}
                name={person.name}
                role={person.role}
                status={person.status}
                image={person.image}
                description={person.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-900 to-slate-950 px-6 py-20 text-center text-white">
        <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-yellow-400/20 blur-3xl" />

        <div data-reveal className="relative mx-auto max-w-4xl">
          <p className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-bold uppercase tracking-wide text-blue-100">
            Connect with SOMA
          </p>

          <h2 className="mt-5 text-4xl font-black md:text-5xl">
            Build the future of Cambodian education with us
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
            Contact SOMA Education Group to learn more about our programs,
            competitions, student development work, recruitment, or partnership
            opportunities.
          </p>

          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-3 font-bold text-blue-800 transition hover:-translate-y-1 hover:bg-blue-50 hover:shadow-lg"
          >
            Contact Us on Telegram
          </a>
        </div>
      </section>
    </main>
  );
}
