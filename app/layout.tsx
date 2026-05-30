import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TaskFlow Agency | Premium Web Design & Development",
  description:
    "TaskFlow Agency builds premium modern websites, high-converting digital experiences, and scalable web solutions for ambitious brands.",

  keywords: [
    "Web Design",
    "Web Development",
    "UI/UX Design",
    "Next.js Agency",
    "Frontend Development",
    "Digital Agency",
    "TaskFlow",
    "Nigeria Web Developer",
    "Modern Websites",
  ],

  authors: [{ name: "Chiagozie Jude" }],

  creator: "Chiagozie Jude",

  metadataBase: new URL("https://your-domain.vercel.app"),

  openGraph: {
    title: "TaskFlow Agency",
    description:
      "Premium digital experiences for ambitious brands.",
    url: "https://your-domain.vercel.app",
    siteName: "TaskFlow Agency",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "TaskFlow Agency",
    description:
      "Premium websites and digital experiences for modern businesses.",
  },

  icons: {
  icon: "/favicon.png",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
