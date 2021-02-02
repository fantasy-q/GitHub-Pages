let p1 = new Promise((resolve, reject) => reject());
let p2 = Promise.reject();

console.log(p1);
console.log(p2);