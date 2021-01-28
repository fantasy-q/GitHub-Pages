function SuperType() {
  this.property = true;
  this.colors = ["red", "blue", "green"];
}

SuperType.prototype.getSuperValue = function () {
  return this.property;
};

function SubType() {
  this.subproperty = false;
}

// inherit from SuperType
SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function () {
  return this.subproperty;
};
let instance = new SubType();
let instanceA = new SubType();
let instanceB = new SubType();

// ----------------------------------------------------------------------
const alert = (exp, res) => {
  console.log(exp + "\n", res);
};

const separation = (param, l = 110) => {
  const Length = l;
  param = String(param ? ` ${param} ` : "");
  let finalstr = param
    .padStart((Length + param.length) / 2, "-")
    .padEnd(Length, "-");
  console.log("\n" + `${finalstr}`);
};
