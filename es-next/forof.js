for(let letra of 'Escola') {
    console.log(letra) // for of  percorre os valores
}

const assuntosEcma = ['Map', 'Set', 'Promises']

for(let i in assuntosEcma) {
    console.log(i) // for in percorre os índices
}

for(let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promises', { abordado: false }]
])

for(let assunto of assuntosMap) {
    console.log(assunto)
}

for(let chave of assuntosMap.keys()) {
    console.log(chave)
}

for(let valor of assuntosMap.values()) {
    console.log(valor)
}

for(let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for(let letra of s) {
    console.log(letra)
}