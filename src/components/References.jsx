import { m } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { references } from '../data/content'
import { fadeUp } from '../lib/motion'

/**
 * Sonsuz kayan marquee satırı.
 * İçerik iki kez tekrarlanır; -50% kaydırma ile kesintisiz döngü sağlanır.
 * Hover'da durur, kenarlarda yumuşak karartma maskesi vardır.
 */
function MarqueeRow({ items, reverse = false }) {
  return (
    <div className="group relative overflow-hidden py-2">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-ink to-transparent sm:w-28"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-ink to-transparent sm:w-28"
      />
      <div
        className={`flex w-max group-hover:[animation-play-state:paused] ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
      >
        {[items, items].map((copy, copyIndex) => (
          <div
            key={copyIndex}
            aria-hidden={copyIndex === 1}
            className="flex items-center"
          >
            {copy.map((item) => (
              <div
                key={item.label}
                className="hover-glow glass mr-4 flex shrink-0 items-center gap-3 rounded-xl px-6 py-4 transition-colors duration-300 hover:border-gold/35"
              >
                <item.icon className="shrink-0 text-gold-deep" size={22} strokeWidth={1.75} />
                <span className="whitespace-nowrap text-sm font-medium text-silver">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function References() {
  return (
    <section id="referanslar" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={references.eyebrow}
          title={references.title}
          highlight={references.highlight}
          description={references.description}
        />
      </div>

      <m.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-14 space-y-4"
      >
        <MarqueeRow items={references.sectors.items} />
        <MarqueeRow items={references.standards.items} reverse />
      </m.div>
    </section>
  )
}
