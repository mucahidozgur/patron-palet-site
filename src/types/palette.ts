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
  features: string[];
  colors: Color[];
  category: "sıfır üretim" | "ikinci el" | "sandık";
  featured?: boolean;
  year: number;
}
