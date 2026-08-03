import { NAV_LINKS, PLACEHOLDER } from '../config'
import Logo from './ui/Logo'
import { IconInstagram, IconTiktok, IconYoutube } from './ui/Icons'

const institutional = [
  { label: 'Termos de uso', href: '#' },
  { label: 'Política de privacidade', href: '#' },
  { label: 'Política de reembolso', href: '#' },
  { label: 'Contato', href: `mailto:${PLACEHOLDER.supportEmail}` },
]

const socials = [
  { label: 'Instagram', href: PLACEHOLDER.instagram, Icon: IconInstagram },
  { label: 'TikTok', href: PLACEHOLDER.tiktok, Icon: IconTiktok },
  { label: 'YouTube', href: PLACEHOLDER.youtube, Icon: IconYoutube },
]

export default function Footer() {
  return (
    <footer className="border-t border-carbon-800 bg-carbon-950 pt-16 pb-28 md:pb-16">
      <div className="shell">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-fog-500">
              Autocuidado masculino sem frescura: o passo a passo que ninguém te ensinou, em
              linguagem de gente.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-carbon-700 text-fog-400 transition-colors hover:border-acid-400 hover:text-acid-400"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h3 className="font-display text-xs font-bold tracking-[0.2em] text-fog-50 uppercase">
              Navegar
            </h3>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-fog-400 transition-colors hover:text-acid-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#oferta"
                  className="text-sm text-fog-400 transition-colors hover:text-acid-400"
                >
                  Oferta
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Links institucionais">
            <h3 className="font-display text-xs font-bold tracking-[0.2em] text-fog-50 uppercase">
              Institucional
            </h3>
            <ul className="mt-4 space-y-3">
              {institutional.map((link) => (
                <li key={link.label}>
                  {/* TODO: apontar para as páginas reais antes de publicar */}
                  <a
                    href={link.href}
                    className="text-sm text-fog-400 transition-colors hover:text-acid-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 space-y-4 border-t border-carbon-800 pt-8">
          <p className="text-xs leading-relaxed text-fog-500">
            <strong className="text-fog-400">Aviso:</strong> o conteúdo do Mens Helper é
            educativo e não substitui consulta médica, dermatológica, nutricional ou psicológica.
            Resultados variam de pessoa para pessoa e dependem da aplicação do método.
          </p>
          <p className="text-xs text-fog-500">
            © {new Date().getFullYear()} Mens Helper. Todos os direitos reservados. · CNPJ
            [PLACEHOLDER]
          </p>
        </div>
      </div>
    </footer>
  )
}
