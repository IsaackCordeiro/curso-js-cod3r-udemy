// Função em JS é First-Class Object (Citizens)
// Higher-order function

// Forma literal
function fun1(){ }

// Armazenar em uma variavel
const fun2 = () => {}

// Armazenar em um array
const array = [function (a,b){return a+b}, fun1, fun2]
console.log(array[0](2,3))

// Armazenar em u atributo de objeto
const obj = {}
obj.falar = () => {return 'Opa'}
console.log(obj.falar())

// Passar função como param
function run(fun){
    fun()
}

run(() => {console.log('Executando...')})

// Retornar ou conter uma função
function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(2,3)(4)
const cincoMais = soma(2,3)
cincoMais(4)