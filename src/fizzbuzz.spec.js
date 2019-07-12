const assert = require('assert');
const { spy } = require('sinon');

const { fizzbuzz } = require('./fizzbuzz');
const maths = require('./maths');

describe("fizzbuzz module", () => {
    it("should exist", () => {
        const actual = typeof fizzbuzz,
            expected = 'function';

        assert.equal(actual, expected);
    });

    it("should return fizz", () => {
        const actual = fizzbuzz(0, 2),
            expected = "fizz";

        assert.equal(actual, expected);
    });

    it("should return buzz", () => {
        const actual = fizzbuzz(0, 3),
            expected = "buzz";

        assert.equal(actual, expected);
    });

    it("should return fizzbuzz", () => {
        const actual = fizzbuzz(0, 5),
            expected = "fizzbuzz";

        assert.equal(actual, expected);
    });

    it("should return 'no bubbles'", () => {
        const actual = fizzbuzz(0, 11),
            expected = "no bubbles";

        assert.equal(actual, expected);
    });

    it("should call maths module", () => {
        // creation of the spy
        const mathsSpy = spy(maths, "sum");

        // call without storing in variable
        // we just need to catch the call of the spy
        fizzbuzz(0, 1);

        // assertion
        assert(mathsSpy.calledWith(0, 1));
    });
});
