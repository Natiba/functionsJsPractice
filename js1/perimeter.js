let perimeter = document.querySelector("#perimeter");

function rectanglePerimeter(base, high) {
  let recPerimeter = base * 2 + high * 2;
  perimeter.innerHTML += `The perimeter is: ${recPerimeter} <br></br>`;
  return recPerimeter;
}

rectanglePerimeter(3.2, 5);
rectanglePerimeter(10, 20);

