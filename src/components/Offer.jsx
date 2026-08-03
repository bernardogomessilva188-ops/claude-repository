import { PLACEHOLDER, PRODUCT } from '../config'
import CtaButton from './ui/CtaButton'
import ImageSlot from './ui/ImageSlot'
import Section, { ChapterMark, ChapterTitle } from './ui/Section'
import { IconCheck, IconClock, IconLock } from './ui/Icons'

/** Sumário do manual — o que o leitor recebe, listado como índice. */
const contents = [
  'Manual completo (PDF + versão para celular)',
  'Diagnóstico de 5 minutos: seu tipo de pele e seu ponto fraco',
  'Plano de 30 dias com uma tarefa curta por dia',
  'Rotina de pele em 4 passos, manhã e noite',
  'Treino de 20 minutos, com e sem academia',
  'Protocolo de sono, foco e controle de estresse',
  'Guia de barba, cabelo e formato de rosto',
  'Guarda-roupa mínimo: 18 peças que resolvem tudo',
]

const bonuses = [
  {
    tag: 'Anexo A',
    title: 'Checklist da rotina de 10 minutos',
    text: 'PDF para imprimir e colar no espelho. Manhã e noite, sem pensar.',
    value: 'R$ 37',
  },
  {
    tag: 'Anexo B',
    title: 'Guia de compras sem enrolação',
    text: '12 produtos que valem o dinheiro — e 7 que são só marketing caro.',
    value: 'R$ 47',
  },
  {
    tag: 'Anexo C',
    title: 'Protocolo sono e energia em 7 dias',
    text: 'O ajuste que faz mais diferença na sua cara do que qualquer creme.',
    value: 'R$ 39',
  },
  {
    tag: 'Anexo D',
    title: 'Planilha de hábitos de 30 dias',
    text: 'Marque o X todo dia. É o que segura a constância quando a semana aperta.',
    value: 'R$ 27',
  },
]

export default function Offer() {
  return (
    <Section id="oferta" chapter="A EDIÇÃO" chapterNumber="05" tone="paper">
      <div className="max-w-3xl">
        <ChapterMark number="05" name="A edição" tone="paper" />
        <ChapterTitle className="!text-espresso-950">
          <>Menos que um corte</>
          <>
            de cabelo, <em className="font-normal italic text-brass-600">para sempre</em>.
          </>
        </ChapterTitle>
      </div>

      <div className="mt-20 grid gap-px border-t border-sand-300 lg:grid-cols-[1.25fr_0.75fr]">
        {/* Sumário */}
        <div className="border-b border-sand-300 py-12 lg:border-r lg:pr-16">
          <div className="grid gap-12 sm:grid-cols-[1fr_10rem] sm:items-start">
            <div>
              <span className="label-mono text-slate-500">O que vem dentro</span>
              <h3 className="mt-5 font-display text-[2rem] leading-tight font-medium text-espresso-950">
                {PRODUCT.fullName}
              </h3>
              <p className="mt-4 max-w-[44ch] leading-relaxed text-slate-500">
                Um manual direto: nada de teoria, nada de enrolação. Você abre no celular e já
                sabe o que fazer hoje.
              </p>
            </div>
            {/* espaço de imagem — troque public/images/oferta-mockup.webp */}
            <ImageSlot name="ofertaMockup" tone="paper" className="mx-auto w-32 sm:mx-0 sm:w-full" />
          </div>

          <ul className="mt-12 grid gap-y-4 sm:grid-cols-2 sm:gap-x-10">
            {contents.map((item) => (
              <li key={item} className="flex gap-3 text-[0.95rem] leading-relaxed text-slate-600">
                <IconCheck className="mt-1 h-4 w-4 shrink-0 text-brass-600" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-14 border-t border-sand-300 pt-10">
            <span className="label-mono text-slate-500">E quatro anexos</span>
            <div className="mt-6 grid gap-px sm:grid-cols-2">
              {bonuses.map((bonus) => (
                <div
                  key={bonus.tag}
                  className="group border-t border-sand-300 py-6 transition-colors duration-500 sm:px-6 sm:first:pl-0"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="label-mono text-brass-600">{bonus.tag}</span>
                    <span className="label-mono text-sand-400 line-through">{bonus.value}</span>
                  </div>
                  <p className="mt-3 text-base font-semibold text-espresso-950">{bonus.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{bonus.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card de preço — id usado pela barra fixa do mobile (StickyMobileCta) */}
        <div id="oferta-preco" className="border-b border-sand-300 py-12 lg:sticky lg:top-28 lg:self-start lg:pl-16">
          <div data-reveal className="bg-espresso-950 p-8 shadow-[0_24px_60px_-24px_rgba(20,17,14,0.5)] md:p-10">
            <span className="label-mono text-brass-500">Edição de lançamento</span>

            <p className="label-mono mt-8 text-fog-500">
              Com os anexos:{' '}
              <span className="line-through">
                {PRODUCT.priceFull} + {PRODUCT.bonusValue}
              </span>
            </p>

            <p className="mt-4 flex items-baseline gap-2 font-display text-bone-100">
              <span className="text-2xl">R$</span>
              <span className="text-[5rem] leading-none font-medium">
                {PRODUCT.price.replace('R$ ', '')}
              </span>
            </p>
            <p className="label-mono mt-3 text-fog-400">
              à vista · ou {PRODUCT.installments}
            </p>

            <div className="mt-10">
              <CtaButton fullWidth microcopy="Você será levado ao checkout seguro">
                Quero meu manual
              </CtaButton>
            </div>

            {/* ⚠️ Escassez: só use se for verdade. Prazo falso destrói a confiança. */}
            <div className="mt-8 border-t border-ember-600 pt-6">
              <p className="flex items-start gap-3 text-xs leading-relaxed text-fog-400">
                <IconClock className="mt-0.5 h-4 w-4 shrink-0 text-oxblood-400" />
                <span>
                  Preço de lançamento válido até{' '}
                  <strong className="font-medium text-bone-100">
                    {PLACEHOLDER.offerDeadline}
                  </strong>{' '}
                  ou enquanto durar o lote atual.
                </span>
              </p>
              <p className="label-mono mt-4 text-[0.5625rem] leading-4 text-fog-500">
                [Placeholder] ajuste o prazo em src/config.js — mantenha o bloco só se a
                condição for real
              </p>
            </div>

            <p className="label-mono mt-8 flex items-center gap-2 text-fog-500">
              <IconLock className="h-4 w-4" />
              Compra segura · acesso por e-mail
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
