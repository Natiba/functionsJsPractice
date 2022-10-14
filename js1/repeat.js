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

// No usé la función 'repeat' porque crea un string, opté por un clásico for que modifica el array.

function repeat(value, number) {
  for (let i = 0; i < number; i++) {
    repArray.push(value);
  }

  console.log(repArray);
  return repArray;
}

// Puede considerarse 'trampa', pero esto devuelve lo más parecido al resultado, sin espacios luego de la coma.
// repMessage.innerHTML = `[${repeat(repValue, repNumber)}]
// `;

// Éste, usando un map, devuelve lo que buscamos con un espacio extra al principio.
repMessage.innerHTML = `[${repeat(repValue, repNumber).map((item) => {
  return ` ${item}`;
})}]
`;
