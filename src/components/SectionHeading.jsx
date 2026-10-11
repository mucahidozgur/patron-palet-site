import { m } from 'framer-motion'
import { fadeUp } from '../lib/motion'

/**
 * Bölüm başlığı: altın "eyebrow" etiketi + serif başlık + açıklama.
 * title / highlight alanlarıyla altın vurgulu başlık oluşturulur.
 */
export default function SectionHeading({ eyebrow, title, highlight, description, align = 'center' }) {
  const centered = align === 'center'
  return (
    <m.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className={`max-w-3xl ${centered ? 'mx-auto text-center' : 'text-left'}`}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-deep">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-silver sm:text-4xl lg:text-[2.75rem]">
        {title}
        {highlight && (
          <>
            {' '}
            <span className="text-gold-gradient">{highlight}</span>
          </>
        )}
      </h2>
      {description && (
        <p className={`mt-5 text-base leading-relaxed text-mist ${centered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </m.div>
  )
}
