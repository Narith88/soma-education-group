"use client";

import { useEffect, useRef, useState } from "react";

/*
  E-Solver Cambodia Detail Page — Season 5 Redesign

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
const somaPortalLink = "https://soma-competition-portal-7euz.vercel.app/";
const registrationLink = "#replace-with-registration-form-link";

const gallery2025DriveLink =
  "https://drive.google.com/drive/folders/1DV6bcc-tbXK2WnpHeZzIgIUyMMGiNYs4?usp=sharing";

const gallery2024DriveLink = "#replace-with-2024-gallery-link";

const heroImage = "/images/competitions/e-solver/hero.jpg";

type Stat = {
  value: string;
  label: string;
  countTo?: number;
  prefix?: string;
  suffix?: string;
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

type SubjectCard = {
  title: string;
  titleKh: string;
  description: string;
};

type AwardTier = {
  icon: string;
  title: string;
  description: string;
  accent: string;
};

const navigationButtons = [
  { label: "Subjects", href: "#subjects" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Who Can Join", href: "#audience" },
  { label: "Awards", href: "#prizes" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
];

const impactStats: Stat[] = [
  {
    value: "2021",
    label: "Established Since",
  },
  {
    value: "5,000+",
    label: "Student Participants Across 4 Seasons",
    countTo: 5000,
    suffix: "+",
  },
  {
    value: "4",
    label: "Competition Sections",
  },
  {
    value: "First",
    label: "Chemistry Competition in Cambodia",
  },
];

const competitionSubjects: SubjectCard[] = [
  {
    title: "Mathematical Reasoning",
    titleKh: "ការវែកញែកក្នុងគណិតវិទ្យា",
    description:
      "Pattern recognition, logical deduction, number sense, and applied math problems. Not just computation — real mathematical thinking.",
  },
  {
    title: "Science Reasoning",
    titleKh: "ការវែកញែកក្នុងវិទ្យាសាស្ត្រ",
    description:
      "Applied questions integrating Physics and Chemistry concepts. Analyze scenarios, interpret data, and solve real scientific problems.",
  },
  {
    title: "Technology & Computational Thinking",
    titleKh: "បច្ចេកវិទ្យា និងការគិតបែបគណនា",
    description:
      "How systems work, basic algorithms, flowchart reasoning, data interpretation, and digital problem-solving. No coding required.",
  },
  {
    title: "Logic & Analytical Thinking",
    titleKh: "តក្កវិជ្ជា និងការគិតបែបវិភាគ",
    description:
      "Sequences, spatial reasoning, analogies, and deductive puzzles. Accessible and exciting for all students, not just science specialists.",
  },
];

const howItWorksSteps = [
  {
    step: "1",
    title: "Register",
    description:
      "Sign up individually or through your school. Choose Category I (Grade 7–8), Category II (Grade 9–10), or Category III (Grade 11–12). After registration, you will receive a category access code for the SOMA Portal.",
  },
  {
    step: "2",
    title: "Take the Online Exam",
    description:
      "On competition day, log into the SOMA Portal using your access code. Complete all 4 sections within the exam window (8:00 AM – 8:00 PM). The exam is available in both Khmer and English and can be taken from anywhere in Cambodia.",
  },
  {
    step: "3",
    title: "Prepare, Compete, Get Recognized",
    description:
      "Sample test papers will be provided before the competition so students understand the format. Top scorers are invited to the awarding ceremony, while every participant receives a certificate after completing the exam.",
  },
];

const awardTiers: AwardTier[] = [
  {
    icon: "G",
    title: "Gold Medal",
    description: "Highest scorer in each section and category",
    accent: "from-yellow-400 to-amber-500",
  },
  {
    icon: "S",
    title: "Silver Medal",
    description: "Second-highest scorer in each section and category",
    accent: "from-slate-300 to-slate-400",
  },
  {
    icon: "B",
    title: "Bronze Medal",
    description: "Third-highest scorer in each section and category",
    accent: "from-orange-400 to-orange-500",
  },
  {
    icon: "HM",
    title: "Honorable Mention",
    description: "Three high-performing students in each section and category",
    accent: "from-emerald-500 to-teal-600",
  },
];

const audienceDetails = [
  {
    title: "Category I — Grade 7 to 8",
    text: "Students in early lower secondary compete with problems calibrated to their curriculum level while still encouraging deeper reasoning.",
  },
  {
    title: "Category II — Grade 9 to 10",
    text: "Students in the transition stage compete with stronger applied-thinking questions across Mathematics, Science, Technology, and Logic.",
  },
  {
    title: "Category III — Grade 11 to 12",
    text: "Upper secondary students face higher-level reasoning and applied problems appropriate for their academic stage.",
  },
  {
    title: "Public and Private Schools",
    text: "Students from public schools, private schools, and learning centers across Cambodia can participate individually or through their school.",
  },
  {
    title: "Nationwide — Urban and Rural",
    text: "Because the exam is online, students from every province can compete on equal terms without traveling to Phnom Penh.",
  },
];

const highlightImages: HighlightImage[] = [
  {
    title: "Opening Moment",
    text: "The awarding ceremony begins with recognition of every student who competed.",
    image: "/images/competitions/e-solver/highlight-opening.jpg",
  },
  {
    title: "Students in Action",
    text: "Participants solve challenging problems across Mathematics, Science, Technology, and Logic.",
    image: "/images/competitions/e-solver/highlight-exam.jpg",
  },
  {
    title: "Awarding Ceremony",
    text: "Top achievers receive medals in front of their peers, families, and sponsors.",
    image: "/images/competitions/e-solver/highlight-awarding.jpg",
  },
  {
    title: "Community and Teamwork",
    text: "Organizers, volunteers, teachers, and students come together to celebrate achievement.",
    image: "/images/competitions/e-solver/highlight-community.jpg",
  },
];

const aboutImages: HighlightImage[] = [
  {
    title: "Academic Foundation",
    text: "Students apply core STEM knowledge through Mathematics, Science, Technology, and Logic reasoning.",
    image: "/images/competitions/e-solver/about-learning.jpg",
  },
  {
    title: "Digital Competition Experience",
    text: "Students compete through the SOMA Portal — a modern online platform built for fair, accessible assessment.",
    image: "/images/competitions/e-solver/about-technology.jpg",
  },
  {
    title: "Student Confidence",
    text: "Participants gain confidence by challenging themselves beyond the classroom and measuring their abilities nationally.",
    image: "/images/competitions/e-solver/about-students.jpg",
  },
  {
    title: "Achievement and Pride",
    text: "Medal ceremonies give students a moment to feel proud of their effort, discipline, and growth.",
    image: "/images/competitions/e-solver/about-ceremony.jpg",
  },
  {
    title: "Organizer and Volunteer Support",
    text: "A dedicated team of organizers, teachers, and volunteers ensures a smooth and supportive competition experience.",
    image: "/images/competitions/e-solver/about-teamwork.jpg",
  },
  {
    title: "Cambodia's First Chemistry Competition",
    text: "E-Solver Cambodia introduced Chemistry as a competition subject in Cambodia, giving students a platform that did not exist before.",
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
    title: "Gold Medal",
    text: "Awarded to the highest-scoring student in each section within each grade category.",
    image: "/images/competitions/e-solver/gold-medal.jpg",
  },
  {
    title: "Silver Medal",
    text: "Awarded to the second-highest scorer in each section within each grade category.",
    image: "/images/competitions/e-solver/silver-medal.jpg",
  },
  {
    title: "Bronze Medal",
    text: "Awarded to the third-highest scorer in each section within each grade category.",
    image: "/images/competitions/e-solver/bronze-medal.jpg",
  },
  {
    title: "Honorable Mention Medal",
    text: "For high-performing participants who place among the top students just outside the medal podium.",
    image: "/images/competitions/e-solver/honorable-mention-medal.jpg",
  },
  {
    title: "E-Solver Cambodia Tote Bag",
    text: "A branded keepsake given to participants at the awarding ceremony.",
    image: "/images/competitions/e-solver/tote-bag.jpg",
  },
  {
    title: "Participant and Organizer Tags",
    text: "Official event identification for students, organizers, volunteers, and partners.",
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
    question: "What subjects does E-Solver Cambodia test?",
    answer:
      "E-Solver Cambodia tests four sections: Mathematical Reasoning, Science Reasoning (Physics and Chemistry), Technology and Computational Thinking, and Logic and Analytical Thinking. All four sections are included in one exam.",
  },
  {
    question: "What are the competition categories?",
    answer:
      "There are three categories: Category I (Grade 7–8), Category II (Grade 9–10), and Category III (Grade 11–12). Students compete and are awarded within their own category, so medals are given separately for each tier.",
  },
  {
    question: "How do students take the exam?",
    answer:
      "Students take the exam online through the SOMA Portal at soma-competition-portal-7euz.vercel.app. After registering, each of the three categories receives an access code to enter the portal. The exam is asynchronous, available in both Khmer and English, and can be taken at any time between 8:00 AM and 8:00 PM on competition day from anywhere in Cambodia.",
  },
  {
    question: "Do I need to know coding for the Technology section?",
    answer:
      "No. The Technology and Computational Thinking section tests how you reason about systems, algorithms (using flowcharts and logic, not code), and data interpretation. No programming knowledge is required.",
  },
  {
    question: "How many students receive top awards?",
    answer:
      "In each of the four sections and in each category, there is one Gold medalist, one Silver medalist, one Bronze medalist, and three Honorable Mentions. Overall category winners and a Grand Champion may also be recognized based on total performance.",
  },
  {
    question: "What prizes do winners receive?",
    answer:
      "Prizes include medals, certificates, trophies for category champions, scholarships from partner institutions including CAM-ASEAN International School and Newton Learning Center, sponsored prizes from partners, and opportunities to join SOMA Education Group as student ambassadors.",
  },
  {
    question: "Does every participant receive something?",
    answer:
      "Yes. Every student who completes the exam receives a digital certificate of participation. Students may also receive scholarship offers, sponsor benefits, or student ambassador opportunities regardless of their placement.",
  },
  {
    question: "Will sample test papers be provided?",
    answer:
      "Yes. Sample test papers will be provided before the competition so students can understand the question style, section structure, and level of difficulty for their category.",
  },
  {
    question: "What language is the exam in?",
    answer:
      "The exam will be provided in both Khmer and English so students can understand the questions clearly while also building confidence with academic STEM vocabulary.",
  },
  {
    question: "What if I am busy during part of the exam day?",
    answer:
      "Because the exam is asynchronous, you can begin at any time between 8:00 AM and 8:00 PM on competition day. You do not need to start at a specific time. Once you begin, complete the exam within the time limit shown on the SOMA Portal.",
  },
  {
    question: "Can my school register students as a group?",
    answer:
      "Yes. Schools can register students as a group and may be eligible for group pricing. Schools that register 10 or more students are recognized as E-Solver Cambodia Partner Schools and receive a school partnership certificate.",
  },
  {
    question: "How are results verified?",
    answer:
      "All exams are graded automatically through the SOMA Portal. The Academic team then verifies the top scorers manually before any results are published. This two-step process ensures accuracy and fairness.",
  },
];

/* ─── Reusable Components ─── */

