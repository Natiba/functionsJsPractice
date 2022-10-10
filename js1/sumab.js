/*
sumar(a, b)
Crear una función sumar que tome como argumentos dos números y devuelva la
suma de ellos
sumar(2, 3) // 5
sumar(1.2, 3.4) // 4.6
sumar(3, -5) // -2
*/

function sum(a, b) {
  let sumAb = a + b;
  return sumAb;
}

document.write('2 + 3 = ' + sum(2, 3),'<br></br>');
document.write('1.4 + 3.2 = ' + sum(1.4, 3.2),'<br></br>');
document.write('3 + -5 = ' + sum(3, -5),'<br></br>');
