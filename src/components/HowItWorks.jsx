import Section, { SectionLead, SectionTag, SectionTitle } from './ui/Section'

const steps = [
  {
    title: 'Garanta o acesso',
    text: 'Pagamento único. O guia cai no seu e-mail em menos de 2 minutos, pra ler no celular ou no computador.',
    time: '2 min',
  },
  {
    title: 'Faça o diagnóstico',
    text: 'Cinco perguntas rápidas mostram seu tipo de pele, seu ponto fraco de rotina e por onde começar.',
    time: '5 min',
  },
  {
    title: 'Rode o plano de 30 dias',
    text: 'Cada dia tem uma tarefa curta e clara. Nada de decidir nada: é só abrir e executar.',
    time: '10 min/dia',
  },
  {
    title: 'Deixe virar hábito',
    text: 'No fim dos 30 dias você usa os checklists de manutenção. A rotina se sustenta sem você pensar nela.',
    time: 'Contínuo',
  },
]

export default function HowItWorks() {
  return (
    <Section id="como-funciona" className="border-y border-carbon-800 bg-carbon-900">
      <div className="max-w-3xl">
        <SectionTag>Como funciona</SectionTag>
        <SectionTitle>Do zero à rotina rodando em 4 passos</SectionTitle>
        <SectionLead>
          Sem curso de 40 horas, sem plataforma complicada, sem grupo de WhatsApp apitando. Você
          abre, faz, fecha.
        </SectionLead>
      </div>

      <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="relative overflow-hidden rounded-2xl border border-carbon-700 bg-carbon-850 p-7"
          >
            <span
              aria-hidden="true"
              className="step-number absolute -top-2 right-3 text-[5.5rem] opacity-70"
            >
              {index + 1}
            </span>
            <span className="relative inline-flex rounded-md bg-carbon-800 px-2.5 py-1 font-display text-[0.7rem] font-bold tracking-widest text-acid-400 uppercase">
              {step.time}
            </span>
            <h3 className="relative mt-4 text-lg font-bold">{step.title}</h3>
            <p className="relative mt-2.5 text-sm leading-relaxed text-fog-400">{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
