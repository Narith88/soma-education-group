"use client";

import { useEffect } from "react";

/*
  SOMA Competitions page

  Save the main competition photo here:
  public/images/competitions/soma-competition-group.jpg

  Competition logos:
  public/images/e-solver-logo.png
  public/images/cmpo-logo.png
  public/images/mgo-logo.png

  Detail pages:
  app/competitions/e-solver-cambodia/page.tsx
  app/competitions/cmpo/page.tsx
  app/competitions/mgo/page.tsx
*/

const somaTelegramLink = "https://t.me/somaeducationgroup";
const futureCompetitionUpdatesLink = "https://t.me/esolvercambodianews";

const heroImage = "/images/competitions/soma-competition-group.jpg";

type CompetitionTone = "emerald" | "blue" | "gold";

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
  tone: CompetitionTone;
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
    tone: "emerald",
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
    tone: "blue",
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
    tone: "gold",
    bestFor:
      "Students who want to strengthen math thinking through olympiad-style problems.",
    status: "Math Competition",
  },
];

const navigationButtons = [
  {
    label: "Competition Programs",
    href: "#programs",
  },
  {
    label: "Coming Soon",
    href: "#coming-soon",
  },
  {
    label: "Why It Matters",
    href: "#why-competitions-matter",
  },
  {
    label: "Join Updates",
    href: "#join",
  },
];

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-bold uppercase tracking-wide text-blue-700">
      {children}
    </p>
  );
}

function competitionHeaderClass(tone: CompetitionTone) {
  if (tone === "emerald") {
    return "bg-gradient-to-br from-emerald-800 via-blue-900 to-slate-950 px-6 py-6 text-white md:px-8";
  }

  if (tone === "gold") {
    return "bg-gradient-to-br from-yellow-700 via-orange-800 to-slate-950 px-6 py-6 text-white md:px-8";
  }

  return "bg-gradient-to-br from-blue-950 via-indigo-900 to-slate-950 px-6 py-6 text-white md:px-8";
}

