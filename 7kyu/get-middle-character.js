/*
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"
*/

function getMiddle(str) {
  const half = str.length / 2;

  if (str.length % 2 === 0) {
    return str[half - 1] + str[half];
  } else return str[half - 0.5];
}
