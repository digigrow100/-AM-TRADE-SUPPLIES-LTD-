import type { Metadata } from "next";
import logo from "@/assets/images/logo.webp";
import og from "@/assets/images/og-image.jpg";
import { site, siteUrl } from "@/lib/site";

const ogAlt = `${site.name} - wholesale food and drink supplier in ${site.locality}`;

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_GB",
      title,
      description,
      url: path,
      images: [{ url: og.src, width: og.width, height: og.height, alt: ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: og.src, alt: ogAlt }],
    },
  };
}

const abs = (path: string) => `${siteUrl}${path === "/" ? "" : path}`;

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#organization`,
  name: site.name,
  url: siteUrl,
  logo: `${siteUrl}${logo.src}`,
  image: `${siteUrl}${og.src}`,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.locality,
    addressCountry: site.country,
  },
  ...(site.phone ? { telephone: site.phone } : {}),
  ...(site.email ? { email: site.email } : {}),
};

export function webPageLd(
  type: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage",
  { name, description, path }: { name: string; description: string; path: string },
  extra: Record<string, unknown> = {},
) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${abs(path)}#webpage`,
    url: abs(path),
    name,
    description,
    inLanguage: "en-GB",
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#organization` },
    ...extra,
  };
}

export const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: site.name,
  inLanguage: "en-GB",
  publisher: { "@id": `${siteUrl}/#organization` },
};

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

export function faqLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

export function itemListLd(names: string[]) {
  return {
    "@type": "ItemList",
    itemListElement: names.map((name, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
    })),
  };
}
