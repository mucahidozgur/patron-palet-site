# Proje: TR Patron Palet - Kurumsal Web Sitesi

## 1. Proje Genel Bakış
TR Patron Palet için kurumsal, prestijli ve yüksek teknoloji hissi veren bir web sitesi. Referans alınan site: honestholding.com.tr. Site, modern animasyonlar, hızlı yükleme süreleri ve profesyonel bir görünüm ile "zor beğenenler" hedef kitlesine hitap etmelidir.

**Slogan:** YÜKÜN ALTINDA PATRON VAR

## 2. Tasarım Sistemi (Design System)
- **Tema:** Kurumsal, Prestijli, Koyu Tema (Dark Mode) ve Altın Vurgulu.
- **Renk Paleti (Logodan ve Referans Siteden Uyarlanmıştır):**
  - Arka Plan: Derin Antrasit / Koyu Lacivert (`#0A0F1C` veya `#0D1117`)
  - Paneller/Kartlar: Koyu Metalik Grisi (`#161B22`) ve Glassmorphism (Buzlu cam efekti).
  - Ana Vurgu (Accent): Altın Sarısı (`#C9A227` veya `#D4AF37`) - Butonlar, ikonlar ve hover efektleri için.
  - İkincil Vurgu: Beyaz / Açık Gümüş (`#E6E6E6`) - Metinler ve başlıklar için.
  - Metin: Yüksek kontrastlı beyaz (`#FFFFFF`) ve açık gri (`#B0B0B0`).
- **Tipografi:** 
  - Başlıklar: `Playfair Display` veya `Cinzel` (Kurumsal, şık ve prestijli).
  - Gövde Metni: `Inter` veya `Montserrat` (Yüksek okunabilirlik ve modern görünüm).
- **Görsel Efektler:** Arka planda hafif hareket eden altın parçacıklar (particle effects), kartlarda altın rengi parlama (glow) efektleri, yumuşak geçişler.

## 3. Sayfa Yapısı ve Layout
- **Header (Üst Kısım):** 
  - Sol: Logo (TR Patron Palet logosu, altın ve beyaz renklerde, yazılı).
  - Sağ/Orta: Menü linkleri (Anasayfa, Hakkımızda, Ürünler, Hizmetler, Referanslar, İletişim).
  - Sağ Üst: "Teklif Al" butonu (Altın rengi, dikkat çekici).
- **Hero Section (Ana Bölüm):**
  - **Arka Plan:** Koyu antrasit üzerine hafif altın parçacıklar ve büyük bir palet görseli veya soyut bir tasarım.
  - **İçerik:** "YÜKÜN ALTINDA PATRON VAR" sloganı, kısa bir açıklama ve iki adet CTA butonu ("Ürünleri Keşfet" ve "Bize Ulaşın").
  - **Animasyon:** Metinler ve butonlar sayfa yüklendiğinde aşağıdan yukarıya doğru fade-in ve slide-up efektiyle gelsin.
- **Hakkımızda Bölümü:** Şirketin vizyonu, misyonu ve kalite politikası. Yanında istatistikler (yıllık üretim, ihracat ülkeleri vb.) animasyonlu sayaçlarla gösterilsin.
- **Ürünler / Hizmetler Bölümü (Grid Yapısı - 3 Sütun):**
  - Euro Palet, Standart Palet, Özel Ölçü Palet, Ahşap Palet, Plastik Palet, Palet Tamir & Bakım.
  - Her kartta bir ikon, başlık ve kısa açıklama. Hover'da altın rengi bir parlama ve hafif yukarı kalkma efekti.
- **Referanslar / Sektörler:** Çalışılan sektörlerin logoları veya ikonları (Lojistik, Gıda, Kimya, Otomotiv vb.) otomatik kayan bir slider (marquee) içinde gösterilsin.
- **İletişim Bölümü:** Adres, telefon, e-posta bilgileri ve bir iletişim formu (Ad, Soyad, E-posta, Mesaj). Form gönderildiğinde başarı animasyonu gösterilsin.
- **Footer (Alt Bilgi):** Logo, hızlı linkler, sosyal medya ikonları ve telif hakkı metni.

## 4. Animasyonlar ve Etkileşim (Interactions)
- **Genel:** Sayfa kaydırıldıkça bölümler `whileInView` ile fade-in ve slide-up efektiyle gelsin.
- **Kartlar:** Mouse ile üzerine gelindiğinde hafifçe yukarı kalkacak (translateY) ve altın rengi bir kenarlık parlaması (box-shadow) alacak.
- **Butonlar:** Hover'da altın rengi parlasın, tıklandığında `active:scale-95` efekti versin.
- **Header:** Sayfa aşağı kaydırıldığında header arka planı hafifçe şeffaflaşsın ve blur efekti alsın (sticky header).
- **Sayaçlar:** İstatistikler görünür olduğunda sayılar sıfırdan hedef değere doğru animasyonlu bir şekilde artsın.

## 5. Logo Kullanımı
- **Logo:** Kullanıcı tarafından sağlanan "TR Patron Palet" logosu (altın ve siyah renklerde).
- **Kullanım:** Header'da sol üstte, koyu arka plan üzerinde okunabilir olması için altın rengi ve beyaz tonlarında kullanılacak. Logo, SVG formatında yeniden çizilebilir veya mevcut haliyle kullanılabilir.
- **Kural:** Logo, sitenin genel estetiğine uygun olarak minimum 40px yüksekliğinde ve net görünmelidir.

## 6. Teknik Gereksinimler
- **Teknoloji Yığını:** React 19 + Vite 7 + Tailwind CSS 4 + Framer Motion 12 + Lucide Icons.
- **Performans:** Lighthouse skoru 90+ olacak şekilde optimize edilmeli. Resimler `next/image` veya `vite-imagetools` ile optimize edilmeli.
- **Responsive:** Tüm cihazlarda (mobil, tablet, masaüstü) kusursuz görünüm.
- **Erişilebilirlik:** `prefers-reduced-motion` desteği, yüksek kontrastlı metinler, klavye ile gezinme.
- **SEO:** Meta etiketleri, Open Graph etiketleri ve yapılandırılmış veri (Schema.org) eklenmeli.