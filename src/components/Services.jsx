import { m } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { services } from '../data/content'
import { fadeUpDelay } from '../lib/motion'

export default function Services() {
  return (
    <section id="hizmetler" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={services.eyebrow}
          title={services.title}
          highlight={services.highlight}
          description={services.description}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.items.map((service, i) => (
            <m.div
              key={service.title}
              variants={fadeUpDelay(i * 0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.95 }}
              className="hover-glow glass group rounded-2xl p-8 text-center transition-colors duration-300 hover:border-gold/30"
            >
              <span className="icon-tile mx-auto transition-transform duration-300 group-hover:scale-110">
                <service.icon size={24} strokeWidth={1.75} />
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold text-silver">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{service.text}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}
