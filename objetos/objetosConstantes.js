// pessoa -> #000123 -> {...} pessoa aponta para o endereço de memória #000123 
const pessoa = {nome: 'Joao'}
console.log(pessoa.nome)

// pessoa -> #000456 -> {...} Pessoa aponta para o endereço de outro objeto
// pessoa = {nome: 'Ana'} // ERRO pois a pessoa é uma constante

Object.freeze(pessoa) // Congela o objeto

pessoa.nome = 'Maria' // Não vai mudar o nome
console.log(pessoa.nome)