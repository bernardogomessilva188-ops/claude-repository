import { NAV_LINKS, PLACEHOLDER } from '../config'
import Logo from './ui/Logo'
import { IconInstagram, IconTiktok, IconYoutube } from './ui/Icons'

const institutional = [
  { label: 'Termos de uso', href: '#' },
  { label: 'Privacidade', href: '#' },
  { label: 'Reembolso', href: '#' },
  { label: 'Contato', href: `mailto:${PLACEHOLDER.supportEmail}` },
]

const socials = [
  { label: 'Instagram', href: PLACEHOLDER.instagram, Icon: IconInstagram },
  { label: 'TikTok', href: PLACEHOLDER.tiktok, Icon: IconTiktok },
  { label: 'YouTube', href: PLACEHOLDER.youtube, Icon: IconYoutube },
]

/** Colofão do manual: quem publica, onde encontrar, o que é preciso avisar. */
export default function Footer() {
  return (
    <footer className="border-t border-ember-600 bg-espresso-950 pt-20 pb-28 md:pb-20">
      <div className="shell">
        <div className="grid gap-14 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-[34ch] text-[0.95rem] leading-relaxed text-fog-400">
              O manual que deveria ter vindo junto com você. Autocuidado masculino em
              instruções claras, na ordem certa.
            </p>
            <div className="mt-8 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center border border-ember-600 text-fog-400 transition-colors duration-300 hover:border-brass-500 hover:text-brass-400"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h3 className="label-mono text-fog-500">Capítulos</h3>
            <ul className="mt-6 space-y-4">
              {[...NAV_LINKS, { label: 'Oferta', href: '#oferta' }].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-draw text-[0.95rem] text-fog-400 transition-colors duration-300 hover:text-bone-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Links institucionais">
            <h3 className="label-mono text-fog-500">Institucional</h3>
            <ul className="mt-6 space-y-4">
              {institutional.map((link) => (
                <li key={link.label}>
                  {/* TODO: apontar para as páginas reais antes de publicar */}
                  <a
                    href={link.href}
                    className="link-draw text-[0.95rem] text-fog-400 transition-colors duration-300 hover:text-bone-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-16 space-y-5 border-t border-ember-600 pt-10">
          <p className="max-w-[80ch] text-xs leading-relaxed text-fog-500">
            <strong className="font-medium text-fog-400">Aviso:</strong> o conteúdo do Mens
            Helper é educativo e não substitui consulta médica, dermatológica, nutricional ou
            psicológica. Resultados variam de pessoa para pessoa e dependem da aplicação do
            método.
          </p>
          <p className="label-mono text-fog-500">
            © {new Date().getFullYear()} Mens Helper · CNPJ [placeholder]
          </p>
        </div>
      </div>
    </footer>
  )
}
