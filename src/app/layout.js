
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// import Footer from "@/components/footer/FooterComp";
// import Header from "@/components/header/HeaderComp";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   metadataBase: new URL('https://theprocurementplug.com'),
//   title: {
//     default: 'The Procurement Plug',
//     template: '%s | The Procurement Plug',
//   },
//   description: 'Your go-to hub for procurement insights, events, and resources.',
//   openGraph: {
//     siteName: 'The Procurement Plug',
//     type: 'website',
//   },
//   twitter: {
//     card: 'summary_large_image',
//   },
// };


// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased px-6 sm:px-10 md:px-14 lg:px-20`}
//       >
//         <Header />
//         <main className="flex flex-col pb-20 gap-20 md:gap-28 mt-20 md:mt-28">
//           {children}
//         </main>
//         <Footer />
//       </body>
//     </html>
//   );
// }


import { Geist, Geist_Mono } from "next/font/google";
import { Bodoni_Moda } from 'next/font/google';
import "./globals.css";
import Script from "next/script";
import { Suspense } from "react"; // ✅ Add this

import Footer from "@/components/footer/FooterComp";
import Header from "@/components/header/HeaderComp";
import Analytics from "@/components/Analytics"; // Import Analytics component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const bodoniModa = Bodoni_Moda({
  variable: '--font-bodoni-moda',  // Set your custom CSS variable
  weight: ['400', '700'],          // Specify the weights you want to load
  subsets: ['latin'],              // Include the necessary character subsets
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
        {/* Google Analytics Scripts */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-44BSCR2MJ6`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-44BSCR2MJ6', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        <Header />

        {/* ✅ Wrap Analytics in Suspense to fix static build */}
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>

        <main className="flex flex-col pb-20 gap-20 md:gap-28 mt-20 md:mt-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
