import IntroProvider from "@/components/layout/IntroProvider";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import StatsBand from "@/components/sections/StatsBand";
import ProductGrid from "@/components/sections/ProductGrid";
import ShowcaseBand from "@/components/sections/ShowcaseBand";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Faq from "@/components/sections/Faq";
import Cta from "@/components/sections/Cta";
import Footer from "@/components/layout/Footer";
import MobileCtaBar from "@/components/layout/MobileCtaBar";

export default function Home() {
  return (
    <IntroProvider>
      <Header />
      <main>
        <Hero />
        <StatsBand />
        <ProductGrid />
        <ShowcaseBand />
        <Services />
        <About />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <MobileCtaBar />
    </IntroProvider>
  );
}
