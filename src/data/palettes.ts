import type { Palette } from "@/types/palette";

export const palettes: Palette[] = [
  {
    id: "1",
    slug: "euro-palet-1200x800",
    title: "Euro Palet",
    subtitle: "1200x800mm Standart",
    description:
      "Avrupa standartlarında, ısıl işlemli, yüksek taşıma kapasiteli sert ahşap palet.",
    features: ["1200x800mm", "ISPM 15 Isıl İşlemli", "1500 kg Kapasite"],
    colors: [
      { name: "Açık Ahşap", hex: "#E8D9C3" },
      { name: "Talaş", hex: "#D9C6A5" },
      { name: "Ham Ahşap", hex: "#C4A37C" },
      { name: "Sienna", hex: "#A0522D" },
      { name: "Koyu Ceviz", hex: "#3B2A1A" },
    ],
    category: "sıfır üretim",
    featured: true,
    year: 2025,
  },
  {
    id: "2",
    slug: "epal-palet-1200x800",
    title: "Epal Palet",
    subtitle: "EPAL Sertifikalı · 1200x800mm",
    description:
      "EPAL sertifikasına sahip, uluslararası lojistikte kabul gören standart euro ölçü palet.",
    features: ["EPAL Sertifikası", "1200x800mm", "2000 kg Kapasite"],
    colors: [
      { name: "Açık Ahşap", hex: "#E3D3B3" },
      { name: "Talaş", hex: "#D2B48C" },
      { name: "Ham Ahşap", hex: "#BC9868" },
      { name: "Sienna", hex: "#9A4E28" },
      { name: "Koyu Ceviz", hex: "#38261A" },
    ],
    category: "sıfır üretim",
    year: 2025,
  },
  {
    id: "3",
    slug: "ikinci-el-palet-800x1200",
    title: "2. El Palet",
    subtitle: "İkinci El · 800x1200mm",
    description:
      "Stoktan teslim, taşıma kapasitesi kontrol edilmiş ekonomik ikinci el palet.",
    features: ["800x1200mm", "2. El — Ekonomik", "Stoktan Teslim"],
    colors: [
      { name: "Açık Ahşap", hex: "#EADFC8" },
      { name: "Talaş", hex: "#DCC8A8" },
      { name: "Ham Ahşap", hex: "#C7A57E" },
      { name: "Sienna", hex: "#A85A33" },
      { name: "Koyu Ceviz", hex: "#3E2C1E" },
    ],
    category: "ikinci el",
    year: 2024,
  },
  {
    id: "4",
    slug: "ikinci-el-palet-1000x1200",
    title: "2. El Palet",
    subtitle: "İkinci El · 1000x1200mm",
    description:
      "Karton ve ambalaj lojistiğine uygun, geniş yüzeyli ekonomik ikinci el palet.",
    features: ["1000x1200mm", "Karton & Ambalaj Uyumlu", "Stoktan Teslim"],
    colors: [
      { name: "Açık Ahşap", hex: "#E6D7BE" },
      { name: "Talaş", hex: "#D5BF9A" },
      { name: "Ham Ahşap", hex: "#C09B70" },
      { name: "Sienna", hex: "#A05028" },
      { name: "Koyu Ceviz", hex: "#392818" },
    ],
    category: "ikinci el",
    year: 2024,
  },
  {
    id: "5",
    slug: "ikinci-el-palet-1100x1100",
    title: "2. El Palet",
    subtitle: "İhracat Ölçüsü · 1100x1100mm",
    description:
      "İhracat sevkiyatlarına uygun kare ölçülü, stoktan teslim ikinci el palet.",
    features: ["1100x1100mm", "İhracat Uyumlu", "Stoktan Teslim"],
    colors: [
      { name: "Açık Ahşap", hex: "#E2D2B4" },
      { name: "Talaş", hex: "#D0B488" },
      { name: "Ham Ahşap", hex: "#B89264" },
      { name: "Sienna", hex: "#964A24" },
      { name: "Koyu Ceviz", hex: "#352417" },
    ],
    category: "ikinci el",
    year: 2024,
  },
  {
    id: "6",
    slug: "ahsap-ihracat-sandigi",
    title: "Ahşap İhracat Sandığı",
    subtitle: "Özel Ölçü Üretim",
    description:
      "Gümrük standartlarına uygun, ISPM 15 ısıl işlemli, projeye özel ahşap ihracat sandığı.",
    features: ["Özel Ölçüler", "ISPM 15 Uyumlu", "Proje Bazlı"],
    colors: [
      { name: "Açık Ahşap", hex: "#E9DCC5" },
      { name: "Talaş", hex: "#DAC5A2" },
      { name: "Ham Ahşap", hex: "#C2A077" },
      { name: "Sienna", hex: "#A65A30" },
      { name: "Koyu Ceviz", hex: "#3A2A1B" },
    ],
    category: "sandık",
    year: 2025,
  },
];
