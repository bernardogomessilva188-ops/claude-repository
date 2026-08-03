import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * Scroll suave da página inteira, com Lenis.
 *
 * O Lenis substitui o scroll nativo por um scroll interpolado — a rolagem
 * "desliza" em vez de andar aos trancos, e o parallax do herói fica preso ao
 * mesmo relógio (nada de imagem tremendo em relação ao conteúdo).
 *
 * Cuidados que este hook já resolve:
 * - `prefers-reduced-motion`: o Lenis nem é inicializado, o scroll segue nativo.
 * - Links de âncora (#beneficios, #oferta...): com o Lenis ativo o CSS
 *   `scroll-behavior: smooth` é desligado, então os cliques são interceptados
 *   e redirecionados para `lenis.scrollTo`. A folga do header fixo vem do
 *   `scroll-padding-top` do <html>, que o Lenis respeita igual ao navegador —
 *   passar um `offset` aqui somaria com ele e a âncora pararia cedo demais.
 * - Limpeza: `destroy()` no unmount, sem rAF órfão.
 *
 * Retorna nada; quem precisa da posição de scroll usa o evento nativo, que o
 * Lenis continua disparando.
 */

export default function useSmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const lenis = new Lenis({
      duration: 1.1,
      // desaceleração exponencial: rápido no começo, macio no fim
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // no touch o scroll nativo do celular é melhor (e não briga com o gesto
      // de "puxar para atualizar" nem com a barra do navegador)
      syncTouch: false,
      touchMultiplier: 1.6,
    })

    let rafId = 0
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    const onAnchorClick = (event) => {
      const link = event.target.closest('a[href^="#"]')
      if (!link) return

      const hash = link.getAttribute('href')
      if (!hash || hash === '#') return

      const target = document.querySelector(hash)
      if (!target) return

      event.preventDefault()
      lenis.scrollTo(target)
      // mantém a URL compartilhável sem provocar o pulo nativo
      window.history.pushState(null, '', hash)
    }

    document.addEventListener('click', onAnchorClick)

    return () => {
      document.removeEventListener('click', onAnchorClick)
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])
}
