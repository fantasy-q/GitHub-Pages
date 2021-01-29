function object(o) {
  function F() { }
  F.prototype = o;
  return new F();
}

function createAnother(original) {
  let clone = object(original);  // create a new object by calling a function
  clone.sayHi = function() {     // augment the object in some way
    console.log("hi");
  };
  return clone;           // return the object
}

let person = {
  name: "Nicholas",
  friends: ["Shelby", "Court", "Van"]
};

let anotherPerson = createAnother(person);
anotherPerson.sayHi();  // "hi"
/**
 * The code in this example returns a new object based on person.
 * The anotherPerson object has all of the properties and methods
 * of person but adds a new method called sayHi().
 */

