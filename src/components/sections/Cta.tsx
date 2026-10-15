"use client";

import { motion } from "framer-motion";

export default function Cta() {
  return (
    <section id="iletisim" className="bg-ink py-32 md:py-40">
      <div className="container-editorial">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="tech-grid relative overflow-hidden border border-orange/20 bg-surface p-10 text-center md:p-20"
        >
          <div className="glow-pulse pointer-events-none absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-orange/10 blur-[100px]" />

          <p className="label-industrial relative mb-6">İletişim</p>
          <h2 className="heading-display relative text-3xl text-orange md:text-5xl">
            Projeniz İçin Teklif Alın
          </h2>
          <p className="relative mx-auto mt-6 max-w-xl font-light leading-relaxed text-ivory/60">
            En uygun, en doğru ve en ekonomik çözümler için bizimle iletişime
            geçin. Ankara'dan Türkiye'ye ve tüm dünyaya hizmet veriyoruz.
          </p>

          <div className="relative mt-12 flex flex-wrap items-center justify-center gap-6">
            <a
              href="tel:+905434329951"
              className="bg-orange px-8 py-4 text-sm font-bold uppercase tracking-widest2 text-ink transition-all duration-300 hover:bg-amber hover:shadow-[0_0_32px_rgba(255,106,0,0.45)]"
            >
              +90 (543) 432 99 51
            </a>
            <a
              href="mailto:info@patronpalet.com"
              className="border border-orange/40 px-8 py-4 text-sm font-bold uppercase tracking-widest2 text-orange transition-all duration-300 hover:bg-orange hover:text-ink hover:shadow-[0_0_24px_rgba(255,106,0,0.4)]"
            >
              E-posta Gönder
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
