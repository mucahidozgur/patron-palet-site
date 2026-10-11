# TR Patron Palet — Kurumsal Web Sitesi

> **YÜKÜN ALTINDA PATRON VAR**

TR Patron Palet için kurumsal, prestijli ve modern tek sayfa web sitesi. Koyu antrasit zemin, altın vurgular, glassmorphism kartlar ve zarif animasyonlarla "kurumsal holding" estetiği.

## Teknoloji Yığını

- **React 19** + **Vite 7**
- **Tailwind CSS 4** (özel `@theme` ile altın/koyu palet)
- **Framer Motion 12** (stagger reveal, sayaçlar, marquee, mikro etkileşimler)
- **Lucide Icons** (ikon seti)

## Kurulum

```bash
npm install
npm run dev      # Geliştirme sunucusu → http://localhost:5173
npm run build    # Üretim derlemesi → dist/
npm run preview  # Derlemeyi yerelde önizle
```

## Yapı

```
src/
├── data/content.js          # Tüm metinler ve içerik (tek kaynak)
├── lib/motion.js            # Ortak Framer Motion varyantları
├── components/
│   ├── Logo.jsx             # public/logo.svg üzerinden logo
│   ├── Header.jsx           # Sticky header, blur, mobil menü
│   ├── Hero.jsx             # Parçacıklar + slogan + CTA
│   ├── Particles.jsx        # Canvas tabanlı altın parçacık efekti
│   ├── About.jsx            # Vizyon/misyon + animasyonlu sayaçlar
│   ├── Products.jsx         # 6 kartlı ürün gridi (ışık takibi efekti)
│   ├── Services.jsx         # Hizmetler bandı
│   ├── References.jsx       # Sektörler & sertifikalar marquee
│   ├── Contact.jsx          # İletişim formu (başarı animasyonu)
│   └── Footer.jsx
└── main.jsx / App.jsx / index.css
```

## Yayın Öncesi Notlar

- **Placeholder veriler:** `src/data/content.js` içindeki telefon, e-posta ve adres bilgilerini gerçek değerlerle değiştirin.
- **Schema.org / OG:** `index.html` içindeki `https://www.trpatronpalet.com` URL'sini ve JSON-LD bilgilerini güncelleyin.
- **Form entegrasyonu:** `src/components/Contact.jsx` içindeki `handleSubmit` fonksiyonuna gerçek API/e-posta servisi bağlanabilir (şu an başarı animasyonu simüle edilir).

## Dağıtım

Vercel'de yayınlamak için proje kökünü import edin — Vite otomatik algılanır. `npm run build` komutu otomatik çalışır, ek yapılandırma gerekmez.
