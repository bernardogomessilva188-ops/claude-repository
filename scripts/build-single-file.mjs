import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

/**
 * Gera `mens-helper-preview.html`: a landing page inteira num arquivo só,
 * com CSS, JavaScript e imagens embutidos. Abre com dois cliques, offline,
 * sem servidor — bom para mandar por WhatsApp/e-mail para alguém opinar.
 *
 * Uso:  npm run preview:single
 * (o comando roda o build e depois este script; a saída fica na raiz do repo)
 *
 * Só as fontes (Archivo/Inter) continuam vindo do Google Fonts — sem
 * internet, o navegador cai na fonte de sistema.
 */

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = `${root}/dist`

if (!existsSync(`${dist}/index.html`)) {
  console.error('dist/ não encontrado — rode `npm run build` antes (ou use `npm run preview:single`).')
  process.exit(1)
}

let html = readFileSync(`${dist}/index.html`, 'utf8')

// 1. imagens -> data URI (o arquivo precisa abrir sem servidor)
const assets = {}
for (const dir of ['hero', 'images']) {
  for (const file of readdirSync(`${dist}/${dir}`)) {
    const b64 = readFileSync(`${dist}/${dir}/${file}`).toString('base64')
    assets[`/${dir}/${file}`] = `data:image/webp;base64,${b64}`
  }
}
for (const file of ['favicon.svg', 'og-image.svg']) {
  const b64 = readFileSync(`${dist}/${file}`).toString('base64')
  assets[`/${file}`] = `data:image/svg+xml;base64,${b64}`
}

const inlineAssets = (text) => {
  // do caminho mais longo para o mais curto, senão um caminho que contém
  // outro seria substituído pela metade
  for (const key of Object.keys(assets).sort((a, b) => b.length - a.length)) {
    text = text.split(key).join(assets[key])
  }
  return text
}

// 2. CSS e JS -> inline
const cssFile = readdirSync(`${dist}/assets`).find((f) => f.endsWith('.css'))
const jsFile = readdirSync(`${dist}/assets`).find((f) => f.endsWith('.js'))

const css = inlineAssets(readFileSync(`${dist}/assets/${cssFile}`, 'utf8'))
const js = inlineAssets(readFileSync(`${dist}/assets/${jsFile}`, 'utf8')).replaceAll(
  '</script',
  '<\\/script',
)

// atenção: o replacement precisa ser uma função. Como string, sequências como
// `$&` e `$'` que aparecem no bundle minificado seriam interpretadas pelo
// String.replace e duplicariam pedaços do arquivo.
html = html
  .replace(
    /<script type="module"[^>]*src="\/assets\/[^"]+"><\/script>/,
    () => `<script type="module">\n${js}\n</script>`,
  )
  .replace(
    /<link rel="stylesheet"[^>]*href="\/assets\/[^"]+"\s*\/?>/,
    () => `<style>\n${css}\n</style>`,
  )
  // o preload não faz sentido com data URI embutido
  .replace(/<link\s+rel="preload"[\s\S]*?\/>/, '')

html = inlineAssets(html)

// aviso no topo do arquivo, para quem abrir o fonte
html = html.replace(
  '<!doctype html>',
  () => `<!doctype html>
<!--
  Mens Helper — prévia estática, arquivo único.
  Gerado por \`npm run preview:single\` a partir da build de produção:
  CSS, JavaScript e imagens estão embutidos, então este HTML abre offline.
  Não é o projeto — o projeto é o repositório; este arquivo é só a prévia.
-->`,
)

const out = `${root}/mens-helper-preview.html`
writeFileSync(out, html)
console.log(`gerado: ${out} (${(html.length / 1024).toFixed(0)} KB)`)
