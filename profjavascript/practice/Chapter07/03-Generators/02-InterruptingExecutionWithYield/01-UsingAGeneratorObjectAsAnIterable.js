function* generatorFn() {
  yield 1;
  yield 2;
  yield 3;
}

for (const x of generatorFn()) {
  console.log(x);
}
console.log();

function* nTimes(n) {
  while (n--) {
    yield;
  }
}

for (let _ of nTimes(3)) {
  console.log('foo');
}

