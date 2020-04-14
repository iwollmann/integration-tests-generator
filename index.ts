import { argv } from 'yargs';
import { resolve } from 'path';

import GetParser from './src/parsers';
import generate from './src/generator';

if (argv.sample) {
    const parser = GetParser(resolve(argv.sample as string));
    if (parser) {
      const data = parser.Parse();
    
      generate(data);
    }
    else {
      console.log(`Unable to find a parser for the specified sample: ${argv.sample}`);
    }
  } else {
    console.log('Provide --sample insomnia file, example: --sample ./my-insomnia-calls.json');
}

