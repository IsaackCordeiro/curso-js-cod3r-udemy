function recebePrimeiroEUltimoElemento(array){
    const result = []
    result.push(array[0])
    result.push(array[array.length - 1])
    console.log(result)
}

recebePrimeiroEUltimoElemento([7, 14, "olá"])
recebePrimeiroEUltimoElemento([-100, "aplicativo", 16])

