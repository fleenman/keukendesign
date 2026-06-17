import { copyFileSync, mkdirSync, readFileSync } from 'node:fs'
import { dirname } from 'node:path'

const showroom = [
  'showroom-4-1616x1212.jpg',
  'stadshaege-1616x1077.jpg',
  'DSC_4954-1616x1077.jpg'
]

const owner = [
  'MG_7692-1-scaled.jpg',
  'MG_7692-scaled.jpg'
]

const realizedMarkdown = readFileSync('source/gerealiseerd/index.md', 'utf8')
const projects = [...new Set([...realizedMarkdown.matchAll(/\]\(\.\.\/media\/([^)]+)\)/g)]
  .map((match) => match[1])
  .filter((image) => !image.includes('-250x154.')))]

const files = [
  ...showroom.map((name) => [`source/media/${name}`, `public/media/showroom/${name}`]),
  ...owner.map((name) => [`source/media/${name}`, `public/media/eigenaar/${name}`]),
  ...projects.map((name) => [`source/media/${name}`, `public/media/projecten/${name}`])
]

for (const [from, to] of files) {
  mkdirSync(dirname(to), { recursive: true })
  copyFileSync(from, to)
}

console.log(`Copied ${files.length} selected media files`)
