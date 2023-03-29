function filtrarNumeros(array){
    const newArray = []
    for(let i = 0 ; i < array.length ; i++){
        if(typeof(array[i]) == "number"){
            newArray.push(array[i])
        }
    }
    console.log(newArray)
}

filtrarNumeros(['Javascript', 1, "3", "Web", 20])
filtrarNumeros(["a", "c"])