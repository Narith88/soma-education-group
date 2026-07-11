"use client";

import { useState, useRef, type ChangeEvent, type FormEvent, type ReactNode } from "react";

/*
  E-Solver Cambodia 2.0 — Registration Page
  Location: app/competitions/e-solver-cambodia/register/page.tsx

  SETUP:
  1. Replace GOOGLE_SCRIPT_URL with your deployed Google Apps Script Web App URL
  2. Replace the banner image at /images/competitions/e-solver/registration-banner.jpg
  3. Update REGISTRATION_PAGE_URL if your domain changes
  4. Connect "Register Now" button on E-Solver page to: /competitions/e-solver-cambodia/register
*/

const GOOGLE_SCRIPT_URL = "/api/e-solver-cambodia/register";

const REGISTRATION_PAGE_URL =
  "https://www.somaeducationgroup.com/competitions/e-solver-cambodia/register";

const QR_API =
  "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=";

const BANNER_IMAGE =
  "/images/competitions/e-solver/registration-banner.jpg";

const provinces = [
  "Phnom Penh", "Banteay Meanchey", "Battambang", "Kampong Cham",
  "Kampong Chhnang", "Kampong Speu", "Kampong Thom", "Kampot",
  "Kandal", "Kep", "Koh Kong", "Kratie", "Mondulkiri",
  "Oddar Meanchey", "Pailin", "Preah Sihanouk", "Preah Vihear",
  "Prey Veng", "Pursat", "Ratanakiri", "Siem Reap", "Stung Treng",
  "Svay Rieng", "Takeo", "Tboung Khmum",
];

type FormState = {
  nameEn: string;
  nameKh: string;
  dob: string;
  gender: string;
  grade: string;
  category: string;
  schoolEn: string;
  schoolKh: string;
  schoolType: string;
  province: string;
  telegram: string;
  telegramUser: string;
  guardianPhone: string;
  email: string;
  feeWaiver: string;
  fbName: string;
  fbLink: string;
  paymentMethod: string;
  paymentAccount: string;
  transactionNote: string;
  referral: string;
  partnerName: string;
  feeWaiverConfirm: boolean;
  agreeCorrect: boolean;
  agreeIndependent: boolean;
  agreeLanguage: boolean;
  agreeSample: boolean;
  agreeUpdates: boolean;
};

const PAYMENT_QR_IMAGE =
  "/images/competitions/e-solver/e-solver-payment-qr.jpg";

const PAYMENT_BANK_ACCOUNT = "018 122 353";

const initial: FormState = {
  nameEn: "", nameKh: "", dob: "", gender: "", grade: "", category: "",
  schoolEn: "", schoolKh: "", schoolType: "", province: "",
  telegram: "", telegramUser: "", guardianPhone: "", email: "",
  feeWaiver: "", fbName: "", fbLink: "",
  paymentMethod: "", paymentAccount: "", transactionNote: "",
  referral: "", partnerName: "",
  feeWaiverConfirm: false,
  agreeCorrect: false, agreeIndependent: false, agreeLanguage: false,
  agreeSample: false, agreeUpdates: false,
};

function genId() {
  const ts = Date.now().toString(36).toUpperCase();
  const r = Math.floor(1000 + Math.random() * 9000);
  return `ESC2-${ts}-${r}`;
}

