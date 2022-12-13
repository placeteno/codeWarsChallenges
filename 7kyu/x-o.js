/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
 */

function XO(str) {
  const newStr = str.toLowerCase();
  const x = newStr.split('').filter(x => x === 'x').length;
  const o = newStr.split('').filter(o => o === 'o').length;
  if (x === 0 && o === 0) return true;
  else if (x === o) return true;
  else return false;
}

function XO(str) {
  str = str.toLowerCase();
  return (
    str.split('').filter(x => x === 'x').length ===
    str.split('').filter(o => o === 'o').length
  );
}
