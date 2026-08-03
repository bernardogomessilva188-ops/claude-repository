import { Children, cloneElement, isValidElement } from 'react'

/**
 * Título com as palavras surgindo uma a uma, num fade-in lento.
 *
 * Cada palavra vira um <span class="word"> com um atraso próprio
 * (`--word-delay`); o CSS em index.css faz o resto — opacidade, leve subida e
 * desfoque saindo, em ~1,2s por palavra. O gatilho é o mesmo observer da
 * revelação ao rolar (useReveal), que marca o elemento com `.is-revealed`.
 *
 * Aceita JSX no meio do texto (o <span> de destaque, <br/>): os wrappers são
 * preservados e só os nós de texto são fatiados em palavras.
 *
 * Com `prefers-reduced-motion` a regra global zera as transições e as
 * palavras aparecem todas de uma vez; com JS desligado, o fallback
 * `html.no-js` mostra tudo direto.
 */
export default function RevealWords({
  as: Tag = 'span',
  step = 80, // intervalo entre uma palavra e a seguinte
  delay = 0, // atraso antes da primeira palavra
  className = '',
  children,
}) {
  let index = 0

  const wrap = (node) => {
    if (typeof node === 'string') {
      // separa mantendo os espaços como nós de texto, para o navegador
      // continuar quebrando linha normalmente
      return node.split(/(\s+)/).map((part, key) =>
        part.trim() === '' ? (
          part
        ) : (
          <span
            key={`${key}-${index}`}
            className="word"
            style={{ '--word-delay': `${delay + index++ * step}ms` }}
          >
            {part}
          </span>
        ),
      )
    }
    if (Array.isArray(node)) return node.map(wrap)
    if (isValidElement(node)) {
      return cloneElement(node, undefined, ...Children.toArray(node.props.children).map(wrap))
    }
    return node
  }

  return (
    <Tag data-reveal-words className={className}>
      {wrap(children)}
    </Tag>
  )
}
