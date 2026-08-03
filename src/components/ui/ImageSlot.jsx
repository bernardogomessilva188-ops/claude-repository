import { IMAGES } from '../../config'

/**
 * Espaço de imagem padronizado das seções.
 *
 * Busca a imagem pelo nome no registro `IMAGES` (src/config.js) — trocar a
 * foto é sobrescrever o arquivo em `public/images/`, sem tocar em código.
 *
 * O que ele já resolve:
 * - `width`/`height` declarados → zero layout shift;
 * - `loading="lazy"` → só baixa quando está chegando na tela;
 * - moldura deslocada em verde-claro (frame) para a foto não "boiar" no
 *   fundo branco — desligável com `framed={false}`;
 * - entra com a revelação ao rolar como o resto da página.
 */
export default function ImageSlot({
  name,
  framed = true,
  className = '',
  imgClassName = '',
  revealDelay,
}) {
  const image = IMAGES[name]
  if (!image) return null

  return (
    <figure
      data-reveal
      style={revealDelay ? { '--reveal-delay': revealDelay } : undefined}
      className={`relative ${className}`}
    >
      {framed ? (
        <span
          aria-hidden="true"
          className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-sage-200/60"
        />
      ) : null}
      <img
        src={image.src}
        alt={image.alt}
        width={image.w}
        height={image.h}
        loading="lazy"
        decoding="async"
        className={`card-shadow relative h-auto w-full rounded-2xl border border-line-200 object-cover ${imgClassName}`}
      />
    </figure>
  )
}
