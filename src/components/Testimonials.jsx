import { PLACEHOLDER } from '../config'
import AnimatedNumber from './ui/AnimatedNumber'
import Section, { SectionLead, SectionTag, SectionTitle } from './ui/Section'
import { IconStar } from './ui/Icons'

/**
 * ⚠️ DEPOIMENTOS DE EXEMPLO (PLACEHOLDER)
 *
 * Nada aqui é real. Antes de publicar, substitua por depoimentos verdadeiros
 * (de preferência com autorização por escrito e print/vídeo do cliente) ou
 * remova a seção inteira. Depoimento inventado é propaganda enganosa — dá
 * problema com o CDC e derruba conta de anúncio no Meta/TikTok.
 */
const testimonials = [
  {
    name: 'Rafael M. [EXEMPLO]',
    role: '31 anos · São Paulo, SP',
    quote:
      'Eu achava que isso não era pra mim. Comecei pela rotina de pele porque leva 5 minutos, e em duas semanas o pessoal do trabalho já perguntou se eu tinha tirado férias.',
    highlight: 'A parte do sono foi a que mais mudou meu dia.',
  },
  {
    name: 'Diego S. [EXEMPLO]',
    role: '38 anos · Belo Horizonte, MG',
    quote:
      'O que me pegou foi o passo a passo. Eu não preciso decidir nada, só seguir. Sou pai de dois, se dependesse de motivação eu não teria feito nem o primeiro dia.',
    highlight: 'Guia de compras me economizou uns R$ 300 em produto errado.',
  },
  {
    name: 'Lucas A. [EXEMPLO]',
    role: '26 anos · Curitiba, PR',
    quote:
      'Sem papo de coach, sem terminologia de revista. É homem falando com homem sobre o que dá resultado. Terminei os 30 dias e continuo usando os checklists.',
    highlight: 'Cheguei no barbeiro sabendo exatamente o que pedir.',
  },
]

export default function Testimonials() {
  return (
    <Section id="depoimentos">
      <div data-reveal className="max-w-3xl">
        <SectionTag>Prova social</SectionTag>
        <SectionTitle>Quem começou não voltou atrás</SectionTitle>
        <SectionLead>
          Homens comuns, com rotina apertada, que só precisavam de um caminho claro para seguir.
        </SectionLead>
      </div>

      <div
        data-reveal
        className="card-shadow mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 rounded-2xl border border-line-200 bg-paper-0 px-7 py-5"
      >
        <div className="flex items-center gap-2">
          <div className="flex text-sand-400">
            {[0, 1, 2, 3, 4].map((i) => (
              <IconStar key={i} className="h-4 w-4" />
            ))}
          </div>
          <span className="font-display text-lg font-extrabold text-ink-900">
            <AnimatedNumber value={PLACEHOLDER.rating} />
          </span>
          <span className="text-sm text-ink-400">
            em {PLACEHOLDER.reviewsCount} avaliações
          </span>
        </div>
        <span className="hidden h-6 w-px bg-line-200 sm:block" />
        <p className="text-sm text-ink-500">
          <strong className="font-semibold text-ink-900">
            +<AnimatedNumber value={PLACEHOLDER.studentsCount} /> homens
          </strong>{' '}
          já rodaram o plano de 30 dias
        </p>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {testimonials.map((t, index) => (
          <figure
            key={t.name}
            data-reveal
            style={{ '--reveal-delay': `${index * 120}ms` }}
            className="card-shadow flex flex-col rounded-2xl border border-line-200 bg-paper-0 p-7 transition-shadow duration-300 hover:card-shadow-hover"
          >
            <div className="flex text-sand-400" aria-label="5 de 5 estrelas">
              {[0, 1, 2, 3, 4].map((i) => (
                <IconStar key={i} className="h-3.5 w-3.5" />
              ))}
            </div>
            <blockquote className="mt-4 grow text-[0.95rem] leading-relaxed text-ink-700">
              “{t.quote}”
            </blockquote>
            <p className="mt-4 border-l-2 border-sage-600 pl-3 text-sm font-semibold text-ink-900">
              {t.highlight}
            </p>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-line-200 pt-5">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-sage-100 font-display font-bold text-sage-800">
                {t.name.charAt(0)}
              </span>
              <span>
                <span className="block text-sm font-semibold text-ink-900">{t.name}</span>
                <span className="block text-xs text-ink-400">{t.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Aviso visível: enquanto os depoimentos forem fictícios, isso precisa estar claro. */}
      <p className="mt-6 rounded-xl border border-dashed border-clay-500/50 bg-clay-100/50 px-5 py-4 text-xs leading-relaxed text-ink-500">
        <strong className="font-semibold text-clay-600">Aviso de placeholder:</strong> os
        depoimentos, a nota e os números acima são <strong>exemplos fictícios</strong>, usados
        apenas para demonstrar o layout. Substitua por depoimentos reais (com autorização) ou
        remova a seção antes de publicar — em <code className="text-ink-900">src/config.js</code>{' '}
        e em <code className="text-ink-900">src/components/Testimonials.jsx</code>.
      </p>
    </Section>
  )
}
