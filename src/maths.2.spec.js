const assert = require('assert');

const math = require('./maths');

describe("maths modules", () => {
    describe("existence", () => {
        it("should exist", () => {
            const actual = typeof math,
                expected = 'object';

            assert.equal(actual, expected);
        });
    });
});