import ImageSlot from './ui/ImageSlot'
import RevealWords from './ui/RevealWords'
import Section, { DriftShape, SectionLead, SectionTag, SectionTitle } from './ui/Section'

/** Seção de dor: nomear o problema exatamente como o cara descreveria. */
const pains = [
  {
    title: 'O espelho entrega o cansaço',
    text: 'Olheira, pele oleosa de manhã e ressecada à noite, aquela cara de quem dormiu mal — mesmo quando você dormiu.',
  },
  {
    title: 'A gaveta cheia de produto sem uso',
    text: 'Você comprou por indicação, usou duas vezes, não viu diferença e largou. Não era o produto: era a falta de ordem.',
  },
  {
    title: 'Começa na segunda, para na quarta',
    text: 'Treino, comida, sono, barba. Você faz um, esquece dois e desiste do quarto. Motivação acaba; sistema não.',
  },
  {
    title: 'Perguntar dá preguiça — e vergonha',
    text: 'Ninguém te ensinou isso. E pesquisar cai naquele conteúdo cheio de nome complicado, feito pra outro público.',
  },
  {
    title: 'A roupa não fecha com você',
    text: 'Você se arruma pra sair e sente que alguma coisa está errada, mas não sabe dizer o quê.',
  },
  {
    title: 'A confiança some na hora errada',
    text: 'Reunião, encontro, foto. Você se encolhe justo quando precisava estar inteiro.',
  },
]

export default function PainPoints() {
  return (
    <Section id="problema" className="overflow-hidden border-y border-line-200 bg-paper-50">
      <DriftShape className="top-10 -right-24 h-80 w-80 bg-sage-100/80" />
      <DriftShape className="-bottom-24 -left-28 h-72 w-72 bg-sand-100/90 [animation-delay:-7s]" />

      <div data-reveal className="max-w-3xl">
        <SectionTag>O problema real</SectionTag>
        <SectionTitle>
          Você não é relaxado.
          <br />
          Você nunca teve um <span className="text-sage-600">sistema</span>.
        </SectionTitle>
        <SectionLead>
          Ninguém sentou com você pra explicar o básico. Aí vira aquilo: você sabe que devia
          cuidar de si, mas não sabe por onde começar — então não começa.
        </SectionLead>
      </div>

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {pains.map((pain, index) => (
          <li
            key={pain.title}
            data-reveal
            style={{ '--reveal-delay': `${(index % 3) * 100}ms` }}
            className="card-shadow rounded-2xl border border-line-200 bg-paper-0 p-7 transition-shadow duration-300 hover:card-shadow-hover"
          >
            <span className="font-display text-sm font-bold text-clay-600" aria-hidden="true">
              ✕
            </span>
            <h3 className="mt-3 text-lg font-bold">{pain.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{pain.text}</p>
          </li>
        ))}
      </ul>

      <div className="mt-14 grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
        {/* espaço de imagem — troque public/images/problema.webp */}
        <ImageSlot name="problema" />
        <RevealWords
          as="p"
          step={60}
          className="max-w-2xl font-display text-xl leading-snug font-bold text-ink-900 md:text-2xl"
        >
          Se você leu isso e pensou{' '}
          <span className="text-sage-600">“é exatamente o meu caso”</span> — o problema tem
          conserto, e é mais simples do que parece.
        </RevealWords>
      </div>
    </Section>
  )
}
