"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const HERO_IMAGE = "/images/hero-production.jpg";

export default function Hero() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-ink">
      {/* Palet üretim hattı görseli — dosya public/images altına eklenince otomatik görünür */}
      {!imgFailed && (
        <Image
          src={HERO_IMAGE}
          alt="Palet üretim hattı"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          onError={() => setImgFailed(true)}
        />
      )}
      <div className="absolute inset-0 bg-ink/70" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />

      <div className="container-editorial relative z-10 pt-40 pb-24">
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="label-industrial mb-6 text-sm"
        >
          İstanbul Fabrika Serisi — MMXXV
        </motion.p>

        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="heading-editorial text-6xl leading-[1.02] md:text-7xl lg:text-8xl"
        >
          PATRON PALET
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="label-industrial mt-6 text-sm"
        >
          Endüstriyel Ahşap Çözümleri
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 h-px w-24 bg-copper"
        />

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 max-w-2xl text-lg font-light leading-relaxed text-ivory/70 md:text-xl"
        >
          Keresteyi yüke, yükü güvene dönüştürüyoruz. Isıl işlemli, sertifikalı
          ve milimetrik standartlarda üretilen ahşap paletler — lojistiğin
          sessiz kahramanları.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-12"
        >
          <a
            href="#urunler"
            className="inline-flex items-center gap-3 bg-copper px-8 py-4 text-sm font-medium uppercase tracking-widest2 text-ink transition-colors duration-300 hover:bg-ivory"
          >
            Üretim Hattımız
            <span className="text-lg">→</span>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] uppercase tracking-widest2 text-ivory/40">
            Kaydır
          </span>
          <div className="h-12 w-px bg-gradient-to-b from-copper/60 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
