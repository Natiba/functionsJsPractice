
function calculateFPS (frames, minutes) {
let calculateFPS = frames * (minutes * 60);
document.write(`${frames} frames in ${minutes} minutes are ${calculateFPS} seconds <br></br>`)
}

calculateFPS (1, 1)
calculateFPS (10, 2)
calculateFPS (2, 3)