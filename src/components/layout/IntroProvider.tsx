"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import LogoIntro from "@/components/ui/LogoIntro";

const IntroContext = createContext(false);

/** Giriş animasyonu (logo sahnesi) bitince `true` olur; Header/Hero buna göre başlar. */
export function useIntroDone() {
  return useContext(IntroContext);
}

export default function IntroProvider({ children }: { children: ReactNode }) {
  const [introDone, setIntroDone] = useState(false);

  const handleComplete = useCallback(() => setIntroDone(true), []);

  // Giriş süresince sayfa kaydırmasını kilitle
  useEffect(() => {
    if (introDone) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [introDone]);

  return (
    <IntroContext.Provider value={introDone}>
      {/* Giriş süresince sayfa içeriği etkileşime kapalı */}
      <div inert={!introDone}>{children}</div>
      {!introDone && <LogoIntro onComplete={handleComplete} />}
    </IntroContext.Provider>
  );
}
