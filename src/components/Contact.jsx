import { useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { Send } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { contact, footer } from '../data/content'
import { fadeUp } from '../lib/motion'

const EMPTY_FORM = { ad: '', soyad: '', email: '', mesaj: '' }

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [status, setStatus] = useState('idle') // idle | sending | success

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    // TODO: Gerçek entegrasyon (API / e-posta servisi) buraya bağlanacak.
    setTimeout(() => setStatus('success'), 1100)
  }

  const resetForm = () => {
    setForm(EMPTY_FORM)
    setStatus('idle')
  }

  return (
    <section id="iletisim" className="relative overflow-hidden bg-ink-2 py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute right-[-12rem] top-[-10rem] h-[26rem] w-[26rem] rounded-full bg-gold/[0.05] blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={contact.eyebrow}
          title={contact.title}
          highlight={contact.highlight}
          description={contact.description}
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Sol: iletişim bilgileri */}
          <m.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="lg:col-span-2"
          >
            <div className="glass h-full rounded-2xl p-7 sm:p-8">
              <h3 className="font-display text-xl font-semibold text-silver">
                İletişim Bilgileri
              </h3>
              <ul className="mt-7 space-y-6">
                {contact.infos.map((info) => (
                  <li key={info.label} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold-deep">
                      <info.icon size={19} strokeWidth={1.75} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-mist/70">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="mt-1 block text-sm font-medium text-silver transition-colors hover:text-gold-deep"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm font-medium leading-relaxed text-silver">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-navy/10 pt-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-mist/70">
                  Bizi Takip Edin
                </p>
                <div className="mt-3 flex gap-3">
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
            </div>
          </m.div>

          {/* Sağ: iletişim formu */}
          <m.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="lg:col-span-3"
          >
            {/* "Teklif Al" butonlarının hedefi: formun kendisi */}
            <div id="teklif-form" className="glass rounded-2xl p-7 sm:p-9">
              <AnimatePresence mode="wait" initial={false}>
                {status === 'success' ? (
                  /* Başarı ekranı — çizilen onay animasyonu */
                  <m.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    role="status"
                    className="flex flex-col items-center justify-center py-14 text-center"
                  >
                    <svg viewBox="0 0 52 52" className="h-20 w-20" aria-hidden="true">
                      <m.circle
                        cx="26"
                        cy="26"
                        r="24"
                        fill="none"
                        stroke="#00a5ae"
                        strokeWidth="1.5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                      />
                      <m.path
                        d="M14 27l8 8 16-17"
                        fill="none"
                        stroke="#007f87"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
                      />
                    </svg>
                    <h3 className="mt-6 font-display text-2xl font-semibold text-silver">
                      {contact.success.title}
                    </h3>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-mist">
                      {contact.success.text}
                    </p>
                    <button type="button" onClick={resetForm} className="btn-outline mt-8">
                      Yeni Mesaj Gönder
                    </button>
                  </m.div>
                ) : (
                  <m.form
                    key="form"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.4 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="ad"
                          className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-mist"
                        >
                          Ad <span className="text-gold">*</span>
                        </label>
                        <input
                          id="ad"
                          name="ad"
                          type="text"
                          required
                          autoComplete="given-name"
                          placeholder="Adınız"
                          value={form.ad}
                          onChange={handleChange}
                          className="input-field cursor-text"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="soyad"
                          className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-mist"
                        >
                          Soyad <span className="text-gold">*</span>
                        </label>
                        <input
                          id="soyad"
                          name="soyad"
                          type="text"
                          required
                          autoComplete="family-name"
                          placeholder="Soyadınız"
                          value={form.soyad}
                          onChange={handleChange}
                          className="input-field cursor-text"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-mist"
                      >
                        E-posta <span className="text-gold">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="ornek@firma.com"
                        value={form.email}
                        onChange={handleChange}
                        className="input-field cursor-text"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="mesaj"
                        className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-mist"
                      >
                        Mesaj <span className="text-gold">*</span>
                      </label>
                      <textarea
                        id="mesaj"
                        name="mesaj"
                        rows="5"
                        required
                        placeholder="Palet ihtiyacınız, ölçüler ve adet bilgisi..."
                        value={form.mesaj}
                        onChange={handleChange}
                        className="input-field resize-y cursor-text"
                      />
                    </div>

                    <p className="text-xs text-mist/60">* ile işaretli alanlar zorunludur.</p>

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="btn-primary w-full disabled:cursor-wait disabled:opacity-60 sm:w-auto"
                    >
                      {status === 'sending' ? 'Gönderiliyor…' : 'Mesajı Gönder'}
                      {status !== 'sending' && <Send size={16} />}
                    </button>
                  </m.form>
                )}
              </AnimatePresence>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  )
}
