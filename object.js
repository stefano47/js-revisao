const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar chave com espaço

console.log(prod1)
console.log()

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

// '{ "nome": "Camisa Polo", "preco": 79.90 }' exemplo de JSON, diferente de um OBJETO

console.log(prod2)