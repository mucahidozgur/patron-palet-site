/**
 * TR Patron Palet logosu (public/logo.png)
 * Orijinal logopatron.jpeg'den dönüştürüldü: beyaz zemin şeffaflaştırıldı,
 * koyu unsurlar marka lacivertine (#19255b), altınlar olduğu gibi korundu.
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
        draggable={false}
        className="h-full w-auto transition-transform duration-500 group-hover:scale-[1.03]"
      />
      {/* Logo şeklinde kırpılan ışık süpürmesi */}
      <span aria-hidden="true" className="logo-shimmer" />
    </span>
  )
}
