// Write a class Vec that represents a vector in two-dimensional space.
// It takes x and y parameters (numbers),
// which it should save to properties of the same name.
function Vec(x, y) {
  this.x = x;
  this.y = y;
}

//   Give the Vec prototype two methods, plus and minus,
// that take another vector as a parameter
// and return a new vector that has the sum or difference
// of the two vectors’ (this and the parameter) x and y values.

Vec.prototype.plus = function(vector) {
  return { x: this.x + vector.x, y: this.y + vector.y };
};

Vec.prototype.minus = function(vector) {
  return { x: this.x - vector.x, y: this.y - vector.y };
};

let vec = new Vec(10, 20);
let sum = vec.plus({ x: 5, y: 4 });
let diff = vec.minus({ x: 5, y: 4 });
// console.log(diff);

//   Add a getter property length to the prototype that computes the length of
// the vector—that is, the distance of the point (x, y) from the origin (0, 0).
Object.defineProperty(Vec.prototype, "length", {
  get: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
});

console.log(vec.length);
