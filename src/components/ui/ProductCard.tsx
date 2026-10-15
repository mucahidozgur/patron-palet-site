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
      className="group relative flex h-full cursor-pointer flex-col border border-white/10 bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-mint/40 hover:bg-panel hover:shadow-[0_14px_44px_-12px_rgba(52,211,153,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-mint/50"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-mint">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="border border-mint/30 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-mint">
          {product.category}
        </span>
      </div>

      <h3 className="font-display mt-6 text-xl font-bold uppercase tracking-wide text-white md:text-2xl">
        {product.title}
      </h3>
      <p className="mt-2 font-mono text-xs text-white/70">{product.subtitle}</p>
      <p className="mt-4 text-sm font-light leading-relaxed text-white/60">
        {product.description}
      </p>

      <ul className="mt-6 space-y-2">
        {product.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3 text-sm text-white/80"
          >
            <span className="h-px w-4 bg-mint" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center justify-between pt-8">
        <span className="font-mono text-xs text-white/40">{product.year}</span>
        <span className="text-sm font-semibold text-mint transition-transform duration-300 group-hover:translate-x-1">
          Detay →
        </span>
      </div>
    </motion.article>
  );
}
