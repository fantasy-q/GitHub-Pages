function SuperType() {
  this.property = true;
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

const common = require('../../../js/common');
const ____________________ = (param) => common.separation(param, common.setting.getTotalLength());
with (common.setting) {
  MAX_RES = 40;
  MAX_EXP = 40;
  PAD_STR = '-';
  isShowLengthInfo = false;
}
const alert = (name, variable) => common.formattingLog(name, variable, common.setting);

____________________('Object');
alert('Object', Object);
alert('Object.prototype', Object.prototype);
alert('Object.prototype.constructor', Object.prototype.constructor);
alert('Object.prototype.constructor == Object',
  Object.prototype.constructor === Object);
____________________('SuperType');
alert('SuperType.prototype', SuperType.prototype);
alert('SuperType.__proto__', SuperType.__proto__);
alert('SuperType.prototype.__proto__', SuperType.prototype.__proto__);
alert('SuperType.prototype.__proto__ === Object.prototype',
  SuperType.prototype.__proto__ === Object.prototype);
____________________('SubType');
alert('SubType.prototype', SubType.prototype);
alert('SubType.__proto__', SubType.__proto__);
alert('SubType.prototype.__proto__', SubType.prototype.__proto__);
alert('SubType.prototype.__proto__ === Object.prototype',
  SubType.prototype.__proto__ === Object.prototype);
alert('SubType.prototype.__proto__ === SuperType.prototype',
  SubType.prototype.__proto__ === SuperType.prototype);
____________________('instance');
alert('instance', instance);
alert('instance.prototype', instance.prototype);
alert('instance.__proto__', instance.__proto__);
alert('instance.__proto__ === SubType.prototype',
  instance.__proto__ === SubType.prototype);
