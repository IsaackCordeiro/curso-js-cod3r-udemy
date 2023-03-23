function Aula(nome, vieoID){
    this.nome = nome
    this.videoID = this.videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até breve', 456)

console.log(aula1, aula2)

// Simulando o new

function novo(f, ...params){ // f é o objeto que será criado e '...' é o operador rest que agrupa todos os proximos parâmetros em um array
    const obj = {} // Cria objeto
    obj.__proto__ = f.prototype // Aponta para o prototype da função 'f'
    f.apply(obj, params)  // Diz que os parâmetros vão receber o 'this' do 'obj'
    return obj // Retorna função
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até breve', 456)

console.log(aula3, aula4)