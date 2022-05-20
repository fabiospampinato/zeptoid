
/* IMPORT */

import RNG from 'uint-rng';

/* HELPERS */

const DEC2HEX = new Array ( 256 ).fill ( 0 ).map ( ( _, idx ) => idx.toString ( 16 ).padStart ( 2, '0' ) );

/* MAIN */

const get = (): string => {

  let id = '';

  for ( let i = 0; i < 4; i++ ) {

    const uint32 = RNG.get32 ();

    id += DEC2HEX[( uint32 >>> 24 ) & 255];
    id += DEC2HEX[( uint32 >>> 16 ) & 255];
    id += DEC2HEX[( uint32 >>> 8 ) & 255];
    id += DEC2HEX[( uint32 & 255 )];

  }

  return id;

};

/* EXPORT */

export default get;
