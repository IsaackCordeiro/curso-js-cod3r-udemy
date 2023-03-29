function inverso(param){
    if(typeof(param) == 'boolean'){
        if(param === false){
            console.log(true)
        }else{
            console.log(false)
        }
    }else if(typeof(param) == 'number'){
        console.log(param * (-1))
    }else{
        console.log(`Booleano ou número esperados, mas o parâmero é do tipo ${typeof(param)}`)
    }
}

inverso(true)
inverso("6")
inverso(-2000)
inverso("Programação")