"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { palettes } from "@/data/palettes";

const featured = palettes.find((palette) => palette.featured) ?? palettes[0];

export default function FeaturedProduct() {
  const sectionRef = useRef<HTMLElement>(null);
  const [imgFailed, setImgFailed] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax: görsel ve metin zıt yönlerde kayar.
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const gradient = `linear-gradient(135deg, ${featured.colors
    .map((color, i) => `${color.hex} ${i * 25}%`)
    .join(", ")})`;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-surface py-32 md:py-40"
    >
      <div className="container-editorial grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <motion.div
          style={{ y: imageY }}
          className="relative h-[320px] overflow-hidden md:h-[480px]"
        >
          <div className="absolute inset-0" style={{ backgroundImage: gradient }} />
          {featured.image && !imgFailed && (
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              onError={() => setImgFailed(true)}
            />
          )}
          <div className="absolute inset-0 bg-ink/20" />
        </motion.div>

        <motion.div style={{ y: contentY }}>
          <p className="label-industrial mb-6">Öne Çıkan Ürün</p>
          <h2 className="heading-editorial text-4xl leading-none md:text-7xl">
            {featured.title}
          </h2>
          <p className="mt-8 max-w-md font-light leading-relaxed text-ivory/60">
            {featured.description}
          </p>
          <ul className="mt-10 space-y-4">
            {featured.features.map((feature) => (
              <li
                key={feature}
                className="label-industrial flex items-center gap-4 text-sm"
              >
                <span className="h-px w-6 bg-copper" />
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
