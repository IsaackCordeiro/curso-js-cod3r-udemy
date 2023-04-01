function contarCaracter(letra, string){
    const resultante = string.split('')
    
    let soma = 0

    for(let i in resultante) { 
        if(resultante[i] === letra){
            soma++
        }
    }

    console.log(soma)
    
}

contarCaracter('a', 'aaaaabc')

function contarCaracter2(letra, string){
    console.log([...string].filter(caracter => caracter === letra).length)
}

contarCaracter('a', 'aaaaabc')