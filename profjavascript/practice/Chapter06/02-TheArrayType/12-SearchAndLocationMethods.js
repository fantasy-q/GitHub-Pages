const alert = args => console.log(args);
const title = args => console.log(args.padEnd(40, '-'));

title('Strict Equivalence');
{
  let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];

  alert(numbers.indexOf(4)); // 3
  alert(numbers.lastIndexOf(4)); // 5
  alert(numbers.includes(4)); // true

  alert(numbers.indexOf(4, 4)); // 5
  alert(numbers.lastIndexOf(4, 4)); // 3
  alert(numbers.includes(4, 7)); // false

  let person = { name: "Nicholas" };
  let people = [{ name: "Nicholas" }];
  let morePeople = [person];

  alert(people.indexOf(person)); // -1
  alert(morePeople.indexOf(person)); // 0
  alert(people.includes(person)); // false
  alert(morePeople.includes(person)); // true
}
title('Predicate Search');
{
  const people = [
    {
      name: "Matt",
      age: 27
    },
    {
      name: "Nicholas",
      age: 29
    },
    {
      name: "Greg",
      age: 33
    }
  ];

  alert(people.find((element, index, array) => element.age < 28));
  alert(people.findIndex((element, index, array) => element.age < 28));

  alert(people.find((element, index, array) => element.age > 28));
  alert(people.findIndex((element, index, array) => element.age > 28));

  alert(people.find((element, index, array) => index > 99));

  alert(people.find((element, index, array) => array));
}