"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { easeOutExpo } from "@/lib/animations";

/**
 * Mobilde kaydırınca beliren sabit alt eylem çubuğu:
 * Hemen Ara + Teklif Al. Sayfa sonundaki iletişim bölümüne
 * yaklaşınca kendini gizler.
 */
export default function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const nearBottom =
        window.innerHeight + y >
        document.documentElement.scrollHeight - 900;
      setVisible(y > 480 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 96 }}
          animate={{ y: 0 }}
          exit={{ y: 96 }}
          transition={{ duration: 0.45, ease: easeOutExpo }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-tan/20 bg-ink/95 px-4 py-3 backdrop-blur-lg md:hidden"
        >
          <div className="mx-auto flex max-w-md items-center gap-3">
            <a
              href="tel:+905434329951"
              className="flex flex-1 items-center justify-center gap-2 border border-tan/40 px-4 py-3 text-xs font-bold uppercase tracking-widest text-tan transition-colors duration-300 active:bg-tan active:text-ink"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Hemen Ara
            </a>
            <a
              href="#iletisim"
              className="btn-sheen flex flex-1 items-center justify-center bg-tan px-4 py-3 text-xs font-bold uppercase tracking-widest text-ink"
            >
              Teklif Al <span className="ml-1">→</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
