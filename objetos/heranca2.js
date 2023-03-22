// Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = '0'
const avo = { attr: 'A'}
const pai = { __proto__: avo, attr2: 'B'}
const filho = { __proto__: pai, attr3: 'C'}

console.log(filho.attr)
console.log(filho.attr2)
console.log(filho.attr0)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelera(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // Shadowing: o atributo do objeto atual sombreia o objeto pai
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}` // Super: pega uma chave do objeto pai
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
volvo.acelera(50)
console.log(volvo.status())
console.log(ferrari.status())