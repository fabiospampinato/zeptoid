
/* IMPORT */

import benchmark from 'benchloop';
import zeptoid from '../dist/index.js';

/* MAIN */

benchmark.defaultOptions = Object.assign ( benchmark.defaultOptions, {
  iterations: 1000000
});

benchmark ({
  name: 'zeptoid',
  fn: () => {
    zeptoid ();
  }
});
