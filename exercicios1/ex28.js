function segundoMaior(arr){
    const maiorNum = Math.max(...arr)
    arr = arr.filter(numero => numero != maiorNum)
    const segundoMaior = Math.max(...arr)

    console.log(segundoMaior)
}

segundoMaior([12, 16, 1, 5])