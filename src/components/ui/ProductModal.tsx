"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import type { Palette } from "@/types/palette";
import { easeOutExpo } from "@/lib/animations";

type Props = {
  product: Palette;
  onClose: () => void;
};

export default function ProductModal({ product, onClose }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const focusables = modalRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;
      if (
        event.shiftKey &&
        (active === first || !modalRef.current?.contains(active))
      ) {
        event.preventDefault();
        last.focus();
      } else if (
        !event.shiftKey &&
        (active === last || !modalRef.current?.contains(active))
      ) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-label={product.title}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] overflow-y-auto bg-ink/95 backdrop-blur-sm"
    >
      <div className="container-editorial flex min-h-full items-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12, ease: easeOutExpo }}
          className="w-full max-w-3xl border border-tan/20 bg-surface p-8 shadow-[0_0_60px_-16px_rgba(212,163,115,0.3)] md:p-12"
        >
          <div className="flex items-center justify-between">
            <p className="label-industrial">{product.category}</p>
            <span className="font-mono text-xs text-white/40">
              {product.year}
            </span>
          </div>

          <h2 className="heading-display mt-6 text-3xl text-white md:text-4xl">
            {product.title}
          </h2>
          <p className="mt-3 font-mono text-sm text-white/70">
            {product.subtitle}
          </p>
          <p className="mt-6 font-light leading-relaxed text-white/70">
            {product.description}
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {product.features.map((feature) => (
              <li
                key={feature}
                className="border border-white/10 bg-ink/60 px-4 py-3 text-sm text-white/90"
              >
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <p className="label-industrial mb-3 text-xs">Ahşap Tonları</p>
            <div className="flex gap-1">
              {product.colors.map((color) => (
                <span
                  key={color.hex}
                  title={`${color.name} — ${color.hex}`}
                  className="h-6 w-12"
                  style={{ backgroundColor: color.hex }}
                />
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#iletisim"
              onClick={onClose}
              className="bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest2 text-ink transition-all duration-300 hover:bg-caramel hover:shadow-[0_0_32px_rgba(212,163,115,0.5)]"
            >
              Teklif Al →
            </a>
            <button
              type="button"
              onClick={onClose}
              className="text-sm font-semibold uppercase tracking-widest2 text-white/70 transition-colors duration-300 hover:text-tan"
            >
              Kapat
            </button>
          </div>
        </motion.div>
      </div>

      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Kapat"
        className="absolute right-6 top-6 z-10 text-2xl text-white transition-colors duration-300 hover:text-tan"
      >
        ✕
      </button>
    </motion.div>
  );
}
