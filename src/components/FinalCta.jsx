import { useState } from 'react'
import { NEWSLETTER_ENDPOINT, PRODUCT } from '../config'
import CtaButton from './ui/CtaButton'
import { IconCheck } from './ui/Icons'

/**
 * Único bloco escuro da página: o contraste com o resto (todo claro) faz o
 * fechamento pesar mais — padrão clássico de marca premium.
 */
export default function FinalCta() {
  return (
    <section id="comecar" className="relative overflow-hidden bg-sage-900 py-24 md:py-32">
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute -top-32 left-1/4 h-96 w-96 animate-drift rounded-full bg-sage-700/40 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 animate-drift rounded-full bg-sage-800/60 blur-3xl [animation-delay:-6s]" />
      </div>

      <div className="shell relative text-center">
        <h2
          data-reveal
          className="mx-auto max-w-3xl text-4xl leading-[1.05] font-extrabold text-paper-0 sm:text-5xl md:text-6xl"
        >
          Daqui a 30 dias você vai estar
          <span className="block text-sage-200">no mesmo lugar ou bem melhor.</span>
        </h2>
        <p
          data-reveal
          style={{ '--reveal-delay': '120ms' }}
          className="mx-auto mt-6 max-w-xl leading-relaxed text-sage-200/90"
        >
          A diferença entre os dois cenários são 10 minutos por dia e a decisão de começar hoje.
          Você já sabe qual dos dois quer.
        </p>

        <div data-reveal style={{ '--reveal-delay': '240ms' }} className="mt-10 flex justify-center">
          <CtaButton
            variant="inverse"
            className="text-base sm:px-10"
            microcopy={`${PRODUCT.price} · pagamento único · ${PRODUCT.guaranteeDays} dias de garantia`}
            microcopyClassName="text-sage-200/80"
          >
            Quero meu guia agora
          </CtaButton>
        </div>

        <LeadForm />
      </div>
    </section>
  )
}

/**
 * Captura de e-mail (isca digital).
 *
 * PONTO DE INTEGRAÇÃO — E-MAIL MARKETING:
 * defina `NEWSLETTER_ENDPOINT` em src/config.js com a URL do formulário da sua
 * ferramenta (Mailchimp, Brevo, ActiveCampaign, ConvertKit...). Com o valor em
 * null, o formulário roda em modo demonstração: valida e mostra o sucesso sem
 * enviar nada. Nenhum dado sai do navegador.
 */
function LeadForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  async function handleSubmit(event) {
    event.preventDefault()
    if (!email.includes('@')) {
      setStatus('error')
      return
    }

    setStatus('loading')

    if (!NEWSLETTER_ENDPOINT) {
      // modo demonstração — trocar assim que a integração existir
      setStatus('success')
      return
    }

    try {
      const response = await fetch(NEWSLETTER_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setStatus(response.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="mx-auto mt-14 flex max-w-md items-center justify-center gap-3 rounded-2xl border border-sage-500/60 bg-sage-800/60 px-6 py-5">
        <IconCheck className="h-5 w-5 shrink-0 text-sage-200" />
        <p className="text-left text-sm text-sage-100">
          Pronto. Enviamos a amostra grátis para{' '}
          <strong className="text-paper-0">{email}</strong>. Dá uma olhada na caixa de spam se
          não chegar em 5 minutos.
        </p>
      </div>
    )
  }

  return (
    <div
      data-reveal
      style={{ '--reveal-delay': '360ms' }}
      className="mx-auto mt-16 max-w-xl rounded-2xl border border-sage-700 bg-sage-800/70 p-7 text-left backdrop-blur-sm"
    >
      <h3 className="font-display text-lg font-bold text-paper-0">
        Ainda na dúvida? Leve um pedaço de graça.
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-sage-200/90">
        Deixe seu e-mail e receba o{' '}
        <strong className="text-paper-0">Checklist da Rotina de 10 Minutos</strong> — o mesmo
        que vem no guia. Sem custo, sem pegadinha.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-5 flex flex-col gap-3 sm:flex-row">
        <label htmlFor="email-lead" className="sr-only">
          Seu melhor e-mail
        </label>
        <input
          id="email-lead"
          type="email"
          name="email"
          autoComplete="email"
          required
          placeholder="seu@email.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (status === 'error') setStatus('idle')
          }}
          aria-invalid={status === 'error'}
          aria-describedby={status === 'error' ? 'email-erro' : undefined}
          className={`min-h-[3.25rem] w-full rounded-xl border bg-sage-900/70 px-4 text-base text-paper-0 placeholder:text-sage-200/50 focus:outline-none ${
            status === 'error' ? 'border-clay-500' : 'border-sage-700 focus:border-sage-200'
          }`}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="min-h-[3.25rem] shrink-0 rounded-xl bg-paper-0 px-6 font-display text-sm font-extrabold tracking-wide text-sage-800 uppercase transition-all duration-200 hover:bg-sage-50 active:scale-[0.98] disabled:opacity-60"
        >
          {status === 'loading' ? 'Enviando...' : 'Receber grátis'}
        </button>
      </form>

      {status === 'error' ? (
        <p id="email-erro" role="alert" className="mt-3 text-sm text-clay-500">
          Confere o e-mail — parece que faltou alguma coisa.
        </p>
      ) : (
        <p className="mt-3 text-xs text-sage-200/70">
          Sem spam. Você sai da lista quando quiser, em um clique.
        </p>
      )}
    </div>
  )
}
