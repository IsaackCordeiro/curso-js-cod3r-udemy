// Uma das formas de percorrer array

const aprovados = ['Isaack', 'Livia', 'Gabriel']

aprovados.forEach(function(nome, indice, array){ // Pra cada um dos elementos do array essa função será chamada. Os parâmetros sempre serão 1°: valor, 2°: posicao e 3° o array de fato.
    console.log(`Pessoas ${indice + 1}: ${nome}`)
}) 

aprovados.forEach((nome, indice) => console.log(`Pessoas ${indice + 1}: ${nome}`))

const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)