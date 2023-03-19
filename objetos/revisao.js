// Coleção dinâmicas de pares chave valor

const produto = new Object

produto.nome = 'Cadeira'
produto['Marca do Produtos'] = 'Generica'
produto.preco = 220

console.log(produto)

delete produto.preco

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Pedro',
        idade: 32
    }, {
        nome: 'Ana',
        idade: 22
    }],
    calcularValorSeguro: function() {
        // ...-
    }
}

console.log(carro)