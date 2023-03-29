function estaEntre(numero, minimo, maximo, inclusivo = false){
    if(inclusivo){
        numero >= minimo && numero <= maximo ? console.log(true) : console.log(false)
    }else{
        numero > minimo && numero < maximo ? console.log(true) : console.log(false)
    }
}

estaEntre(10, 50, 100)
estaEntre(16, 100, 160)
estaEntre(3, 3, 150)
estaEntre(3, 3, 150, true)