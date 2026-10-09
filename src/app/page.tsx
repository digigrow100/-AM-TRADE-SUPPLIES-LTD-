import type { Metadata } from "next";
import Container from "@/components/Container";
import Faq, { type FaqItem } from "@/components/Faq";
import Categories from "@/components/home/Categories";
import Hero from "@/components/home/Hero";
import JsonLd from "@/components/JsonLd";
import Logistics from "@/components/home/Logistics";
import Overview from "@/components/home/Overview";
import TradeCta from "@/components/home/TradeCta";
import WhyTrade from "@/components/home/WhyTrade";
import { pageMetadata, webPageLd } from "@/lib/seo";

const title = "AM Trade Supplies | Wholesale Food & Drink, Stoke-on-Trent";
const description =
  "AM Trade Supplies Ltd is a B2B wholesale food and drink supplier in Stoke-on-Trent. Soft drinks, bottled water, juices, cooking oils and flour for trade.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/" });

const faqs: FaqItem[] = [
  {
    icon: "storefront",
    q: "Who do you supply?",
    a: "We are a B2B supplier, so our range and quotes are designed for businesses such as retailers, restaurants, takeaways, cafés, bakeries and caterers.",
  },
  {
    icon: "inventory_2",
    q: "What products do you sell?",
    a: "We supply soft drinks, bottled water, juices, rapeseed oil, vegetable oil, plain flour, pizza flour and self-raising flour.",
  },
  {
    icon: "location_on",
    q: "Where are you based?",
    a: "We are based in Stoke-on-Trent, UK. Delivery availability depends on your location, so please include your postcode when you get in touch.",
  },
  {
    icon: "receipt_long",
    q: "How do I get a price?",
    a: "Prices depend on the products and quantities you need, so we provide quotes on request. Send us an enquiry with your product list.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={webPageLd("WebPage", { name: title, description, path: "/" })} />
      <Hero />
      <Container>
        <Overview />
        <Categories />
        <WhyTrade />
        <Logistics />
        <Faq
          eyebrow="Common Questions"
          title="Wholesale Food and Drink FAQs"
          intro="Quick answers about who we supply and how to get started."
          items={faqs}
        />
        <TradeCta />
      </Container>
    </>
  );
}
