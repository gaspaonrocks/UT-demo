const assert = require('assert');

const { healthCheck, sum, throwError } = require('./maths');

describe('maths module', () => {
    describe('healthCheck function', () => {
        it('should say hello to anyone', () => {
            const actual = healthCheck(),
                expected = 'Hello stranger !';

            assert.equal(actual, expected);
        });
    });

    describe('throwError function', () => {
        it('should throw', () => {
            const actual = () => throwError(),
                expected = new Error('error');

            assert.throws(actual, expected);
        });
    });

    describe('sum', () => {
        it('should return a number', () => {
            const actual = typeof sum();
            const expected = 'number';

            assert.equal(actual, expected);
        });

        it('should return input when first param is undefined', () => {
            const actual = sum(2, undefined);
            const expected = 2;

            assert.equal(actual, expected);
        });

        it('should return input when second param is undefined', () => {
            const actual = sum(undefined, 0);
            const expected = 0;

            assert.equal(actual, expected);
        });

        it('should return sum of params', () => {
            const actual = sum(2, 5);
            const expected = 7;

            assert.equal(actual, expected);
        });

        it("should only take numbers", () => { });
    });
});
