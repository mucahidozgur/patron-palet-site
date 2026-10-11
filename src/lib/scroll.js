/**
 * Çapa yönlendirmeleri için yardımcılar.
 *
 * Mobil menü açıkken uygulanan kaydırma kilidi (body + html overflow),
 * tarayıcının çapa kaydırmasını yutar — özellikle mobil tarayıcılarda
 * programatik scrollIntoView de kilit kalkmadan çağrılırsa yok sayılır.
 * Bu yüzden kilit, tıklamanın varsayılan davranışından ÖNCE kaldırılır
 * ve en güvenilir yol olan tarayıcının kendi çapa yönlendirmesi kullanılır.
 */

/** Sayfa kaydırma kilidini kaldırır (body + html birlikte). */
export function unlockScroll() {
  document.body.style.overflow = ''
  document.documentElement.style.overflow = ''
}

/** Sabit header yüksekliğini canlı ölçer (kırılım noktalarında değişir). */
const headerOffset = () => (document.querySelector('header')?.offsetHeight ?? 80) + 8

/**
 * Güvenlik ağı: hedef bölüm hâlâ görünürde değilse zorla kaydırır.
 * Aynı hash'e tekrar tıklama gibi durumlarda tarayıcı kendiliğinden
 * kaydırmaz. Devam eden bir yumuşak kaydırmayı bölmemek için iki aşamalı
 * çalışır: önce bekler, sayfa hareket etmiyorsa ve hedefe varılmadıysa
 * ancak o zaman müdahale eder.
 */
export function ensureSectionScroll(href) {
  window.setTimeout(() => {
    const target = document.querySelector(href)
    if (!target) return
    const rect = target.getBoundingClientRect()
    if (rect.top >= -8 && rect.top <= window.innerHeight * 0.9) return

    // Hâlâ varılmadı — sayfa şu an kaymaya devam ediyor mu?
    const y0 = window.scrollY
    window.setTimeout(() => {
      if (Math.abs(window.scrollY - y0) > 2) return // kayma sürüyor, karışma
      const r2 = target.getBoundingClientRect()
      if (r2.top >= -8 && r2.top <= window.innerHeight * 0.9) return
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const top = Math.max(0, r2.top + window.scrollY - headerOffset())
      window.scrollTo({ top, behavior: reduced ? 'auto' : 'smooth' })
    }, 400)
  }, 350)
}
