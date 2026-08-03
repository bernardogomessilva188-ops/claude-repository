import { PRODUCT } from '../config'
import { IconShield } from './ui/Icons'
import Section from './ui/Section'

export default function Guarantee() {
  return (
    <Section id="garantia">
      <div className="grid items-center gap-10 rounded-3xl border border-carbon-700 bg-gradient-to-br from-petrol-900 to-carbon-900 p-8 md:grid-cols-[auto_1fr] md:p-12">
        {/* selo */}
        <div className="mx-auto md:mx-0">
          <div className="relative grid h-36 w-36 place-items-center rounded-full border-2 border-acid-500/50 bg-carbon-950">
            <div
              aria-hidden="true"
              className="absolute inset-2 rounded-full border border-dashed border-acid-500/30"
            />
            <IconShield className="h-9 w-9 text-acid-400" />
            <span className="mt-1 font-display text-2xl leading-none font-extrabold text-fog-50">
              {PRODUCT.guaranteeDays} dias
            </span>
            <span className="font-display text-[0.6rem] font-bold tracking-[0.2em] text-acid-400 uppercase">
              Garantia
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-3xl leading-tight font-extrabold md:text-4xl">
            Testa. Se não for pra você, o dinheiro volta.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-fog-400">
            Você tem {PRODUCT.guaranteeDays} dias para abrir o guia, fazer o diagnóstico e rodar a
            primeira semana. Se achar que não serve pra você, manda um e-mail e devolvemos 100% do
            valor — sem formulário sem fim, sem perguntar por quê, sem constrangimento.
          </p>
          <p className="mt-5 font-display text-lg font-bold text-fog-50">
            O risco é todo nosso. O único jeito de você perder é não tentando.
          </p>
        </div>
      </div>
    </Section>
  )
}
