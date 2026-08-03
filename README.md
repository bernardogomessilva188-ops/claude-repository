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
| Movimento | Ken Burns + parallax no herói, máscaras de entrada, contadores, marquee |
| Ícones | SVG inline, escritos à mão (`src/components/ui/Icons.jsx`) |
| Fontes | Bodoni Moda (display) + IBM Plex Sans (texto) + IBM Plex Mono (etiquetas) |

**O sistema de design está no [`BRANDBOOK.md`](BRANDBOOK.md)** — paleta, tipografia,
espaçamento, botões, movimento e o elemento assinatura. Leia antes de criar tela nova.

Os tokens vivem em `src/index.css`, dentro de `@theme`: é de lá que o Tailwind 4 gera
`bg-espresso-950`, `text-brass-500`, `label-mono` e companhia. Mudou lá, mudou na página
inteira.

Resumo da direção: **revista masculina encontra manual técnico**. Fundo espresso (preto
quente), papel bone nos capítulos claros, latão como único acento, serifa de alto
contraste nos títulos e monoespaçada nas etiquetas. Cantos de 2px, fios de 1px, sem
sombra difusa.

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
    ├── ChapterRail.jsx     trilho de capítulos (elemento assinatura)
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
                            HeroBackground, ImageSlot, RevealLines, AnimatedNumber)
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

Os arquivos em `public/hero/` **não são fotos**: são texturas escuras geradas
proceduralmente, só para o efeito ficar visível. Troque pelas fotos reais sobrescrevendo
os arquivos com os mesmos nomes — nenhuma linha de código precisa mudar.

Cada cena tem dois arquivos: `hero-N.webp` (1920px, desktop) e `hero-N-960.webp` (960px,
servido no celular via `<picture>`).

O que as fotos precisam ter para funcionar bem:

- **luz dura e direcional, sombra marcada** — combina com o contraste da tipografia;
- **escuras o suficiente** para o texto bone ficar legível por cima, com o assunto
  respirando à direita;
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

Regras e durações estão no [`BRANDBOOK.md` §8](BRANDBOOK.md). Na prática:

- **Máscara linha a linha** nos títulos (`RevealLines`): cada linha sobe por trás de um
  recorte. Você declara as linhas — o corte é decisão de composição, não da quebra
  automática do navegador.
- **Fio que se desenha** na abertura de cada capítulo (`data-reveal-rule`).
- **Imagem com corte** que abre de baixo para cima (`data-reveal-image`).
  ⚠️ O recorte fica num filho `.reveal-mask`, nunca no elemento observado: o
  `IntersectionObserver` considera o clip, e um elemento com `clip-path: inset(100%)`
  tem área de interseção zero — ou seja, nunca dispararia e a imagem ficaria invisível
  para sempre.
- **Blocos** que sobem e aparecem (`data-reveal`), com cascata via `--reveal-delay`.
- **Trilho de capítulos** com o capítulo atual e o progresso da leitura.
- **Foco que segue o cursor** no herói (só em telas com mouse).
- **Hover:** varredura de latão no CTA, fio que cresce no topo dos cards, sublinhado que
  se desenha nos links, imagem que avança de leve na moldura, avatar que sai do
  preto e branco.
- **Contadores** que contam de 0 até o valor, no formato brasileiro.

Um `IntersectionObserver` só cuida da página inteira, e cada elemento é esquecido depois
de revelado. Tudo respeita `prefers-reduced-motion`: sem Lenis, sem máscara, sem
parallax — e o conteúdo aparece inteiro, sem atraso.

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
