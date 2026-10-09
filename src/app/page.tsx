import Container from "@/components/Container";
import Categories from "@/components/home/Categories";
import Hero from "@/components/home/Hero";
import Logistics from "@/components/home/Logistics";
import Overview from "@/components/home/Overview";
import TradeCta from "@/components/home/TradeCta";
import WhyTrade from "@/components/home/WhyTrade";

export default function Home() {
  return (
    <>
      <Hero />
      <Container>
        <Overview />
        <Categories />
        <WhyTrade />
        <Logistics />
        <TradeCta />
      </Container>
    </>
  );
}
