/*
obtenerIndice(valor, array)
Crear una función obtenerIndice que tome como argumento un valor cualquiera
valor y un array cualquiera array y devuelva el índice del primer ítem con dicho
valor en el array, o -1 si no hay ninguno.
obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12]) // 2
obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12]) // -1
*/

// NO me tira el indice que quiero... 
// Si arma un array 

let getValue = parseInt(prompt("Enter a number under 50"));
let getArray = parseInt(prompt("How many numbers do you want in your array?"));


let arrayNum = [];
let joinArrayNum = [];
let indexArrayNum;

let getMessage2 = document.querySelector("#getMessage2");

function getIndex(value, []) {
    for (let i = 0; i < getArray; i++) {
        //let arrayNumbers = parseInt(prompt(`Enter number ${i}`));
        let arrayRandomNumbers = Math.floor(Math.random() * 50);
        arrayNum.push(arrayRandomNumbers);
        joinArrayNum = arrayNum.join(' , ');
        console.log(joinArrayNum);
    };
    indexArrayNum = joinArrayNum.indexOf(getValue);
    console.log(indexArrayNum);

    getMessage2.innerHTML = `
    Your number is in the index: <b>${indexArrayNum}</b>
    `

    return joinArrayNum;
}
getIndex(getValue, joinArrayNum);


let getMessage = document.querySelector("#getMessage").innerHTML = `
Your lucky number is: <b>${getValue}</b>. <br><br>
The array is: <b>${joinArrayNum}</b>
`
