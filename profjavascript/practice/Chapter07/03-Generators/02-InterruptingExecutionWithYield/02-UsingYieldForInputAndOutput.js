const ____________________ = require('../../../js/common').separation;

____________________(1); {
  function* generatorFn(initial) {
    console.log(initial);
    console.log(yield);
    console.log(yield);
  }

  let generatorObject = generatorFn('foo');

  generatorObject.next('bar');  // foo
  generatorObject.next('baz');  // baz
  generatorObject.next('qux');  // qux
} ____________________(2); {
  function* generatorFn() {
    return yield 'foo';
  }

  let generatorObject = generatorFn();

  console.log(generatorObject.next());       // { done: false, value: 'foo' }
  console.log(generatorObject.next('bar'));  // { done: true, value: 'bar' } 
} ____________________(3); {
  function* generatorFn() {
    for (let i = 0; ; ++i) {
      yield i;
    }
  }

  let generatorObject = generatorFn();

  console.log(generatorObject.next().value);  // 0
  console.log(generatorObject.next().value);  // 1
  console.log(generatorObject.next().value);  // 2
  console.log(generatorObject.next().value);  // 3
  console.log(generatorObject.next().value);  // 4
  console.log(generatorObject.next().value);  // 5 
  console.log();
  console.log(generatorObject.next());  // 0
  console.log(generatorObject.next());  // 1
  console.log(generatorObject.next());  // 2
  console.log(generatorObject.next());  // 3
  console.log(generatorObject.next());  // 4
  console.log(generatorObject.next());  // 5 
} ____________________(4); {
  function* nTimes(n) {
    for (let i = 0; i < n; ++i) {
      yield i;
    }
  }

  for (let x of nTimes(3)) {
    console.log(x);
  }
} ____________________(5); {
  function* nTimes(n) {
    let i = 0;
    while (n--) {
      yield i++;
    }
  }

  for (let x of nTimes(3)) {
    console.log(x);
  }
}