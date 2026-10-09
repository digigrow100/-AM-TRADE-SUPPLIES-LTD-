import type { Metadata } from "next";
import BottomCta from "@/components/contact/BottomCta";
import Coverage from "@/components/contact/Coverage";
import Faq from "@/components/contact/Faq";
import Hero from "@/components/contact/Hero";
import Sidebar from "@/components/contact/Sidebar";
import StatusBar from "@/components/contact/StatusBar";
import TradeAccountForm from "@/components/contact/TradeAccountForm";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Trade Account & Contact",
  description:
    "Apply for a wholesale trade account with MB Trade Supplies Ltd or contact our Stoke-on-Trent trade desk for pallet enquiries.",
};

export default function ContactPage() {
  return (
    <Container className="pt-space-md md:pt-space-lg">
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
      <Faq />
      <BottomCta />
    </Container>
  );
}
