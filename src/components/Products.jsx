import { m } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { products } from '../data/content'
import { fadeUpDelay } from '../lib/motion'
import { ensureSectionScroll } from '../lib/scroll'

/**
 * Ürün kartı: hover'da yukarı kalkma, altın parlama
 * ve fareyi takip eden ışık (spotlight) efekti.
 */
function ProductCard({ product, index }) {
  const Icon = product.icon

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <m.article
      variants={fadeUpDelay((index % 3) * 0.08)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -6 }}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden rounded-2xl border border-navy/10 bg-white/80 p-7 backdrop-blur-md transition-colors duration-300 hover:border-gold/40"
    >
      {/* Fareyi takip eden turkuaz ışık */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), rgba(0,165,174,0.14), transparent 65%)',
        }}
      />
      {/* Turkuaz kenarlık parlaması */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          boxShadow:
            'inset 0 0 0 1px rgba(0,165,174,0.3), 0 18px 50px -18px rgba(0,165,174,0.4)',
        }}
      />

      <div className="relative">
        <span className="icon-tile transition-transform duration-300 group-hover:scale-110">
          <Icon size={22} strokeWidth={1.75} />
        </span>
        <h3 className="mt-5 font-display text-xl font-semibold text-silver">{product.title}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-mist">{product.text}</p>
        <a
          href="#teklif-form"
          onClick={() => ensureSectionScroll('#teklif-form')}
          className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-transparent transition-all duration-300 group-hover:text-gold-deep"
        >
          Teklif Al
          <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </m.article>
  )
}

export default function Products() {
  return (
    <section id="urunler" className="relative bg-ink-2 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={products.eyebrow}
          title={products.title}
          highlight={products.highlight}
          description={products.description}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.items.map((product, i) => (
            <ProductCard key={product.title} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
