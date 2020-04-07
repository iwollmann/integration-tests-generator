const { argv } = require('yargs');
const {resolve} = require('path');

const { GetParser } = require('./src/parsers');
const generate = require('./src/generator');

if (argv.sample) {
    const parser = GetParser(resolve(argv.sample));
    const data = parser.Parse();
    
    generate(data);
  } else {
    console.log('Provide --sample insomnia file, example: --sample ./my-insomnia-calls.json');
}

