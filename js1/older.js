const older = document.querySelector("#older");

function isOlder (age) {
if (age >= 18) {
    return true;
} else {
    return false;
}
}


document.write(isOlder (15), '<br></br>')
document.write(isOlder (18), '<br></br>')
document.write(isOlder (27), '<br></br>')
