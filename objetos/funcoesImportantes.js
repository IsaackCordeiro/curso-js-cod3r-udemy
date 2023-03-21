const pessoa = {
    nome: 'Ana',
    idade: 15,
    peso: 55
}

console.log(Object.keys(pessoa)) // Pega todos as chaves de um objeto e armazena em um array
console.log(Object.values(pessoa)) // Pega todos os valores de um objeto e armazena em um array
console.log(Object.entries(pessoa)) // Pega todos os pares chave: valor e armazena em uma matriz

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)  // Percorre o objeto
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: true,
    value: '01/01/2019'
})

console.log(pessoa.dataNascimento)

// Object.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}

const obj = Object.assign(dest, o1, o2) // Insere no objeto dest os atributos subsequentes(o1 e o2)
console.log(obj)