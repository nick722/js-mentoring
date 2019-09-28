// Arrays have a reverse method that changes the array by inverting the order in
// which its elements appear.
//
// For this exercise, write two functions, reverseArray
// and reverseArrayInPlace.

// The first, reverseArray, takes an array as argument
// and produces a new array that has the same elements in the inverse order.

// Neither may use the standard reverse method.

// function reverseArray(arr) {
//   let reversedArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversedArr.push(arr[i]);
//   }
//   return reversedArr;
// }
//
// console.log(reverseArray([22, 23, 24, 25]));

// The second, reverseArrayInPlace, does what the reverse method does: it modifies
// the array given as argument by reversing its elements.

function reverseArrayInPlace(arr) {
  let tempLowNum, tempHighNum;
  for (let i = 0; i < arr.length / 2; i++) {
    tempLowNum = arr[i];
    tempHighNum = arr[arr.length - 1 - i];
    arr[i] = tempHighNum;
    arr[arr.length - 1 - i] = tempLowNum;
  }
}
const initArr = [22, 23, 24, 25, 26];
reverseArrayInPlace(initArr);
console.log(initArr);

//   Thinking back to the notes about side effects and pure functions in the
// previous chapter, which variant do you expect to be useful in more situations?
// Answer: reverseArray
//   Which one runs faster?
// Answer: reverseArray
