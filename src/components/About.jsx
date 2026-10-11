import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import Counter from './Counter'
import { about } from '../data/content'
import { fadeUp, fadeUpDelay } from '../lib/motion'

export default function About() {
  return (
    <section id="hakkimizda" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Sol: metin + vizyon/misyon/kalite kartları */}
          <div>
            <SectionHeading
              align="left"
              eyebrow={about.eyebrow}
              title={about.title}
              highlight={about.highlight}
              description={about.description}
            />

            <div className="mt-10 space-y-5">
              {about.items.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="glass group flex gap-5 rounded-2xl p-6 transition-colors duration-300 hover:border-gold/30"
                >
                  <span className="icon-tile shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <item.icon size={22} strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-silver">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-mist">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sağ: animasyonlu istatistikler */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-10 -z-10 rounded-full bg-gold/[0.06] blur-3xl"
            />
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {about.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUpDelay(i * 0.08)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="glass relative overflow-hidden rounded-2xl p-6 text-center transition-colors duration-300 hover:border-gold/30 sm:p-9"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-gold/60 to-transparent"
                  />
                  <div className="font-display text-4xl font-bold text-gold-gradient sm:text-5xl">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-3 text-xs font-medium uppercase tracking-[0.14em] text-mist sm:text-[13px]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
