const common = require('../../../js/common');
with (common.setting) {
  MAX_RES = 10;
  MAX_EXP = 40;
  PAD_STR = '-';
}
const ____________________ = (p, l = common.setting.getTotalLength()) => common.separation(p, l);
const alert = (name, variable) => common.formattingLog(name, variable, common.setting);

// ________________________________________
function Person() { }

Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function () {
  console.log(this.name);
};
____________________(1); {
  let person1 = new Person();
  let person2 = new Person();

  alert('person1.hasOwnProperty("name")', person1.hasOwnProperty("name"));  // false
  alert('"name" in person1', "name" in person1);  // true
  console.log();

  person1.name = "Greg";
  alert('person1.name', person1.name);   // "Greg" - from instance
  alert('person1.hasOwnProperty("name")', person1.hasOwnProperty("name"));  // true
  alert('"name" in person1', "name" in person1);  // true
  console.log();

  alert('person2.name', person2.name);   // "Nicholas" - from prototype
  alert('person2.hasOwnProperty("name")', person2.hasOwnProperty("name"));  // false
  alert('"name" in person2', "name" in person2);  // true
  console.log();

  delete person1.name;
  alert('person1.name', person1.name);   // "Nicholas" - from the prototype
  alert('person1.hasOwnProperty("name")', person1.hasOwnProperty("name"));  // false
  alert('"name" in person1', "name" in person1);  // true 

} ____________________(2); {
  function hasPrototypeProperty(object, name) {
    return !object.hasOwnProperty(name) && (name in object);
  }
} ____________________(3); {
  let person = new Person();
  alert('hasPrototypeProperty(person, "name")', hasPrototypeProperty(person, "name"));  // true

  person.name = "Greg";
  alert('hasPrototypeProperty(person, "name")', hasPrototypeProperty(person, "name"));  // false     
  /**
   * In this code, the name property first exists on the prototype, so
   * hasPrototypeProperty() returns true. Once the name property is
   * overwritten, it exists on the instance, so hasPrototypeProperty()
   * returns false. Even though the name property still exists on the
   * prototype, it is no longer used because the instance property now
   * exists.
   */
} ____________________(4); {
  let keys = Object.keys(Person.prototype);
  alert('keys', keys);    // "name,age,job,sayName"
  let p1 = new Person();
  p1.name = "Rob";
  p1.age = 31;
  let p1keys = Object.keys(p1);
  alert('p1keys', p1keys);  // "name,age" 
  /**
   * Here, the keys variable is filled with an array containing "name",
   * "age", "job", and "sayName". This is the order in which they would
   * normally appear using for-in. When called on an instance of Person,
   * Object.keys() returns an array of name and age, the only two
   * instance properties.
   */
} ____________________(5); {
  let keys = Object.getOwnPropertyNames(Person.prototype);
  alert('keys', keys);   // "constructor,name,age,job,sayName"
  /**
   * Note the inclusion of the non-enumerable constructor property in the
   * list of results. Both Object.keys() and Object.getOwnPropertyNames()
   *  may be suitable replacements for using for-in.
   */
} ____________________('symbol-keyed properties', 60); {
  let
    k1 = Symbol('k1'),
    k2 = Symbol('k2');
  let o = {
    [k1]: 'k1',
    [k2]: 'k2'
  };
  console.log('Object.getOwnPropertySymbols(o):',
    Object.getOwnPropertySymbols(o));
  // [Symbol(k1), Symbol(k2)]
}