import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { env } from "process";

const roboto = Roboto({
  preload: true,
  adjustFontFallback: true,
  fallback: ["Helvetica", "sans-serif"],
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Tibah",
  description:
    "Tibah is the leading HVAC ducting products manufacturer in the Canada. We specialize in manufacturing insulated ducts and other accessories.",
  themeColor: "#3E67E3",
  colorScheme: "light",
  icons: "/favicon.ico",
  twitter: {
    images: ["/Logo-Tibah-HighRes-Logo.png"],
    card: "summary",
    title: "Tibah",
    description:
      "Tibah is the leading HVAC ducting products manufacturer in the Canada. We specialize in manufacturing insulated ducts and other accessories.",
  },
  openGraph: {
    images: ["/Logo-Tibah-HighRes-Logo.png"],
    type: "website",
    locale: "en_US",
    title: "Tibah",
    description:
      "Tibah is the leading HVAC ducting products manufacturer in the Canada. We specialize in manufacturing insulated ducts and other accessories.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
