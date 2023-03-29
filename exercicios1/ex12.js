function removePropriedade(obj, property){
    const copia = Object.assign({}, obj)
    delete copia[property]
    return obj
}

let result
result = removePropriedade({a: 1, b: 2}, "a")
console.log(result)

result = removePropriedade({
    id: 20,
    nome: "Caneta",
    descricao: "Nao preenchido"
}, "descricao")
console.log(result)

result = Object.is(removePropriedade({a: 1, b: 2}, "a"), {a: 1, b: 2})

console.log(result)