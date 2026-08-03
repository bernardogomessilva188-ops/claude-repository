import { PRODUCT } from '../config'
import { IconShield } from './ui/Icons'
import Section, { DriftShape } from './ui/Section'

export default function Guarantee() {
  return (
    <Section id="garantia" className="overflow-hidden">
      <DriftShape className="top-0 right-0 h-72 w-72 bg-sage-100/70" />

      <div
        data-reveal
        className="card-shadow grid items-center gap-10 rounded-3xl border border-sage-200 bg-gradient-to-br from-sage-50 to-paper-0 p-8 md:grid-cols-[auto_1fr] md:p-12"
      >
        {/* selo */}
        <div className="mx-auto md:mx-0">
          <div className="relative grid h-36 w-36 place-items-center rounded-full border-2 border-sage-600 bg-paper-0">
            <div
              aria-hidden="true"
              className="absolute inset-2 rounded-full border border-dashed border-sage-500/50"
            />
            <IconShield className="h-9 w-9 text-sage-600" />
            <span className="mt-1 font-display text-2xl leading-none font-extrabold text-ink-900">
              {PRODUCT.guaranteeDays} dias
            </span>
            <span className="font-display text-[0.6rem] font-bold tracking-[0.2em] text-sage-700 uppercase">
              Garantia
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-3xl leading-tight font-extrabold md:text-4xl">
            Testa. Se não for pra você, o dinheiro volta.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-ink-500">
            Você tem {PRODUCT.guaranteeDays} dias para abrir o guia, fazer o diagnóstico e rodar a
            primeira semana. Se achar que não serve pra você, manda um e-mail e devolvemos 100% do
            valor — sem formulário sem fim, sem perguntar por quê, sem constrangimento.
          </p>
          <p className="mt-5 font-display text-lg font-bold text-ink-900">
            O risco é todo nosso. O único jeito de você perder é não tentando.
          </p>
        </div>
      </div>
    </Section>
  )
}
