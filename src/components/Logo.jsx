/**
 * TR Patron Palet logosu (public/logo.svg)
 * Altın + beyaz tonlarda, koyu zemin için optimize edilmiştir.
 */
export default function Logo({ className = 'h-11 w-auto', alt = 'TR Patron Palet' }) {
  return <img src="/logo.svg" alt={alt} className={className} draggable={false} />
}
