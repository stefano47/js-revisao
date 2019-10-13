function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: preco * 0.25
    }
}

console.log(criarProduto('Cadeira', 40))
console.log(criarProduto('Mesa', 59))