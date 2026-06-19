"use client";

import { useEffect } from "react";

/*
  E-Solver Cambodia Detail Page

  File location:
  app/competitions/e-solver-cambodia/page.tsx

  Main image folders:

  Hero:
  public/images/competitions/e-solver/hero.jpg

  Visual Highlights:
  public/images/competitions/e-solver/highlight-opening.jpg
  public/images/competitions/e-solver/highlight-exam.jpg
  public/images/competitions/e-solver/highlight-awarding.jpg
  public/images/competitions/e-solver/highlight-community.jpg

  Bridging Academic Excellence and Technology:
  public/images/competitions/e-solver/about-learning.jpg
  public/images/competitions/e-solver/about-technology.jpg
  public/images/competitions/e-solver/about-students.jpg
  public/images/competitions/e-solver/about-ceremony.jpg
  public/images/competitions/e-solver/about-teamwork.jpg
  public/images/competitions/e-solver/about-chemistry.jpg

  Who Can Join:
  public/images/competitions/e-solver/audience-grade-7-9.jpg
  public/images/competitions/e-solver/audience-grade-10-12.jpg
  public/images/competitions/e-solver/audience-public-private.jpg
  public/images/competitions/e-solver/audience-rural-urban.jpg

  2025 Gallery:
  public/images/competitions/e-solver/gallery-2025-1.jpg
  public/images/competitions/e-solver/gallery-2025-2.jpg
  public/images/competitions/e-solver/gallery-2025-3.jpg
  public/images/competitions/e-solver/gallery-2025-4.jpg
  public/images/competitions/e-solver/gallery-2025-5.jpg
  public/images/competitions/e-solver/gallery-2025-6.jpg

  2024 Gallery:
  public/images/competitions/e-solver/gallery-2024-1.jpg
  public/images/competitions/e-solver/gallery-2024-2.jpg
  public/images/competitions/e-solver/gallery-2024-3.jpg
  public/images/competitions/e-solver/gallery-2024-4.jpg

  Materials:
  public/images/competitions/e-solver/gold-medal.jpg
  public/images/competitions/e-solver/silver-medal.jpg
  public/images/competitions/e-solver/bronze-medal.jpg
  public/images/competitions/e-solver/honorable-mention-medal.jpg
  public/images/competitions/e-solver/tote-bag.jpg
  public/images/competitions/e-solver/name-tag.jpg

  Sponsor logos:
  public/images/sponsors/cam-asean.png
  public/images/sponsors/newton-learning-center.png
  public/images/sponsors/baktouk-copy.png
  public/images/sponsors/bakyong-bakery.png
  public/images/sponsors/brown-coffee.png
  public/images/sponsors/china-cambodia-times.png
  public/images/sponsors/social-issue-solution-club.png
  public/images/sponsors/opportunities.png
  public/images/sponsors/linker.png
  public/images/sponsors/paragon-international-university.png
  public/images/sponsors/dongkouv.png
*/

const somaTelegramLink = "https://t.me/somaeducationgroup";
const telegramLink2 = "https://t.me/esolvercambodiatalk";

const gallery2025DriveLink =
  "https://drive.google.com/drive/folders/1DV6bcc-tbXK2WnpHeZzIgIUyMMGiNYs4?usp=sharing";

const gallery2024DriveLink = "#replace-with-2024-gallery-link";

const heroImage = "/images/competitions/e-solver/hero.jpg";

type Stat = {
  value: string;
  label: string;
};


type Material = {
  title: string;
  text: string;
  image: string;
};

type HighlightImage = {
  title: string;
  text: string;
  image: string;
};

type Sponsor = {
  name: string;
  type: string;
  logo: string;
  logoShape?: "square" | "wide";
};


type FAQ = {
  question: string;
  answer: string;
};

const navigationButtons = [
  { label: "About", href: "#about" },
  { label: "Who Can Join", href: "#audience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Materials", href: "#materials" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "FAQ", href: "#faq" },
];

const impactStats: Stat[] = [
  {
    value: "2021",
    label: "Established Since",
  },
  {
    value: "3000+",
    label: "Student Participants",
  },
  {
    value: "3",
    label: "Core Subjects",
  },
  {
    value: "First",
    label: "Chemistry Competition in Cambodia",
  },
];


