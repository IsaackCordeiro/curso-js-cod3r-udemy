// Função que retorna um objeto

// Factory simples
function criarPessoa(){
    return {
        nome: 'Isaack',
        sobrenome: 'Cordeiro'
    }
}

console.log(criarPessoa())

// Factory com parâmetros
function criarPessoa2(nome, sobrenome){
    return {
        nome,
        sobrenome
    }
}

console.log(criarPessoa2('Cleude', 'Alvez'))
