

const nombres = [33, 2, 45, 98, 17, 24, 7, 10];

let i = 0;
let esPar = "Par";
let esImpar = "Impar"

let resultat = [];


function parOimpar (nombres) {

    for (i; i < nombres.length; i++){

        const tipus = (nombres[i]%2 == 0) ? esPar : esImpar;
        
        resultat.push(`El nombre ${nombres[i]} es ${tipus}`);
        
    }

    return resultat;


}

console.log (parOimpar(nombres));
