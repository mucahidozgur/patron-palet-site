import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

/**
 * Görünür olduğunda sıfırdan hedef değere animasyonlu sayaç.
 * prefers-reduced-motion tercihinde doğrudan hedef değeri gösterir.
 */
export default function Counter({ value = 0, suffix = '', duration = 2 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduced = useReducedMotion()
  const [display, setDisplay] = useState(reduced ? value : 0)

  useEffect(() => {
    if (!inView) return
    if (reduced) {
      setDisplay(value)
      return
    }
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value, reduced, duration])

  return (
    <span ref={ref}>
      {display.toLocaleString('tr-TR')}
      {suffix}
    </span>
  )
}
