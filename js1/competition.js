function getCompetition (a,b) {
    let concatAB = a.concat(" vs. ", b, '<br></br>');
    document.write(concatAB);
    return concatAB
}

getCompetition ('JavaScript', 'Python')
getCompetition ('Coca', 'Pepsi')
getCompetition ('Perros', 'Gatos')


// Different way to do the same

function getCompetition2 (a,b) {
    let concatAB = a.concat();
    document.write(`${a} vs. ${b} <br></br>`);
    return concatAB
}

getCompetition2 ('JavaScript', 'Python')
getCompetition2 ('Coca', 'Pepsi')
getCompetition2 ('Perros', 'Gatos')