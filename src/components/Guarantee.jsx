import { PRODUCT } from '../config'
import ImageSlot from './ui/ImageSlot'
import RevealLines from './ui/RevealLines'
import Section, { ChapterMark } from './ui/Section'

export default function Guarantee() {
  return (
    <Section id="garantia" chapter="A GARANTIA" chapterNumber="06" tone="dark">
      <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-24">
        <div>
          <ChapterMark number="06" name="A garantia" />

          <RevealLines
            as="h2"
            delay={200}
            className="mt-8 font-display text-[2.5rem] leading-[1.02] font-medium tracking-[-0.02em] text-bone-100 sm:text-5xl lg:text-[3.75rem]"
          >
            <>Testa. Se não for</>
            <>
              pra você, o dinheiro{' '}
              <em className="font-normal italic text-brass-500">volta</em>.
            </>
          </RevealLines>

          <p
            data-reveal
            style={{ '--reveal-delay': '260ms' }}
            className="mt-8 max-w-[52ch] text-lg leading-[1.7] text-fog-400"
          >
            Você tem {PRODUCT.guaranteeDays} dias para abrir o manual, fazer o diagnóstico e
            rodar a primeira semana. Se achar que não serve, manda um e-mail e devolvemos 100%
            do valor — sem formulário sem fim, sem perguntar por quê.
          </p>

          {/* Selo tipográfico: número grande em Bodoni, sem medalha nem fita */}
          <div
            data-reveal
            style={{ '--reveal-delay': '360ms' }}
            className="mt-12 flex items-center gap-8 border-t border-ember-600 pt-10"
          >
            <div>
              <span className="font-display text-[4.5rem] leading-none font-medium text-brass-500">
                {PRODUCT.guaranteeDays}
              </span>
              <span className="label-mono mt-2 block text-fog-400">dias de garantia</span>
            </div>
            <p className="max-w-[26ch] font-display text-xl leading-snug font-medium text-bone-100">
              O risco é nosso. O único jeito de perder é não tentando.
            </p>
          </div>
        </div>

        {/* espaço de imagem — troque public/images/garantia.webp */}
        <ImageSlot name="garantia" revealDelay="200ms" caption="Fig. 03 — depois da rotina" />
      </div>
    </Section>
  )
}
