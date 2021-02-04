function createComparisonFunction(propertyName) {
  return function (object1, object2) {
    let value1 = object1[propertyName];
    let value2 = object2[propertyName];

    if (value1 < value2) {
      return -1;
    } else if (value1 > value2) {
      return 1;
    } else {
      return 0;
    }
  };
}

// 3
{
  let compare = createComparisonFunction('name');
  let result = compare({ name: 'Nicholas' }, { name: 'Matt' });
  console.log(result);
}
// 4
{// create function
  let compareNames = createComparisonFunction('name');

  // call function
  let result = compareNames({ name: 'Nicholas' }, { name: 'Matt' });

  // dereference function - memory can now be reclaimed
  compareNames = null;

  console.log(result);
}