const floatingFormulas = [
  { text: "E=mc²", top: "6%", left: "84%", delay: "0s", duration: "16s" },
  { text: "F=ma", top: "26%", left: "78%", delay: "-3s", duration: "18s" },
  { text: "H₂O", top: "8%", left: "70%", delay: "-6s", duration: "17s" },
  { text: "0 1 0 1", top: "3%", left: "50%", delay: "-2s", duration: "19s" },
  { text: "a²+b²=c²", top: "12%", left: "80%", delay: "-7s", duration: "20s" },
  { text: "∀x → logic", top: "42%", left: "%88", delay: "-4s", duration: "15s" },
  { text: "NaCl", top: "9%", left: "32%", delay: "-9s", duration: "21s" },
  { text: "if / then", top: "4%", left: "1%", delay: "-5s", duration: "18s" },
];

function FloatingFormulaField() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {floatingFormulas.map((formula) => (
        <span
          key={formula.text}
          className="formula-chip absolute hidden rounded-full border px-4 py-2 text-sm font-black backdrop-blur-sm md:inline-flex"
          style={{
            top: formula.top,
            left: formula.left,
            animationDelay: formula.delay,
            animationDuration: formula.duration,
          }}
        >
          {formula.text}
        </span>
      ))}
    </div>
  );
}

