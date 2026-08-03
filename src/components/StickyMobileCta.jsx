import { useEffect, useState } from 'react'
import { PRODUCT } from '../config'
import CtaButton from './ui/CtaButton'

/**
 * Barra fixa de CTA no mobile.
 * A maior parte do tráfego vem de anúncio no Instagram/TikTok — o botão precisa
 * estar sempre à mão. Aparece depois do herói e some quando a oferta está na tela.
 */
export default function StickyMobileCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // some só quando o card de preço (com o CTA de verdade) está na tela —
    // usar a seção inteira esconderia a barra cedo demais, e o cara ficaria
    // rolando a lista de bônus sem nenhum botão à mão.
    const priceCard = document.getElementById('oferta-preco')

    const onScroll = () => {
      const passedHero = window.scrollY > window.innerHeight * 0.9
      const rect = priceCard?.getBoundingClientRect()
      const priceOnScreen = rect
        ? rect.top < window.innerHeight * 0.85 && rect.bottom > 0
        : false
      setVisible(passedHero && !priceOnScreen)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-ember-600 bg-espresso-950/95 px-4 py-3 backdrop-blur-md transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-hidden={!visible}
    >
      <div className="flex items-center gap-4">
        <div className="shrink-0">
          <p className="font-display text-2xl leading-none font-medium text-bone-100">
            {PRODUCT.price}
          </p>
          <p className="label-mono mt-1.5 text-fog-500">pagamento único</p>
        </div>
        <CtaButton className="!min-h-12 !px-5 !text-[0.625rem]" fullWidth>
          Quero o manual
        </CtaButton>
      </div>
    </div>
  )
}
