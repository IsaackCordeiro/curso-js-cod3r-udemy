console.log(module.exports == this)
console.log(module.exports === exports)

// Formas de expor dados para outros arquivos
this.a = 1 
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

exports = {
    nome: 'Teste'
}

console.log(module.exports) // Não vai mudar pois 'this' e 'exports' são duas refências para onde 'module.exports' aponta

module.exports = {
    publico: true
}

console.log(module.exports) // O que é retornado, é apenas 'module.exports'
