const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c}
const obj2 = { a, b, c }
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87
const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

// colocando função como parametros de objetos
const obj5 = {
    // legado
    funcao1: function() {
        // ...
    },
    // moderno
    funcao2() {
        // ...
    }
}
console.log(obj5)