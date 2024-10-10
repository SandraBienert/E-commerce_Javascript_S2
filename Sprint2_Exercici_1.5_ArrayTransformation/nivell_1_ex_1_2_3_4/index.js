
//Exercici 1

let numeros = [1, 2, 3, 4];

let arrelsQuadrades = numeros.map(x => x ** 2);

console.log(`La resposta de l'exercici 1 és: ${arrelsQuadrades}`);



//Exercici 2

let parells = numeros.filter(x => x % 2 === 0);

console.log(`La resposta a l'exercici 2 és: ${parells}`);

//Exercici 3

let num = [1, 10, 8, 11];

const trobat = num.find(x => x > 10);

console.log(`La resposta a l'exercici 3 és: ${trobat}`);

//Exercici 4

let nombres = [13, 7, 8, 21]

const suma = nombres.reduce(function (a, b) {
    return a + b;
})

console.log(`L'Exercici 4, té com a resultat ${suma}`);