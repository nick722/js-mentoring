const SCRIPTS = require("./data/scripts");

// Write a function that computes the dominant writing direction in a string of
// text.
function computeDominantWritingDirection(text) {
  let scriptsAndNumberOfElementsInThatScipts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({ name }) => name != "none");

  let ltr = 0;
  let rtl = 0;
  let ttb = 0;

  scriptsAndNumberOfElementsInThatScipts.reduce((accum, script) => {
    if (script.direction === "rtl ") rtl += script.count;
    else if (script.direction === "ltr") ltr += script.count;
    else if (script.direction === "ttb") ttb += script.count;
  });
  console.log("ltr: ", ltr);
  return Math.max(ltr, rtl, ttb);
}

console.log(
  computeDominantWritingDirection('英国的狗说"woof", 俄罗斯的狗说"тяв"')
);

// Remember that each script object has a direction property that can be
// "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).

// The dominant direction is the direction of a majority of the characters that
// have a script associated with them.
//
// The characterScript and countBy functions
// defined earlier in the chapter are probably useful here.

/**
 * Figure out what script a piece of text is using
 * @param code
 * @returns {*}
 */
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}
// console.log(characterScript(121));
// → {name: "Latin", …}

/**
 * Count the characters that belong to each script.
 * @param {collection} items
 * @param {function} groupName - computes a group name for a given element.
 * @returns {Array} of objects, each of which names a group and tells you
 * the number of elements that were found in that group.
 */
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}
// console.log(countBy([1, 2, 3, 4, 5], n => n > 2));
//==============================================================
