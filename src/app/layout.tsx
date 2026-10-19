import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "TR Patron Palet — Sıfır Palet Üretimi & İkinci El Palet Alım Satımı",
  description:
    "Ankara'dan Türkiye'ye ve tüm dünyaya: sıfır ahşap palet üretimi, ikinci el palet alım satımı ve ISPM 15 uyumlu ihracat sandığı imalatı.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${orbitron.variable} ${inter.variable}`}
    >
      <body className="bg-ink text-pine font-sans antialiased">
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}
