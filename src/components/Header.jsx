import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../config'
import CtaButton from './ui/CtaButton'
import { IconClose, IconMenu } from './ui/Icons'
import Logo from './ui/Logo'

/**
 * Header fixo. Nasce transparente sobre o herói e ganha fundo + fio quando a
 * página rola — o fio de 1px é a única divisória (BRANDBOOK §6).
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // trava o scroll do body enquanto o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled || open
          ? 'border-b border-ember-600 bg-espresso-950/92 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <div className="shell flex h-20 items-center justify-between gap-6">
        <a href="#inicio" aria-label="Mens Helper — ir para o início" className="shrink-0">
          <Logo />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="label-mono link-draw text-fog-400 transition-colors duration-300 hover:text-bone-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <CtaButton className="!min-h-11 !px-6 !text-[0.625rem]">Quero o manual</CtaButton>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            className="flex h-11 w-11 items-center justify-center border border-ember-600 text-bone-100 transition-colors duration-300 hover:border-brass-500 hover:text-brass-400 lg:hidden"
          >
            {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* painel mobile */}
      <div
        id="menu-mobile"
        hidden={!open}
        className="border-t border-ember-600 bg-espresso-950 lg:hidden"
      >
        <nav aria-label="Navegação principal (mobile)" className="shell flex flex-col py-2">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-5 border-b border-ember-600 py-6"
            >
              <span className="label-mono text-brass-500">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="font-display text-2xl font-medium text-bone-100">
                {link.label}
              </span>
            </a>
          ))}
          <div className="py-8">
            <CtaButton fullWidth onClick={() => setOpen(false)}>
              Quero meu manual
            </CtaButton>
          </div>
        </nav>
      </div>
    </header>
  )
}
