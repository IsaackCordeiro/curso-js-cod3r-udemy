function Pessoa (){
    this.idade = 0
    
    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

// setInterval é responsável por chamar uma função de tempos em tempos
// exemplo: setInterval(function, miliseconds)

new Pessoa;