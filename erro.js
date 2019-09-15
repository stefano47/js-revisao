function tratarErroELancar(erro) {
    throw new Error('...')
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) {
        tratarErroELancar(e)
    } finally {
        console.log('finalizando')
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)

