import type { Metadata } from "next";
import BottomCta from "@/components/contact/BottomCta";
import Coverage from "@/components/contact/Coverage";
import Hero from "@/components/contact/Hero";
import Sidebar from "@/components/contact/Sidebar";
import StatusBar from "@/components/contact/StatusBar";
import TradeAccountForm from "@/components/contact/TradeAccountForm";
import Container from "@/components/Container";
import Faq, { type FaqItem } from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd, pageMetadata, webPageLd } from "@/lib/seo";

const title = "Contact AM Trade Supplies Ltd | Wholesale Trade Enquiries";
const description =
  "Contact AM Trade Supplies Ltd in Stoke-on-Trent for wholesale drinks, cooking oils and flour. Send a trade enquiry with your product list and delivery postcode.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/contact" });

const faqs: FaqItem[] = [
  {
    icon: "storefront",
    q: "Who can make a trade enquiry?",
    a: "Any business that buys food and drink in wholesale quantities, including retailers, restaurants, takeaways, cafés, bakeries and caterers.",
  },
  {
    icon: "layers",
    q: "What should I include in my enquiry?",
    a: "Your business name, the products you need, rough quantities and your delivery postcode. The more detail you share, the easier it is to quote.",
  },
  {
    icon: "location_on",
    q: "Do you deliver to my area?",
    a: "Delivery depends on your location. Add your postcode to the form and we will confirm what is possible for your business.",
  },
  {
    icon: "verified",
    q: "What happens after I send the form?",
    a: "We review your enquiry and reply using the contact details you provide, with a quote based on the products and quantities you asked for.",
  },
  {
    icon: "help_outline",
    q: "Can I ask about products that are not listed?",
    a: "Our range covers drinks, cooking oils and flour. If you need something related, mention it in your notes and we will let you know if we can help.",
  },
];

export default function ContactPage() {
  return (
    <Container className="pt-space-md md:pt-space-lg">
      <JsonLd data={webPageLd("ContactPage", { name: title, description, path: "/contact" })} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Contact Us", path: "/contact" },
        ])}
      />
      <StatusBar />
      <Hero />
      <div className="mb-space-xl grid grid-cols-1 items-start gap-space-lg md:mb-space-2xl lg:grid-cols-12 lg:gap-space-xl">
        <div className="lg:col-span-7">
          <TradeAccountForm />
        </div>
        <div className="lg:col-span-5">
          <Sidebar />
        </div>
      </div>
      <Coverage />
      <Faq
        eyebrow="Enquiry Questions"
        title="Trade Enquiry FAQs"
        intro="What to expect when you contact AM Trade Supplies Ltd."
        items={faqs}
      />
      <BottomCta />
    </Container>
  );
}
