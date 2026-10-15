"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    q: "Paletlerde ısıl işlem (ISPM 15) uygulanıyor mu?",
    a: "Evet. İhracat paletlerimizde ISPM 15 standardına uygun ısıl işlem uygulanır ve sertifikalandırılır.",
  },
  {
    q: "İkinci el paletler ne durumda teslim edilir?",
    a: "2. el paletlerimiz kullanıma hazır ve taşıma kapasitesi kontrol edilmiş halde stoktan teslim edilir.",
  },
  {
    q: "Özel ölçüde palet üretimi yapıyor musunuz?",
    a: "Evet. Müşteri beklentileri doğrultusunda özel ve standart ölçülerde palet üretimi yapmaktayız.",
  },
  {
    q: "Teslimat süresi nedir?",
    a: "Stok ürünlerde hızlı teslimat; özel üretimlerde belirlenen zaman çizelgesi dahilinde teslimat yapılır.",
  },
  {
    q: "Türkiye dışına gönderim yapıyor musunuz?",
    a: "Evet. Ankara'dan Türkiye'nin her yerine ve tüm dünyaya hizmet vermekteyiz.",
  },
];

export default function Faq() {
  return (
    <section id="sss" className="bg-surface py-32 md:py-40">
      <div className="container-editorial max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="label-industrial mb-6">Sık Sorulan Sorular</p>
          <h2 className="heading-display text-3xl text-white md:text-5xl">
            Merak Edilenler
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <details className="group border border-ivory/10 bg-ink transition-colors duration-300 hover:border-cyan/30">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 font-medium text-ivory transition-colors duration-300 group-open:text-cyan">
                  {faq.q}
                  <span className="text-cyan transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="border-t border-ivory/5 p-6 pt-5 text-sm font-light leading-relaxed text-ivory/60">
                  {faq.a}
                </p>
              </details>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
