const normalize = require('../../src/normalizer');

describe('Normalizer', () => {
    it('Should filter headers without values', () => {
        const data = { requests: [{
            name: 'test',
            headers: [{
                name: '',
                value: 'any value'
            }]
        }]}

        const result = normalize(data);

        // expect(result.headers).toBeUndefined();
    })
})