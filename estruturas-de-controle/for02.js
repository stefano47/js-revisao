const notas = [6.7, 7.4, 9.8, 8.1, 7.1]
for(let i in notas) {
    console.log(`Nota = ${notas[i]}`)
} // for..in percorre o array pelo indice

for(let n of notas) {
    console.log(`Nota: ${n}`)
} // for..of percorre o array pelo valor

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
} // percorrendo um objeto com for..in