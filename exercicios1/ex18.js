function calcularMedia(arr){
    let soma = arr.reduce((total, atual) => total + atual, 0)
    console.log(soma / arr.length)
}

calcularMedia([0, 10])
calcularMedia([1, 2, 3, 4, 5])