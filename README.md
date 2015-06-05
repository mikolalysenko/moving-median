moving-median
=============
Computes a running median from a stream of values.  Useful for filtering noisy signals.

# Example

```javascript
var createMedianFilter = require('moving-median')
var median = createMedianFilter(5)

var sequence = [1, 2, 5, 2, 1, 1, 1, 2, 1000, 2, NaN, 3, NaN, 3, 3]

for(var i=0; i<sequence.length; ++i) {
  console.log(median(sequence[i]))
}
```

# Install

```
npm i moving-median
```

# API

#### `var median = require('moving-median')(windowSize)`
Creates a new median filter

* `windowSize` is the number of samples in the median

**Returns** A function which accepts samples

#### `var m = median(sample)`
Compute the running median of the last `windowSize` samples.

* `sample` is the next sample to add

**Returns** The median of the last `windowSize` samples

# License
(c) 2015 Mikola Lysenko. MIT License
