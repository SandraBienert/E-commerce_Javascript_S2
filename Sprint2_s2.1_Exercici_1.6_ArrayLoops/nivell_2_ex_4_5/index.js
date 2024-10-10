

//Exercici 4


let obj = { nom: 'Ona', edat: 25, ciutat: 'Barcelona' };

for (let propiedad in obj) {
    console.log("Resposta Exercici 4: " + propiedad + ": " + obj[propiedad])
}


//Exercici 5


let numeros = [1, 2, 3, 4, 5, 6];

for (let value of numeros) {

    if (value > 5) { break; }
    
    console.log("valor: " + value);

     
}