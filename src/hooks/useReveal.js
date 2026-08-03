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

    const reveal = (el) => {
      el.classList.add('is-revealed')
      observer.unobserve(el)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) reveal(entry.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.15 },
    )

    targets.forEach((el) => observer.observe(el))

    /**
     * Rede de segurança para a rolagem muito rápida.
     *
     * O IntersectionObserver compara o estado entre frames: se um salto grande
     * (Ctrl+End, arrastar a barra, rolar com força no trackpad) faz o elemento
     * atravessar a tela inteira dentro de um frame, ele nunca chega a
     * "intersectar" e o callback não dispara — o conteúdo ficaria invisível até
     * o leitor rolar de volta.
     *
     * Aqui, a cada quadro de rolagem, qualquer alvo que já tenha passado do
     * topo da tela é revelado na marra.
     */
    let frame = 0
    const sweep = () => {
      frame = 0
      for (const el of targets) {
        if (el.classList.contains('is-revealed')) continue
        if (el.getBoundingClientRect().top < window.innerHeight) reveal(el)
      }
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(sweep)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [])
}