const audienceDetails = [
  {
    title: "Grade 7 to Grade 12",
    text: "Open to high school students from lower secondary to upper secondary level.",
  },
  {
    title: "All Students Welcome",
    text: "Open to both male and female students who are interested in STEM learning.",
  },
  {
    title: "Public and Private Schools",
    text: "Students from public schools, private schools, and learning centers can participate.",
  },
  {
    title: "Across Cambodia",
    text: "Designed to reach students from both urban and rural communities.",
  },
];


const highlightImages: HighlightImage[] = [
  {
    title: "Opening Moment",
    text: "",
    image: "/images/competitions/e-solver/highlight-opening.jpg",
  },
  {
    title: "Students in Action",
    text: "",
    image: "/images/competitions/e-solver/highlight-exam.jpg",
  },
  {
    title: "Awarding Ceremony",
    text: "",
    image: "/images/competitions/e-solver/highlight-awarding.jpg",
  },
  {
    title: "Community and Teamwork",
    text: "",
    image: "/images/competitions/e-solver/highlight-community.jpg",
  },
];

const aboutImages: HighlightImage[] = [
  {
    title: "Academic Foundation",
    text: "Students strengthen core STEM knowledge through Mathematics, Physics, and Chemistry.",
    image: "/images/competitions/e-solver/about-learning.jpg",
  },
  {
    title: "Technology Experience",
    text: "The competition introduces a modern online testing experience and digital learning culture.",
    image: "/images/competitions/e-solver/about-technology.jpg",
  },
  {
    title: "Student Confidence",
    text: "Participants gain confidence by challenging themselves beyond the classroom.",
    image: "/images/competitions/e-solver/about-students.jpg",
  },
  {
    title: "Achievement Moment",
    text: "Awarding moments help students feel proud of their effort, discipline, and growth.",
    image: "/images/competitions/e-solver/about-ceremony.jpg",
  },
  {
    title: "Team Support",
    text: "Organizers, teachers, and volunteers create a supportive environment for young learners.",
    image: "/images/competitions/e-solver/about-teamwork.jpg",
  },
  {
    title: "Chemistry Opportunity",
    text: "E-Solver Cambodia creates more visibility for Chemistry competition opportunities in Cambodia.",
    image: "/images/competitions/e-solver/about-chemistry.jpg",
  },
];


const gallery2025 = [
  "/images/competitions/e-solver/gallery-2025-1.JPG",
  "/images/competitions/e-solver/gallery-2025-2.JPG",
  "/images/competitions/e-solver/gallery-2025-3.JPG",
  "/images/competitions/e-solver/gallery-2025-4.JPG",
  "/images/competitions/e-solver/gallery-2025-5.JPG",
  "/images/competitions/e-solver/gallery-2025-6.JPG",
];

const gallery2024 = [
  "/images/competitions/e-solver/gallery-2024-1.jpg",
  "/images/competitions/e-solver/gallery-2024-2.jpg",
  "/images/competitions/e-solver/gallery-2024-3.jpg",
  "/images/competitions/e-solver/gallery-2024-4.jpg",
];

const competitionMaterials: Material[] = [
  {
    title: "Mathematics Medals",
    text: "For the 3 highest achievers in mathematics in each grade category.",
    image: "/images/competitions/e-solver/gold-medal.jpg",
  },
  {
    title: "Physics Medals",
    text: "For the 3 highest achievers in physics in each grade category.",
    image: "/images/competitions/e-solver/silver-medal.jpg",
  },
  {
    title: "Chemistry Medal",
    text: "For the 3 highest achievers in chemsitry in each grade category.",
    image: "/images/competitions/e-solver/bronze-medal.jpg",
  },
  {
    title: "Honorable Mention Medal",
    text: "For high-performing participants who deserve special recognition.",
    image: "/images/competitions/e-solver/honorable-mention-medal.jpg",
  },
  {
    title: "E-Solver Cambodia Tote Bag",
    text: "A branded student material that helps make the event memorable.",
    image: "/images/competitions/e-solver/tote-bag.jpg",
  },
  {
    title: "Participant and Organizer Tags",
    text: "Event tags for students, organizers, volunteers, and partners.",
    image: "/images/competitions/e-solver/name-tag.jpg",
  },
];

