{
  function Person() { }

  Person.prototype = {
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    sayName() {
      console.log(this.name);
    }
  };

  let friend = new Person();

  console.log('    friend instanceof Object:', friend instanceof Object);      // true
  console.log('    friend instanceof Person:', friend instanceof Person);      // true
  console.log('friend.constructor == Person:', friend.constructor == Person);  // false
  console.log('friend.constructor == Object:', friend.constructor == Object);  // true
}
console.log();
/**
 * Here, instanceof still returns true for both Object and Person, 
 * but the constructor property is now equal to Object instead of 
 * Person.If the constructor’s value is important, you can set it 
 * specifically back to the appropriate value, as shown here:
 */
{
  function Person() { }

  Person.prototype = {
    constructor: Person,
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    sayName() {
      console.log(this.name);
    }
  };
  let friend = new Person();

  console.log('    friend instanceof Object:', friend instanceof Object);      // true
  console.log('    friend instanceof Person:', friend instanceof Person);      // true
  console.log('friend.constructor == Person:', friend.constructor == Person);  // false
  console.log('friend.constructor == Object:', friend.constructor == Object);  // true
  console.log();
  console.log('constructor',
    Object.getOwnPropertyDescriptor(Person.prototype, 'constructor'));
} console.log(); {

  function Person() { }

  Person.prototype = {
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    sayName() {
      console.log(this.name);
    }
  };
  // restore the constructor
  Object.defineProperty(Person.prototype, "constructor", {
    // enumerable: false,
    value: Person
  });

  console.log('constructor',
    Object.getOwnPropertyDescriptor(Person.prototype, 'constructor'));
}