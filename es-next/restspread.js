// Operador rest(Juntar)/spread(Espalhar)

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 1248.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Glória']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA]
console.log(grupoFinal)