const add = (numberOne, numbreTwo) => {
    return numberOne + numbreTwo;
}

// utilizando sinon ejemplo basico

const Add = (numberOne, numbreTwo, log) => {
    
    const result = numberOne + numbreTwo;
    log(result);
    return result;
}


module.exports = {
    add,
    Add
}