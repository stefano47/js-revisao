// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // NaN
imprimirSoma(2, 5, 6, 9, 8, 20) // vai somar os dois primeiros e ignorar o resto
imprimirSoma() // NaN

// Função com retorno
function soma(a, b = 0) {
    return a + b;
}

console.log(soma(2, 3))
console.log(soma(2)) // 2
console.log(soma()) // NaN