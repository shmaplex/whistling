import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Whistling — Objects for Living Well",
    template: "%s — Whistling",
  },
  description:
    "Whistling creates considered objects for living, keeping, and passing the time well. Hand-crafted incense and one-of-a-kind goods made to be lived with.",
  applicationName: "Whistling",
  authors: [{ name: "Whistling" }],
  creator: "Whistling",
  publisher: "Whistling",

  keywords: [
    "Whistling",
    "considered living",
    "handcrafted incense",
    "design objects",
    "slow living",
    "editorial goods",
    "artisanal incense",
    "objects for the home",
    "Shmaplex",
  ],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://whistling.shmaplex.com", // adjust if needed
    siteName: "Whistling",
    title: "Whistling — Objects for Living, Keeping, and Passing the Time Well",
    description:
      "A quiet study in considered living. Hand-crafted incense and thoughtfully made objects designed to be lived with.",
    images: [
      {
        url: "/og/whistling-og.jpg", // prepare later
        width: 1200,
        height: 630,
        alt: "Whistling — Objects for living well",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Whistling — Objects for Living Well",
    description:
      "Considered objects for living, keeping, and passing the time well.",
    images: ["/og/whistling-og.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
