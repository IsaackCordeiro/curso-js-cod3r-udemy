function filtrarPorQtd(arr, digitos){
    console.log(arr.filter(valor => String(valor).length === digitos ))
}

filtrarPorQtd([38, 2, 365, 10, 125, 11], 2)