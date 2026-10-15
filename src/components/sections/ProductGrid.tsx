"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { palettes } from "@/data/palettes";
import type { Palette } from "@/types/palette";
import ProductCard from "@/components/ui/ProductCard";
import ProductModal from "@/components/ui/ProductModal";

export default function ProductGrid() {
  const [selected, setSelected] = useState<Palette | null>(null);

  return (
    <section id="urunler" className="bg-ink py-32 md:py-40">
      <div className="container-editorial">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl"
        >
          <p className="label-industrial mb-6">Ürün Kataloğu</p>
          <h2 className="heading-display text-3xl text-white md:text-5xl">
            Ürünlerimiz
          </h2>
          <p className="mt-6 font-light leading-relaxed text-white/60">
            Stoklarımızdaki ürün çeşitliliği ile belirlenen zaman çizelgesi
            dahilinde, ekonomik ve garantili ürün hizmeti.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {palettes.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onSelect={setSelected}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProductModal product={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
