const escola = 'Cod3r'

console.log(escola.charAt(4)) // Pega o caracter na posição 4
console.log(escola.charCodeAt(4)) // Pega o valor referente na tabela ACII do caracter na posição 4
console.log(escola.indexOf('r')) // Retorna a posição do elemento 'r' na string

console.log(escola.substring(1)) // Retorna a strign a partir da posição 1
console.log(escola.substring(1, 3)) // Retorna os elementos entre as posições 1 e 3

console.log('Escola '.concat(escola).concat('!')) // Concatena as strings
console.log(escola.replace(3, 'e')) // Altera o elemento 3 para o elemento 'e'

console.log('finDoc.docCod'.split('.')) // Separa uma string pelo '.' e coloca os elementos em um array