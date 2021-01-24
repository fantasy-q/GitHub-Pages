const __________________________________________________ = require('../../js/common').separation;

__________________________________________________('1. instance be iterated only once'); {
  class Counter {
    // Counter instance should iterate <limit> times
    constructor(limit) {
      this.count = 1;
      this.limit = limit;
    }

    next() {
      if (this.count <= this.limit) {
        return { done: false, value: this.count++ };
      } else {
        return { done: true, value: undefined };
      }
    }

    [Symbol.iterator]() {
      return this;
    }
  }

  let counter = new Counter(3);

  for (let i of counter) {
    console.log(i);
  }
  console.log();

  for (let i of counter) { console.log(i); }
  // (nothing logged)
} __________________________________________________('2. creating multiple iterators'); {
  class Counter {
    constructor(limit) {
      this.limit = limit;
    }

    [Symbol.iterator]() {
      let
        count = 1,
        limit = this.limit;
      return {
        next() {
          if (count <= limit) {
            return { done: false, value: count++ };
          } else {
            return { done: true, value: undefined };
          }
        }
      };
    }
  }

  let counter = new Counter(3);

  for (let i of counter) { console.log(i); }

  for (let i of counter) { console.log(i); }
} __________________________________________________(3); {
  let arr = ['foo', 'bar', 'baz'];
  let iter1 = arr[Symbol.iterator]();

  console.log(iter1[Symbol.iterator]);  // f values() { [native code] }

  let iter2 = iter1[Symbol.iterator]();

  console.log(iter1 === iter2);         // true
} __________________________________________________(4); {
  let arr = [3, 1, 4];
  let iter = arr[Symbol.iterator]();
  
  for (let item of arr) { console.log(item); }

  for (let item of iter) { console.log(item); }
}
