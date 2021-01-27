let person = {
  name: 'Matt',
  age: 27
};
let personName, personBar, personAge;

try {
  // person.foo is undefined, so this will throw an error
  ({ name: personName, foo: { bar: personBar }, age: personAge } = person);
} catch (e) { }
console.log(personName, personBar, personAge);
// Matt, undefined, undefined