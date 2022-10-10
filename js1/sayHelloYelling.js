


const fullName2 = getFullName('Ada', 'Lovelace')
console.log(fullName2)
const sayHi2 = sayHi(fullName2)
console.log(sayHi2)
const scream2 = scream(sayHi2)
console.log(scream2)


function getFullName(name, lastname) {
    let fullName = name.concat(" ", lastname)
    return fullName
    }

function sayHi (name) {
    let greeting = `'Hi ${name}, nice to meet you'`;
    return greeting
}

function scream(str) {
    let first = '¡';
    let last = '!';
    let result = first.concat(str, last);
    return result   
}
