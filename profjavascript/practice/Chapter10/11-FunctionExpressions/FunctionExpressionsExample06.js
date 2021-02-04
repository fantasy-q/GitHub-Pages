// OK
let condition = false;
let sayHi;
if(condition) {
  sayHi = function() {
    console.log("Hi!");
  };
} else {
  sayHi = function() {
    console.log("Yo!");
  };
}

sayHi();
