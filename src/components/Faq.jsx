import { useState } from 'react'
import { PRODUCT } from '../config'
import Section, { SectionLead, SectionTag, SectionTitle } from './ui/Section'
import { IconPlus } from './ui/Icons'

const faqs = [
  {
    q: 'Isso serve pra mim mesmo sem saber nada do assunto?',
    a: 'Serve principalmente pra você. O guia parte do zero absoluto: explica o que é cada coisa, por que importa e em que ordem fazer. Não existe pré-requisito nenhum.',
  },
  {
    q: 'Vou precisar comprar um monte de produto caro?',
    a: 'Não. O guia de compras mostra o que resolve em farmácia, com opções baratas e caras lado a lado. Dá pra montar a rotina inteira gastando pouco — e um dos bônus é justamente a lista do que NÃO vale o dinheiro.',
  },
  {
    q: 'Quanto tempo por dia isso toma?',
    a: 'Cerca de 10 minutos: 5 de manhã e 5 à noite. O treino de 20 minutos é opcional e você escolhe quantos dias por semana encaixa.',
  },
  {
    q: 'Como recebo o material depois de comprar?',
    a: 'O acesso chega no seu e-mail em poucos minutos após a confirmação do pagamento. É digital: você lê no celular, no computador ou imprime se preferir.',
  },
  {
    q: 'É assinatura? Vai cobrar de novo depois?',
    a: `Não. É pagamento único de ${PRODUCT.price}. Você compra uma vez e o material é seu, incluindo as atualizações futuras.`,
  },
  {
    q: 'Tenho pele sensível / uso remédio. Posso seguir?',
    a: 'O guia é educativo e trabalha com o básico bem feito. Ele não substitui consulta com dermatologista ou médico — se você tem uma condição de pele diagnosticada ou usa medicação específica, confirme com seu profissional antes.',
  },
  {
    q: 'E se eu não gostar?',
    a: `Você tem ${PRODUCT.guaranteeDays} dias de garantia. Um e-mail e devolvemos 100% do valor, sem enrolação.`,
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <Section id="faq" className="border-y border-carbon-800 bg-carbon-900">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <SectionTag>Dúvidas</SectionTag>
          <SectionTitle>Perguntas que todo mundo faz antes de comprar</SectionTitle>
          <SectionLead>
            Se a sua não estiver aqui, chama no e-mail que a gente responde — de verdade, sem robô.
          </SectionLead>
        </div>

        <div className="divide-y divide-carbon-700 border-y border-carbon-700">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={faq.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-painel-${index}`}
                    id={`faq-botao-${index}`}
                    className="flex w-full items-center justify-between gap-5 py-6 text-left"
                  >
                    <span className="font-display text-base font-bold text-fog-50 md:text-lg">
                      {faq.q}
                    </span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? 'rotate-45 border-acid-400 text-acid-400'
                          : 'border-carbon-600 text-fog-400'
                      }`}
                    >
                      <IconPlus className="h-4 w-4" />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-painel-${index}`}
                  role="region"
                  aria-labelledby={`faq-botao-${index}`}
                  hidden={!isOpen}
                  className="pb-6"
                >
                  <p className="max-w-2xl text-[0.95rem] leading-relaxed text-fog-400">{faq.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
