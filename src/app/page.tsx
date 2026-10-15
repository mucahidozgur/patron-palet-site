import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import ProductGrid from "@/components/sections/ProductGrid";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Faq from "@/components/sections/Faq";
import Cta from "@/components/sections/Cta";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductGrid />
        <Services />
        <About />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
