const soma = array => array.reduce((acumulador, atual) => acumulador + atual , 0)
const media = array => soma(array) / array.length

function receberMelhorEstudante(obj){
    const mediaEstudantes = Object.entries(obj).map(estudante => {
        const chave = 0, valor = 1

        return {
            nome: estudante[chave], media: media(estudante[valor])
        }
    })
    const estudantesOrdenados = mediaEstudantes.sort((estudanteA, estudanteB) => estudanteB.media - estudanteA.media)
    const melhorEstudante = estudantesOrdenados[0]
    
    console.log(melhorEstudante)
}

receberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
})