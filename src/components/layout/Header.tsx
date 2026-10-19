"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { useIntroDone } from "@/components/layout/IntroProvider";
import CategoryMenu from "@/components/layout/CategoryMenu";

export default function Header() {
  const introDone = useIntroDone();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Sayfa ilerleme çizgisi (üst kenarda bronz süpürme)
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    mass: 0.4,
  });

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
      animate={
        introDone
          ? { y: hidden ? "-100%" : 0, opacity: 1 }
          : { y: -80, opacity: 0 }
      }
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-tan/10 bg-ink/90 backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-editorial flex items-center justify-between py-4 md:py-5">
        {/* Logo: sol üstte, ön planda */}
        <Link href="/" className="group flex items-center gap-2.5 md:gap-3">
          <Image
            src="/logopatron.jpeg"
            alt="Patron Palet"
            width={44}
            height={44}
            className="h-10 w-10 rounded-md ring-1 ring-tan/40 transition-all duration-500 group-hover:scale-110 group-hover:ring-tan md:h-11 md:w-11"
          />
          <span className="flex items-center gap-2.5 text-sm sm:text-base md:gap-3 md:text-lg lg:text-xl">
            <span className="tr-badge shrink-0 transition-all duration-500 group-hover:bg-tan group-hover:text-ink">
              TR
            </span>
            <span className="logo-shimmer bg-gradient-to-r from-tan via-pine to-tan bg-clip-text font-display font-bold tracking-[0.12em] text-transparent drop-shadow-[0_0_16px_rgba(212,163,115,0.45)] transition-all duration-500 group-hover:tracking-[0.2em] sm:tracking-[0.15em] md:tracking-[0.2em]">
              PATRON PALET
            </span>
          </span>
        </Link>

        {/* Sağ üst: Teklif Al + kategori menüsü */}
        <div className="flex items-center gap-3 md:gap-4">
          <motion.a
            whileTap={{ scale: 0.96 }}
            href="#iletisim"
            className="btn-sheen hidden md:inline-flex border border-tan/40 px-6 py-2.5 text-xs font-bold uppercase tracking-widest2 text-tan transition-all duration-300 hover:bg-tan hover:text-ink hover:shadow-[0_0_24px_rgba(212,163,115,0.4)]"
          >
            Teklif Al
          </motion.a>
          <CategoryMenu />
        </div>
      </div>

      {/* Bronz ilerleme çizgisi */}
      <motion.span
        style={{ scaleX: progress }}
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-tan via-caramel to-tan"
        aria-hidden="true"
      />
    </motion.header>
  );
}
