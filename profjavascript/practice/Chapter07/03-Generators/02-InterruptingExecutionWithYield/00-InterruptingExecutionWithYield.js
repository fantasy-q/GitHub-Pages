const ____________________ = require('../../../js/common').separation;
____________________(1); {
  function* generatorFn() {
    yield;
  }

  let generatorObject = generatorFn();

  console.log(generatorObject.next());  // { done: false, value: undefined } 
  console.log(generatorObject.next());  // { done: true, value: undefined } 

} ____________________(2); {
  function* generatorFn() {
    yield 'foo';
    yield 'bar';
    return 'baz';
  }

  let generatorObject = generatorFn();

  console.log(generatorObject.next());  // { done: false, value: 'foo' } 
  console.log(generatorObject.next());  // { done: false, value: 'bar' } 
  console.log(generatorObject.next());  // { done: true, value: 'baz' } 

} ____________________(3); {
  function* generatorFn() {
    yield 'foo';
    yield 'bar';
    return 'baz';
  }

  let generatorObject1 = generatorFn();
  let generatorObject2 = generatorFn();


  console.log(generatorObject1.next());  // { done: false, value: 'foo' } 
  console.log(generatorObject2.next());  // { done: false, value: 'foo' } 
  console.log(generatorObject2.next());  // { done: false, value: 'bar' } 
  console.log(generatorObject1.next());  // { done: false, value: 'bar' } 
}
