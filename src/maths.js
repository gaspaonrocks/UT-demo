module.exports = {
    healthCheck: (name = 'stranger') => `Hello ${name} !`,
    throwError: () => { throw new Error('error'); }
}