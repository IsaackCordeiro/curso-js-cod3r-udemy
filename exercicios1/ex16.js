function somarNumeros(arr){
    let soma = arr.reduce((total, atual) => total + atual, 0);
    console.log(soma)
}


somarNumeros([10, 10, 10])
