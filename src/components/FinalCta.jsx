import { useState } from 'react'
import { NEWSLETTER_ENDPOINT, PRODUCT } from '../config'
import CtaButton from './ui/CtaButton'
import { IconCheck } from './ui/Icons'

export default function FinalCta() {
  return (
    <section id="comecar" className="relative overflow-hidden py-24 md:py-32">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="grid-texture absolute inset-0 opacity-40" />
        <div className="absolute bottom-0 left-1/2 h-[28rem] w-[46rem] -translate-x-1/2 translate-y-1/3 rounded-full bg-petrol-700/30 blur-[130px]" />
      </div>

      <div className="shell text-center">
        <h2 className="mx-auto max-w-3xl text-4xl leading-[1.05] font-extrabold sm:text-5xl md:text-6xl">
          Daqui a 30 dias você vai estar
          <span className="block text-acid-400">no mesmo lugar ou bem melhor.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-fog-400">
          A diferença entre os dois cenários são 10 minutos por dia e a decisão de começar hoje.
          Você já sabe qual dos dois quer.
        </p>

        <div className="mt-10 flex justify-center">
          <CtaButton
            className="text-base sm:px-10"
            microcopy={`${PRODUCT.price} · pagamento único · ${PRODUCT.guaranteeDays} dias de garantia`}
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
      <div className="mx-auto mt-14 flex max-w-md items-center justify-center gap-3 rounded-2xl border border-acid-500/40 bg-acid-400/5 px-6 py-5">
        <IconCheck className="h-5 w-5 shrink-0 text-acid-400" />
        <p className="text-left text-sm text-fog-200">
          Pronto. Enviamos a amostra grátis para <strong className="text-fog-50">{email}</strong>.
          Dá uma olhada na caixa de spam se não chegar em 5 minutos.
        </p>
      </div>
    )
  }

  return (
    <div className="mx-auto mt-16 max-w-xl rounded-2xl border border-carbon-700 bg-carbon-900 p-7 text-left">
      <h3 className="font-display text-lg font-bold">Ainda na dúvida? Leve um pedaço de graça.</h3>
      <p className="mt-2 text-sm leading-relaxed text-fog-400">
        Deixe seu e-mail e receba o <strong className="text-fog-50">Checklist da Rotina de 10
        Minutos</strong> — o mesmo que vem no guia. Sem custo, sem pegadinha.
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
          className={`min-h-[3.25rem] w-full rounded-xl border bg-carbon-850 px-4 text-base text-fog-50 placeholder:text-fog-500 focus:outline-none ${
            status === 'error' ? 'border-ember-500' : 'border-carbon-600 focus:border-acid-400'
          }`}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="min-h-[3.25rem] shrink-0 rounded-xl bg-fog-50 px-6 font-display text-sm font-extrabold tracking-wide text-carbon-950 uppercase transition-colors hover:bg-acid-400 disabled:opacity-60"
        >
          {status === 'loading' ? 'Enviando...' : 'Receber grátis'}
        </button>
      </form>

      {status === 'error' ? (
        <p id="email-erro" role="alert" className="mt-3 text-sm text-ember-500">
          Confere o e-mail — parece que faltou alguma coisa.
        </p>
      ) : (
        <p className="mt-3 text-xs text-fog-500">
          Sem spam. Você sai da lista quando quiser, em um clique.
        </p>
      )}
    </div>
  )
}
