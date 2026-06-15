"use client";

import { useEffect } from "react";

/*
  Newton Learning Center page

  Main folders to save images:

  Logo:
  public/images/nlc-logo.png

  Course posters:
  public/images/courses/math-bacii-2026.png
  public/images/courses/physics-bacii-2026.png
  public/images/courses/physics-exam-bacii-2026.png

  Book covers:
  public/images/books/bacii-physics-book-1.png
  public/images/books/bacii-physics-book-2.png
  public/images/books/bacii-chemistry-book-1.png
  public/images/books/bacii-chemistry-book-2.png
  public/images/books/bacii-history-book.png
  public/images/books/bacii-complete-set.png
  public/images/books/outstanding-physics-mechanics-1.png
  public/images/books/outstanding-physics-mechanics-2.png
  public/images/books/outstanding-wave-mechanics.png
  public/images/books/outstanding-math-207-olympiad-problems.png
  public/images/books/outstanding-student-set.png

  Tutor photos:
  public/images/tutors/nlc-tutor-1.jpg
  public/images/tutors/nlc-tutor-2.jpg
  public/images/tutors/nlc-tutor-3.jpg
  public/images/tutors/nlc-tutor-4.jpg

  Notes:
  - For book images, use vertical poster/book-cover images if possible
  - For course images, use poster-style images
  - Do not include "public" in the src path
  - Example: use /images/books/bacii-physics-book-1.png
*/

const telegramLink = "https://t.me/NewtonLearningCenter";
const facebookLink = "https://facebook.com/newtonlearningcenter75";
const youtubeLink = "https://www.youtube.com/@NewtonLearningCenter";
const tiktokLink =
  "https://www.tiktok.com/@newton.learning.c?is_from_webapp=1&sender_device=pc";

const outstandingPlaylistLink =
  "https://youtube.com/playlist?list=PLN4RjtkG5o_UHCNcU3v5HIB_enZlV4IfQ&si=2ixNxqEX_ukFj_ST";

const baciiPhysicsPlaylistLink =
  "https://youtube.com/playlist?list=PLN4RjtkG5o_UOwNuXiW7QUps9_6j7A8Wf&si=MmJdnML-zVrTadif";

const nlcLogoWidth = "500px";

const socialLinks = [
  {
    name: "Telegram Channel",
    href: telegramLink,
  },
  {
    name: "Facebook Page",
    href: facebookLink,
  },
  {
    name: "YouTube Channel",
    href: youtubeLink,
  },
  {
    name: "TikTok",
    href: tiktokLink,
  },
];

const navigationButtons = [
  {
    label: "About NLC",
    href: "#about",
  },
  {
    label: "Courses",
    href: "#courses",
  },
  {
    label: "Playlists",
    href: "#playlists",
  },
  {
    label: "Tutors",
    href: "#tutors",
  },
  {
    label: "Books",
    href: "#books",
  },
  {
    label: "Achievements",
    href: "#achievements",
  },
];

