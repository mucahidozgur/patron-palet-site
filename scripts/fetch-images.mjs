// Wikimedia Commons'tan ücretsiz lisanslı (CC0/CC-BY/PD) palet fotoğraflarını indirir.
// Kullanım: node scripts/fetch-images.mjs
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const TARGETS = [
  { file: "ihracat-paleti-ispm15.jpg", q: "wooden pallets transport export" },
];

const OK_LICENSES = ["CC0", "CC BY", "Public domain", "PD"];
// İçerik olarak uygun olmayan dosyaları başlıktan eler.
const TITLE_BLACKLIST = [
  "plastic",
  "cement",
  "icon",
  "glove",
  "map",
  "diagram",
  "logo",
  "book",
  "magazine",
  "box",
];
// Başlıkta konuyla ilgili kelime şartı — arama metni uyuşmalarını görsel içerikle eşleştirir.
const TITLE_WHITELIST = /pallet|palle|wood|forklift/i;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function searchCommons(query) {
  const url =
    "https://commons.wikimedia.org/w/api.php?action=query&format=json" +
    `&generator=search&gsrsearch=${encodeURIComponent(query)}` +
    "&gsrnamespace=6&gsrlimit=20&prop=imageinfo" +
    "&iiprop=url%7Cmime%7Csize%7Cextmetadata&iiurlwidth=1600";
  const res = await fetch(url, {
    headers: { "User-Agent": "patron-palet-dev/1.0 (site asset fetch)" },
  });
  const data = await res.json();
  if (data?.error) throw new Error(`API: ${data.error.code}`);
  const pages = data?.query?.pages ?? {};
  return Object.values(pages)
    .map((p) => {
      const ii = p.imageinfo?.[0];
      const md = ii?.extmetadata ?? {};
      return {
        title: p.title,
        mime: ii?.mime,
        width: ii?.width,
        thumburl: ii?.thumburl,
        license: md.LicenseShortName?.value ?? "",
      };
    })
    .filter((f) => {
      const lower = f.title.toLowerCase();
      return (
        f.mime === "image/jpeg" &&
        (f.width ?? 0) >= 1200 &&
        f.thumburl &&
        OK_LICENSES.some((lic) => f.license.startsWith(lic)) &&
        TITLE_WHITELIST.test(f.title) &&
        !TITLE_BLACKLIST.some((bad) => lower.includes(bad))
      );
    });
}

async function download(url, file) {
  const res = await fetch(url, {
    headers: { "User-Agent": "patron-palet-dev/1.0 (site asset fetch)" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(file, buf);
  return buf.length;
}

for (const t of TARGETS) {
  try {
    const results = await searchCommons(t.q);
    if (results.length === 0) {
      console.log(`✗ ${t.file} — uygun fotoğraf bulunamadı (sorgu: "${t.q}")`);
      await sleep(500);
      continue;
    }
    const pick = results[0];
    const dest =
      t.file === "hero-production.jpg"
        ? join(root, "public", "images", t.file)
        : join(root, "public", "images", "palettes", t.file);
    const bytes = await download(pick.thumburl, dest);
    console.log(
      `✔ ${t.file} (${(bytes / 1024).toFixed(0)} KB, ${pick.license}) ← ${pick.title}`
    );
    await sleep(500);
  } catch (err) {
    console.log(`✗ ${t.file} — ${err.message}`);
    await sleep(500);
  }
}
console.log("Tamamlandı.");
