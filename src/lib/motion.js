// Ortak Framer Motion varyantları ve viewport ayarları

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
}

/** Kart gridleri için sıralı (stagger) gecikmeli fade-up */
export const fadeUpDelay = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  },
})

/** Ana (hero) bölümü için kademeli giriş */
export const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.15 },
  },
}

export const viewportOnce = { once: true, amount: 0.25 }
