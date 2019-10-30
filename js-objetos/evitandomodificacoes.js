// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})

console.log('Extensível: ', Object.isExtensible(produto)) // false

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca' // não vai surtir efeito
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = { nome: 'Juliana', idade: 15 }
Object.seal(pessoa)
delete pessoa.idade
pessoa.nome = 'Ana'
pessoa.peso = 60
console.log('Selado: ', Object.isSealed(pessoa)) // true
console.log(pessoa)

// Object.freeze