function getFullName(name, lastname) {
let fullName = name.concat(" ", lastname)
return fullName
}

document.write(getFullName('Ada', 'Lovelace'), '<br></br>')
document.write(getFullName('Peter', 'Parker'), '<br></br>')