const alert = args => console.log(args);

let values = [1, 2, 3, 4, 5];
/**
 * privious value
 * current value
 * item’s index
 * array object
 */

var sum = values.reduce((prev, cur, index, array) => prev + cur);
alert(sum);  // 15

var sum = values.reduceRight(function (prev, cur, index, array) {
  return prev + cur;
});
alert(sum); // 15

const reducer = (prev, cur, index, array) => cur + prev;
alert(values.reduce(reducer));

var one2ten = new Array(10);
one2ten.fill(1);
alert(one2ten)
one2ten.reduce((prev, cur, index, array) => array[index] = prev + cur);
alert(one2ten);
one2ten.reduce((prev, cur, index, array) => array[index] = prev + cur);
alert(one2ten);

let a1 = [1];
let a2 = [1, 2];
let a3 = [1, 2, 3];

alert(a1.reduce((prev, cur, index, array) => prev));
alert(a1.reduce((prev, cur, index, array) => cur));
alert(a1.reduce((prev, cur, index, array) => prev + cur));
// alert(a2.reduce((prev, cur, index, array) => prev))
// alert(a2.reduce((prev, cur, index, array) => cur))
// alert(a3.reduce((prev, cur, index, array) => prev))
// alert(a3.reduce((prev, cur, index, array) => cur))