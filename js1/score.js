let scoreMessage = document.querySelector("#scoreMessage");

let sumScore;

function calculateScore(easy, normal, hard) {
  sumScore = easy * 3 + normal * 5 + hard * 10;
  scoreMessage.innerHTML += `${sumScore} <br></br>`;
}

calculateScore(3, 0, 0);
calculateScore(0, 2, 1);
calculateScore(5, 1, 2);
