# @susisu/ts-dimensional
[![CI](https://github.com/susisu/ts-dimensional/workflows/CI/badge.svg)](https://github.com/susisu/ts-dimensional/actions?query=workflow%3ACI)

PoC: Dimensional Quantities in TypeScript

**NOTE: This is an experimental package and not suitable for production use.**

``` shell
npm i @susisu/ts-dimensional
# or
yarn add @susisu/ts-dimensional
```

TypeScript 4.0+ is required.

## Example

``` typescript
import { mass, length, mks, cgs, add, mul, conv } from "@susisu/ts-dimensional";

const m1 = mass(1, mks);
const m2 = mass(2, mks);
const m3 = mass(3, cgs);

const l1 = length(1, mks);
const l2 = length(2, mks);
const l3 = length(3, cgs);

add(m1, m2); // ok
add(m1, l1); // error: dimensions mismatch
add(m1, m3); // error: unit systems mismatch

mul(m1, l1); // ok
add(mul(m1, l1), mul(m2, l2)); // ok
mul(m1, l3); // error: unit systems mismatch

const m4 = conv(m1, cgs);
add(m3, m4); // ok
```

## License

[MIT License](http://opensource.org/licenses/mit-license.php)

## Author

Susisu ([GitHub](https://github.com/susisu), [Twitter](https://twitter.com/susisu2413))
