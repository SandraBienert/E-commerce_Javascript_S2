
let numberTimes = 0; 
let i = 0;
let nums = 0;
let array_numeros = [];


numberTimes = Number(prompt("Cuantos números quieres imprimir?", "ej. 5"));
console.log(numberTimes, typeof (numberTimes));
    
while (array_numeros.length < numberTimes) {
    
    let nums = Number(prompt("Escribe un número y dale a aceptar"));

    array_numeros.push(nums);

   
}


const printNumber = (array_numeros) => {

    for (i; i < array_numeros.length; i++){

        console.log(array_numeros[i]);
        

    }
    
    
}

printNumber(array_numeros);








