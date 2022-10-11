function calculatePercentage(number, percentage) {
  let percentNumber = (number * percentage) / 100;
  document.write(`percentage: ${percentNumber} <br></br>`);
  return percentNumber;
}

calculatePercentage(100, 15);
calculatePercentage(10, 50);
calculatePercentage(200, 10);