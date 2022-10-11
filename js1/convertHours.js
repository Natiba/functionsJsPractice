let hourToSecond = document.querySelector("#seconds")

function convertHoursToSeconds(hours) {
    let seconds = (hours * 60) * 60;
    hourToSecond.innerHTML += `${hours} hours: ${seconds} seconds <br></br>`; 
    return seconds
}

convertHoursToSeconds(1);
convertHoursToSeconds(3);
convertHoursToSeconds(4.5);