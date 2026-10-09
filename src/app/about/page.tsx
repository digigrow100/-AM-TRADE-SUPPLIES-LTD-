import type { Metadata } from "next";
import AccountCta from "@/components/about/AccountCta";
import Banner from "@/components/about/Banner";
import Intro from "@/components/about/Intro";
import WhatWeSupply from "@/components/about/WhatWeSupply";
import WhoWeAre from "@/components/about/WhoWeAre";
import WhyChoose from "@/components/about/WhyChoose";
import Container from "@/components/Container";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd, pageMetadata, webPageLd } from "@/lib/seo";

const title = "About AM Trade Supplies Ltd | B2B Wholesale Supplier";
const description =
  "Learn about AM Trade Supplies Ltd, a B2B wholesale supplier in Stoke-on-Trent serving retailers, takeaways, cafés, bakeries and caterers with food and drink.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/about" });

export default function AboutPage() {
  return (
    <Container className="pt-space-md md:pt-space-lg">
      <JsonLd data={webPageLd("AboutPage", { name: title, description, path: "/about" })} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ])}
      />
      <Banner />
      <Intro />
      <WhoWeAre />
      <WhatWeSupply />
      <WhyChoose />
      <AccountCta />
    </Container>
  );
}
