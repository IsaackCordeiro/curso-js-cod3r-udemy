function inverteObjeto(obj){
    const objInvertido = {}
    
    Object.entries(obj).forEach((parChaveValor) => {
        const chave = 0
        const valor = 1

        objInvertido[parChaveValor[valor]] = parChaveValor[chave]
    })

    console.log(objInvertido)
}

inverteObjeto({a: 1, b: 2})

function inverteObjeto2(obj){
    const paresChaveValorInvertidos = Object.entries(obj)
            .map(parChaveValor => parChaveValor.reverse())

    console.log(Object.fromEntries(paresChaveValorInvertidos))
}