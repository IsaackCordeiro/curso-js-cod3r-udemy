// Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua Josino',
        numero: 145
    }
}

// Faz a extração de nome e idade do objeto pessoa, tornando-as variáveis a partir desse momento
const {nome, idade} = pessoa

console.log(nome, idade)

// Extraindo e alterando o nome
const {nome: n , idade: i} = pessoa

console.log(n, i)

const { endereco: { logradouro, numero, cep }} = pessoa
console.log(logradouro, numero, cep)