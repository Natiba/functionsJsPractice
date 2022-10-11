
function calculatePercentage(number, percentage) {
    let percentNumber = (number * percentage) / 100;
    document.write(percentNumber, '<br></br>');
    return percentNumber;
  }

function sumPercentage (number, percentage) {
let sum = number + percentage;
document.write(sum, '<br></br>');
return sum;
}

sumPercentage(100, calculatePercentage(100, 15))
sumPercentage(10, calculatePercentage(10, 50))
sumPercentage(200, calculatePercentage(200, 10))
