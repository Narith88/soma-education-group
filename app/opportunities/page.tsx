"use client";

import { useState } from "react";

const telegramLink = "https://t.me/NewtonLearningCenter";
const applicationLink = "https://forms.gle/T3Xmeuvn1QRNYTvU9";

const recruitmentBenefits = [
  {
    label: "CERTIFICATE",
    title: "Official Certificate",
    khmer: "វិញ្ញាបនបត្រផ្លូវការពី Board of Directors",
    english: "Earn an official certificate from the Board of Directors.",
  },
  {
    label: "REWARD",
    title: "Outstanding Member Incentive",
    khmer: "ប្រាក់កម្រៃចំពោះសមាជិកឆ្នើម",
    english: "Outstanding members may receive incentives or rewards.",
  },
  {
    label: "MENTORSHIP",
    title: "Leadership Guidance",
    khmer: "ការណែនាំពីអ្នកដឹកនាំ",
    english: "Receive guidance and mentorship from SOMA leaders.",
  },
  {
    label: "EXPERIENCE",
    title: "Professional Experience",
    khmer: "វិជ្ជាជីវៈពិតប្រាកដ និងបទពិសោធន៍ជាក់ស្តែងដូចធ្វើការក្នុងក្រុមហ៊ុន",
    english:
      "Gain real hands-on professional experience similar to working in a corporate environment.",
  },
];

const openPositions = [
  "Executive Assistant",
  "VP Academic",
  "Director Academic",
  "VP External",
  "Director External",
  "VP Supply Chain & Operations",
  "Director Supply Chain & Operations",
  "VP Marketing",
  "Director Marketing",
];

const roleGroups = [
  {
    title: "Executive Assistant",
    positions: "Executive Assistant (x1)",
    color: "from-blue-800 to-slate-900",
    label: "EA",
    points: [
      "Work closely with the Board of Directors",
      "Support the Board of Directors and Executive Team",
      "Assist with executive communication, meeting preparation, document organization, and follow-up tasks across departments",
    ],
    bestFor:
      "Best for students who are organized, responsible, and want to learn leadership and executive-level coordination.",
  },
  {
    title: "VP & Director of Academic",
    positions:
      "VP Academic (x1) + Director of Academic (x3: Math / Physics / Chemistry)",
    color: "from-indigo-800 to-blue-900",
    label: "ACAD",
    points: [
      "Research and prepare academic resources for SOMA projects",
      "Support academic planning for E-SC, MGO, CMPO, and NLC",
      "Help design learning materials, competition content, tutoring structure, and STEM-related academic resources",
    ],
    bestFor:
      "Best for students who enjoy STEM, teaching, academic research, and creating useful learning resources.",
  },
  {
    title: "VP & Director of External",
    positions: "VP External (x1) + Director of External (x2)",
    color: "from-cyan-800 to-blue-900",
    label: "EXT",
    points: [
      "Build communication between SOMA and schools, communities, and partners",
      "Prepare sponsorship proposals, outreach packages, and partnership materials",
      "Support school outreach, external communication, and public representation of SOMA",
    ],
    bestFor:
      "Best for students who are confident in communication, networking, partnership building, and public relations.",
  },
  {
    title: "VP & Director of Marketing",
    positions: "VP Marketing (x1) + Director of Marketing (x2)",
    color: "from-purple-800 to-pink-900",
    label: "MKT",
    points: [
      "Build SOMA’s brand and public presence",
      "Create social media content for Facebook, Telegram, Instagram, TikTok, and LinkedIn",
      "Design posters, videos, campaigns, and help keep SOMA’s audience engaged",
    ],
    bestFor:
      "Best for students who enjoy creativity, social media, design, video editing, Canva, CapCut, Adobe tools, and branding.",
  },
  {
    title: "VP & Director of Supply Chain & Operations",
    positions:
      "VP Supply Chain & Operations (x1) + Director of Supply Chain & Operations (x2)",
    color: "from-emerald-800 to-slate-900",
    label: "OPS",
    points: [
      "Prepare and manage event logistics",
      "Handle merchandise, inventory, supplies, documents, certificates, medals, and event materials",
      "Support smooth execution of competitions, events, and internal operations",
    ],
    bestFor:
      "Best for students who are responsible, detail-oriented, organized, and interested in operations and logistics.",
  },
];

