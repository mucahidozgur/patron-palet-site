"use client";

import { motion } from "framer-motion";
import type { Palette } from "@/types/palette";

type Props = {
  product: Palette;
  index: number;
  onSelect: (product: Palette) => void;
};

export default function ProductCard({ product, index, onSelect }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      role="button"
      tabIndex={0}
      aria-label={`${product.title} detaylarını aç`}
      onClick={() => onSelect(product)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect(product);
        }
      }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty(
          "--mx",
          `${event.clientX - rect.left}px`
        );
        event.currentTarget.style.setProperty(
          "--my",
          `${event.clientY - rect.top}px`
        );
      }}
      className="group relative flex h-full cursor-pointer flex-col border border-tan/15 bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-tan/40 hover:bg-panel hover:shadow-[0_14px_44px_-12px_rgba(212,163,115,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-tan/50"
    >
      {/* Fareyi takip eden bronz ışıma */}
      <span className="spot-card pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Köşe braketleri */}
      <span className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l border-t border-tan/0 transition-all duration-300 group-hover:border-tan" />
      <span className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b border-r border-tan/0 transition-all duration-300 group-hover:border-tan" />

      {/* Hover'da ışık süpürmesi */}
      <span className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute -left-1/2 top-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-pine/10 to-transparent transition-all duration-700 ease-out group-hover:left-full" />
      </span>

      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-tan">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="border border-tan/30 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-tan">
          {product.category}
        </span>
      </div>

      <h3 className="font-display mt-6 text-xl font-bold uppercase tracking-wide text-pine md:text-2xl">
        {product.title}
      </h3>
      <p className="mt-2 font-mono text-xs text-pine/95">{product.subtitle}</p>
      <p className="mt-4 text-sm font-light leading-relaxed text-pine/90">
        {product.description}
      </p>

      <ul className="mt-6 space-y-2">
        {product.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3 text-sm text-pine"
          >
            <span className="h-px w-4 bg-tan" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center justify-between pt-8">
        <span className="font-mono text-xs text-pine/70">{product.year}</span>
        <span className="text-sm font-semibold text-tan transition-transform duration-300 group-hover:translate-x-1">
          Detay →
        </span>
      </div>
    </motion.article>
  );
}
