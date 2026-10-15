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
      className="group relative flex h-full cursor-pointer flex-col border border-ivory/10 bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-orange/40 hover:bg-panel hover:shadow-[0_14px_44px_-12px_rgba(255,106,0,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange/50"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-orange">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="border border-orange/30 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-orange">
          {product.category}
        </span>
      </div>

      <h3 className="font-display mt-6 text-xl font-bold uppercase tracking-wide text-orange md:text-2xl">
        {product.title}
      </h3>
      <p className="mt-2 font-mono text-xs text-ivory/70">{product.subtitle}</p>
      <p className="mt-4 text-sm font-light leading-relaxed text-ivory/60">
        {product.description}
      </p>

      <ul className="mt-6 space-y-2">
        {product.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3 text-sm text-ivory/80"
          >
            <span className="h-px w-4 bg-orange" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center justify-between pt-8">
        <span className="font-mono text-xs text-ivory/40">{product.year}</span>
        <span className="text-sm font-semibold text-orange transition-transform duration-300 group-hover:translate-x-1">
          Detay →
        </span>
      </div>
    </motion.article>
  );
}
