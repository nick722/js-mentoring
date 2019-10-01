// Analogous to the some method, arrays also have an every method.
// This one returns true when the given function returns true
// for every element in the array.
//   In a way, some is a version of the || operator that acts on arrays,
// and every is like the && operator.
//
//   Implement every as a function that takes
// an array and a predicate function as parameters.
// Write two versions,
// one using a loop
// and one using the some method.

function everyByLoop(arr, func) {
  for (let elem of arr) {
    if (!func(elem)) return false;
  }
  return true;
}

const evenArr = [2, 4, 6];
const unevenArr = [1, 2, 3];
function predicate(el) {
  return el % 2 === 0;
}

function everyBySome(arr, func) {
  return !arr.some(elem => !func(elem));
}

console.log(everyBySome(evenArr, predicate));
console.log(everyBySome(unevenArr, predicate));
