const chai = require('chai');
const should = chai.should();
const sinon = require('sinon');

const API = {
    IsAlive: function () { 
        try {
            const pingOneSucess = this.Ping();
            const pingTowSucess = this.Ping();
            const pingThreeSucess = this.Ping();
            if (pingOneSucess && pingTowSucess && pingThreeSucess)
                return true
            return false;
        } catch (error) {
            return new Error(`ping throw exception`);
        }
    },
    Ping: function () { 
        return true;
    }
}

describe('IsAlive test moke', function () {
    it(`should call ping 3 timer`, function () { 
        const mockApi = sinon.mock(API);
        mockApi.expects('Ping').exactly(3);
        API.IsAlive();
        mockApi.verify();
    });
});