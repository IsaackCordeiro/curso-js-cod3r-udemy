//console.log(global)

// Para evitar que seja alterado em outro módulo do sistema, pode-se ser usado o Object.freeze
global.MinhaApp = Object.freeze({
    saudacao(){
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema'
})