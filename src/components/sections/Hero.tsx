"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { useIntroDone } from "@/components/layout/IntroProvider";
import { easeOutExpo, wordContainer, wordFadeUp } from "@/lib/animations";

const CHIPS = [
  "Sıfır Palet Üretimi",
  "2. El Alım Satım",
  "İhracat Sandığı",
  "Ankara'dan Dünyaya",
];

const fade = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: easeOutExpo, delay },
  },
});

export default function Hero() {
  const introDone = useIntroDone();

  // Fareyi takip eden bronz ışık
  const mx = useMotionValue(-600);
  const my = useMotionValue(-600);
  const sx = useSpring(mx, { stiffness: 55, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 55, damping: 18, mass: 0.6 });
  const spotlight = useTransform([sx, sy], ([x, y]: number[]) =>
    `radial-gradient(520px circle at ${x}px ${y}px, rgba(212,163,115,0.13), transparent 70%)`
  );

  // Görsel katmanında fareye tepki veren hafif paralaks
  const parallaxX = useTransform(sx, (v) =>
    typeof window === "undefined"
      ? 0
      : ((v - window.innerWidth / 2) / window.innerWidth) * -16
  );
  const parallaxY = useTransform(sy, (v) =>
    typeof window === "undefined"
      ? 0
      : ((v - window.innerHeight / 2) / window.innerHeight) * -12
  );

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-ink"
      onMouseMove={(event) => {
        mx.set(event.clientX);
        my.set(event.clientY);
      }}
    >
      {/* Görsel katmanı: gorsel5 — yumuşak oturma zoom'u + fare paralaksı */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: easeOutExpo }}
        style={{ x: parallaxX, y: parallaxY }}
        className="absolute -inset-[3%]"
      >
        <Image
          src="/images/gorsel5.jpg"
          alt="Ahşap palet yığını"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center] brightness-[1.08] saturate-[1.12]"
        />
      </motion.div>

      {/* Okunabilirlik katmanları — görseli boğmayan hafif geçişler.
          Solda metin için koyu, sağda görsel neredeyse açık. */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/50 to-ink/10 md:from-ink/85 md:via-ink/35 md:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-ink" />
      <div className="tech-grid absolute inset-0 opacity-20" />
      <div className="grain absolute inset-0 opacity-[0.08] mix-blend-overlay" />

      {/* Sıcak ışık hüzmesi */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-tan/10 to-transparent mix-blend-soft-light" />

      {/* İnce sahne çerçevesi */}
      <div className="pointer-events-none absolute inset-4 z-10 hidden border border-white/10 md:block lg:inset-6" />

      {/* Fare spot ışığı */}
      <motion.div
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      {/* Kenar HUD yazısı */}
      <motion.span
        variants={fade(1.2)}
        initial="hidden"
        animate={introDone ? "visible" : "hidden"}
        className="absolute right-10 top-1/2 hidden -translate-y-1/2 font-mono text-[10px] uppercase tracking-[0.45em] text-white/35 [writing-mode:vertical-rl] lg:block"
        aria-hidden="true"
      >
        Ankara — TR · Est. MMXXVI
      </motion.span>

      <div className="container-editorial relative z-10 pt-40 pb-28">
        <motion.div
          variants={fade(0.15)}
          initial="hidden"
          animate={introDone ? "visible" : "hidden"}
          className="mb-8 flex items-center gap-4"
        >
          <span className="tr-badge text-sm">TR</span>
          <p className="label-industrial">Ahşap Palet Üretimi — MMXXVI</p>
        </motion.div>

        <motion.h1
          variants={wordContainer}
          initial="hidden"
          animate={introDone ? "visible" : "hidden"}
          className="heading-display text-4xl leading-[1.1] text-white md:text-6xl lg:text-7xl"
        >
          <motion.span variants={wordFadeUp} className="inline-block">
            Patron
          </motion.span>{" "}
          <motion.span
            variants={wordFadeUp}
            className="logo-shimmer inline-block bg-gradient-to-r from-tan to-caramel bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(212,163,115,0.4)]"
          >
            Palet
          </motion.span>
        </motion.h1>

        <motion.p
          variants={fade(0.45)}
          initial="hidden"
          animate={introDone ? "visible" : "hidden"}
          className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-white/85 md:text-xl"
        >
          Sıfır ahşap palet üretimi, ikinci el palet alım satımı ve ihracat
          sandığı imalatı. En uygun, en doğru ve en ekonomik çözümler için tek
          adres.
        </motion.p>

        <motion.div
          variants={fade(0.6)}
          initial="hidden"
          animate={introDone ? "visible" : "hidden"}
          className="mt-12 flex flex-wrap items-center gap-6"
        >
          <motion.a
            whileTap={{ scale: 0.96 }}
            href="#iletisim"
            className="btn-sheen bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest2 text-ink transition-all duration-300 hover:bg-caramel hover:shadow-[0_0_32px_rgba(212,163,115,0.5)]"
          >
            Teklif Al <span className="ml-1">→</span>
          </motion.a>
          <motion.a
            whileTap={{ scale: 0.96 }}
            href="#urunler"
            className="link-sweep text-sm font-semibold uppercase tracking-widest2 text-white transition-colors duration-300 hover:text-tan"
          >
            Ürünleri İncele
          </motion.a>
        </motion.div>

        <motion.div
          variants={fade(0.8)}
          initial="hidden"
          animate={introDone ? "visible" : "hidden"}
          className="mt-16 flex flex-wrap gap-3"
        >
          {CHIPS.map((chip) => (
            <span
              key={chip}
              className="border border-white/15 bg-ink/55 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm transition-colors duration-300 hover:border-tan hover:text-tan"
            >
              {chip}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Aşağı kaydır göstergesi */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <motion.div
          variants={fade(1.1)}
          initial="hidden"
          animate={introDone ? "visible" : "hidden"}
          className="flex flex-col items-center gap-3"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/40">
            Kaydır
          </span>
          <span className="flex h-10 w-6 items-start justify-center rounded-full border border-tan/40 p-1.5">
            <span className="scroll-dot h-1.5 w-1.5 rounded-full bg-tan" />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
