import Section, { DriftShape, SectionLead, SectionTag, SectionTitle } from './ui/Section'
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
    title: 'Pele em ordem',
    text: 'Quatro passos, 5 minutos de manhã e 5 à noite. Serve pra pele oleosa, seca ou mista — o diagnóstico te mostra a sua em 5 perguntas.',
  },
  {
    icon: IconRazor,
    title: 'Barba e cabelo com padrão',
    text: 'O corte certo pro formato do seu rosto, como pedir no barbeiro em uma frase e o que fazer entre uma visita e outra.',
  },
  {
    icon: IconDumbbell,
    title: 'Corpo que acompanha você',
    text: 'Treino de 20 minutos que cabe em qualquer semana, com ou sem academia. Progressão clara, sem inventar moda.',
  },
  {
    icon: IconBrain,
    title: 'Cabeça no lugar',
    text: 'Sono, estresse e foco tratados como hábito, não como sermão de autoajuda. O que funciona e o que é perda de tempo.',
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
    <Section id="beneficios" className="overflow-hidden">
      <DriftShape className="-top-16 -left-24 h-80 w-80 bg-sage-50 [animation-delay:-4s]" />

      <div data-reveal className="max-w-3xl">
        <SectionTag>A solução</SectionTag>
        <SectionTitle>
          Seis frentes. Um plano só.{' '}
          <span className="text-sage-600">Dez minutos por dia.</span>
        </SectionTitle>
        <SectionLead>
          O Mens Helper reúne o que realmente muda sua aparência, sua saúde e sua confiança — em
          linguagem de gente, com o passo a passo já montado. Você só executa.
        </SectionLead>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map(({ icon: Icon, title, text }, index) => (
          <article
            key={title}
            data-reveal
            style={{ '--reveal-delay': `${(index % 3) * 100}ms` }}
            className="group card-shadow relative overflow-hidden rounded-2xl border border-line-200 bg-paper-0 p-7 transition-all duration-300 hover:-translate-y-1 hover:card-shadow-hover"
          >
            <span
              aria-hidden="true"
              className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-sage-100/0 blur-2xl transition-colors duration-300 group-hover:bg-sage-100"
            />
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-sage-50 text-sage-700 transition-colors duration-300 group-hover:bg-sage-600 group-hover:text-paper-0">
              <Icon className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-xl font-bold">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-500">{text}</p>
          </article>
        ))}
      </div>

      <div data-reveal className="mt-14 flex justify-center">
        <CtaButton microcopy="Leva você direto para a oferta — sem cadastro">
          Ver o que vem no guia
        </CtaButton>
      </div>
    </Section>
  )
}
