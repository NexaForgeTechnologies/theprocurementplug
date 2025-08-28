import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Roboto } from "next/font/google";
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({
  weight: ["400", "700"], // Choose weights you need
  subsets: ["latin"],
  variable: "--font-roboto", // This will be used in CSS
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Achiever Group",
  description: "Preparing Procurement Leaders for Enterprise and Boardroom Leadership",

  icons: {
    icon: "/logo-lg.png", // served from /public/favicon.ico
    shortcut: "/logo-lg.png",
    apple: "/logo-lg.png",
  },

  openGraph: {
    title: "The Achiever Group — CONNECT | LEAD | GROW | MEASURE",
    url: "https://xecplug.theprocurementplug.com/",
    siteName: "The Achiever Group",
    images: [
      {
        url: "https://xecplug.theprocurementplug.com/logo-lg.png",
        width: 1200,
        height: 630,
        alt: "The Achiever Group",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "The Achiever Group",
    description: "Preparing Procurement Leaders for Enterprise and Boardroom Leadership",
    images: ["https://xecplug.theprocurementplug.com/logo-lg.png"],
  },

  alternates: {
    canonical: "https://xecplug.theprocurementplug.com/",
    domains: [
      "https://xecplug.theprocurementplug.com/",
      "https://www.xecplug.theprocurementplug.com/",
    ],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased overflow-x-hidden`}
      >

        <Header />
        <main className="px-5 sm:px-10 md:px-18 lg:px-20 bg-black">
          {children}
        </main>
        <Toaster position="top-right" reverseOrder={false} toastOptions={{
          className: "!bg-slate-800 !text-white !rounded-2xl !p-4 !shadow-lg", duration: 10000
        }} />
        <Footer />

      </body>
    </html>
  );
}
