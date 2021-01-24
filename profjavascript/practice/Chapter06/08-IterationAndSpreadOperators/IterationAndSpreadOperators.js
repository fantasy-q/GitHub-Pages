const SEPARATION = param => {
  const Length = 50;
  param = String(param ? ` ${param} ` : '');
  console.log(param.padStart((Length + param.length) / 2, '-').padEnd(Length, '-') + '\n');
};

{
  let iterableThings = [
    Array.of(1, 2),
    typedArr = Int16Array.of(3, 4),
    new Map([[5, 6], [7, 8]]),
    new Set([9, 10])
  ];

  for (const iterableThing of iterableThings) {
    for (const x of iterableThing) {
      console.log(x);
    }
  }
  console.log('iterableThings is', iterableThings.constructor.name);
  console.log();
  iterableThings.forEach((val) => console.log(val));
  console.log('why the outputs different?'.padStart(50, '* '));
  iterableThings.forEach((val, key) => console.log(key + ': ' + val));
} SEPARATION(1);

{
  let arr1 = [1, 2, 3];
  let arr2 = [...arr1];

  console.log(arr1);           // [1, 2, 3]
  console.log(arr2);           // [1, 2, 3]
  console.log(arr1 === arr2);  // false
} SEPARATION(2);

{
  let map1 = new Map([[1, 2], [3, 4]]);
  let map2 = new Map(map1);

  console.log(map1);  // Map {1 => 2, 3 => 4}
  console.log(map2);  // Map {1 => 2, 3 => 4}
} SEPARATION(3);

{
  let arr1 = [1, 2, 3];
  let arr2 = [0, ...arr1, 4, 5];

  console.log(arr2);  // [0, 1, 2, 3, 4, 5] 
} SEPARATION(4);

{
  let arr1 = [{}];
  let arr2 = [...arr1];

  arr1[0].foo = 'bar';
  console.log(arr2[0]);  // { foo: 'bar' }
  console.log(arr1 === arr2);  // false
  console.log(arr1[0] === arr2[0]);  // true
} SEPARATION(5);

{
  let arr1 = [1, 2, 3, 3];

  // Copy array into typed array
  let typedArr1 = Int16Array.of(...arr1);
  let typedArr2 = Int16Array.from(arr1);
  console.log(typedArr1); // Int16Array [1, 2, 3]
  console.log(typedArr2); // Int16Array [1, 2, 3]

  // Copy array into map
  let map = new Map(arr1.map((x) => [x, 'val' + x]));
  console.log(map); // Map {1 => ‘val 1’, 2 => ‘val 2’, 3 => ‘val 3’}

  // Copy array in to set
  let set = new Set(typedArr2);
  console.log(set); // Set {1, 2, 3}

  // Copy set back into array
  let arr2 = [...set];
  console.log(arr2); // [1, 2, 3]
} SEPARATION(6);
