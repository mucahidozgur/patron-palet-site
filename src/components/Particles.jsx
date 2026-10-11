import { useEffect, useRef } from 'react'

// Tema tonları: turkuaz ağırlıklı, lacivert ve markanın altın kıvılcımıyla
const GOLD_TONES = ['0,165,174', '46,168,211', '25,37,91', '152,198,231', '212,175,55']

/**
 * Canvas tabanlı parçacık efekti (turkuaz/lacivert toz).
 * - Düşük maliyetli (tek canvas, requestAnimationFrame)
 * - Dar ekranlarda parçacık sayısı azalır (CPU dostu)
 * - Hero ekranda değilken (IntersectionObserver) ve sekme görünmezken duraklar
 * - prefers-reduced-motion tercihinde tek statik kare çizer
 */
export default function Particles({ count = 80, className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let raf = 0
    let tabVisible = true
    let inView = true
    let particles = []
    let w = 0
    let h = 0

    const spawn = () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5 + 0.4,
      vx: (Math.random() - 0.5) * 0.14,
      vy: -(Math.random() * 0.28 + 0.08),
      base: Math.random() * 0.4 + 0.15,
      tw: Math.random() * 0.015 + 0.005,
      phase: Math.random() * Math.PI * 2,
      color: GOLD_TONES[Math.floor(Math.random() * GOLD_TONES.length)],
    })

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      // Dar ekranlarda (mobil) parçacık sayısını azalt: pil + CPU dostu
      const n = w < 640 ? Math.min(count, 40) : count
      particles = Array.from({ length: n }, spawn)
    }

    const active = () => !reduced && tabVisible && inView

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h)
      for (const p of particles) {
        p.y += p.vy
        p.x += p.vx + Math.sin(t * 0.0006 + p.phase) * 0.12
        if (p.y < -8) {
          p.y = h + 8
          p.x = Math.random() * w
        }
        if (p.x < -8) p.x = w + 8
        if (p.x > w + 8) p.x = -8
        const alpha = Math.min(0.85, Math.max(0.05, p.base + Math.sin(t * p.tw + p.phase) * 0.18))
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color},${alpha})`
        ctx.fill()
      }
      if (active()) raf = requestAnimationFrame(draw)
    }

    const resume = () => {
      if (active()) {
        cancelAnimationFrame(raf)
        raf = requestAnimationFrame(draw)
      }
    }

    const onVisibility = () => {
      tabVisible = document.visibilityState === 'visible'
      resume()
    }

    // Hero ekrandan çıkınca animasyonu tamamen durdur
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting
      resume()
    })

    resize()
    observer.observe(canvas)
    if (reduced) {
      draw(0) // tek statik kare
    } else {
      raf = requestAnimationFrame(draw)
    }
    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [count])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  )
}
