export const site = {
  name: "MB Trade Supplies Ltd",
  shortName: "MB Trade Supplies",
  address: "Unit 3, Garfield Works, Uttoxeter Road, ST3 1PF",
  phone: "01782 123 456",
  phoneHref: "tel:01782123456",
  email: "sales@mbtradesupplies.com",
  hours: "Mon - Fri: 8:00 AM - 5:30 PM",
  companyReg: "14298102",
  vat: "GB 412 8931 04",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products & Services", href: "/products-services" },
  { label: "Why Trade With Us", href: "/#why-trade-with-us" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const footerQuickLinks = [
  { label: "Services", href: "/products-services" },
  { label: "Wholesale Drinks", href: "/products-services#drinks" },
  { label: "Wholesale Cooking Oils", href: "/products-services#oils" },
  { label: "Wholesale Flour", href: "/products-services#flour" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const footerComplianceLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Shipping Info", href: "#" },
  { label: "Wholesale Portal", href: "/contact" },
] as const;
