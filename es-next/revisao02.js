// Arrow Function
const soma = (a, b) => a + b
console.log(soma(3, 2))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
lexico1()
const lexico2 = lexico1.bind({})
lexico2()

// parâmetros default
function log(texto = 'Node') {
    console.log(texto)
}
log()
log('Angular')

// operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5, 6))