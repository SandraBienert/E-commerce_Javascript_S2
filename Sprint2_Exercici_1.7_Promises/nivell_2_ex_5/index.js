//EXERCICI 5. Gestió d'errors amb async/await:
//Modifica la funció de l'exercici 4 per a que capturi qualsevol possible error utilitzant un bloc try/catch.


function salutacio() { //Exercici 1
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hola, món');
        }, 2000);
    });
}



async function fetchingSalutacio() { //Exercici 4

    
    
    try {

        const salutacions = await salutacio();
        console.log(salutacions);

    } catch (error) {

        console.error(error);

    } finally {

        console.log(`Això s'ha acabat. Adeus-siau`);
    }
 

}


fetchingSalutacio();
