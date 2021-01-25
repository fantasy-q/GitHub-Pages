const __________________________________________________ = require('../../js/common').separation;

class Counter {
  constructor(limit) {
    this.limit = limit;
  }

  [Symbol.iterator]() {
    let count = 1,
      limit = this.limit;
    return {
      next() {
        if (count <= limit) {
          return { done: false, value: count++ };
        } else {
          return { done: true };
        }
      },
      return() {
        console.log('Exiting early');
        return { done: true };
      }
    };
  }
}
__________________________________________________('break');
let counter1 = new Counter(5);

for (let i of counter1) {
  if (i > 2) {
    break;
  }
  console.log(i);
}

// for (let i of counter1) {
//   console.log(i);
// }
__________________________________________________('throw');
let counter2 = new Counter(5);

try {
  for (let i of counter2) {
    if (i > 2) {
      throw 'err';
    }
    console.log(i);
  }
} catch (e) { }

// for (let i of counter2) {
//   console.log(i);
// }
__________________________________________________('not consume all');
let counter3 = new Counter(5);

console.log(...counter3);
let [v1, v2, v3, v4, v5] = counter3;
console.log([v1, v2, v3, v4, v5]);

let [a, b] = counter3;

__________________________________________________(2);
let arr = [1, 2, 3, 4, 5];
let iter = arr[Symbol.iterator]();
console.log('1st iterator');
for (let i of iter) {
  console.log(i);
  if (i > 2) {
    break
  }
}
console.log('2nd iterator');
for (let i of iter) {
  console.log(i);
}
