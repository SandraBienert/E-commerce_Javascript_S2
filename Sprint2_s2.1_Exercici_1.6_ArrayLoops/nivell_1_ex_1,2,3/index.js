
//Exercici 1


let noms = ['Anna', 'Bernat', 'Clara'];

noms.forEach( nom => console.table("Exercici número 1: " + noms.join(", ")));



//Exercici 2


let contenido = "";
let i = 0;

for (let valor of noms) {
    
    contenido += valor + '\n';
    i ++
}

console.log("Exercici número 2: " + contenido);


//Exercici 3
//filter: Teniu una array de números.Utilitza filter per a crear una nova array que només contingui els números parells.

let numeros = [1, 2, 3, 4, 5, 6];

let parells = [];

parells = numeros.filter(x => x % 2 === 0);
console.log("Exercici número 3: " + parells)

