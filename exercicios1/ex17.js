function despesasTotais(arr){
    let soma = arr.map(p => p.preco).reduce((total, atual) => total + atual, 0)
    console.log(soma)
}

despesasTotais([
    {nome: 'Jornal Online', preco: 89.99},
    {nome: 'Cinema', preco: 150}
])

despesasTotais([
    {nome: 'Galaxy s20', preco: 3599.99},
    {nome: 'Macbook Pro', preco: 30999.90}
])