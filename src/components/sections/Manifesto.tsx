"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax: scroll'da yazı hafifçe yukarı kayar.
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      ref={sectionRef}
      id="manifesto"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-copper/30" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-copper/30" />

      <motion.div
        style={{ y }}
        className="container-editorial py-32 text-center"
      >
        <p className="label-industrial mb-10">Manifesto</p>
        <blockquote className="heading-editorial text-5xl leading-tight md:text-7xl lg:text-8xl">
          “Ahşap, doğanın en dürüst malzemesidir.”
        </blockquote>
        <p className="label-industrial mt-12">— Patron Palet Manifestosu</p>
      </motion.div>
    </section>
  );
}
