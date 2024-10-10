//Promise.all: Crea dues promeses que es resolguin després de 2 i 3 segons, respectivament. Utilitza Promise.all per a esperar que ambdues promeses es resolguin, i imprimeix els resultats a la consola.

function asyncOp() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    })
}

function asyncOp2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 3000);
    })
}

Promise.all([

    asyncOp().then(() => console.log('Hola')),

    asyncOp2().then(() => console.log('Bon dia')),

    asyncOp2().then(() => console.log('Com estàs?'))
])
.then(() => console.log("S'han complert totes les promeses"));