const generalRequirements = [
  "Grade 11, Grade 12, Year 1 university student, or Year 2 university student",
  "Active, responsible, and willing to learn",
  "Able to work in a team",
  "Interested in education, STEM, communication, marketing, operations, events, or leadership",
  "Motivated to grow personally and professionally",
];

const sponsorshipPackages = [
  {
    title: "Diamond Sponsor",
    description:
      "Highest-level sponsor for major SOMA competitions, education projects, or annual programs.",
  },
  {
    title: "Gold Sponsor",
    description:
      "Strong support for competitions, student awards, workshops, or learning programs.",
  },
  {
    title: "Silver Sponsor",
    description:
      "Support for student resources, event materials, prizes, or community projects.",
  },
  {
    title: "Bronze Sponsor",
    description:
      "Entry-level support for SOMA activities, student programs, and educational events.",
  },
];

const inKindSupport = [
  "Study materials",
  "Food and drinks",
  "Event supplies",
  "Discounts or vouchers",
  "Awards, medals, or certificates",
  "Printing for posters and banners",
  "Venue or location support",
  "Media or promotion support",
];

const partnershipTypes = [
  {
    title: "School Partnership",
    description:
      "Collaborate with schools for competitions, workshops, student outreach, and academic programs.",
  },
  {
    title: "Educational Organization Partnership",
    description:
      "Work with organizations that support education, STEM learning, youth development, and community impact.",
  },
  {
    title: "Media Partnership",
    description:
      "Support SOMA through social media promotion, photography, videography, interviews, and public awareness.",
  },
  {
    title: "Community Partnership",
    description:
      "Collaborate on charity activities, student support projects, educational campaigns, and youth programs.",
  },
];

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-blue-700">
      {children}
    </p>
  );
}

