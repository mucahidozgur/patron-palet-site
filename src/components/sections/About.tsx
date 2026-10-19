"use client";

import { motion } from "framer-motion";
import FramedImage from "@/components/ui/FramedImage";

const values = [
  "Garantili — Kaliteli Hizmet",
  "Kaliteli Ürün — Müşteri Odaklı Çözümler",
  "Zamanında İş — Ürün Teslimi",
];

export default function About() {
  return (
    <section id="hakkimizda" className="bg-ink py-32 md:py-40">
      <div className="container-editorial">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="label-industrial mb-6">
              <span className="section-num mr-3">03</span>Hakkımızda
            </p>
            <h2 className="heading-display text-3xl text-pine md:text-5xl">
              Yılların Tecrübesi,
              <span className="logo-shimmer block bg-gradient-to-r from-tan to-caramel bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(212,163,115,0.35)]">
                Aynı Kalite
              </span>
            </h2>
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.25 }}
              className="mt-8 block h-px w-24 origin-left bg-gradient-to-r from-tan via-tan/50 to-transparent"
            />
            <p className="mt-8 font-light leading-relaxed text-pine/90">
              Alanında uzman, deneyimli kadromuz ile yılların vermiş olduğu
              tecrübe ve birikim sayesinde, müşterilerimize her zaman aynı
              kalitede hizmet vermek için çalışmaktayız.
            </p>
            <p className="mt-6 font-light leading-relaxed text-pine/90">
              Müşteri beklentileri doğrultusunda özel ve standart palet üretimi
              yaparak tüm isteklerinizi karşılamaktayız. Tüm ahşap palet ürün ve
              hizmetlerimizde garanti ve kalite ile her zaman yanınızdayız.
            </p>
          </motion.div>

          {/* Görsel kolajı: gorsel1 + gorsel4 — dengeli, orantılı kompozisyon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-5 md:space-y-6"
          >
            <FramedImage
              src="/images/gorsel1.jpg"
              alt="İstiflenmiş ahşap paletler"
              caption="Sıfır Palet Üretim Hattı"
              className="aspect-[16/9] w-full"
            />
            <FramedImage
              src="/images/gorsel4.jpg"
              alt="Sevkiyata hazır palet yığını"
              caption="Sevkiyata Hazır"
              className="ml-auto aspect-[16/9] w-4/5 sm:w-3/5"
            />
          </motion.div>
        </div>

        {/* Değerler */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {values.map((value, index) => (
            <div
              key={value}
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
              className="group relative flex items-center gap-5 border border-pine/10 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-tan/40 hover:shadow-[0_14px_44px_-12px_rgba(212,163,115,0.25)]"
            >
              <span className="spot-card pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="font-mono text-xs text-tan/60">
                {String(index + 1).padStart(2, "0")}
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 shrink-0 text-tan drop-shadow-[0_0_8px_rgba(212,163,115,0.5)] transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span className="text-base font-medium text-pine">{value}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
