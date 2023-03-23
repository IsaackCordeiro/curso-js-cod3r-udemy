class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { // extends -> indica que o 'Pai' tem 'Avo' como herança 
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome)  // Pega o sobrenome do elemento pai
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)