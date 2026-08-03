/**
 * Central de configuração do Mens Helper.
 *
 * Tudo que muda quando o produto vai ao ar (link de checkout, preço, prazo da
 * oferta, números de prova social) fica aqui — não espalhado pelos componentes.
 */

/* --------------------------------------------------------------------------
 * PONTO DE INTEGRAÇÃO — CHECKOUT
 * --------------------------------------------------------------------------
 * Enquanto não existe checkout, todos os CTAs apontam para a âncora #oferta.
 * Quando a página de pagamento estiver pronta (Hotmart, Kiwify, Stripe...),
 * troque o valor abaixo pela URL completa: 'https://pay.exemplo.com/mens-helper'.
 * O componente CtaButton detecta automaticamente se é âncora ou link externo.
 */
export const CHECKOUT_URL = '#oferta'

/* --------------------------------------------------------------------------
 * PONTO DE INTEGRAÇÃO — E-MAIL MARKETING
 * --------------------------------------------------------------------------
 * Endpoint do formulário de captura (Mailchimp, ActiveCampaign, Brevo, ConvertKit).
 * Deixe como null para manter o formulário em modo demonstração — ele valida o
 * e-mail e mostra a mensagem de sucesso sem enviar nada para lugar nenhum.
 */
export const NEWSLETTER_ENDPOINT = null

/* Produto e oferta ------------------------------------------------------- */
export const PRODUCT = {
  name: 'Mens Helper',
  fullName: 'Mens Helper — O Manual do Homem que se Cuida',
  priceFull: 'R$ 127',
  price: 'R$ 47',
  installments: '5x de R$ 10,40',
  bonusValue: 'R$ 203',
  guaranteeDays: 7,
}

/* --------------------------------------------------------------------------
 * ⚠️ PLACEHOLDERS — SUBSTITUIR ANTES DE PUBLICAR
 * --------------------------------------------------------------------------
 * Os valores abaixo são EXEMPLOS de demonstração. Números de vendas, notas e
 * depoimentos inventados quebram a confiança do público e podem gerar problema
 * com o CDC e com as políticas de anúncio do Meta/TikTok.
 * Troque por dados reais (ou remova a seção) antes de subir a página.
 */
export const PLACEHOLDER = {
  studentsCount: '2.400',
  rating: '4,8',
  reviewsCount: '312',
  offerDeadline: '31/12',
  spotsLeft: '37',
  instagram: 'https://instagram.com/menshelper',
  tiktok: 'https://tiktok.com/@menshelper',
  youtube: 'https://youtube.com/@menshelper',
  supportEmail: 'contato@menshelper.com.br',
}

/* --------------------------------------------------------------------------
 * FUNDO DO HERÓI
 * --------------------------------------------------------------------------
 * As imagens ficam em `public/hero/` e giram em slideshow com zoom lento
 * (Ken Burns) e parallax — ver src/components/ui/HeroBackground.jsx.
 *
 * ⚠️ Os arquivos atuais são PLACEHOLDERS: texturas escuras geradas
 * proceduralmente, não fotos. Para colocar as fotos reais, basta exportar cada
 * uma em WebP com o mesmo nome (1920px de largura para o desktop e 960px para o
 * celular) e sobrescrever os arquivos — nenhum código precisa mudar.
 *
 * Como as fotos devem ser, para funcionar bem aqui:
 * · escuras e com bastante contraste (o texto branco fica por cima delas);
 * · com o "assunto" à direita do enquadramento — a coluna da esquerda é o texto;
 * · até ~250 KB cada uma, em WebP ou AVIF;
 * · com direito de uso comercial (banco de imagem pago, Unsplash/Pexels ou
 *   ensaio próprio). Foto sem licença em página de venda dá dor de cabeça.
 *
 * `origin` é o ponto para onde o zoom converge (`transform-origin`): aponte
 * para o assunto da foto, senão o rosto sai do quadro durante a animação.
 */
export const HERO_BACKGROUNDS = [
  { src: '/hero/hero-1.webp', srcSmall: '/hero/hero-1-960.webp', origin: '65% 40%' },
  { src: '/hero/hero-2.webp', srcSmall: '/hero/hero-2-960.webp', origin: '40% 55%' },
  { src: '/hero/hero-3.webp', srcSmall: '/hero/hero-3-960.webp', origin: '70% 60%' },
]

/* Navegação do header ---------------------------------------------------- */
export const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
]
