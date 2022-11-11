/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
  let num = [];
  const newStr = str.split("");
  newStr.forEach((l) => {
    if (l === "a" || l === "e" || l === "i" || l === "o" || l === "u") {
      num.push(l);
    }
  });
  return num.length;
}
