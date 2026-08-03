import { PLACEHOLDER, PRODUCT } from '../config'
import CtaButton from './ui/CtaButton'
import Section, { SectionTag, SectionTitle } from './ui/Section'
import { IconCheck, IconClock, IconLock } from './ui/Icons'

const included = [
  'Guia completo Mens Helper (PDF + versão para celular)',
  'Diagnóstico de 5 minutos: seu tipo de pele e seu ponto fraco',
  'Plano de 30 dias com tarefa curta para cada dia',
  'Rotina de skincare em 4 passos, manhã e noite',
  'Treino de 20 minutos com e sem academia',
  'Protocolo de sono, foco e controle de estresse',
  'Guia de barba, cabelo e formato de rosto',
  'Guarda-roupa mínimo: 18 peças que resolvem tudo',
]

const bonuses = [
  {
    tag: 'Bônus 1',
    title: 'Checklist Rotina de 10 Minutos',
    text: 'PDF para imprimir e colar no espelho. Manhã e noite, sem pensar.',
    value: 'R$ 37',
  },
  {
    tag: 'Bônus 2',
    title: 'Guia de Compras Sem Enrolação',
    text: '12 produtos que valem o dinheiro — e 7 que são só marketing caro.',
    value: 'R$ 47',
  },
  {
    tag: 'Bônus 3',
    title: 'Protocolo Sono & Energia em 7 Dias',
    text: 'O ajuste que faz mais diferença na sua cara do que qualquer creme.',
    value: 'R$ 39',
  },
  {
    tag: 'Bônus 4',
    title: 'Planilha de Hábitos 30 Dias',
    text: 'Marque o X todo dia. Simples assim — e é o que segura a constância.',
    value: 'R$ 27',
  },
]

export default function Offer() {
  return (
    <Section
      id="oferta"
      className="relative overflow-hidden border-y border-carbon-800 bg-carbon-900"
    >
      <div aria-hidden="true" className="grid-texture absolute inset-0 opacity-50" />

      <div className="relative">
        <div className="max-w-3xl">
          <SectionTag>A oferta</SectionTag>
          <SectionTitle>
            Tudo que você precisa por menos que{' '}
            <span className="text-acid-400">um combo de lanche</span>
          </SectionTitle>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          {/* O que vem dentro */}
          <div className="rounded-2xl border border-carbon-700 bg-carbon-850 p-7 md:p-9">
            <h3 className="text-2xl font-extrabold">{PRODUCT.fullName}</h3>
            <p className="mt-3 text-sm leading-relaxed text-fog-400">
              Um guia digital direto ao ponto: nada de teoria, nada de enrolação. Você abre no
              celular e já sabe o que fazer hoje.
            </p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {included.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-fog-200">
                  <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-acid-400" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-9 border-t border-carbon-700 pt-7">
              <h4 className="font-display text-sm font-bold tracking-widest text-acid-400 uppercase">
                E ainda leva 4 bônus
              </h4>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {bonuses.map((bonus) => (
                  <div
                    key={bonus.tag}
                    className="rounded-xl border border-carbon-700 bg-carbon-900 p-5"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-display text-[0.7rem] font-bold tracking-widest text-fog-500 uppercase">
                        {bonus.tag}
                      </span>
                      <span className="text-xs font-semibold text-fog-500 line-through">
                        {bonus.value}
                      </span>
                    </div>
                    <p className="mt-2 font-display font-bold text-fog-50">{bonus.title}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-fog-400">{bonus.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card de preço — id usado pela barra fixa do mobile (StickyMobileCta) */}
          <div id="oferta-preco" className="lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-2xl border-2 border-acid-500/70 bg-carbon-850">
              <div className="border-b border-carbon-700 bg-acid-400 px-6 py-3 text-center">
                <span className="font-display text-xs font-extrabold tracking-[0.2em] text-carbon-950 uppercase">
                  Oferta de lançamento
                </span>
              </div>

              <div className="p-7 text-center">
                <p className="text-sm text-fog-400">
                  Valor com os bônus:{' '}
                  <span className="line-through">
                    {PRODUCT.priceFull} + {PRODUCT.bonusValue}
                  </span>
                </p>

                <div className="mt-4">
                  <span className="block text-sm font-semibold text-fog-400">hoje por apenas</span>
                  <span className="mt-1 block font-display text-6xl leading-none font-extrabold text-fog-50">
                    {PRODUCT.price}
                  </span>
                  <span className="mt-2 block text-sm text-fog-400">
                    à vista ou {PRODUCT.installments}
                  </span>
                </div>

                <div className="mt-7">
                  <CtaButton
                    fullWidth
                    microcopy="Você será redirecionado para o checkout seguro"
                  >
                    Quero meu guia agora
                  </CtaButton>
                </div>

                {/* ⚠️ Escassez: só use se for verdade. Prazo/lote falso derruba a confiança. */}
                <div className="mt-6 space-y-2.5 rounded-xl border border-ember-500/30 bg-ember-500/5 px-4 py-4 text-left">
                  <p className="flex items-start gap-2 text-xs leading-relaxed text-fog-200">
                    <IconClock className="mt-0.5 h-4 w-4 shrink-0 text-ember-500" />
                    <span>
                      Preço promocional válido até{' '}
                      <strong className="text-fog-50">{PLACEHOLDER.offerDeadline}</strong> ou
                      enquanto durar o lote atual.
                    </span>
                  </p>
                  <p className="text-[0.7rem] text-fog-500">
                    [PLACEHOLDER] Ajuste o prazo em <code>src/config.js</code>. Só mantenha esse
                    bloco se a condição for real.
                  </p>
                </div>

                <p className="mt-5 flex items-center justify-center gap-2 text-xs text-fog-500">
                  <IconLock className="h-4 w-4" />
                  Compra segura · Acesso imediato por e-mail
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
