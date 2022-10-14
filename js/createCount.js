
let countdown = [];
let countMess = document.querySelector("#countMess");

function createCountdown (initialNumber) {
for (let i = 0; i <= initialNumber; i++) {
countdown.push(i);
console.log(countdown);

countdown.sort();
countdown.reverse();

}
countMess.innerHTML += `${countdown} <br></br>`;
countdown = [];
}
createCountdown(3)
createCountdown(5) 

/* ANOTHER WAY TO DO THE SAME */

function createCountdown2 (initialNumber) {
    for (let i = 0; i <= initialNumber; i++) {
    countdown.push(i);
    console.log(countdown);
    

    let highestToLowest = countdown.sort((a, b) => b-a);
    
    }
    countMess.innerHTML += `${countdown} <br></br>`;
    countdown = [];
    }
    createCountdown(3)
    createCountdown(5) 