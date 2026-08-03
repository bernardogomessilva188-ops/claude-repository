import { useState } from 'react'
import { IMAGES, NEWSLETTER_ENDPOINT, PRODUCT } from '../config'
import CtaButton from './ui/CtaButton'
import RevealLines from './ui/RevealLines'
import { IconCheck } from './ui/Icons'

/**
 * Fechamento: a última página do manual.
 * Imagem de fundo bem escurecida + tipografia grande. Sem card, sem caixa —
 * o texto é o objeto.
 */
export default function FinalCta() {
  return (
    <section
      id="comecar"
      data-chapter="O COMEÇO" data-chapter-number="08"
      className="relative isolate overflow-hidden bg-espresso-950 py-28 md:py-40"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        {/* espaço de imagem — troque public/images/final-bg.webp */}
        <img
          src={IMAGES.finalBg.src}
          alt=""
          width={IMAGES.finalBg.w}
          height={IMAGES.finalBg.h}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/85 to-espresso-950/95" />
        <div className="grain-layer absolute inset-0 opacity-70" />
      </div>

      <div className="shell">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-24">
          <div>
            <div data-reveal className="flex items-center gap-4">
              <span className="label-mono text-brass-500">Nº 08</span>
              <span
                data-reveal-rule
                className="rule-x max-w-16 flex-1 text-ember-600"
                style={{ '--reveal-delay': '120ms' }}
              />
              <span className="label-mono text-fog-400">O começo</span>
            </div>

            <RevealLines
              as="h2"
              delay={200}
              className="mt-10 font-display text-[2.75rem] leading-[1.0] font-medium tracking-[-0.02em] text-bone-100 sm:text-[3.5rem] lg:text-[4.5rem]"
            >
              <>Daqui a 30 dias</>
              <>você estará no mesmo</>
              <>
                lugar — ou <em className="font-normal italic text-brass-500">bem melhor</em>.
              </>
            </RevealLines>

            <p
              data-reveal
              style={{ '--reveal-delay': '520ms' }}
              className="mt-10 max-w-[46ch] text-lg leading-[1.7] text-fog-400"
            >
              A diferença entre os dois cenários são dez minutos por dia e a decisão de
              começar hoje. Você já sabe qual dos dois quer.
            </p>

            <div data-reveal style={{ '--reveal-delay': '640ms' }} className="mt-12">
              <CtaButton
                microcopy={`${PRODUCT.price} · pagamento único · ${PRODUCT.guaranteeDays} dias de garantia`}
              >
                Quero meu manual
              </CtaButton>
            </div>
          </div>

          <LeadForm />
        </div>
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
      <div className="flex items-start gap-4 border-t border-ember-600 pt-8">
        <IconCheck className="mt-1 h-5 w-5 shrink-0 text-brass-500" />
        <p className="text-[0.95rem] leading-relaxed text-fog-400">
          Enviado para <strong className="font-medium text-bone-100">{email}</strong>. Dá uma
          olhada na caixa de spam se não chegar em cinco minutos.
        </p>
      </div>
    )
  }

  return (
    <div data-reveal style={{ '--reveal-delay': '760ms' }} className="border-t border-ember-600 pt-10">
      <span className="label-mono text-brass-500">Amostra grátis</span>
      <h3 className="mt-5 font-display text-2xl leading-snug font-medium text-bone-100">
        Ainda na dúvida? Leve o primeiro anexo.
      </h3>
      <p className="mt-4 max-w-[42ch] text-[0.95rem] leading-relaxed text-fog-400">
        Deixe seu e-mail e receba o Checklist da Rotina de 10 Minutos — o mesmo que vem no
        manual. Sem custo, sem pegadinha.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-8 flex flex-col gap-3 sm:flex-row">
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
          className={`min-h-14 w-full rounded-[2px] border bg-espresso-900 px-5 text-base text-bone-100 transition-colors duration-300 placeholder:text-fog-500 focus:outline-none ${
            status === 'error'
              ? 'border-oxblood-400'
              : 'border-ember-600 focus:border-brass-500'
          }`}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-sweep label-mono min-h-14 shrink-0 rounded-[2px] bg-bone-100 px-7 text-[0.72rem] text-espresso-950 transition-colors duration-300 disabled:opacity-60"
        >
          {status === 'loading' ? 'Enviando' : 'Receber'}
        </button>
      </form>

      {status === 'error' ? (
        <p id="email-erro" role="alert" className="mt-4 text-sm text-oxblood-400">
          Confere o e-mail — parece que faltou alguma coisa.
        </p>
      ) : (
        <p className="label-mono mt-4 text-fog-500">
          Sem spam · saia da lista em um clique
        </p>
      )}
    </div>
  )
}
