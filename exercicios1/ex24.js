function buscarPalavrasSemelhantes(string, array){
    const result = []

    for(let palavra of array){
        if(palavra.includes(string)){
            result.push(palavra)
        }
    }

    console.log(result)
}

buscarPalavrasSemelhantes('pro', ['programacao', 'mobile', 'profissional'])

function buscarPalavrasSemelhantes2(string, array){
    console.log(array.filter(palavra => palavra.includes(string)))
}

buscarPalavrasSemelhantes2('python', ['javascript', 'c++', 'java'])