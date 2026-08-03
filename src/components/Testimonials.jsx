import { IMAGES, PLACEHOLDER } from '../config'
import AnimatedNumber from './ui/AnimatedNumber'
import Section, { ChapterLead, ChapterMark, ChapterTitle } from './ui/Section'

/**
 * ⚠️ DEPOIMENTOS DE EXEMPLO (PLACEHOLDER)
 *
 * Nada aqui é real. Antes de publicar, substitua por depoimentos verdadeiros
 * (com autorização por escrito e print/vídeo do cliente) ou remova a seção
 * inteira. Depoimento inventado é propaganda enganosa — dá problema com o CDC
 * e derruba conta de anúncio no Meta/TikTok.
 */
const testimonials = [
  {
    name: 'Rafael M. [EXEMPLO]',
    role: '31 anos · São Paulo',
    quote:
      'Achava que isso não era pra mim. Comecei pela rotina de pele porque leva cinco minutos, e em duas semanas o pessoal do trabalho perguntou se eu tinha tirado férias.',
    highlight: 'A parte do sono foi a que mais mudou meu dia.',
  },
  {
    name: 'Diego S. [EXEMPLO]',
    role: '38 anos · Belo Horizonte',
    quote:
      'O que me pegou foi o passo a passo. Não preciso decidir nada, só seguir. Sou pai de dois: se dependesse de motivação, eu não teria feito nem o primeiro dia.',
    highlight: 'O guia de compras me poupou uns R$ 300 em produto errado.',
  },
  {
    name: 'Lucas A. [EXEMPLO]',
    role: '26 anos · Curitiba',
    quote:
      'Sem papo de coach, sem terminologia de revista. É homem falando com homem sobre o que dá resultado. Terminei os 30 dias e continuo usando os checklists.',
    highlight: 'Cheguei no barbeiro sabendo exatamente o que pedir.',
  },
]

export default function Testimonials() {
  return (
    <Section id="depoimentos" chapter="OS RELATOS" chapterNumber="04" tone="dark">
      <div className="grid gap-16 lg:grid-cols-[1fr_0.9fr] lg:items-end lg:gap-24">
        <div>
          <ChapterMark number="04" name="Os relatos" />
          <ChapterTitle>
            <>Quem começou</>
            <>não voltou atrás.</>
          </ChapterTitle>
          <ChapterLead>
            Homens comuns, com rotina apertada, que só precisavam de um caminho claro.
          </ChapterLead>
        </div>

        {/* Números: mono grande, como leitura de instrumento.
            ⚠️ valores de exemplo — ver PLACEHOLDER em src/config.js */}
        <dl data-reveal className="grid grid-cols-2 gap-px border-t border-ember-600">
          <div className="border-b border-ember-600 py-7">
            <dt className="label-mono text-fog-500">Avaliação média</dt>
            <dd className="mt-3 font-display text-5xl leading-none font-medium text-bone-100">
              <AnimatedNumber value={PLACEHOLDER.rating} />
              <span className="text-2xl text-fog-500">/5</span>
            </dd>
            <p className="label-mono mt-3 text-fog-500">
              {PLACEHOLDER.reviewsCount} avaliações
            </p>
          </div>
          <div className="border-b border-ember-600 py-7 pl-8">
            <dt className="label-mono text-fog-500">Plano concluído</dt>
            <dd className="mt-3 font-display text-5xl leading-none font-medium text-bone-100">
              <AnimatedNumber value={PLACEHOLDER.studentsCount} />
            </dd>
            <p className="label-mono mt-3 text-fog-500">homens em 30 dias</p>
          </div>
        </dl>
      </div>

      <div className="mt-20 grid gap-px border-t border-ember-600 md:grid-cols-3">
        {testimonials.map((t, index) => (
          <figure
            key={t.name}
            data-reveal
            style={{ '--reveal-delay': `${index * 100}ms` }}
            className="group flex flex-col border-b border-ember-600 bg-espresso-950 px-1 py-10 transition-colors duration-500 hover:bg-espresso-900 sm:px-7"
          >
            <span
              aria-hidden="true"
              className="font-display text-5xl leading-none text-ember-500 transition-colors duration-500 group-hover:text-brass-500"
            >
              “
            </span>
            <blockquote className="mt-4 grow text-[0.95rem] leading-[1.7] text-fog-400">
              {t.quote}
            </blockquote>
            <p className="mt-7 font-display text-xl leading-snug font-medium text-bone-100">
              {t.highlight}
            </p>
            <figcaption className="mt-8 flex items-center gap-4 border-t border-ember-600 pt-6">
              {/* espaço de imagem — troque public/images/depoimento-N.webp
                  (⚠️ foto de cliente real só com autorização por escrito) */}
              <img
                src={IMAGES.depoimentos[index].src}
                alt={`Foto de ${t.name}`}
                width={IMAGES.depoimentos[index].w}
                height={IMAGES.depoimentos[index].h}
                loading="lazy"
                decoding="async"
                className="h-11 w-11 border border-ember-600 object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
              />
              <span>
                <span className="block text-sm font-medium text-bone-100">{t.name}</span>
                <span className="label-mono mt-1 block text-fog-500">{t.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Enquanto os depoimentos forem fictícios, isso precisa estar visível. */}
      <p className="mt-8 border-l-2 border-oxblood-400 py-1 pl-5 text-xs leading-relaxed text-fog-500">
        <strong className="font-medium text-oxblood-400">Aviso de placeholder:</strong> os
        depoimentos, a nota e os números acima são exemplos fictícios, usados para demonstrar
        o layout. Substitua por depoimentos reais (com autorização) ou remova a seção antes de
        publicar — em <code className="text-fog-400">src/config.js</code> e em{' '}
        <code className="text-fog-400">src/components/Testimonials.jsx</code>.
      </p>
    </Section>
  )
}
