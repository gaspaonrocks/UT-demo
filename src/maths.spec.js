const assert = require('assert');

const maths = require('./maths');

describe('maths module', () => {
    describe('healthCheck function', () => {
        it('should say hello to anyone', () => {
            const actual = maths.healthCheck(),
                expected = 'Hello stranger !';

            assert.equal(actual, expected);
        });
    });

    describe('throwError function', () => {
        it('should throw', () => {
            const actual = () => maths.throwError(),
                expected = new Error('error');

            assert.throws(actual, expected);
        });
    });
});
