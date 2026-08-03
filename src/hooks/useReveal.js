import { useEffect } from 'react'

/**
 * Revelação ao rolar, para a página inteira com um IntersectionObserver só.
 *
 * Qualquer elemento com `data-reveal` nasce invisível (CSS em index.css) e
 * ganha `.is-revealed` quando entra na tela. O atraso em cascata vem de
 * `style={{ '--reveal-delay': '120ms' }}` no próprio elemento.
 *
 * Por que assim, e não um hook por componente:
 * - um observer para a página toda é mais barato que dezenas;
 * - o efeito roda uma vez por elemento e o observer o esquece (unobserve);
 * - com `prefers-reduced-motion`, o CSS zera a transição — aqui não precisa
 *   de caso especial, o conteúdo simplesmente aparece.
 */
export default function useReveal() {
  useEffect(() => {
    // Quatro tratamentos de entrada (BRANDBOOK §8), todos com o mesmo gatilho:
    //   data-reveal        bloco sobe e aparece
    //   data-reveal-lines  título sobe linha a linha por trás de uma máscara
    //   data-reveal-rule   fio se desenha da esquerda para a direita
    //   data-reveal-image  imagem abre com corte, com o zoom saindo junto
    const targets = document.querySelectorAll(
      [
        '[data-reveal]',
        '[data-reveal-lines]',
        '[data-reveal-rule]',
        '[data-reveal-image]',
      ]
        .map((selector) => `${selector}:not(.is-revealed)`)
        .join(', '),
    )
    if (!targets.length) return

    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-revealed'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.15 },
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
