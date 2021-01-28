function SuperType(name) {
  this.name = name;
}

function SubType() {
  // inherit from SuperType passing in an argument
  SuperType.call(this, "Nicholas");

  // instance property
  this.age = 29;
}

let instance = new SubType();
console.log(instance.name); // "Nicholas";
console.log(instance.age); // 29