const sponsors2025: Sponsor[] = [
  {
    name: "CAM-ASEAN International School",
    type: "Scholarship / Venue Sponsor",
    logo: "/images/sponsors/cam-asean.png",
  },
  {
    name: "Newton Learning Center",
    type: "Scholarship Sponsor",
    logo: "/images/sponsors/newton-learning-center.png",
  },
  {
    name: "Brown Coffee",
    type: "Food Sponsor",
    logo: "/images/sponsors/brown-coffee.png",
    logoShape: "wide",
  },
  {
    name: "Baktouk Copy",
    type: "Product / Discount Sponsor",
    logo: "/images/sponsors/baktouk-copy.png",
  },
  {
    name: "BakYong Bakery",
    type: "Food Sponsor",
    logo: "/images/sponsors/bakyong-bakery.png",
  },
  
  {
    name: "The China-Cambodia Times",
    type: "Media Partner",
    logo: "/images/sponsors/china-cambodia-times.png",
  },
  {
    name: "Social Issue Solution Club",
    type: "Media Partner",
    logo: "/images/sponsors/social-issue-solution-club.png",
  },
  {
    name: "Opportunities",
    type: "Media Partner",
    logo: "/images/sponsors/opportunities.png",
  },
  {
    name: "Linker",
    type: "Media Partner",
    logo: "/images/sponsors/linker.png",
  },
];

const sponsors2024: Sponsor[] = [
  {
    name: "Paragon International University",
    type: "Venue Sponsor",
    logo: "/images/sponsors/paragon-international-university.png",
    logoShape: "wide",
  },
  {
    name: "Newton Learning Center",
    type: "Scholarship Sponsor",
    logo: "/images/sponsors/newton-learning-center.png",
  },
  {
    name: "BakYong Bakery",
    type: "Food Sponsor",
    logo: "/images/sponsors/bakyong-bakery.png",
  },
  {
    name: "Dongkouv",
    type: "Media Sponsor",
    logo: "/images/sponsors/dongkouv.png",
  },
  {
    name: "Social Issue Solution Club",
    type: "Media Partner",
    logo: "/images/sponsors/social-issue-solution-club.png",
  },
];

const faqs: FAQ[] = [
  {
    question: "How many students will receive top awards?",
    answer:
      "In each subject and category, there will be one gold medalist, one silver medalist, one bronze medalist, and three honorable mentions.",
  },
  {
    question: "How many rounds does the competition have?",
    answer:
      "The competition has only one round. Students take the exam through a test portal, and selected winners are invited to Phnom Penh for the awarding ceremony.",
  },
  {
    question: "How do students take the exam?",
    answer:
      "Students take the exam online through a test portal. The exam is asynchronous, so students can take it anywhere between 8:00 AM and 8:00 PM on the competition day.",
  },
  {
    question: "What are the prizes?",
    answer:
      "Prizes include medals, certificates, scholarships from CAM-ASEAN International School, books and coupons from sponsors, scholarships from Newton Learning Center, and opportunities to work with SOMA Education Group.",
  },
  {
    question: "What if I do not receive a top award?",
    answer:
      "Even if students do not receive a top award, they may still receive scholarships or benefits from partner organizations, along with a certificate of participation.",
  },
  {
    question: "What if I am busy during the exam day?",
    answer:
      "Because the test is asynchronous, students can take the exam at any time between 8:00 AM and 8:00 PM on the competition day.",
  },
];

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-bold uppercase tracking-wide text-blue-700">
      {children}
    </p>
  );
}

function GalleryImage({ src, index }: { src: string; index: number }) {
  return (
    <div
      data-reveal
      style={{ transitionDelay: String(index * 70) + "ms" }}
      className="group w-[320px] shrink-0 snap-start overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98] md:w-[420px]"
    >
      <div
        className="aspect-video bg-gradient-to-br from-blue-100 via-white to-yellow-100 bg-cover bg-center transition duration-700 group-hover:scale-110"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(23,70,214,0.08), rgba(15,23,42,0.12)), url(" +
            src +
            ")",
        }}
      />
    </div>
  );
}