export default function OpportunitiesPage() {
  const [showLeaderDescription, setShowLeaderDescription] = useState(false);
  const [activeRoleIndex, setActiveRoleIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 px-6 py-14 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#2563eb66,transparent_35%),radial-gradient(circle_at_bottom_right,#f59e0b55,transparent_35%)]" />
        <div className="absolute left-10 top-20 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-20 right-12 h-40 w-40 rounded-full bg-yellow-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <a
            href="/"
            className="mb-8 inline-block rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-white/20"
          >
            ← Back to Home
          </a>

          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-200">
            SOMA Education Group
          </p>

          <h1 className="max-w-4xl text-4xl font-bold md:text-6xl">
            Opportunities
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            SOMA Education Group welcomes students, future team members,
            partners, and sponsors who want to support education, leadership,
            STEM, competitions, and student development in Cambodia.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="charity-float rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
              <p className="text-3xl font-bold">Team</p>
              <p className="mt-1 text-sm text-slate-200">
                Current recruitment is open
              </p>
            </div>

            <div className="charity-float rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
              <p className="text-3xl font-bold">Partners</p>
              <p className="mt-1 text-sm text-slate-200">
                Schools, organizations, and communities
              </p>
            </div>

            <div className="charity-float rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
              <p className="text-3xl font-bold">Sponsors</p>
              <p className="mt-1 text-sm text-slate-200">
                Diamond, Gold, Silver, and Bronze support
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={applicationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-white px-8 py-3 text-center font-semibold text-blue-800 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-blue-50 hover:shadow-lg"
            >
              Apply for Team Recruitment
            </a>

            <a
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border border-white/30 bg-white/10 px-8 py-3 text-center font-semibold text-white backdrop-blur transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-white hover:text-blue-800 hover:shadow-lg"
            >
              Contact Us on Telegram
            </a>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-yellow-50 px-6 py-16">
        <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-blue-300/25 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-yellow-300/25 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <SectionLabel>Team Recruitment</SectionLabel>

            <h2 className="mt-4 bg-gradient-to-r from-blue-800 via-slate-900 to-yellow-700 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
              Start Building Real Experience with SOMA
            </h2>

            <p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-700">
              សិស្សភាគច្រើនរង់ចាំដល់បញ្ចប់ការសិក្សាទើបចាប់ផ្តើម។ នៅ SOMA
              ប្អូនអាចចាប់ផ្តើមឥឡូវនេះ។ ការធ្វើការនៅ SOMA គឺដូចធ្វើការ
              corporate ដែលប្អូនអាចរៀនពីការដឹកនាំ ការទំនាក់ទំនង
              ការគ្រប់គ្រងគម្រោង និងការធ្វើការជាក្រុម។
            </p>

            <p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-600">
              Most students wait until after graduation to begin building
              experience. At SOMA, you can start now. Working at SOMA is similar
              to working in a real corporate environment, where students develop
              leadership, teamwork, communication, project management, and
              professional responsibility.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {recruitmentBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-3xl border border-blue-100 bg-white p-6 shadow-lg shadow-blue-100/50 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-yellow-200 hover:shadow-2xl"
              >
                <p className="inline-block rounded-full bg-slate-950 px-4 py-2 text-xs font-bold tracking-wide text-white">
                  {benefit.label}
                </p>

                <h3 className="mt-5 text-xl font-bold text-slate-950">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {benefit.khmer}
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {benefit.english}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-8 rounded-[2rem] border border-blue-100 bg-white p-6 shadow-xl shadow-blue-100/60 md:grid-cols-[0.95fr_1.05fr] md:p-8">
            <div className="md:sticky md:top-8 md:self-start">
              <div className="rounded-[2rem] bg-gradient-to-br from-blue-900 via-slate-950 to-yellow-800 p-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-200">
                  Open Positions
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  We Are Looking for Future Leaders
                </h3>

                <button
                  type="button"
                  onClick={() =>
                    setShowLeaderDescription(!showLeaderDescription)
                  }
                  className="mt-5 w-full rounded-2xl border border-white/15 bg-white/10 p-5 text-left backdrop-blur transition-all duration-300 hover:bg-white/15"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-bold uppercase tracking-wide text-yellow-100">
                      Click here to read more
                    </p>

                    <span className="text-xl font-bold text-white">
                      {showLeaderDescription ? "−" : "+"}
                    </span>
                  </div>

                  <div
                    className={
                      showLeaderDescription
                        ? "max-h-[520px] overflow-hidden transition-all duration-700 ease-in-out"
                        : "max-h-0 overflow-hidden transition-all duration-700 ease-in-out"
                    }
                  >
                    <div className="mt-4 space-y-4 border-t border-white/10 pt-4 text-sm leading-7 text-slate-200">
                      <p>
                        យើងកំពុងស្វែងរកអ្នកដែលចង់បង្កើតឥទ្ធិពលពិតប្រាកដ។
                      </p>

                      <p>
                        We are looking for students who want to create real
                        impact and grow with SOMA Education Group.
                      </p>

                      <p>
                        This recruitment is for students who want to build real
                        professional experience before graduation. Team members
                        will work inside structured departments, communicate
                        with leaders, support real projects, and learn how an
                        education organization operates.
                      </p>

                      <p>
                        SOMA is suitable for students who are serious about
                        leadership, education, communication, operations,
                        marketing, STEM, and community impact.
                      </p>
                    </div>
                  </div>
                </button>

                <div className="mt-6 grid gap-3">
                  {openPositions.map((position) => (
                    <div
                      key={position}
                      className="rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold backdrop-blur"
                    >
                      {position}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-gradient-to-br from-white via-blue-50 to-yellow-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                General Requirements
              </p>

              <h3 className="mt-2 text-3xl font-bold text-slate-950">
                Who Can Apply?
              </h3>

              <div className="mt-6 grid gap-3">
                {generalRequirements.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-2xl bg-white p-4 text-sm font-medium text-slate-700 shadow-sm"
                  >
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-700" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-yellow-100 p-5">
                <p className="font-bold text-yellow-900">
                  Application Deadline
                </p>

                <p className="mt-2 text-slate-700">
                  ផុតកំណត់៖ ថ្ងៃទី ១៣ មិថុនា ២០២៦
                </p>

                <p className="mt-1 text-slate-700">
                  Deadline: June 13, 2026
                </p>
              </div>

              <a
                href={applicationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-full bg-blue-700 px-8 py-3 font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-blue-800 hover:shadow-lg"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>

 <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-yellow-50 px-6 py-16">
  <div className="mx-auto max-w-6xl">
    <div className="mb-10 text-center">
      <SectionLabel>Team Roles</SectionLabel>

      <h2 className="mt-4 bg-gradient-to-r from-blue-800 via-slate-900 to-yellow-700 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
        Explore Available Departments
      </h2>

      <p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-600">
        Each role helps SOMA run like a real organization. Click each
        department card to open its responsibilities and best-fit description
        with a smooth transition.
      </p>
    </div>

    <div className="grid items-start gap-5 md:grid-cols-2 lg:grid-cols-3">
      {roleGroups.map((role, index) => {
        const isOpen = activeRoleIndex === index;

        return (
          <div
            key={role.title}
            className="overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-lg shadow-blue-100/50 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-yellow-200 hover:shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setActiveRoleIndex(isOpen ? null : index)}
              className="w-full text-left"
            >
              <div
                className={
                  "flex min-h-[315px] flex-col justify-between bg-gradient-to-br " +
                  role.color +
                  " p-6 text-white"
                }
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
                        SOMA Department
                      </p>

                      <h3 className="mt-2 text-xl font-bold leading-8">
                        {role.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-white/80">
                        {role.positions}
                      </p>
                    </div>

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/15 text-sm font-bold backdrop-blur">
                      {role.label}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3">
                  <p className="text-sm font-semibold text-yellow-100">
                    Click here to read role details
                  </p>

                  <span className="text-xl font-bold">
                    {isOpen ? "−" : "+"}
                  </span>
                </div>
              </div>
            </button>

            <div
              className={
                isOpen
                  ? "max-h-[900px] overflow-hidden transition-all duration-700 ease-in-out"
                  : "max-h-0 overflow-hidden transition-all duration-700 ease-in-out"
              }
            >
              <div className="bg-gradient-to-br from-white via-blue-50/40 to-yellow-50/50 p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                  Main Responsibilities
                </p>

                <div className="mt-4 grid gap-3">
                  {role.points.map((point) => (
                    <div
                      key={point}
                      className="flex gap-3 rounded-2xl bg-white p-4 text-sm text-slate-700 shadow-sm"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-700" />
                      <p className="leading-7">{point}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl bg-yellow-100 p-5">
                  <p className="text-sm font-semibold uppercase tracking-wide text-yellow-800">
                    Best Fit
                  </p>

                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    {role.bestFor}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-slate-950 to-slate-950 px-6 py-16 text-white">
        <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-yellow-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="inline-block rounded-full bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-blue-200">
              Partnership & Sponsorship
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Support SOMA Education Group
            </h2>

            <p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-200">
              SOMA is always open to sponsorship and partnership opportunities.
              Sponsors and partners can support our competitions, workshops,
              student resources, charity activities, and youth development
              projects.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
              <h3 className="text-2xl font-bold">Sponsorship Packages</h3>

              <p className="mt-3 leading-7 text-slate-300">
                We welcome sponsors at different levels depending on the size
                and type of support.
              </p>

              <div className="mt-6 grid gap-4">
                {sponsorshipPackages.map((packageItem) => (
                  <div
                    key={packageItem.title}
                    className="rounded-2xl bg-white/10 p-4"
                  >
                    <h4 className="font-bold text-white">
                      {packageItem.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {packageItem.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
              <h3 className="text-2xl font-bold">In-Kind Support</h3>

              <p className="mt-3 leading-7 text-slate-300">
                Support does not always have to be money. We also welcome
                supplies, food, discounts, event support, and media support.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {inKindSupport.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur md:p-8">
            <h3 className="text-2xl font-bold">Partnership Opportunities</h3>

            <p className="mt-3 max-w-4xl leading-7 text-slate-300">
              SOMA welcomes collaboration with schools, universities,
              organizations, companies, media teams, communities, and youth
              groups that want to support education and student development.
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-4">
              {partnershipTypes.map((partner) => (
                <div
                  key={partner.title}
                  className="rounded-3xl bg-white p-5 text-slate-900"
                >
                  <h4 className="font-bold text-blue-800">
                    {partner.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {partner.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 rounded-2xl bg-yellow-100 p-5 text-sm font-semibold leading-7 text-yellow-900">
              Volunteer opportunities may open in the future, but currently SOMA
              is focusing on team recruitment, sponsorship, and partnership
              collaboration.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 via-white to-yellow-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2rem] border border-blue-100 bg-white p-8 text-center shadow-xl shadow-blue-100/60 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              Ready to Join or Support SOMA?
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-950">
              Choose Your Opportunity
            </h2>

            <p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-600">
              Apply for team recruitment, contact us about partnership, or
              message us if you are interested in sponsoring SOMA Education
              Group.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={applicationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-blue-700 px-8 py-3 text-center font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-blue-800 hover:shadow-lg"
              >
                Apply Now
              </a>

              <a
                href={telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full border border-blue-700 px-8 py-3 text-center font-semibold text-blue-700 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-blue-50 hover:shadow-md"
              >
                Message SOMA on Telegram
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 px-6 py-6 text-center text-sm text-slate-300">
        © 2026 SOMA Education Group. All rights reserved.
      </footer>
    </main>
  );
}