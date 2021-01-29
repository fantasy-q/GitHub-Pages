const common = require('../../../js/common');
with (s = common.setting) {
  isShowLengthInfo = false;
}
const ____________________ = (p) => common.separation(p, s.getTotalLength());
const console = { log: (e, r) => common.formattingLog(e, r, s) };

class Person { }
____________________(1); {
  console.log('Person', Person);         // class Person {}
  console.log('typeof Person', typeof Person);  // function

  /**
   * The class identifier has a prototype property, and the prototype has a 
   * constructor property that refers back to the class itself:
   */

  console.log('Person.prototype', Person.prototype); // { constructor: f() }
  console.log('Person === Person.prototype.constructor',
    Person === Person.prototype.constructor);  // true}
} ____________________(2); {
  let p = new Person();

  console.log('p instanceof Person', p instanceof Person);  // true
  /** You have likely come to understand that the instanceof 
   * operator checks an instance’s prototype chain against a 
   * constructor function, which in this example would be 
   * checking the instance p against the constructor function 
   * Person, which appears to be a class. 
   * 
   * As shown earlier, the class behaves in the same way as a 
   * constructor function, and in the context of classes, the 
   * class itself is considered the constructor when new is 
   * applied to it. Importantly, the constructor method inside 
   * the class definition is not considered to be the constructor, 
   * and will return false when used with instanceof. If the 
   * constructor method is invoked directly, this is the same as 
   * using a non-class function constructor, and the instanceof 
   * convention will reverse:
   */

  let p1 = new Person();

  console.log('p1.constructor === Person', p1.constructor === Person);         // true
  console.log('p1 instanceof Person', p1 instanceof Person);              // true
  console.log('p1 instanceof Person.constructor', p1 instanceof Person.constructor);  // false

  let p2 = new Person.constructor();

  console.log('p2.constructor === Person', p2.constructor === Person);         // false 
  console.log('p2 instanceof Person', p2 instanceof Person);              // false
  console.log('p2 instanceof Person.constructor', p2 instanceof Person.constructor);  // true

} ____________________(3); {
  // Classes may be defined anywhere a function would, such as inside an array:
  let classList = [
    class {
      constructor(id) {
        this.id_ = id;
        console.log('`instance ${this.id_}`', `instance ${this.id_}`);
      }
    }
  ];

  function createInstance(classDefinition, id) {
    return new classDefinition(id);
  }

  let foo = createInstance(classList[0], 3141);  // instance 3141 
}