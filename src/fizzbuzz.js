const maths = require('./maths');

module.exports = {
    fizzbuzz: (number1, number2) => {
        const number = maths.sum(number1, number2);

        if (number % 2 === 0) return 'fizz';
        else if (number % 3 === 0) return 'buzz';
        else if (number % 5 === 0) return 'fizzbuzz';
        else return 'no bubbles';
    }
};