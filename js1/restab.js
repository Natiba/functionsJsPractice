/*
restar(a, b)
Crear una función restar que tome como argumentos dos números y devuelva la
resta de ellos
restar(3, 2) // 1
restar(10, 5.5) // 4.5
restar(3, 5) // -2
*/

function rest(a,b) {
    let rest = a - b;
    return rest
}

document.write('3 - 2 = ' + rest(3,2),'<br></br>');
document.write('10 - 5.5 = ' + rest(10,5.5),'<br></br>');
document.write('3 - 5 = ' + rest(3,5),'<br></br>');