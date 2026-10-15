"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 bg-ink transition-all duration-500 ${
        scrolled ? "backdrop-blur-lg border-b border-copper/10 py-4" : "py-6"
      }`}
    >
      <div className="container-editorial flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/logopatron.jpeg"
            alt="Patron Palet"
            width={40}
            height={40}
            className="opacity-90 transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:opacity-100"
          />
          <span className="hidden font-serif text-xl tracking-wider text-ivory transition-opacity duration-300 group-hover:opacity-80 md:inline">
            PATRON PALET
          </span>
        </Link>

        <nav className="hidden md:flex gap-10">
          <Link
            href="#urunler"
            className="text-sm uppercase tracking-widest text-steel hover:text-copper transition-colors duration-300"
          >
            Ürünler
          </Link>
          <Link
            href="#manifesto"
            className="text-sm uppercase tracking-widest text-steel hover:text-copper transition-colors duration-300"
          >
            Manifesto
          </Link>
          <Link
            href="#iletisim"
            className="text-sm uppercase tracking-widest text-steel hover:text-copper transition-colors duration-300"
          >
            İletişim
          </Link>
        </nav>

        <Link
          href="#iletisim"
          className="hidden md:inline-flex text-xs uppercase tracking-widest2 text-copper border border-copper/30 px-6 py-3 hover:bg-copper hover:text-ink transition-all duration-300"
        >
          Keşfet
        </Link>
      </div>
    </motion.header>
  );
}
