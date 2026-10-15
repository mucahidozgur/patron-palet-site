// Ahşap dokusu ve hero görsellerini üretir.
// Kullanım: node scripts/generate-textures.mjs
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "images", "palettes");
mkdirSync(outDir, { recursive: true });

const palettes = [
  { slug: "euro-palet-1200x800", tones: ["#E8D9C3", "#D9C6A5", "#C4A37C", "#A0522D", "#3B2A1A"], seed: 3 },
  { slug: "endustriyel-palet-1200x1000", tones: ["#E3D3B3", "#D2B48C", "#BC9868", "#9A4E28", "#38261A"], seed: 7 },
  { slug: "yarim-palet-800x600", tones: ["#EADFC8", "#DCC8A8", "#C7A57E", "#A85A33", "#3E2C1E"], seed: 11 },
  { slug: "ihracat-paleti-ispm15", tones: ["#E6D7BE", "#D5BF9A", "#C09B70", "#A05028", "#392818"], seed: 17 },
  { slug: "agir-yuk-paleti", tones: ["#E2D2B4", "#D0B488", "#B89264", "#964A24", "#352417"], seed: 23 },
  { slug: "ozel-olcu-palet", tones: ["#E9DCC5", "#DAC5A2", "#C2A077", "#A65A30", "#3A2A1B"], seed: 29 },
];

function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shade(hex, f) {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.round(((n >> 16) & 255) * f);
  const g = Math.round(((n >> 8) & 255) * f);
  const b = Math.round((n & 255) * f);
  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
}

function planks() {
  // Her plank bandı hafif farklı koyulukta — tahta tahta doku.
  return Array.from({ length: 6 }, (_, i) => {
    const op = 0.02 + (i % 3) * 0.04 + (i % 2) * 0.02;
    return `<rect x="0" y="${i * 150}" width="1200" height="150" fill="#000" fill-opacity="${op.toFixed(2)}"/>`;
  }).join("");
}

function plankSeparators() {
  return [150, 300, 450, 600, 750]
    .map(
      (y) =>
        `<line x1="0" y1="${y}" x2="1200" y2="${y}" stroke="#000" stroke-opacity="0.28" stroke-width="3"/>`
    )
    .join("");
}

function knots(seed) {
  const rnd = mulberry32(seed);
  return Array.from({ length: 4 }, (_, i) => {
    const cx = (120 + rnd() * 960).toFixed(0);
    const cy = (75 + i * 150 + rnd() * 40).toFixed(0);
    const r = (26 + rnd() * 30).toFixed(0);
    const ry = (parseFloat(r) * 0.7).toFixed(0);
    return `
      <ellipse cx="${cx}" cy="${cy}" rx="${r}" ry="${ry}" fill="none" stroke="#000" stroke-opacity="0.32" stroke-width="4"/>
      <ellipse cx="${cx}" cy="${cy}" rx="${(parseFloat(r) * 0.45).toFixed(0)}" ry="${(parseFloat(ry) * 0.45).toFixed(0)}" fill="#000" fill-opacity="0.28"/>
      <ellipse cx="${cx}" cy="${cy}" rx="${(parseFloat(r) * 0.16).toFixed(0)}" ry="${(parseFloat(ry) * 0.16).toFixed(0)}" fill="#000" fill-opacity="0.45"/>`;
  }).join("");
}

