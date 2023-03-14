function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

globalThis.preco = 20
globalThis.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = {
    preco: 49990,
    desc: 0.2
}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$')) // 1° contexto, e em sequência os parâmetros
console.log(getPreco.apply(carro, [0.17, '$'])) // O que difere do call é que os parâmetros estão dentro de um array