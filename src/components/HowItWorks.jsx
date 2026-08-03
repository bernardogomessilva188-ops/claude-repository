import ImageSlot from './ui/ImageSlot'
import Section, { ChapterLead, ChapterMark, ChapterTitle } from './ui/Section'

/**
 * Aqui a numeração é literal: são quatro passos numa ordem que importa.
 * O leitor não pode fazer o passo 3 antes do 1 — por isso o número aparece
 * grande, como marcação de etapa de manual.
 */
const steps = [
  {
    time: '2 min',
    title: 'Garanta o acesso',
    text: 'Pagamento único. O manual chega no seu e-mail em menos de dois minutos, para ler no celular ou no computador.',
  },
  {
    time: '5 min',
    title: 'Faça o diagnóstico',
    text: 'Cinco perguntas apontam seu tipo de pele, seu ponto fraco de rotina e por onde começar.',
  },
  {
    time: '10 min/dia',
    title: 'Rode o plano de 30 dias',
    text: 'Cada dia traz uma tarefa curta e clara. Nada para decidir: é abrir e executar.',
  },
  {
    time: 'Contínuo',
    title: 'Deixe virar hábito',
    text: 'No fim dos 30 dias você passa para os checklists de manutenção. A rotina se sustenta sem você pensar nela.',
  },
]

export default function HowItWorks() {
  return (
    <Section id="como-funciona" chapter="O PROCEDIMENTO" chapterNumber="03" tone="darker">
      <div className="grid gap-16 lg:grid-cols-[1fr_0.8fr] lg:gap-24">
        <div>
          <ChapterMark number="03" name="O procedimento" />
          <ChapterTitle>
            <>Do zero à rotina</>
            <>
              rodando em <em className="font-normal italic text-brass-500">4 passos</em>.
            </>
          </ChapterTitle>
          <ChapterLead>
            Sem curso de 40 horas, sem plataforma complicada, sem grupo de WhatsApp apitando.
            Você abre, faz, fecha.
          </ChapterLead>
        </div>

        {/* espaço de imagem — troque public/images/como-funciona.webp */}
        <ImageSlot
          name="comoFunciona"
          revealDelay="200ms"
          caption="Fig. 02 — a rotina em prática"
        />
      </div>

      <ol className="mt-24 border-t border-ember-600">
        {steps.map((step, index) => (
          <li
            key={step.title}
            data-reveal
            style={{ '--reveal-delay': `${index * 80}ms` }}
            className="group grid items-baseline gap-x-8 gap-y-4 border-b border-ember-600 py-9 transition-colors duration-500 hover:bg-espresso-800 md:grid-cols-[6rem_1fr_1fr] md:py-11"
          >
            <span className="font-display text-[2.5rem] leading-none font-medium text-ember-500 transition-colors duration-500 group-hover:text-brass-500 md:text-[3.5rem]">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <span className="label-mono text-brass-500">{step.time}</span>
              <h3 className="mt-3 font-display text-2xl leading-tight font-medium text-bone-100 md:text-[1.75rem]">
                {step.title}
              </h3>
            </div>
            <p className="max-w-[46ch] text-[0.95rem] leading-relaxed text-fog-400">
              {step.text}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
