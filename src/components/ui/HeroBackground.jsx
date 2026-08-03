import { useEffect, useRef, useState } from 'react'
import { HERO_BACKGROUNDS } from '../../config'

/**
 * Fundo do herói: slideshow em fade com efeito Ken Burns (zoom lento) e
 * parallax na rolagem.
 *
 * Três camadas de movimento, todas baratas para o navegador (só `transform` e
 * `opacity`, nada que force recálculo de layout):
 *   1. Ken Burns — a imagem ativa dá um zoom lento e contínuo.
 *   2. Fade — a troca entre as imagens é um cross-fade de 1,6s.
 *   3. Parallax — o bloco inteiro sobe mais devagar que o conteúdo ao rolar.
 *
 * Com `prefers-reduced-motion: reduce` fica tudo estático na primeira imagem.
 *
 * As imagens ficam em `public/hero/` e são declaradas em `HERO_BACKGROUNDS`
 * (src/config.js) — veja lá as instruções para trocar pelas fotos reais.
 */

const SLIDE_INTERVAL = 7000

export default function HeroBackground() {
  const [active, setActive] = useState(0)
  const [animate, setAnimate] = useState(false)
  const layerRef = useRef(null)

  // Só liga as animações depois de saber a preferência do usuário.
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setAnimate(!query.matches)
    apply()
    query.addEventListener('change', apply)
    return () => query.removeEventListener('change', apply)
  }, [])

  // Slideshow
  useEffect(() => {
    if (!animate || HERO_BACKGROUNDS.length < 2) return
    const id = setInterval(
      () => setActive((current) => (current + 1) % HERO_BACKGROUNDS.length),
      SLIDE_INTERVAL,
    )
    return () => clearInterval(id)
  }, [animate])

  // Parallax — acompanha o scroll (inclusive o interpolado pelo Lenis, que
  // continua movendo o scroll real da página e disparando o evento nativo).
  useEffect(() => {
    if (!animate) return
    const layer = layerRef.current
    if (!layer) return

    let frame = 0
    const update = () => {
      frame = 0
      const offset = Math.min(window.scrollY, window.innerHeight) * 0.28
      layer.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
      layer.style.transform = ''
    }
  }, [animate])

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* camada que sofre o parallax */}
      <div ref={layerRef} className="absolute -inset-x-0 -top-24 -bottom-32 will-change-transform">
        {HERO_BACKGROUNDS.map((image, index) => {
          const isActive = index === active
          return (
            <picture key={image.src}>
              <source media="(max-width: 640px)" srcSet={image.srcSmall} type="image/webp" />
              <img
                src={image.src}
                alt=""
                width="1920"
                height="1200"
                // a primeira imagem é o LCP do herói: carrega com prioridade;
                // as outras só entram depois, sem competir com o texto
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'low'}
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[1600ms] ease-out"
                style={{
                  opacity: isActive ? 1 : 0,
                  transformOrigin: image.origin,
                  animation:
                    animate && isActive ? 'hero-kenburns 14s ease-out forwards' : 'none',
                }}
              />
            </picture>
          )
        })}
      </div>

      {/* Scrims claros: véu branco sob a coluna de texto, transparente sobre a
          foto, e uma emenda suave com o topo e com a próxima seção. */}
      <div className="absolute inset-0 bg-gradient-to-r from-paper-0 via-paper-0/85 to-paper-0/20 md:via-paper-0/70 md:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-paper-0/60 via-transparent to-paper-0" />
      <div className="grid-texture absolute inset-0 opacity-40" />
    </div>
  )
}
