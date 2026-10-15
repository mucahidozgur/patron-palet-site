"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Aşağı kaydırınca gizlenir, yukarı kaydırınca geri gelir.
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > lastY && y > 140);
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: hidden ? "-100%" : 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-orange/10 bg-ink/90 backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-editorial flex items-center justify-between py-5">
        <Link href="/" className="group">
          <span className="logo-shimmer bg-gradient-to-r from-orange via-amber to-orange bg-clip-text font-display text-lg font-bold tracking-[0.2em] text-transparent drop-shadow-[0_0_14px_rgba(255,106,0,0.35)] transition-all duration-500 group-hover:tracking-[0.28em] md:text-xl">
            PATRON PALET
          </span>
        </Link>

        <nav className="hidden md:flex gap-10">
          <Link
            href="#urunler"
            className="text-sm uppercase tracking-widest text-ivory/80 hover:text-orange transition-colors duration-300"
          >
            Ürünler
          </Link>
          <Link
            href="#hizmetler"
            className="text-sm uppercase tracking-widest text-ivory/80 hover:text-orange transition-colors duration-300"
          >
            Hizmetler
          </Link>
          <Link
            href="#hakkimizda"
            className="text-sm uppercase tracking-widest text-ivory/80 hover:text-orange transition-colors duration-300"
          >
            Hakkımızda
          </Link>
          <Link
            href="#sss"
            className="text-sm uppercase tracking-widest text-ivory/80 hover:text-orange transition-colors duration-300"
          >
            SSS
          </Link>
        </nav>

        <Link
          href="#iletisim"
          className="hidden md:inline-flex border border-orange/40 px-6 py-2.5 text-xs font-bold uppercase tracking-widest2 text-orange transition-all duration-300 hover:bg-orange hover:text-ink hover:shadow-[0_0_24px_rgba(255,106,0,0.4)]"
        >
          Teklif Al
        </Link>
      </div>
    </motion.header>
  );
}
