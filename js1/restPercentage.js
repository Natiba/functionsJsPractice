
function restPercentage (number, percentage) {
    let rest = number - percentage;
    document.write(rest, '<br></br>');
    return rest
}

function calculatePercentage(number, percentage) {
    let percentNumber = (number * percentage) / 100;
    document.write(`percentage: ${percentNumber} <br></br>`);
    return percentNumber;
  }

restPercentage(100, calculatePercentage (100, 15));
restPercentage(10, calculatePercentage (10, 40));
restPercentage(200, calculatePercentage (200, 10));