import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Subset of Material Symbols Outlined containing only the icons the site uses.
const materialSymbols = localFont({
  src: "../assets/fonts/material-symbols.woff2",
  display: "block",
  variable: "--font-material-symbols",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"),
  title: {
    default: "MB Trade Supplies Ltd | UK Wholesale Drinks, Cooking Oils & Flour",
    template: "%s | MB Trade Supplies Ltd",
  },
  description:
    "UK B2B wholesale supplier of drinks, commercial cooking oils and bakery flour. Pallet supply, trade pricing and credit terms from Stoke-on-Trent.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${materialSymbols.variable}`}>
      <body className="bg-surface text-on-surface antialiased">
        <Header />
        <main className="w-full bg-surface">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
