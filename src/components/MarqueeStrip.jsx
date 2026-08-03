/**
 * Faixa de palavras em movimento contínuo, logo abaixo do herói.
 * O truque padrão de marquee: o conteúdo é duplicado e o conjunto anda -50%
 * em loop — quando a cópia entra, o reinício é invisível.
 * Com `prefers-reduced-motion`, a animação para (regra global no index.css).
 */

const words = [
  'Pele',
  'Barba',
  'Treino',
  'Sono',
  'Estilo',
  'Constância',
  'Confiança',
  'Energia',
]

export default function MarqueeStrip() {
  const row = (ariaHidden) => (
    <ul
      aria-hidden={ariaHidden}
      className="flex shrink-0 items-center gap-10 pr-10 md:gap-14 md:pr-14"
    >
      {words.map((word) => (
        <li key={word} className="flex items-center gap-10 md:gap-14">
          <span className="font-display text-sm font-extrabold tracking-[0.3em] text-paper-0/90 uppercase">
            {word}
          </span>
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-paper-0/40" />
        </li>
      ))}
    </ul>
  )

  return (
    <aside
      aria-label="Frentes que o guia cobre"
      className="overflow-hidden bg-sage-800 py-4"
    >
      <div className="flex w-max animate-marquee">
        {row(false)}
        {row(true)}
      </div>
    </aside>
  )
}
