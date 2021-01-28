
separation('Object')
alert('Object', Object);
alert('Object.prototype', Object.prototype);
alert('Object.prototype.__proto__', Object.prototype.__proto__);
alert('Object.__proto__', Object.__proto__);
alert('Object.__proto__ === Object.prototype', Object.__proto__ === Object.prototype);
alert('Object.__proto__ === Function.prototype', Object.__proto__ === Function.prototype);
alert('Object.__proto__.__proto__', Object.__proto__.__proto__);
alert('Object.__proto__.__proto__ === Object.prototype', Object.__proto__.__proto__ === Object.prototype);
alert('Object.__proto__.__proto__.__proto__', Object.__proto__.__proto__.__proto__);

separation('Function');
alert('Function', Function);
alert('Function.prototype', Function.prototype);
alert('Function.prototype === Object.prototype', Function.prototype === Object.prototype);
alert('Function.prototype.__proto__', Function.prototype.__proto__);
alert('Function.prototype.__proto__ === Object.prototype', Function.prototype.__proto__ === Object.prototype);
alert('Function.__proto__', Function.__proto__);
alert('Function.__proto__ === Object.prototype', Function.__proto__ === Object.prototype);
alert('Function.__proto__ === Function.prototype', Function.__proto__ === Function.prototype);
alert('Function.__proto__.__proto__', Function.__proto__.__proto__);
alert('Function.__proto__.__proto__ === Object.prototype', Function.__proto__.__proto__ === Object.prototype);
alert('Function.__proto__.__proto__.__proto__', Function.__proto__.__proto__.__proto__);

separation('SuperType');
alert('SuperType', SuperType);
alert('SuperType.prototype', SuperType.prototype);
alert('SuperType.prototype.__proto__', SuperType.prototype.__proto__);
alert('SuperType.prototype.__proto__ === Object.prototype', SuperType.prototype.__proto__ === Object.prototype);
alert('SuperType.prototype.__proto__.__proto__', SuperType.prototype.__proto__.__proto__);
alert('SuperType.__proto__', SuperType.__proto__);
alert('SuperType.__proto__ === Function.prototype', SuperType.__proto__ === Function.prototype);
alert('SuperType.__proto__.__proto__', SuperType.__proto__.__proto__);
alert('SuperType.__proto__.__proto__ === Object.prototype', SuperType.__proto__.__proto__ === Object.prototype);
alert('SuperType.__proto__.__proto__.__proto__', SuperType.__proto__.__proto__.__proto__);

separation('SubType');
console.log('SubType.prototype = new SuperType();');
alert('SubType', SubType);
alert('SubType.prototype', SubType.prototype);
alert('SubType.prototype.__proto__', SubType.prototype.__proto__);
alert('SubType.prototype.__proto__ === Object.prototype', SubType.prototype.__proto__ === Object.prototype);
alert('SubType.prototype.__proto__ === SuperType.prototype', SubType.prototype.__proto__ === SuperType.prototype);
alert('SubType.prototype.__proto__.__proto__', SubType.prototype.__proto__.__proto__);
alert('SubType.__proto__', SubType.__proto__);
alert('SubType.__proto__ === Function.prototype', SubType.__proto__ === Function.prototype);
alert('SubType.__proto__.__proto__.__proto__', SubType.__proto__.__proto__.__proto__);


separation('instance');
alert('instance', instance);
alert('instance.prototype', instance.prototype);
alert('instance.__proto__', instance.__proto__);
alert('instance.__proto__ === SubType.prototype', instance.__proto__ === SubType.prototype);
alert('instance.__proto__ === SuperType.prototype', instance.__proto__ === SuperType.prototype);
alert('instance.__proto__.__proto__ === SuperType.prototype', instance.__proto__.__proto__ === SuperType.prototype);
alert('instance.__proto__.__proto__.__proto__ === Object.prototype', instance.__proto__.__proto__.__proto__ === Object.prototype);
alert('instance.__proto__.__proto__.__proto__.__proto__', instance.__proto__.__proto__.__proto__.__proto__);

separation('instance function');
alert('instance.getSubValue === instance.__proto__.getSubValue', instance.getSubValue === instance.__proto__.getSubValue);
alert('instance.getSubValue === SubType.prototype.getSubValue', instance.getSubValue === SubType.prototype.getSubValue);
alert('instance.getSubValue === instance.__proto__.__proto__.getSubValue', instance.getSubValue === instance.__proto__.__proto__.getSubValue);
alert('instance.getSubValue === SuperType.prototype.getSubValue', instance.getSubValue === SuperType.prototype.getSubValue);
alert('instance.getSuperValue === SuperType.prototype.getSuperValue', instance.getSuperValue === SuperType.prototype.getSuperValue);
alert('instance.getSuperValue', instance.getSuperValue);
alert('instance.getSuperValue.prototype', instance.getSuperValue.prototype);
alert('instance.getSuperValue.prototype === Function.prototype', instance.getSuperValue.prototype === Function.prototype);
alert('instance.getSuperValue.prototype === Object.prototype', instance.getSuperValue.prototype === Object.prototype);
alert('instance.getSuperValue.prototype.__proto__ === Object.prototype', instance.getSuperValue.prototype.__proto__ === Object.prototype);
alert('instance.getSuperValue.prototype.constructor', instance.getSuperValue.prototype.constructor);
alert('instance.getSuperValue.prototype.constructor === instance.getSuperValue', instance.getSuperValue.prototype.constructor === instance.getSuperValue);
alert('instance.getSuperValue.__proto__', instance.getSuperValue.__proto__);
alert('instance.getSuperValue.__proto__ === Function.prototype', instance.getSuperValue.__proto__ === Function.prototype);

separation('inherit');
alert('instance.__proto__', instance.__proto__);
alert('SubType.prototype', SubType.prototype);
alert('SuperType.prototype', SuperType.prototype);
alert('instance.property', instance.property);
alert('instance.subproperty', instance.subproperty);
alert('instance.__proto__.property', instance.__proto__.property);
alert('instance.__proto__.subproperty', instance.__proto__.subproperty);
alert('SubType.prototype.property', SubType.prototype.property);
alert('SubType.prototype.subproperty', SubType.prototype.subproperty);
alert('SuperType.prototype.property', SuperType.prototype.property);
alert('SuperType.prototype.subproperty', SuperType.prototype.subproperty);

separation('constructor');
alert('instance.constructor', instance.constructor);
alert('SubType.prototype.constructor', SubType.prototype.constructor);
alert('SuperType.prototype.constructor', SuperType.prototype.constructor);
alert('instance.constructor === SubType.prototype.constructor', instance.constructor === SubType.prototype.constructor);
alert('SuperType.prototype.constructor === SubType.prototype.constructor', SuperType.prototype.constructor === SubType.prototype.constructor);

separation('reference property');
alert('instanceA.colors', instanceA.colors);
alert('instanceB.colors', instanceB.colors);
alert('instanceA.colors === instanceB.colors', instanceA.colors === instanceB.colors);
alert('instance.colors === SubType.prototype.colors', instance.colors === SubType.prototype.colors);
alert('instance.colors === ["red", "green", "blue"]', instance.colors === ["red", "green", "blue"]);
alert('SubType.prototype.colors', SubType.prototype.colors);
alert('SuperType.prototype.colors', SuperType.prototype.colors);