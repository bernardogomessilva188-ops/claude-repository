/**
 * Faixa em movimento contínuo entre o herói e o primeiro capítulo.
 * Funciona como a lombada do manual: lista as frentes cobertas, em mono,
 * separadas por um losango de latão.
 *
 * O truque padrão: o conteúdo é duplicado e o conjunto anda -50% em loop —
 * quando a cópia entra, o reinício é invisível. Para em prefers-reduced-motion.
 */

const words = ['Pele', 'Barba', 'Cabelo', 'Treino', 'Sono', 'Estilo', 'Constância', 'Confiança']

export default function MarqueeStrip() {
  const row = (ariaHidden) => (
    <ul aria-hidden={ariaHidden} className="flex shrink-0 items-center">
      {words.map((word) => (
        <li key={word} className="flex items-center">
          <span className="label-mono px-8 text-fog-400">{word}</span>
          <span aria-hidden="true" className="h-1 w-1 rotate-45 bg-brass-500" />
        </li>
      ))}
    </ul>
  )

  return (
    <aside
      aria-label="Frentes cobertas pelo manual"
      className="overflow-hidden border-y border-ember-600 bg-espresso-900 py-5"
    >
      <div className="flex w-max animate-marquee">
        {row(false)}
        {row(true)}
      </div>
    </aside>
  )
}
