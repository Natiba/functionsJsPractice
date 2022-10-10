let first = '¡';
let last = '!';

function scream(str) {
    let result = first.concat(str, last);
    return result   
}

document.write(scream('hola'), '<br></br>')
document.write(scream('aaaaaa'), '<br></br>')

