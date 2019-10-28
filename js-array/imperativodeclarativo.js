const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 },
]

// Imperativo
let tot1 = 0
for(let i = 0; i < alunos.length; i++) {
    tot1 += alunos[i].nota
}

console.log(tot1 / alunos.length)

// Declarativa
const getNota = aluno => aluno.nota
const soma = (tot, atual) => tot + atual
const tot2 = alunos.map(getNota).reduce(soma)
console.log(tot2 / alunos.length)
// Dar preferência a abrdagens declarativas