// coleção dinâmica de pares cheves/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }]
}

console.log(` 
------------------------------------------------------------
                            Carro
------------------------------------------------------------
    Modelo: ${carro.modelo}
    Valor: ${carro.valor}
    Proprietario: ${carro.proprietario.nome}, ${carro.proprietario.idade} anos
    Endereço: ${carro.proprietario.endereco.logradouro}, ${carro.proprietario.endereco.numero}
    Condutores: ${carro.condutores[0].nome}, ${carro.condutores[0].idade} e ${carro.condutores[1].nome} anos, ${carro.condutores[1].idade} anos
------------------------------------------------------------
    `)