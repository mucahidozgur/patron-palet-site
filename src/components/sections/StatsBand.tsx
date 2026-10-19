"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { easeOutExpo, staggerContainer, staggerItem } from "@/lib/animations";

const STATS = [
  {
    value: 81,
    prefix: "",
    suffix: "",
    label: "İl'e Teslimat",
    note: "Türkiye'nin her noktasına",
  },
  {
    value: 15,
    prefix: "ISPM ",
    suffix: "",
    label: "Uyumlu Üretim",
    note: "Isıl işlem sertifikalı ihracat",
  },
  {
    value: 3,
    prefix: "",
    suffix: "",
    label: "Uzmanlık Alanı",
    note: "Üretim · 2. el alım satım · İhracat",
  },
  {
    value: 100,
    prefix: "%",
    suffix: "",
    label: "Garantili Kalite",
    note: "Kontrol edilmiş, garantili ürün",
  },
];

function Counter({
  to,
  prefix,
  suffix,
}: {
  to: number;
  prefix: string;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mv = useMotionValue(0);
  const text = useTransform(mv, (v) =>
    `${prefix}${Math.round(v).toLocaleString("tr-TR")}${suffix}`
  );

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration: 1.8, ease: easeOutExpo });
    return () => controls.stop();
  }, [inView, mv, to]);

  return <motion.span ref={ref}>{text}</motion.span>;
}

export default function StatsBand() {
  return (
    <section
      aria-label="Öne çıkan rakamlar"
      className="relative border-y border-pine/10 bg-surface/40 py-16 md:py-20"
    >
      <div className="container-editorial">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 gap-y-12 lg:grid-cols-4"
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className={
                index > 0 ? "lg:border-l lg:border-pine/10 lg:pl-10" : ""
              }
            >
              <p className="font-display text-4xl font-extrabold text-pine drop-shadow-[0_0_24px_rgba(212,163,115,0.25)] md:text-5xl">
                <Counter
                  to={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </p>
              <p className="label-industrial mt-3 text-sm">{stat.label}</p>
              <p className="mt-2 text-sm font-light text-pine/55">
                {stat.note}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
