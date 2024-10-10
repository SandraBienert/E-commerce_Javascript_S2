

function processarElements(arrayNum, callback) {

    for (let i = 0; i < arrayNum.length; i++){

        callback(arrayNum[i]);
    }
    
}

const arrayNum = [1, 2, 3, 4, 5];

processarElements(arrayNum, (element) => {
    console.log(`"L'Element és : ${element}`);
})