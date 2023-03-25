Array.prototype.forEach2 = function(callback) { // forEach2 vai ser uma função que recebe como parâmetro uma callback function e percorre todos os elemetos do array com um for, ou seja, criou-se um forEach do 'zero'
    for(let i = 0 ; i < this.length ; i++){
        callback(this[i], i, this) 
    }
}

const aprovados = ['Isaack', 'Livia', 'Gabriel']

aprovados.forEach2(function(nome, indice, array){ // Pra cada um dos elementos do array essa função será chamada. Os parâmetros sempre serão 1°: valor, 2°: posicao e 3° o array de fato.
    console.log(`Pessoa ${indice + 1}: ${nome}`)
}) 
