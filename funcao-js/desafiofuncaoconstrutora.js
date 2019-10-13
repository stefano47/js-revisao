function Pessoa(nome) {
    this.nome = nome

    this. falar = function() {
        console.log(`Meu nome é ${nome}`)
    }
}

const p1 = new Pessoa('Stefano')
p1.falar()