// The standard JavaScript environment provides another data structure called
// Set. Like an instance of Map, a set holds a collection of values. Unlike Map, it
// does not associate other values with those—it just tracks which values are part
// of the set. A value can be part of a set only once—adding it again doesn’t have
// any effect.

//   Write a class called Group (since Set is already taken).
// Like Set, it has add,   delete, and has methods.

// Its constructor creates an empty group,
// add adds a value to the group (but only if it isn’t already a member),
// delete removes its argument from the group (if it was a member),
// and has returns a Boolean value indicating whether its argument
// is a member of the group.

//   Use the === operator, or something equivalent such as indexOf, to determine
// whether two values are the same.

//todo WHAT?!
//   Give the class a static from method that takes an iterable object as argument
// and creates a group that contains all the values produced by iterating over it.

class Group {
  static from(iterableObject) {
    const group = new Group();
    for (let item of iterableObject) {
      group.add(item);
    }
    return group;
  }

  constructor() {
    this.group = [];
  }
  add(value) {
    if (!this.group.includes(value)) this.group.push(value);
  }
  delete(value) {
    this.group = this.group.filter(val => val !== value);
  }
  has(value) {
    return this.group.includes(value);
  }
}

let group = new Group([]);
// group.add(1);
// group.add(2);
// group.add(1);
// group.delete(1);
// group.has(1);
const groupFrom = Group.from([3, 4, 4]);
console.log(groupFrom);

// console.log(group);
// console.log(group.has(2));
