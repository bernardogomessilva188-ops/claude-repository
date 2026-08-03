import ImageSlot from './ui/ImageSlot'
import Section, { ChapterLead, ChapterMark, ChapterTitle } from './ui/Section'

/** As dores, nomeadas exatamente como o leitor as descreveria. */
const pains = [
  {
    title: 'O espelho entrega o cansaço',
    text: 'Olheira, pele oleosa de manhã e ressecada à noite. A cara de quem dormiu mal — mesmo quando dormiu.',
  },
  {
    title: 'A gaveta cheia de produto parado',
    text: 'Comprou por indicação, usou duas vezes, não viu diferença, largou. Não era o produto: era a falta de ordem.',
  },
  {
    title: 'Começa na segunda, para na quarta',
    text: 'Treino, comida, sono, barba. Faz um, esquece dois, desiste do quarto. Motivação acaba; sistema não.',
  },
  {
    title: 'Perguntar dá preguiça e vergonha',
    text: 'Ninguém te ensinou. E pesquisar cai em conteúdo cheio de nome complicado, escrito para outro público.',
  },
  {
    title: 'A roupa não fecha com você',
    text: 'Se arruma para sair e sente que algo está errado, mas não consegue apontar o quê.',
  },
  {
    title: 'A confiança some na hora errada',
    text: 'Reunião, encontro, foto. Você se encolhe justo quando precisava estar inteiro.',
  },
]

export default function PainPoints() {
  return (
    <Section id="problema" chapter="O DIAGNÓSTICO" chapterNumber="01" tone="paper">
      <div className="grid gap-16 lg:grid-cols-[1fr_0.85fr] lg:gap-24">
        <div>
          <ChapterMark number="01" name="O diagnóstico" tone="paper" />
          <ChapterTitle className="!text-espresso-950">
            <>Você não é relaxado.</>
            <>
              Nunca teve um <em className="font-normal italic text-brass-600">sistema</em>.
            </>
          </ChapterTitle>
          <ChapterLead tone="paper">
            Ninguém sentou com você para explicar o básico. Aí vira isso: você sabe que devia
            cuidar de si, mas não sabe por onde começar — então não começa.
          </ChapterLead>
        </div>

        {/* espaço de imagem — troque public/images/problema.webp */}
        <ImageSlot name="problema" tone="paper" revealDelay="200ms" />
      </div>

      {/* Sintomas: lista numerada porque é uma lista de verificação, não uma
          sequência — o número aqui é índice de item, como num manual. */}
      <ol className="mt-20 grid gap-px border-t border-sand-300 sm:grid-cols-2 lg:grid-cols-3">
        {pains.map((pain, index) => (
          <li
            key={pain.title}
            data-reveal
            style={{ '--reveal-delay': `${(index % 3) * 90}ms` }}
            className="group border-b border-sand-300 bg-bone-100 px-1 py-9 transition-colors duration-500 hover:bg-bone-50 sm:px-6"
          >
            <span className="label-mono text-sand-400 transition-colors duration-500 group-hover:text-brass-600">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-5 text-xl leading-snug font-semibold text-espresso-950">
              {pain.title}
            </h3>
            <p className="mt-3 max-w-[38ch] text-[0.95rem] leading-relaxed text-slate-500">
              {pain.text}
            </p>
          </li>
        ))}
      </ol>

      <p
        data-reveal
        className="mt-16 max-w-[34ch] font-display text-3xl leading-[1.15] font-medium text-espresso-950 md:text-[2.5rem]"
      >
        Se você leu e pensou{' '}
        <em className="font-normal italic text-brass-600">“é exatamente o meu caso”</em> — tem
        conserto, e é mais simples do que parece.
      </p>
    </Section>
  )
}
