const ejs = require('ejs');
const path = require('path');
const templatePath = path.join(__dirname, '../../_templates/generator/tests/component/get.ejs');

describe('Get Template', () =>{
    it('Should include headers on rendering', () => {
        const mock = { 
            request: {
                name: 'List Test',
                headers: [{
                    name: 'Content-Type',
                    value: 'application/json'
                }]
            }
        }

        const sut = ejs.renderFile(templatePath, 
            mock,
            (err, html) => {
                expect(err).toBe(null);
                expect(html).toContain('Content-Type:application/json');
        });
    })
})