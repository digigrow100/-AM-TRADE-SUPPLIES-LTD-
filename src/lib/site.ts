function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();

export const site = {
  name: "AM Trade Supplies Ltd",
  shortName: "AM Trade Supplies",
  locality: "Stoke-on-Trent",
  street: "Unit 60, Bucknall Old Road",
  postcode: "ST1 2AG",
  country: "GB",
  description:
    "AM Trade Supplies Ltd is a B2B wholesale food and drink supplier in Stoke-on-Trent, supplying soft drinks, bottled water, juices, cooking oils and flour to trade customers.",
  // Not yet confirmed. Set these when supplied and they appear automatically
  // in the header, footer, contact page and structured data.
  phone: undefined as string | undefined,
  email: undefined as string | undefined,
};

export const addressLine = `${site.street}, ${site.locality}, ${site.postcode}`;
export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressLine + ", UK")}`;

export const phoneHref = site.phone
  ? `tel:${site.phone.replace(/\s+/g, "")}`
  : undefined;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const footerPageLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
] as const;
