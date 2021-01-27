const separation = require('../../../js/common').separation;
const ____________________ = param => separation(param, 90);
const alert = (name, variable) => {
  const result = String(variable).padStart(22, ' ');
  const exp = String(name).split(/\s/);
  let expression = '';
  exp.forEach((value, index) => {
    let string = '';
    switch (index) {
      case 0:
        string = value.padStart(40, ' ');
        break;
      case 1:
        string = ` ${value.padEnd(3, ' ')} `;
        break;
      default:
        string = value;
    }
    expression += string;
  })
  console.log(result + ':', expression);
}

____________________(1);
/**
 * Constructor function can exist as function expression
 * or function declaration, so both of these are suitable:
 *   function Person {}
 *   let Person = function() {}
 */

function Person() { }
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function () {
  console.log(this.name);
};
alert('Person', Person);

/** 
 * Upon declaration, the constructor function already
 * has a prototype object associated with it:
 */
alert('typeof Person.prototype', typeof Person.prototype);
alert('Person.prototype', Person.prototype);
// {
//   constructor: f Person(),
//   __proto__: Object
// }

/**
 * As mentioned previously, the constructor function has
 * a 'prototype' reference to the prototype object, and
 * the prototype object has a 'constructor' reference to
 * the constructor function. These references are cyclical:
 */
alert('Person.prototype.constructor === Person',
  Person.prototype.constructor === Person);  // true

/**
 * Any normal prototype chain will terminate at the Object prototype.
 * The prototype of the Object prototype is null.
 */
alert('Person.prototype.__proto__ === Object.prototype',
  Person.prototype.__proto__ === Object.prototype);    // true
alert('Person.prototype.__proto__.constructor === Object',
  Person.prototype.__proto__.constructor === Object);  // true
alert('Person.prototype.__proto__.__proto__ === null',
  Person.prototype.__proto__.__proto__ === null);      // true

alert('Person.prototype.__proto__', Person.prototype.__proto__);
// {
//   constructor: f Object(),
//   toString: ...
//   hasOwnProperty: ...
//   isPrototypeOf: ...
//   ...
// }

let
  person1 = new Person(),
  person2 = new Person();

/**
 * The constructor, the prototype object, and an instance
 * are three completely distinct objects:
 */
alert('person1 !== Person', person1 !== Person);                     // true
alert('person1 !== Person.prototype', person1 !== Person.prototype); // true
alert('Person.prototype !== Person', Person.prototype !== Person);   // true

/**
  * An instance is linked to the prototype through __proto__, which
  * is the literal manifestation of the [[Prototype]] hidden property.
  *
  * A constructor is linked to the prototype through the constructor property.
  * 
  * An instance has no direct link to the constructor, only through the prototype.
  */
alert('person1.__proto__ === Person.prototype',
  person1.__proto__ === Person.prototype);    // true
alert('person1.__proto__.constructor === Person',
  person1.__proto__.constructor === Person);  // true

/**
 * Two instances created from the same constructor function will share
 * a prototype object:
 */
alert('person1.__proto__ === person2.__proto__',
  person1.__proto__ === person2.__proto__);  // true 

/**
 * instanceof will check the instance's prototype chain against the
 * prototype property of a constructor function:
 */
alert('person1 instanceof Person', person1 instanceof Person);   // true
alert('person1 instanceof Object', person1 instanceof Object);   // true
alert('Person.prototype instanceof Object', Person.prototype instanceof Object);  // true 
____________________(2);

alert('Person.prototype.isPrototypeOf(person1)',
  Person.prototype.isPrototypeOf(person1));  // true
alert('Person.prototype.isPrototypeOf(person2)',
  Person.prototype.isPrototypeOf(person2));  // true
____________________(3);
alert('Object.getPrototypeOf(person1) == Person.prototype',
  Object.getPrototypeOf(person1) == Person.prototype);  // true
alert('Object.getPrototypeOf(person1).name',
  Object.getPrototypeOf(person1).name);                 // "Nicholas"

____________________(4);
let biped = {
  numLegs: 2
};
let person = {
  name: 'Matt'
};

Object.setPrototypeOf(person, biped);

alert('person.name', person.name);         // Matt
alert('person.numLegs', person.numLegs);   // 2
alert('Object.getPrototypeOf(person) === biped',
  Object.getPrototypeOf(person) === biped); // true
