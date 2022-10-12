
function acceptDeposit (money) {
    if (money % 10 === 0) {
        return true;
    } else {
        return false;
    }
}

document.write("<b>", "440 is a multiple of 10? ",  "</b>")
document.write(acceptDeposit(440), '<br></br>')
document.write("<b>", "123 is a multiple of 10?  ", "</b>")
document.write(acceptDeposit(123), '<br></br>')
document.write("<b>", "500.50 is a multiple of 10?  ", "</b>")
document.write(acceptDeposit(500.50), '<br></br>')
document.write("<b>", "1000 is a multiple of 10?  ", "</b>")
document.write(acceptDeposit(1000))
