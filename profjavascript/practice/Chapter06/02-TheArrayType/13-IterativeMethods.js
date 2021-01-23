const alert = args => console.log(args);

let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
console.log(numbers, 'item > 2');

console.log('every true:');
let everyResult = numbers.every((item, index, array) => item > 2);
alert(everyResult);  // false

console.log('some true:');
let someResult = numbers.some((item, index, array) => item > 2);
alert(someResult);   // true

console.log('filter(item > 2):');
let filterResult = numbers.filter((item, index, array) => item > 2);
alert(filterResult);   // [3,4,5,4,3]

console.log('map(item * 2):');

let mapResult = numbers.map((item, index, array) => item * 2);
alert(mapResult);   // [2,4,6,8,10,8,6,4,2]

numbers.forEach((item, index, array) => {
  // do something here
});