let p1 = new Promise((resolve, reject) => resolve());
let p2 = Promise.resolve();

console.log(p1);
console.log(p2);
