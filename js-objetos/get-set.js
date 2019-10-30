const sequencia = {
    _valor: 1, // convenção, essa variável desse ser usada apenas dentro desse objeto
    get valor() {return this._valor++},
    set valor(valor) { this._valor = valor }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)