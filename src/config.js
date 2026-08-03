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
 * · CLARAS e bem iluminadas (luz natural, fundo neutro) — o tema do site é
 *   branco e o texto escuro fica por cima de um véu branco à esquerda;
 * · retrato masculino nítido (rosto/ombros), com o assunto à DIREITA do
 *   enquadramento — a coluna da esquerda é ocupada pelo texto;
 * · clima de autocuidado real: toalha no ombro, skincare, barbearia, espelho
 *   de banheiro — nada de banco de imagem genérico de terno apertando mão;
 * · até ~250 KB cada uma, em WebP ou AVIF;
 * · com direito de uso comercial E cessão de imagem do modelo (banco de
 *   imagem pago, Unsplash/Pexels ou ensaio próprio). Rosto de pessoa real em
 *   página de venda sem licença é processo na certa.
 *
 * `origin` é o ponto para onde o zoom converge (`transform-origin`): aponte
 * para o assunto da foto, senão o rosto sai do quadro durante a animação.
 */
export const HERO_BACKGROUNDS = [
  { src: '/hero/hero-1.webp', srcSmall: '/hero/hero-1-960.webp', origin: '65% 40%' },
  { src: '/hero/hero-2.webp', srcSmall: '/hero/hero-2-960.webp', origin: '40% 55%' },
  { src: '/hero/hero-3.webp', srcSmall: '/hero/hero-3-960.webp', origin: '70% 60%' },
]

/* --------------------------------------------------------------------------
 * ESPAÇOS DE IMAGEM DAS SEÇÕES
 * --------------------------------------------------------------------------
 * Cada seção tem um espaço de imagem renderizado pelo componente
 * src/components/ui/ImageSlot.jsx. Os arquivos moram em `public/images/` e,
 * como no fundo do herói, os atuais são PLACEHOLDERS gerados (cada um leva uma
 * etiqueta dizendo qual arquivo trocar).
 *
 * Para colocar as fotos reais: sobrescreva o arquivo mantendo o nome, em WebP,
 * na proporção indicada em cada item — nenhum código precisa mudar. O `alt`
 * descreve a imagem para leitores de tela; atualize junto com a foto.
 */
export const IMAGES = {
  problema: {
    src: '/images/problema.webp',
    alt: 'Homem se olhando no espelho do banheiro, decidido a mudar a rotina',
    w: 1200,
    h: 900, // proporção 4:3
  },
  beneficios: {
    src: '/images/beneficios.webp',
    alt: 'Produtos básicos de skincare organizados sobre a pia',
    w: 1200,
    h: 900, // 4:3
  },
  comoFunciona: {
    src: '/images/como-funciona.webp',
    alt: 'Rotina em prática: toalha, relógio e checklist sobre a bancada',
    w: 1200,
    h: 750, // 16:10
  },
  ofertaMockup: {
    src: '/images/oferta-mockup.webp',
    alt: 'Capa do guia Mens Helper aberta na tela de um celular',
    w: 900,
    h: 1200, // 3:4 (retrato)
  },
  garantia: {
    src: '/images/garantia.webp',
    alt: 'Homem tranquilo depois da rotina, sem pressa',
    w: 900,
    h: 900, // 1:1
  },
  // fundo da seção final — fica atrás de um véu verde-escuro, então pode ser
  // uma foto com menos "pose": textura, ambiente, detalhe de rotina
  finalBg: {
    src: '/images/final-bg.webp',
    alt: '',
    w: 1920,
    h: 900,
  },
  // avatares dos depoimentos — ⚠️ mesmos avisos da seção de depoimentos:
  // foto de pessoa real exige autorização por escrito
  depoimentos: [
    { src: '/images/depoimento-1.webp', w: 240, h: 240 },
    { src: '/images/depoimento-2.webp', w: 240, h: 240 },
    { src: '/images/depoimento-3.webp', w: 240, h: 240 },
  ],
}

/* Navegação do header ---------------------------------------------------- */
export const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
]
