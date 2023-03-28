// filter() -> percorre o array e filtra-o 

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 6.99, fragil: false}
]

console.log(produtos.filter(p => {
    return p.preco > 500 && p.fragil === true
}))