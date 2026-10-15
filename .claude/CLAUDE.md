# PATRON PALET — Endüstriyel Teknoloji Konsepti

## Proje Özeti
Ahşap palet üreticisi vitrin sitesi: sıfır palet üretimi, ikinci el palet alım satımı
ve ihracat sandığı imalatı. Karanlık, teknolojik ve profesyonel estetik.
İçerik kaynağı: tepeahsappalet.com · Tasarım referansı: cemabi.vercel.app.

## Tasarım Sistemi
- **Zemin:** #0B0C10 (koyu lacivert-siyah)
- **Yüzey:** #12151C · **Panel:** #1F2833
- **Metin:** #C5C6C7 (açık gri) · **Beyaz:** #FFFFFF
- **Vurgu:** #66FCF1 (cyan) · **İkincil:** #45A29E (koyu cyan)
- **Başlık fontu:** Orbitron (800, uppercase, geometrik)
- **Gövde fontu:** Inter
- **Kenar boşlukları:** `.container-editorial` (max 1400px; 24px mobil, 48px md, 80px lg)

## Teknoloji Yığını
- Next.js 16.4.1 (App Router, Turbopack)
- TypeScript (strict mode)
- Tailwind CSS v4 (`@theme` tokenları: ink, surface, panel, ivory, cyan, teal)
- Framer Motion 11 (entrance animasyonları; `MotionConfig reducedMotion="user"`)

## Kod Kuralları
- Bileşenler `src/components/` altında: `layout/`, `sections/`, `ui/`
- Ürün verileri `src/data/palettes.ts` · Tipler `src/types/palette.ts`
- Ortak animasyon sabitleri `src/lib/animations.ts`
- **Framer Motion kullanan HER bileşende `"use client"` zorunlu** — RSC'de `motion.*` undefined kalır ve prerender patlar
- Erişilebilirlik: WCAG AA kontrast, modalda ESC + focus trap + body scroll lock, klavye navigasyonu

## Özel Talimatlar
- Logo: "PATRON PALET" gradyan metin (cyan→ivory→cyan), hover'da harf aralığı açılır
- Header: aşağı kaydırınca gizlenir (translateY -100%), yukarı kaydırınca geri gelir
- Görseller: minimal; ürünler tipografik spesifikasyon kartlarıdır (fotoğraf yok)
- Modal: ürün özellikleri + "Teklif Al" → #iletisim

## Yapılmayacaklar
- Parlak/neon genel zemin (cyan yalnızca vurgu olarak)
- Otomatik oynayan video
- 3 saniyeden uzun animasyonlar
- İnsan/araç içeren fotoğraflar (fotoğraf gerekiyorsa: saf palet yığını, özgür lisanslı + atıflı)
