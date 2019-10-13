const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.8]

// Sem callback
const notasBaixas1 = []
for(let i in notas) {
    if(notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)
console.log(notas)

// Com callback
const notasMenorQue7 = nota => nota < 7
const notasBaixas2 = notas.filter(notasMenorQue7)

console.log(notasBaixas2)
console.log(notas)