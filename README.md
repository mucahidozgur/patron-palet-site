# PATRON PALET

**Endüstriyel Şiir** — ahşap palet üreticisi için karanlık, sinematik vitrin sitesi.

## Teknoloji

- **Next.js 16.4.1** (App Router, Turbopack) · **React 19.3** · **TypeScript 5** (strict)
- **Tailwind CSS v4** · **Framer Motion 11** (parallax, perspektif, modal animasyonları)
- Fontlar: Cormorant Garamond (serif başlıklar) + Inter (gövde) — `next/font`

## Tasarım Sistemi

| Token | Değer | Kullanım |
|---|---|---|
| `ink` | `#1A1A1A` | Antrasit zemin |
| `surface` | `#2C2C2C` | Bölüm zemini |
| `ivory` | `#F5F0E8` | Metin |
| `copper` | `#B87333` | Ana vurgu (bakır) |
| `steel` | `#A9A9A9` | İkincil vurgu |

Anahtar sınıflar: `.heading-editorial` (600 italic serif), `.label-industrial` (700 uppercase bakır etiket), `.blueprint-grid` (teknik çizim zemini), `.container-editorial`.

## Sayfa Yapısı

`Header → Hero → FeaturedProduct → ProductGrid → Manifesto → Footer`

- Kartlar tıklanınca açılan `ProductModal`: büyük ürün görseli, özellik listesi, ahşap tonları, "Teklif Al".
- Framer Motion: scroll-linked parallax, kartlarda perspektif dönüşü; `prefers-reduced-motion` destekli.
- Modal: ESC kapatma, focus trap, body scroll lock.

## Görseller

`public/images/` altında Wikimedia Commons'tan CC0/CC-BY lisanslı palet fotoğrafları kullanılıyor — krediler için [public/images/CREDITS.md](public/images/CREDITS.md).

Yeniden üretim scriptleri (`node scripts/...`):
- `generate-textures.mjs` — SVG ahşap dokusu yedekleri
- `fetch-exact.mjs` — başlığı bilinen Commons fotoğraflarını indirir
- `fetch-images.mjs` — sorgu tabanlı Commons arama + indirme

## Geliştirme

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production derleme
```
