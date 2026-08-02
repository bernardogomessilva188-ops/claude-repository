# Prompt para aplicar o redesign no Lovable

Cole o prompt abaixo no chat do Lovable (projeto `valor-prime-hub`). Ele descreve todas as mudanças de design e copy. O arquivo `index.html` nesta pasta é a referência visual completa — se preferir, você também pode anexar screenshots dele ao prompt.

---

## PROMPT (copiar daqui para baixo)

Redesenhe a landing page inteira com um padrão visual mais profissional e editorial de luxo, mantendo o tema preto + dourado. Aplique exatamente as mudanças abaixo.

### Design system
- Cores: fundo preto quente `#0B0A08`; painéis `#12100C`; cards `#1A1712`; dourado champanhe `#C9A24B`; dourado claro `#E8D5A3`; texto principal off-white `#F2EDE3`; texto secundário `#A79E90`; bordas `rgba(201,162,75,0.22)`.
- Tipografia: display serif **Fraunces** (peso 300–450, com itálico) para títulos; **Manrope** para corpo, botões e labels. Eyebrows em Manrope 700, uppercase, letter-spacing 0.28em, cor dourada.
- Botão primário: gradiente champanhe (`#E8D5A3 → #C9A24B → #A9832F`), texto escuro `#141005`, uppercase, glow suave dourado no hover, nunca quebrar linha (white-space nowrap).
- Detalhe recorrente: eyebrows centralizados entre duas linhas finas em gradiente dourado; losango ◆ como marcador.
- Animações: fade + translateY sutil ao entrar na viewport (IntersectionObserver), respeitando `prefers-reduced-motion`.

### Navbar (nova — fixa)
Fundo `rgba(11,10,8,0.82)` com blur, borda inferior dourada sutil. Logo: monograma "HV" dentro de um losango com borda dourada + "HOMEM DE VALOR" em serif uppercase ("de Valor" em dourado). Links (desktop): O Método, Módulos, Resultados, Dúvidas. CTA "Começar agora" em botão dourado pequeno.

### Hero (reformulada)
- Badge pill: "O MÉTODO COMPLETO DE IMAGEM MASCULINA"
- H1 em Fraunces (clamp 2.5rem–5.2rem, nunca deixar palavra cortada no meio): "Sua aparência fala antes de você. Faça ela dizer *respeito*." — a palavra "respeito" em itálico com gradiente dourado.
- Sub: "Skincare, barba, cabelo, estilo e postura em **um sistema passo a passo** — do homem que se arruma de qualquer jeito ao homem que entra na sala e é notado. Sem produtos caros. Sem complicação."
- CTA primário: "QUERO O MÉTODO COMPLETO →". CTA secundário (ghost): "Ver o que está incluso ↓".
- Microcopy: "Acesso imediato e vitalício · Garantia incondicional de 7 dias".
- Linha de confiança: "10 módulos completos — 100+ técnicas aplicáveis — 1 transformação definitiva".
- Fundo: halo radial dourado no topo + textura de pontos dourados bem sutil (grain), vinheta escura.

### Barra de prova (substitui os stats atuais)
Faixa com borda superior/inferior dourada, 4 colunas separadas por linhas: **10** Módulos · **100+** Técnicas práticas · **∞** Acesso vitalício · **7** Dias de garantia. Números em serif dourado claro, rótulos uppercase pequenos.

### Seção Problema (nova)
Eyebrow "A VERDADE QUE NINGUÉM TE CONTA". Título: "O mundo julga sua aparência em *7 segundos*. Você está perdendo esse julgamento." Lista de 5 cards com ✕ dourado e borda esquerda dourada:
1. "**A pele oleosa e marcada** que você finge não ver no espelho — mas repara em toda foto."
2. "**A barba sem contorno** que transforma 'estilo despojado' em 'desleixo'."
3. "**O cabelo que nunca tem forma**, porque ninguém te ensinou o corte certo para o seu rosto."
4. "**O guarda-roupa cheio** — e a sensação de que nada combina com nada."
5. "**A postura encolhida** de quem entra na sala pedindo licença, não marcando presença."
Fecho em serif itálico dourado: "Não é falta de genética. É falta de método. E método se aprende."

### Seção Módulos (grid 3×3 desktop, 1 coluna mobile)
Título: "10 módulos. Um arsenal *completo*." Cards escuros com numeração em serif itálico dourado (Módulo I, II…), hover elevando o card e acendendo a borda dourada. Conteúdo dos 9 cards conforme o arquivo `copy-site.md` (Pele de Alto Padrão, Barba com Arquitetura, Cabelo Estratégico, Estilo Sem Uniforme, Postura & Presença, Grooming Invisível, Corpo em Ordem, Autoestima Blindada, Rotina & Manutenção).

### Seção Linha do Tempo (nova)
Título: "A transformação tem *cronograma*." Timeline vertical com círculos dourados marcando 7 / 30 / 90 dias:
- 7 dias — "O espelho responde primeiro" (rotina instalada, contorno de barba, cabelo finalizado)
- 30 dias — "As pessoas começam a comentar" (pele uniforme, guarda-roupa reorganizado, postura)
- 90 dias — "Vira identidade, não esforço" (protocolo automático de 15 min/dia)

### Depoimentos
3 cards com 5 estrelas douradas, citação em serif itálico, nome + idade + profissão + cidade. (Usar depoimentos reais.)

### Oferta (card central destacado)
Card com borda dourada e glow, header "HOMEM DE VALOR — EDIÇÃO COMPLETA". Lista com ◆ dourados: 10 módulos, 100+ técnicas, protocolo de 15 min, acesso vitalício + atualizações, e 2 bônus em dourado (Checklist de Primeira Impressão; Guia de Compras Inteligente). Preço ancorado: "De R$ 297 por apenas **R$ 97**" em serif grande dourado, "ou 12x de R$ 9,73 · pagamento único · sem mensalidade". Botão full-width "QUERO MINHA TRANSFORMAÇÃO →" + "🔒 Compra segura · Acesso imediato por e-mail". (Ajustar preço real.)

### Garantia
Selo circular com borda dupla (sólida + tracejada) "7 DIAS DE GARANTIA" à esquerda; título "O risco é *meu*. A decisão é sua." e texto de devolução incondicional em 7 dias.

### FAQ (accordion)
6 perguntas com ícone "+" que gira ao abrir (conteúdo no `copy-site.md`).

### CTA final
Fundo com brilho radial dourado vindo de baixo. Título: "Daqui a 90 dias você vai se olhar no espelho. A pergunta é: *vendo o quê?*" Texto: "O mesmo reflexo de sempre — ou o homem que decidiu se levar a sério. O método está pronto. Os 10 módulos estão te esperando. Falta só a decisão." Botão "COMEÇAR MINHA TRANSFORMAÇÃO →".

### Footer + mobile
Footer minimalista com logo e disclaimer dermatológico. No mobile: barra fixa inferior com botão dourado "Começar agora → R$ 97" que aparece após rolar a hero e some na seção de oferta; botões nunca quebram linha; H1 com quebras controladas (nunca cortar palavra no meio como "VALO/R").

### SEO
Title: "Homem de Valor — O Método Completo de Imagem e Presença Masculina". Meta description: "Skincare, barba, cabelo, estilo e postura em um sistema passo a passo. 10 módulos, 100+ técnicas aplicáveis, acesso vitalício. Garantia incondicional de 7 dias."
