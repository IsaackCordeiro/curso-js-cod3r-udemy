const porta = 3003

const express = require('express')
const app = express()

/* app.get('/produtos', (request, response, next) => {
    response.send( {
        nome: 'Notebook',
        preco: 1999.00
    }) // Método send envia informações. Nesse caso, ele converte o objeto em JSON
}) */

app.use((request, response, next) => {
    response.send( {
        nome: 'Notebook',
        preco: 1999.00
    }) // Método send envia informações. Nesse caso, ele converte o objeto em JSON
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})