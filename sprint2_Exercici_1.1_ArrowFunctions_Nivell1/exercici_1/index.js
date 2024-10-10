


function main() {

    let a = Number(document.getElementById("number1").value);
    let b = Number(document.getElementById("number2").value);

    console.log(a, typeof(a));
    console.log(b, typeof(b));

    
    const add = (a, b) => a + b;

    console.log("La suma de los números: " + add(a, b));
   
   
   document.getElementById("solucio").innerHTML = `${a} + ${b} = ` + add(a, b);

}





