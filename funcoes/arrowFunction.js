/*
    Tem o objetivo de ser mais curta e objetiva
    Possui um this no contexto que a função foi escrita
*/

let dobro = function(a){
    return 2*a
}

dobro = (a) => {
    return 2*a
}

dobro = a => 2*a // Pode retirar os parêntesis quando tiver apenas 1 parâmetro e possui return implicito

console.log(dobro(2))

ola = () => 'Ola!'

console.log(ola())