import { lazy, Suspense } from 'react'
import { LazyMotion, domAnimation, MotionConfig } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'

/**
 * Performans:
 * - LazyMotion + domAnimation: Framer Motion yalnızca kullanılan animasyon
 *   özelliklerini yükler (ilk paketi belirgin şekilde küçültür).
 * - İlk ekranın altındaki bölümler ayrı parçalara (chunk) bölünür:
 *   hero ve header anında, kalanı paralel yüklenir. Görünüm altındaki
 *   yüklemeler görünür alanda düzen kayması (CLS) oluşturmaz.
 */
const About = lazy(() => import('./components/About'))
const Products = lazy(() => import('./components/Products'))
const Services = lazy(() => import('./components/Services'))
const References = lazy(() => import('./components/References'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

/** Lazy bölüm yüklenirken gösterilen sessiz iskelet */
const Skeleton = () => <div aria-hidden="true" className="min-h-[65vh] animate-pulse" />

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
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
          <Suspense fallback={<Skeleton />}>
            <About />
          </Suspense>
          <Suspense fallback={<Skeleton />}>
            <Products />
          </Suspense>
          <Suspense fallback={<Skeleton />}>
            <Services />
          </Suspense>
          <Suspense fallback={<Skeleton />}>
            <References />
          </Suspense>
          <Suspense fallback={<Skeleton />}>
            <Contact />
          </Suspense>
        </main>

        <Suspense fallback={<Skeleton />}>
          <Footer />
        </Suspense>
      </MotionConfig>
    </LazyMotion>
  )
}
