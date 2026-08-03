import CtaButton from './ui/CtaButton'
import ImageSlot from './ui/ImageSlot'
import Section, { ChapterLead, ChapterMark, ChapterTitle } from './ui/Section'
import {
  IconBrain,
  IconCalendarCheck,
  IconDroplet,
  IconDumbbell,
  IconRazor,
  IconShirt,
} from './ui/Icons'

/** As seis frentes do manual. Cada uma vira um módulo, com o tempo que custa. */
const modules = [
  {
    icon: IconDroplet,
    title: 'Pele',
    time: '10 min/dia',
    text: 'Quatro passos, cinco de manhã e cinco à noite. Oleosa, seca ou mista — o diagnóstico aponta a sua em cinco perguntas.',
  },
  {
    icon: IconRazor,
    title: 'Barba e cabelo',
    time: '1x por mês',
    text: 'O corte certo para o formato do seu rosto, como pedir no barbeiro em uma frase e o que fazer entre uma visita e outra.',
  },
  {
    icon: IconDumbbell,
    title: 'Corpo',
    time: '20 min, 3x',
    text: 'Treino que cabe em qualquer semana, com ou sem academia. Progressão clara, sem inventar moda.',
  },
  {
    icon: IconBrain,
    title: 'Sono e cabeça',
    time: '7 dias',
    text: 'Sono, estresse e foco tratados como hábito, não como sermão. O que funciona e o que é perda de tempo.',
  },
  {
    icon: IconShirt,
    title: 'Estilo',
    time: '18 peças',
    text: 'Um guarda-roupa enxuto que resolve 90% das situações: trabalho, encontro, fim de semana.',
  },
  {
    icon: IconCalendarCheck,
    title: 'Constância',
    time: 'Contínuo',
    text: 'Checklists diários e semanais para a rotina se sustentar sozinha depois dos 30 dias.',
  },
]

export default function Benefits() {
  return (
    <Section id="beneficios" chapter="OS MÓDULOS" chapterNumber="02" tone="dark">
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-24">
        {/* espaço de imagem — troque public/images/beneficios.webp */}
        <ImageSlot
          name="beneficios"
          className="order-2 lg:order-1"
          caption="Fig. 01 — o essencial, sem gaveta cheia"
        />

        <div className="order-1 lg:order-2">
          <ChapterMark number="02" name="Os módulos" />
          <ChapterTitle>
            <>Seis frentes.</>
            <>
              Um plano <em className="font-normal italic text-brass-500">só</em>.
            </>
          </ChapterTitle>
          <ChapterLead>
            O manual reúne o que realmente muda sua aparência, sua saúde e sua confiança —
            com o passo a passo já montado. Você só executa.
          </ChapterLead>
        </div>
      </div>

      <div className="mt-24 grid gap-px border-t border-ember-600 md:grid-cols-2 lg:grid-cols-3">
        {modules.map(({ icon: Icon, title, time, text }, index) => (
          <article
            key={title}
            data-reveal
            style={{ '--reveal-delay': `${(index % 3) * 90}ms` }}
            className="group relative border-b border-ember-600 bg-espresso-950 px-1 py-10 transition-colors duration-500 hover:bg-espresso-900 sm:px-7"
          >
            {/* fio de latão que cresce no topo do card no hover */}
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-brass-500 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 sm:inset-x-7"
            />
            <div className="flex items-center justify-between gap-4">
              <Icon className="h-7 w-7 text-brass-500" />
              <span className="label-mono text-fog-500">{time}</span>
            </div>
            <h3 className="mt-8 font-display text-[1.75rem] leading-none font-medium text-bone-100">
              {title}
            </h3>
            <p className="mt-4 max-w-[38ch] text-[0.95rem] leading-relaxed text-fog-400">
              {text}
            </p>
          </article>
        ))}
      </div>

      <div data-reveal className="mt-20">
        <CtaButton variant="outline" href="#oferta">
          Ver o manual completo
        </CtaButton>
      </div>
    </Section>
  )
}
