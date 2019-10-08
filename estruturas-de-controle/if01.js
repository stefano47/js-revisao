function soBoaNoticia(nota) {
    if(nota >= 7) {
        return `Aprovado com nota ${nota}`
    }
}

let res = soBoaNoticia(8)
console.log(res)