const pai = { nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai) // Cria objeto filha1 passando como protótipo o pai

filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {
        value: 'Bia',
        writable: false, // Indica se pode ser alterado o valor ou não
        enumerable: true  // Indica se pode ser enumarado ou não(por exemplo: se for, será mostrado quando percorrer o objeto com um for)
    }
})

console.log(filha2.nome)
filha2.nome = 'Marina'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

for (let key in filha2){
    filha2.hasOwnProperty(key) ? // Verifica se aquela propriedade pertence ao objeto
    console.log(key) : console.log(`Por herança: ${key}`)
}
