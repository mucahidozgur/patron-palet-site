# PALET SİTESİ — Konsept A: Editorial Luxury

## Proje Özeti
Karanlık lüks temalı palet vitrin sitesi. Ivory & Oak estetiğinden ilham alır.
Her palet bir sanat eseri gibi sunulur. Hedef: premium markalar ve sanat yönetmenleri.

## Tasarım Sistemi
- **Zemin:** #0A0A0A (derin siyah)
- **Metin:** #F5F0E8 (fildişi)
- **Vurgu:** #C9A96E (altın/şampanya)
- **İkincil vurgu:** #8B7355 (sıcak bronz)
- **Başlık fontu:** Cormorant Garamond (serif)
- **Gövde fontu:** Inter (sans-serif)
- **Kenar boşlukları:** 120px (masaüstü), 24px (mobil)

## Teknoloji Yığını
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion (animasyonlar)
- Vercel deployment

## Kod Kuralları
- Bileşenler `src/components/` altında, atomik yapıda
- Her bileşen kendi `index.tsx` ve `types.ts` dosyasına sahip
- Palet verileri `src/data/palettes.ts` içinde
- Animasyonlar `src/lib/animations.ts` içinde merkezi
- Erişilebilirlik: Tüm renk kontrastları WCAG AA

## Özel Talimatlar
- Scroll animasyonları yumuşak ve sinematik olmalı
- Palet kartları hover'da hafif büyümeli ve gölge almalı
- Mobilde tek sütun, masaüstünde 2-3 sütun grid
- Logo her sayfada sol üstte sabit (sticky header)

## Yapılmayacaklar
- Parlak/neon renkler kullanma
- Comic Sans veya el yazısı fontu kullanma
- Otomatik oynayan video kullanma (kullanıcı kontrolünde)
- 3 saniyeden uzun animasyonlar