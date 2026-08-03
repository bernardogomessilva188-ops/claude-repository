/**
 * Casca padrão das seções: cuida do espaçamento vertical e da largura máxima,
 * para que os componentes de conteúdo não repitam isso o tempo todo.
 */
export default function Section({
  id,
  children,
  className = '',
  containerClassName = '',
  as: Tag = 'section',
}) {
  return (
    // a folga do header fixo ao chegar por âncora vem do `scroll-padding-top`
    // do <html> (src/index.css) — repetir com `scroll-mt` aqui somaria os dois
    <Tag id={id} className={`relative py-20 md:py-28 ${className}`}>
      <div className={`shell ${containerClassName}`}>{children}</div>
    </Tag>
  )
}

/** Etiqueta pequena que abre as seções (kicker). */
export function SectionTag({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-sage-200 bg-sage-50 px-3.5 py-1.5 font-display text-[0.7rem] font-bold tracking-[0.18em] text-sage-700 uppercase">
      <span className="h-1.5 w-1.5 rounded-full bg-sage-600" />
      {children}
    </span>
  )
}

/** Título de seção com o mesmo ritmo tipográfico em toda a página. */
export function SectionTitle({ children, className = '' }) {
  return (
    <h2
      className={`mt-5 text-3xl leading-[1.05] font-extrabold sm:text-4xl md:text-5xl ${className}`}
    >
      {children}
    </h2>
  )
}

/** Texto de apoio abaixo do título. */
export function SectionLead({ children, className = '' }) {
  return (
    <p className={`mt-5 max-w-2xl text-base leading-relaxed text-ink-500 md:text-lg ${className}`}>
      {children}
    </p>
  )
}

/**
 * Forma decorativa que flutua devagar ao fundo da seção.
 * Puro CSS (blur + animação de transform) — custa quase nada e dá vida ao
 * fundo branco sem virar poluição.
 */
export function DriftShape({ className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute -z-10 animate-drift rounded-full blur-3xl ${className}`}
    />
  )
}
