import type { Metadata } from "next";
import CatalogueHero from "@/components/services/CatalogueHero";
import CatalogueSection from "@/components/services/CatalogueSection";
import Container from "@/components/Container";
import Fulfilment from "@/components/services/Fulfilment";
import MetricStrip from "@/components/services/MetricStrip";
import QuickQuote from "@/components/services/QuickQuote";

export const metadata: Metadata = {
  title: "Products & Services",
  description:
    "Wholesale drinks, commercial cooking oils and bakery flour supplied by the pallet across the UK mainland with tiered trade pricing.",
};

export default function ProductsServicesPage() {
  return (
    <Container className="pt-space-md md:pt-space-lg">
      <CatalogueHero />
      <MetricStrip />
      <CatalogueSection />
      <Fulfilment />
      <QuickQuote />
    </Container>
  );
}
