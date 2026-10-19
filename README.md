# PATRON PALET

Ahşap palet üreticisi vitrin sitesi — **sıfır palet üretimi, ikinci el palet alım satımı ve ihracat sandığı imalatı.** Karanlık, teknolojik ve profesyonel estetik; içerik tepeahsappalet.com'dan, tasarım dili cemabi.vercel.app referans alınarak.

## Teknoloji

- **Next.js 16.4.1** (App Router, Turbopack) · **React 19.3** · **TypeScript 5** (strict)
- **Tailwind CSS v4** · **Framer Motion 11** (entrance animasyonları, hide/show header)
- Fontlar: Orbitron (geometrik başlıklar) + Inter (gövde) — `next/font`

## Tasarım Sistemi

| Token | Değer | Kullanım |
|---|---|---|
| `ink` | `#0B0C10` | Koyu lacivert-siyah zemin |
| `surface` | `#12151C` | Bölüm zemini |
| `panel` | `#1F2833` | Kart paneli |
| `ivory` | `#C5C6C7` | Metin |
| `cyan` | `#66FCF1` | Ana vurgu |
| `teal` | `#45A29E` | İkincil vurgu |

Anahtar sınıflar: `.heading-display` (Orbitron 800 uppercase), `.label-industrial` (700 uppercase cyan etiket), `.tech-grid` (teknik çizim zemini), `.container-editorial`.

## Sayfa Yapısı

`Header → Hero → StatsBand → ProductGrid → ShowcaseBand → Services → About → Faq → Cta → Footer`

- **Açılış sahnesi (`LogoIntro`):** logo ekranın ortasında belirir, 3 saniye kalır, ardından header'daki yerine küçülerek uçar (`IntroProvider` ile Header/Hero giriş animasyonları senkronlanır).
- **Header:** aşağı kaydırınca gizlenir, yukarı kaydırınca geri gelir; gradyan metin logo (bronz→beyaz→bronz) + TR rozeti; üst kenarda bronz kaydırma ilerleme çizgisi.
- **Hero:** gorsel5 arka planı, fareyi takip eden bronz spot ışığı, kelime kelime başlık girişi.
- **StatsBand:** görünüme girince sayan rakamlar (81 il, ISPM 15, 3 uzmanlık, %100 garanti).
- **Ürünler:** tipografik spesifikasyon kartları (fotoğrafsız); fareyi takip eden ışıma; kart tıklanınca `ProductModal` açılır (ESC, focus trap, scroll lock).
- **ShowcaseBand:** gorsel2 tam genişlik paralaks bandı + marka cümlesi.
- **Görseller:** gorsel1–6 site sahibi tarafından sağlandı; yerleşim için `public/images/CREDITS.md`.
- **Erişilebilirlik:** WCAG AA kontrast, `MotionConfig reducedMotion="user"`, klavye navigasyonu, `:focus-visible` bronz halka.

## Görseller

Tasarım fotoğrafsız çalışır (tipografik kartlar). `public/images/` altında arşivlenen palet fotoğrafları şu an bileşenlerde kullanılmamaktadır; kullanılacaksa lisanslar için [public/images/CREDITS.md](public/images/CREDITS.md) — CC BY-SA lisanslı olanlar yazar atfı gerektirir.

Yardımcı scriptler (`node scripts/...`): `generate-textures.mjs` (SVG doku), `fetch-exact.mjs` / `fetch-images.mjs` (Wikimedia Commons'tan özgür lisanslı fotoğraf indirme).

## Geliştirme

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production derleme
```

## Deploy

`serdar1.vercel.app`, Vercel'de `mucahidozgur/tr-patron-palet` GitHub reposunu izler (production branch: `main`). Her değişiklik iki repoya da push edilir — `origin` (`patron-palet-site`) ve Vercel'in izlediği `tr-patron-palet`; ikincisine gelen push otomatik production deploy tetikler.

```bash
git push origin main
git push https://github.com/mucahidozgur/tr-patron-palet.git main:main
```

Manuel deploy: `vercel --prod --yes`
