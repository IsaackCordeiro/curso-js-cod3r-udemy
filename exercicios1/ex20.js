function menorNumero(arr){
    let menor = arr[0]

    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] < menor){
            menor = arr[i]
        }
    }

    console.log(menor)
}

menorNumero([10, 5, 35, 65])
menorNumero([5, -15, 50, 3])


function menorNumero2(arr){
    console.log(arr.reduce((ant, at) => ant < at ? ant : at))
}

menorNumero2([10, 5, 35, 65])
menorNumero2([5, -15, 50, 3])

function menorNumero3(arr){
    console.log(Math.min(...arr))
}

menorNumero3([10, 5, 35, 65])
menorNumero3([5, -15, 50, 3])