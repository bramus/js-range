# Range

Create an array containing a range of elements _(cfr. PHP's range)_

## Installation

```bash
npm i @bramus/range
```

## Usage / Example

```js
import { range } from '@bramus/range';

const r1 = range(0, 12);
// ~> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const r2 = range(7, 12);
// ~> [7, 8, 9, 10, 11, 12]

const r3 = range(0, 100, 10);
// ~> [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
```

🔗 Try it out online in the playground: [https://codepen.io/bramus/pen/dyVMPxV](https://codepen.io/bramus/pen/dyVMPxV)

## API

The exposed function has an API identical to [PHP's `range`](https://php.net/range) method:

```js
range(start, end, step = 1);
```

Parameters:

- `start`: First value of the sequence.
- `end`: The sequence is ended upon reaching the `end` value.
- `step` _(default: 1)_: If a `step` value is given, it will be used as the increment between elements in the sequence. `step` should be given as a positive number. If not specified, step will default to `1`.

## Limitations

Unlike PHP's `range`, this function is limited to numbers only. In case you do want to get letters, combine `range()` with `Array.map()`.

## License

`@bramus/range` is released under the MIT public license. See the enclosed `LICENSE` for details.
