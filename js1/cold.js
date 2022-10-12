function itIsCold (temperature) {
    if (temperature <= 12) {
        return true
    } else {
        return false
    }
    }
    
    document.write(itIsCold (12), '<br></br>')
    document.write(itIsCold (22), '<br></br>')
    document.write(itIsCold (3), '<br></br>')
    document.write(itIsCold (-2), '<br></br>')