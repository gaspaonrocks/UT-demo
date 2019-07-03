const assert = require('assert');

const fizzbuzz = require('./fizzbuzz');

describe("fizzbuzz module", () => {
    it("should exist", () => {
        const actual = typeof fizzbuzz,
            expected = 'object';

        assert.equal(actual, expected);
    });
});
