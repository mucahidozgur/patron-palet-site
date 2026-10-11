import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import Logo from './Logo'
import { nav } from '../data/content'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // Kaydırınca header'ı buzlu cam efektiyle karart
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Mobil menü: açıkken sayfa kaydırmayı kilitle, ESC ile kapat
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    if (open) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKey)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled || open
          ? 'border-white/5 bg-ink/85 shadow-lg shadow-black/25 backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#anasayfa" aria-label="TR Patron Palet — Anasayfa">
          <Logo className="h-11 w-auto sm:h-12" />
        </a>

        {/* Masaüstü menü */}
        <nav aria-label="Ana menü" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            href="#iletisim"
            className="btn-primary"
          >
            Teklif Al <ArrowRight size={16} />
          </motion.a>
        </div>

        {/* Mobil menü düğmesi */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobil-menu"
          aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
          className="rounded-lg p-2 text-silver transition-colors hover:text-gold lg:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobil menü paneli */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobil-menu"
            aria-label="Mobil menü"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="space-y-1 border-t border-white/5 px-4 pb-6 pt-3 sm:px-6">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-sm font-medium text-silver transition-colors hover:bg-white/5 hover:text-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <a href="#iletisim" onClick={() => setOpen(false)} className="btn-primary w-full">
                  Teklif Al <ArrowRight size={16} />
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
