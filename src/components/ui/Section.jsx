import RevealLines from './RevealLines'

/**
 * Capítulo do manual (BRANDBOOK §5 e §9).
 *
 * Cada seção é um capítulo numerado. A troca de fundo (espresso ↔ bone) é o
 * que separa os assuntos — não existe divisória decorativa entre seções.
 *
 * `tone` escolhe o par de cores; os componentes filhos herdam via as classes
 * de texto que este componente já aplica.
 */

const tones = {
  dark: 'bg-espresso-950 text-fog-400',
  darker: 'bg-espresso-900 text-fog-400',
  paper: 'bg-bone-100 text-slate-500',
}

export default function Section({
  id,
  chapter,
  chapterNumber,
  children,
  tone = 'dark',
  className = '',
  containerClassName = '',
  as: Tag = 'section',
}) {
  return (
    <Tag
      id={id}
      data-chapter={chapter}
      data-chapter-number={chapterNumber}
      className={`relative py-24 md:py-32 lg:py-40 ${tones[tone]} ${className}`}
    >
      <div className={`shell ${containerClassName}`}>{children}</div>
    </Tag>
  )
}

/**
 * Abertura de capítulo: número em mono, fio que se desenha e o nome.
 * A numeração carrega informação de verdade — a página é um manual, e os
 * capítulos são uma sequência que o leitor percorre em ordem.
 */
export function ChapterMark({ number, name, tone = 'dark' }) {
  const rule = tone === 'paper' ? 'text-sand-400' : 'text-ember-600'
  const numberColor = 'text-brass-500'
  const nameColor = tone === 'paper' ? 'text-slate-500' : 'text-fog-400'

  return (
    <div data-reveal className="flex items-center gap-4">
      <span className={`label-mono ${numberColor}`}>Nº {number}</span>
      <span
        data-reveal-rule
        className={`rule-x max-w-16 flex-1 ${rule}`}
        style={{ '--reveal-delay': '120ms' }}
      />
      <span className={`label-mono ${nameColor}`}>{name}</span>
    </div>
  )
}

/** Título de capítulo: Bodoni grande, subindo linha a linha. */
export function ChapterTitle({ children, className = '', delay = 200 }) {
  return (
    <RevealLines
      as="h2"
      delay={delay}
      className={`mt-8 font-display text-[2.5rem] leading-[1.02] font-medium tracking-[-0.02em] text-bone-100 sm:text-5xl lg:text-[4rem] ${className}`}
    >
      {children}
    </RevealLines>
  )
}

/** Texto de apoio abaixo do título. Medida de leitura curta (§4). */
export function ChapterLead({ children, className = '', tone = 'dark' }) {
  const color = tone === 'paper' ? 'text-slate-500' : 'text-fog-400'
  return (
    <p
      data-reveal
      style={{ '--reveal-delay': '260ms' }}
      className={`mt-7 max-w-[46ch] text-lg leading-[1.65] ${color} ${className}`}
    >
      {children}
    </p>
  )
}
