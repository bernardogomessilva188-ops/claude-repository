import { IconBolt, IconClock, IconDroplet } from './Icons'

/**
 * Visual do herói.
 *
 * É um SVG desenhado à mão (retrato geométrico) em vez de uma foto de banco de
 * imagens: pesa ~4 KB, é nítido em qualquer tela e não custa uma requisição.
 *
 * PARA TROCAR POR UMA FOTO REAL: substitua o <svg> abaixo por
 *
 *   <img
 *     src="/hero.webp"
 *     alt="Homem confiante depois da rotina de autocuidado"
 *     width={960} height={1120}
 *     loading="lazy"       // no herói, prefira: fetchPriority="high" e sem lazy
 *     decoding="async"
 *     className="h-full w-full object-cover"
 *   />
 *
 * Exporte em WebP/AVIF com no máximo ~200 KB — é o primeiro elemento a carregar.
 */
export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[26rem] lg:max-w-none">
      {/* brilho de fundo */}
      <div
        aria-hidden="true"
        className="absolute -inset-8 -z-10 rounded-full bg-petrol-700/25 blur-3xl"
      />

      <div className="relative overflow-hidden rounded-3xl border border-carbon-700 bg-carbon-900">
        <svg
          viewBox="0 0 480 560"
          className="block h-auto w-full"
          role="img"
          aria-label="Ilustração de um homem confiante, de ombros firmes e barba aparada"
        >
          <defs>
            <linearGradient id="mh-bg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#10171a" />
              <stop offset="100%" stopColor="#08282b" />
            </linearGradient>
            <linearGradient id="mh-body" x1="0.1" y1="0" x2="0.9" y2="1">
              <stop offset="0%" stopColor="#2a393e" />
              <stop offset="100%" stopColor="#0c1112" />
            </linearGradient>
            <linearGradient id="mh-skin" x1="0.2" y1="0" x2="0.8" y2="1">
              <stop offset="0%" stopColor="#3d4f54" />
              <stop offset="100%" stopColor="#1d292d" />
            </linearGradient>
            <linearGradient id="mh-accent" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#c8f74f" />
              <stop offset="100%" stopColor="#8fbd14" />
            </linearGradient>
            <clipPath id="mh-clip">
              <rect x="0" y="0" width="480" height="560" rx="24" />
            </clipPath>
          </defs>

          <g clipPath="url(#mh-clip)">
            <rect width="480" height="560" fill="url(#mh-bg)" />

            {/* grade sutil */}
            <g stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1">
              {[80, 160, 240, 320, 400].map((x) => (
                <line key={`v${x}`} x1={x} y1="0" x2={x} y2="560" />
              ))}
              {[80, 160, 240, 320, 400, 480].map((y) => (
                <line key={`h${y}`} x1="0" y1={y} x2="480" y2={y} />
              ))}
            </g>

            {/* halo atrás da cabeça */}
            <circle cx="240" cy="228" r="152" fill="#16646a" fillOpacity="0.22" />
            <circle
              cx="240"
              cy="228"
              r="152"
              fill="none"
              stroke="#2b9096"
              strokeOpacity="0.35"
              strokeWidth="1.5"
            />

            {/* faixa de acento diagonal */}
            <path
              d="M-40 470 L 200 150 L 236 150 L -4 470 Z"
              fill="url(#mh-accent)"
              fillOpacity="0.14"
            />

            {/* ombros */}
            <path
              d="M62 560 L62 476 C62 402 146 356 212 344 L268 344 C334 356 418 402 418 476 L418 560 Z"
              fill="url(#mh-body)"
            />
            {/* gola */}
            <path
              d="M212 344 L240 392 L268 344 L252 338 L240 356 L228 338 Z"
              fill="#07090a"
              fillOpacity="0.85"
            />

            {/* pescoço */}
            <path d="M208 286 h64 v58 c-14 12 -50 12 -64 0 Z" fill="#1d292d" />

            {/* cabeça */}
            <ellipse cx="240" cy="214" rx="76" ry="94" fill="url(#mh-skin)" />

            {/* barba aparada */}
            <path
              d="M167 218 c4 66 36 96 73 96 s69 -30 73 -96 c-10 42 -38 60 -73 60 s-63 -18 -73 -60 Z"
              fill="#0c1112"
              fillOpacity="0.9"
            />

            {/* cabelo com degradê lateral */}
            <path
              d="M164 206 c-2 -66 34 -96 76 -96 s78 30 76 96 c-6 -34 -26 -50 -54 -54 c-30 -4 -74 2 -90 26 c-5 8 -7 18 -8 28 Z"
              fill="#07090a"
            />

            {/* traço de luz no rosto */}
            <path
              d="M176 176 c22 -14 50 -20 78 -18"
              stroke="#c8f74f"
              strokeOpacity="0.55"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />

            {/* linha de base do acento */}
            <rect x="0" y="536" width="480" height="6" fill="url(#mh-accent)" />
          </g>
        </svg>
      </div>

      {/* chips flutuantes — reforçam o resultado prático, não o produto */}
      <FloatChip
        className="-top-3 -left-2 sm:-left-6"
        icon={<IconClock className="h-4 w-4" />}
        label="10 min por dia"
      />
      <FloatChip
        className="top-1/3 -right-2 sm:-right-6"
        icon={<IconDroplet className="h-4 w-4" />}
        label="Pele sob controle"
      />
      <FloatChip
        className="-bottom-4 left-4 sm:left-2"
        icon={<IconBolt className="h-4 w-4" />}
        label="Mais energia em 30 dias"
      />
    </div>
  )
}

function FloatChip({ icon, label, className = '' }) {
  return (
    <div
      className={`absolute z-10 flex items-center gap-2 rounded-xl border border-carbon-600 bg-carbon-850/95 px-3 py-2 text-xs font-semibold text-fog-200 shadow-lg shadow-black/40 backdrop-blur-sm sm:text-sm ${className}`}
    >
      <span className="text-acid-400">{icon}</span>
      {label}
    </div>
  )
}
