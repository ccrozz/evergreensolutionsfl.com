import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PHOTO_URLS } from "@/lib/constants";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Evergreen Solutions FL | Ecological Restoration Florida",
  description:
    "Leading ecological restoration, sustainable land management, and invasive species control to preserve Florida's unique ecosystems. Native solutions for a flourishing future.",
  keywords: [
    "ecological restoration Florida",
    "land management Florida",
    "native restoration",
    "habitat consulting",
    "invasive species management",
  ],
  openGraph: {
    title: "Evergreen Solutions FL — Restoring Florida, One Landscape at a Time",
    description:
      "Nature's Infinite Solutions — ecological restoration, land management, and habitat consulting across Florida.",
    images: [
      {
        url: PHOTO_URLS.hero.replace("w=1920&q=85", "w=1200&q=80"),
        width: 1200,
        height: 630,
        alt: "Native Florida wetland landscape with pond, ferns, and swamp forest",
      },
    ],
    url: "https://evergreensolsfl.com",
    siteName: "Evergreen Solutions FL",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evergreen Solutions FL",
    description: "Restoring Florida, One Landscape at a Time.",
  },
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
