import Section, { SectionLead, SectionTag, SectionTitle } from './ui/Section'
import CtaButton from './ui/CtaButton'
import {
  IconBrain,
  IconCalendarCheck,
  IconDroplet,
  IconDumbbell,
  IconRazor,
  IconShirt,
} from './ui/Icons'

const benefits = [
  {
    icon: IconDroplet,
    title: 'Pele sob controle',
    text: 'Rotina de 4 passos que leva 5 minutos de manhã e 5 à noite. Serve pra pele oleosa, seca ou mista — você descobre a sua no diagnóstico.',
  },
  {
    icon: IconRazor,
    title: 'Barba e cabelo com padrão',
    text: 'Qual corte combina com o formato do seu rosto, como pedir no barbeiro sem enrolação e o que fazer entre uma visita e outra.',
  },
  {
    icon: IconDumbbell,
    title: 'Corpo em movimento',
    text: 'Treino de 20 minutos que cabe em qualquer semana, com ou sem academia. Progressão clara, sem inventar moda.',
  },
  {
    icon: IconBrain,
    title: 'Cabeça no lugar',
    text: 'Sono, estresse e foco tratados como hábito, não como papo de autoajuda. O que funciona e o que é perda de tempo.',
  },
  {
    icon: IconShirt,
    title: 'Estilo sem esforço',
    text: 'Um guarda-roupa enxuto que resolve 90% das situações: trabalho, encontro, fim de semana. Menos peça, mais acerto.',
  },
  {
    icon: IconCalendarCheck,
    title: 'Constância de verdade',
    text: 'Checklists diários e semanais pra rotina se sustentar sozinha depois dos 30 dias — mesmo na semana corrida.',
  },
]

export default function Benefits() {
  return (
    <Section id="beneficios">
      <div className="max-w-3xl">
        <SectionTag>A solução</SectionTag>
        <SectionTitle>
          Seis frentes. Um plano só.{' '}
          <span className="text-acid-400">Dez minutos por dia.</span>
        </SectionTitle>
        <SectionLead>
          O Mens Helper reúne o que realmente muda sua aparência, sua saúde e sua confiança — em
          linguagem de gente, com o passo a passo já montado. Você só executa.
        </SectionLead>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-carbon-700 bg-carbon-900 p-7 transition-all duration-200 hover:-translate-y-1 hover:border-acid-500/60"
          >
            <span
              aria-hidden="true"
              className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-acid-400/0 blur-2xl transition-colors duration-300 group-hover:bg-acid-400/10"
            />
            <span className="grid h-12 w-12 place-items-center rounded-xl border border-carbon-600 bg-carbon-800 text-acid-400">
              <Icon className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-xl font-bold">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-fog-400">{text}</p>
          </article>
        ))}
      </div>

      <div className="mt-14 flex justify-center">
        <CtaButton microcopy="Leva você direto para a oferta — sem cadastro">
          Ver o que vem no guia
        </CtaButton>
      </div>
    </Section>
  )
}
