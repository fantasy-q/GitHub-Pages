function sayHi() {
  console.log("Hello " + arguments[0] + ", " + arguments[1]);
}

sayHi('name');
sayHi('name', 'message');
