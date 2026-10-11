/**
 * Navigasyon duman testi — gerçek tarayıcıda (Edge/Chromium) masaüstü +
 * mobil emülasyonda bölüm yönlendirmelerini doğrular.
 *
 * Kullanım: node tests/nav.mjs [URL]
 * (URL verilmezse canlı site test edilir)
 */
import { chromium } from 'playwright-core'

const URL = process.argv[2] || 'https://tr-patron-palet.vercel.app/'
const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'

const DESKTOP = { viewport: { width: 1280, height: 800 } }
const ANDROID = {
  viewport: { width: 393, height: 851 }, // Pixel 5
  isMobile: true,
  hasTouch: true,
  deviceScaleFactor: 2.75,
  userAgent:
    'Mozilla/5.0 (Linux; Android 13; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36',
}
const IPHONE = {
  viewport: { width: 390, height: 844 }, // iPhone 12
  isMobile: true,
  hasTouch: true,
  deviceScaleFactor: 3,
  userAgent:
    'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
}

const SECTIONS = ['#anasayfa', '#hakkimizda', '#urunler', '#hizmetler', '#referanslar', '#iletisim']

let pass = 0
let fail = 0
const check = (ok, name, detail = '') => {
  console.log(`${ok ? '  PASS' : '  FAIL'}  ${name}${detail ? ` — ${detail}` : ''}`)
  ok ? pass++ : fail++
}

/** Hedef bölüm, sabit header altına yerleşmiş mi? */
const landed = (page, href) =>
  page.evaluate((id) => {
    const el = document.getElementById(id)
    if (!el) return { ok: false, detail: 'hedef bölüm yok' }
    const r = el.getBoundingClientRect()
    const doc = document.documentElement
    return {
      ok: r.top >= -8 && r.top <= window.innerHeight * 0.9,
      detail: `top=${Math.round(r.top)}px scrollY=${Math.round(window.scrollY)} maxY=${Math.round(
        doc.scrollHeight - window.innerHeight
      )}`,
    }
  }, href.slice(1))

/**
 * Yumuşak kaydırmanın tamamlanmasını bekle: 1000 ms sonra ölç, hedefe
 * varılmadıysa (uzun kaydırmalar) 1200 ms daha ver ve son durumu döndür.
 */
const settleLand = async (page, href) => {
  await page.waitForTimeout(1000)
  let l = await landed(page, href)
  if (!l.ok) {
    await page.waitForTimeout(1200)
    l = await landed(page, href)
  }
  return l
}

const hScroll = (page) =>
  page.evaluate(() => ({
    ok: document.documentElement.scrollWidth <= window.innerWidth + 1,
    detail: `scrollWidth=${document.documentElement.scrollWidth} innerWidth=${window.innerWidth}`,
  }))

async function testDesktop(browser) {
  console.log('\n== MASUSTU (1280x800) ==')
  const ctx = await browser.newContext(DESKTOP)
  const page = await ctx.newPage()
  await page.goto(URL, { waitUntil: 'networkidle', timeout: 30000 })

  const hs = await hScroll(page)
  check(hs.ok, 'Yatay taşma yok', hs.detail)

  for (const href of SECTIONS.slice(1)) {
    await page.evaluate(() => window.scrollTo(0, 0))
    await page.waitForTimeout(250)
    await page.click(`header nav[aria-label="Ana menü"] a[href="${href}"]`)
    const hash = await page.evaluate(() => location.hash)
    const l = await settleLand(page, href)
    check(hash === href && l.ok, `Menü -> ${href}`, `hash=${hash} ${l.detail}`)
  }

  // Aynı hash'e ikinci tıklama: tarayıcı kendi başına kaydırmaz,
  // güvenlik ağı devreye girmeli
  await page.evaluate(() => window.scrollTo(0, 0))
  await page.waitForTimeout(250)
  await page.click('header nav[aria-label="Ana menü"] a[href="#hakkimizda"]')
  const l = await settleLand(page, '#hakkimizda')
  check(l.ok, 'Aynı hash tekrarı -> #hakkimizda', l.detail)

  await ctx.close()
}

async function testMobile(browser, name, opts) {
  console.log(`\n== MOBIL (${name}) ==`)
  const ctx = await browser.newContext(opts)
  const page = await ctx.newPage()
  await page.goto(URL, { waitUntil: 'networkidle', timeout: 30000 })

  const hs = await hScroll(page)
  check(hs.ok, 'Yatay taşma yok', hs.detail)

  // Bölümler mevcut mu
  const sectionsOk = await page.evaluate(() =>
    ['anasayfa', 'hakkimizda', 'urunler', 'hizmetler', 'referanslar', 'iletisim'].every((id) =>
      Boolean(document.getElementById(id))
    )
  )
  check(sectionsOk, 'Tüm bölümler mevcut')

  // Hero başlığı ekrana sığıyor mu
  const heroOk = await page.evaluate(() => {
    const r = document.querySelector('h1').getBoundingClientRect()
    return r.left >= -2 && r.right <= window.innerWidth + 2
  })
  check(heroOk, 'Hero başlığı taşmıyor')

  for (const href of SECTIONS.slice(1)) {
    await page.evaluate(() => window.scrollTo(0, 0))
    await page.waitForTimeout(250)
    await page.tap('button[aria-label="Menüyü aç"]')
    await page.waitForTimeout(500)
    await page.tap(`#mobil-menu ul > li > a[href="${href}"]`)
    await page.waitForTimeout(1000)
    const state = await page.evaluate(() => {
      const menu = document.querySelector('#mobil-menu')
      return {
        menuGone: !menu || menu.getBoundingClientRect().height < 2,
        hash: location.hash,
        headerTop: document.querySelector('header').getBoundingClientRect().top,
      }
    })
    check(state.menuGone, `Menü kapandı -> ${href}`)
    check(state.headerTop === 0, `Header sabit kaldı -> ${href}`, `top=${state.headerTop}`)
    const l = await settleLand(page, href)
    check(state.hash === href && l.ok, `Bölüme gitti -> ${href}`, `hash=${state.hash} ${l.detail}`)
  }

  // Aynı hash tekrarı (mobil): menüyü yeniden açıp aynı bölüme tıklama
  await page.evaluate(() => window.scrollTo(0, 0))
  await page.waitForTimeout(250)
  await page.tap('button[aria-label="Menüyü aç"]')
  await page.waitForTimeout(500)
  await page.tap('#mobil-menu ul > li > a[href="#hakkimizda"]')
  const l2 = await settleLand(page, '#hakkimizda')
  check(l2.ok, 'Aynı hash tekrarı (mobil) -> #hakkimizda', l2.detail)

  // "Teklif Al" butonu -> İletişim
  await page.evaluate(() => window.scrollTo(0, 0))
  await page.waitForTimeout(250)
  await page.tap('button[aria-label="Menüyü aç"]')
  await page.waitForTimeout(500)
  await page.tap('#mobil-menu a.btn-primary')
  const l3 = await settleLand(page, '#iletisim')
  check(l3.ok, 'Teklif Al -> #iletisim', l3.detail)

  await ctx.close()
}

const browser = await chromium.launch({
  executablePath: EDGE,
  headless: true,
})

try {
  await testDesktop(browser)
  await testMobile(browser, 'Android / Pixel 5', ANDROID)
  await testMobile(browser, 'iPhone 12 (Safari UA)', IPHONE)
} finally {
  await browser.close()
}

console.log(`\nSONUC: ${pass} PASS / ${fail} FAIL`)
process.exit(fail > 0 ? 1 : 0)
