# Mens Helper — Landing page

Landing page de conversão para o **Mens Helper**, um produto digital de autocuidado
masculino (skincare, rotina, saúde física e mental, estilo pessoal).

Site estático, sem backend: os CTAs apontam para a seção de oferta até que exista um
checkout de verdade.

---

## Rodando localmente

Requisitos: **Node.js 20+** e npm.

```bash
npm install     # instala as dependências
npm start       # servidor de desenvolvimento em http://localhost:5173
```

(`npm run dev` faz o mesmo que `npm start`.)

Outros comandos:

```bash
npm run build            # gera a build de produção em dist/
npm run preview          # serve a build de produção localmente
npm run preview:single   # gera mens-helper-preview.html: a página inteira num
                         # arquivo só (CSS, JS e imagens embutidos), que abre
                         # offline com dois cliques — bom para mandar para alguém
npm run lint             # roda o oxlint
```

---

## Stack

| Peça | Escolha |
| --- | --- |
| Build | Vite 8 |
| UI | React 19 (JavaScript, sem TypeScript) |
| Estilos | Tailwind CSS 4 (plugin oficial do Vite, sem `tailwind.config.js`) |
| Scroll | [Lenis](https://github.com/darkroomengineering/lenis) — rolagem suave da página inteira |
| Movimento | Ken Burns + parallax no herói, revelação ao rolar, contadores animados, marquee |
| Ícones | SVG inline, escritos à mão (`src/components/ui/Icons.jsx`) |
| Fontes | Archivo (títulos) + Inter (texto), via Google Fonts com `display=swap` |

Os tokens de design (cores, fontes, animações) ficam em `src/index.css`, dentro do bloco
`@theme` — é de lá que o Tailwind 4 gera as utilidades `bg-paper-50`, `text-sage-600`
e companhia.

A paleta é clara, no clima de marca de grooming premium: brancos quentes (`paper`),
tinta verde-grafite (`ink`), verde-eucalipto nos CTAs e destaques (`sage`), terracota
apenas para urgência (`clay`) e areia nos detalhes (`sand`). O único bloco escuro da
página é o CTA final — o contraste é proposital, para o fechamento pesar mais.

---

## Estrutura

```
index.html                  meta tags, fontes, preload do fundo e pixels de anúncio
public/hero/                imagens de fundo do herói (⚠️ placeholders)
src/
├── main.jsx                ponto de entrada
├── App.jsx                 ordem das seções da página
├── index.css               tokens de design + estilos base
├── config.js               checkout, preço, imagens do herói, placeholders, menu
├── hooks/
│   ├── useSmoothScroll.js  Lenis + interceptação dos links de âncora
│   └── useReveal.js        revelação ao rolar (um IntersectionObserver p/ tudo)
└── components/
    ├── Header.jsx          header fixo + menu mobile + CTA
    ├── Hero.jsx            headline, CTA principal e prova social rápida
    ├── MarqueeStrip.jsx    faixa de palavras em movimento contínuo
    ├── PainPoints.jsx      as dores do público
    ├── Benefits.jsx        os 6 blocos de benefício
    ├── HowItWorks.jsx      passo a passo em 4 etapas
    ├── Testimonials.jsx    depoimentos (⚠️ fictícios — ver abaixo)
    ├── Offer.jsx           produto, bônus, preço e escassez
    ├── Guarantee.jsx       selo de garantia de 7 dias
    ├── Faq.jsx             accordion de perguntas frequentes
    ├── FinalCta.jsx        reforço do CTA + captura de e-mail
    ├── Footer.jsx          institucional, redes sociais, avisos legais
    ├── StickyMobileCta.jsx barra de CTA fixa no mobile
    └── ui/                 peças reutilizáveis (Section, CtaButton, Logo, Icons,
                            HeroBackground, AnimatedNumber)
```

O texto de cada seção mora dentro do próprio componente — para reescrever uma headline,
abra o arquivo da seção e edite ali.

---

## Fundo animado do herói

O herói tem um slideshow de três imagens em `public/hero/`, com três camadas de
movimento — todas só de `transform` e `opacity`, que o navegador resolve na GPU sem
recalcular layout:

1. **Ken Burns** — a imagem ativa dá um zoom lento e contínuo (14s), convergindo para o
   ponto definido em `origin`.
2. **Cross-fade** — troca de imagem a cada 7s, com 1,6s de transição.
3. **Parallax** — o bloco de imagem sobe a 28% da velocidade do scroll.

Com `prefers-reduced-motion: reduce`, tudo isso desliga e fica a primeira imagem parada.

### ⚠️ As imagens atuais são placeholders

Os arquivos em `public/hero/` **não são fotos**: são texturas claras geradas
proceduralmente, só para o efeito ficar visível. Troque pelas fotos reais sobrescrevendo
os arquivos com os mesmos nomes — nenhuma linha de código precisa mudar.

Cada cena tem dois arquivos: `hero-N.webp` (1920px, desktop) e `hero-N-960.webp` (960px,
servido no celular via `<picture>`).

O que as fotos precisam ter para funcionar bem:

- **claras e bem iluminadas** (luz natural, fundo neutro) — o tema é branco e o texto
  escuro fica sobre um véu branco à esquerda;
- **retrato masculino nítido** (rosto/ombros), com o assunto **à direita** do
  enquadramento — a coluna da esquerda é ocupada pelo texto;
- clima de autocuidado real: toalha no ombro, skincare, barbearia, espelho de banheiro —
  nada de banco de imagem genérico de terno;
- **até ~250 KB cada**, em WebP ou AVIF;
- **direito de uso comercial e cessão de imagem do modelo**: banco de imagem pago,
  Unsplash/Pexels ou ensaio próprio. Rosto de pessoa real em página de venda sem
  licença é risco jurídico sério.

Para converter e redimensionar os originais sem instalar nada no projeto:

```bash
npx sharp-cli --input foto.jpg --output public/hero/hero-1.webp resize 1920
npx sharp-cli --input foto.jpg --output public/hero/hero-1-960.webp resize 960
```

Ajuste o `origin` de cada imagem em `HERO_BACKGROUNDS` (`src/config.js`) para o ponto do
assunto, senão o rosto sai do quadro durante o zoom. Se quiser mais ou menos cenas, é só
mexer na lista — o componente se adapta (com uma imagem só, o slideshow não roda).

Se trocar o nome do primeiro arquivo, atualize também o `<link rel="preload">` no
`index.html` — ele é o que faz a imagem do topo chegar cedo.

---

## Scroll suave (Lenis)

`src/hooks/useSmoothScroll.js` inicializa o Lenis e cuida de três detalhes:

- **`prefers-reduced-motion`**: o Lenis nem é criado, a rolagem segue nativa.
- **Links de âncora**: com o Lenis ativo o `scroll-behavior: smooth` do CSS é desligado,
  então os cliques em `a[href^="#"]` são interceptados e mandados para `lenis.scrollTo`.
- **Folga do header fixo**: vem do `scroll-padding-top` do `<html>`. Não some `scroll-mt`
  nas seções nem `offset` no `scrollTo` — os três valores se acumulam e a âncora para
  longe demais do alvo.

No touch o scroll continua nativo (`syncTouch: false`): é mais previsível no celular e
não briga com o "puxar para atualizar" nem com a barra do navegador.

---

## Espaços de imagem das seções

Cada seção tem um espaço de imagem, renderizado por
`src/components/ui/ImageSlot.jsx` e registrado em `IMAGES` (`src/config.js`). Os
arquivos ficam em `public/images/` e os atuais são **placeholders gerados** — cada um
leva uma etiqueta no canto dizendo qual arquivo trocar.

| Seção | Arquivo | Proporção | Sugestão de foto |
| --- | --- | --- | --- |
| Problema | `problema.webp` | 4:3 | homem se olhando no espelho |
| Benefícios | `beneficios.webp` | 4:3 | produtos básicos sobre a pia |
| Como funciona | `como-funciona.webp` | 16:10 | rotina em prática (toalha, relógio, checklist) |
| Oferta | `oferta-mockup.webp` | 3:4 | mockup do guia (capa no celular/e-book) |
| Garantia | `garantia.webp` | 1:1 | homem tranquilo pós-rotina (só telas xl+) |
| CTA final | `final-bg.webp` | 1920×900 | ambiente/textura — fica atrás de véu verde |
| Depoimentos | `depoimento-1..3.webp` | 1:1 | foto dos clientes (⚠️ só com autorização) |

Trocar é sobrescrever o arquivo mantendo o nome (WebP, na proporção indicada) e ajustar
o `alt` correspondente em `IMAGES` — nenhum componente muda. O `ImageSlot` já cuida de
`width`/`height` (zero layout shift), `loading="lazy"`, moldura verde-clara deslocada e
revelação ao rolar; `framed={false}` desliga a moldura.

---

## Interatividade e movimento

Além do fundo do herói e do Lenis:

- **Revelação ao rolar** — elementos com `data-reveal` sobem e aparecem quando entram na
  tela (`src/hooks/useReveal.js` + CSS em `index.css`). Cascatas usam
  `style={{ '--reveal-delay': '120ms' }}`. Um único `IntersectionObserver` cuida da
  página toda, e cada elemento é esquecido depois de revelado.
- **Fade-in lento palavra por palavra** — os títulos surgem uma palavra de cada vez
  (~1,2s por palavra, com leve subida e desfoque saindo), via
  `src/components/ui/RevealWords.jsx`. O `SectionTitle` já usa por padrão; para aplicar
  em outro texto, envolva com `<RevealWords as="h2" step={110}>...</RevealWords>` —
  JSX no meio (destaques, `<br/>`) é preservado.
- **Contadores animados** — os números de prova social contam de 0 até o valor quando
  ficam visíveis (`src/components/ui/AnimatedNumber.jsx`), respeitando o formato
  brasileiro ("2.400", "4,8").
- **Marquee** — faixa de palavras em movimento contínuo separando o herói do resto
  (`src/components/MarqueeStrip.jsx`).
- **Formas em deriva** — círculos desfocados que flutuam devagar ao fundo de algumas
  seções (`DriftShape` em `src/components/ui/Section.jsx`).
- **FAQ** — abre e fecha com transição de altura sem medir nada (truque do
  `grid-template-rows: 0fr → 1fr`).
- Hover com elevação e sombra nos cards, ícones que invertem a cor, CTA que "acende".

Tudo respeita `prefers-reduced-motion`: a regra global zera animações e transições, e o
conteúdo com `data-reveal` aparece direto.

---

## ⚠️ Antes de publicar

A página está pronta em estrutura e copy, mas alguns dados são **exemplos de
demonstração**. Trocar tudo isso é obrigatório:

| O quê | Onde | Por quê |
| --- | --- | --- |
| Depoimentos, nota e número de alunos | `src/components/Testimonials.jsx` e `PLACEHOLDER` em `src/config.js` | Depoimento inventado é propaganda enganosa (CDC) e derruba conta de anúncio no Meta/TikTok |
| Imagens de fundo do herói | `public/hero/` | Hoje são texturas geradas, não fotos — ver a seção do fundo animado acima |
| Prazo da oferta / escassez | `PLACEHOLDER.offerDeadline` em `src/config.js` | Só mantenha o bloco se a condição for real |
| Preço e parcelamento | `PRODUCT` em `src/config.js` | Precisa bater com o checkout |
| Links institucionais (termos, privacidade, reembolso) e CNPJ | `src/components/Footer.jsx` | Exigência legal para venda online |
| Redes sociais e e-mail de suporte | `PLACEHOLDER` em `src/config.js` | Hoje apontam para perfis que não existem |
| `og:image` | `index.html` + `public/og-image.svg` | Vários scrapers não renderizam SVG: exporte um PNG/JPG 1200×630 |

Enquanto os depoimentos forem fictícios, a página exibe um aviso visível abaixo da seção.
Remova o aviso junto com os dados falsos.

---

## Pontos de integração (já marcados no código)

**Checkout** — `CHECKOUT_URL` em `src/config.js`. Hoje vale `'#oferta'`, e todos os CTAs
rolam a página até a oferta. Troque pela URL da Hotmart/Kiwify/Stripe e o
`CtaButton` passa a abrir o link externo em nova aba sozinho.

**Pixel do Meta Ads, TikTok Pixel e Google Analytics** — bloco de comentário no `<head>`
do `index.html`. Cole os snippets ali.

> Cuidado ao editar o `index.html`: não escreva tags de fechamento de `head`/`body` dentro
> de comentários. O Vite injeta os assets no primeiro fechamento de `head` que encontrar,
> mesmo comentado, e a página sai em branco.

**Evento de conversão no clique** — `src/components/ui/CtaButton.jsx` tem o `onClick`
pronto para disparar, por exemplo, `window.fbq?.('track', 'InitiateCheckout')`. O evento
de `Purchase` deve ficar na página de obrigado do checkout, nunca aqui.

**E-mail marketing** — `NEWSLETTER_ENDPOINT` em `src/config.js`. Com `null`, o formulário
do fim da página roda em modo demonstração: valida o e-mail e mostra a mensagem de
sucesso sem enviar nada para lugar nenhum. Preencha com a URL do formulário da sua
ferramenta (Mailchimp, Brevo, ActiveCampaign, ConvertKit) para ativar o envio real.

---

## Performance

- Build em ~78 KB de JS e ~7,8 KB de CSS (gzip). Logo, ícones e imagem de
  compartilhamento são SVG; as únicas imagens raster são os três fundos do herói.
- Nenhuma biblioteca de ícones, de animação ou de UI — só React e o Lenis.
- A primeira imagem do fundo tem `preload` + `fetchPriority="high"`; as outras duas
  entram com `loading="lazy"`, sem competir com o texto do topo.
- Todas as imagens têm `width`/`height` declarados, então não há layout shift.
- Fontes com `preconnect` + `display=swap`, então o texto aparece antes delas carregarem.

---

## Acessibilidade e mobile

O layout é mobile-first — a maior parte do tráfego vem de anúncio no Instagram/TikTok.

- Barra de CTA fixa no rodapé do mobile, que some quando o card de preço está na tela.
- Alvos de toque com no mínimo 48 px; campos de formulário com fonte de 16 px (abaixo
  disso o iOS dá zoom sozinho).
- Accordion do FAQ com `aria-expanded`/`aria-controls`, menu mobile com `aria-controls`,
  link de "pular para o conteúdo" e foco visível em tudo que é navegável por teclado.
- `prefers-reduced-motion` respeitado de ponta a ponta: sem Lenis, sem Ken Burns, sem
  cross-fade, sem parallax e sem transições.
- As imagens de fundo são decorativas (`alt=""`, `aria-hidden`), então não poluem leitor
  de tela.
