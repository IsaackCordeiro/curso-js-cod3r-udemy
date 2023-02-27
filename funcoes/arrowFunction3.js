/*
Nesse primeiro caso aqui ele vai retornar true pois esse 
global é como o próprio nome diz, é um objeto global. Depois 
verifica se o this e o global são estritamente iguais e exibe 
true, pois ambos estão nesse contexto global (tanto o this 
quanto o global). No navegador segue o mesmo estilo, só que 
ao invés de usarmos global usaremos o window que é a mesma 
coisa (no contexto do navegador).
*/
let thisCompare = function (param){
    console.log(this === param)
}

thisCompare(global)

/*
Nesse exemplo o comparaComThis irá ser apontado para o obj 
(nessa linha aqui comparaComThis = comparaComThis.bind(obj)) 
e não mais para o escopo global, ou seja, quando passamos o 
objeto global "global" e comparamos com o "this" ele da 
false, já que o escopo foi alterado.
*/
const obj = {}

thisCompare = thisCompare.bind(obj)

thisCompare(global)

/*
Nesse caso dá true pois agora estamos passando o obj (Vale 
lembrar que agora estamos referenciando a função para o obj e 
não mais para o escopo global) e consequentemente quando 
passamos o obj ele retorna true.
*/
thisCompare(obj)


let thisCompareArrow = param => console.log(this === param)

/*Ele vai imprimir false aqui, pois esse this se referencia ao seu próprio modulo (coisa da arrow function) e não ao objeto global da aplicação. Para fazer isso retornar true pra gente é só fazer isso:*/
thisCompareArrow(global)

thisCompareArrow(module.exports)
thisCompareArrow(this)
thisCompareArrow(thisCompareArrow)

/*
 O comportamento da arrow permanece intacta, pois não podemos usar o bind para mudar esse escopo da arrow.
*/
thisCompareArrow = thisCompareArrow.bind(obj)
thisCompareArrow(obj)
thisCompareArrow(module.exports)