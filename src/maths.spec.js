const assert = require('assert');

const math = require('./maths');

describe('maths module', () => {
    describe('healthCheck function', () => {
        it('should say hello to anyone', () => {
            const actual = math.healthCheck(),
                expected = 'Hello stranger !';

            assert.equal(actual, expected);
        });
    });
});
