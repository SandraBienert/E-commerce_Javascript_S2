
let resposta = "";

let edat = prompt("Escriu la teva edat");


potConduir = (edat) => {

    resposta = (edat < 18) ? "No pots conduir" : "Pots conduir";

    console.log(resposta);
    return alert(resposta);

}

potConduir(edat);
    


