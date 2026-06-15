import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
  metadataBase: new URL("https://evergreensolutionsfl.com"),
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
        url: "/og-image.png",
        width: 1024,
        height: 558,
        alt: "Evergreen Solutions FL — Nature's Infinite Solutions",
      },
    ],
    url: "https://evergreensolutionsfl.com",
    siteName: "Evergreen Solutions FL",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evergreen Solutions FL",
    description: "Restoring Florida, One Landscape at a Time.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
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
        <main className="overflow-x-clip">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
