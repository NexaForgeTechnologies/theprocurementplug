
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/components/footer/FooterComp";
import Header from "@/components/header/HeaderComp";
import { ToasterProvider } from "@/components/ToasterProvider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://theprocurementplug.com'),
  title: {
    default: 'The Procurement Plug',
    template: '%s | The Procurement Plug',
  },
  description: 'Your go-to hub for procurement insights, events, and resources.',
  openGraph: {
    siteName: 'The Procurement Plug',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased px-6 sm:px-10 md:px-14 lg:px-20`}
      >
        <ToasterProvider />
        <Header />
          
        <main className="flex flex-col pb-20 gap-10 md:gap-20 mt-20 md:mt-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