function CompetitionCard({
  competition,
  index,
}: {
  competition: Competition;
  index: number;
}) {
  return (
    <article
      data-reveal
      style={{ transitionDelay: String(index * 90) + "ms" }}
      className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className={competitionHeaderClass(competition.tone)}>
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-white/75">
              {competition.badge}
            </p>

            <h2 className="mt-2 text-3xl font-black md:text-4xl">
              {competition.shortName}
            </h2>
          </div>

          <div className="w-fit rounded-full bg-white/15 px-5 py-3 text-sm font-black text-white backdrop-blur">
            {competition.status}
          </div>
        </div>
      </div>

      <div className="grid gap-8 p-6 md:grid-cols-[320px_1fr] md:p-8">
        <div className="flex min-h-72 items-center justify-center rounded-[2rem] bg-gradient-to-br from-blue-50 via-white to-yellow-50 p-6 transition group-hover:bg-blue-50">
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
          <p className="text-sm font-black uppercase tracking-wide text-blue-700">
            {competition.shortName}
          </p>

          <h3 className="mt-2 text-3xl font-black text-slate-950">
            {competition.name}
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            {competition.description}
          </p>

          <div className="mt-5 rounded-3xl bg-blue-50 p-5">
            <p className="text-sm font-black uppercase tracking-wide text-blue-700">
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
                className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700"
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
              className="inline-flex rounded-full bg-blue-700 px-6 py-3 text-center font-bold text-white transition hover:-translate-y-1 hover:bg-blue-800 hover:shadow-lg"
            >
              Join {competition.shortName} Channel
            </a>

            <a
              href={competition.infoHref}
              className="inline-flex rounded-full border border-blue-700 px-6 py-3 text-center font-bold text-blue-700 transition hover:-translate-y-1 hover:bg-blue-50 hover:shadow-md"
            >
              View More About {competition.name}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function CompetitionsPage() {
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
        <div className="absolute left-10 top-20 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-20 right-12 h-40 w-40 rounded-full bg-yellow-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <a
            href="/"
            className="mb-8 inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-white/20"
          >
            ← Back to Home
          </a>

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
            <div data-reveal>
              <p className="mb-4 inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-bold uppercase tracking-wide text-blue-100">
                SOMA Education Group
              </p>

              <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
                SOMA Competitions
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-200">
                SOMA Education Group organizes and supports academic
                competitions that help Cambodian students grow in mathematics,
                physics, problem-solving, teamwork, creativity, and confidence.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
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

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                  <p className="text-3xl font-black">3</p>
                  <p className="mt-1 text-sm text-slate-200">
                    Current competition projects
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                  <p className="text-3xl font-black">STEM</p>
                  <p className="mt-1 text-sm text-slate-200">
                    Math, physics, and problem solving
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                  <p className="text-3xl font-black">Soon</p>
                  <p className="mt-1 text-sm text-slate-200">
                    More competitions coming soon
                  </p>
                </div>
              </div>
            </div>

            <div
              data-reveal
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur"
            >
              <div className="overflow-hidden rounded-[1.5rem] bg-slate-900">
                <img
                  src={heroImage}
                  alt="SOMA competition participants and organizers"
                  className="aspect-[16/10] h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="p-5">
                <p className="text-sm font-bold uppercase tracking-wide text-blue-100">
                  Real Student Community
                </p>
                <h2 className="mt-2 text-2xl font-black">
                  Competitions that connect students, mentors, and learning
                </h2>
                <p className="mt-3 leading-7 text-slate-300">
                  SOMA competitions are built to give students a real academic
                  experience, not only a test.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="mx-auto max-w-7xl px-6 py-20">
        <div data-reveal className="mx-auto mb-12 max-w-4xl text-center">
          <SectionLabel>Competition Programs</SectionLabel>

          <h2 className="mt-5 text-4xl font-black md:text-5xl">
            Our Competitions
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600">
            Each competition under SOMA has its own purpose, identity, and
            student community. Students can join each competition channel for
            announcements, updates, and future registration information.
          </p>
        </div>

        <div className="space-y-8">
          {competitions.map((competition, index) => (
            <CompetitionCard
              key={competition.shortName}
              competition={competition}
              index={index}
            />
          ))}

          <div
            id="coming-soon"
            data-reveal
            className="rounded-[2rem] border border-dashed border-blue-300 bg-blue-50 p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
          >
            <p className="text-sm font-black uppercase tracking-wide text-blue-700">
              Coming Soon
            </p>

            <h3 className="mt-2 text-3xl font-black text-slate-950">
              More Competitions Coming Soon
            </h3>

            <p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-600">
              SOMA Education Group plans to continue developing new academic
              competitions for Cambodian students. Future competitions may
              include more subjects, more grade levels, and more opportunities
              for students to challenge themselves.
            </p>

            <a
              href={futureCompetitionUpdatesLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-full bg-blue-700 px-8 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-blue-800 hover:shadow-lg"
            >
              Follow Future Competition Updates
            </a>
          </div>
        </div>
      </section>

      <section id="why-competitions-matter" className="mx-auto max-w-7xl px-6 pb-20">
        <div
          data-reveal
          className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10"
        >
          <SectionLabel>Why It Matters</SectionLabel>

          <h2 className="mt-5 text-4xl font-black text-slate-950 md:text-5xl">
            Why SOMA Competitions Matter
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-slate-600">
            SOMA competitions are built to help students go beyond
            memorization. Through challenging problems, collaboration, and
            competition experience, students can improve their thinking skills
            and prepare for future academic opportunities.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-blue-50 p-6 transition hover:-translate-y-2 hover:shadow-lg">
              <h3 className="text-xl font-black text-blue-900">
                Strong Thinking
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Students practice logic, analysis, problem-solving, and
                creative thinking through competition-style challenges.
              </p>
            </div>

            <div className="rounded-3xl bg-yellow-50 p-6 transition hover:-translate-y-2 hover:shadow-lg">
              <h3 className="text-xl font-black text-yellow-900">
                Student Confidence
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Competitions help students become more confident, independent,
                and ready to face academic challenges.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-100 p-6 transition hover:-translate-y-2 hover:shadow-lg">
              <h3 className="text-xl font-black text-slate-950">
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

      <section
        id="join"
        className="relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-900 to-slate-950 px-6 py-20 text-center text-white"
      >
        <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-yellow-400/20 blur-3xl" />

        <div data-reveal className="relative mx-auto max-w-4xl">
          <p className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-bold uppercase tracking-wide text-blue-100">
            Join Updates
          </p>

          <h2 className="mt-5 text-4xl font-black md:text-5xl">
            Interested in Joining a SOMA Competition?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
            Join each competition channel for announcements, registration
            details, competition updates, rules, eligibility, and important
            dates. More competitions will be announced soon.
          </p>

          <a
            href={somaTelegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-3 font-bold text-blue-800 transition hover:-translate-y-1 hover:bg-blue-50 hover:shadow-lg"
          >
            Message Us on Telegram
          </a>
        </div>
      </section>
    </main>
  );
}