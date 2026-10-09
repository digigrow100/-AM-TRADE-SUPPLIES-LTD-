import type { Metadata } from "next";
import AccountCta from "@/components/about/AccountCta";
import Banner from "@/components/about/Banner";
import Intro from "@/components/about/Intro";
import Quality from "@/components/about/Quality";
import WhatWeSupply from "@/components/about/WhatWeSupply";
import WhoWeAre from "@/components/about/WhoWeAre";
import WhyChoose from "@/components/about/WhyChoose";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Over 15 years of UK wholesale supply of drinks, cooking oils and bakery flour from our Stoke-on-Trent distribution hub.",
};

export default function AboutPage() {
  return (
    <Container className="pt-space-md md:pt-space-lg">
      <Banner />
      <Intro />
      <WhoWeAre />
      <WhatWeSupply />
      <WhyChoose />
      <Quality />
      <AccountCta />
    </Container>
  );
}
