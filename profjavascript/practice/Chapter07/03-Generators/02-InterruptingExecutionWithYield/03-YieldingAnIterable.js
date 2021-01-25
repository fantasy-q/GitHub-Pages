const ____________________ = require('../../../js/common').separation;

____________________(1); {
  // generatorFn is equivalent to:
  // function* generatorFn() {
  //   for (const x of [1, 2, 3]) {
  //     yield x;
  //   }
  // }

  function* generatorFn() {
    yield* [1, 2, 3];
  }

  let generatorObject = generatorFn();

  for (const x of generatorFn()) {
    console.log(x);
  }
} ____________________(2); {
  function* generatorFn() {
    yield* [1, 2];
    yield* [3, 4];
    yield* [5, 6];
  }

  for (const x of generatorFn()) {
    console.log(x);
  }
} ____________________(3); {
  function* generatorFnA() {
    for (const x of [1, 2, 3]) {
      yield x;
    }
  }

  for (const x of generatorFnA()) {
    console.log(x);
  }

  function* generatorFnB() {
    yield* [1, 2, 3];
  }

  for (const x of generatorFnB()) {
    console.log(x);
  }
} ____________________(4); {
  function* generatorFn() {
    console.log('iter value:', yield* [1, 2, 3]);
  }

  for (const x of generatorFn()) {
    console.log('value:', x);
  }
} ____________________(5); {
  function* innerGeneratorFn() {
    yield 'foo';
    return 'bar';
  }
  function* outerGeneratorFn(genObj) {
    console.log('iter value:', yield* innerGeneratorFn());
  }
  for (const x of outerGeneratorFn()) {
    console.log('value:', x);
  }
}