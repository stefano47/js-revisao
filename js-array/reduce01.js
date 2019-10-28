const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

console.log(alunos)

const res = alunos.map(a => a.nota).reduce((acumulador, atual) => {
    console.log(`${acumulador} + ${atual}`)
    return acumulador + atual
})

console.log(res)