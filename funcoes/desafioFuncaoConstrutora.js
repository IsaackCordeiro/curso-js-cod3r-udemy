function falar(nome){
    this.nome = nome

    this.falar = function() {
        console.log(this.nome)
    }    
}

const p2 = new falar('Joao')
p2.falar()