function AnimatedStatValue({ stat }: { stat: Stat }) {
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef<HTMLParagraphElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!stat.countTo || !elementRef.current) return;

    const element = elementRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;

        hasAnimated.current = true;
        const duration = 1600;
        const startTime = performance.now();

        const animateCount = (currentTime: number) => {
          const progress = Math.min((currentTime - startTime) / duration, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);
          setDisplayValue(Math.floor(easedProgress * stat.countTo!));

          if (progress < 1) {
            requestAnimationFrame(animateCount);
          }
        };

        requestAnimationFrame(animateCount);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [stat.countTo]);

  if (!stat.countTo) {
    return <p className="text-3xl font-black">{stat.value}</p>;
  }

  return (
    <p ref={elementRef} className="text-3xl font-black">
      {stat.prefix ?? ""}
      {displayValue.toLocaleString()}
      {stat.suffix ?? ""}
    </p>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="inline-flex rounded-full bg-emerald-100 px-5 py-2 text-sm font-bold uppercase tracking-wide text-emerald-700">
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
        <h3 className="text-xl font-black transition group-hover:text-emerald-700">
          {item.title}
        </h3>

        {item.text ? (
          <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
        ) : null}
      </div>
    </div>
  );
}

function ImageStoryCard({
  item,
  index,
}: {
  item: HighlightImage;
  index: number;
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
        <h3 className="text-xl font-black transition group-hover:text-emerald-700">
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
        <h3 className="text-xl font-black transition group-hover:text-emerald-700">
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
      className="group flex min-h-[320px] w-[280px] shrink-0 snap-start flex-col rounded-[2rem] border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:border-emerald-200 hover:shadow-2xl active:scale-[0.98] md:w-[300px]"
    >
      <div className="flex h-36 items-center justify-center overflow-hidden rounded-3xl bg-slate-50 p-5 transition duration-300 group-hover:bg-emerald-50">
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
        <h3 className="mt-5 flex min-h-[3.5rem] items-center justify-center text-xl font-black leading-tight transition group-hover:text-emerald-700">
          {sponsor.name}
        </h3>

        <p className="mt-auto inline-flex min-h-[2.5rem] items-center justify-center rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700 transition duration-300 group-hover:bg-emerald-700 group-hover:text-white">
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
          <p className="text-sm font-black uppercase tracking-wide text-emerald-700">
            {year} Sponsors
          </p>

          <h3 className="mt-2 text-3xl font-black">{title}</h3>
        </div>

        {text ? (
          <p className="max-w-2xl leading-7 text-slate-600">{text}</p>
        ) : null}
      </div>

      <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-500">
        <span className="inline-flex h-2 w-2 rounded-full bg-emerald-600" />
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

/* ─── Main Page ─── */

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
    <main className="esolver-page-bg min-h-screen text-slate-950">
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
            background: #bbf7d0;
            color: #064e3b;
          }

          .esolver-page-bg {
            background-color: #ecfdf5;
            background-image:
              radial-gradient(circle at 12% 8%, rgba(34, 197, 94, 0.16), transparent 28%),
              radial-gradient(circle at 86% 18%, rgba(250, 204, 21, 0.12), transparent 26%),
              linear-gradient(rgba(21, 128, 61, 0.055) 1px, transparent 1px),
              linear-gradient(90deg, rgba(21, 128, 61, 0.055) 1px, transparent 1px);
            background-size: auto, auto, 54px 54px, 54px 54px;
          }

          .net-card-bg {
            background-image:
              linear-gradient(rgba(21, 128, 61, 0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(21, 128, 61, 0.06) 1px, transparent 1px);
            background-size: 42px 42px;
          }

          .formula-chip {
            border-color: rgba(255, 255, 255, 0.18);
            background: rgba(255, 255, 255, 0.08);
            color: rgba(255, 255, 255, 0.42);
            box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08);
            animation-name: formulaFloat;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
          }

          @keyframes formulaFloat {
            0%, 100% {
              transform: translate3d(0, 0, 0) rotate(-3deg);
            }

            50% {
              transform: translate3d(18px, -22px, 0) rotate(4deg);
            }
          }

          .sponsor-scroll {
            scrollbar-width: thin;
            scrollbar-color: #059669 #e2e8f0;
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
            background: #059669;
          }

          .sponsor-scroll::-webkit-scrollbar-thumb:hover {
            background: #047857;
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

            .formula-chip {
              animation: none;
            }
          }
        `}
      </style>

      <nav className="sticky top-0 z-50 border-b border-emerald-100/80 bg-white/85 px-6 py-3 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-3 font-black text-emerald-900">
            <p className="inline-flex items-center gap-3 rounded-full bg-white/85 px-5 py-2 text-sm font-black text-emerald-950 shadow-sm ring-1 ring-emerald-100 backdrop-blur">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-1.5 shadow-sm ring-1 ring-emerald-100">
                <img
                  src="/images/competitions/e-solver/e-solver-logo.png"
                  alt="E-Solver Cambodia logo"
                  className="h-full w-full object-contain"
                />
              </span>

              <span>E-Solver Cambodia 2.0</span>
            </p>
          </a>

          <div className="hidden items-center gap-2 lg:flex">
            {navigationButtons.map((button) => (
              <a
                key={button.href}
                href={button.href}
                className="rounded-full px-4 py-2 text-sm font-bold text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-800"
              >
                {button.label}
              </a>
            ))}
          </div>

          <a
            href= "/competitions/e-solver-cambodia/register" 
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-emerald-600 px-5 py-2 text-sm font-black text-white shadow-lg shadow-emerald-900/10 transition hover:-translate-y-0.5 hover:bg-emerald-700 active:scale-95"
          >
            Register Now
          </a>
        </div>
      </nav>

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-green-900 to-slate-950 px-6 py-16 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#22c55e66,transparent_35%),radial-gradient(circle_at_bottom_right,#facc1544,transparent_35%)]" />
        <FloatingFormulaField />
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
              <p className="inline-flex rounded-full bg-emerald-400/20 px-5 py-2 text-sm font-bold uppercase tracking-wide text-emerald-200">
                E-Solver Cambodia 2.0 · Applied Thinking Competition
              </p>

              <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
                E-Solver Cambodia
              </h1>

              <p className="mt-3 text-2xl font-bold tracking-tight text-emerald-300 md:text-3xl">
                Think Deeper. Solve Further.
              </p>

              <p className="mt-6 max-w-xl text-lg leading-9 text-slate-200">
                Test your Mathematics, Science, Technology, and Logic skills — and compete for national recognition. E-Solver Cambodia challenges students who don&apos;t just learn — they think. The exam will be available in both Khmer and English.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {navigationButtons.map((button) => (
                  <a
                    key={button.href}
                    href={button.href}
                    className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-center text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-emerald-800 hover:shadow-lg active:scale-95"
                  >
                    {button.label}
                  </a>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="/competitions/e-solver-cambodia/register" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-emerald-500 px-8 py-3 text-center font-black text-white shadow-lg shadow-emerald-950/20 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-400 hover:shadow-xl active:scale-95"
                >
                  Register Now
                </a>

                <a
                  href={telegramLink2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-8 py-3 text-center font-bold text-emerald-800 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-50 hover:shadow-lg active:scale-95"
                >
                  Join Updates on Telegram
                </a>

                <a
                  href={somaPortalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-emerald-400/40 bg-emerald-400/15 px-8 py-3 text-center font-bold text-emerald-200 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-400/25 hover:shadow-lg active:scale-95"
                >
                  Go to SOMA Portal
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
                  Since 2021 · 4 Seasons Completed
                </p>

                <h2 className="mt-2 text-2xl font-black">
                  A national platform for applied thinking
                </h2>

                <p className="mt-3 leading-7 text-slate-300">
                  Over 5,000 students have participated across four seasons, making E-Solver Cambodia one of the leading student STEM competition projects under SOMA Education Group.
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
                <AnimatedStatValue stat={stat} />

                <p className="mt-2 text-sm font-semibold text-slate-200">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ ABOUT ═══════════════════ */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div data-reveal>
            <SectionLabel>About</SectionLabel>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              More Than a Test — a Thinking Challenge
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              E-Solver Cambodia is not a standard knowledge quiz. It is an applied thinking competition that challenges students to use Mathematics, Science, Technology, and Logic to solve problems that go beyond textbook memorization.
            </p>
          </div>

          <div
            data-reveal
            className="net-card-bg rounded-[2rem] border border-emerald-100 bg-white/90 p-8 leading-8 text-slate-600 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
          >
            <p>
              Many Cambodian students have strong potential in STEM subjects but lack accessible platforms to test and showcase their reasoning abilities at a national level. E-Solver Cambodia was created to fill that gap — providing a fair, online competition that any student in Cambodia can access, regardless of location.
            </p>

            <p className="mt-5">
              With four competition sections covering Mathematical Reasoning, Science Reasoning, Technology and Computational Thinking, and Logic and Analytical Thinking, E-Solver challenges students to apply what they know to real problems — not just recall facts.
            </p>

            <div className="mt-6 rounded-3xl bg-emerald-50 p-5 transition hover:bg-emerald-100">
              <p className="font-black text-emerald-900">
                Cambodia&apos;s First Chemistry Competition
              </p>
              <p className="mt-2 text-slate-700">
                E-Solver Cambodia introduced Chemistry as a competition subject in Cambodia for the first time, giving students a platform in a discipline that had been underrepresented in national student competitions. This heritage continues in our integrated Science Reasoning section.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {aboutImages.map((item, index) => (
            <ImageStoryCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </section>

      {/* ═══════════════════ SUBJECTS ═══════════════════ */}
      <section
        id="subjects"
        className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-green-900 to-slate-950 px-6 py-20 text-white"
      >
        <FloatingFormulaField />
        <div className="relative mx-auto max-w-7xl">
          <div data-reveal className="mx-auto mb-14 max-w-3xl text-center">
            <p className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-bold uppercase tracking-wide text-emerald-200">
              What We Test
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              4 Sections In One Exam: Applied Thinking.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Every student answers all four sections. Results are graded and awarded separately per section and per category, so the best thinkers in each area are recognized.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {competitionSubjects.map((subject, index) => (
              <div
                key={subject.title}
                data-reveal
                style={{ transitionDelay: String(index * 90) + "ms" }}
                className="group rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur transition-all duration-500 hover:-translate-y-3 hover:bg-white/10 hover:shadow-2xl"
              >

                <h3 className="text-2xl font-black">{subject.title}</h3>

                <p className="mt-1 text-sm font-bold text-emerald-300">
                  {subject.titleKh}
                </p>

                <p className="mt-4 leading-8 text-slate-300">
                  {subject.description}
                </p>
              </div>
            ))}
          </div>

          <div data-reveal className="mt-10 text-center">
            <p className="text-slate-400">
              All questions are multiple-choice. No coding, no lab equipment, no special tools required — just your thinking.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════ HOW IT WORKS ═══════════════════ */}
      <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20">
        <div data-reveal className="mx-auto mb-14 max-w-3xl text-center">
          <SectionLabel>How It Works</SectionLabel>

          <h2 className="mt-5 text-4xl font-black md:text-5xl">
            Register. Compete. Get Recognized.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            E-Solver Cambodia runs entirely online through the{" "}
            <a
              href={somaPortalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-emerald-700 underline decoration-emerald-300 underline-offset-4 transition hover:text-emerald-900"
            >
              SOMA Portal
            </a>
            . After registering, students receive an access code for their category and can compete from anywhere in Cambodia. Sample test papers will be shared before the competition, and the exam will be provided in both Khmer and English.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {howItWorksSteps.map((item, index) => (
            <div
              key={item.step}
              data-reveal
              style={{ transitionDelay: String(index * 100) + "ms" }}
              className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-700 text-2xl font-black text-white transition duration-300 group-hover:scale-110">
                {item.step}
              </div>

              <h3 className="text-2xl font-black transition group-hover:text-emerald-700">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div
          data-reveal
          className="net-card-bg mt-10 rounded-[2rem] border border-emerald-200 bg-emerald-50/85 p-8 text-center"
        >
          <h3 className="text-2xl font-black text-emerald-900">
            Competition Platform — SOMA Portal
          </h3>

          <p className="mx-auto mt-3 max-w-2xl leading-8 text-slate-700">
            All participants access the exam through the SOMA Portal. Each of the three categories receives a unique access code after registration. The portal handles the exam, timing, and submission automatically. Sample test papers will be provided before exam day.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/competitions/e-solver-cambodia/register" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-emerald-600 px-8 py-3 font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-lg active:scale-95"
            >
              Register Now
            </a>

            <a
              href={somaPortalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-emerald-600 px-8 py-3 font-bold text-emerald-700 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg active:scale-95"
            >
              Visit SOMA Portal
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════ VISUAL HIGHLIGHTS ═══════════════════ */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-lime-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mx-auto mb-12 max-w-4xl text-center">
            <SectionLabel>Competition Highlights</SectionLabel>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Inside E-Solver Cambodia
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              From the online exam to the awarding ceremony in Phnom Penh, E-Solver Cambodia is built to give students a real, meaningful competition experience.
            </p>
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

      {/* ═══════════════════ WHO CAN JOIN ═══════════════════ */}
      <section id="audience" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div data-reveal>
            <SectionLabel>Who Can Join</SectionLabel>

            <h2 className="mt-5 text-4xl font-black leading-tight md:text-5xl">
              Three Categories. One Standard.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              E-Solver Cambodia is open to all Cambodian students from Grade 7 through Grade 12. Students compete within their own category so the competition is fair and the recognition is meaningful. Sample test papers will be provided, and the official exam will be available in both Khmer and English.
            </p>

            <div className="mt-8 grid gap-4">
              {audienceDetails.map((item, index) => (
                <div
                  key={item.title}
                  data-reveal
                  style={{ transitionDelay: String(index * 70) + "ms" }}
                  className="group rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
                >
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-lg font-black text-emerald-700 transition duration-300 group-hover:bg-emerald-700 group-hover:text-white">
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
            <div className="group relative overflow-hidden rounded-[1.5rem] bg-slate-100">
              <div
                className="aspect-[16/10] bg-cover bg-center transition duration-700 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgba(15,23,42,0.18), rgba(37,99,235,0.18)), url(/images/competitions/e-solver/audience-students.jpg)",
                }}
              />

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur">
                <p className="text-sm font-black uppercase tracking-wide text-emerald-700">
                  Student Community
                </p>

                <h3 className="mt-1 text-xl font-black text-slate-950">
                  Built for young thinkers across Cambodia
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
                  <h3 className="font-black">Online via SOMA Portal</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Students compete through the SOMA Portal using their category access code.
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
                  <h3 className="font-black">Medals and Recognition</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Top students receive medals, certificates, scholarships, and opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ PRIZES & AWARDS ═══════════════════ */}
      <section
        id="prizes"
        className="bg-gradient-to-br from-lime-50 via-white to-emerald-50 px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mx-auto mb-14 max-w-3xl text-center">
            <SectionLabel>Awards and Materials</SectionLabel>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Recognition That Matters
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              E-Solver Cambodia recognizes the best thinkers in every section and every category while also giving every participant a meaningful competition record. Medals, certificates, scholarship opportunities, student materials, and partner benefits are presented in one clear award system.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {awardTiers.map((tier, index) => (
              <div
                key={tier.title}
                data-reveal
                style={{ transitionDelay: String(index * 90) + "ms" }}
                className="group rounded-[2rem] border border-slate-200 bg-white p-7 text-center shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >

                <h3 className="text-xl font-black">{tier.title}</h3>

                <p className="mt-2 leading-7 text-slate-600">
                  {tier.description}
                </p>
              </div>
            ))}
          </div>

          <div data-reveal className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-2xl font-black text-emerald-700">
                Overall Awards
              </h3>

              <div className="mt-5 space-y-4 text-slate-600">
                <div className="rounded-2xl bg-emerald-50 p-4">
                  <p className="font-black text-slate-950">
                    Best Category I Overall
                  </p>
                  <p className="mt-1">
                    Trophy and scholarship consideration for the highest overall scorer in Grade 7–8.
                  </p>
                </div>

                <div className="rounded-2xl bg-emerald-50 p-4">
                  <p className="font-black text-slate-950">
                    Best Category II Overall
                  </p>
                  <p className="mt-1">
                    Trophy and scholarship consideration for the highest overall scorer in Grade 9–10.
                  </p>
                </div>

                <div className="rounded-2xl bg-emerald-50 p-4">
                  <p className="font-black text-slate-950">
                    Best Category III Overall
                  </p>
                  <p className="mt-1">
                    Trophy and scholarship consideration for the highest overall scorer in Grade 11–12.
                  </p>
                </div>

                <div className="rounded-2xl bg-emerald-50 p-4">
                  <p className="font-black text-emerald-900">
                    Grand Champion
                  </p>
                  <p className="mt-1">
                    The single highest scorer across all sections and categories receives the Grand Champion trophy and the top sponsored prize.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-2xl font-black text-emerald-700">
                Every Participant Receives
              </h3>

              <div className="mt-5 space-y-4 text-slate-600">
                <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-black text-emerald-700">✓</span>
                  <div>
                    <p className="font-black text-slate-950">
                      Certificate of Participation
                    </p>
                    <p className="mt-1">
                      Every student who completes the exam receives a digital certificate with their name and score.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-black text-emerald-700">S</span>
                  <div>
                    <p className="font-black text-slate-950">
                      Scholarship Opportunities
                    </p>
                    <p className="mt-1">
                      Partner institutions may offer scholarships or discounts to participants regardless of placement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-black text-emerald-700">A</span>
                  <div>
                    <p className="font-black text-slate-950">
                      Student Ambassador Opportunity
                    </p>
                    <p className="mt-1">
                      Outstanding participants may be invited to represent E-Solver Cambodia as student ambassadors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div data-reveal className="mt-14 text-center">
            <h3 className="text-3xl font-black">
              Medals, Tags, and Student Materials
            </h3>

            <p className="mx-auto mt-3 max-w-3xl leading-8 text-slate-600">
              The physical and digital materials support the award system without needing a separate repeated section. Students can clearly see what winners receive and what participants may receive at the ceremony.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {competitionMaterials.map((item, index) => (
              <MaterialCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ GALLERY ═══════════════════ */}
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
              Season 4 celebrated students who achieved outstanding results across Mathematics, Physics, and Chemistry at the awarding ceremony in Phnom Penh.
            </p>

            <a
              href={gallery2025DriveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-full bg-emerald-700 px-6 py-3 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-800 hover:shadow-lg active:scale-95"
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
              Season 3 was held in partnership with Paragon International University. Browse the gallery to see highlights from the event.
            </p>

            <a
              href={gallery2024DriveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-full border border-emerald-700 px-6 py-3 font-bold text-emerald-700 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-50 hover:shadow-md active:scale-95"
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

      {/* ═══════════════════ SPONSORS ═══════════════════ */}
      <section id="sponsors" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-10">
            <SectionLabel>Partners and Sponsors</SectionLabel>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Organizations Supporting E-Solver Cambodia
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-slate-600">
              E-Solver Cambodia is made possible through the support of schools, businesses, media organizations, and community partners who believe in student development.
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

      {/* ═══════════════════ RULES ═══════════════════ */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div data-reveal className="mb-10 text-center">
            <SectionLabel>Competition Rules</SectionLabel>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Fair Competition. Clear Rules.
            </h2>
          </div>

          <div className="grid gap-4">
            {[
              {
                title: "Individual Competition",
                text: "E-Solver Cambodia is an individual competition. Students must complete the exam independently without outside assistance.",
              },
              {
                title: "Online Exam via SOMA Portal",
                text: "All participants take the exam through the SOMA Portal. Each of the three categories receives a unique access code after registration. Students may take the exam at any time between 8:00 AM and 8:00 PM on competition day.",
              },
              {
                title: "One Attempt Only",
                text: "Each participant has one exam attempt. Once the exam is started, it must be completed within the allocated time. The SOMA Portal automatically submits when time expires.",
              },
              {
                title: "All Sections Required",
                text: "The exam includes all four sections — Mathematical Reasoning, Science Reasoning, Technology and Computational Thinking, and Logic and Analytical Thinking. Students must answer all sections.",
              },
              {
                title: "Bilingual Questions",
                text: "Questions are provided in both Khmer and English so students can focus on reasoning while becoming familiar with academic STEM language.",
              },
              {
                title: "Academic Integrity",
                text: "Any form of cheating, screen sharing, copying, or collaboration during the exam will result in disqualification. Results are reviewed and verified by the Academic team before publication.",
              },
              {
                title: "Results Are Final",
                text: "After the verification process, published results are final. Any appeals must be submitted within 48 hours of result announcement through the official Telegram channel.",
              },
            ].map((rule, index) => (
              <div
                key={rule.title}
                data-reveal
                style={{ transitionDelay: String(index * 60) + "ms" }}
                className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-sm font-black text-emerald-700 transition duration-300 group-hover:bg-emerald-700 group-hover:text-white">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="text-lg font-black">{rule.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{rule.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ FAQ ═══════════════════ */}
      <section id="faq" className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div data-reveal className="mb-10 text-center">
            <SectionLabel>FAQ</SectionLabel>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Everything you need to know before registering for E-Solver Cambodia.
            </p>
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

                  <span className="text-2xl text-emerald-700 transition duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 leading-8 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-800 via-blue-900 to-slate-950 px-6 py-20 text-center text-white">
        <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-yellow-400/20 blur-3xl" />

        <div data-reveal className="relative mx-auto max-w-4xl">
          <p className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-bold uppercase tracking-wide text-emerald-100">
            Think Deeper. Solve Further.
          </p>

          <h2 className="mt-5 text-4xl font-black md:text-5xl">
            Ready to Compete?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-emerald-100">
            Join E-Solver Cambodia and challenge yourself across Mathematics, Science, Technology, and Logic. Register individually or through your school, then use your category access code to enter the SOMA Portal.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/competitions/e-solver-cambodia/register" 
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-emerald-500 px-8 py-3 font-black text-white transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-400 hover:shadow-lg active:scale-95"
            >
              Register Now
            </a>

            <a
              href={telegramLink2}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-8 py-3 font-bold text-emerald-800 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-50 hover:shadow-lg active:scale-95"
            >
              Join E-Solver Cambodia Updates
            </a>

            <a
              href={somaPortalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-emerald-400/40 bg-emerald-400/15 px-8 py-3 font-bold text-emerald-200 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-400/25 hover:shadow-lg active:scale-95"
            >
              Go to SOMA Portal
            </a>

            <a
              href={somaTelegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/25 bg-white/10 px-8 py-3 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-emerald-800 hover:shadow-lg active:scale-95"
            >
              Contact SOMA
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FOOTER ═══════════════════ */}
      <footer className="bg-slate-950 px-6 py-8 text-center text-sm text-slate-300">
        <strong className="block text-lg text-white">
          E-Solver Cambodia
        </strong>

        <p className="mt-1">
          Cambodia&apos;s Applied Thinking Competition — Mathematics, Science,
          Technology, and Logic
        </p>

        <p className="mt-3 text-slate-400">
          Organized under SOMA Education Group · SOMA Competition
        </p>

        <p className="mt-2">
          © 2021–2026 E-Solver Cambodia. All rights reserved.
        </p>
      </footer>
    </main>
  );
}