function VisualHighlightCard({
  item,
  index,
}: {
  item: HighlightImage;
  index: number;
}) {
  return (
    <div
      data-reveal
      style={{ transitionDelay: String(index * 80) + "ms" }}
      className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98]"
    >
      <div className="relative overflow-hidden">
        <div
          className="aspect-[4/3] bg-gradient-to-br from-blue-100 via-white to-emerald-100 bg-cover bg-center transition duration-700 group-hover:scale-110"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(16,185,129,0.08), rgba(15,23,42,0.14)), url(" +
              item.image +
              ")",
          }}
        />

        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/55 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
      </div>

      <div className="p-6">
        <p className="text-xs font-black uppercase tracking-wide text-blue-700">
          Photo Highlight {index + 1}
        </p>

        <h3 className="mt-2 text-2xl font-black transition group-hover:text-blue-700">
          {item.title}
        </h3>

        <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
      </div>
    </div>
  );
}

function ImageStoryCard({
  item,
  index,
  label,
}: {
  item: HighlightImage;
  index: number;
  label: string;
}) {
  return (
    <div
      data-reveal
      style={{ transitionDelay: String(index * 70) + "ms" }}
      className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98]"
    >
      <div
        className="aspect-[4/3] bg-gradient-to-br from-emerald-100 via-white to-blue-100 bg-cover bg-center transition duration-700 group-hover:scale-110"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(14,165,233,0.08), rgba(15,23,42,0.14)), url(" +
            item.image +
            ")",
        }}
      />

      <div className="p-5">
        {label ? (
          <p className="text-xs font-black uppercase tracking-wide text-emerald-700">
            {label} {index + 1}
          </p>
        ) : null}

        <h3 className={label ? "mt-2 text-xl font-black transition group-hover:text-blue-700" : "text-xl font-black transition group-hover:text-blue-700"}>
          {item.title}
        </h3>

        <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
      </div>
    </div>
  );
}

function MaterialCard({ item, index }: { item: Material; index: number }) {
  return (
    <div
      data-reveal
      style={{ transitionDelay: String(index * 80) + "ms" }}
      className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98]"
    >
      <div
        className="aspect-video bg-gradient-to-br from-blue-100 via-white to-yellow-100 bg-cover bg-center transition duration-700 group-hover:scale-110"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(23,70,214,0.08), rgba(15,23,42,0.10)), url(" +
            item.image +
            ")",
        }}
      />

      <div className="p-6">
        <h3 className="text-xl font-black transition group-hover:text-blue-700">
          {item.title}
        </h3>

        <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
      </div>
    </div>
  );
}

function SponsorCard({
  sponsor,
  index,
}: {
  sponsor: Sponsor;
  index: number;
}) {
  const isWideLogo = sponsor.logoShape === "wide";

  return (
    <div
      data-reveal
      style={{ transitionDelay: String(index * 60) + "ms" }}
      className="group flex min-h-[320px] w-[280px] shrink-0 snap-start flex-col rounded-[2rem] border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:border-blue-200 hover:shadow-2xl active:scale-[0.98] md:w-[300px]"
    >
      <div className="flex h-36 items-center justify-center overflow-hidden rounded-3xl bg-slate-50 p-5 transition duration-300 group-hover:bg-blue-50">
        <img
          src={sponsor.logo}
          alt={sponsor.name + " logo"}
          className={
            isWideLogo
              ? "max-h-20 w-full max-w-[245px] object-contain"
              : "max-h-24 max-w-[130px] object-contain"
          }
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h3 className="mt-5 flex min-h-[3.5rem] items-center justify-center text-xl font-black leading-tight transition group-hover:text-blue-700">
          {sponsor.name}
        </h3>

        <p className="mt-auto inline-flex min-h-[2.5rem] items-center justify-center rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 transition duration-300 group-hover:bg-blue-700 group-hover:text-white">
          {sponsor.type}
        </p>
      </div>
    </div>
  );
}

