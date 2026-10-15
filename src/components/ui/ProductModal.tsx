"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Palette } from "@/types/palette";
import { easeOutExpo } from "@/lib/animations";

type Props = {
  product: Palette;
  onClose: () => void;
};

export default function ProductModal({ product, onClose }: Props) {
  const [imgFailed, setImgFailed] = useState(false);
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

  const gradient = `linear-gradient(135deg, ${product.colors
    .map((color, i) => `${color.hex} ${i * 25}%`)
    .join(", ")})`;

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
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: easeOutExpo }}
          className="grid w-full grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center"
        >
          {/* Büyük ürün görseli */}
          <div className="relative h-[320px] overflow-hidden md:h-[520px]">
            <div className="absolute inset-0" style={{ backgroundImage: gradient }} />
            {product.image && !imgFailed && (
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                onError={() => setImgFailed(true)}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          </div>

          {/* Ürün detayları */}
          <div>
            <p className="label-industrial mb-4">
              {product.category} — {product.year}
            </p>
            <h2 className="heading-editorial text-5xl md:text-7xl">
              {product.title}
            </h2>
            <p className="mt-4 text-sm font-light text-ivory/60">
              {product.subtitle}
            </p>
            <p className="mt-6 font-light leading-relaxed text-ivory/70">
              {product.description}
            </p>

            <ul className="mt-8 space-y-4">
              {product.features.map((feature) => (
                <li
                  key={feature}
                  className="label-industrial flex items-center gap-4 text-sm"
                >
                  <span className="h-px w-6 bg-copper" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Ahşap tonları */}
            <div className="mt-10">
              <p className="mb-3 text-[10px] uppercase tracking-widest2 text-ivory/40">
                Ahşap Tonları
              </p>
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

            <a
              href="#iletisim"
              onClick={onClose}
              className="mt-10 inline-flex items-center gap-3 bg-copper px-8 py-4 text-sm font-medium uppercase tracking-widest2 text-ink transition-colors duration-300 hover:bg-ivory"
            >
              Teklif Al
              <span className="text-lg">→</span>
            </a>
          </div>
        </motion.div>
      </div>

      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Kapat"
        className="absolute right-6 top-6 z-10 text-2xl text-ivory transition-colors duration-300 hover:text-copper"
      >
        ✕
      </button>
    </motion.div>
  );
}
