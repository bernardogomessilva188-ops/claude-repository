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
      className="relative overflow-hidden border-y border-line-200 bg-paper-50"
    >
      <div aria-hidden="true" className="grid-texture absolute inset-0 opacity-60" />

      <div className="relative">
        <div data-reveal className="max-w-3xl">
          <SectionTag>A oferta</SectionTag>
          <SectionTitle>
            Menos que um corte de cabelo —{' '}
            <span className="text-sage-600">pra mudar como você se vê todo dia</span>
          </SectionTitle>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          {/* O que vem dentro */}
          <div
            data-reveal
            className="card-shadow rounded-2xl border border-line-200 bg-paper-0 p-7 md:p-9"
          >
            <h3 className="text-2xl font-extrabold">{PRODUCT.fullName}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-500">
              Um guia digital direto ao ponto: nada de teoria, nada de enrolação. Você abre no
              celular e já sabe o que fazer hoje.
            </p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {included.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-ink-700">
                  <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-sage-600" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-9 border-t border-line-200 pt-7">
              <h4 className="font-display text-sm font-bold tracking-widest text-sage-700 uppercase">
                E ainda leva 4 bônus
              </h4>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {bonuses.map((bonus) => (
                  <div
                    key={bonus.tag}
                    className="rounded-xl border border-line-200 bg-paper-50 p-5 transition-colors duration-200 hover:border-sage-200 hover:bg-sage-50"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-display text-[0.7rem] font-bold tracking-widest text-ink-400 uppercase">
                        {bonus.tag}
                      </span>
                      <span className="text-xs font-semibold text-ink-400 line-through">
                        {bonus.value}
                      </span>
                    </div>
                    <p className="mt-2 font-display font-bold text-ink-900">{bonus.title}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink-500">{bonus.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card de preço — id usado pela barra fixa do mobile (StickyMobileCta) */}
          <div id="oferta-preco" className="lg:sticky lg:top-24 lg:self-start">
            <div
              data-reveal
              style={{ '--reveal-delay': '120ms' }}
              className="overflow-hidden rounded-2xl border-2 border-sage-600 bg-paper-0 shadow-[0_24px_60px_-20px_rgba(35,87,67,0.35)]"
            >
              <div className="bg-sage-700 px-6 py-3 text-center">
                <span className="font-display text-xs font-extrabold tracking-[0.2em] text-paper-0 uppercase">
                  Oferta de lançamento
                </span>
              </div>

              <div className="p-7 text-center">
                <p className="text-sm text-ink-500">
                  Valor com os bônus:{' '}
                  <span className="line-through">
                    {PRODUCT.priceFull} + {PRODUCT.bonusValue}
                  </span>
                </p>

                <div className="mt-4">
                  <span className="block text-sm font-semibold text-ink-500">hoje por apenas</span>
                  <span className="mt-1 block font-display text-6xl leading-none font-extrabold text-ink-900">
                    {PRODUCT.price}
                  </span>
                  <span className="mt-2 block text-sm text-ink-500">
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
                <div className="mt-6 space-y-2.5 rounded-xl border border-clay-500/40 bg-clay-100/60 px-4 py-4 text-left">
                  <p className="flex items-start gap-2 text-xs leading-relaxed text-ink-700">
                    <IconClock className="mt-0.5 h-4 w-4 shrink-0 text-clay-600" />
                    <span>
                      Preço promocional válido até{' '}
                      <strong className="text-ink-900">{PLACEHOLDER.offerDeadline}</strong> ou
                      enquanto durar o lote atual.
                    </span>
                  </p>
                  <p className="text-[0.7rem] text-ink-400">
                    [PLACEHOLDER] Ajuste o prazo em <code>src/config.js</code>. Só mantenha esse
                    bloco se a condição for real.
                  </p>
                </div>

                <p className="mt-5 flex items-center justify-center gap-2 text-xs text-ink-400">
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