function woodTexture({ slug, tones, seed }) {
  const [light, , raw, , dark] = tones;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${light}"/>
      <stop offset="0.55" stop-color="${raw}"/>
      <stop offset="1" stop-color="${dark}"/>
    </linearGradient>
    <filter id="grain" x="-10%" y="-10%" width="120%" height="120%">
      <feTurbulence type="fractalNoise" baseFrequency="0.14 0.006" numOctaves="4" seed="${seed}" result="noise"/>
      <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0.18  0 0 0 0 0.12  0 0 0 0 0.07  0.4 0.4 0.4 0 0"/>
    </filter>
    <radialGradient id="vig" cx="0.5" cy="0.42" r="0.8">
      <stop offset="0.6" stop-color="#000" stop-opacity="0"/>
      <stop offset="1" stop-color="#000" stop-opacity="0.4"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="900" fill="url(#bg)"/>
  ${planks()}
  <rect width="1200" height="900" filter="url(#grain)" opacity="0.5"/>
  ${knots(seed)}
  ${plankSeparators()}
  <rect width="1200" height="900" fill="url(#vig)"/>
</svg>`;
}

function pallet(x, y, s, plank, block) {
  const W = 220;
  const P = 16;
  const B = 66;
  const rows = [];
  for (let i = 0; i < 3; i++) {
    rows.push(`<rect x="0" y="${i * 24}" width="${W}" height="${P}" fill="${plank}"/>`);
  }
  rows.push(`<rect x="6" y="72" width="22" height="${B}" fill="${block}"/>`);
  rows.push(`<rect x="99" y="72" width="22" height="${B}" fill="${block}"/>`);
  rows.push(`<rect x="192" y="72" width="22" height="${B}" fill="${block}"/>`);
  for (let i = 0; i < 3; i++) {
    rows.push(
      `<rect x="0" y="${72 + B + 8 + i * 24}" width="${W}" height="${P}" fill="${plank}"/>`
    );
  }
  return `<g transform="translate(${x} ${y}) scale(${s})">${rows.join("")}</g>`;
}

function palletStack(x, y, s, tone) {
  const parts = [];
  for (let i = 0; i < 3; i++) {
    parts.push(
      pallet(x + (i % 2) * 12, y - i * 158 * s, s, shade(tone, 1 - i * 0.06), shade(tone, 0.55))
    );
  }
  return parts.join("");
}

function heroSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="hbg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#141414"/>
      <stop offset="1" stop-color="#221C15"/>
    </linearGradient>
    <radialGradient id="hglow" cx="0.78" cy="0.2" r="0.75">
      <stop offset="0" stop-color="#B87333" stop-opacity="0.30"/>
      <stop offset="0.5" stop-color="#B87333" stop-opacity="0.08"/>
      <stop offset="1" stop-color="#B87333" stop-opacity="0"/>
    </radialGradient>
    <filter id="hgrain" x="-10%" y="-10%" width="120%" height="120%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" seed="5" result="n"/>
      <feColorMatrix in="n" type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0.25 0.25 0.25 0 0"/>
    </filter>
  </defs>
  <rect width="1600" height="900" fill="url(#hbg)"/>
  <rect width="1600" height="900" fill="url(#hglow)"/>
  <line x1="0" y1="760" x2="1600" y2="760" stroke="#000" stroke-opacity="0.6" stroke-width="4"/>
  <rect x="0" y="700" width="1600" height="60" fill="#101010"/>
  <g stroke="#2A2A2A" stroke-width="3">
    ${Array.from({ length: 17 }, (_, i) => `<line x1="${i * 100}" y1="700" x2="${i * 100}" y2="760"/>`).join("")}
  </g>
  ${palletStack(150, 540, 1.5, "#2E241B")}
  ${palletStack(760, 580, 1.8, "#241C15")}
  ${palletStack(1200, 560, 1.2, "#1D1712")}
  <line x1="1050" y1="380" x2="1160" y2="430" stroke="#B87333" stroke-opacity="0.45" stroke-width="2"/>
  <line x1="1180" y1="300" x2="1260" y2="340" stroke="#B87333" stroke-opacity="0.3" stroke-width="1.5"/>
  <line x1="900" y1="420" x2="990" y2="455" stroke="#B87333" stroke-opacity="0.25" stroke-width="1.5"/>
  <rect width="1600" height="900" filter="url(#hgrain)" opacity="0.35"/>
</svg>`;
}

for (const p of palettes) {
  writeFileSync(join(outDir, `${p.slug}.svg`), woodTexture(p), "utf8");
  console.log(`✔ ${p.slug}.svg`);
}

writeFileSync(join(root, "public", "images", "hero-production.svg"), heroSvg(), "utf8");
console.log("✔ hero-production.svg");
console.log("Tamamlandı.");
