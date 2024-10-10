 
function suma(...valores) {
     
    let resultado = 0;

    valores.forEach(function (valor) {

        resultado = resultado + valor;
    });

    return resultado;

}

console.log(suma(9, 8, 7, 6, 5));