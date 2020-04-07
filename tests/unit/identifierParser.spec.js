const { GetParser } = require('../../src/parsers');
const InsomniaParser = require('../../src/parsers/insomniaParser');

describe('Parser', () => {
    it('Shoul be able to identify the parser', () => {
        
        const data = '../../insomnia_sample.json';
        const result = GetParser(data);

        expect(result instanceof InsomniaParser).toBe(true);
    })
});
