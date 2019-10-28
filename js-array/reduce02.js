const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

// Desafio 1: Todos os alunos são bolsista?

const bolsista1 = (res, bol) => res && bol
console.log(alunos.map(a => a.bolsista).reduce(bolsista1))

// Desafio 2: Algum aluno é bolsista?

const bolsista2 = (res, bol) => res || bol
console.log(alunos.map(a => a.bolsista).reduce(bolsista2))