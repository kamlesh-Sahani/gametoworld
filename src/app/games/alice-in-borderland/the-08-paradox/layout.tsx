import React from 'react'
import { Metadata } from 'next';
import the08ParadoxImg from "@/assets/the-08-paradox.png"
export const metadata: Metadata = {
  title: "The 0.8 Paradox | King of Diamonds Game - Alice in Borderland",
  description: "Play the deadly math challenge from Alice in Borderland. Guess 80% of the average number to survive the King of Diamonds game. Can you outsmart other players?",
  keywords: ["Alice in Borderland", "King of Diamonds", "0.8 Paradox", "math game", "survival game", "puzzle game"],
  
  openGraph: {
    title: "The 0.8 Paradox | King of Diamonds Game",
    description: "Experience the deadly math challenge from Alice in Borderland",
    url: the08ParadoxImg.src,
    siteName: "Borderland Games",
    images: [
      {
        url:  the08ParadoxImg.src,
        width: 1200,
        height: 630,
        alt: "King of Diamonds Game Challenge",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "The 0.8 Paradox | King of Diamonds Game",
    description: "Can you survive this Alice in Borderland math challenge?",
    images: [the08ParadoxImg.src],
  },

  alternates: {
    canonical:  the08ParadoxImg.src,
  },
  themeColor: "#111827",
  category: "games",
  appleWebApp: {
    capable: true,
    title: "King of Diamonds Game",
    statusBarStyle: "black-translucent",
  },
};
const Layout = ({children}:{children:React.ReactNode}) => {
  return (
   <>
   {children}
   </>
  )
}

export default Layout