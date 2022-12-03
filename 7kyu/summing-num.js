/*
Description:

Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5

Let's assume that all numbers in the input will be integer values.

*/

function sumDigits(number) {
  const arr = number.toString().split("");
  if (arr.includes("-")) {
    return Math.abs(
      arr
        .slice(1)
        .map((num) => Number(num))
        .reduce((acc, cur) => cur + acc, 0)
    );
  } else
    return arr.map((num) => Number(num)).reduce((acc, cur) => acc + cur, 0);
}
