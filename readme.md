# ZeptoID

A tiny isomorphic fast function for generating a cryptographically random hex string.

Accoding to [this](https://zelark.github.io/nano-id-cc) calculator one would have to generate ids at a rate of 1 billion per second for ~83 years to have a 1% probability of finding a collision.

## Comparison

Compared to [`nanoid`](https://github.com/ai/nanoid) there are the following differences:

- `zeptoid` is 50% faster.
- `zeptoid` has a ~5x bigger space of possible unique strings that could be generated.
- `zeptoid` is not customizable in any way, it will always simply output a 32-characters hex string.
- `zeptoid` uses only the 16-characters of the hexadecimal alphabet, which makes the ids more human-friendly.

## Install

```sh
npm install --save zeptoid
```

## Usage

```ts
import zeptoid, {is} from 'zeptoid';

// Generate ids

zeptoid (); // => 'aceee829076f33f6626a93ad1fcca776'
zeptoid (); // => '39a07eda327e5b52f903d06303ca97be'
zeptoid (); // => '0c1a4d3f273505565a380022fda07edd'

// Check if a string is a zeptoid or not

is ( zeptoid () ); // => true
is ( 'something' ); // => false
```

## License

MIT © Fabio Spampinato
