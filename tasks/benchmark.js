
/* IMPORT */

import benchmark from 'benchloop';
import {nanoid} from 'nanoid';
import zeptoid from '../dist/index.js';

/* MAIN */

benchmark.defaultOptions = Object.assign ( benchmark.defaultOptions, {
  iterations: 1000000,
  log: 'compact'
});

benchmark ({
  name: 'nanoid',
  fn: () => {
    nanoid ();
  }
});

benchmark ({
  name: 'zeptoid',
  fn: () => {
    zeptoid ();
  }
});

benchmark.summary ();
