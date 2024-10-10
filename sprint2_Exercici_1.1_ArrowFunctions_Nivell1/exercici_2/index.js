//Exercici 2 .Num Random de 0 a 100


function main() {
    

    const randomNumber = () => {

        return Math.floor(Math.random() * 101);
    }

    console.log("Número alternativo del ejercicio 2: " + randomNumber());

    document.getElementById("solucio").innerHTML = "T'ha sortit el nombre: " + randomNumber();
}