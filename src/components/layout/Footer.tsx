import Link from "next/link";

export default function Footer() {
  return (
    <footer id="iletisim" className="bg-ink">
      <div className="border-t border-copper/30">
        <div className="container-editorial py-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div>
              <p className="font-serif text-xl tracking-wider text-ivory">
                PATRON PALET
              </p>
              <p className="mt-4 max-w-xs text-sm font-light text-ivory/50">
                Dayanıklı, sürdürülebilir ve standartlara uygun ahşap palet
                üretimi.
              </p>
            </div>

            <div>
              <p className="label-industrial mb-6">Hızlı Linkler</p>
              <ul className="space-y-3 text-sm text-ivory/60">
                <li>
                  <Link
                    href="#urunler"
                    className="transition-colors duration-300 hover:text-copper"
                  >
                    Ürünler
                  </Link>
                </li>
                <li>
                  <Link
                    href="#manifesto"
                    className="transition-colors duration-300 hover:text-copper"
                  >
                    Manifesto
                  </Link>
                </li>
                <li>
                  <Link
                    href="#iletisim"
                    className="transition-colors duration-300 hover:text-copper"
                  >
                    İletişim
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="label-industrial mb-6">İletişim Bilgileri</p>
              <ul className="space-y-3 text-sm text-ivory/60">
                <li>Fabrika Cad. No: 12, İkitelli OSB, İstanbul</li>
                <li>+90 212 000 00 00</li>
                <li>info@patronpalet.com</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 border-t border-ivory/5 pt-8 text-center text-xs text-ivory/40">
            © 2025 Patron Palet. Tüm hakları saklıdır.
          </div>
        </div>
      </div>
    </footer>
  );
}
