// Armazena cache
const contadorA = require('./instanciaUnica');
const contadorB = require('./instanciaUnica');

// Não armazena cache
const contadorC = require('./instanciaNova')();
const contadorD = require('./instanciaNova')();

contadorA.inc();
contadorA.inc();
console.log(contadorA.valor, contadorB.valor);

contadorC.inc();
contadorC.inc();
console.log(contadorC.valor, contadorD.valor);