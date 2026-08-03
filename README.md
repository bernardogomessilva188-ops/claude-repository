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
npm run dev     # servidor de desenvolvimento em http://localhost:5173
```

Outros comandos:

```bash
npm run build     # gera a build de produção em dist/
npm run preview   # serve a build de produção localmente
npm run lint      # roda o oxlint
```

---

## Stack

| Peça | Escolha |
| --- | --- |
| Build | Vite 8 |
| UI | React 19 (JavaScript, sem TypeScript) |
| Estilos | Tailwind CSS 4 (plugin oficial do Vite, sem `tailwind.config.js`) |
| Ícones | SVG inline, escritos à mão (`src/components/ui/Icons.jsx`) |
| Fontes | Archivo (títulos) + Inter (texto), via Google Fonts com `display=swap` |

Os tokens de design (cores, fontes, animações) ficam em `src/index.css`, dentro do bloco
`@theme` — é de lá que o Tailwind 4 gera as utilidades `bg-carbon-900`, `text-acid-400`
e companhia.

---

## Estrutura

```
index.html                  meta tags, fontes e o espaço para os pixels de anúncio
src/
├── main.jsx                ponto de entrada
├── App.jsx                 ordem das seções da página
├── index.css               tokens de design + estilos base
├── config.js               checkout, preço, dados de placeholder, menu
└── components/
    ├── Header.jsx          header fixo + menu mobile + CTA
    ├── Hero.jsx            headline, CTA principal e prova social rápida
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
    └── ui/                 peças reutilizáveis (Section, CtaButton, Logo, Icons, HeroVisual)
```

O texto de cada seção mora dentro do próprio componente — para reescrever uma headline,
abra o arquivo da seção e edite ali.

---

## ⚠️ Antes de publicar

A página está pronta em estrutura e copy, mas alguns dados são **exemplos de
demonstração**. Trocar tudo isso é obrigatório:

| O quê | Onde | Por quê |
| --- | --- | --- |
| Depoimentos, nota e número de alunos | `src/components/Testimonials.jsx` e `PLACEHOLDER` em `src/config.js` | Depoimento inventado é propaganda enganosa (CDC) e derruba conta de anúncio no Meta/TikTok |
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

- Nenhuma imagem raster: a ilustração do herói, a logo, os ícones e a imagem de
  compartilhamento são SVG. A build fica em ~73 KB de JS e ~7,5 KB de CSS (gzip).
- Nenhuma biblioteca de ícones, de animação ou de UI — só React.
- Fontes com `preconnect` + `display=swap`, então o texto aparece antes delas carregarem.
- Se trocar a ilustração por foto: exporte em WebP/AVIF com menos de 200 KB, defina
  `width`/`height` para não causar layout shift, use `loading="lazy"` nas imagens abaixo da
  dobra e `fetchPriority="high"` (sem lazy) na do herói. Há um exemplo comentado em
  `src/components/ui/HeroVisual.jsx`.

---

## Acessibilidade e mobile

O layout é mobile-first — a maior parte do tráfego vem de anúncio no Instagram/TikTok.

- Barra de CTA fixa no rodapé do mobile, que some quando o card de preço está na tela.
- Alvos de toque com no mínimo 48 px; campos de formulário com fonte de 16 px (abaixo
  disso o iOS dá zoom sozinho).
- Accordion do FAQ com `aria-expanded`/`aria-controls`, menu mobile com `aria-controls`,
  link de "pular para o conteúdo" e foco visível em tudo que é navegável por teclado.
- `prefers-reduced-motion` respeitado: as animações são desligadas.
