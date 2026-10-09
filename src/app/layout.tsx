import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import { organizationLd, websiteLd } from "@/lib/seo";
import { site, siteUrl } from "@/lib/site";
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
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} | Wholesale Food & Drink Supplier`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${materialSymbols.variable}`}>
      <body className="bg-surface text-on-surface antialiased">
        <JsonLd data={organizationLd} />
        <JsonLd data={websiteLd} />
        <Header />
        <main className="w-full bg-surface">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