const courses = [
  {
    title: "ថ្នាក់គណិតវិទ្យាត្រៀមប្រឡងបាក់ឌុប 2026",
    image: "/images/courses/math-bacii-2026.png",
    description:
      "ថ្នាក់គណិតវិទ្យាសម្រាប់សិស្សត្រៀមប្រឡងបាក់ឌុប 2026 ដោយផ្តោតលើការពន្យល់មេរៀនឡើងវិញ ការអនុវត្តលំហាត់ និងការឆ្លើយឆ្លងជាមួយគ្រូបង្រៀន",
    points: [
      "តម្លៃត្រឹមតែ 5$ សម្រាប់ ១០ នាក់ដំបូង",
      "ការពន្យល់មេរៀនឡើងវិញ",
      "អាចឆ្លើយឆ្លងជាមួយគ្រូបង្រៀន",
      "ទំនាក់ទំនងជាវថ្នាក់រៀនតាម Telegram",
    ],
  },
  {
    title: "ថ្នាក់រូបវិទ្យាត្រៀមប្រឡងបាក់ឌុប",
    image: "/images/courses/physics-bacii-2026.png",
    description:
      "ថ្នាក់រូបវិទ្យាសម្រាប់សិស្សត្រៀមប្រឡងបាក់ឌុប មានវីដេអូមេរៀនច្រើន និងគ្របដណ្តប់មេរៀនសំខាន់ៗពីទែម៉ូឌីណាមិចដល់ចរន្តឆ្លាស់",
    points: [
      "តម្លៃត្រឹមតែ 5$ សម្រាប់ ១០ នាក់ដំបូង",
      "មានជាង ១០០ videos រយៈពេល ១ ម៉ោង",
      "មេរៀនរូបវិទ្យាពីទែម៉ូឌីណាមិចដល់ចរន្តឆ្លាស់",
      "អាចឆ្លើយឆ្លងជាមួយគ្រូបង្រៀន",
    ],
  },
  {
    title: "ថ្នាក់វិញ្ញាសារូបវិទ្យាត្រៀមបាក់ឌុប 2026",
    image: "/images/courses/physics-exam-bacii-2026.png",
    description:
      "ថ្នាក់វិញ្ញាសារូបវិទ្យាសម្រាប់សិស្សត្រៀមបាក់ឌុប 2026 ផ្តោតលើកំណែវិញ្ញាសា និងការហ្វឹកហាត់ជាមួយវិញ្ញាសាចាស់ៗ",
    points: [
      "តម្លៃត្រឹមតែ 6$ សម្រាប់ ២០ នាក់ដំបូង រៀនមួយជីវិត",
      "កំណែជិត ៣០ វិញ្ញាសា",
      "កំណែវិញ្ញាសាចេញឆ្នាំចាស់ៗពី 2014 មក",
      "មាន discount បន្ថែមចំពោះអ្នកទិញកញ្ចប់នេះជាមួយកញ្ចប់បាក់ឌុប",
    ],
  },
];

const playlists = [
  {
    label: "Outstanding Student Exam",
    title: "Physics Outstanding Student Exam Playlist",
    description:
      "Enjoy Newton Learning Center's playlist focused on Physics Outstanding Student Exam preparation, problem-solving, and competition-style learning.",
    href: outstandingPlaylistLink,
    image: "/images/playlists/physics-outstanding-playlist.jpg",
    audience: "For students preparing for Physics Outstanding Student Exam",
  },
  {
    label: "Free BacII Course",
    title: "BacII Physics Exam Free Course Playlist",
    description:
      "Study BacII Physics through Newton Learning Center's free course playlist designed to support students preparing for the national exam.",
    href: baciiPhysicsPlaylistLink,
    image: "/images/playlists/bacii-physics-free-course.jpg",
    audience: "For Grade 12 students preparing for BacII Physics",
  },
];

const tutors = [
  {
    name: "Narith Chan",
    role: "Physics Tutor",
    image: "/images/tutors/nlc-tutor-1.jpg",
    achievementHref: "/achievements",
    facts: [
      "Ranked Top 2 in the National Outstanding Student Exam in Physics in 2023",
      "Achieved Grade A in the Cambodian Baccalaureate Examination with a score of 99.999",
      "Currently a senior pursuing a Bachelor of Science in Physics at California State University, Long Beach",
      "Physics researcher focusing on nanoelectronics and condensed matter physics",
      "3 years of experience in teaching physics",
      "Helps students build strong foundations, improve problem-solving skills, and prepare for academic success. View their acheivements below:",
    ],
  },
  {
    name: "Souhoang Lim",
    role: "Biology Tutor",
    image: "/images/tutors/nlc-tutor-2.jpg",
    facts: [
      "Achieved Grade A in the Cambodian Baccalaureate Examination with a score of 99.920",
      "Ranked Top 6 in the National Outstanding Student Exam in Mathematics",
      "Currently studying Medicine at the University of Health Sciences",
    ],
  },
  {
    name: "Thawny Ngo",
    role: "Mathematics Tutor",
    image: "/images/tutors/nlc-tutor-3.jpg",
    facts: [
      "Achieved Grade A in the Cambodian Baccalaureate Examination with a score of 99.999",
      "Currently studying Medicine at the University of Health Sciences",
      "Double majoring in English at the Institute of Foreign Languages",
    ],
  },
];

