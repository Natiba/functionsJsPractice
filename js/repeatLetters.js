const repeatMessage = document.querySelector("#repeatLetMessage")
let addLetters = []

function repeatLetters(str, num) {
    for (let i = 0; i < str.length; i++) {
        //while (addLetters < str.length) {
        //let rep = str[i]
        let repeat = str[i].repeat(num);
        addLetters.push(repeat);
        
        console.log(addLetters)
        //rep.repeat(num)
        //console.logrepeat[i].repeat(num)
        repeatMessage.innerHTML += `${addLetters.join("")} <br></br>`
        //return rep
    }
   addLetters = []
}
//}

repeatLetters('hola', 2) // dan ok PERO me sigue mostrando todos los pasos del for.  Como los saco??
repeatLetters('ada', 3)
repeatLetters('ah!', 5)
repeatLetters('basta', 1)