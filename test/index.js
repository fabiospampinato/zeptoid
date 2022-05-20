
/* IMPORT */

import {describe} from 'fava';
import zeptoid, {is} from '../dist/index.js';

/* MAIN */

describe ( 'ZeptoID', it => {

  it ( 'can generate random tiny ids', t => {

    let prev = '';

    for ( let i = 0; i < 1000000; i++ ) {

      const next = zeptoid ();

      t.true ( is ( next ) );
      t.not ( prev, next );

      prev = next;

    }

  });

  it ( 'can check if a string is a tiny id or not', t => {

    t.true ( is ( zeptoid () ) );
    t.false ( is ( 'asdjknasdkjnasjknd' ) );
    t.false ( is ( '0123' ) );

  });

});
