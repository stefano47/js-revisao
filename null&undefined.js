let valor // não inicializada
console.log(valor) // undefined

valor = null // não aponta para nenhum endereço de memória
console.log(valor)

const produto = {}
console.log(produto.preco) // undefined
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)