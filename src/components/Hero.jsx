import { useEffect, useRef } from 'react'
import { PLACEHOLDER } from '../config'
import AnimatedNumber from './ui/AnimatedNumber'
import CtaButton from './ui/CtaButton'
import HeroBackground from './ui/HeroBackground'
import RevealLines from './ui/RevealLines'

const specs = [
  { label: 'Duração', value: '10 min/dia' },
  { label: 'Formato', value: 'Guia digital' },
  { label: 'Acesso', value: 'Imediato' },
]

export default function Hero() {
  const spotRef = useRef(null)

  /**
   * Foco que segue o cursor (BRANDBOOK §8).
   * Um halo de latão bem fraco acompanha o mouse sobre o fundo escuro — a
   * sensação é de luz passando por vidro âmbar. Só `transform`, sem custo de
   * layout, e desligado em telas de toque e em prefers-reduced-motion.
   */
  useEffect(() => {
    const spot = spotRef.current
    if (!spot) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    let frame = 0
    let x = 0
    let y = 0

    const draw = () => {
      frame = 0
      spot.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }

    const onMove = (event) => {
      const rect = spot.parentElement.getBoundingClientRect()
      x = event.clientX - rect.left
      y = event.clientY - rect.top
      if (!frame) frame = requestAnimationFrame(draw)
    }

    const parent = spot.parentElement
    parent.addEventListener('pointermove', onMove)
    spot.style.opacity = '1'
    return () => {
      parent.removeEventListener('pointermove', onMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section
      id="inicio"
      data-chapter="ABERTURA" data-chapter-number="00"
      className="relative isolate flex min-h-[94svh] items-end overflow-hidden bg-espresso-950 pt-36 pb-16 md:pt-44 md:pb-20"
    >
      <HeroBackground />

      {/* foco que segue o cursor */}
      <div
        ref={spotRef}
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-700"
        style={{
          marginLeft: '-18rem',
          marginTop: '-18rem',
          background:
            'radial-gradient(circle, rgba(200,149,80,0.16) 0%, rgba(200,149,80,0.05) 35%, transparent 68%)',
        }}
      />

      <div className="shell">
        <div className="grid gap-16 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
          <div>
            <div data-reveal className="flex items-center gap-4">
              <span className="label-mono text-brass-500">Nº 00</span>
              <span
                data-reveal-rule
                className="rule-x max-w-16 flex-1 text-ember-600"
                style={{ '--reveal-delay': '120ms' }}
              />
              <span className="label-mono text-fog-400">Edição 2026</span>
            </div>

            <RevealLines
              as="h1"
              delay={220}
              step={120}
              className="mt-10 font-display text-[3rem] leading-[0.98] font-medium tracking-[-0.025em] text-bone-100 sm:text-[4.25rem] lg:text-[5.75rem]"
            >
              <>O manual que</>
              <>deveria ter vindo</>
              <>
                <em className="font-normal italic text-brass-500">junto com você.</em>
              </>
            </RevealLines>

            <p
              data-reveal
              style={{ '--reveal-delay': '620ms' }}
              className="mt-10 max-w-[52ch] text-lg leading-[1.7] text-fog-400 md:text-xl"
            >
              Pele, barba, corpo e cabeça — organizados em protocolos de dez minutos.
              Ninguém te ensinou isso. Agora está escrito.
            </p>

            <div
              data-reveal
              style={{ '--reveal-delay': '760ms' }}
              className="mt-12 flex flex-col items-start gap-8 sm:flex-row sm:items-center"
            >
              <CtaButton microcopy="Acesso imediato · 7 dias de garantia">
                Quero meu manual
              </CtaButton>

              <a
                href="#beneficios"
                className="label-mono link-draw text-fog-400 transition-colors duration-300 hover:text-bone-100"
              >
                Ver o que tem dentro
              </a>
            </div>
          </div>

          {/* Ficha técnica: o produto descrito como um manual descreveria a si mesmo */}
          <dl
            data-reveal
            style={{ '--reveal-delay': '900ms' }}
            className="grid grid-cols-3 gap-px border-y border-ember-600 lg:grid-cols-1 lg:border-x-0 lg:border-b-0"
          >
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="py-5 lg:border-b lg:border-ember-600 lg:py-6"
              >
                <dt className="label-mono text-fog-500">{spec.label}</dt>
                <dd className="mt-2 font-display text-2xl font-medium text-bone-100 lg:text-[1.75rem]">
                  {spec.value}
                </dd>
              </div>
            ))}
            <div className="col-span-3 border-t border-ember-600 py-5 lg:col-span-1 lg:border-t-0 lg:border-b lg:py-6">
              <dt className="label-mono text-fog-500">Já seguem</dt>
              <dd className="mt-2 font-display text-2xl font-medium text-bone-100 lg:text-[1.75rem]">
                {/* ⚠️ número de exemplo — ver PLACEHOLDER em src/config.js */}
                <AnimatedNumber value={PLACEHOLDER.studentsCount} /> homens
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
