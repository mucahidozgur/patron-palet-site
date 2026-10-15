import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Patron Palet — Endüstriyel Ahşap Çözümleri",
  description:
    "Dayanıklı, sürdürülebilir ve standartlara uygun ahşap palet üretimi.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <body className="bg-ink text-ivory font-sans antialiased">
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}
