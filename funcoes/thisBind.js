const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // Conflito entre paradigmas: Funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)

// bind "amarra" aquele objeto como dono da execução, faz com que o this funcione para o objeto indicado

falarDePessoa()