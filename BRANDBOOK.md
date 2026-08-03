# Mens Helper — Brandbook

Sistema de design da marca. Não é decoração: é a lista de decisões que mantém a página
coerente. Antes de criar qualquer coisa nova, consulte aqui. Se precisar quebrar uma
regra, quebre de propósito e anote o porquê.

Implementação: os tokens vivem em `src/index.css`, dentro de `@theme`. O que estiver
escrito aqui e não estiver lá é intenção, não código.

---

## 1. A marca

**Mens Helper é O Manual.**

Não é uma marca de wellness, não é academia, não é revista de moda. É o manual que
deveria ter vindo junto com você: instruções claras, na ordem certa, escritas por quem
já resolveu isso.

| | |
| --- | --- |
| **Produto** | Guia digital de autocuidado masculino — R$ 47, pagamento único |
| **Público** | Homens de 20 a 45 anos, Brasil. Querem melhorar aparência, saúde e confiança, mas nunca receberam instrução nenhuma sobre isso |
| **Trabalho da página** | Vender o guia. Tudo o mais é secundário |
| **Posição** | A autoridade calma. Não grita, não promete milagre, não infantiliza |

### Voz

Direta, adulta, específica. Frase curta. Verbo no presente. Zero jargão de coach, zero
terminologia de dermatologia, zero "transforme sua vida".

- **Fale assim:** "Quatro passos, cinco minutos. Manhã e noite."
- **Nunca assim:** "Desperte sua melhor versão com nosso protocolo revolucionário."

O número concreto vence o adjetivo. "10 minutos por dia" convence; "rotina prática" não.

---

## 2. Direção visual

**Revista masculina encontra manual técnico.**

De um lado, a herança editorial das revistas masculinas: serifa de alto contraste,
títulos grandes, muito respiro, papel. Do outro, a precisão do manual de instruções:
capítulos numerados, fios finos, etiquetas em monoespaçada, tudo no lugar.

A tensão entre os dois é a marca: **elegância com instrução**.

### O que evitar

Nada de degradê colorido, nada de emoji como ícone, nada de cantos muito arredondados,
nada de sombra difusa espalhada por tudo, nada de foto genérica de banco de imagem com
homem de terno apertando a mão de alguém.

---

## 3. Cores

Fundo escuro é o padrão da marca. O claro entra como "papel" — a página do manual.

| Token | Hex | Uso |
| --- | --- | --- |
| `espresso` | `#14110E` | Fundo padrão. Preto quente, nunca azulado |
| `ash` | `#211C18` | Superfície elevada sobre o espresso (cards, painéis) |
| `ember` | `#332B24` | Fios e bordas sobre fundo escuro |
| `bone` | `#F1EBE0` | O "papel": seções claras e texto sobre escuro |
| `sand` | `#DED4C4` | Fios e bordas sobre fundo claro |
| `brass` | `#C89550` | **Acento único.** CTA, números de capítulo, marcadores |
| `oxblood` | `#7E2B24` | Só urgência e erro. Nunca decoração |

Texto secundário: `fog #A79B8B` sobre escuro, `slate #5C544A` sobre claro.

### Regras

1. **Um acento só.** Latão é a única cor viva da página. Se algo compete com o botão
   de compra, está errado.
2. **Neutros são quentes.** Todo cinza puxa para o marrom. Cinza neutro parece
   descuido.
3. **Oxblood é alarme.** Aparece no bloco de escassez e em mensagem de erro. Em mais
   nenhum lugar.
4. **Proporção.** Numa tela cheia: ~70% fundo, ~25% texto, ~5% latão.

---

## 4. Tipografia

Três papéis, três famílias. Cada uma faz uma coisa só.

| Papel | Fonte | Onde |
| --- | --- | --- |
| **Display** | Bodoni Moda | Títulos grandes. Serifa de alto contraste, linhagem de revista masculina |
| **Texto** | IBM Plex Sans | Parágrafos, listas, botões |
| **Utilidade** | IBM Plex Mono | Números de capítulo, etiquetas, preço, dados |

Fallbacks preservam o caráter: se a Bodoni não carregar, cai em Didot/Georgia (ainda
serifa); a Plex Mono cai em monoespaçada de sistema. A página nunca vira "tudo Arial".

### Escala

| Papel | Tamanho | Peso | Entrelinha | Espaçamento |
| --- | --- | --- | --- | --- |
| Display XL (herói) | 56–104px | 500 | 0.95 | −0.02em |
| Display L (seção) | 40–68px | 500 | 1.0 | −0.02em |
| Display M (card) | 24–30px | 500 | 1.1 | −0.01em |
| Corpo grande | 18–20px | 400 | 1.65 | 0 |
| Corpo | 16px | 400 | 1.6 | 0 |
| Etiqueta (mono) | 11–12px | 500 | 1 | 0.18em, caixa alta |
| Dado (mono) | 14–16px | 400 | 1.2 | 0.02em |

### Regras

