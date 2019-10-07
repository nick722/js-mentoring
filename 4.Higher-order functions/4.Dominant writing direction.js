const SCRIPTS = require("./data/scripts");

// Write a function that computes the dominant writing direction in a string of
// text.
function computeDominantWritingDirection(text) {
  let scriptsAndNumberOfElements = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({ name }) => name != "none");

  const directions = {
    ltr: 0,
    rtl: 0,
    ttb: 0
  };

  let total = scriptsAndNumberOfElements.reduce((accum, curr) => {
    let matchingScript = SCRIPTS.filter(s => {
      return s.name === curr.name;
    });

    if (matchingScript[0].direction === "ltr") directions.ltr += curr.count;
    if (matchingScript[0].direction === "rtl") directions.rtl += curr.count;
    if (matchingScript[0].direction === "ttb") directions.ttb += curr.count;
  }, 0);

  let maxValue = Math.max(directions.rtl, directions.ltr, directions.ttb);

  let dominantDirection = Object.keys(directions).find(
    key => directions[key] === maxValue
  );

  return dominantDirection;
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

// вызвать строку в контектсте массива
// перебрать строку
// с помощью рекурсии
