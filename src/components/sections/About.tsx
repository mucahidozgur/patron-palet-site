"use client";

import { motion } from "framer-motion";

const values = [
  "Garantili — Kaliteli Hizmet",
  "Kaliteli Ürün — Müşteri Odaklı Çözümler",
  "Zamanında İş — Ürün Teslimi",
];

export default function About() {
  return (
    <section id="hakkimizda" className="bg-ink py-32 md:py-40">
      <div className="container-editorial grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="label-industrial mb-6">Hakkımızda</p>
          <h2 className="heading-display text-3xl text-white md:text-5xl">
            Yılların Tecrübesi,
            <span className="block bg-gradient-to-r from-cyan to-teal bg-clip-text text-transparent">
              Aynı Kalite
            </span>
          </h2>
          <p className="mt-8 font-light leading-relaxed text-ivory/60">
            Alanında uzman, deneyimli kadromuz ile yılların vermiş olduğu
            tecrübe ve birikim sayesinde, müşterilerimize her zaman aynı
            kalitede hizmet vermek için çalışmaktayız.
          </p>
          <p className="mt-6 font-light leading-relaxed text-ivory/60">
            Müşteri beklentileri doğrultusunda özel ve standart palet üretimi
            yaparak tüm isteklerinizi karşılamaktayız. Tüm ahşap palet ürün ve
            hizmetlerimizde garanti ve kalite ile her zaman yanınızdayız.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="space-y-4"
        >
          {values.map((value) => (
            <div
              key={value}
              className="flex items-center gap-5 border border-ivory/10 bg-surface p-6 transition-colors duration-300 hover:border-cyan/40"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 shrink-0 text-cyan"
                aria-hidden="true"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span className="text-base font-medium text-ivory">
                {value}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
