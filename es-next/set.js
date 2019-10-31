// estrutura não indexada que não aceita repetição

const times = new Set()
times.add('Vasco')
times.add('São Paulo')
times.add('Palmeiras')
times.add('Corinthias')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco')) // flase
console.log(times.has('Vasco')) // true
times.delete('Flamengo') // true
console.log(times.has('Flamengo')) // false