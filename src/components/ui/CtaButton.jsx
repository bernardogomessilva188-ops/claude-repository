import { CHECKOUT_URL } from '../../config'
import { IconArrowRight } from './Icons'

/**
 * Botão de CTA usado em toda a página.
 *
 * Aponta para `CHECKOUT_URL` (hoje a âncora #oferta, amanhã o link do checkout).
 * Se o destino virar um link externo, abre em nova aba automaticamente.
 */

const variants = {
  // CTA principal: eucalipto profundo sobre o fundo claro — o elemento de maior
  // contraste da tela, com sombra que "acende" no hover
  primary:
    'bg-sage-700 text-paper-0 hover:bg-sage-800 shadow-[0_10px_28px_-10px_rgba(35,87,67,0.55)] hover:shadow-[0_16px_36px_-10px_rgba(35,87,67,0.65)] hover:-translate-y-0.5',
  // CTA secundário: contorno, para não competir com o principal
  outline:
    'border border-line-300 text-ink-900 hover:border-sage-600 hover:text-sage-700 bg-transparent',
  // Sobre fundos escuros (seção final): branco sólido, texto eucalipto
  inverse:
    'bg-paper-0 text-sage-800 hover:bg-sage-50 shadow-[0_10px_28px_-10px_rgba(0,0,0,0.4)] hover:-translate-y-0.5',
}

export default function CtaButton({
  children,
  href = CHECKOUT_URL,
  variant = 'primary',
  microcopy,
  microcopyClassName = '',
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
        <p
          className={`mt-3 text-center text-[0.8rem] leading-relaxed text-ink-400 ${microcopyClassName}`}
        >
          {microcopy}
        </p>
      ) : null}
    </div>
  )
}
