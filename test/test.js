'use strict'

var tape = require('tape')
var movingMedian = require('../median')

function testSequence(t, seq, length) {
  var median = movingMedian(length)
  for(var i=0; i<seq.length; ++i) {
    var snippet = seq.slice(Math.max(0, i-length+1), i+1)
    var w = snippet
      .filter(function(x) {
        return !isNaN(x)
      })
      .sort(function(a,b) {
        return a-b
      })
    var expected = NaN
    if(w.length > 0) {
      if(w.length & 1) {
        expected = w[w.length>>>1]
      } else {
        expected = 0.5*(w[w.length>>>1] + w[(w.length>>>1)-1])
      }
    }
    var actual = median(seq[i])
    t.ok((actual === expected) || (isNaN(actual) && isNaN(expected)), 'filtering: ' + snippet.join(','))
  }
}

tape('testing sequences', function(t) {

  testSequence(t, [1, 2, 3, 4, 5, 6, -1, 2, 3, 2, 2, 2, 2, 2], 3)

  testSequence(t, [NaN, 1, NaN, NaN, NaN, 5, NaN, NaN, NaN, NaN, NaN], 5)

  t.end()
})
