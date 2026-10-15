import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import FeaturedProduct from "@/components/sections/FeaturedProduct";
import ProductGrid from "@/components/sections/ProductGrid";
import Manifesto from "@/components/sections/Manifesto";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedProduct />
        <ProductGrid />
        <Manifesto />
      </main>
      <Footer />
    </>
  );
}
