import { Mail, MapPin, Phone } from 'lucide-react'
import Logo from './Logo'
import { footer, nav, products, site } from '../data/content'

export default function Footer() {
  return (
    <footer className="relative border-t border-navy/10 bg-ink-2">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Marka */}
          <div className="lg:col-span-4">
            <Logo className="h-14 w-auto" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-mist">{footer.tagline}</p>
            <div className="mt-6 flex gap-3">
              {footer.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-navy/10 bg-navy/5 text-mist transition-all duration-300 hover:border-gold/50 hover:bg-gold/10 hover:text-gold-deep"
                >
                  <social.icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Hızlı linkler */}
          <nav aria-label="Hızlı linkler" className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-deep">
              Kurumsal
            </h3>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-mist transition-colors hover:text-gold-deep">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Ürünler */}
          <nav aria-label="Ürünler" className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-deep">
              Ürünler
            </h3>
            <ul className="mt-5 space-y-3">
              {products.items.map((product) => (
                <li key={product.title}>
                  <a href="#urunler" className="text-sm text-mist transition-colors hover:text-gold-deep">
                    {product.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* İletişim */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-deep">
              İletişim
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-mist">
              <li className="flex gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold-deep/80" />
                <span>{site.address}</span>
              </li>
              <li className="flex gap-2.5">
                <Phone size={16} className="mt-0.5 shrink-0 text-gold-deep/80" />
                <a href={site.phoneHref} className="transition-colors hover:text-gold-deep">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Mail size={16} className="mt-0.5 shrink-0 text-gold-deep/80" />
                <a href={site.emailHref} className="transition-colors hover:text-gold-deep">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-navy/10 pt-7 sm:flex-row">
          <p className="text-xs text-mist/60">
            © {new Date().getFullYear()} {site.name}. Tüm hakları saklıdır.
          </p>
          <p className="font-display text-xs italic text-gold-deep/70">“{site.sloganText}”</p>
        </div>
      </div>
    </footer>
  )
}
