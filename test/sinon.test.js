const sinon = require('sinon');

const { IsAlive } =require('../funcions');

describe(`IsAlive test`, function () {

    it(`realizando una funcion callback retorna un true`, function () { 
        const pinger = sinon.stub();
        pinger.returns(true);
        const websiteIsAlive = IsAlive(pinger);
        websiteIsAlive.should.be.true;
    });

    it(`should return true when ping returns true three times in a row`, function () { 
        const pinger = sinon.stub();
        pinger.onFirstCall().returns(true);
        pinger.onSecondCall().returns(true);
        pinger.onThirdCall().returns(true);
        const websiteIsAlive = IsAlive(pinger);
        websiteIsAlive.should.be.true;
    });
});