import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-tan/10 bg-ink">
      <div className="container-editorial py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <span className="flex items-center gap-3 text-lg md:text-xl">
              <span className="tr-badge shrink-0">TR</span>
              <span className="logo-shimmer bg-gradient-to-r from-tan via-pine to-tan bg-clip-text font-display font-bold tracking-[0.2em] text-transparent drop-shadow-[0_0_16px_rgba(212,163,115,0.45)]">
                PATRON PALET
              </span>
            </span>
            <p className="mt-4 max-w-xs text-base font-light text-pine/70">
              Sıfır ahşap palet üretimi, ikinci el palet alım satımı ve ihracat
              sandığı imalatı.
            </p>
          </div>

          <div>
            <p className="label-industrial mb-6 text-sm">Hızlı Linkler</p>
            <ul className="space-y-3 text-base text-pine/75">
              <li>
                <Link
                  href="#urunler"
                  className="transition-colors duration-300 hover:text-tan"
                >
                  Ürünler
                </Link>
              </li>
              <li>
                <Link
                  href="#hizmetler"
                  className="transition-colors duration-300 hover:text-tan"
                >
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link
                  href="#hakkimizda"
                  className="transition-colors duration-300 hover:text-tan"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href="#sss"
                  className="transition-colors duration-300 hover:text-tan"
                >
                  Sık Sorulan Sorular
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="label-industrial mb-6 text-sm">İletişim</p>
            <ul className="space-y-3 text-base text-pine/75">
              <li>
                <a
                  href="tel:+905434329951"
                  className="transition-colors duration-300 hover:text-tan"
                >
                  +90 (543) 432 99 51
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@patronpalet.com"
                  className="transition-colors duration-300 hover:text-tan"
                >
                  info@patronpalet.com
                </a>
              </li>
              <li>Ankara — Türkiye'den tüm dünyaya</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-pine/10 pt-8 pb-24 text-center text-sm text-pine/55 md:pb-8">
          © 2026 Patron Palet. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
