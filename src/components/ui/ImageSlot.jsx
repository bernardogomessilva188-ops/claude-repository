import { IMAGES } from '../../config'

/**
 * Espaço de imagem (BRANDBOOK §6 e §10).
 *
 * Retângulo cheio, sem raio de canto — foto é página de revista, não balão.
 * O que o componente resolve sozinho:
 * - `width`/`height` declarados → zero salto de layout;
 * - `loading="lazy"` → só baixa quando está chegando na tela;
 * - entrada com corte que abre de baixo para cima (data-reveal-image);
 * - hover: a imagem avança de leve dentro da moldura.
 *
 * Trocar a foto é sobrescrever o arquivo em `public/images/` — o registro fica
 * em `IMAGES` (src/config.js).
 */
export default function ImageSlot({
  name,
  tone = 'dark',
  className = '',
  imgClassName = '',
  revealDelay,
  caption,
}) {
  const image = IMAGES[name]
  if (!image) return null

  const border = tone === 'paper' ? 'border-sand-300' : 'border-ember-600'
  const captionColor = tone === 'paper' ? 'text-slate-500' : 'text-fog-500'

  return (
    <figure
      data-reveal-image
      style={revealDelay ? { '--reveal-delay': revealDelay } : undefined}
      className={className}
    >
      <div className={`reveal-mask group relative overflow-hidden border ${border}`}>
        <img
          src={image.src}
          alt={image.alt}
          width={image.w}
          height={image.h}
          loading="lazy"
          decoding="async"
          className={`block h-auto w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] ${imgClassName}`}
        />
      </div>
      {caption ? (
        <figcaption className={`label-mono mt-4 ${captionColor}`}>{caption}</figcaption>
      ) : null}
    </figure>
  )
}
