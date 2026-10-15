"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { palettes } from "@/data/palettes";
import type { Palette } from "@/types/palette";
import ProductCard from "@/components/ui/ProductCard";
import ProductModal from "@/components/ui/ProductModal";

/** Featured ürünler katalogda 2x yüksek vitrin hücresi alır. */
function gridSpanClass(product: Palette): string {
  return product.featured ? "md:row-span-2" : "";
}

export default function ProductGrid() {
  const [selected, setSelected] = useState<Palette | null>(null);

  return (
    <section id="urunler" className="blueprint-grid bg-ink py-32 md:py-40">
      <div className="container-editorial">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-2xl"
        >
          <p className="label-industrial mb-6">Ürün Kataloğu</p>
          <h2 className="heading-editorial text-5xl leading-tight md:text-7xl">
            Dayanıklılık ve <span className="text-copper">Mühendislik</span>
          </h2>
          <p className="mt-6 font-light leading-relaxed text-ivory/50">
            Altı model. Tek standart: kusursuzluk.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:auto-rows-[600px] md:grid-cols-2">
          {palettes.map((product, index) => (
            <div
              key={product.id}
              className={`${gridSpanClass(product)} min-h-0`}
            >
              <ProductCard
                product={product}
                index={index}
                onSelect={setSelected}
              />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProductModal
            product={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
