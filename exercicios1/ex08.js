function multiplicar(n1, n2){
    if(n1 >= 0 && n2 >= 0){
        console.log(Math.imul(n1, n2))
    }else{
        console.log('Numero negativo!!')
    }
}

multiplicar(5, 5)
multiplicar(0, 7)