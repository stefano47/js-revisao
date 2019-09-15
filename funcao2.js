// Armazenando uma função em uma váriavel
const imprimirSoma = function(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma váriavel
const soma = (a, b) => a + b // retorno implícito 

console.log(soma(2, 3))

const imprimir2 = a => console.log(a)

imprimir2('Legal')