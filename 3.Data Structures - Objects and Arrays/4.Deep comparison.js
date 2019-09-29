// The == operator compares objects by identity. But sometimes you’d prefer to
// compare the values of their actual properties.

//   Write a function deepEqual that takes two values and
// returns true only
// if they are the same value
// or are objects with the same properties,
// where the values of the properties are equal
// when compared with a recursive call to deepEqual.

//   To find out whether values should be compared directly (use the === operator
// for that) or have their properties compared, you can
// use the typeof operator.

//   If it produces "object" for both values, you should do a deep comparison.
//   But you have to take one silly exception into account: because of a historical
// accident, typeof null also produces "object".
//   The Object.keys function will be useful when you need to go over the properties
// of objects to compare them.

function deepEqual(val1, val2) {
  if (val1 !== null && val2 !== null) {
    if (Object.keys(val1) && Object.keys(val2)) {
      for (let i = 0; i < Object.keys(val1).length; i++) {
        if (Object.keys(val1)[i] !== Object.keys(val2)[i]) {
          return false;
        }
        if (typeof val1[Object.keys(val1)[i]] === "object") {
          return deepEqual(
            val1[Object.keys(val1)[i]],
            val2[Object.keys(val2)[i]]
          );
        }
        if (val1[Object.keys(val1)[i]] !== val2[Object.keys(val2)[i]]) {
          return false;
        }
      }
      return true;
    }
  } else {
    return val1 === val2;
  }
}

const object1 = { value1: 1, value2: "2", value3: { value1: 1 } };
const object2 = { value1: 1, value2: "2", value3: { value1: 1 } };
const object3 = { value1: 1, value2: "3", value3: { value1: 1 } };
const object4 = { value1: 1, value2: "2", value3: { value1: 2 } };
const object5 = { value1: 1, value2: "2", value4: { value1: 2 } };
const object6 = { value1: 1, value2: "2", value4: { value1: null } };
const object7 = { value1: 1, value2: "2", value4: { value1: null } };

const object9 = { value1: 1, value2: "2", value4: { value1: { value1: 1 } } };
const object10 = { value1: 1, value2: "2", value4: { value1: { value1: 1 } } };
const object11 = { value1: 1, value2: "2", value4: { value1: { value1: 2 } } };

const string1 = "value";
const string2 = "value";
const string3 = "another value";
const nullValue = null;

console.log(deepEqual(object1, object2)); //true
console.log(deepEqual(object1, object3)); //false
console.log(deepEqual(object1, object4)); //false
console.log(deepEqual(object4, object5)); //false
console.log(deepEqual(object5, object6)); //false
console.log(deepEqual(object6, object7)); //true
console.log();

console.log(deepEqual(string1, string2)); //true
console.log(deepEqual(string1, string3)); //false
console.log();

console.log(deepEqual(nullValue, nullValue)); //true
console.log(deepEqual(object1, nullValue)); //false
console.log();

console.log(deepEqual(object9, object10)); //true
console.log(deepEqual(object9, object11)); //false
