const alert = console.log.bind(console);

const wm = new WeakMap();
alert(wm);
console.log();

const
  key1 = { id: 1 },
  key2 = { id: 2 },
  key3 = { id: 3 };
alert(key1, typeof key1);
// Initialize WeakMap with nested arrays
const wm1 = new WeakMap([
  [key1, "val1"],
  [key2, "val2"],
  [key3, "val3"]
]);
alert(wm1.get(key1));  // val2
alert(wm1.get(key2));  // val2
alert(wm1.get(key3));  // val3
alert(wm1);
/** !! p.207
  * it works according to book, but throw an error in practice 
  */
// const stringKey = new String("key1");
// alert(stringKey, typeof stringKey)
// alert(stringKey[0])
// alert(stringKey.String)

// const wm3 = new WeakMap([
//   stringKey, "val1"
// ]);
// alert(wm3.get(stringKey));  // "val1"
console.log();

alert(wm.has(key1));  // false
alert(wm.get(key1));  // undefined

wm.set(key1, "Matt")
  .set(key2, "Frisbie");

alert(wm.has(key1));  // true
alert(wm.get(key1));  // Matt

wm.delete(key1);  // deletes only this key/value pair

alert(wm.has(key1));  // false 
alert(wm.has(key2));  // true 

