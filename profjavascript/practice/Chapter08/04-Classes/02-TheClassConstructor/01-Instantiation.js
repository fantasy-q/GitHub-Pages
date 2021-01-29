const ____________________ = require('../../../js/common').separation;

____________________(1); {
  class Animal { }

  class Person {
    constructor() {
      console.log('person ctor');
    }
  }

  class Vegetable {
    constructor() {
      this.color = 'orange';
    }
  }

  let a = new Animal();

  let p = new Person();  // person ctor

  let v = new Vegetable();
  console.log(v.color);  // orange
} ____________________(2); {
  class Person {
    constructor(name) {
      console.log(arguments);
      console.log(arguments.length);
      this.name = name || null;
    }
  }

  let p1 = new Person;          // 0
  console.log(p1.name);         // null

  let p2 = new Person();        // 0
  console.log(p2.name);         // null

  let p3 = new Person('Jake');  // 1
  console.log(p3.name);         // Jake 
} ____________________(3); {
  class Person {
    constructor(override) {
      this.foo = 'foo';
      if (override) {
        return {
          bar: 'bar'
        };
      }
    }
  }

  let p1 = new Person(),
    p2 = new Person(true);

  console.log(p1);                    // Person{ foo: 'foo' }
  console.log(p1 instanceof Person);  // true

  console.log(p2);                    // { bar: 'bar' }
  console.log(p2 instanceof Person);  // false 
  /**
   * One major departure from function constructors is that 
   * the use of the new operator with class constructors is 
   * mandatory. With function constructors, when electing not 
   * to use the new operator, the constructor would use the 
   * global this value—typically the window object—inside the 
   * constructor. With class constructors, neglecting to use 
   * the new operator will throw an error:
  */
} ____________________(4); {
  function Person() { }

  class Animal { }

  // Constructs instance using window as 'this'
  let p = Person();

  let a = Animal();
  // TypeError: class constructor Animal cannot be invoked without 'new'
}