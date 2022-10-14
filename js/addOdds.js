let sum = 0;
const addMessage = document.querySelector("#addMessage");

function addOdds(number) {
  for (let i = 0; i <= number; i++) {
    if (i % 2 !== 0) {
      sum += i;
      console.log(sum);
      

      //addMessage.textContent += sum, '<br></br>';
      
   
    }
  }
  addMessage.innerHTML += `${sum} <br></br>`
  sum = 0;
}

addOdds(5); // da 9
addOdds(13); // da 49
addOdds(47); // da 576

// Porque me las esta sumandoooooooooooooo
// Si habilito las 3 llamadas, las suma entre si
// El error era no volver la variable sum a cero para que vuelva a comenzar
