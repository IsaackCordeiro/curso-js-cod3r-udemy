function verificaTriangulo(la, lb, lc){
    if(la === lb && lb === lc){
        console.log('Triangulo Equilátero')
    }else if(la === lb || la === lc || lb === lc){
        console.log('Triangulo Isósceles')
    }else if(la !== lb && lb !== lc && la !== lc){
        console.log('Triangulo Escaleno')
    }
}

verificaTriangulo(1, 2, 3)