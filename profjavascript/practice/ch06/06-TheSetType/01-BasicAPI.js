const alert = console.log.bind(console);

const m = new Set();
console.log();

{
  const s1 = new Set(["val1", "val2", "val3"]);
  alert(s1.size);  // 3

  // Initialize set with custom-defined iterator
  const s2 = new Set({
    [Symbol.iterator]: function* () {
      yield "val1";
      yield "val2";
      yield "val3";
    }
  });
  alert(s2.size);  // 3
}
console.log();

{
  const s = new Set();

  alert(s.has("Matt"));     // false
  alert(s.size);            // 0

  s.add("Matt")
    .add("Frisbie");

  alert(s.has("Matt"));     // true
  alert(s.size);            // 2

  s.delete("Matt");

  alert(s.has("Matt"));     // false 
  alert(s.has("Frisbie"));  // true 
  alert(s.size);            // 1

  s.clear();  // destroys all values in this Set instance 

  alert(s.has("Matt"));     // false 
  alert(s.has("Frisbie"));  // false 
  alert(s.size);            // 0
}
console.log();

{
  const s = new Set().add("val1");

  s.add("val2")
    .add("val3");

  alert(s.size);  // 3
}
console.log();

{
  const s = new Set();

  const functionVal = function () { };
  const symbolVal = Symbol();
  const objectVal = new Object();

  s.add(functionVal);
  s.add(symbolVal);
  s.add(objectVal);

  alert(s.has(functionVal));    // true
  alert(s.has(symbolVal));      // true
  alert(s.has(objectVal));      // true

  // SameValueZero checks mean separate instances will not collide
  alert(s.has(function () { }));  // false
}
console.log();

{
  const s = new Set();

  const objVal = {},
    arrVal = [];

  s.add(objVal);
  s.add(arrVal);

  objVal.bar = "bar";
  arrVal.push("bar");

  alert(s.has(objVal));  // true
  alert(s.has(arrVal));  // true 
}