class Persona {

    constructor(name) {
        this.name = name;
    }

    greet(name) {

        console.log(`Hola, ${this.name}`)

        return (`Hola, ${this.name}, aquest és l'exercici 3`);
    }

}


function main() {
    
    let name = document.getElementById("name").value;
    console.log("nom: " + name);

    let persona = new Persona(name);

    document.getElementById("solution").innerHTML = persona.greet(name);
 


}





