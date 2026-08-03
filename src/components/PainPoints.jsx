import Section, { SectionLead, SectionTag, SectionTitle } from './ui/Section'

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
    <Section id="problema" className="border-y border-carbon-800 bg-carbon-900">
      <div className="max-w-3xl">
        <SectionTag>O problema real</SectionTag>
        <SectionTitle>
          Você não é preguiçoso.
          <br />
          Você nunca teve um <span className="text-acid-400">sistema</span>.
        </SectionTitle>
        <SectionLead>
          Ninguém sentou com você pra explicar o básico. Aí vira aquilo: você sabe que devia
          cuidar de si, mas não sabe por onde começar — então não começa.
        </SectionLead>
      </div>

      <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-carbon-700 bg-carbon-700 sm:grid-cols-2 lg:grid-cols-3">
        {pains.map((pain) => (
          <li key={pain.title} className="bg-carbon-900 p-7 transition-colors hover:bg-carbon-850">
            <span className="font-display text-sm font-bold text-ember-500" aria-hidden="true">
              ✕
            </span>
            <h3 className="mt-3 text-lg font-bold">{pain.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-fog-400">{pain.text}</p>
          </li>
        ))}
      </ul>

      <p className="mt-12 max-w-2xl font-display text-xl leading-snug font-bold text-fog-50 md:text-2xl">
        Se você leu isso e pensou{' '}
        <span className="text-acid-400">“é exatamente o meu caso”</span> — o problema tem
        conserto, e é mais simples do que parece.
      </p>
    </Section>
  )
}
