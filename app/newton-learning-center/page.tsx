const telegramLink = "https://t.me/NewtonLearningCenter";
const facebookLink = "https://facebook.com/newtonlearningcenter75";
const youtubeLink = "https://www.youtube.com/@NewtonLearningCenter";
const tiktokLink =
  "https://www.tiktok.com/@newton.learning.c?is_from_webapp=1&sender_device=pc";

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

type Book = {
  title: string;
  description: string;
  filename: string;
};

function BookCard({ book, index }: { book: Book; index: number }) {
  return (
    <div
      className="charity-reveal charity-shine group w-[230px] shrink-0 snap-start overflow-hidden rounded-3xl border border-blue-100 bg-white p-5 text-center shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:border-blue-200 hover:shadow-2xl"
      style={{ animationDelay: String(index * 0.08) + "s" }}
    >
      <div className="flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-slate-100 transition-all duration-500 group-hover:from-blue-100 group-hover:to-white">
        <div>
          <p className="text-4xl font-bold text-blue-800">Book</p>
          <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Photo Later
          </p>
        </div>
      </div>

      <h4 className="mt-5 font-bold text-slate-950 transition-colors duration-300 group-hover:text-blue-800">
        {book.title}
      </h4>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {book.description}
      </p>

      <p className="mt-3 rounded-full bg-blue-50 px-3 py-2 text-xs text-blue-800">
        {book.filename}
      </p>
    </div>
  );
}

export default function NewtonLearningCenterPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 px-6 py-14 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#2563eb66,transparent_35%),radial-gradient(circle_at_bottom_right,#16a34a55,transparent_35%)]" />
        <div className="absolute left-10 top-20 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-20 right-12 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <a
            href="/"
            className="mb-8 inline-block rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-white/20"
          >
            ← Back to Home
          </a>

          <div className="grid items-center gap-12 md:grid-cols-[280px_1fr]">
            <div className="flex justify-center md:justify-start">
              <div className="charity-float rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur">
                <img
                  src="/images/nlc-logo.png"
                  alt="Newton Learning Center Logo"
                  style={{
                    width: nlcLogoWidth,
                    height: "auto",
                    display: "block",
                  }}
                  className="rounded-2xl bg-white p-4 shadow-lg transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.04] hover:shadow-xl"
                />
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-200">
                SOMA Education Group
              </p>

              <h1 className="max-w-3xl text-4xl font-bold md:text-6xl">
                Newton Learning Center
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
                សាលាបង្វឹកត្រៀមប្រឡងសិស្សពូកែ និងប្រឡងបាក់ឌុប ដែលបង្កើតឡើង
                ដើម្បីជួយសិស្សកម្ពុជាបង្កើនមូលដ្ឋានគ្រឹះក្នុងមុខវិជ្ជាវិទ្យាសាស្ត្រ
              </p>

              <p className="mt-4 max-w-3xl leading-8 text-slate-300">
                Newton Learning Center is an academic preparation center under
                SOMA Education Group that supports Cambodian students through
                BacII preparation, outstanding student exam preparation, STEM
                foundations, books, learning resources, and online study
                communities.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {socialLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      index === 0
                        ? "inline-block rounded-full bg-white px-6 py-3 text-center font-semibold text-blue-800 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-blue-50 hover:shadow-lg"
                        : "inline-block rounded-full border border-white/30 bg-white/10 px-6 py-3 text-center font-semibold text-white backdrop-blur transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-white hover:text-blue-800 hover:shadow-lg"
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

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="charity-reveal charity-shine rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              About Newton Learning Center
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-950">
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
              <h3 className="font-bold text-blue-900">
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

          <div className="charity-reveal charity-shine rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              Learning Support
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-950">
              What We Offer
            </h2>

            <div className="mt-5 space-y-4">
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
                  className="rounded-2xl bg-slate-50 p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-blue-50 hover:shadow-md"
                >
                  <div className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                      {index + 1}
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-950">
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

      <section className="relative overflow-hidden bg-white px-6 py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2563eb12,transparent_35%)]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="charity-reveal mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                Newton Learning Center
              </p>

              <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                Available Courses / ថ្នាក់រៀនដែលមានលក់
              </h2>

              <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                Slide manually to view each course poster and description. Each
                course is designed to help students build stronger foundations,
                practice exam-style questions, and communicate with teachers.
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

          <div className="flex snap-x gap-6 overflow-x-auto scroll-smooth pb-8">
            {courses.map((course, index) => (
              <div
                key={course.title}
                className="charity-reveal charity-shine group w-[285px] shrink-0 snap-start overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl md:w-[350px]"
                style={{ animationDelay: String(index * 0.08) + "s" }}
              >
                <div className="aspect-[4/5] overflow-hidden bg-blue-50">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                    Course {index + 1}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-slate-950">
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
                    className="mt-6 inline-block rounded-full bg-blue-700 px-5 py-2 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-blue-800 hover:shadow-lg"
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
        <div className="charity-reveal mb-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Learning Materials
          </p>

          <h2 className="mt-2 text-3xl font-bold md:text-4xl">Our Book</h2>

          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            Book photos can be added later. Put your book images in{" "}
            <span className="font-semibold">public/images/books</span> and
            rename them based on the suggested filenames below.
          </p>
        </div>

        <div className="charity-reveal rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h3 className="text-2xl font-bold text-blue-800">
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
              className="inline-block rounded-full border border-blue-700 px-5 py-2 text-center text-sm font-semibold text-blue-700 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-blue-50 hover:shadow-md"
            >
              Order Books
            </a>
          </div>

          <div className="mt-6 flex snap-x gap-5 overflow-x-auto scroll-smooth pb-6">
            {baciiBooks.map((book, index) => (
              <BookCard key={book.filename} book={book} index={index} />
            ))}
          </div>
        </div>

        <div className="charity-reveal mt-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h3 className="text-2xl font-bold text-blue-800">
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
              className="inline-block rounded-full border border-blue-700 px-5 py-2 text-center text-sm font-semibold text-blue-700 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-blue-50 hover:shadow-md"
            >
              Order Books
            </a>
          </div>

          <div className="mt-6 flex snap-x gap-5 overflow-x-auto scroll-smooth pb-6">
            {outstandingBooks.map((book, index) => (
              <BookCard key={book.filename} book={book} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-10">
        <div className="mx-auto max-w-5xl">
          <div className="charity-reveal rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl md:p-10">
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