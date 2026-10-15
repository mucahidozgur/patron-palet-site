import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-orange/10 bg-ink">
      <div className="container-editorial py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <span className="logo-shimmer bg-gradient-to-r from-orange via-amber to-orange bg-clip-text font-display text-lg font-bold tracking-[0.2em] text-transparent drop-shadow-[0_0_14px_rgba(255,106,0,0.35)]">
              PATRON PALET
            </span>
            <p className="mt-4 max-w-xs text-base font-light text-ivory/60">
              Sıfır ahşap palet üretimi, ikinci el palet alım satımı ve ihracat
              sandığı imalatı.
            </p>
          </div>

          <div>
            <p className="label-industrial mb-6 text-sm">Hızlı Linkler</p>
            <ul className="space-y-3 text-base text-ivory/70">
              <li>
                <Link
                  href="#urunler"
                  className="transition-colors duration-300 hover:text-orange"
                >
                  Ürünler
                </Link>
              </li>
              <li>
                <Link
                  href="#hizmetler"
                  className="transition-colors duration-300 hover:text-orange"
                >
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link
                  href="#hakkimizda"
                  className="transition-colors duration-300 hover:text-orange"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href="#sss"
                  className="transition-colors duration-300 hover:text-orange"
                >
                  Sık Sorulan Sorular
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="label-industrial mb-6 text-sm">İletişim</p>
            <ul className="space-y-3 text-base text-ivory/70">
              <li>
                <a
                  href="tel:+905434329951"
                  className="transition-colors duration-300 hover:text-orange"
                >
                  +90 (543) 432 99 51
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@patronpalet.com"
                  className="transition-colors duration-300 hover:text-orange"
                >
                  info@patronpalet.com
                </a>
              </li>
              <li>Ankara — Türkiye'den tüm dünyaya</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-ivory/5 pt-8 text-center text-sm text-ivory/50">
          © 2026 Patron Palet. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
