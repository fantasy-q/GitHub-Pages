let person = {
  name: 'Matt',
  age: 27,
  job: {
    title: 'Software engineer'
  }
};

let personCopy = {};

// 使用括号创建语境, 解释为对象
(
  {
    name: personCopy.name,
    age: personCopy.age,
    job: personCopy.job
  } = person
);

console.log('person =', person);
console.log('personCopy =', personCopy);
console.log();

// Because an object reference was assigned into personCopy, changing a property
// inside the person.job object will be propagated to personCopy:
person.job.title = 'Hacker'

console.log('person =', person);
console.log('personCopy =', personCopy);
console.log();

// Declares 'title' variable and assigns person.job.title as its value
let { job: { title } } = person;
let name = person;
let { age } = person;

console.log(title);
console.log(name);
console.log(age); 
