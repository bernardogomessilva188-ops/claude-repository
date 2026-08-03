/**
 * Marca (BRANDBOOK §1). Monograma "MH" em Bodoni dentro de um quadrado de fio
 * — selo de manual, não bolha de aplicativo. Wordmark em mono, caixa alta,
 * espaçada: o nome como etiqueta de capa.
 */
export default function Logo({ className = '', tone = 'dark' }) {
  const frame = tone === 'paper' ? 'border-espresso-950' : 'border-bone-100'
  const mark = tone === 'paper' ? 'text-espresso-950' : 'text-bone-100'

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <span
        className={`grid h-9 w-9 shrink-0 place-items-center border ${frame} ${mark} transition-colors duration-300`}
      >
        <span className="font-display text-base leading-none font-medium">M</span>
      </span>
      <span className={`label-mono text-[0.7rem] ${mark}`}>
        Mens Helper
      </span>
    </span>
  )
}
