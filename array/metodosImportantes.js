const pilotos = ['Vettel', 'Hamilton', 'Alonso', 'Senna', 'Russel']

pilotos.pop() // Remove ultima posição
console.log(pilotos)

pilotos.push('Verstappen') // Insere no fim
console.log(pilotos)

pilotos.shift() // Remove do início
console.log(pilotos)

pilotos.unshift('Perez') // Insere no início
console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'Massa') // Indica que na posição 2 insere os 2 elementos
console.log(pilotos)

pilotos.splice(3, 1) // Remove na posição 3
console.log(pilotos)

const algunsPilotos1 = pilotos.splice(2) // Pega a partir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.splice(1, 4) // Pega 3 elementos a partir do indice 1
console.log(algunsPilotos2)