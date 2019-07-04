module.exports = {
    healthCheck: (name = 'stranger') => `Hello ${name} !`,
    throwError: () => { throw new Error('error'); },
    sum: (number1 = 0, number2 = 0) => {
        return number1 + number2;
    },
}