async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve((reader.result as string).split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/* ─── Shared UI ─── */

function SectionCard({
  title, titleKh, children, accent,
}: {
  title: string; titleKh: string; children: ReactNode; accent?: string;
}) {
  return (
    <div className="mb-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className={`h-1.5 ${accent || "bg-gradient-to-r from-emerald-500 to-teal-500"}`} />
      <div className="p-6 md:p-8">
        <h2 className="text-xl font-bold text-slate-900">{title}</h2>
        <p className="mb-6 text-sm text-emerald-700">{titleKh}</p>
        {children}
      </div>
    </div>
  );
}

function Field({
  label, labelKh, helper, helperKh, required, children,
}: {
  label: string; labelKh?: string; helper?: string; helperKh?: string;
  required?: boolean; children: ReactNode;
}) {
  return (
    <div className="mb-5">
      <label className="mb-1 block text-sm font-semibold text-slate-800">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
      {labelKh && (
        <p className="mb-1.5 text-xs text-emerald-700">{labelKh}</p>
      )}
      {children}
      {helper && (
        <p className="mt-1 text-xs text-slate-500">{helper}</p>
      )}
      {helperKh && (
        <p className="text-xs text-emerald-600">{helperKh}</p>
      )}
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200";

const selectClass = inputClass + " appearance-none";

const radioClass =
  "mr-2 h-4 w-4 accent-emerald-600";

/* ─── Main Page ─── */

export default function RegisterPage() {
  const [form, setForm] = useState<FormState>(initial);
  const [fbScreenshot, setFbScreenshot] = useState<File | null>(null);
  const [paymentProof, setPaymentProof] = useState<File | null>(null);
  const [fbPreview, setFbPreview] = useState("");
  const [payPreview, setPayPreview] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [regId, setRegId] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const topRef = useRef<HTMLDivElement>(null);

  function update(key: keyof FormState, val: string | boolean) {
    setForm((prev) => ({ ...prev, [key]: val }));
  }

  function handleFile(
    e: ChangeEvent<HTMLInputElement>,
    setter: (f: File | null) => void,
    previewSetter: (s: string) => void
  ) {
    const file = e.target.files?.[0] || null;
    if (file && file.size > 5 * 1024 * 1024) {
      alert("File must be under 5 MB.");
      return;
    }
    if (
      file &&
      !["image/png", "image/jpeg", "image/jpg", "application/pdf"].includes(
        file.type
      )
    ) {
      alert("Only PNG, JPG, JPEG, or PDF files are accepted.");
      return;
    }
    setter(file);
    if (file && file.type.startsWith("image/")) {
      const url = URL.createObjectURL(file);
      previewSetter(url);
    } else {
      previewSetter(file ? file.name : "");
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // Validation
    const requiredText: (keyof FormState)[] = [
      "nameEn", "nameKh", "dob", "gender", "grade", "category",
      "schoolEn", "schoolType", "province", "telegram", "guardianPhone",
      "feeWaiver",
    ];
    for (const k of requiredText) {
      if (!form[k]) {
        setErrorMsg(`Please fill in all required fields. Missing: ${k}`);
        setStatus("error");
        topRef.current?.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    if (form.feeWaiver === "yes" && !fbScreenshot) {
      setErrorMsg("Please upload your Facebook post screenshot.");
      setStatus("error");
      return;
    }
    if (form.feeWaiver === "no" && !paymentProof) {
      setErrorMsg("Please upload your payment proof.");
      setStatus("error");
      return;
    }
    if (
      !form.agreeCorrect || !form.agreeIndependent || !form.agreeLanguage ||
      !form.agreeSample || !form.agreeUpdates
    ) {
      setErrorMsg("Please agree to all terms before submitting.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const id = genId();
      const payload: Record<string, string> = {
        registrationId: id,
        ...Object.fromEntries(
          Object.entries(form).map(([k, v]) => [k, String(v)])
        ),
      };

      if (fbScreenshot) {
        payload.fbScreenshotBase64 = await fileToBase64(fbScreenshot);
        payload.fbScreenshotName = fbScreenshot.name;
        payload.fbScreenshotType = fbScreenshot.type;
      }
      if (paymentProof) {
        payload.paymentProofBase64 = await fileToBase64(paymentProof);
        payload.paymentProofName = paymentProof.name;
        payload.paymentProofType = paymentProof.type;
      }

      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        setRegId(id);
        setStatus("success");
        topRef.current?.scrollIntoView({ behavior: "smooth" });
      } else {
        throw new Error(data.error || "Submission failed.");
      }
    } catch (err: unknown) {
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
      setStatus("error");
    }
  }

  /* ─── Success Screen ─── */
  if (status === "success") {
    return (
      <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="mx-auto max-w-2xl px-4 py-20 text-center" ref={topRef}>
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
            <svg className="h-10 w-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl font-black text-slate-900">
            Thank You for Registering!
          </h1>

          <p className="mt-2 text-lg text-slate-600">
            Your registration for E-Solver Cambodia 2.0 has been received.
          </p>

          <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <p className="text-sm font-semibold text-emerald-800">
              Your Registration ID
            </p>
            <p className="mt-1 text-2xl font-black tracking-wide text-emerald-900">
              {regId}
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Please save this ID. Our team will verify your information and
              contact you through Telegram.
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="/competitions/e-solver-cambodia"
              className="rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-emerald-700"
            >
              Back to E-Solver Cambodia
            </a>
            <a
              href="https://t.me/esolvercambodiatalk"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-emerald-300 bg-white px-6 py-2.5 text-sm font-bold text-emerald-700 transition hover:bg-emerald-50"
            >
              Join Telegram Updates
            </a>
          </div>
        </div>
      </main>
    );
  }

  /* ─── Form ─── */
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50 text-slate-900">
      {/* Floating background symbols — very low opacity */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden" aria-hidden="true">
        {[
          { text: "x\u00B2", x: "8%", y: "12%", size: "text-5xl" },
          { text: "H\u2082O", x: "85%", y: "8%", size: "text-4xl" },
          { text: "F=ma", x: "78%", y: "35%", size: "text-3xl" },
          { text: "\u03C0", x: "5%", y: "40%", size: "text-6xl" },
          { text: "0101", x: "90%", y: "55%", size: "text-3xl" },
          { text: "\u2211", x: "12%", y: "65%", size: "text-5xl" },
          { text: "\u0394", x: "82%", y: "78%", size: "text-4xl" },
          { text: "\u221A", x: "6%", y: "85%", size: "text-5xl" },
          { text: "\u222B", x: "50%", y: "5%", size: "text-4xl" },
          { text: "\u2227", x: "45%", y: "90%", size: "text-3xl" },
        ].map((s, i) => (
          <span
            key={i}
            className={`absolute font-black ${s.size}`}
            style={{
              left: s.x,
              top: s.y,
              opacity: 0.04,
              color: "#059669",
              transform: `rotate(${(i * 23) % 360}deg)`,
            }}
          >
            {s.text}
          </span>
        ))}
      </div>

      <div className="relative z-10" ref={topRef}>
        {/* Navigation */}
        <div className="mx-auto max-w-4xl px-4 pt-6">
          <div className="flex flex-wrap gap-2">
            <a
              href="/competitions/e-solver-cambodia"
              className="rounded-full bg-emerald-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-emerald-700"
            >
              &larr; Back to E-Solver Cambodia
            </a>
            <a
              href="/"
              className="rounded-full border border-emerald-300 bg-white px-4 py-2 text-xs font-bold text-emerald-700 transition hover:bg-emerald-50"
            >
              Back to Home
            </a>
          </div>
        </div>

        {/* Banner */}
        {/* Banner */}
            <div className="mx-auto mt-4 max-w-4xl px-4">
            <div
                className="aspect-[21/7] overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-cover bg-center shadow-lg"
                style={{ backgroundImage: `url(${BANNER_IMAGE})` }}
            >
                <div className="h-full bg-gradient-to-t from-emerald-950/20 to-transparent" />
            </div>
            </div>

        {/* Form Container */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-4xl px-4 py-8"
        >
          {/* Intro Card */}
          <div className="mb-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400" />
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-black text-slate-900">
                E-Solver Cambodia 2.0 Registration
              </h2>
              <p className="mt-1 text-sm font-semibold text-emerald-700">
                Cambodia&apos;s Applied Thinking Competition in Mathematics,
                Science, Technology, and Logic
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Join E-Solver Cambodia 2.0 and challenge yourself through a
                modern applied-thinking competition. Students will solve
                problems in Mathematics Reasoning, Science Reasoning,
                Technology and Computational Thinking, and Logic and Analytical
                Thinking. The exam will be available in both Khmer and English,
                and sample test papers will be provided before the competition.
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                ចូលរួមក្នុងកម្មវិធី E-Solver Cambodia 2.0 ហើយល្បងសមត្ថភាពរបស់អ្នកតាមរយៈការប្រកួតបែបការគិតវិភាគនិងអនុវត្តសម័យថ្មី។ សិស្សនឹងដោះស្រាយចំណោទក្នុងផ្នែក៤ដូចជា ការគិតហេតុផលគណិតវិទ្យា, ការគិតហេតុផលវិទ្យាសាស្ត្រ, បច្ចេកវិទ្យា, និង តក្កវិជ្ជានិងការគិតវិភាគ។ វិញ្ញាសាប្រឡងនឹងមានជាភាសាខ្មែរ និងភាសាអង់គ្លេស ហើយគំរូវិញ្ញាសាប្រឡងនឹងត្រូវបានផ្តល់ជូនមុនថ្ងៃប្រកួត។
                </p>
              <div className="mt-4 rounded-xl bg-amber-50 p-4">
                <p className="text-sm font-semibold text-amber-900">
                  Important: Students must register according to their current
                  grade level.
                </p>
                <p className="text-xs text-amber-700">
                  បេក្ខជនត្រូវចុះឈ្មោះតាមកម្រិតថ្នាក់នាពេលបច្ចុប្បន្ន។
                </p>
              </div>
            </div>
          </div>

          {/* Error */}
          {status === "error" && errorMsg && (
            <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-4">
              <p className="text-sm font-semibold text-red-800">{errorMsg}</p>
            </div>
          )}

          {/* ═══ Section 1: Participant Info ═══ */}
          <SectionCard
            title="Participant Information"
            titleKh="ព័ត៌មានរបស់បេក្ខជន"
          >
            <Field
              label="Full Name in English (Family Name - Given Name)"
              labelKh="ឈ្មោះពេញជាភាសាអង់គ្លេស គោត្តនាម - នាម"
              required
            >
              <input
                type="text"
                className={inputClass}
                value={form.nameEn}
                onChange={(e) => update("nameEn", e.target.value)}
                placeholder="Issac Newton"
              />
            </Field>

            <Field
              label="Full Name in Khmer"
              labelKh="ឈ្មោះពេញជាភាសាខ្មែរ"
              required
            >
              <input
                type="text"
                className={inputClass}
                value={form.nameKh}
                onChange={(e) => update("nameKh", e.target.value)}
              />
            </Field>

            <div className="grid gap-4 md:grid-cols-2">
              <Field
                label="Date of Birth"
                labelKh="ថ្ងៃ ខែ ឆ្នាំកំណើត"
                required
              >
                <input
                  type="date"
                  className={inputClass}
                  value={form.dob}
                  onChange={(e) => update("dob", e.target.value)}
                />
              </Field>

              <Field label="Gender" labelKh="ភេទ" required>
                <select
                  className={selectClass}
                  value={form.gender}
                  onChange={(e) => update("gender", e.target.value)}
                >
                  <option value="">Select / ជ្រើសរើស</option>
                  <option value="Male">Male / ប្រុស</option>
                  <option value="Female">Female / ស្រី</option>
                  <option value="Prefer not to say">Prefer not to say / មិនចង់បញ្ជាក់</option>
                </select>
              </Field>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Current Grade" labelKh="កម្រិតថ្នាក់បច្ចុប្បន្ន" required>
                <select
                  className={selectClass}
                  value={form.grade}
                  onChange={(e) => update("grade", e.target.value)}
                >
                  <option value="">Select / ជ្រើសរើស</option>
                  {[7, 8, 9, 10, 11, 12].map((g) => (
                    <option key={g} value={`Grade ${g}`}>
                      Grade {g}
                    </option>
                  ))}
                </select>
              </Field>

              <Field
                label="Competition Category"
                labelKh="កម្រិតប្រឡង"
                required
                helper="Please choose the category based on your current grade"
                helperKh="សូមជ្រើសរើសកម្រិតប្រឡងតាមថ្នាក់បច្ចុប្បន្នរបស់អ្នក"
              >
                <select
                  className={selectClass}
                  value={form.category}
                  onChange={(e) => update("category", e.target.value)}
                >
                  <option value="">Select / ជ្រើសរើស</option>
                  <option value="Category I">Category I — Grade 7 &amp; 8</option>
                  <option value="Category II">Category II — Grade 9 &amp; 10</option>
                  <option value="Category III">Category III — Grade 11 &amp; 12</option>
                </select>
              </Field>
            </div>
          </SectionCard>

          {/* ═══ Section 2: School Info ═══ */}
          <SectionCard
            title="School Information"
            titleKh="ព័ត៌មានសាលារៀន"
          >
            <Field
              label="School Name in English"
              labelKh="ឈ្មោះសាលារៀនជាភាសាអង់គ្លេស"
              required
            >
              <input
                type="text"
                className={inputClass}
                value={form.schoolEn}
                onChange={(e) => update("schoolEn", e.target.value)}
              />
            </Field>

            <Field
              label="School Name in Khmer"
              labelKh="ឈ្មោះសាលារៀនជាភាសាខ្មែរ"
            >
              <input
                type="text"
                className={inputClass}
                value={form.schoolKh}
                onChange={(e) => update("schoolKh", e.target.value)}
              />
            </Field>

            <Field
              label="Type of School"
              labelKh="តើអ្នកមកពីសាលារដ្ឋឬឯកជន"
              required
            >
              <div className="grid gap-2 sm:grid-cols-2">
                {[
                  ["Public school", "សាលារដ្ឋ"],
                  ["Private school", "សាលាឯកជន"],
                ].map(([val, kh]) => (
                  <label
                    key={val}
                    className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 text-sm transition ${
                      form.schoolType === val
                        ? "border-emerald-500 bg-emerald-50"
                        : "border-slate-200 bg-white hover:border-emerald-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="schoolType"
                      className={radioClass}
                      checked={form.schoolType === val}
                      onChange={() => update("schoolType", val)}
                    />
                    <span>
                      {val} <span className="text-xs text-emerald-700">/ {kh}</span>
                    </span>
                  </label>
                ))}
              </div>
            </Field>

            <Field
              label="Province or City"
              labelKh="តើអ្នកមកពីខេត្ត ឬ រាជធានីណានៃប្រទេសកម្ពុជា"
              required
            >
              <select
                className={selectClass}
                value={form.province}
                onChange={(e) => update("province", e.target.value)}
              >
                <option value="">Select province / ជ្រើសរើសខេត្ត</option>
                {provinces.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </Field>
          </SectionCard>

          {/* ═══ Section 3: Contact Info ═══ */}
          <SectionCard
            title="Contact Information"
            titleKh="ព័ត៌មានទំនាក់ទំនង"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <Field
                label="Telegram Number"
                labelKh="លេខតេលេក្រាម"
                required
                helper="Include country code, for example 855 12 345 678"
                helperKh="សូមបញ្ចូលលេខកូដប្រទេស ឧទាហរណ៍ 855 12 345 678"
              >
                <input
                  type="tel"
                  className={inputClass}
                  value={form.telegram}
                  onChange={(e) => update("telegram", e.target.value)}
                  placeholder="855 12 345 678"
                />
              </Field>

              <Field
                label="Telegram Username"
                labelKh="ឈ្មោះប្រើប្រាស់តេលេក្រាម"
              >
                <input
                  type="text"
                  className={inputClass}
                  value={form.telegramUser}
                  onChange={(e) => update("telegramUser", e.target.value)}
                  placeholder="@username"
                />
              </Field>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Field
                label="Parent or Guardian Phone"
                labelKh="លេខទូរស័ព្ទអាណាព្យាបាល"
                required
              >
                <input
                  type="tel"
                  className={inputClass}
                  value={form.guardianPhone}
                  onChange={(e) => update("guardianPhone", e.target.value)}
                />
              </Field>

              <Field label="Email Address" labelKh="អ៊ីមែល(មិនចាំបាច់)">
                <input
                  type="email"
                  className={inputClass}
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="optional"
                />
              </Field>
            </div>
          </SectionCard>

          {/* ═══ Section 4: Fee Waiver / Payment ═══ */}
          <SectionCard
            title="Registration Fee"
            titleKh="ផ្នែកនៃថ្លៃចុះឈ្មោះ"
            accent="bg-gradient-to-r from-emerald-400 to-yellow-400"
          >
            <div className="mb-5 rounded-xl bg-gradient-to-r from-emerald-50 to-yellow-50 p-4">
              <p className="text-sm font-semibold text-emerald-900">
                Free Registration Opportunity
              </p>
              <p className="mt-1 text-sm text-slate-700">
                Students who share the official E-Solver Cambodia Facebook
                registration post and mention/tag 5 friends may receive a
                waived registration fee for the first round.
              </p>
            </div>

            <Field
              label="Have you shared the official post and mentioned 5 friends?"
              labelKh="តើអ្នកបានចែករំលែកផុស Facebook ផ្លូវការរបស់ E-Solver Cambodia និង mention មិត្តភក្តិ ៥ នាក់រួចហើយឬនៅ"
              required
            >
              <div className="grid gap-2 sm:grid-cols-2">
                <label
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 text-sm transition ${
                    form.feeWaiver === "yes"
                      ? "border-emerald-500 bg-emerald-50"
                      : "border-slate-200 bg-white hover:border-emerald-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="feeWaiver"
                    className={radioClass}
                    checked={form.feeWaiver === "yes"}
                    onChange={() => update("feeWaiver", "yes")}
                  />
                  Yes, I shared and mentioned 5 friends
                </label>
                <label
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 text-sm transition ${
                    form.feeWaiver === "no"
                      ? "border-emerald-500 bg-emerald-50"
                      : "border-slate-200 bg-white hover:border-emerald-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="feeWaiver"
                    className={radioClass}
                    checked={form.feeWaiver === "no"}
                    onChange={() => update("feeWaiver", "no")}
                  />
                  No, I will pay the registration fee
                </label>
              </div>
            </Field>

            {/* Conditional: Fee waiver proof */}
            {form.feeWaiver === "yes" && (
              <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50/50 p-5">
                <p className="mb-4 text-sm font-semibold text-emerald-800">
                  Fee Waiver Verification
                </p>

                <Field label="Facebook Profile Name" required>
                  <input
                    type="text"
                    className={inputClass}
                    value={form.fbName}
                    onChange={(e) => update("fbName", e.target.value)}
                  />
                </Field>

                <Field label="Facebook Post Screenshot" required>
                  <input
                    type="file"
                    accept=".png,.jpg,.jpeg,.pdf"
                    onChange={(e) => handleFile(e, setFbScreenshot, setFbPreview)}
                    className="block w-full text-sm text-slate-600 file:mr-3 file:rounded-full file:border-0 file:bg-emerald-100 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-emerald-700 hover:file:bg-emerald-200"
                  />
                  {fbPreview && fbPreview.startsWith("blob:") && (
                    <img src={fbPreview} alt="Preview" className="mt-2 h-24 rounded-lg object-cover" />
                  )}
                </Field>

                <Field label="Link to Shared Facebook Post (optional)">
                  <input
                    type="url"
                    className={inputClass}
                    value={form.fbLink}
                    onChange={(e) => update("fbLink", e.target.value)}
                    placeholder="https://facebook.com/..."
                  />
                </Field>

                <label className="mt-2 flex items-start gap-2 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    className="mt-1 accent-emerald-600"
                    checked={form.feeWaiverConfirm}
                    onChange={(e) => update("feeWaiverConfirm", e.target.checked)}
                  />
                  I understand that SOMA Education Group will verify my shared
                  post before approving the fee waiver.
                </label>
              </div>
            )}

            {/* Conditional: Payment */}
            {form.feeWaiver === "no" && (
              <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50/50 p-5">
                <p className="mb-4 text-sm font-semibold text-blue-800">
                  Payment Information — Registration fee: $4
                </p>

                {/* Payment QR + Account Info */}
                <div className="mb-6 rounded-2xl border border-blue-180 bg-white p-4 shadow-sm">
                  <div className="grid gap-5 md:grid-cols-[180px_1fr] md:items-center">
                    <div className="mx-auto w-45">
                      <img
                        src={PAYMENT_QR_IMAGE}
                        alt="E-Solver Cambodia payment QR code"
                        className="aspect-square w-full rounded-xl border border-slate-200 bg-white object-cover p-2 shadow-sm"
                      />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        Scan QR Code to Pay
                      </p>
                      <p className="mt-1 text-xs text-emerald-700">
                        សូមស្កេន QR Code ដើម្បីបង់ថ្លៃចុះឈ្មោះ
                      </p>

                      <div className="mt-4 rounded-xl bg-blue-50 p-4">
                        <p className="text-sm text-slate-700">
                          Registration Fee
                        </p>
                        <p className="text-lg font-black text-blue-800">
                          $4
                        </p>

                        <p className="mt-3 text-sm text-slate-700">
                          Bank Account
                        </p>
                        <p className="text-lg font-black tracking-wide text-slate-900">
                          {PAYMENT_BANK_ACCOUNT}
                        </p>
                      </div>

                      <p className="mt-3 text-xs text-slate-500">
                        After payment, please upload your payment proof below. If you have any problem, please contact us through telegram.
                      </p>
                      <p className="text-xs text-emerald-700">
                        បន្ទាប់ពីបង់ប្រាក់ សូមបញ្ចូលរូបភាពបញ្ជាក់ការបង់ប្រាក់ខាងក្រោម។ បើមានបញ្ហាកើតទ្បើង​សូមទាក់ទងមកពួកយើងតាមតេលេក្រាម។
                      </p>
                    </div>
                  </div>
                </div>

                <Field label="Payment Method" required>
                  <select
                    className={selectClass}
                    value={form.paymentMethod}
                    onChange={(e) => update("paymentMethod", e.target.value)}
                  >
                    <option value="">Select payment method</option>
                    <option value="ABA">ABA</option>
                    <option value="ACLEDA">ACLEDA</option>
                    <option value="Wing">Wing</option>
                    <option value="Other">Other</option>
                  </select>
                </Field>

                <Field label="Upload Payment Proof" required>
                  <input
                    type="file"
                    accept=".png,.jpg,.jpeg,.pdf"
                    onChange={(e) => handleFile(e, setPaymentProof, setPayPreview)}
                    className="block w-full text-sm text-slate-600 file:mr-3 file:rounded-full file:border-0 file:bg-blue-100 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-200"
                  />
                  <p className="mt-1 text-xs text-slate-500">
                    PNG, JPG, JPEG, or PDF. Maximum 5 MB.
                  </p>
                  {payPreview && payPreview.startsWith("blob:") && (
                    <img
                      src={payPreview}
                      alt="Preview"
                      className="mt-2 h-24 rounded-lg object-cover"
                    />
                  )}
                </Field>

                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Payment Account Name (optional)">
                    <input
                      type="text"
                      className={inputClass}
                      value={form.paymentAccount}
                      onChange={(e) => update("paymentAccount", e.target.value)}
                    />
                  </Field>

                  <Field label="Transaction Note (optional)">
                    <input
                      type="text"
                      className={inputClass}
                      value={form.transactionNote}
                      onChange={(e) => update("transactionNote", e.target.value)}
                    />
                  </Field>
                </div>
              </div>
            )}
          </SectionCard>

          {/* ═══ Section 5: Referral ═══ */}
          <SectionCard
            title="How Did You Hear About Us?"
            titleKh="តើអ្នកបានស្គាល់ E-Solver Cambodia 2.0 តាមរយៈអ្វី?"
          >
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Facebook", "Telegram", "School teacher", "Friend",
                "SOMA Education Group", "Newton Learning Center",
                "Partner competition", "Other",
              ].map((opt) => (
                <label
                  key={opt}
                  className={`flex cursor-pointer items-center gap-2 rounded-xl border p-3 text-sm transition ${
                    form.referral === opt
                      ? "border-emerald-500 bg-emerald-50"
                      : "border-slate-200 bg-white hover:border-emerald-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="referral"
                    className={radioClass}
                    checked={form.referral === opt}
                    onChange={() => update("referral", opt)}
                  />
                  {opt}
                </label>
              ))}
            </div>

            {form.referral === "Partner competition" && (
              <div className="mt-4">
                <Field label="Partner competition or organization name">
                  <input type="text" className={inputClass} value={form.partnerName} onChange={(e) => update("partnerName", e.target.value)} />
                </Field>
              </div>
            )}
          </SectionCard>

          {/* ═══ Section 6: Agreement ═══ */}
          <SectionCard
            title="Agreement"
            titleKh="ការយល់ព្រម"
          >
            <div className="space-y-3">
              {[
                { key: "agreeCorrect" as const, text: "I confirm that all information I provided is correct." },
                { key: "agreeIndependent" as const, text: "I understand that I must take the exam independently." },
                { key: "agreeLanguage" as const, text: "I understand that the exam will be available in both Khmer and English." },
                { key: "agreeSample" as const, text: "I understand that sample test papers will be provided before the competition." },
                { key: "agreeUpdates" as const, text: "I agree to receive competition updates through Telegram or phone." },
              ].map(({ key, text }) => (
                <label
                  key={key}
                  className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 text-sm transition ${
                    form[key]
                      ? "border-emerald-500 bg-emerald-50"
                      : "border-slate-200 bg-white hover:border-emerald-300"
                  }`}
                >
                  <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 accent-emerald-600"
                    checked={form[key] as boolean}
                    onChange={(e) => update(key, e.target.checked)}
                  />
                  <span className="text-slate-700">{text}</span>
                </label>
              ))}
            </div>
          </SectionCard>

          {/* Submit */}
          <div className="mb-6 text-center">
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-10 py-3.5 text-base font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? (
                <>
                  <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                  Submitting...
                </>
              ) : (
                "Submit Registration"
              )}
            </button>
            <p className="mt-2 text-xs text-slate-500">
              សូមពិនិត្យព័ត៌មានរបស់អ្នកមុនចុច Submit
            </p>
          </div>

          {/* QR Code + Share Section */}
          <div className="mb-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500" />
            <div className="flex flex-col items-center gap-6 p-6 md:flex-row md:p-8">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg font-bold text-slate-900">
                  Share This Registration
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Share this registration page with your friends and classmates.
                  Scan the QR code or copy the link below.
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value={REGISTRATION_PAGE_URL}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600"
                    onFocus={(e) => e.target.select()}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(REGISTRATION_PAGE_URL);
                    }}
                    className="shrink-0 rounded-lg bg-emerald-100 px-3 py-2 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-200"
                  >
                    Copy
                  </button>
                </div>
              </div>

              <div className="shrink-0">
                <img
                  src={`${QR_API}${encodeURIComponent(REGISTRATION_PAGE_URL)}`}
                  alt="Registration QR Code"
                  width={140}
                  height={140}
                  className="rounded-xl border border-slate-200 bg-white p-2"
                />
                <p className="mt-1 text-center text-xs text-slate-500">
                  Scan to register
                </p>
              </div>
            </div>
          </div>
        </form>

        {/* Footer */}
        <footer className="bg-emerald-950 px-4 py-6 text-center text-sm text-emerald-200">
          <p className="font-bold text-white">E-Solver Cambodia 2.0</p>
          <p className="mt-1">
            Organized under SOMA Education Group
          </p>
          <p className="mt-1 text-xs text-emerald-400">
            &copy; 2021-2026 E-Solver Cambodia. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}