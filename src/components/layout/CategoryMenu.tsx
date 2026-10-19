"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { easeOutExpo } from "@/lib/animations";

const CATEGORIES = [
  { num: "01", label: "Ürünler", href: "#urunler" },
  { num: "02", label: "Hizmetler", href: "#hizmetler" },
  { num: "03", label: "Hakkımızda", href: "#hakkimizda" },
  { num: "04", label: "SSS", href: "#sss" },
  { num: "05", label: "İletişim", href: "#iletisim" },
];

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: 26 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: easeOutExpo },
  },
};

/**
 * Sağ üstte üç çizgili kategori menüsü:
 * masaüstünde açılır panel, mobilde tam ekran.
 */
export default function CategoryMenu() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const close = () => setOpen(false);

  // ESC ile kapat, mobil menüde kaydırma kilidi
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    if (!window.matchMedia("(max-width: 767px)").matches) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Masaüstünde dışarı tıklanınca kapat
  useEffect(() => {
    if (!open) return;
    const onDown = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        close();
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  return (
    <div ref={wrapperRef} className="relative">
      {/* Üç çizgili buton */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="kategori-menu"
        aria-label={open ? "Kategorileri kapat" : "Kategorileri aç"}
        className="group relative flex h-11 w-11 flex-col items-center justify-center gap-[5px] border border-tan/40 transition-all duration-300 hover:border-tan hover:shadow-[0_0_20px_rgba(212,163,115,0.35)]"
      >
        <span
          aria-hidden="true"
          className="ring-pulse pointer-events-none absolute inset-0 border border-tan/40"
        />
        <span
          className={`h-[2px] w-5 bg-tan transition-all duration-300 ${
            open ? "translate-y-[7px] rotate-45" : "group-hover:w-6"
          }`}
        />
        <span
          className={`h-[2px] w-5 bg-tan transition-all duration-300 ${
            open ? "opacity-0" : "group-hover:w-6"
          }`}
        />
        <span
          className={`h-[2px] w-5 bg-tan transition-all duration-300 ${
            open ? "-translate-y-[7px] -rotate-45" : "group-hover:w-6"
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Masaüstü: sağ üstten açılan panel */}
            <motion.nav
              key="desktop-menu"
              id="kategori-menu"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute right-0 top-[calc(100%+14px)] z-50 hidden w-80 border border-tan/20 bg-ink/95 p-7 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl md:block"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="label-industrial text-xs">Kategoriler</span>
                <span className="tr-badge text-[10px]">TR</span>
              </div>
              <motion.div
                variants={listVariants}
                initial="hidden"
                animate="visible"
                className="border-t border-pine/10"
              >
                {CATEGORIES.map((item) => (
                  <motion.a
                    key={item.href}
                    variants={itemVariants}
                    href={item.href}
                    onClick={close}
                    className="group flex items-baseline gap-4 border-b border-pine/10 py-4 last:border-0"
                  >
                    <span className="font-mono text-[10px] text-tan/60 transition-colors duration-300 group-hover:text-tan">
                      {item.num}
                    </span>
                    <span className="font-display text-sm font-bold uppercase tracking-[0.18em] text-pine transition-all duration-300 group-hover:translate-x-1 group-hover:text-tan">
                      {item.label}
                    </span>
                    <span className="ml-auto text-sm text-tan/0 transition-all duration-300 group-hover:text-tan">
                      →
                    </span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.nav>

            {/* Mobil: tam ekran kategori menüsü */}
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[60] bg-ink md:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Kategoriler"
            >
              <div className="tech-grid absolute inset-0 opacity-40" />
              <div className="grain absolute inset-0 opacity-10" />
              <div className="glow-pulse pointer-events-none absolute left-1/2 top-0 h-[320px] w-[440px] -translate-x-1/2 rounded-full bg-tan/10 blur-[110px]" />

              <div className="relative flex h-full flex-col px-6 pb-8 pt-6">
                <div className="flex items-center justify-between">
                  <span className="label-industrial">Kategoriler</span>
                  <button
                    type="button"
                    onClick={close}
                    aria-label="Menüyü kapat"
                    className="flex h-11 w-11 items-center justify-center border border-tan/40 text-lg text-tan transition-colors duration-300 hover:bg-tan hover:text-ink"
                  >
                    ✕
                  </button>
                </div>

                <motion.div
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-8 flex-1 border-t border-pine/10"
                >
                  {CATEGORIES.map((item) => (
                    <motion.a
                      key={item.href}
                      variants={itemVariants}
                      href={item.href}
                      onClick={close}
                      className="group flex items-baseline gap-5 border-b border-pine/10 py-6"
                    >
                      <span className="font-mono text-xs text-tan/60 transition-colors duration-300 group-hover:text-tan">
                        {item.num}
                      </span>
                      <span className="font-display text-2xl font-bold uppercase tracking-[0.14em] text-pine transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-tan">
                        {item.label}
                      </span>
                      <span className="ml-auto text-tan/0 transition-all duration-300 group-hover:text-tan">
                        →
                      </span>
                    </motion.a>
                  ))}
                </motion.div>

                <div className="mt-8 flex gap-3">
                  <a
                    href="tel:+905434329951"
                    className="flex-1 border border-tan/40 py-4 text-center text-xs font-bold uppercase tracking-widest text-tan transition-colors duration-300 active:bg-tan active:text-ink"
                  >
                    Hemen Ara
                  </a>
                  <a
                    href="#iletisim"
                    onClick={close}
                    className="btn-sheen flex-1 bg-tan py-4 text-center text-xs font-bold uppercase tracking-widest text-ink"
                  >
                    Teklif Al
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
