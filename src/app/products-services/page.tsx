import type { Metadata } from "next";
import CatalogueHero from "@/components/services/CatalogueHero";
import CatalogueSection from "@/components/services/CatalogueSection";
import Container from "@/components/Container";
import Faq, { type FaqItem } from "@/components/Faq";
import Fulfilment from "@/components/services/Fulfilment";
import JsonLd from "@/components/JsonLd";
import MetricStrip from "@/components/services/MetricStrip";
import QuickQuote from "@/components/services/QuickQuote";
import { allProductLines } from "@/lib/products";
import { breadcrumbLd, itemListLd, pageMetadata, webPageLd } from "@/lib/seo";

const title = "Wholesale Drinks, Oils & Flour | AM Trade Supplies Ltd";
const description =
  "Wholesale soft drinks, bottled water, juices, rapeseed and vegetable oil, plain, pizza and self-raising flour for trade customers. Request a quote today.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/products-services",
});

const faqs: FaqItem[] = [
  {
    icon: "layers",
    q: "Which drinks do you supply?",
    a: "We supply soft drinks, bottled water and juices. Tell us which products your customers buy and we will confirm what we can supply.",
  },
  {
    icon: "local_fire_department",
    q: "Do you supply rapeseed oil and vegetable oil?",
    a: "Yes, both are part of our range. Let us know whether you use oil for frying, roasting or dressings and we will quote accordingly.",
  },
  {
    icon: "bakery_dining",
    q: "Which flours do you offer?",
    a: "We supply plain flour, pizza flour and self-raising flour. Mention your recipes in your enquiry and we will point you to the right option.",
  },
  {
    icon: "payments",
    q: "Can I see prices online?",
    a: "Prices depend on the product and the quantity, so we provide quotes on request rather than listing prices on the website.",
  },
  {
    icon: "production_quantity_limits",
    q: "Can I ask for several products in one quote?",
    a: "Yes. Add everything you need to one enquiry and we will quote the products together.",
  },
];

export default function ProductsServicesPage() {
  return (
    <Container className="pt-space-md md:pt-space-lg">
      <JsonLd
        data={webPageLd(
          "CollectionPage",
          { name: title, description, path: "/products-services" },
          { mainEntity: itemListLd([...allProductLines]) },
        )}
      />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Products & Services", path: "/products-services" },
        ])}
      />
      <CatalogueHero />
      <MetricStrip />
      <CatalogueSection />
      <Fulfilment />
      <Faq
        eyebrow="Product Questions"
        title="Wholesale Drinks, Oils and Flour: Your Questions Answered"
        intro="Answers to the questions trade customers ask us most about our range."
        items={faqs}
      />
      <QuickQuote />
    </Container>
  );
}
