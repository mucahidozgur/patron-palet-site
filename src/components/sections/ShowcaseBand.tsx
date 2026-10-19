"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Tam genişlik görsel bandı: kaydırmayla hafif paralaks,
 * üzerinde marka cümlesi. Görsel: gorsel2.
 */
export default function ShowcaseBand() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section
      ref={ref}
      className="relative h-[62vh] min-h-[420px] overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-x-0 -top-[16%] -bottom-[16%]">
        <Image
          src="/images/gorsel2.jpg"
          alt="Üretim hattında istiflenmiş ahşap paletler"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-ink/45" />
      <div className="absolute inset-0 bg-panel/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />
      <div className="grain absolute inset-0 opacity-10" />

      <div className="container-editorial relative flex h-full flex-col items-center justify-center text-center">
        <motion.figure
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="tr-badge mb-8 text-sm">TR</span>
          <blockquote className="heading-display text-2xl leading-snug text-pine md:text-4xl">
            Ahşabın gücü,{" "}
            <span className="logo-shimmer bg-gradient-to-r from-tan to-caramel bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(212,163,115,0.4)]">
              teknolojinin hassasiyetiyle.
            </span>
          </blockquote>
          <figcaption className="label-industrial mt-8">
            Patron Palet — Ankara
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
