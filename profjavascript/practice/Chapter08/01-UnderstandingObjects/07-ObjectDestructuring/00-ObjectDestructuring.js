const ________________________________________ = require('../../../js/common').separation;
let person = {
  name: 'Matt',
  age: 27
};

{
  ________________________________________('1.1 Without object destructuring'); {
    let
      personName = person.name,
      personAge = person.age;

    console.log(personName);  // Matt
    console.log(personAge);   // 27
  } ________________________________________('1.2 With object destructuring'); {
    // Second, using object destructuring:
    let { name: personName, age: personAge } = person;

    console.log(personName);  // Matt
    console.log(personAge);   // 27 
  }

} ________________________________________('2 Destructuring + Shorthand'); {
  let { name, age } = person;

  console.log(name);  // Matt
  console.log(age);   // 27 

} ________________________________________('3 ignoring properties assigns undefined'); {
  let { name, job } = person;

  console.log(name);  // Matt
  console.log(job);   // undefined

} ________________________________________('4  define default values'); {
  let { name, job = 'Software engineer' } = person;

  console.log(name);  // Matt
  console.log(job);   // Software engineer

} ________________________________________('5 Cannot be destructured '); {
  let { length } = 'foobar';
  console.log(length);        // 6

  let { constructor: c } = 4;
  console.log(c === Number);  // true

  // null and undefined cannot be destructured
  let { _ } = null;           // TypeError
  let { _ } = undefined;      // TypeError 
}
