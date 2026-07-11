import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.somaeducationgroup.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "SOMA Education Group",
    template: "%s | SOMA Education Group",
  },

  description:
    "SOMA Education Group supports Cambodian students through STEM education, academic competitions, tutoring, consulting, charity, and student opportunities.",

  keywords: [
    "SOMA Education Group",
    "SOMA Cambodia",
    "Cambodian STEM Competition",
    "STEM Cambodia",
    "Newton Learning Center",
    "E-Solver Cambodia",
    "Cambodia Mathematics and Physics Competition",
    "SOMA Portal",
    "SOMA Tech School",
    "SOMA Education",
    "Narith Chan",
    "Beatrice Doran",
  ],

  authors: [{ name: "SOMA Education Group" }],

  creator: "SOMA Education Group",

  publisher: "SOMA Education Group",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "SOMA Education Group",
    description:
      "SOMA Education Group supports Cambodian students through STEM education, competitions, tutoring, consulting, charity, and student opportunities.",
    url: siteUrl,
    siteName: "SOMA Education Group",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "SOMA Education Group",
    description:
      "Supporting Cambodian students through STEM education, competitions, tutoring, consulting, charity, and opportunities.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}