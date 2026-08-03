import { CHECKOUT_URL } from '../../config'
import { IconArrowRight } from './Icons'

/**
 * Botão de CTA usado em toda a página.
 *
 * Aponta para `CHECKOUT_URL` (hoje a âncora #oferta, amanhã o link do checkout).
 * Se o destino virar um link externo, abre em nova aba automaticamente.
 */

const variants = {
  // CTA principal: acento ácido sobre texto escuro — o elemento mais visível da tela
  primary:
    'bg-acid-400 text-carbon-950 hover:bg-acid-300 shadow-[0_0_0_0_rgba(200,247,79,0.5)] hover:shadow-[0_0_32px_-4px_rgba(200,247,79,0.55)]',
  // CTA secundário: contorno, para não competir com o principal
  outline:
    'border border-carbon-600 text-fog-50 hover:border-acid-400 hover:text-acid-400 bg-transparent',
}

export default function CtaButton({
  children,
  href = CHECKOUT_URL,
  variant = 'primary',
  microcopy,
  fullWidth = false,
  className = '',
  onClick,
}) {
  const isExternal = href.startsWith('http')

  return (
    <div className={fullWidth ? 'w-full' : 'inline-flex flex-col items-center'}>
      <a
        href={href}
        onClick={onClick}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        // PONTO DE INTEGRAÇÃO: dispare o evento de conversão aqui
        // ex.: onClick={() => window.fbq?.('track', 'InitiateCheckout')}
        data-cta="primary"
        className={[
          'group inline-flex items-center justify-center gap-2.5 rounded-xl px-7 py-4',
          'font-display text-[0.95rem] font-extrabold tracking-wide uppercase',
          'min-h-[3.25rem] transition-all duration-200 active:scale-[0.98]',
          fullWidth ? 'w-full' : '',
          variants[variant],
          className,
        ].join(' ')}
      >
        {children}
        <IconArrowRight className="h-[1.15rem] w-[1.15rem] transition-transform duration-200 group-hover:translate-x-1" />
      </a>

      {microcopy ? (
        <p className="mt-3 text-center text-[0.8rem] leading-relaxed text-fog-500">
          {microcopy}
        </p>
      ) : null}
    </div>
  )
}
