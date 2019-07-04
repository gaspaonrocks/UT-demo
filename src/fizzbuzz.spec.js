const assert = require('assert');

const fizzbuzz = require('./fizzbuzz');

describe("fizzbuzz module", () => {
    it("should exist", () => {
        const actual = typeof fizzbuzz,
            expected = 'object';

        assert.equal(actual, expected);
    });

    it("should return fizz", () => {
        const actual = fizzbuzz.fizzbuzz(0, 2),
            expected = "fizz";

        assert.equal(actual, expected);
    });

    it("should return buzz", () => {
        const actual = fizzbuzz.fizzbuzz(0, 3),
            expected = "buzz";

        assert.equal(actual, expected);
    });

    it("should return fizzbuzz", () => {
        const actual = fizzbuzz.fizzbuzz(0, 5),
            expected = "fizzbuzz";

        assert.equal(actual, expected);
    });

    it("should return 'no bubbles'", () => {
        const actual = fizzbuzz.fizzbuzz(0, 11),
            expected = "no bubbles";

        assert.equal(actual, expected);
    });
});
