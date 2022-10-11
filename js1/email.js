function generateEmail(user, domain) {
    document.write(`${user}@${domain}.com <br></br>`);
}

generateEmail('adalovelace', 'gmail')

// Different way to do the same

function generateEmail2(user, domain) {
    let emailConcat = user.concat("@", domain, ".com");
    document.write(emailConcat);
}

generateEmail2('adalovelace', 'gmail')



