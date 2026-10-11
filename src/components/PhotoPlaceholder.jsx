import { Image as ImageIcon } from 'lucide-react'

/**
 * Gerçek palet/tesis fotoğrafları eklenecek alanlar için zarif yer tutucu.
 * - Kesikli altın çerçeve + turkuaz çapraz desen, fotoğraf ikonu ve etiket
 * - role="img" + aria-label ile erişilebilir
 * - Sonradan <img> ile değiştirilecek şekilde oranları (aspect) hazır
 */
export default function PhotoPlaceholder({ label, className = '' }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`photo-ph group relative overflow-hidden rounded-2xl border-2 border-dashed border-gold/45 bg-white/60 transition-colors duration-300 hover:border-gold/80 ${className}`}
    >
      {/* Köşe etiketi */}
      <span
        aria-hidden="true"
        className="absolute left-3 top-3 rounded-md bg-navy/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/90"
      >
        Fotoğraf alanı
      </span>

      {/* Orta: ikon + etiket */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/40 bg-white/80 text-gold-deep shadow-sm transition-transform duration-300 group-hover:scale-110">
          <ImageIcon size={22} strokeWidth={1.5} />
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-mist">
          {label}
        </span>
      </div>
    </div>
  )
}
