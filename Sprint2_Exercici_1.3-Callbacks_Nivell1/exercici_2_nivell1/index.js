


function calculadora(num1, num2, callback) {
    
   return callback(num1, num2)
}

function sumar(a, b) {

    return a + b;
}

const resultat = calculadora(10, 7, sumar);

console.log("La solució a la suma es: " + resultat)