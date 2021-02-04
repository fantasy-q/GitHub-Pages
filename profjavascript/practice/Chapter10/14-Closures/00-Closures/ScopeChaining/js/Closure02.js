function createComparisonFunction(propertyName) {
  alert('createComparisonFunction() this', this);
  alert('createComparisonFunction.arguments', arguments);
  alert('propertyName', propertyName);

  return function (object1, object2) {
    alert('createComparisonFunction => f().arguments', arguments);
    alert('object1', object1);
    alert('object2', object2);
    let value1 = object1[propertyName];
    alert('value1 = object1[propertyName]', value1);
    let value2 = object2[propertyName];
    alert('value2 = object1[propertyName]', value2);

    if (value1 < value2) {
      console.log('value1 < value2 => -1');
      return -1;
    } else if (value1 > value2) {
      console.log('value1 > value2 => 1');
      return 1;
    } else {
      console.log('value1 = value2 => 0');
      return 0;
    }
  };
}

separation(2); {
  let compare = createComparisonFunction('name');
  let result = compare({ name: 'Nicholas' }, { name: 'Matt' });

  alert('result', result);
}

separation(3); {
  let compareNames = createComparisonFunction('name');
  alert('compareNames', compareNames);

  // call function
  let result = compareNames({ name: 'Nicholas' }, { name: 'Matt' });

  // dereference function - memory can now be reclaimed
  compareNames = null;

  alert('compareNames', compareNames);
  alert('result', result);
}
separation();