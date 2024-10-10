

const numero = prompt("Escriu el número que vulguis consultar");

const resultat = numero > 0 ? 'Positiu' : (numero < 0 ? 'Negatiu' : 'Zero');

console.log(resultat);


//----------------------------------------------------

function trobarMaxim(a, b, c) {
    
    return a > b ? (a > c ? a : c) : (b > c ? b : c);

}

const max = trobarMaxim(9, 6, 2);
console.log("Nombre màxim: " + max);