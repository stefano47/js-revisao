// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return `Olá ${nome}`
    }
}
console.log(pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal {
    emitirSom() {
        return 'Au Au!'
    }
}
console.log(new Cachorro().emitirSom())