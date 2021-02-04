function compare(value1, value2) {
  alert('compare() this', this);
  alert('compare.arguments', arguments);
  alert('value1', value1);
  alert('value2', value2);
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
}

separation(1);
let result = compare(5, 10);

alert('result', result);