const baciiBooks = [
  {
    title: "BacII Physics Part 1",
    description: "Physics preparation book for BacII students",
    image: "/images/books/bacii-physics-book-1.png",
    category: "BacII Physics",
  },
  {
    title: "BacII Chemistry Part 1",
    description: "Chemistry preparation book for BacII students",
    image: "/images/books/bacii-chemistry-book-1.png",
    category: "BacII Chemistry",
  },
  {
    title: "BacII History Book",
    description: "History preparation book for BacII students",
    image: "/images/books/bacii-history-book.png",
    category: "BacII History",
  },
  {
    title: "BacII Physics Part 2",
    description: "Second physics preparation book for BacII students",
    image: "/images/books/bacii-physics-book-2.png",
    category: "BacII Physics",
  },
  {
    title: "BacII Chemistry Part 2",
    description: "Second chemistry preparation book for BacII students",
    image: "/images/books/bacii-chemistry-book-2.png",
    category: "BacII Chemistry",
  },
];

const outstandingBooks = [
  {
    title: "Physics Mechanics Part 1",
    description: "Mechanics book for outstanding students",
    image: "/images/books/outstanding-physics-mechanics-1.png",
    category: "Outstanding Physics",
  },
  {
    title: "Physics Mechanics Part 2",
    description: "Second mechanics book for outstanding students",
    image: "/images/books/outstanding-physics-mechanics-2.png",
    category: "Outstanding Physics",
  },
  {
    title: "Math 207 Olympiad Problems",
    description: "Mathematics book with 207 olympiad problems",
    image: "/images/books/outstanding-math-207-olympiad-problems.png",
    category: "Outstanding Math",
  },
  {
    title: "Wave Mechanics Book",
    description: "Wave mechanics physics book for outstanding students",
    image: "/images/books/outstanding-wave-mechanics.png",
    category: "Outstanding Physics",
  },
];

type Book = {
  title: string;
  description: string;
  image: string;
  category: string;
};

type Tutor = {
  name: string;
  role: string;
  image: string;
  achievementHref?: string;
  facts: string[];
};

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-bold uppercase tracking-wide text-blue-700">
      {children}
    </p>
  );
}

function BookCard({ book, index }: { book: Book; index: number }) {
  return (
    <div
      data-reveal
      className="group w-[290px] shrink-0 snap-start overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-2xl md:w-[330px]"
      style={{ transitionDelay: String(index * 70) + "ms" }}
    >
      <div
        className="relative aspect-[4/5] bg-gradient-to-br from-blue-100 via-white to-yellow-100 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(15,23,42,0.04), rgba(15,23,42,0.22)), url(" +
            book.image +
            ")",
        }}
      >
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-wide text-blue-700 shadow-sm">
          {book.category}
        </div>

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent p-5">
          <p className="text-sm font-bold text-white">
          </p>
        </div>
      </div>

      <div className="p-6">
        <h4 className="text-xl font-black text-slate-950 transition group-hover:text-blue-800">
          {book.title}
        </h4>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          {book.description}
        </p>

        <a
          href={telegramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex rounded-full bg-blue-700 px-5 py-2 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-blue-800"
        >
          Order Book
        </a>
      </div>
    </div>
  );
}

