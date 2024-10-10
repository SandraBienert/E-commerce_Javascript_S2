

let arrayNum = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];


const arrayNum2 = arrayNum.filter(x => x >= 10).map(x => x * 2).reduce(function(a,b) {return (a + b)});
console.table("La solució a l'exercici 5 és: " + arrayNum2);