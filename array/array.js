console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Isaack', 'Livia', 'Gabriel')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[4])

aprovados.sort() // Ordena o array

console.log(aprovados)

delete aprovados[1]  // Deleta elementos do array

console.log(aprovados)

aprovados = ['Isaack', 'Livia', 'Gabriel']

aprovados.splice(1, 0, 'Jorge') // Pode excluir, adicionar ou substituir elementos do array -> splice(posicao inicial, posições a frente, 'Elemento')

console.log(aprovados)