import { CHECKOUT_URL } from '../../config'
import { IconArrowRight } from './Icons'

/**
 * Botão de CTA (BRANDBOOK §7).
 *
 * Aponta para `CHECKOUT_URL` — hoje a âncora #oferta, amanhã o link do
 * checkout. Se virar link externo, abre em nova aba sozinho.
 *
 * O hover primário é a varredura: um retângulo de latão claro cresce da
 * esquerda para a direita por trás do texto (utilitário `btn-sweep` em
 * index.css), enquanto a seta desliza.
 */

const variants = {
  // Sobre fundo escuro: latão sólido, texto espresso
  primary: 'btn-sweep bg-brass-500 text-espresso-950',
  // Sobre papel: espresso sólido, texto bone — o hover troca para latão
  onPaper: 'btn-sweep bg-espresso-950 text-bone-100 hover:text-espresso-950',
  // Secundário: só o fio
  outline:
    'border border-ember-600 text-bone-100 hover:border-brass-500 hover:text-brass-400 transition-colors duration-300',
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
    <div className={fullWidth ? 'w-full' : 'inline-flex flex-col items-start'}>
      <a
        href={href}
        onClick={onClick}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        // PONTO DE INTEGRAÇÃO: dispare o evento de conversão aqui
        // ex.: onClick={() => window.fbq?.('track', 'InitiateCheckout')}
        data-cta="primary"
        className={[
          'group label-mono inline-flex min-h-14 items-center justify-center gap-3 rounded-[2px] px-8',
          'text-[0.72rem] transition-colors duration-300',
          fullWidth ? 'w-full' : '',
          variants[variant],
          className,
        ].join(' ')}
      >
        {children}
        <IconArrowRight className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5" />
      </a>

      {microcopy ? (
        <p
          className={`label-mono mt-4 text-[0.625rem] leading-4 text-fog-500 ${microcopyClassName}`}
        >
          {microcopy}
        </p>
      ) : null}
    </div>
  )
}
