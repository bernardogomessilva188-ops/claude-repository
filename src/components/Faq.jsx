import { useState } from 'react'
import { PRODUCT } from '../config'
import Section, { ChapterLead, ChapterMark, ChapterTitle } from './ui/Section'

const faqs = [
  {
    q: 'Serve pra mim mesmo sem saber nada do assunto?',
    a: 'Serve principalmente pra você. O manual parte do zero absoluto: explica o que é cada coisa, por que importa e em que ordem fazer. Não existe pré-requisito.',
  },
  {
    q: 'Vou precisar comprar produto caro?',
    a: 'Não. O guia de compras mostra o que resolve em farmácia, com opção barata e cara lado a lado. Dá para montar a rotina inteira gastando pouco — e um dos anexos é justamente a lista do que não vale o dinheiro.',
  },
  {
    q: 'Quanto tempo por dia isso toma?',
    a: 'Cerca de dez minutos: cinco de manhã e cinco à noite. O treino de vinte minutos é opcional, e você escolhe quantos dias por semana encaixa.',
  },
  {
    q: 'Como recebo o material?',
    a: 'O acesso chega no seu e-mail poucos minutos depois da confirmação do pagamento. É digital: leia no celular, no computador ou imprima.',
  },
  {
    q: 'É assinatura? Vai cobrar de novo?',
    a: `Não. É pagamento único de ${PRODUCT.price}. Você compra uma vez e o material é seu, incluindo as atualizações futuras.`,
  },
  {
    q: 'Tenho pele sensível ou uso medicação. Posso seguir?',
    a: 'O manual é educativo e trabalha com o básico bem feito. Ele não substitui consulta com dermatologista ou médico — se você tem condição de pele diagnosticada ou usa medicação específica, confirme com seu profissional antes.',
  },
  {
    q: 'E se eu não gostar?',
    a: `Você tem ${PRODUCT.guaranteeDays} dias de garantia. Um e-mail e devolvemos 100% do valor, sem enrolação.`,
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <Section id="faq" chapter="AS DÚVIDAS" chapterNumber="07" tone="darker">
      <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <ChapterMark number="07" name="As dúvidas" />
          <ChapterTitle>
            <>Perguntas que</>
            <>todo mundo faz.</>
          </ChapterTitle>
          <ChapterLead>
            Se a sua não estiver aqui, chama no e-mail — a gente responde de verdade, sem robô.
          </ChapterLead>
        </div>

        <div className="border-t border-ember-600">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={faq.q} className="border-b border-ember-600">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-painel-${index}`}
                    id={`faq-botao-${index}`}
                    className="group flex w-full items-start gap-6 py-7 text-left"
                  >
                    <span
                      className={`label-mono mt-1.5 transition-colors duration-300 ${
                        isOpen ? 'text-brass-500' : 'text-fog-500 group-hover:text-brass-500'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`flex-1 text-lg leading-snug font-medium transition-colors duration-300 ${
                        isOpen ? 'text-bone-100' : 'text-fog-400 group-hover:text-bone-100'
                      }`}
                    >
                      {faq.q}
                    </span>
                    {/* marcador de aberto/fechado: dois traços que viram um */}
                    <span
                      aria-hidden="true"
                      className="relative mt-3 h-3 w-3 shrink-0"
                    >
                      <span
                        className={`absolute top-1/2 left-0 h-px w-3 -translate-y-1/2 transition-colors duration-300 ${
                          isOpen ? 'bg-brass-500' : 'bg-fog-500 group-hover:bg-brass-500'
                        }`}
                      />
                      <span
                        className={`absolute top-1/2 left-0 h-px w-3 -translate-y-1/2 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isOpen
                            ? 'rotate-0 bg-brass-500'
                            : 'rotate-90 bg-fog-500 group-hover:bg-brass-500'
                        }`}
                      />
                    </span>
                  </button>
                </h3>
                {/* transição de altura sem medir nada: grid-rows 0fr → 1fr */}
                <div
                  id={`faq-painel-${index}`}
                  role="region"
                  aria-labelledby={`faq-botao-${index}`}
                  className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[58ch] pb-8 pl-12 text-[0.95rem] leading-[1.7] text-fog-400">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
