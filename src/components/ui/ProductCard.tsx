"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import type { Palette } from "@/types/palette";

type Props = {
  product: Palette;
  index: number;
  onSelect: (product: Palette) => void;
};

export default function ProductCard({ product, index, onSelect }: Props) {
  const [imgFailed, setImgFailed] = useState(false);
  const cardRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  // Scroll'a bağlı hafif perspektif dönüşü — galeri hissi.
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [8, 0, -8]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [4, 0, -4]);

  // Ürün görseli yoksa ahşap tonlarından gradient fallback.
  const gradient = `linear-gradient(135deg, ${product.colors
    .map((color, i) => `${color.hex} ${i * 25}%`)
    .join(", ")})`;

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      style={
        reduced
          ? undefined
          : { rotateX, rotateY, transformPerspective: 1000 }
      }
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
      className="group relative h-full w-full cursor-pointer overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-copper/50"
    >
      <div className="relative flex h-full min-h-[500px] w-full border border-copper/0 transition-colors duration-500 group-hover:border-copper/40 md:min-h-[600px]">
        {/* Gradient her zaman altta durur; ürün görseli yüklendiğinde üstünü kapatır. */}
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ backgroundImage: gradient }}
        />
        {product.image && !imgFailed && (
          <Image
            src={product.image}
            alt={`${product.title} ürün görseli`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover brightness-90 transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
            onError={() => setImgFailed(true)}
          />
        )}

        {/* Koyu overlay — görselin altı okunaklı kalacak kadar hafif */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
        <div className="absolute inset-0 bg-ink/25 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Ürün kategorisi */}
        <p className="label-industrial absolute left-6 top-6 z-10 text-sm">
          {String(index + 1).padStart(2, "0")} — {product.category}
        </p>

        {/* Teknik etiket plakası */}
        <span className="pointer-events-none absolute right-6 top-6 z-10 border border-copper/30 bg-ink/60 px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-copper/90 backdrop-blur-sm">
          {product.subtitle}
        </span>

        {/* Ürün ismi */}
        <div className="absolute bottom-8 left-8 right-8 z-10 transition-transform duration-500 group-hover:-translate-y-1">
          <h3 className="heading-editorial text-4xl text-ivory md:text-5xl">
            {product.title}
          </h3>
        </div>

        {/* Alttan yukarı yükselen bakır çizgi */}
        <div className="absolute bottom-0 left-0 right-0 h-px translate-y-2 bg-copper opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100" />
      </div>
    </motion.article>
  );
}
