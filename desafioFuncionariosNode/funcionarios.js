const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') // Axios -> client http. Faz requisições pra obter informações de algo que está remoto

// Minha lógica
axios.get(url).then(response => { // Faz requisição na url
    const funcionarios = response.data // 'funcionarios' recebe o conteudo da url

    // Desafio: obter a mulher chinesa com menor salário

    const chineses = funcionarios.filter((value) => value.pais === 'China')
    
    const mulheresChinesas = chineses.filter((value) => value.genero === 'F')

    const menorSalario = mulheresChinesas.map(e => e.salario).reduce((resultante, valor) => {
        return Math.min(resultante, valor)
    })

    console.log(mulheresChinesas.find(e => e.salario = menorSalario))
})

// Lógica aprimorada

const chineses = n => n.pais === 'China'
const mulheres = n => n.genero === 'F'
const menorSalario = (total, atual) => {
    return total.salario < atual.salario ? total.salario : atual.salario
}

axios.get(url).then(response => {
    const funcionarios = response.data 

    const mulherChinesaMenorSalario = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(mulherChinesaMenorSalario)
})