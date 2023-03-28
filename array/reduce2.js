const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: false},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: false}
]


// Desafio 1: Todos os alunos são bolsistas?

const getBolsista = alunos.map(e => e.bolsista)
const allIsBolsista = getBolsista.reduce(function(acumulador, atual){
    return acumulador === true && atual === true
})

console.log(allIsBolsista)

// Desafio 2: Algum aluno é bolsista?

const someIsBolsista = getBolsista.reduce(function(acumulador, atual){
    return acumulador === true || atual === true
})

console.log(someIsBolsista)