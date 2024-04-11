const IsAlive = (ping) => { 
    const pingOneSucess = ping();
    const pingTowSucess = ping();
    const pingThreeSucess = ping();

    if (pingOneSucess && pingTowSucess && pingThreeSucess)
        return true;
    return false;
}

module.exports = {
    IsAlive,
}
