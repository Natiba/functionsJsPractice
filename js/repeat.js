/*
repetir(valor, cantidad)

Crear una función repetir que tome como argumento un valor valor y un número
entero cantidad, y devuelva una array con valor repetido cantidad de veces.
repetir('lovelace', 3) // ['lovelace', 'lovelace', 'lovelace']
repetir('a', 5) // ['a', 'a', 'a', 'a', 'a']
repetir('html', 0) // []
*/

let repValue = prompt("Enter some word or letter, please");
let repNumber = parseInt(prompt("Enter a number, please"));

let repMessage = document.querySelector("#repeatMessage");

let repArray = [];
let repJoinArray = [];

// str.repeat(count)

// function repeat(value, number) {
//   repArray.push(value.repeat(number));

//   for (let i = 0; i < repNumber; i++) {
//     repJoinArray = repArray.join(" - "); // no logro dividirlos ','
//     console.log(repJoinArray);
//   }

//   return repArray;
// }

function repeat(value, number) {
  for (let i = 0; i < number; i++) {
    repArray.push(value);
  }

  console.log(repArray);
  return repArray;
}

repMessage.innerHTML = `[${repeat(repValue, repNumber)}]
`;