function TutorCard({ tutor, index }: { tutor: Tutor; index: number }) {
  return (
    <div
      data-reveal
      className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
      style={{ transitionDelay: String(index * 80) + "ms" }}
    >
      <div
        className="relative aspect-[4/3] bg-gradient-to-br from-blue-100 via-white to-yellow-100 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(15,23,42,0.02), rgba(15,23,42,0.28)), url(" +
            tutor.image +
            ")",
        }}
      >
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 to-transparent p-5">
          <p className="text-sm font-bold text-blue-100">
            Newton Learning Center Tutor
          </p>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-black text-slate-950">{tutor.name}</h3>

        <p className="mt-1 font-bold text-blue-700">{tutor.role}</p>

        <ul className="mt-5 grid gap-3">
          {tutor.facts.map((fact) => (
            <li
              key={fact}
              className="flex gap-3 text-sm leading-6 text-slate-700"
            >
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-700" />
              <span>{fact}</span>
            </li>
          ))}
        </ul>

        {tutor.achievementHref ? (
          <a
            href={tutor.achievementHref}
            className="mt-6 inline-flex rounded-full bg-blue-700 px-5 py-2 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-blue-800 hover:shadow-lg"
          >
            View Achievements
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default function NewtonLearningCenterPage() {
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#2563eb66,transparent_35%),radial-gradient(circle_at_bottom_right,#16a34a55,transparent_35%)]" />
        <div className="absolute left-10 top-20 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-20 right-12 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <a
            href="/"
            className="mb-8 inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-white/20"
          >
            ← Back to Home
          </a>

          <div className="grid items-center gap-12 lg:grid-cols-[320px_1fr]">
            <div data-reveal className="flex justify-center lg:justify-start">
              <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur">
                <img
                  src="/images/nlc-logo.png"
                  alt="Newton Learning Center Logo"
                  style={{
                    width: nlcLogoWidth,
                    height: "auto",
                    display: "block",
                  }}
                  className="rounded-2xl bg-white p-4 shadow-lg transition hover:-translate-y-1 hover:scale-[1.04] hover:shadow-xl"
                />
              </div>
            </div>

            <div data-reveal>
              <p className="mb-3 inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-bold uppercase tracking-wide text-blue-100">
                SOMA Education Group
              </p>

              <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
                Newton Learning Center
              </h1>

              <p className="mt-6 max-w-4xl text-lg leading-9 text-slate-200">
                សាលាបង្វឹកត្រៀមប្រឡងសិស្សពូកែ និងប្រឡងបាក់ឌុប ដែលបង្កើតឡើង
                ដើម្បីជួយសិស្សកម្ពុជាបង្កើនមូលដ្ឋានគ្រឹះក្នុងមុខវិជ្ជាវិទ្យាសាស្ត្រ
              </p>

              <p className="mt-4 max-w-4xl leading-8 text-slate-300">
                Newton Learning Center is an academic preparation center under
                SOMA Education Group that supports Cambodian students through
                BacII preparation, outstanding student exam preparation, STEM
                foundations, books, learning resources, free playlists, and
                online study communities.
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

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {socialLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      index === 0
                        ? "inline-flex rounded-full bg-white px-6 py-3 text-center font-bold text-blue-800 transition hover:-translate-y-1 hover:bg-blue-50 hover:shadow-lg"
                        : "inline-flex rounded-full border border-white/30 bg-white/10 px-6 py-3 text-center font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:text-blue-800 hover:shadow-lg"
                    }
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div
            data-reveal
            className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
          >
            <SectionLabel>About Newton Learning Center</SectionLabel>

            <h2 className="mt-5 text-3xl font-black text-slate-950 md:text-4xl">
              អំពីយើង / About Us
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Newton Learning Center គឺជាសាលាបង្វឹកត្រៀមប្រឡងសិស្សពូកែ
              និងប្រឡងបាក់ឌុបដែលបង្វឹកដោយគ្រូដែលមានបទពិសោធខ្ពស់
              ហើយជាអតីតសិស្សពូកែ និងអតីតសិស្សនិទ្ទេស A និង B
              សាលាបង្វឹកនេះបានបង្កើតដោយនិស្សិតសកលវិទ្យាល័យមួយក្រុមនៅចុងឆ្នាំ
              ២០២៣។ Newton Learning Center ផ្តល់ជូននូវការបំប៉នត្រៀមប្រឡងបាក់ឌុប
              និងសិស្សពូកែទូទាំងប្រទេស បង្ហាត់បង្រៀនដោយអ្នកដែលមានជំនាញ
              និងបទពិសោធន៍ខ្ពស់
            </p>

            <div className="mt-6 rounded-3xl bg-blue-50 p-5">
              <h3 className="font-black text-blue-900">
                English Description
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                Newton Learning Center is a student-centered academic center
                created by a group of university students in late 2023. It
                focuses on helping Cambodian students prepare for the BacII exam
                and outstanding student competitions through experienced
                teachers, former outstanding students, and high-achieving
                students. Our goal is to strengthen students' foundations,
                improve exam confidence, and make quality learning support more
                accessible.
              </p>
            </div>
          </div>

          <div
            data-reveal
            className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
          >
            <SectionLabel>Learning Support</SectionLabel>

            <h2 className="mt-5 text-3xl font-black text-slate-950 md:text-4xl">
              What We Offer
            </h2>

            <div className="mt-6 space-y-4">
              {[
                {
                  title: "Courses for academic preparation",
                  khmer: "ថ្នាក់ត្រៀមបាក់ឌុប និងសិស្សពូកែ",
                },
                {
                  title: "Books and learning materials",
                  khmer: "សៀវភៅត្រៀមសិស្សពូកែ និងបាក់ឌុប",
                },
                {
                  title: "Free learning videos and community learning",
                  khmer:
                    "មាតិកាសិក្សាដោយឥតគិតថ្លៃតាម YouTube និងបណ្តាញសង្គម",
                },
                {
                  title: "Study resources and practice materials",
                  khmer: "ឯកសារត្រៀមប្រឡង",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-slate-50 p-5 transition hover:-translate-y-1 hover:bg-blue-50 hover:shadow-md"
                >
                  <div className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                      {index + 1}
                    </div>

                    <div>
                      <h3 className="font-black text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {item.khmer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="relative overflow-hidden bg-white px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2563eb12,transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div
            data-reveal
            className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end"
          >
            <div>
              <SectionLabel>Newton Learning Center</SectionLabel>

              <h2 className="mt-5 text-3xl font-black md:text-5xl">
                Available Courses / ថ្នាក់រៀនដែលមានលក់
              </h2>

              <p className="mt-4 max-w-3xl leading-8 text-slate-600">
                Slide manually to view each course poster and description. Each
                course is designed to help students build stronger foundations,
                practice exam-style questions, and communicate with teachers.
              </p>
            </div>

            <a
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-blue-700 px-6 py-3 text-center font-bold text-white transition hover:-translate-y-1 hover:bg-blue-800 hover:shadow-lg"
            >
              Buy Course on Telegram
            </a>
          </div>

          <div className="flex snap-x gap-6 overflow-x-auto scroll-smooth pb-8">
            {courses.map((course, index) => (
              <div
                key={course.title}
                data-reveal
                className="group w-[300px] shrink-0 snap-start overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl md:w-[370px]"
                style={{ transitionDelay: String(index * 80) + "ms" }}
              >
                <div className="aspect-[4/5] overflow-hidden bg-blue-50">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <p className="text-sm font-black uppercase tracking-wide text-blue-700">
                    Course {index + 1}
                  </p>

                  <h3 className="mt-2 text-xl font-black text-slate-950">
                    {course.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {course.description}
                  </p>

                  <ul className="mt-5 space-y-3 text-sm text-slate-600">
                    {course.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-700" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={telegramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex rounded-full bg-blue-700 px-5 py-2 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-blue-800 hover:shadow-lg"
                  >
                    Contact to Buy
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
  id="playlists"
  className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-slate-950 to-slate-950 px-6 py-20 text-white"
>
  <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
  <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />

  <div className="relative mx-auto max-w-7xl">
    <div data-reveal className="mx-auto mb-12 max-w-4xl text-center">
      <p className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-bold uppercase tracking-wide text-blue-100">
        Free Learning Playlists
      </p>

      <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
        Enjoy Newton Learning Center Playlists
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-300">
        Study physics through free YouTube playlists focused on BacII exam
        preparation and Physics Outstanding Student Exam preparation.
      </p>
    </div>

    <div className="grid gap-7 lg:grid-cols-2">
      {playlists.map((playlist, index) => (
        <a
          key={playlist.title}
          href={playlist.href}
          target="_blank"
          rel="noopener noreferrer"
          data-reveal
          style={{ transitionDelay: String(index * 90) + "ms" }}
          className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 shadow-2xl transition hover:-translate-y-2 hover:bg-white/15"
        >
          <div
            className="relative aspect-video bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(23,70,214,0.18), rgba(15,23,42,0.35)), url(" +
                playlist.image +
                ")",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-xl font-black text-blue-700 shadow-xl transition duration-300 group-hover:scale-110">
                ▶
              </div>
            </div>

            <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-wide text-blue-800 shadow-sm">
              {playlist.label}
            </div>
          </div>

          <div className="p-7">
            <p className="text-sm font-black uppercase tracking-wide text-yellow-200">
              {playlist.audience}
            </p>

            <h3 className="mt-3 text-3xl font-black leading-tight">
              {playlist.title}
            </h3>

            <p className="mt-4 leading-8 text-slate-300">
              {playlist.description}
            </p>

            <div className="mt-7 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-black text-blue-800 transition group-hover:-translate-y-1">
              Watch Playlist
              <span>→</span>
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>

      <section id="tutors" className="bg-gradient-to-br from-blue-50 via-white to-yellow-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mx-auto mb-12 max-w-4xl text-center">
            <SectionLabel>Our Tutors</SectionLabel>

            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
              Learn with Supportive Tutors
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Newton Learning Center is supported by tutors who understand exam
              preparation, student challenges, and the importance of clear
              explanation. You can replace these tutor names, photos, and facts
              later.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {tutors.map((tutor, index) => (
              <TutorCard key={tutor.role + String(index)} tutor={tutor} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="books" className="mx-auto max-w-7xl px-6 py-20">
        <div data-reveal className="mb-12">
          <SectionLabel>Learning Materials</SectionLabel>

          <h2 className="mt-5 text-4xl font-black md:text-5xl">
            Our Books
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-slate-600">
            Browse Newton Learning Center books for BacII students and
            outstanding student preparation. Add your book cover images in the
            project folder and the covers will appear automatically.
          </p>
        </div>

        <div
          data-reveal
          className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
        >
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h3 className="text-2xl font-black text-blue-800">
                For BacII Students / សម្រាប់សិស្សបាក់ឌុប
              </h3>

              <p className="mt-2 text-slate-600">
                Slide horizontally to view all BacII books
              </p>
            </div>

            <a
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-blue-700 px-5 py-2 text-center text-sm font-bold text-blue-700 transition hover:-translate-y-1 hover:bg-blue-50 hover:shadow-md"
            >
              Order Books
            </a>
          </div>

          <div className="mt-6 flex snap-x gap-6 overflow-x-auto scroll-smooth pb-6">
            {baciiBooks.map((book, index) => (
              <BookCard key={book.title} book={book} index={index} />
            ))}
          </div>
        </div>

        <div
          data-reveal
          className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
        >
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h3 className="text-2xl font-black text-blue-800">
                For Outstanding Students / សម្រាប់សិស្សពូកែ
              </h3>

              <p className="mt-2 text-slate-600">
                Slide horizontally to view all outstanding student books
              </p>
            </div>

            <a
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-blue-700 px-5 py-2 text-center text-sm font-bold text-blue-700 transition hover:-translate-y-1 hover:bg-blue-50 hover:shadow-md"
            >
              Order Books
            </a>
          </div>

          <div className="mt-6 flex snap-x gap-6 overflow-x-auto scroll-smooth pb-6">
            {outstandingBooks.map((book, index) => (
              <BookCard key={book.title} book={book} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <div
            data-reveal
            className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-2xl md:p-10"
          >
            <SectionLabel>Student Success</SectionLabel>

            <h2 className="mt-5 text-3xl font-black text-slate-950 md:text-4xl">
              Student Achievement
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-600">
              Explore student success stories, learning progress, competition
              achievements, and milestones connected to SOMA Education Group and
              Newton Learning Center.
            </p>

            <a
              href="/achievements"
              className="mt-7 inline-flex rounded-full bg-blue-700 px-8 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-blue-800 hover:shadow-lg"
            >
              View Students' Achievements
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 px-6 py-6 text-center text-sm text-slate-300">
        © 2023 Newton Learning Center. All rights reserved.
      </footer>
    </main>
  );
}