
/* IMPORT */

import benchmark from 'benchloop';
import zeptoid from '../dist/index.js';

/* MAIN */

benchmark.config ({
  iterations: 1_000_000
});

benchmark ({
  name: 'zeptoid',
  fn: () => {
    zeptoid ();
  }
});
