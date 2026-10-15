export interface Color {
  name: string;
  hex: string;
}

export interface Palette {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  /** Mood görseli — yoksa kartta gradient fallback kullanılır. */
  image?: string;
  /** Ürün özellikleri (ölçü, sertifika, kapasite vb.). */
  features: string[];
  colors: Color[];
  category: "standart" | "endüstriyel" | "ihracat" | "ağır yük" | "özel";
  featured?: boolean;
  year: number;
}
