//Exercici 1 Crear promesa



function salutacio() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hola, món');
        }, 2000);
    });
}


//Exercici 2


salutacio()
    .then((missatge) => {
    console.log(missatge); 
});

//Exercici 3


function main() {
    
    let salutacio = document.getElementById("salutacio").value;

    function salutacions() {
    return new Promise((resolve, reject) => {
        if (salutacio !== 'Hola') {
            reject(new Error('No has escrit "hola".'))
        }
        setTimeout(() => {
            resolve('Hola a tu també');
        }, 2000)
    })
        
        
}
   
    salutacions()
        .then((response) => console.log(response))
        .catch((err) => console.log(err.message));
}



//Exercici 4


async function fetchingSalutacio() {

    const salutacions = await salutacio();
    console.log(salutacions);
    
}

fetchingSalutacio();
    
