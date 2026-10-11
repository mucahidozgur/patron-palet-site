// ============================================================
// TR Patron Palet — Tüm site içeriği (tek kaynak)
// NOT: Telefon, e-posta ve adres bilgileri placeholder'dır;
// canlıya almadan önce gerçek değerlerle değiştirin.
// ============================================================
import {
  Euro,
  Package,
  Ruler,
  TreePine,
  Layers,
  Wrench,
  Truck,
  FlaskConical,
  Car,
  Building2,
  ShoppingCart,
  Warehouse,
  Ship,
  Wheat,
  Factory,
  Flame,
  BadgeCheck,
  ShieldCheck,
  Award,
  Globe2,
  Recycle,
  Eye,
  Target,
  MapPin,
  Phone,
  Mail,
  Clock,
} from 'lucide-react'
import { LinkedInIcon, InstagramIcon, FacebookIcon, XIcon } from '../components/SocialIcons'

export const site = {
  name: 'TR Patron Palet',
  slogan: 'YÜKÜN ALTINDA PATRON VAR',
  sloganText: 'Yükün altında patron var.',
  phone: '+90 (212) 000 00 00',
  phoneHref: 'tel:+902120000000',
  email: 'info@trpatronpalet.com',
  emailHref: 'mailto:info@trpatronpalet.com',
  address: 'Organize Sanayi Bölgesi, 15. Cadde No: 24, Başakşehir / İstanbul',
  workHours: 'Pazartesi – Cumartesi: 08.00 – 18.00',
}

export const nav = [
  { label: 'Anasayfa', href: '#anasayfa' },
  { label: 'Hakkımızda', href: '#hakkimizda' },
  { label: 'Ürünler', href: '#urunler' },
  { label: 'Hizmetler', href: '#hizmetler' },
  { label: 'Referanslar', href: '#referanslar' },
  { label: 'İletişim', href: '#iletisim' },
]

export const hero = {
  eyebrow: 'Türkiye’nin Palet Üreticisi',
  titleLine1: 'YÜKÜN ALTINDA',
  titleLine2: 'PATRON VAR',
  description:
    'Lojistik zincirinizin en güçlü halkasıyız. Euro paletten özel ölçü üretime; EPAL ve ISPM-15 standartlarında, yüksek taşıma kapasiteli ve sürdürülebilir palet çözümleriyle yükünüzü güvenle taşıyoruz.',
  ctaPrimary: 'Ürünleri Keşfet',
  ctaSecondary: 'Bize Ulaşın',
  badges: ['EPAL Lisanslı Üretim', 'ISPM-15 Sertifikalı', '25+ Ülkeye İhracat'],
}

export const about = {
  eyebrow: 'Hakkımızda',
  title: 'Yükünüzü Taşıyoruz,',
  highlight: 'Güveninizi İnşa Ediyoruz',
  description:
    'TR Patron Palet olarak 15 yılı aşkın süredir Türkiye’nin dört bir yanındaki üretim tesislerine ve 25’ten fazla ülkeye palet çözümleri sunuyoruz. Gücümüzü; mühendislik disiplininden, sertifikalı üretim süreçlerinden ve müşterilerimizin bize duyduğu güvenden alıyoruz.',
  items: [
    {
      icon: Eye,
      title: 'Vizyonumuz',
      text: 'Palet üretiminde Türkiye’nin ilk akla gelen, uluslararası standartlarda çözüm ortağı olmak; her sektörden müşterimize kesintisiz değer üretmek.',
    },
    {
      icon: Target,
      title: 'Misyonumuz',
      text: 'Müşterilerimizin lojistik zincirlerini dayanıklı, sürdürülebilir ve sertifikalı palet çözümleriyle güçlendirmek; her yüke güvenle omuz vermek.',
    },
    {
      icon: Award,
      title: 'Kalite Politikamız',
      text: 'EPAL ve ISPM-15 standartlarına tam uyum; ölçülebilir kalite, izlenebilir üretim ve sıfır hata hedefiyle çalışırız.',
    },
  ],
  stats: [
    { value: 500000, suffix: '+', label: 'Yıllık Üretim Kapasitesi' },
    { value: 25, suffix: '+', label: 'İhracat Yapılan Ülke' },
    { value: 15, suffix: '+', label: 'Yıllık Sektör Tecrübesi' },
    { value: 98, suffix: '%', label: 'Müşteri Memnuniyeti' },
  ],
}

