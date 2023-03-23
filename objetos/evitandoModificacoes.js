// Object.preventExtensions -> não deixa que insira novos atributos no objeto

const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: '1.99',
    tag: 'promoção'
})

console.log('Extensivel? ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)


// Object.seal -> sela o objeto, ou seja, não é possível inserir e excluir atributos

const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado? ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze -> não consegue inserir, excluir e alterar atributos