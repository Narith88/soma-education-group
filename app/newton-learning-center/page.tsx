const telegramLink = "https://t.me/NewtonLearningCenter";
const facebookLink = "https://facebook.com/newtonlearningcenter75";
const youtubeLink = "https://www.youtube.com/@NewtonLearningCenter";
const tiktokLink =
  "https://www.tiktok.com/@newton.learning.c?is_from_webapp=1&sender_device=pc";

const nlcLogoWidth = "230px";

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

const baciiBooks = [
  {
    title: "BacII Physics Book 1",
    description: "Physics preparation book for BacII students",
    filename: "bacii-physics-book-1.png",
  },
  {
    title: "BacII Physics Book 2",
    description: "Second physics preparation book for BacII students",
    filename: "bacii-physics-book-2.png",
  },
  {
    title: "BacII Chemistry Book 1",
    description: "Chemistry preparation book for BacII students",
    filename: "bacii-chemistry-book-1.png",
  },
  {
    title: "BacII Chemistry Book 2",
    description: "Second chemistry preparation book for BacII students",
    filename: "bacii-chemistry-book-2.png",
  },
  {
    title: "BacII History Book",
    description: "History preparation book for BacII students",
    filename: "bacii-history-book.png",
  },
  {
    title: "BacII Complete Set",
    description: "Set of 5 books with free delivery",
    filename: "bacii-complete-set.png",
  },
];

const outstandingBooks = [
  {
    title: "Physics Mechanics Book 1",
    description: "Mechanics book for outstanding students",
    filename: "outstanding-physics-mechanics-1.png",
  },
  {
    title: "Physics Mechanics Book 2",
    description: "Second mechanics book for outstanding students",
    filename: "outstanding-physics-mechanics-2.png",
  },
  {
    title: "Wave Mechanics Book",
    description: "Wave mechanics physics book for outstanding students",
    filename: "outstanding-wave-mechanics.png",
  },
  {
    title: "Math 207 Olympiad Problems",
    description: "Mathematics book with 207 olympiad problems",
    filename: "outstanding-math-207-olympiad-problems.png",
  },
  {
    title: "Outstanding Student Set",
    description: "Complete set with free delivery",
    filename: "outstanding-student-set.png",
  },
];

