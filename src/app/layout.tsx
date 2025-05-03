import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "gameToworld | Play Free Online Games",
    template: "%s | gameToworld"
  },
  description: "Play thousands of free online games including action, adventure, puzzle, and multiplayer games. No downloads required - instant play in your browser!",
  keywords: [
    "free online games",
    "browser games",
    "play games online",
    "no download games",
    "html5 games",
    "multiplayer games",
    "puzzle games",
    "action games"
  ],
  authors: [{ name: "gameToworld Team", url: "https://gameToworld.com" }],
  creator: "gameToworld",
  publisher: "gameToworld",
  metadataBase: new URL("https://gameToworld.com"),
  openGraph: {
    title: "gameToworld | Play Free Online Games",
    description: "Play thousands of free online games with no downloads required",
    url: "https://gameToworld.com",
    siteName: "gameToworld",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "gameToworld - Free Online Games",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "gameToworld | Play Free Online Games",
    description: "Play thousands of free online games with no downloads required",
    images: ["/twitter-image.jpg"],
    creator: "@gameToworld",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "games",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-white`}
      >
        <div className="flex flex-col justify-between w-full  bg-gradient-to-b from-gray-900 to-gray-950">
          <Navbar />
          <main className="flex-1 min-h-screen lg:w-[90%] xl:w-[80%]  m-auto">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: {
//     default: "gameToworld | Play Free Online Games",
//     template: "%s | gameToworld"
//   },
//   description: "Play thousands of free online games including action, adventure, puzzle, and multiplayer games. No downloads required - instant play in your browser!",
//   keywords: [
//     "free online games",
//     "browser games",
//     "play games online",
//     "no download games",
//     "html5 games",
//     "multiplayer games",
//     "puzzle games",
//     "action games"
//   ],
//   authors: [{ name: "gameToworld Team", url: "https://gameToworld.com" }],
//   creator: "gameToworld",
//   publisher: "gameToworld",
//   metadataBase: new URL("https://gameToworld.com"),
//   openGraph: {
//     title: "gameToworld | Play Free Online Games",
//     description: "Play thousands of free online games with no downloads required",
//     url: "https://gameToworld.com",
//     siteName: "gameToworld",
//     images: [
//       {
//         url: "/og-image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "gameToworld - Free Online Games",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "gameToworld | Play Free Online Games",
//     description: "Play thousands of free online games with no downloads required",
//     images: ["/twitter-image.jpg"],
//     creator: "@gameToworld",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon-16x16.png",
//     apple: "/apple-touch-icon.png",
//   },
//   manifest: "/site.webmanifest",
//   alternates: {
//     canonical: "/",
//   },
//   verification: {
//     google: "your-google-verification-code",
//   },
//   category: "games",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-white`}
//       >
//         <div className="flex flex-col justify-between w-full">
//           <Navbar />
         
//             {children}
          
//           <Footer />
//         </div>
//       </body>
//     </html>
//   );
// }