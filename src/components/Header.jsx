import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../config'
import CtaButton from './ui/CtaButton'
import { IconClose, IconMenu } from './ui/Icons'
import Logo from './ui/Logo'

/**
 * Header fixo com menu simples e CTA sempre visível.
 * No mobile o menu vira um painel; o CTA fica no painel e na barra fixa inferior.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-line-200 bg-paper-0/85 shadow-[0_4px_20px_-8px_rgba(23,34,31,0.1)] backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <div className="shell flex h-[4.5rem] items-center justify-between gap-4">
        <a href="#inicio" className="shrink-0" aria-label="Mens Helper — ir para o início">
          <Logo />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-500 transition-colors hover:text-ink-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <CtaButton className="!px-5 !py-3 !text-[0.8rem] whitespace-nowrap">
              Começar agora
            </CtaButton>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-line-300 bg-paper-0 text-ink-900 lg:hidden"
          >
            {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* painel mobile */}
      <div
        id="menu-mobile"
        hidden={!open}
        className="border-t border-line-200 bg-paper-0 shadow-xl shadow-ink-900/10 lg:hidden"
      >
        <nav aria-label="Navegação principal (mobile)" className="shell flex flex-col py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-line-200 py-4 font-display text-lg font-bold text-ink-900"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-6 pb-2">
            <CtaButton fullWidth onClick={() => setOpen(false)}>
              Quero meu guia
            </CtaButton>
          </div>
        </nav>
      </div>
    </header>
  )
}
