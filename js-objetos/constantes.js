// pessoa -> 123 -> {...}
const pessoa = { nome: 'João' }

pessoa = {nome: 'Ana'} // erro, pois estou tentando atribuir um novo endereço de memória
// pessoa -> 456 -> {...}