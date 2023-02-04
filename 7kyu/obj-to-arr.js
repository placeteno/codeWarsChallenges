/*
Convert an obj into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}

should be converted into

[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]

Note: The output array should be sorted alphabetically by key name.
*/

function convertObjToArr(obj) {
  const output = [];

  Object.keys(obj).forEach(el => {
    output.push([el, obj[el]]);
  });

  return output.sort();
}
