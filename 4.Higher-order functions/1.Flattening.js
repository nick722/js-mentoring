// Use the reduce method in combination with the concat method
// to “flatten” an array of arrays into a single array
// that has all the elements of the original arrays.

const arrayOfArrays = [[1, 2], [3, 4], [5, 6]];

console.log(arrayOfArrays.reduce((accum, current) => accum.concat(current)));
