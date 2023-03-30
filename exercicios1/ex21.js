function funcaoDaSorte(num){
    const min = 1
    const max = 10
    let random = Math.floor(Math.random() * (max - min + 1) + min)

    if(random === num){
        console.log(`Parabéns! O número sorteado foi ${random}`)
    }else{
        console.log(`Que pena! O número sorteado foi ${random}`)
    }
}

funcaoDaSorte(10)
funcaoDaSorte(5)
funcaoDaSorte(5)