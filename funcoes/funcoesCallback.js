/*
    Função callback: uma função que será chamada quando um evento acontecer
*/

const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir (nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

// Para cada elemento do array, vai chamar a função imprimir()
fabricantes.forEach(imprimir)
fabricantes.forEach(a => console.log(a))