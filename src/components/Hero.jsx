import { PLACEHOLDER } from '../config'
import AnimatedNumber from './ui/AnimatedNumber'
import CtaButton from './ui/CtaButton'
import HeroBackground from './ui/HeroBackground'
import { IconBolt, IconCheck, IconClock, IconDroplet, IconStar } from './ui/Icons'

const quickWins = ['10 minutos por dia', 'Com o que você já tem', 'Zero enrolação']

const proofChips = [
  { icon: IconClock, label: 'Rotina pronta, é só seguir' },
  { icon: IconDroplet, label: 'Pele em ordem na 2ª semana' },
  { icon: IconBolt, label: 'Mais energia em 30 dias' },
]

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[92svh] items-center overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* fotos de fundo com zoom lento, cross-fade e parallax */}
      <HeroBackground />

      <div className="shell">
        <div className="max-w-2xl">
          <span
            data-reveal
            className="inline-flex items-center gap-2 rounded-full border border-sage-200 bg-paper-0/80 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-sage-800 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-sage-600" />
            Guia digital · Acesso imediato
          </span>

          <h1
            data-reveal
            style={{ '--reveal-delay': '80ms' }}
            className="mt-6 text-4xl leading-[1.03] font-extrabold sm:text-5xl lg:text-6xl"
          >
            Pele em ordem. Corpo ativo. Cabeça no lugar.
            <span className="mt-2 block text-sage-600">10 minutos por dia. Só isso.</span>
          </h1>

          <p
            data-reveal
            style={{ '--reveal-delay': '160ms' }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-700"
          >
            O Mens Helper organiza seu autocuidado do zero: o que fazer, em que ordem e com o
            que você já tem em casa. Sem rotina de 14 passos, sem produto de R$ 300, sem papo
            furado.
          </p>

          <ul
            data-reveal
            style={{ '--reveal-delay': '240ms' }}
            className="mt-7 flex flex-wrap gap-x-6 gap-y-3"
          >
            {quickWins.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-semibold text-ink-900">
                <IconCheck className="h-4 w-4 shrink-0 text-sage-600" />
                {item}
              </li>
            ))}
          </ul>

          <div data-reveal style={{ '--reveal-delay': '320ms' }} className="mt-9">
            <CtaButton
              className="w-full sm:w-auto"
              microcopy="Acesso imediato · 7 dias de garantia · Pagamento único"
            >
              Quero começar hoje
            </CtaButton>
          </div>

          {/* Prova social rápida — ⚠️ números de exemplo, ver src/config.js */}
          <div
            data-reveal
            style={{ '--reveal-delay': '400ms' }}
            className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-line-200 pt-6"
          >
            <div className="flex -space-x-2.5" aria-hidden="true">
              {['R', 'M', 'L', 'D'].map((initial) => (
                <span
                  key={initial}
                  className="grid h-9 w-9 place-items-center rounded-full border-2 border-paper-0 bg-sage-100 font-display text-xs font-bold text-sage-800"
                >
                  {initial}
                </span>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-sand-400">
                {[0, 1, 2, 3, 4].map((i) => (
                  <IconStar key={i} className="h-3.5 w-3.5" />
                ))}
                <span className="ml-1.5 text-xs font-semibold text-ink-900">
                  <AnimatedNumber value={PLACEHOLDER.rating} />
                  /5
                </span>
              </div>
              <p className="mt-0.5 text-xs text-ink-500">
                +<AnimatedNumber value={PLACEHOLDER.studentsCount} /> homens já seguem a rotina
              </p>
            </div>
          </div>

          {/* chips de resultado — no desktop encostam na foto, do lado direito */}
          <ul className="mt-10 flex flex-wrap gap-3 lg:absolute lg:right-8 lg:bottom-24 lg:mt-0 lg:max-w-[16rem] lg:flex-col xl:right-16">
            {proofChips.map(({ icon: Icon, label }, index) => (
              <li
                key={label}
                data-reveal
                style={{ '--reveal-delay': `${480 + index * 120}ms` }}
                className="card-shadow flex items-center gap-2 rounded-xl border border-line-200 bg-paper-0/90 px-3 py-2 text-xs font-semibold text-ink-900 backdrop-blur-sm sm:text-sm"
              >
                <Icon className="h-4 w-4 shrink-0 text-sage-600" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
