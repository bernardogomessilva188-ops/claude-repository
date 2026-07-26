# Central Imports — Análise e página melhorada

## Nota de transparência (leia primeiro)

O ambiente onde este trabalho foi executado tem política de rede restritiva e **bloqueou o acesso direto a `centralimportsofc.lojavirtualnuvem.com.br`** (o gateway retornou 403 para qualquer domínio externo). Por isso, o diagnóstico abaixo é baseado no padrão amplamente conhecido das lojas "Imports" montadas sobre temas prontos da Nuvemshop — padrão que essas lojas seguem com pouquíssima variação. Antes de publicar, confira ponto a ponto se cada item se aplica à sua loja e **substitua os dados marcados como `[EDITAR]` no HTML** (números, depoimentos, produtos e preços) pelos seus dados reais. Nenhum número inventado deve ir ao ar.

## Diagnóstico: os erros típicos que essa página corrige

| # | Problema comum (tema padrão Nuvemshop "Imports") | Por que perde venda | Como a nova página resolve |
|---|---|---|---|
| 1 | Hero é só um banner de imagem, sem headline de valor ("Bem-vindo à nossa loja") | Em 5 segundos o visitante não sabe por que comprar **aqui** e não na Shopee/Amazon | Headline de resultado + subheadline com garantia e prova, CTA duplo (ofertas + WhatsApp) |
| 2 | Nenhum tratamento da objeção nº 1 do nicho: **"isso é golpe?"** | Importados = desconfiança máxima; sem resposta, o visitante fecha a aba | Barra de confiança logo abaixo do hero, seção de garantias, rastreio como tema visual da página inteira |
| 3 | Grade de produtos sem copy, só nome + preço | Preço vira o único argumento — e sempre haverá alguém mais barato | Cards com benefício em 1 linha, selo de estoque, parcelamento e CTA de ação ("Garantir o meu") |
| 4 | Zero prova social (sem depoimentos, sem números) | Confiança é o produto real de uma loja de importados | Seção de depoimentos com compra identificada + contadores (marcados `[EDITAR]` para você preencher com dados reais) |
| 5 | Nenhuma explicação de como a compra funciona (prazo, rastreio, alfândega) | Ansiedade de prazo/imposto mata a conversão silenciosamente | Linha do tempo de rastreio "do fornecedor à sua porta" — o elemento-assinatura da página |
| 6 | CTAs genéricos ("Comprar", "Ver mais") | CTA sem valor = cliques a menos | CTAs com verbo + valor ("Ver ofertas da semana", "Garantir o meu", "Tirar dúvida no WhatsApp") |
| 7 | Sem FAQ / política visível de troca e garantia | Objeções não respondidas viram carrinho abandonado | FAQ com as 6 perguntas que todo cliente de importado faz |
| 8 | Visual "preto + neon" igual ao de todas as concorrentes | Loja não é lembrada; parece mais uma entre mil | Identidade própria: estética de manifesto de carga (claro, tinta navy, laranja de carga, mono para códigos) |
| 9 | Sem CTA fixo no mobile | 60%+ do tráfego é mobile e o botão some ao rolar | Barra de CTA fixa no rodapé em telas pequenas |
| 10 | Erros de português e texto de preenchimento | Erro de escrita em loja de importado soa como golpe | Todo o texto revisado, tom direto e sem exclamações |

## Estrutura da nova página (ordem de conversão)

1. **Barra de aviso** — frete/garantia (informação, não enfeite)
2. **Hero** — headline de resultado, subheadline com prova, CTA duplo, chips de confiança
3. **Barra de confiança** — 4 garantias objetivas
4. **Categorias** — navegação rápida por intenção
5. **Ofertas da semana** — 4 cards de produto `[EDITAR]`
6. **Como funciona** — linha do tempo de rastreio (assinatura da página)
7. **Depoimentos** — 3 depoimentos `[EDITAR]`
8. **Garantia e trocas** — inversão de risco explícita
9. **FAQ** — 6 objeções respondidas
10. **CTA final + rodapé** — com CNPJ, políticas e canais `[EDITAR]`

## Como usar

- O arquivo `index.html` é autocontido (CSS e JS inline) e responsivo. Abra no navegador para revisar.
- Busque por `[EDITAR]` no arquivo: são os pontos que exigem seus dados reais (produtos, preços, fotos, números, depoimentos, CNPJ, link do WhatsApp).
- Na Nuvemshop, o conteúdo pode ser replicado pelo editor do tema (banner, seções de HTML personalizado) ou usado como referência fiel de estrutura e copy.
