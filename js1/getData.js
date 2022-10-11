let cityUser = prompt("Enter a city, please").toUpperCase();
let populationUser = parseInt(prompt("Enter a number of population, please"));
let countryUser = prompt("Enter a country, please").toUpperCase();

let fullDirection = document.querySelector("#adress");

function getData (city, population, country) {
    fullDirection = `The city of ${city} has a population of ${population} inhabitants and is located in ${country}`;
    document.write(fullDirection)
     return fullDirection
}

getData(cityUser, populationUser, countryUser)