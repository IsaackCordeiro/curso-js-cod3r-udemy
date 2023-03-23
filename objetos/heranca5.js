String.prototype.reverse = function (){     // Criando uma função reverse() para todos os dados do tipo string
    return this.split('').reverse().join('')
}

console.log('subi no onibus'.reverse())

Array.prototype.first = function(){   // Criando uma função first() para todos os dados do tipo string
    return this[0]
}

console.log(['Isaack', 'Livia'].first())