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
});
