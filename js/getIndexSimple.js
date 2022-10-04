
let getValue2 = parseInt(prompt("Enter a number under 50"));


let myArray = [2, 4, 10, 33, 56, 7];
console.log(myArray);

function getIndexSimple(value, array) {
    let indexOfMyArray = array.indexOf(value);
    return indexOfMyArray
}

getIndexSimple(getValue2, myArray);

console.log(getIndexSimple(getValue2, myArray));

let getMessageSimple = document.querySelector("#getMessageSimple").innerHTML = `GetIndex(${getValue2}, [${myArray}]) //
${getIndexSimple(getValue2,myArray)}
`

// Este funciona.  Poner espacios entre los numeros del array!!