{
  class Person {
    constructor() {
      // Everything added to 'this' will exist on each individual instance
      this.locate = () => console.log('instance');
    }

    // Everything defined in the class body is defined on the class prototype object
    locate() {
      console.log('prototype');
    }
  }

  let p = new Person();

  p.locate();                 // instance
  Person.prototype.locate();  // prototype
}console.log();

// class Person {
//   name: 'Jake'
// }
// Uncaught SyntaxError: Unexpected token :
{
  const symbolKey = Symbol('symbolKey');

  class Person {
    stringKey() {
      console.log('invoked stringKey');
    }
    [symbolKey]() {
      console.log('invoked symbolKey');
    }
    ['computed' + 'Key']() {
      console.log('invoked computedKey');
    }
  }

  let p = new Person();

  p.stringKey();    // invoked stringKey
  p[symbolKey]();   // invoked symbolKey
  p.computedKey();  // invoked computedKey 
}console.log();

{
  class Person {
    set name(newName) {
      this.name_ = newName;
    }
    get name() {
      return this.name_;
    }
  }
  let p = new Person();
  p.name = 'Jake';
  console.log(p.name); // Jake 
}