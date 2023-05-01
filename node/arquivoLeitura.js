const fs = require('fs') // Módulo nativo do Node -> File System

//console.log(fs)

const caminho = __dirname + '/arquivo.json'

// Ler arquivo de forma síncrona
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// Leitura assíncrona
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

fs.readdir(__dirname, (err, arquivos) => {
    console.log(arquivos)
})