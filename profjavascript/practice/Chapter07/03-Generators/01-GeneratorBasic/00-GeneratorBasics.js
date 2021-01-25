const ____________________ = require('../../../js/common').separation;

____________________('Generator declaration'); {
  {// Generator function declaration
    function* generatorFn() { }
  }

  { // Generator function expression
    let generatorFn = function* () { }
  }

  { // Object literal method generator function
    let foo = {
      * generatorFn() { }
    }
  }

  { // Class instance method generator function
    class Foo {
      * generatorFn() { }
    }
  }

  { // Class static method generator function
    class Bar {
      static * generatorFn() { }
    }
  }
} ____________________('Equivalent generator functions'); {
  // Equivalent generator functions:
  function* generatorFnA() { }
  function* generatorFnB() { }
  function* generatorFnC() { }

  // Equivalent generator methods:
  class Foo {
    *generatorFnD() { }
    * generatorFnE() { }
  }
} ____________________(3); {
  function* generatorFn() { }

  const g = generatorFn();

  console.log(g);       // generatorFn {<suspended>}
  console.log(g.next);  // f next() { [native code] }

} ____________________(4); {
  function* generatorFn() { }

  let generatorObject = generatorFn();

  console.log(generatorObject);         // generatorFn {<suspended>}
  console.log(generatorObject.next());  // { done: true, value: undefined } 
} ____________________(5); {
  function* generatorFn() {
    return 'foo';
  }

  let generatorObject = generatorFn();

  console.log(generatorObject);         // generatorFn {<suspended>}
  console.log(generatorObject.next());  // { done: true, value: 'foo' } 
} ____________________(6); {
  function* generatorFn() {
    console.log('foobar');
  }

  // Nothing is logged yet when the generator function is initially invoked
  let generatorObject = generatorFn();

  generatorObject.next();  // foobar 
} ____________________(7); {
  function* generatorFn() { }
  console.log(generatorFn);
  // f* generatorFn() {}
  console.log(generatorFn()[Symbol.iterator]);
  // f [Symbol.iterator]() {native code}
  console.log(generatorFn());
  // generatorFn {<suspended>}
  console.log(generatorFn()[Symbol.iterator]());
  // generatorFn {<suspended}
  const g = generatorFn();
  console.log(g === g[Symbol.iterator]());
  // true
}