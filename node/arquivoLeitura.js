const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// síncrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assíncrona...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.bd.host}: ${config.bd.port}`)
})

const config = require('./arquivo.json')
console.log(config.bd)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})