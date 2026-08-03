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
    // data-reveal: bloco inteiro sobe e aparece
    // data-reveal-words: as palavras internas surgem uma a uma (RevealWords)
    const targets = document.querySelectorAll(
      '[data-reveal]:not(.is-revealed), [data-reveal-words]:not(.is-revealed)',
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
