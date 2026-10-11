import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Particles from './Particles'
import { hero } from '../data/content'
import { fadeUp, stagger } from '../lib/motion'

/** Hero arka planı için çizgisel palet illüstrasyonu (dekoratif) */
function PalletOutline({ className = '' }) {
  return (
    <svg viewBox="0 0 560 560" fill="none" aria-hidden="true" className={className}>
      <g stroke="currentColor" strokeWidth="2">
        {/* Tabliye tahtaları */}
        <rect x="110" y="168" width="340" height="22" rx="8" />
        <rect x="110" y="214" width="340" height="22" rx="8" />
        <rect x="110" y="260" width="340" height="22" rx="8" />
        {/* Takozlar */}
        <rect x="132" y="298" width="26" height="36" rx="4" />
        <rect x="267" y="298" width="26" height="36" rx="4" />
        <rect x="402" y="298" width="26" height="36" rx="4" />
        {/* Alt tahta */}
        <rect x="110" y="350" width="340" height="22" rx="8" />
      </g>
      {/* Köşe vurguları */}
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M60 130 L100 90" />
        <path d="M500 130 L460 90" />
        <path d="M60 430 L100 470" />
        <path d="M500 430 L460 470" />
      </g>
    </svg>
  )
}

export default function Hero() {
  // Hafif parallax
  const { scrollY } = useScroll()
  const palletY = useTransform(scrollY, [0, 700], [0, 90])

  return (
    <section
      id="anasayfa"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pb-24 pt-28"
    >
      {/* Zemin katmanları */}
      <div aria-hidden="true" className="absolute inset-0 bg-dots opacity-60" />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[-12rem] h-[34rem] w-[60rem] -translate-x-1/2 rounded-full bg-gold/[0.07] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-14rem] right-[-10rem] h-[30rem] w-[30rem] rounded-full bg-gold/[0.05] blur-3xl"
      />
      <Particles className="opacity-70" count={80} />

      {/* Dekoratif palet çizimi (parallax) */}
      <motion.div
        aria-hidden="true"
        style={{ y: palletY }}
        className="absolute right-[-12rem] top-1/2 hidden w-[600px] -translate-y-1/2 text-gold opacity-[0.07] xl:block"
      >
        <PalletOutline className="h-auto w-full" />
      </motion.div>

      {/* İçerik — sayfa yüklendiğinde aşağıdan yukarı fade-in + slide-up */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-5xl px-5 text-center sm:px-8"
      >
        <motion.div
          variants={fadeUp}
          className="glass inline-flex items-center gap-2.5 rounded-full px-5 py-2"
        >
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-deep">
            {hero.eyebrow}
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-8 font-display text-[2.6rem] font-bold leading-[1.12] tracking-tight text-silver sm:text-6xl lg:text-7xl"
        >
          {hero.titleLine1}
          <br />
          <span className="text-gold-gradient">{hero.titleLine2}</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-mist sm:text-lg"
        >
          {hero.description}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            href="#urunler"
            className="btn-primary"
          >
            {hero.ctaPrimary} <ArrowRight size={17} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            href="#iletisim"
            className="btn-outline"
          >
            {hero.ctaSecondary}
          </motion.a>
        </motion.div>

        <motion.ul
          variants={fadeUp}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {hero.badges.map((badge) => (
            <li
              key={badge}
              className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.18em] text-mist sm:text-[13px]"
            >
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-gold" />
              {badge}
            </li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Kaydırma göstergesi */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <a
          href="#hakkimizda"
          aria-label="Hakkımızda bölümüne kaydır"
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-mist/60">
            Keşfet
          </span>
          <motion.span
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="text-gold" size={20} />
          </motion.span>
        </a>
      </motion.div>
    </section>
  )
}
