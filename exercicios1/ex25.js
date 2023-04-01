function removerVogais(frase){
    const vogais = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'] 

    vogais.forEach(vogal => frase = frase.replace(vogal, ''))

    console.log(frase)
}

removerVogais('Isaack')

function removerVogais2(frase){
    console.log(frase.replace(/[aeiou]/ig, ''))
}

removerVogais2('Isaack')