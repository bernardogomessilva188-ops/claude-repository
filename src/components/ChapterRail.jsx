import { useEffect, useState } from 'react'

/**
 * Trilho de capítulos — o elemento assinatura da marca (BRANDBOOK §9).
 *
 * Uma coluna fina na lateral esquerda que mostra em que capítulo do manual o
 * leitor está, com uma linha de latão que preenche conforme a página rola. É o
 * índice do manual, vivo.
 *
 * Ele lê as próprias seções: qualquer <section data-chapter="A SOLUÇÃO"> entra
 * no trilho automaticamente, na ordem do documento. Adicionar um capítulo novo
 * não exige mexer aqui.
 *
 * Só aparece a partir de 1280px — abaixo disso não há margem para ele sem
 * comprimir o conteúdo, e o leitor de celular tem a barra de CTA fixa.
 */
export default function ChapterRail() {
  const [chapters, setChapters] = useState([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const nodes = [...document.querySelectorAll('section[data-chapter]')]
    setChapters(
      nodes.map((node, index) => ({
        id: node.id,
        name: node.dataset.chapter,
        // o número vem da própria seção; sem ele, cai na posição
        number: node.dataset.chapterNumber ?? String(index).padStart(2, '0'),
      })),
    )

    let frame = 0
    const update = () => {
      frame = 0

      // progresso da leitura da página inteira
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0)

      // capítulo atual: o último cujo topo já passou de 45% da tela
      const line = window.innerHeight * 0.45
      let current = 0
      nodes.forEach((node, index) => {
        if (node.getBoundingClientRect().top <= line) current = index
      })
      setActiveIndex(current)
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  if (!chapters.length) return null

  return (
    <nav
      aria-label="Capítulos do manual"
      className="pointer-events-none fixed top-1/2 left-6 z-30 hidden -translate-y-1/2 xl:block"
    >
      <ol className="pointer-events-auto flex flex-col gap-5">
        {chapters.map((chapter, index) => {
          const isActive = index === activeIndex
          return (
            <li key={chapter.id}>
              <a
                href={`#${chapter.id}`}
                aria-current={isActive ? 'true' : undefined}
                className="group flex items-center gap-3"
              >
                <span
                  className={`label-mono w-6 text-right text-[0.625rem] transition-colors duration-500 ${
                    isActive ? 'text-brass-500' : 'text-fog-500 group-hover:text-fog-400'
                  }`}
                >
                  {chapter.number}
                </span>
                <span
                  aria-hidden="true"
                  className={`h-px transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isActive
                      ? 'w-8 bg-brass-500'
                      : 'w-4 bg-ember-500 group-hover:w-6 group-hover:bg-fog-500'
                  }`}
                />
                {/* O nome só aparece onde sobra margem lateral — abaixo de
                    1536px ele invadiria a coluna de texto. */}
                <span
                  className={`label-mono hidden text-[0.625rem] whitespace-nowrap transition-all duration-500 2xl:inline ${
                    isActive
                      ? 'text-bone-100 opacity-100'
                      : 'text-fog-500 opacity-0 group-hover:opacity-100'
                  }`}
                >
                  {chapter.name}
                </span>
              </a>
            </li>
          )
        })}
      </ol>

      {/* barra de progresso da leitura */}
      <div className="mt-8 ml-[2.25rem] h-24 w-px bg-ember-500">
        <div
          className="w-px origin-top bg-brass-500 transition-transform duration-150 ease-out"
          style={{ height: '100%', transform: `scaleY(${progress})` }}
        />
      </div>
    </nav>
  )
}
