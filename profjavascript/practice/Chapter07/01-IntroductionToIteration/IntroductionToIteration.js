for (let i = 1; i <= 10; ++i) {
  console.log(i);
}
console.log();

let collection = ['foo', 'bar', 'baz'];

for (let index = 0; index < collection.length; ++index) {
  console.log(collection[index]);
}
console.log();

collection.forEach((item) => console.log(item));
// foo
// bar
// baz

/**
 * This solves the problem of separately tracking an index
 * and retrieving items via the array object.However,
 * there is no way to terminate this iteration,
 * the method is limited to arrays, and the callback structure is unwieldy.
 */