export const products = {
  eyebrow: 'Ürünlerimiz',
  title: 'Her Yüke Uygun',
  highlight: 'Palet Çözümleri',
  description:
    'Uluslararası standartlarda üretilen geniş ürün yelpazemizle; lojistik, gıda, kimya, otomotiv ve daha birçok sektörün ihtiyacına cevap veriyoruz.',
  items: [
    {
      icon: Euro,
      title: 'Euro Palet',
      text: '800×1200 mm ölçülerinde, EPAL standartlarına tam uyumlu, ihracatta sorunsuz kullanılan paletler.',
    },
    {
      icon: Package,
      title: 'Standart Palet',
      text: 'Yüksek taşıma kapasiteli, 800×1200 ve 1000×1200 mm ölçülerinde ekonomik çözümler.',
    },
    {
      icon: Ruler,
      title: 'Özel Ölçü Palet',
      text: 'Projelerinize özel ölçü, yük kapasitesi ve tasarım ile tam uyumlu palet üretimi.',
    },
    {
      icon: TreePine,
      title: 'Ahşap Palet',
      text: 'ISPM-15 ısıl işlem sertifikalı, sürdürülebilir orman kaynaklarından üretilen ahşap paletler.',
    },
    {
      icon: Layers,
      title: 'Plastik Palet',
      text: 'Hijyen gerektiren gıda ve ilaç sektörlerine uygun, yıkanabilir, uzun ömürlü plastik paletler.',
    },
    {
      icon: Wrench,
      title: 'Palet Tamir & Bakım',
      text: 'Palet filonuzun yerinde tamiri, bakımı ve yenilenmesi ile maliyetlerinizi düşürün.',
    },
  ],
}

export const services = {
  eyebrow: 'Hizmetlerimiz',
  title: 'Üretimden Teslimata',
  highlight: 'Uçtan Uca Hizmet',
  description:
    'Sadece palet üretmiyoruz; projenizin her aşamasında yanınızdayız. Mühendislikten sertifikasyona, lojistikten depolamaya eksiksiz destek.',
  items: [
    {
      icon: Factory,
      title: 'Proje Bazlı Üretim',
      text: 'Yük analizi ve mühendislik desteğiyle ürününüze özel ölçü, kapasite ve tasarımda palet üretimi.',
    },
    {
      icon: Flame,
      title: 'Isıl İşlem & Sertifikasyon',
      text: 'ISPM-15 standartlarına uygun ısıl işlem uygulaması; ihracat süreçleriniz için sorunsuz, sertifikalı paletler.',
    },
    {
      icon: Truck,
      title: 'Lojistik & Teslimat',
      text: 'Türkiye geneline zamanında ve güvenli teslimat; ihtiyaç halinde depolama ve stok yönetimi desteği.',
    },
  ],
}

export const references = {
  eyebrow: 'Referanslar',
  title: 'Güvenilen Sektörler,',
  highlight: 'Kanıtlanmış Standartlar',
  description:
    'Yıllardır farklı sektörlerden yüzlerce firmayla çalışıyor, uluslararası standartlara tam uyumlu üretim yapıyoruz.',
  sectors: {
    title: 'Çalıştığımız Sektörler',
    items: [
      { icon: Truck, label: 'Lojistik' },
      { icon: Wheat, label: 'Gıda' },
      { icon: FlaskConical, label: 'Kimya' },
      { icon: Car, label: 'Otomotiv' },
      { icon: Building2, label: 'İnşaat' },
      { icon: ShoppingCart, label: 'E-Ticaret' },
      { icon: Warehouse, label: 'Depolama' },
      { icon: Ship, label: 'İhracat' },
    ],
  },
  standards: {
    title: 'Standartlar & Sertifikalar',
    items: [
      { icon: BadgeCheck, label: 'EPAL' },
      { icon: ShieldCheck, label: 'ISPM-15' },
      { icon: Award, label: 'ISO 9001' },
      { icon: TreePine, label: 'FSC Sertifikalı Ahşap' },
      { icon: Globe2, label: 'EUR Palet' },
      { icon: Recycle, label: 'Geri Dönüşüm Programı' },
    ],
  },
}

export const contact = {
  eyebrow: 'İletişim',
  title: 'Projenizi',
  highlight: 'Konuşalım',
  description:
    'Teklif almak, numune talep etmek veya sorularınız için bize ulaşın; ekibimiz 24 saat içinde dönüş yapar.',
  infos: [
    { icon: MapPin, label: 'Adres', value: site.address },
    { icon: Phone, label: 'Telefon', value: site.phone, href: site.phoneHref },
    { icon: Mail, label: 'E-posta', value: site.email, href: site.emailHref },
    { icon: Clock, label: 'Çalışma Saatleri', value: site.workHours },
  ],
  success: {
    title: 'Mesajınız Alındı!',
    text: 'Talebiniz ekibimize iletildi. En kısa sürede sizinle iletişime geçeceğiz.',
  },
}

export const footer = {
  tagline:
    'Yükünüzü güvenle taşıyoruz. Kurumsal, sertifikalı ve sürdürülebilir palet üretiminde çözüm ortağınız.',
  socials: [
    { icon: LinkedInIcon, label: 'LinkedIn', href: '#' },
    { icon: InstagramIcon, label: 'Instagram', href: '#' },
    { icon: FacebookIcon, label: 'Facebook', href: '#' },
    { icon: XIcon, label: 'X (Twitter)', href: '#' },
  ],
}
