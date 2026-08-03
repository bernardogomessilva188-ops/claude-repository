import { useEffect, useRef, useState } from 'react'

/**
 * Número que conta de 0 até o valor quando entra na tela.
 *
 * Recebe o valor como string já formatada ("2.400", "4,8") e anima só a parte
 * numérica, preservando separadores e decimais no padrão brasileiro.
 * Com `prefers-reduced-motion`, mostra o valor final direto.
 */
export default function AnimatedNumber({ value, duration = 1400, className = '' }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || !('IntersectionObserver' in window)) {
      setDisplay(value)
      return
    }

    // "2.400" -> 2400 (inteiro, separador de milhar) · "4,8" -> 4.8 (decimal)
    const decimal = value.includes(',')
    const target = decimal
      ? parseFloat(value.replace(',', '.'))
      : parseInt(value.replace(/\./g, ''), 10)
    if (Number.isNaN(target)) {
      setDisplay(value)
      return
    }

    const format = (n) =>
      decimal
        ? n.toFixed(1).replace('.', ',')
        : Math.round(n).toLocaleString('pt-BR')

    let rafId = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        const start = performance.now()
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1)
          // desaceleração cúbica: corre no início, assenta no fim
          const eased = 1 - Math.pow(1 - t, 3)
          setDisplay(format(target * eased))
          if (t < 1) rafId = requestAnimationFrame(tick)
        }
        rafId = requestAnimationFrame(tick)
      },
      { threshold: 0.6 },
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(rafId)
    }
  }, [value, duration])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
