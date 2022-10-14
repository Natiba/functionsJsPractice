
let invertMessage = document.querySelector("#invertMessage");

function invert (array) {
    let reversed = array.reverse();
    invertMessage.innerHTML += `reversed: ${reversed} <br></br>`;
    return reversed;
}

console.log(invert([1, 2, 3]));
console.log(invert([5, 7, 99, 34, 54, 2, 12]));
