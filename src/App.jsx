import { MotionConfig } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Services from './components/Services'
import References from './components/References'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      {/* Klavye kullanıcıları için içeriğe atla */}
      <a
        href="#icerik"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
      >
        İçeriğe geç
      </a>

      <Header />

      <main id="icerik">
        <Hero />
        <About />
        <Products />
        <Services />
        <References />
        <Contact />
      </main>

      <Footer />
    </MotionConfig>
  )
}