export default function NewtonLearningCenterPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-blue-800 px-6 py-10 text-white">
        <div className="mx-auto max-w-6xl">
          <a
            href="/"
            className="mb-8 inline-block rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-white/20"
          >
            ← Back to Home
          </a>

          <div className="grid items-center gap-8 md:grid-cols-[260px_1fr]">
            <div className="flex justify-center md:justify-start">
              <img
                src="/images/nlc-logo.png"
                alt="Newton Learning Center Logo"
                style={{
                  width: nlcLogoWidth,
                  height: "auto",
                  display: "block",
                }}
                className="rounded-2xl bg-white p-3 shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.04] hover:shadow-xl"
              />
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-100">
                SOMA Education Group
              </p>

              <h1 className="max-w-3xl text-4xl font-bold md:text-6xl">
                Newton Learning Center
              </h1>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-blue-100">
                សាលាបង្វឹកត្រៀមប្រឡងសិស្សពូកែ និងប្រឡងបាក់ឌុប ដែលបង្កើតឡើង
                ដើម្បីជួយសិស្សកម្ពុជាបង្កើនមូលដ្ឋានគ្រឹះក្នុងមុខវិជ្ជាវិទ្យាសាស្ត្រ
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-white px-6 py-3 text-center font-semibold text-blue-800 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-blue-50 hover:shadow-lg"
                >
                  Telegram Channel
                </a>

                <a
                  href={facebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full border border-white px-6 py-3 text-center font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-white hover:text-blue-800 hover:shadow-lg"
                >
                  Facebook Page
                </a>

                <a
                  href={youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full border border-white px-6 py-3 text-center font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-white hover:text-blue-800 hover:shadow-lg"
                >
                  YouTube Channel
                </a>

                <a
                  href={tiktokLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full border border-white px-6 py-3 text-center font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-white hover:text-blue-800 hover:shadow-lg"
                >
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl">
            <h2 className="text-2xl font-bold text-blue-800">
              អំពីយើង / About Us
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Newton Learning Center គឺជាសាលាបង្វឹកត្រៀមប្រឡងសិស្សពូកែ
              និងប្រឡងបាក់ឌុបដែលបង្វឹកដោយគ្រូដែលមានបទពិសោធខ្ពស់
              ហើយជាអតីតសិស្សពូកែ និងអតីតសិស្សនិទ្ទេស A និង B
              សាលាបង្វឹកនេះបានបង្កើតដោយនិស្សិតសកលវិទ្យាល័យមួយក្រុមនៅចុងឆ្នាំ
              ២០២៣
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Newton Learning Center ផ្តល់ជូននូវការបំប៉នត្រៀមប្រឡងបាក់ឌុប
              និងសិស្សពូកែទូទាំងប្រទេស បង្ហាត់បង្រៀនដោយអ្នកដែលមានជំនាញ
              និងបទពិសោធន៍ខ្ពស់
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl">
            <h2 className="text-2xl font-bold text-blue-800">
              What We Offer
            </h2>

            <ul className="mt-4 space-y-4 text-slate-600">
              <li>
                • Courses for academic preparation
                <span className="block text-sm text-slate-500">
                  ថ្នាក់ត្រៀមបាក់ឌុប និងសិស្សពូកែ
                </span>
              </li>
              <li>
                • Books and learning materials
                <span className="block text-sm text-slate-500">
                  សៀវភៅត្រៀមសិស្សពូកែ និងបាក់ឌុប
                </span>
              </li>
              <li>
                • Free learning videos and community learning
                <span className="block text-sm text-slate-500">
                  មាតិកាសិក្សាដោយឥតគិតថ្លៃតាម YouTube និងបណ្តាញសង្គម
                </span>
              </li>
              <li>
                • Study resources and practice materials
                <span className="block text-sm text-slate-500">
                  ឯកសារត្រៀមប្រឡង
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-blue-800">
            Course Description / ការពិពណ៌នាថ្នាក់រៀន
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-blue-50 hover:shadow-md">
              <h3 className="font-bold text-slate-900">
                ថ្នាក់បាក់ឌុប វិទ្យាសាស្ត្រ
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                គណិតវិទ្យា | រូបវិទ្យា | គីមីវិទ្យា | ជីវវិទ្យា
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-blue-50 hover:shadow-md">
              <h3 className="font-bold text-slate-900">
                ថ្នាក់សិស្សពូកែ និងប្រឡងផ្សេងៗ
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                គណិតវិទ្យា | រូបវិទ្យា
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                Newton Learning Center
              </p>
              <h2 className="mt-2 text-3xl font-bold">
                Available Courses / ថ្នាក់រៀនដែលមានលក់
              </h2>
              <p className="mt-3 max-w-3xl text-slate-600">
                Slide manually to view each course poster and description
              </p>
            </div>

            <a
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-blue-700 px-6 py-3 text-center font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-blue-800 hover:shadow-lg"
            >
              Buy Course on Telegram
            </a>
          </div>

          <div className="flex snap-x gap-6 overflow-x-auto scroll-smooth pb-6">
            {courses.map((course) => (
              <div
                key={course.title}
                className="w-[280px] shrink-0 snap-start overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl md:w-[340px]"
              >
                <div className="aspect-[4/5] bg-blue-50">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-950">
                    {course.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {course.description}
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {course.points.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul>

                  <a
                    href={telegramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block rounded-full bg-blue-700 px-5 py-2 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-blue-800 hover:shadow-lg"
                  >
                    Contact to Buy
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Learning Materials
          </p>

          <h2 className="mt-2 text-3xl font-bold">Our Book</h2>

          <p className="mt-3 max-w-3xl text-slate-600">
            Book photos can be added later. Put your book images in{" "}
            <span className="font-semibold">public/images/books</span> and
            rename them based on the suggested filenames below.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-blue-800">
            For BacII Students / សម្រាប់សិស្សបាក់ឌុប
          </h3>

          <p className="mt-2 text-slate-600">
            Slide horizontally to view all BacII books
          </p>

          <div className="mt-6 flex snap-x gap-5 overflow-x-auto scroll-smooth pb-6">
            {baciiBooks.map((book) => (
              <div
                key={book.filename}
                className="w-[220px] shrink-0 snap-start rounded-2xl border border-dashed border-blue-200 bg-blue-50 p-5 text-center transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:bg-blue-100 hover:shadow-lg"
              >
                <div className="flex aspect-square items-center justify-center rounded-xl bg-white">
                  <p className="px-4 text-sm font-semibold text-blue-800">
                    Book Photo
                  </p>
                </div>

                <h4 className="mt-4 font-bold text-slate-900">
                  {book.title}
                </h4>

                <p className="mt-2 text-sm text-slate-600">
                  {book.description}
                </p>

                <p className="mt-2 text-xs text-slate-500">
                  File name: {book.filename}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-blue-800">
            For Outstanding Students / សម្រាប់សិស្សពូកែ
          </h3>

          <p className="mt-2 text-slate-600">
            Slide horizontally to view all outstanding student books
          </p>

          <div className="mt-6 flex snap-x gap-5 overflow-x-auto scroll-smooth pb-6">
            {outstandingBooks.map((book) => (
              <div
                key={book.filename}
                className="w-[220px] shrink-0 snap-start rounded-2xl border border-dashed border-blue-200 bg-blue-50 p-5 text-center transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:bg-blue-100 hover:shadow-lg"
              >
                <div className="flex aspect-square items-center justify-center rounded-xl bg-white">
                  <p className="px-4 text-sm font-semibold text-blue-800">
                    Book Photo
                  </p>
                </div>

                <h4 className="mt-4 font-bold text-slate-900">
                  {book.title}
                </h4>

                <p className="mt-2 text-sm text-slate-600">
                  {book.description}
                </p>

                <p className="mt-2 text-xs text-slate-500">
                  File name: {book.filename}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-10">
  <div className="mx-auto max-w-5xl">
    <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg md:p-10">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
        Student Success
      </p>

      <h2 className="mt-2 text-3xl font-bold text-slate-950">
        Student Achievement
      </h2>

      <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
        Explore student success stories, learning progress, competition
        achievements, and milestones connected to SOMA Education Group and
        Newton Learning Center.
      </p>

      <a
        href="/achievements"
        className="mt-6 inline-block rounded-full bg-blue-700 px-8 py-3 font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-blue-800 hover:shadow-lg"
      >
        View Achievements
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