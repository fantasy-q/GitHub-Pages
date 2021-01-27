const ________________________________________ = require('../../../js/common').separation;

________________________________________(1); {
  let person = {
    sayName: function (name) {
      console.log(`My name is ${name}`);
    }
  };

  person.sayName('Matt');  // My name is Matt
} ________________________________________(2); {
  let person = {
    sayName(name) {
      console.log(`My name is ${name}`);
    }
  };

  person.sayName('Matt');  // My name is Matt
} ________________________________________(3); {
  let person = {
    name_: '',
    get name() {
      return this.name_;
    },
    set name(name) {
      this.name_ = name;
    },
    sayName() {
      console.log(`My name is ${this.name_}`);
    }
  };

  person.name = 'Matt';
  person.sayName();  // My name is Matt

} ________________________________________(4); {
  const methodKey = 'sayName';

  let person = {
    [methodKey](name) {
      console.log(`My name is ${name}`);
    }
  }

  person.sayName('Matt');  // My name is Matt

}