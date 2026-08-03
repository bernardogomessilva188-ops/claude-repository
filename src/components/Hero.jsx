import { PLACEHOLDER } from '../config'
import CtaButton from './ui/CtaButton'
import HeroVisual from './ui/HeroVisual'
import { IconCheck, IconStar } from './ui/Icons'

const quickWins = ['Rotina de 10 minutos', 'Sem produto caro', 'Passo a passo, sem teoria']

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      {/* fundo */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="grid-texture absolute inset-0 opacity-60" />
        <div className="absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-petrol-700/25 blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-carbon-950 to-transparent" />
      </div>

      <div className="shell grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-carbon-700 bg-carbon-900/80 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-fog-200">
            <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-acid-400" />
            Guia digital · Acesso imediato
          </span>

          <h1 className="mt-6 text-4xl leading-[1.03] font-extrabold sm:text-5xl lg:text-6xl">
            Pareça melhor, sinta-se melhor.
            <span className="mt-2 block text-acid-400">Em 10 minutos por dia.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-fog-400">
            O guia direto ao ponto para o cara que quer cuidar da pele, do corpo e da cabeça —
            sem frescura, sem gastar uma fortuna em produto e sem precisar virar outra pessoa.
          </p>

          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
            {quickWins.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-fog-200">
                <IconCheck className="h-4 w-4 shrink-0 text-acid-400" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <CtaButton
              className="w-full sm:w-auto"
              microcopy={`Acesso imediato · Garantia de 7 dias · Pagamento único`}
            >
              Quero meu guia agora
            </CtaButton>
          </div>

          {/* Prova social rápida — ⚠️ números de exemplo, ver src/config.js */}
          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-carbon-800 pt-6">
            <div className="flex -space-x-2.5" aria-hidden="true">
              {['R', 'M', 'L', 'D'].map((initial) => (
                <span
                  key={initial}
                  className="grid h-9 w-9 place-items-center rounded-full border-2 border-carbon-950 bg-carbon-700 font-display text-xs font-bold text-fog-200"
                >
                  {initial}
                </span>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-acid-400">
                {[0, 1, 2, 3, 4].map((i) => (
                  <IconStar key={i} className="h-3.5 w-3.5" />
                ))}
                <span className="ml-1.5 text-xs font-semibold text-fog-200">
                  {PLACEHOLDER.rating}/5
                </span>
              </div>
              <p className="mt-0.5 text-xs text-fog-500">
                +{PLACEHOLDER.studentsCount} homens já começaram a rotina
              </p>
            </div>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}
