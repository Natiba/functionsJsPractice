let scoreMessage = document.querySelector("#scoreMessage");

let sumScore;

function calculateScore(easy, medium, hard) {
  sumScore = easy * 3 + medium * 5 + hard * 10;
  scoreMessage.innerHTML += `${sumScore} <br></br>`;
}

calculateScore(3, 0, 0);
calculateScore(0, 2, 1);
calculateScore(5, 1, 2);
