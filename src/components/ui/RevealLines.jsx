import { Children, isValidElement } from 'react'

/**
 * Título que sobe linha a linha por trás de uma máscara (BRANDBOOK §8).
 *
 * Cada filho vira uma "linha": um bloco com `overflow: hidden` e um span
 * interno que começa deslocado 105% para baixo e sobe quando o elemento entra
 * na tela. É o movimento editorial clássico — mais nobre que fade, e mais
 * legível que animar palavra por palavra.
 *
 * Uso:
 *   <RevealLines as="h2">
 *     <>Do zero à rotina</>
 *     <>rodando em <em>4 passos</em></>
 *   </RevealLines>
 *
 * Cada filho é uma linha explícita — o corte é decisão de composição, não
 * resultado da quebra automática do navegador.
 */
export default function RevealLines({
  as: Tag = 'h2',
  step = 110,
  delay = 0,
  className = '',
  children,
}) {
  const lines = Children.toArray(children).filter(
    (child) => child !== null && child !== undefined && child !== '',
  )

  return (
    <Tag data-reveal-lines className={className}>
      {lines.map((line, index) => (
        <span key={isValidElement(line) ? index : `${line}`} className="line">
          <span style={{ '--line-delay': `${delay + index * step}ms` }}>{line}</span>
        </span>
      ))}
    </Tag>
  )
}
