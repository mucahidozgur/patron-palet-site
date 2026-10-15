"use client";

import { motion } from "framer-motion";
import { fadeUp, wordContainer, wordFadeUp } from "@/lib/animations";

const CHIPS = [
  "Sıfır Palet Üretimi",
  "2. El Alım Satım",
  "İhracat Sandığı",
  "Ankara'dan Dünyaya",
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-ink">
      <div className="tech-grid absolute inset-0" />
      <div className="glow-pulse pointer-events-none absolute left-1/2 top-1/3 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-orange/10 blur-[140px]" />

      <div className="container-editorial relative z-10 pt-40 pb-24">
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="label-industrial mb-8"
        >
          Ahşap Palet Üretimi — MMXXVI
        </motion.p>

        <motion.h1
          variants={wordContainer}
          initial="hidden"
          animate="visible"
          className="heading-display text-4xl leading-[1.1] text-orange md:text-6xl lg:text-7xl"
        >
          <motion.span variants={wordFadeUp} className="inline-block">
            Patron
          </motion.span>{" "}
          <motion.span
            variants={wordFadeUp}
            className="inline-block bg-gradient-to-r from-orange to-amber bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(255,106,0,0.35)]"
          >
            Palet
          </motion.span>
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-ivory md:text-xl"
        >
          Sıfır ahşap palet üretimi, ikinci el palet alım satımı ve ihracat
          sandığı imalatı. En uygun, en doğru ve en ekonomik çözümler için tek
          adres.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 flex flex-wrap items-center gap-6"
        >
          <a
            href="#iletisim"
            className="bg-orange px-8 py-4 text-sm font-bold uppercase tracking-widest2 text-ink transition-all duration-300 hover:bg-amber hover:shadow-[0_0_32px_rgba(255,106,0,0.45)]"
          >
            Teklif Al <span className="ml-1">→</span>
          </a>
          <a
            href="#urunler"
            className="text-sm font-semibold uppercase tracking-widest2 text-ivory transition-colors duration-300 hover:text-orange"
          >
            Ürünleri İncele
          </a>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 flex flex-wrap gap-3"
        >
          {CHIPS.map((chip) => (
            <span
              key={chip}
              className="border border-ivory/15 bg-surface/60 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-ivory/80 transition-colors duration-300 hover:border-orange hover:text-orange"
            >
              {chip}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
