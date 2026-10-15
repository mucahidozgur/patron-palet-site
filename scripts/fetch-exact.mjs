// Wikimedia Commons'tan başlığı kesin bilinen (insansız, saf palet) fotoğrafları indirir.
// Kullanım: node scripts/fetch-exact.mjs
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const TARGETS = [
  { file: "hero-production.jpg", title: "File:Wooden-pallets stacked 7.jpg" },
  { file: "euro-palet-1200x800.jpg", title: "File:EUR-pallets stacked 1.jpg" },
  { file: "endustriyel-palet-1200x1000.jpg", title: "File:Wooden-pallets stacked 4.jpg" },
  { file: "yarim-palet-800x600.jpg", title: "File:Stack of pallets at Borough Market.jpg" },
  { file: "agir-yuk-paleti.jpg", title: "File:EUR-pallets stacked 2.jpg" },
];

const OK_LICENSES = ["CC0", "CC BY", "Public domain", "PD"];

for (const t of TARGETS) {
  try {
    const url =
      "https://commons.wikimedia.org/w/api.php?action=query&format=json" +
      `&titles=${encodeURIComponent(t.title)}&prop=imageinfo` +
      "&iiprop=url%7Cmime%7Csize%7Cextmetadata&iiurlwidth=1600";
    const res = await fetch(url, {
      headers: { "User-Agent": "patron-palet-dev/1.0" },
    });
    const data = await res.json();
    const page = Object.values(data?.query?.pages ?? {})[0];
    const ii = page?.imageinfo?.[0];
    if (!ii?.thumburl) {
      console.log(`✗ ${t.file} — ${t.title} bulunamadı`);
      continue;
    }
    const lic = ii.extmetadata?.LicenseShortName?.value ?? "";
    if (!OK_LICENSES.some((l) => lic.startsWith(l))) {
      console.log(`✗ ${t.file} — lisans uygun değil: ${lic}`);
      continue;
    }
    const img = await fetch(ii.thumburl, {
      headers: { "User-Agent": "patron-palet-dev/1.0" },
    });
    if (!img.ok) {
      console.log(`✗ ${t.file} — indirme hatası HTTP ${img.status}`);
      continue;
    }
    const buf = Buffer.from(await img.arrayBuffer());
    const dest =
      t.file === "hero-production.jpg"
        ? join(root, "public", "images", t.file)
        : join(root, "public", "images", "palettes", t.file);
    writeFileSync(dest, buf);
    console.log(`✔ ${t.file} (${(buf.length / 1024).toFixed(0)} KB, ${lic}) ← ${t.title}`);
  } catch (err) {
    console.log(`✗ ${t.file} — ${err.message}`);
  }
  await new Promise((r) => setTimeout(r, 400));
}
console.log("Tamamlandı.");
