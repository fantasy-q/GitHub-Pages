const ____________________ = require('../../js/common').separation;

function object(o) {
  function F() { }
  F.prototype = o;
  return new F();
}
/**
 * The object() function creates a temporary constructor, assigns a
 * given object as the constructor’s prototype, and returns a new
 * instance of the temporary type. Essentially, object() performs a
 * shadow copy of any object that is passed into it. Consider the
 * following:
 */

____________________(1); {
  let person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
  };

  let anotherPerson = object(person);
  anotherPerson.name = "Greg";
  anotherPerson.friends.push("Rob");

  console.log(person.name);
  console.log(person.friends);

  let yetAnotherPerson = object(person);
  yetAnotherPerson.name = "Linda";
  yetAnotherPerson.friends.push("Barbie");

  console.log(person.name);
  console.log(person.friends);   // "Shelby,Court,Van,Rob,Barbie"
} ____________________(2); {
  let person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
  };

  let anotherPerson = Object.create(person);
  anotherPerson.name = "Greg";
  anotherPerson.friends.push("Rob");

  let yetAnotherPerson = Object.create(person);
  yetAnotherPerson.name = "Linda";
  yetAnotherPerson.friends.push("Barbie");

  console.log(person.friends);   // "Shelby,Court,Van,Rob,Barbie"
} ____________________(3); {
  let person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
  };
  
  let anotherPerson = Object.create(person, {
    name: {
      value: "Greg"
    }
  });
  console.log(anotherPerson.name);  // "Greg"         

}