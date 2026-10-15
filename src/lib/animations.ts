import type { Variants } from "framer-motion";

export const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export const wordContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    transition: { delayChildren: 0.3, staggerChildren: 0.15 },
  },
};

export const wordFadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
