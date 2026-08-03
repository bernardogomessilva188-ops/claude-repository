/** Marca do Mens Helper: monograma + wordmark. Tudo em SVG/texto, zero imagem. */
export default function Logo({ className = '' }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-sage-600">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path
            d="M4 19V6.5l5 6 3-3.6 3 3.6 5-6V19"
            fill="none"
            stroke="#fdfdfb"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="font-display text-lg leading-none font-extrabold tracking-tight text-ink-900">
        Mens<span className="text-sage-600">Helper</span>
      </span>
    </span>
  )
}
