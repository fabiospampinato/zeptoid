
/* HELPERS */

const re = /^[0-9a-f]{32}$/;

/* MAIN */

const is = ( str: string ): boolean => {

  if ( str.length !== 32 ) return false;

  return re.test ( str );

};

/* EXPORT */

export default is;
