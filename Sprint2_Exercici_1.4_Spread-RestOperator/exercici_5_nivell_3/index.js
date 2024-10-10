

function dadesPersonals(nom, cognom, edat) {
    
    return `nom: ${nom}, cognom: ${cognom} i té ${edat} anys`;
}

let arrayDades = ['Pep', 'Capdevila', '27'];

console.log(dadesPersonals(...arrayDades));