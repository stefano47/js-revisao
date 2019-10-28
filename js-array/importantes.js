const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // rm o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // rm o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Massa') // add um elemento na priimeira posição do array
console.log(pilotos)

// splice adicionar e remover elementos
pilotos.splice(2, 0, 'Bottas', 'Hamilton')
console.log(pilotos)

pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // gera um novo array a partir do índice passado como parâmetro
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)