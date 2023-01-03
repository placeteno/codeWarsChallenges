/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers. Return your answer as a number.
*/

function sumMix(arr) {
  return arr.map(num => Number(num)).reduce((cur, acc) => cur + acc, 0);
}
