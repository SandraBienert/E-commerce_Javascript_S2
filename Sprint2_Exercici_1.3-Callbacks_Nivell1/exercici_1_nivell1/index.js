


function processar(nombre, callback) {
    
    callback(nombre);

}

function imprimir(nombre) {
    
    console.log(`El número és ${nombre}`)
}


processar(10, imprimir);
    
