
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

//Highest to lowest
//let highestToLowest = numbers.sort((a, b) => b-a);
//Output: [500,44,32,15,13,5,1]