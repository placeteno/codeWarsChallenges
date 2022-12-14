/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!
*/

function capitalize(s) {
  const odd = [];
  const even = [];

  s.split('').forEach((l, i) => {
    if (i % 2 === 0) {
      odd.push(l.toUpperCase());
    } else odd.push(l);
  });

  s.split('').forEach((l, i) => {
    if (i % 2 !== 0) {
      even.push(l.toUpperCase());
    } else even.push(l);
  });

  return [odd.join(''), even.join('')];
}
