const argv = require('yargs').argv
const generate = require('./src/generator');

if (argv.sample) {
    const { resources } = require(argv.sample);
    generate(resources);
  } else {
    console.log('Provide --sample insomnia file, example: --sample ./my-insomnia-calls.json');
}

