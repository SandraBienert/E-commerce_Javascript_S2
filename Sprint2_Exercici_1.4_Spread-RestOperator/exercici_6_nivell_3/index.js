
//Fusionant Objectes amb Spread: Crea dos objectes amb propietats diferents.Utilitza l'operador spread per a fusionar aquests dos objectes en un de nou.

const objecte1 = {
    nom: 'Pere',
    cognom: 'Garcia',
}

const objecte2=  {
    email: 'peregarcia@gmail.com',
    tlf: '666 66 66',
}

const objecte3 = {
    ...objecte1,
    ...objecte2,

}

console.log(objecte3);