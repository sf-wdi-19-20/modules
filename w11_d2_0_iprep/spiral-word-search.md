## Spiral Word Search

Given an array of words, write a program that searches an N x N word search and returns an array of the found words. Instead of a regular word search where words are horizontal, vertical, or diagonal, all words in this search are in a spiral pattern (see visual below).

```js

var array = ["seattle", "portland"..."san francisco"]

N x N wordsearch grid

a |r |y |b |w |s |d |e
--|--|--|--|--|--|--|--
h |c |l |e |x |a |k |i
--|--|--|--|--|--|--|--
t |f |o |p |m |s |c |v
--|--|--|--|--|--|--|--      EXAMPLE SPIRAL PATTERN
f |u |r |a*|t*|t*|w |h         ---
--|--|--|--|--|--|--|--       |   |
z |b |n |e*|s*|l*|o |x         -- |
--|--|--|--|--|--|--|--           |
p |y |h |d |n |e*|l |j
--|--|--|--|--|--|--|--
u |a |i |o |l |r |g |s
--|--|--|--|--|--|--|--
g |k |c |y |u |b |m |q


findWord(array, wordSearch);
// => ["seattle"]
```