1. **Bodoni só grande.** Abaixo de 24px ela fica frágil. Título pequeno usa Plex Sans
   em 600.
2. **Itálico é ênfase, não enfeite.** A Bodoni itálica marca a palavra que carrega a
   promessa — uma por título, no máximo.
3. **Mono é sempre caixa alta com espaçamento.** É etiqueta de manual, não texto.
4. **Medida de leitura:** 60–70 caracteres. Parágrafo largo demais cansa.

---

## 5. Espaçamento e grade

Base **8px**. Todo espaço é múltiplo dela.

| Uso | Desktop | Mobile |
| --- | --- | --- |
| Respiro entre seções | 160px | 96px |
| Margem lateral do conteúdo | 64px | 24px |
| Largura máxima do conteúdo | 1280px | — |
| Medida de texto | 68ch | — |
| Espaço entre cards | 24px | 16px |

Capítulos alternam fundo (espresso → bone → espresso). A troca de fundo é o que separa
os assuntos; não existe divisória decorativa entre seções.

---

## 6. Formas, fios e superfícies

- **Raio de canto: 2px.** Praticamente reto. Manual é reto, não é balão.
- **Fio: 1px.** Toda separação é um fio de 1px em `ember` (escuro) ou `sand` (claro).
- **Sem sombra difusa.** Profundidade vem de mudança de fundo e de fio, não de blur.
  Exceção: o card de preço e a barra fixa do mobile, que precisam descolar da página.
- **Imagem sem raio.** Foto é retângulo cheio, como página de revista.

---

## 7. Botões

| Tipo | Aparência | Hover |
| --- | --- | --- |
| **Primário** | Latão sólido, texto espresso, mono caixa alta 12px/0.16em, altura 56px | Varredura de latão claro da esquerda para a direita + seta desliza |
| **Secundário** | Fio 1px, texto bone, fundo transparente | Fio e texto viram latão |
| **Sobre papel** | Espresso sólido, texto bone | Fundo vira latão, texto vira espresso |

Regras: sempre verbo na primeira pessoa do desejo ("Quero meu manual"), nunca "Saiba
mais". Microtexto de segurança embaixo do botão principal, em mono 11px. Alvo de toque
mínimo de 48px.

---

## 8. Movimento

O movimento serve a hierarquia: mostra o que vem primeiro. Nunca é enfeite.

| Efeito | Onde | Duração |
| --- | --- | --- |
| Máscara subindo | Títulos, linha a linha | 900ms |
| Fio que se desenha | Abertura de capítulo | 800ms |
| Revelação com corte | Imagens (clip + zoom saindo) | 1200ms |
| Contagem de número | Prova social | 1400ms |
| Varredura no botão | Hover do CTA | 400ms |
| Foco que segue o cursor | Herói | contínuo |

**Curva padrão:** `cubic-bezier(0.22, 1, 0.36, 1)` — sai rápido, assenta devagar.

**Regras:** nada pisca, nada quica, nada gira. Cascata de atraso no máximo 120ms por
item. Tudo desliga em `prefers-reduced-motion` — e o conteúdo aparece inteiro, sem
atraso.

---

## 9. O elemento assinatura

**O trilho de capítulos.**

Uma coluna fina à esquerda (telas grandes) que mostra em que capítulo do manual o leitor
está — "Nº 03 · A SOLUÇÃO" — com uma linha de latão que preenche conforme a página
rola. É o índice do manual, vivo.

Ele existe porque a página **é** um manual: os capítulos são uma sequência real, e o
leitor precisa saber onde está. Numeração aqui carrega informação; não é enfeite.

Se algum dia sobrar só uma coisa da identidade, é ele.

---

## 10. Fotografia

| Regra | Por quê |
| --- | --- |
| Luz dura e direcional, sombra marcada | Combina com o contraste da tipografia |
| Enquadramento fechado: mãos, nuca, barba, frasco, toalha | Detalhe é mais premium que pose |
| Cor dessaturada com calor no realce | Precisa conviver com o latão |
| Sem sorriso para a câmera, sem polegar para cima | A marca não vende entusiasmo, vende método |
| Sujeito à direita, respiro à esquerda | A coluna da esquerda é do texto |

⚠️ Rosto de pessoa real em página de venda exige licença comercial **e** cessão de
imagem do modelo. Sem isso, use detalhe (mãos, objetos) — que fica melhor, e é seguro.

---

## 11. Aplicando

Antes de subir qualquer tela nova, confira:

- [ ] O latão aparece em, no máximo, três lugares na dobra?
- [ ] Todo canto está em 2px?
- [ ] Toda divisória é fio de 1px, sem sombra?
- [ ] A Bodoni só aparece acima de 24px?
- [ ] Toda etiqueta em mono está em caixa alta com espaçamento?
- [ ] Cada espaço é múltiplo de 8?
- [ ] Existe um CTA claro na tela?
- [ ] Com `prefers-reduced-motion`, tudo aparece inteiro e imóvel?
