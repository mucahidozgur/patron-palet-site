/**
 * TR Patron Palet logosu (public/logo.png)
 * Orijinal logopatron.jpeg'den dönüştürüldü: beyaz zemin şeffaflaştırıldı,
 * koyu unsurlar marka lacivertine (#19255b) çevrildi; ikon gövdesi site
 * temasının turkuaz degrade vurgusuyla (#2ea8d3 -> #00a5ae -> #007f87)
 * renklendirildi. Altınlar olduğu gibi korundu.
 * Üzerinde periyodik ışık süpürmesi (shimmer) animasyonu vardır.
 */
export default function Logo({ className = 'h-11 w-auto', alt = 'TR Patron Palet' }) {
  return (
    <span
      className={`relative inline-block overflow-hidden transition-[filter] duration-500 group-hover:drop-shadow-[0_0_12px_rgba(212,175,55,0.4)] ${className}`}
    >
      <img
        src="/logo.png"
        alt={alt}
        width={206}
        height={160}
        decoding="async"
        draggable={false}
        className="h-full w-auto transition-transform duration-500 group-hover:scale-[1.03]"
      />
      {/* Logo şeklinde kırpılan ışık süpürmesi */}
      <span aria-hidden="true" className="logo-shimmer" />
    </span>
  )
}
