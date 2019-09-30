// Write a higher-order function loop
// that provides something like a for loop statement.
// It takes a value, a test function, an update function, and a body function.

// Each iteration, it first runs the test function on the current loop value
// and stops if that returns false.
// Then it calls the body function, giving it the current value.
// Finally, it calls the update function to create a new value
// and starts from the beginning.

//   When defining the function, you can use a regular loop to do the actual
// looping.

function loop(value, testFunc, bodyFunc, updateFunc) {
  let i = value;
  let accum = 0;
  while (testFunc(i)) {
    bodyFunc(i, accum);
    i = updateFunc(i);
  }
  return bodyFunc(i);
}

function test(value) {
  if (value < 10) return true;
}

function body(value, acc) {
  console.log("acc = ", acc);
  return acc + value;
}

function update(value) {
  return value + 1;
}

console.log(loop(1, test, body, update));
