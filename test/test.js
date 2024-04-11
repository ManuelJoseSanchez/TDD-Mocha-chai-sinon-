const chai = require('chai');

const should = chai.should();

const assert = chai.assert;

const expect = chai.expect;

const { add,Add } = require('../maths');

const sinon = require('sinon');

describe(`Teste de la funcion add`, function () { 
    
    it(`mostra el resultado 3 con los siguientes numero 1 y 2`, function () {
        const resul = add(1, 2);
        const expectedResult = 3;
        assert.equal(expectedResult, resul);
    });

    it('Should un ejemplo', function () {
        const resul = add(1, 2);
        const expectedResult = 3;
        resul.should.equal(expectedResult);
    });

    it(`expect un ejemplo`, function () { 
        const resul = add(1, 2);
        const expectedResult = 3;
        expect(resul).to.equal(expectedResult);
    });

    it(`Validacion valor 3 a 4`, function () { 
        const resul = add(1, 2);
        const expectedResult = 3;
        resul.should.not.equal(expectedResult);
        expect(resul).to.not.equal(expectedResult);
        assert.notEqual(expectedResult, resul);
    })
});

describe(`utilizando sinon`, function () { 

    it('probando la funcion de add', function () { 
        const numbreOne = 1;
        const numberTwo = 2;

        let logSpy = sinon.spy();
        Add(numberTwo, numbreOne, logSpy);
        logSpy.called.should.be.true;
    });

    it('ejemplo 2', function () { 
        const numbreOne = 1;
        const numberTwo = 2;

        let logSpy = sinon.spy();
        Add(numberTwo, numbreOne, logSpy);
        logSpy.calledWith(3).should.be.true;
    });
});