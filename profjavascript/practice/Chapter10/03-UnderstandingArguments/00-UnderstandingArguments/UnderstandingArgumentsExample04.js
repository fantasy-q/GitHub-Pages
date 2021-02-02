function doAdd() {
  if (arguments.length === 1) {
    console.log(arguments[0] + 10);
  } else if (arguments.length === 2) {
    console.log(arguments[0] + arguments[1]);
  } else {
    console.log('too many arguments');
  }
}
                   
doAdd(10);        // 20
doAdd(30, 20);    // 50

doAdd(60, 50, 40);
