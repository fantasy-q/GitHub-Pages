// Valid empty class definition
class Foo { }

// Valid class definition with constructor
class Bar {
  constructor() { }
}

// Valid class definition with getter
class Baz {
  get myBaz() { }
}

// Valid class definition with static method
class Qux {
  static myQux() { }
} 

let Person = class PersonName {
  identify() {
    console.log(Person.name, PersonName.name);
  }
}
let p = new Person();
p.identify();                 // PersonName, PersonName
console.log(Person.name);     // PersonName
// console.log(PersonName);   // ReferenceError: PersonName is not defined