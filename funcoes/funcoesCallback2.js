const notas = [7.7, 2.3, 5.4, 9.0, 10.0]

// Sem callback

let notasBaixas = []

for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// Com callback
// Filter é uma função que filtra os elementos de um determinado array através de uma função callback
notasBaixas = notas.filter(nota => nota < 7)

console.log(notasBaixas)