function SponsorYearSection({
  year,
  title,
  text,
  sponsors,
}: {
  year: string;
  title: string;
  text: string;
  sponsors: Sponsor[];
}) {
  return (
    <div className="mt-12">
      <div
        data-reveal
        className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <p className="text-sm font-black uppercase tracking-wide text-blue-700">
            {year} Sponsors
          </p>

          <h3 className="mt-2 text-3xl font-black">{title}</h3>
        </div>

        {text ? <p className="max-w-2xl leading-7 text-slate-600">{text}</p> : null}
      </div>

      <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-500">
        <span className="inline-flex h-2 w-2 rounded-full bg-blue-600" />
        <span>Scroll left or right to view all partners</span>
      </div>

      <div className="sponsor-scroll -mx-6 flex snap-x items-stretch gap-6 overflow-x-auto scroll-smooth px-6 pb-8 pt-1">
        {sponsors.map((sponsor, index) => (
          <SponsorCard
            key={year + sponsor.name}
            sponsor={sponsor}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default function ESolverCambodiaPage() {
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
          html {
            scroll-behavior: smooth;
          }

          [data-reveal] {
            opacity: 0;
            transform: translateY(24px);
            transition: opacity 700ms ease, transform 700ms ease;
          }

          [data-reveal].is-visible {
            opacity: 1;
            transform: translateY(0);
          }

          ::selection {
            background: #bfdbfe;
            color: #172554;
          }

          .sponsor-scroll {
            scrollbar-width: thin;
            scrollbar-color: #2563eb #e2e8f0;
          }

          .sponsor-scroll::-webkit-scrollbar {
            height: 10px;
          }

          .sponsor-scroll::-webkit-scrollbar-track {
            border-radius: 999px;
            background: #e2e8f0;
          }

          .sponsor-scroll::-webkit-scrollbar-thumb {
            border-radius: 999px;
            background: #2563eb;
          }

          .sponsor-scroll::-webkit-scrollbar-thumb:hover {
            background: #1d4ed8;
          }

          @media (prefers-reduced-motion: reduce) {
            html {
              scroll-behavior: auto;
            }

            [data-reveal] {
              opacity: 1;
              transform: none;
              transition: none;
            }
          }
        `}
      </style>

      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-blue-950 to-slate-950 px-6 py-16 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#10b98155,transparent_35%),radial-gradient(circle_at_bottom_right,#f59e0b44,transparent_35%)]" />
        <div className="absolute left-10 top-20 h-40 w-40 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute bottom-16 right-12 h-48 w-48 rounded-full bg-yellow-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap gap-3">
            <a
              href="/competitions"
              className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 active:scale-95"
            >
              ← Back to Competitions
            </a>

            <a
              href="/"
              className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 active:scale-95"
            >
              Back to Home
            </a>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
            <div data-reveal>
              <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
                E-Solver Cambodia
              </h1>

              <p className="mt-6 max-w-4xl text-lg leading-9 text-slate-200">
                E-Solver Cambodia Competition is designed to blend academic
                excellence with technology. It gives Cambodian high school
                students a platform to showcase their talents in Mathematics,
                Physics, and Chemistry while developing digital literacy,
                problem-solving skills, and confidence for the future.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {navigationButtons.map((button) => (
                  <a
                    key={button.href}
                    href={button.href}
                    className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-center text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-blue-800 hover:shadow-lg active:scale-95"
                  >
                    {button.label}
                  </a>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={telegramLink2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-8 py-3 text-center font-bold text-blue-800 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-lg active:scale-95"
                >
                  Join E-Solver Cambodia Updates
                </a>
              </div>
            </div>

            <div
              data-reveal
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur transition-all duration-500 hover:-translate-y-3 hover:bg-white/15"
            >
              <div
                className="aspect-[16/10] rounded-[1.5rem] bg-cover bg-center transition duration-700 group-hover:scale-[1.03]"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgba(16,185,129,0.12), rgba(15,23,42,0.18)), url(" +
                    heroImage +
                    ")",
                }}
              />

              <div className="p-5">
                <p className="text-sm font-bold uppercase tracking-wide text-emerald-100">
                  Since 2021
                </p>

                <h2 className="mt-2 text-2xl font-black">
                  A national platform for STEM talent
                </h2>

                <p className="mt-3 leading-7 text-slate-300">
                  Almost 3000+ students have participated in E-Solver Cambodia,
                  making it one of the important student STEM competition
                  projects under SOMA Education Group.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {impactStats.map((stat, index) => (
              <div
                key={stat.label}
                data-reveal
                style={{ transitionDelay: String(index * 80) + "ms" }}
                className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:bg-white/15 hover:shadow-xl"
              >
                <p className="text-3xl font-black">{stat.value}</p>

                <p className="mt-2 text-sm font-semibold text-slate-200">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div data-reveal>
            <SectionLabel>Introduction</SectionLabel>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Bridging Academic Excellence and Technology
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              This section includes competition images, so everyone can
              understand the academic purpose, student energy, technology use,
              and achievement culture of E-Solver Cambodia.
            </p>
          </div>

          <div
            data-reveal
            className="rounded-[2rem] border border-slate-200 bg-white p-8 leading-8 text-slate-600 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
          >
            <p className="mt-5">
              In Cambodia, one of the challenges in education is the limited
              access to technological knowledge and STEM opportunities,
              especially for students in rural areas. Many Cambodian high school
              students have strong potential in Mathematics, Physics, and
              Chemistry, but they may not have enough platforms to demonstrate
              their abilities. E-Solver Cambodia was created to help close that
              gap and inspire the next generation of learners.
            </p>

            <div className="mt-6 rounded-3xl bg-emerald-50 p-5 transition hover:bg-emerald-100">
              <p className="font-black text-emerald-900">
                Important Highlight
              </p>
              <p className="mt-2 text-slate-700">
                E-Solver Cambodia is also highlighted as the first Chemistry
                competition in Cambodia, giving students more opportunities to
                compete in a subject that is often underrepresented in national
                student competitions.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {aboutImages.map((item, index) => (
            <ImageStoryCard
              key={item.title}
              item={item}
              index={index}
              label=""
            />
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mx-auto mb-12 max-w-4xl text-center">
            <SectionLabel>Visual Highlights</SectionLabel>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Moments That Make the Competition Feel Alive
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {highlightImages.map((item, index) => (
              <VisualHighlightCard
                key={item.title}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="audience" className="mx-auto max-w-7xl px-6 py-20">
  <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
    <div data-reveal>
      <SectionLabel>Audience</SectionLabel>

      <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
        Who Can Join?
      </h2>

      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
        E-Solver Cambodia is designed for Cambodian high school students who
        want to challenge themselves in Mathematics, Physics, Chemistry, and
        technology-enhanced problem solving.
      </p>

      <div className="mt-8 grid gap-4">
        {audienceDetails.map((item, index) => (
          <div
            key={item.title}
            data-reveal
            style={{ transitionDelay: String(index * 70) + "ms" }}
            className="group rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
          >
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-lg font-black text-blue-700 transition duration-300 group-hover:bg-blue-700 group-hover:text-white">
                {index + 1}
              </div>

              <div>
                <h3 className="text-xl font-black text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div
      data-reveal
      className="grid gap-5 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm"
    >
      <div
        className="group relative overflow-hidden rounded-[1.5rem] bg-slate-100"
      >
        <div
          className="aspect-[16/10] bg-cover bg-center transition duration-700 group-hover:scale-105"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(15,23,42,0.18), rgba(37,99,235,0.18)), url(/images/competitions/e-solver/audience-students.jpg)",
          }}
        />

        <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur">
          <p className="text-sm font-black uppercase tracking-wide text-blue-700">
            Student Community
          </p>

          <h3 className="mt-1 text-xl font-black text-slate-950">
            Built for young STEM learners
          </h3>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="group overflow-hidden rounded-[1.5rem] bg-slate-100">
          <div
            className="aspect-[4/3] bg-cover bg-center transition duration-700 group-hover:scale-105"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(37,99,235,0.12), rgba(15,23,42,0.16)), url(/images/competitions/e-solver/audience-exam.jpg)",
            }}
          />

          <div className="bg-white p-4">
            <h3 className="font-black">Online Competition</h3>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              Students can participate through the test portal.
            </p>
          </div>
        </div>

        <div className="group overflow-hidden rounded-[1.5rem] bg-slate-100">
          <div
            className="aspect-[4/3] bg-cover bg-center transition duration-700 group-hover:scale-105"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(16,185,129,0.12), rgba(15,23,42,0.16)), url(/images/competitions/e-solver/audience-award.jpg)",
            }}
          />

          <div className="bg-white p-4">
            <h3 className="font-black">Recognition</h3>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              Outstanding students receive medals and certificates.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <section id="gallery" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-10">
            <SectionLabel>2025 Gallery</SectionLabel>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              E-SC Season 4 Medal Awarding Ceremony
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-slate-600">
              កម្មវិធីប្រគល់មេដាយជូនម្ចាស់ជ័យលាភី E-SC រដូវកាលទី ៤
              កាលពីថ្ងៃទី ២៥ មករា ឆ្នាំ ២០២៥
            </p>

            <p className="mt-3 max-w-4xl leading-8 text-slate-600">
              The 2025 gallery highlights the E-Solver Cambodia Season 4 medal
              awarding ceremony, celebrating students who achieved outstanding
              results in Mathematics, Physics, and Chemistry.
            </p>

            <a
              href={gallery2025DriveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-full bg-blue-700 px-6 py-3 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:shadow-lg active:scale-95"
            >
              View Full 2025 Gallery
            </a>
          </div>

          <div className="flex snap-x gap-6 overflow-x-auto scroll-smooth pb-8">
            {gallery2025.map((src, index) => (
              <GalleryImage key={src} src={src} index={index} />
            ))}
          </div>

          <div data-reveal className="mb-8 mt-14">
            <SectionLabel>2024 Gallery</SectionLabel>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              E-SC Season 3 Medal Awarding Ceremony
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-slate-600">
              This section highlights the E-Solver Cambodia Season 3 medal
              awarding ceremony. Replace the image files and gallery link with
              your real 2024 event photos when you are ready.
            </p>

            <a
              href={gallery2024DriveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-full border border-blue-700 px-6 py-3 font-bold text-blue-700 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-md active:scale-95"
            >
              View Full 2024 Gallery
            </a>
          </div>

          <div className="flex snap-x gap-6 overflow-x-auto scroll-smooth pb-8">
            {gallery2024.map((src, index) => (
              <GalleryImage key={src} src={src} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="materials"
        className="bg-gradient-to-br from-blue-50 via-white to-yellow-50 px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mx-auto mb-12 max-w-4xl text-center">
            <SectionLabel>Competition Materials</SectionLabel>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Medals, Tags, and Student Materials
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The medal section is now separated into individual cards, so each
              picture can stand alone and look more professional on the page.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {competitionMaterials.map((item, index) => (
              <MaterialCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="sponsors" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-10">
            <SectionLabel>Partners and Sponsors</SectionLabel>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Organizations Supporting E-Solver Cambodia
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-slate-600">
              Sponsor logos are separated by season so each year can show the
              correct partner placement and recognition.
            </p>
          </div>

          <SponsorYearSection
            year="2025"
            title="E-SC Season 4 Sponsors"
            text=""
            sponsors={sponsors2025}
          />

          <SponsorYearSection
            year="2024"
            title="E-SC Season 3 Sponsors"
            text=""
            sponsors={sponsors2024}
          />
        </div>
      </section>

      <section id="faq" className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div data-reveal className="mb-10 text-center">
            <SectionLabel>FAQ</SectionLabel>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                data-reveal
                style={{ transitionDelay: String(index * 60) + "ms" }}
                className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-black">
                  <span>{faq.question}</span>

                  <span className="text-2xl text-blue-700 transition duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 leading-8 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-800 via-blue-900 to-slate-950 px-6 py-20 text-center text-white">
        <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-yellow-400/20 blur-3xl" />

        <div data-reveal className="relative mx-auto max-w-4xl">
          <p className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-bold uppercase tracking-wide text-blue-100">
            Join the Community
          </p>

          <h2 className="mt-5 text-4xl font-black md:text-5xl">
            Follow E-Solver Cambodia Updates
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
            Join the official E-Solver Cambodia update channel for
            announcements, registration information, rules, results, and future
            competition updates.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={telegramLink2}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-8 py-3 font-bold text-blue-800 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-lg active:scale-95"
            >
              Join E-Solver Group 
            </a>

            <a
              href={somaTelegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/25 bg-white/10 px-8 py-3 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-blue-800 hover:shadow-lg active:scale-95"
            >
              Contact SOMA
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 px-6 py-8 text-center text-sm text-slate-300">
        <strong className="block text-lg text-white">E-Solver Cambodia</strong>

        <p className="mt-1">
          A Mathematics, Physics, and Chemistry Competition for Cambodian High
          School Students
        </p>

        <p className="mt-3">
          © 2021–2026 E-Solver Cambodia. Organized under SOMA Education Group.
          All rights reserved.
        </p>
      </footer>
    </main>
  );
}
