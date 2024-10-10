
function esperarISaludar(nom, callback) {
    
    setTimeout(() => {
        callback(nom)
    }, 2000);
}


esperarISaludar("Pol", (nom) => {
    console.log(`Hola, ${nom}!!`);
})