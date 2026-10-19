"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { easeOutExpo } from "@/lib/animations";

const HOLD_MS = 3000; // Logo merkezde 3 saniye kalır
const FLIGHT_MS = 850; // Ardından sol üstteki yerine uçar

type Target = { x: number; y: number; scale: number };

/**
 * Açılış sahnesi: logo ekranın ortasında belirir, 3 saniye durur,
 * sonra header'daki konumuna küçülerek uçar ve sahne dağılır.
 */
export default function LogoIntro({ onComplete }: { onComplete: () => void }) {
  const reduced = useReducedMotion();
  const lockupRef = useRef<HTMLDivElement>(null);
  const [target, setTarget] = useState<Target | null>(null);

  // Hareket azaltma tercihi varsa giriş sahnesini atla
  useEffect(() => {
    if (!reduced) return;
    const t = setTimeout(onComplete, 400);
    return () => clearTimeout(t);
  }, [reduced, onComplete]);

  // 3 saniye dolunca header logosunun (sol üst) koordinatını hesapla
  useEffect(() => {
    if (reduced || !lockupRef.current) return;
    const t = setTimeout(() => {
      const pad =
        window.innerWidth >= 1024 ? 80 : window.innerWidth >= 768 ? 48 : 24;
      const left = Math.max((window.innerWidth - 1400) / 2, 0) + pad;
      const top = 20; // header py-5
      const rect = lockupRef.current!.getBoundingClientRect();
      setTarget({ x: left - rect.left, y: top - rect.top, scale: 0.5 });
    }, HOLD_MS);
    return () => clearTimeout(t);
  }, [reduced]);

  // Uçuş bitince sahneyi kapat
  useEffect(() => {
    if (!target) return;
    const t = setTimeout(onComplete, FLIGHT_MS + 120);
    return () => clearTimeout(t);
  }, [target, onComplete]);

  if (reduced) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
      animate={{ opacity: target ? 0 : 1 }}
      transition={{ duration: FLIGHT_MS / 1000, ease: "easeInOut" }}
    >
      {/* Sahne dokusu */}
      <div className="tech-grid absolute inset-0 opacity-60" />
      <div className="grain absolute inset-0 opacity-[0.14]" />
      <div className="glow-pulse pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-tan/10 blur-[120px]" />

      {/* Logo kilidi: header logosunun 2 katı boyutunda (uçuşta 0.5 ölçeklenir) */}
      <motion.div
        ref={lockupRef}
        className="relative flex items-center gap-6"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{
          opacity: 1,
          scale: target ? target.scale : 1,
          x: target ? target.x : 0,
          y: target ? target.y : 0,
        }}
        transition={
          target
            ? { duration: FLIGHT_MS / 1000, ease: [0.65, 0, 0.35, 1] }
            : { duration: 0.6, ease: easeOutExpo }
        }
        style={{ transformOrigin: target ? "top left" : "center" }}
      >
        <Image
          src="/logopatron.jpeg"
          alt=""
          width={88}
          height={88}
          priority
          className="h-[88px] w-[88px] rounded-lg ring-1 ring-tan/50 shadow-[0_0_44px_rgba(212,163,115,0.4)]"
        />
        <div className="flex flex-col gap-3 text-[36px] md:text-[40px]">
          <div className="flex items-center gap-3">
            <span className="tr-badge">TR</span>
            <span className="logo-shimmer bg-gradient-to-r from-tan via-white to-tan bg-clip-text font-display text-[36px] font-bold leading-none tracking-[0.2em] text-transparent drop-shadow-[0_0_24px_rgba(212,163,115,0.45)] md:text-[40px]">
              PATRON PALET
            </span>
          </div>
          <motion.span
            className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/45"
            animate={{ opacity: target ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            Ahşap Palet Üretimi — MMXXVI
          </motion.span>
        </div>
      </motion.div>

      {/* 3 saniyelik dolum hattı */}
      <div className="pointer-events-none absolute bottom-24 left-0 right-0 flex justify-center">
        <motion.span
          className="h-px w-56 bg-gradient-to-r from-transparent via-tan to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1, opacity: target ? 0 : 1 }}
          transition={{
            scaleX: { duration: (HOLD_MS - 200) / 1000, delay: 0.2, ease: "easeInOut" },
            opacity: { duration: 0.3 },
          }}
        />
      </div>
    </motion.div>
  );
}
